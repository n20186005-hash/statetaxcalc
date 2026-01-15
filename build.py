import json
import os
from jinja2 import Environment, FileSystemLoader

# 1. 配置
OUTPUT_DIR = "dist" # 输出文件夹
TEMPLATE_FILE = "template.html"
DATA_FILE = "tax_data.json"

# 确保输出目录存在
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# 2. 加载 Jinja2 环境
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template(TEMPLATE_FILE)

# 3. 读取数据
with open(DATA_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

# 4. 生成页面的函数
def generate_page(page_id, content_data, sources, lang):
    # 决定文件名
    if lang == 'en':
        filename = f"{page_id}.html"
        alt_filename = f"{page_id}-tw.html"
        content = content_data['en']
    else:
        filename = f"{page_id}-tw.html"
        alt_filename = f"{page_id}.html"
        content = content_data['zh-TW']
    
    # 渲染 HTML (这就是 SSR 的本质：在服务器/构建时完成渲染)
    output_html = template.render(
        lang=lang,
        title=content['title'],
        description=content['description'],
        intro=content['intro'],
        details=content.get('details', ''),
        sources=sources,
        filename=filename,
        alt_filename=alt_filename
    )
    
    # 写入文件
    output_path = os.path.join(OUTPUT_DIR, filename)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output_html)
    
    print(f"✅ Generated: {filename}")

# 5. 执行循环
# 处理联邦数据
generate_page('federal-tax-brackets-2026', data['federal']['content'], data['federal']['sources'], 'en')
generate_page('federal-tax-brackets-2026', data['federal']['content'], data['federal']['sources'], 'zh-TW')

# 处理 50 州数据
for state in data['states']:
    page_id = f"{state['id']}-tax-calculator-2026"
    generate_page(page_id, state['content'], state['sources'], 'en')
    generate_page(page_id, state['content'], state['sources'], 'zh-TW')

print(f"\n🎉 批量生成完成！文件位于 {OUTPUT_DIR}/ 文件夹中。")