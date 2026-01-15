import os
import re
import json
import datetime

# --- 配置 ---
# 文章文件夹路径
ARTICLES_DIR = 'articles'
# 数据库文件路径
DB_FILE = os.path.join('js', 'article-db.js')

def extract_meta(content, tag_name):
    """从 HTML 内容中提取 meta 标签的内容"""
    # 匹配 <meta name="..." content="...">
    pattern = r'<meta\s+name=["\']' + tag_name + r'["\']\s+content=["\'](.*?)["\']'
    match = re.search(pattern, content, re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return ""

def extract_title(content):
    """提取标题，并去掉网站后缀"""
    match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    if match:
        title = match.group(1).strip()
        # 去掉常见的后缀，如 " | StateTaxCalc 2026"
        title = re.split(r'\s+[|\-]\s+StateTaxCalc', title)[0]
        return title
    return "New Article"

def get_existing_urls():
    """读取现有的 DB 文件，找出已经存在的文章 URL"""
    if not os.path.exists(DB_FILE):
        return set()
    
    with open(DB_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 使用正则提取所有 url: '...'
    urls = set(re.findall(r"url:\s*['\"](.*?)['\"]", content))
    return urls

def parse_html_file(filename):
    """解析单个 HTML 文件生成数据对象"""
    filepath = os.path.join(ARTICLES_DIR, filename)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. 基础信息
    file_id = filename.replace('.html', '')
    url = f"{ARTICLES_DIR}/{filename}"
    
    # 2. 提取元数据
    title_en = extract_title(content)
    desc_en = extract_meta(content, 'description')
    keywords = extract_meta(content, 'keywords')
    
    # 3. 尝试查找中文对应文件 (假设规则是 filename-tw.html)
    tw_filename = filename.replace('.html', '-tw.html')
    tw_filepath = os.path.join(ARTICLES_DIR, tw_filename)
    
    title_zh = title_en # 默认
    desc_zh = desc_en   # 默认
    
    if os.path.exists(tw_filepath):
        try:
            with open(tw_filepath, 'r', encoding='utf-8') as f_tw:
                tw_content = f_tw.read()
            title_zh = extract_title(tw_content)
            desc_zh = extract_meta(tw_content, 'description')
        except:
            pass # 读取失败则忽略

    # 4. 生成标签 (从 keywords 逗号分隔转数组)
    tags = [t.strip() for t in keywords.split(',') if t.strip()]
    if not tags:
        tags = ['Update']

    # 5. 生成日期 (使用文件修改时间，或者您可以手动在 HTML 加一个 meta name="date")
    # 这里默认用今天，或者文件修改时间
    file_time = os.path.getmtime(filepath)
    date_str = datetime.datetime.fromtimestamp(file_time).strftime('%Y-%m-%d')

    # 6. 图标处理 (尝试读取自定义 fa-icon meta，否则随机或默认)
    # 建议您在 HTML 里加 <meta name="fa-icon" content="fa-star">
    custom_icon = extract_meta(content, 'fa-icon') 
    icon = custom_icon if custom_icon else 'fa-file-text-o'

    # 7. 构建对象
    entry = {
        'id': file_id,
        'date': date_str,
        'category': { 'en': 'General', 'zh': '通用' }, # 默认分类
        'icon': icon,
        'url': url,
        'title': {
            'en': title_en,
            'zh': title_zh
        },
        'desc': {
            'en': desc_en,
            'zh': desc_zh
        },
        'tags': tags[:3] # 取前3个标签
    }
    
    return entry

def append_to_db(new_entries):
    """将新条目追加到 DB 文件"""
    if not new_entries:
        print("✨ 没有发现新文章。")
        return

    with open(DB_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # 找到数组结束的位置 ];
    # 我们寻找最后一个 ] 符号
    last_bracket_index = content.rfind(']')
    
    if last_bracket_index == -1:
        print("❌ 错误：无法解析 article-db.js 结构。")
        return

    # 准备要插入的字符串
    insertion = ""
    for entry in new_entries:
        # 将 Python 字典转为类似 JS 对象的字符串 (不完全是 JSON，因为为了美观去掉 key 的引号)
        # 这里为了简单直接用 JSON 格式，JS 也能兼容
        json_str = json.dumps(entry, ensure_ascii=False, indent=4)
        # 简单调整格式使其更像之前的代码风格 (可选)
        insertion += f"    ,\n    // Auto-added: {entry['id']}\n"
        insertion += f"    {json_str}"
        
    # 拼接新内容：原有内容直到 ] 之前 + 新内容 + 原有结尾
    new_file_content = content[:last_bracket_index] + insertion + "\n" + content[last_bracket_index:]

    with open(DB_FILE, 'w', encoding='utf-8') as f:
        f.write(new_file_content)
    
    print(f"✅ 成功添加了 {len(new_entries)} 篇文章到数据库！")

def main():
    print(f"📂 正在扫描目录: {ARTICLES_DIR} ...")
    
    if not os.path.exists(ARTICLES_DIR):
        print("❌ 找不到 articles 目录")
        return

    existing_urls = get_existing_urls()
    print(f"📊 现有文章数: {len(existing_urls)}")

    new_entries = []
    
    # 遍历文件
    files = [f for f in os.listdir(ARTICLES_DIR) if f.endswith('.html')]
    # 按修改时间倒序排列（最新的在前面）
    files.sort(key=lambda x: os.path.getmtime(os.path.join(ARTICLES_DIR, x)), reverse=True)

    for file in files:
        # 排除规则：
        # 1. 排除 -tw.html (繁体版由主文件处理)
        # 2. 排除已经存在的 URL
        if file.endswith('-tw.html'):
            continue
        
        full_url = f"{ARTICLES_DIR}/{file}"
        if full_url in existing_urls:
            continue
            
        print(f"🆕 发现新文章: {file}")
        try:
            entry = parse_html_file(file)
            new_entries.append(entry)
        except Exception as e:
            print(f"⚠️ 解析失败 {file}: {e}")

    # 执行写入
    append_to_db(new_entries)

if __name__ == '__main__':
    main()