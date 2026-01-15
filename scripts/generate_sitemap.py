import os
import datetime

# ================= 配置 =================
# 获取项目根目录 (假设脚本在 scripts/ 文件夹)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR) # 回退一级到 StateTaxCalc2026/

# 你的域名 (一定要改！)
DOMAIN = "https://statetaxcalc.com" 

# 输出文件
SITEMAP_FILE = os.path.join(PROJECT_ROOT, "sitemap.xml")

# ================= 逻辑 =================

def get_html_files(directory):
    """扫描指定目录下的 .html 文件"""
    files = []
    target_dir = os.path.join(PROJECT_ROOT, directory)
    
    if os.path.exists(target_dir):
        for f in os.listdir(target_dir):
            if f.endswith(".html") and not f.startswith("_"): # 排除模板文件
                files.append(os.path.join(directory, f).replace("\\", "/"))
    return files

def main():
    print(f"🔍 Scanning project: {PROJECT_ROOT}")
    
    urls = []
    today = datetime.date.today().isoformat()

    # 1. 扫描根目录的静态页
    root_pages = ["index.html", "about.html", "legal.html"]
    for p in root_pages:
        if os.path.exists(os.path.join(PROJECT_ROOT, p)):
            urls.append({
                "loc": f"{DOMAIN}/{p if p != 'index.html' else ''}", # index.html 通常显示为 /
                "freq": "weekly",
                "prio": "1.0" if p == "index.html" else "0.8"
            })

    # 2. 扫描 articles/ 目录
    article_files = get_html_files("articles")
    for p in article_files:
        urls.append({
            "loc": f"{DOMAIN}/{p}",
            "freq": "monthly",
            "prio": "0.7"
        })

    # 3. 扫描 calculators/state/ 目录
    calc_files = get_html_files("calculators/state") # 注意这里路径
    # 如果你的 calculators 下还有 state 文件夹，需要对应修改 get_html_files 的逻辑
    # 假设 calculators/state 下直接是 html 文件
    
    # 修正逻辑：手动拼接路径
    calc_state_dir = os.path.join(PROJECT_ROOT, "calculators", "state")
    if os.path.exists(calc_state_dir):
        for f in os.listdir(calc_state_dir):
             if f.endswith(".html"):
                urls.append({
                    "loc": f"{DOMAIN}/calculators/state/{f}",
                    "freq": "monthly",
                    "prio": "0.8"
                })

    # 4. 生成 XML
    xml = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    
    for url in urls:
        xml.append(f'  <url>')
        xml.append(f'    <loc>{url["loc"]}</loc>')
        xml.append(f'    <lastmod>{today}</lastmod>')
        xml.append(f'    <changefreq>{url["freq"]}</changefreq>')
        xml.append(f'    <priority>{url["prio"]}</priority>')
        xml.append(f'  </url>')
    
    xml.append('</urlset>')

    # 5. 写入文件
    with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(xml))
    
    print(f"✅ Sitemap generated with {len(urls)} URLs!")
    print(f"📍 Location: {SITEMAP_FILE}")

if __name__ == "__main__":
    main()