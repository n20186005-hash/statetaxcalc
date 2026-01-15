import os
from bs4 import BeautifulSoup

# 你的本地路径
base_path = r'C:\Users\Administrator\Desktop\站\1.14更新\statetaxcalc\calculators\state'

def secure_seo_injection():
    # 获取目录下所有HTML文件
    all_files = [f for f in os.listdir(base_path) if f.endswith('.html')]
    
    # 匹配中英文对
    for file_name in all_files:
        file_path = os.path.join(base_path, file_name)
        
        # 定义配对文件名
        if "-tw.html" in file_name:
            is_tw = True
            current_lang = "zh-TW"
            alt_lang = "en"
            pair_file = file_name.replace("-tw.html", ".html")
        else:
            is_tw = False
            current_lang = "en"
            alt_lang = "zh-TW"
            pair_file = file_name.replace(".html", "-tw.html")

        # 检查配对文件是否存在
        if pair_file not in all_files:
            print(f"跳过: {file_name} (未发现配对文件)")
            continue

        with open(file_path, 'r', encoding='utf-8') as f:
            # 使用 html.parser 保持原汁原味，不乱改代码结构
            soup = BeautifulSoup(f, 'html.parser')

        # --- 1. 注入 hreflang 标签 ---
        # 移除可能存在的旧标签，重新注入精准的关联
        for link in soup.find_all("link", rel="alternate"):
            link.decompose()
        
        # 指向自己
        self_link = soup.new_tag("link", rel="alternate", hreflang=current_lang, href=file_name)
        # 指向翻译版
        alt_link = soup.new_tag("link", rel="alternate", hreflang=alt_lang, href=pair_file)
        soup.head.append(self_link)
        soup.head.append(alt_link)

        # --- 2. 修正切换按钮逻辑 (由 JS 切换改为 页面跳转) ---
        select = soup.find("select", id="lang-selector")
        if select:
            # 这里的逻辑是：如果选中的语言不是当前页面的语言，就执行 window.location 跳转
            select['onchange'] = f"if(this.value !== '{current_lang}') window.location.href = (this.value === '{alt_lang}') ? '{pair_file}' : '{file_name}'"
            
            # 确保 select 的默认选中状态与当前页面一致
            for option in select.find_all("option"):
                if option['value'] == current_lang:
                    option['selected'] = 'selected'
                else:
                    if option.has_attr('selected'):
                        del option['selected']

        # --- 3. 确保源代码中的 SEO 关键词 (针对 TW 页面) ---
        # 如果是中文页，确保 title 和描述包含中文，而不是等待 JS 渲染
        if is_tw:
            soup.html['lang'] = "zh-TW"
            # 这里可以根据文件名自动修正 title，或者保持你手动改好的版本不变
            # 脚本默认会保留你 TW 页面里已经写好的中文内容

        # 保存修改，覆盖原文件
        with open(file_path, 'w', encoding='utf-8') as f:
            # formatter="minimal" 确保不会转义非 ASCII 字符（保持中文可见）
            f.write(soup.encode(formatter="minimal").decode('utf-8'))

    print(f"成功处理 {len(all_files)} 个页面。")

if __name__ == "__main__":
    # 执行前建议备份 state 文件夹
    secure_seo_injection()
