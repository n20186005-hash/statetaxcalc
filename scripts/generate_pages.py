import json
import os
import datetime
from jinja2 import Environment, FileSystemLoader

# ================= 配置区域 =================
# 获取当前脚本所在的绝对路径 (StateTaxCalc2026/scripts/)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)             # StateTaxCalc2026/

# 1. 路径配置
# ★★★ 修正点：这里改回 tax_data.json ★★★
DATA_FILE = os.path.join(SCRIPT_DIR, "tax_data.json") 

TEMPLATE_DIR = os.path.join(PROJECT_ROOT, "articles")  # 模板在 articles 目录
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "articles")    # 输出也在 articles 目录

# 2. 模板文件名 (请确认 articles 目录下有这个文件)
TEMPLATE_FILE = "_template_2026.html"

# 3. 网站域名 (用于 Sitemap)
DOMAIN = "https://statetaxcalc.com" 

# ===========================================

def setup_directories():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

def generate_sitemap(pages):
    sitemap_path = os.path.join(PROJECT_ROOT, "sitemap.xml")
    
    # 基础静态页面
    static_urls = [
        f"{DOMAIN}/",
        f"{DOMAIN}/about.html",
        f"{DOMAIN}/legal.html"
    ]
    
    xml_content = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml_content.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    
    today = datetime.date.today().isoformat()
    
    # 添加静态页
    for url in static_urls:
        xml_content.append(f'  <url><loc>{url}</loc><lastmod>{today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>')
    
    # 添加生成的文章页
    for page in pages:
        # 生成的链接形式: domain.com/articles/xxx.html
        full_url = f"{DOMAIN}/articles/{page}"
        xml_content.append(f'  <url><loc>{full_url}</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>')
        
    xml_content.append('</urlset>')
    
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(xml_content))
    print(f"🗺️  Sitemap generated at: {sitemap_path}")

def main():
    setup_directories()
    
    # 设置 Jinja2 环境
    env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
    
    try:
        template = env.get_template(TEMPLATE_FILE)
    except Exception as e:
        print(f"❌ 错误: 找不到模板文件 '{TEMPLATE_FILE}' 在 '{TEMPLATE_DIR}'")
        print("💡 建议: 请确认你把模板文件放到了 articles 文件夹，并重命名为 '_template_2026.html'")
        return

    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"❌ 错误: 找不到数据文件 '{DATA_FILE}'")
        print("💡 建议: 请确认 tax_data.json 是否在 scripts 文件夹内")
        return

    generated_files = []

    def render_and_save(file_slug, content_data, sources, lang):
        # 决定文件名
        if lang == 'en':
            filename = f"{file_slug}.html"
            alt_filename = f"{file_slug}-tw.html"
            content = content_data['en']
        else:
            filename = f"{file_slug}-tw.html"
            alt_filename = f"{file_slug}.html"
            content = content_data['zh-TW']
        
        # 这里的 filename 传递给模板用于生成 hreflang 和切换按钮
        # 必须带上 'articles/' 前缀，因为切换按钮是相对路径或绝对路径
        url_path = f"articles/{filename}"
        alt_url_path = f"articles/{alt_filename}"

        output_html = template.render(
            lang=lang,
            title=content['title'],
            description=content['description'],
            intro=content['intro'],
            details=content.get('details', ''),
            sources=sources,
            state_name=content.get('state_name', ''),
            filename=url_path,
            alt_filename=alt_url_path 
        )
        
        output_path = os.path.join(OUTPUT_DIR, filename)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(output_html)
        
        generated_files.append(filename)
        print(f"✅ Generated: articles/{filename}")

    print("🚀 Starting generation into /articles folder...")
    
    # 1. 联邦文章
    federal_slug = '2026-federal-tax-brackets'
    render_and_save(federal_slug, data['federal']['content'], data['federal']['sources'], 'en')
    render_and_save(federal_slug, data['federal']['content'], data['federal']['sources'], 'zh-TW')

    # 2. 各州文章
    for state in data['states']:
        file_slug = f"{state['id']}-tax-brackets-2026"
        render_and_save(file_slug, state['content'], state['sources'], 'en')
        render_and_save(file_slug, state['content'], state['sources'], 'zh-TW')

    generate_sitemap(generated_files)
    print(f"\n🎉 完成! 已在 articles/ 目录下生成 {len(generated_files)} 篇文章。")

if __name__ == "__main__":
    main()