import os
import datetime
from xml.dom import minidom

# --- 配置 ---
# 您的网站域名 (必须修改为您的实际域名，结尾不带 /)
BASE_URL = 'https://statetaxcalc.com'

# 要扫描的目录配置
# 格式: '本地目录': '优先级(0.0-1.0)'
SCAN_CONFIG = {
    '.': 1.0,               # 根目录 (index.html, articles.html 等)
    'articles': 0.8,        # 文章目录
    'calculators/state': 0.9 # 州计算器目录 (核心功能)
}

# 排除的文件或目录
EXCLUDE_FILES = ['404.html', 'google', 'template.html']
EXCLUDE_DIRS = ['js', 'css', 'scripts', 'images', '.git', '__pycache__']

def get_lastmod_date(filepath):
    """获取文件最后修改时间，格式 YYYY-MM-DD"""
    timestamp = os.path.getmtime(filepath)
    return datetime.datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d')

def generate_sitemap():
    print(f"🚀 开始生成网站地图，域名: {BASE_URL}")
    
    urls = []
    
    # 1. 遍历配置的目录
    for dir_path, priority in SCAN_CONFIG.items():
        if not os.path.exists(dir_path):
            print(f"⚠️ 警告: 找不到目录 '{dir_path}'，跳过。")
            continue
            
        print(f"📂 正在扫描: {dir_path} ...")
        
        # 如果是根目录 '.'，只扫描根目录下的文件，不递归进子文件夹（子文件夹由 SCAN_CONFIG 其他项处理）
        if dir_path == '.':
            files = [f for f in os.listdir('.') if os.path.isfile(f)]
        else:
            files = os.listdir(dir_path)

        for filename in files:
            # 过滤条件
            if not filename.endswith('.html'):
                continue
            if filename in EXCLUDE_FILES:
                continue
            
            # 构建文件路径
            filepath = os.path.join(dir_path, filename)
            
            # 构建 URL (处理根目录的情况)
            if dir_path == '.':
                # 根目录文件: https://site.com/index.html
                if filename == 'index.html':
                    url_path = '/' # 首页通常就是域名本身
                else:
                    url_path = f'/{filename}'
            else:
                # 子目录文件: https://site.com/articles/xxx.html
                # 注意 Windows 路径分隔符可能需要替换
                clean_dir = dir_path.replace('\\', '/')
                url_path = f'/{clean_dir}/{filename}'

            full_url = BASE_URL + url_path
            lastmod = get_lastmod_date(filepath)
            
            urls.append({
                'loc': full_url,
                'lastmod': lastmod,
                'priority': str(priority),
                'changefreq': 'weekly'
            })
            print(f"   ✅ 添加: {url_path}")

    # 2. 生成 sitemap.xml 内容
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for url in urls:
        xml_content += '  <url>\n'
        xml_content += f'    <loc>{url["loc"]}</loc>\n'
        xml_content += f'    <lastmod>{url["lastmod"]}</lastmod>\n'
        xml_content += f'    <changefreq>{url["changefreq"]}</changefreq>\n'
        xml_content += f'    <priority>{url["priority"]}</priority>\n'
        xml_content += '  </url>\n'
    
    xml_content += '</urlset>'

    # 3. 写入 sitemap.xml
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(xml_content)
    
    print(f"\n🎉 成功生成 sitemap.xml! 包含 {len(urls)} 个链接。")

    # 4. (可选) 生成 sitemap.html 给人类阅读
    generate_html_sitemap(urls)

def generate_html_sitemap(urls):
    """生成一个简单的 HTML 索引页，方便用户查看"""
    html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sitemap - StateTaxCalc</title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
        ul { list-style: none; padding: 0; }
        li { margin: 10px 0; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        a { text-decoration: none; color: #333; font-weight: 500; }
        a:hover { color: #2563eb; }
        .meta { font-size: 0.8em; color: #888; margin-left: 10px; }
        .tag { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 0.7em; margin-right: 8px; color: white;}
        .tag-high { bg-color: #ef4444; background: #2563eb; }
        .tag-med { background: #10b981; }
    </style>
</head>
<body>
    <h1>Site Map</h1>
    <ul>
"""
    # 按 URL 排序
    urls.sort(key=lambda x: x['loc'])
    
    for u in urls:
        # 简单区分下标签颜色
        tag_class = 'tag-high' if float(u['priority']) >= 0.9 else 'tag-med'
        
        # 从 URL 获取显示名称
        name = u['loc'].split('/')[-1]
        if name == '': name = 'Home'
        
        html += f"""        <li>
            <span class="tag {tag_class}">{u['priority']}</span>
            <a href="{u['loc']}">{name}</a>
            <span class="meta">{u['lastmod']}</span>
        </li>
"""
    
    html += """    </ul>
</body>
</html>"""

    with open('sitemap.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("🎉 成功生成 sitemap.html (HTML索引页)。")

if __name__ == '__main__':
    generate_sitemap()