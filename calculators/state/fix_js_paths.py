import os

# === 配置区域 ===
target_directory = "." 
# =================

def fix_script_path(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # 目标：找到错误的绝对路径引用，替换为正确的相对路径
        # 原始错误写法：src="/scripts/related.js"
        # 正确写法：src="../../scripts/related.js" (往上退两级)
        
        # 我们同时加上 ?v=fixed 参数，强制浏览器刷新缓存，不再用旧代码
        old_tag_1 = 'src="/scripts/related.js"'
        old_tag_2 = 'src="../scripts/related.js"' # 防止有人把文章页的复制过来，层级也是错的
        
        new_tag = 'src="../../scripts/related.js?v=final"'
        
        if old_tag_1 in content:
            new_content = content.replace(old_tag_1, new_tag)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[已修复路径] {os.path.basename(filepath)}")
            return True
            
        elif old_tag_2 in content:
            # 如果是 ../ 这种只退一级的，在 calculators/state 里也是错的，要修正
            new_content = content.replace(old_tag_2, new_tag)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[已修正层级] {os.path.basename(filepath)}")
            return True
            
        else:
            # 检查是否已经是正确的，或者是其他情况
            if 'src="../../scripts/related.js' in content:
                print(f"[无需修改] {os.path.basename(filepath)} 路径已正确")
            else:
                print(f"[跳过] {os.path.basename(filepath)} 未找到相关引用")
            return False

    except Exception as e:
        print(f"[出错] {filepath}: {str(e)}")
        return False

# 主程序
print(f"=== 开始修复 JS 路径: {os.path.abspath(target_directory)} ===")

count = 0
modified_count = 0

for filename in os.listdir(target_directory):
    if filename.endswith(".html"):
        filepath = os.path.join(target_directory, filename)
        count += 1
        if fix_script_path(filepath):
            modified_count += 1

print(f"\n=== 处理完成 ===")
print(f"扫描文件: {count}")
print(f"修复文件: {modified_count}")
print("现在请刷新网页，灰色框应该会被填满了！")