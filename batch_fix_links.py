import os
import re

# 配置：您的文章文件夹路径
# 如果脚本放在 statetaxcalc 根目录下，这里写 'articles'
# 如果脚本直接放在 articles 文件夹里运行，这里写 '.'
TARGET_DIR = 'articles'

def fix_html_content(content, filename):
    original_content = content
    changes = []

    # 1. 修复首页链接 (href="/" -> href="../index.html")
    # 使用正则确保只匹配完整的 href="/"
    new_content = re.sub(r'href="\/"', 'href="../index.html"', content)
    if new_content != content:
        changes.append("修复首页链接 (href='/')")
        content = new_content

    # 2. 修复锚点链接 (href="/#states" -> href="../index.html#states")
    new_content = content.replace('href="/#states"', 'href="../index.html#states"')
    if new_content != content:
        changes.append("修复锚点链接 (href='/#states')")
        content = new_content

    # 3. 修复文章库链接 (导航栏 Articles)
    # 匹配旧的特定链接或通用的 /articles/... 链接，指向新的列表页
    # 场景 A: href="/articles/2026-federal-tax-brackets.html" -> href="../articles.html"
    if 'href="/articles/' in content:
        new_content = re.sub(r'href="\/articles\/[^"]+"', 'href="../articles.html"', content)
        changes.append("修复导航栏文章库链接")
        content = new_content
    # 场景 B: 有时可能是 href="/#policy"
    if 'href="/#policy"' in content:
        new_content = content.replace('href="/#policy"', 'href="../articles.html"')
        changes.append("修复旧版 Policy 链接")
        content = new_content

    # 4. 修复 About 链接
    new_content = content.replace('href="/about.html"', 'href="../about.html"')
    if new_content != content:
        changes.append("修复 About 链接")
        content = new_content

    # 5. 智能修复资源引用 (JS/CSS/Images)
    # 规则：匹配 src="/..." 或 href="/..."，但排除 http, https, //, data:
    # 目标：将开头的 / 替换为 ../
    
    def resource_replacer(match):
        prefix = match.group(1) # src= or href=
        path = match.group(2)   # The path after /
        return f'{prefix}"../{path}"'

    # 匹配 src="/xxx"
    # group 1: src=
    # group 2: 路径内容 (不包含开头的 /)
    pattern_src = r'(src=)"\/(?!(?:http|https|\/\/|data:))([^"]+)"'
    new_content, count_src = re.subn(pattern_src, resource_replacer, content)
    if count_src > 0:
        changes.append(f"修复了 {count_src} 个本地 SRC 资源路径 (如 /scripts/...)")
        content = new_content

    # 匹配 href="/xxx" (主要针对 CSS link，且排除已经是 ../index.html 的情况)
    # 我们前面已经处理了 index.html, about.html, articles.html，这里主要抓漏网之鱼，比如 /styles/main.css
    # 为了安全，我们限定后缀名为 .css, .js, .png, .jpg, .svg
    pattern_href = r'(href=)"\/(?!(?:http|https|\/\/|data:))([^"]+\.(?:css|js|png|jpg|svg))"'
    new_content, count_href = re.subn(pattern_href, resource_replacer, content)
    if count_href > 0:
        changes.append(f"修复了 {count_href} 个本地 HREF 资源路径 (如 /css/...)")
        content = new_content

    return content, changes

def main():
    # 检查目录是否存在
    if not os.path.exists(TARGET_DIR):
        print(f"❌ 错误：找不到目录 '{TARGET_DIR}'。请确保您在 statetaxcalc 根目录运行此脚本，或者修改脚本中的 TARGET_DIR。")
        return

    print(f"📂 开始扫描目录: {TARGET_DIR} ...")
    print("-" * 50)

    processed_count = 0
    modified_count = 0

    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                processed_count += 1
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    new_content, changes = fix_html_content(content, file)

                    if changes:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"✅ 已修改: {file}")
                        for change in changes:
                            print(f"   └─ {change}")
                        modified_count += 1
                    else:
                        # print(f"⚪ 跳过 (无变化): {file}")
                        pass

                except Exception as e:
                    print(f"❌ 处理文件 {file} 时出错: {e}")

    print("-" * 50)
    print(f"🎉 完成！扫描了 {processed_count} 个文件，修改了 {modified_count} 个文件。")

if __name__ == '__main__':
    main()