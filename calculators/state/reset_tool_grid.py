import os
import re

# === 配置区域 ===
# 设置你要处理的文件夹路径 (比如 "." 表示当前目录，或者 "calculators/state")
target_directory = "." 
# =================

def process_html_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # 1. 定义特征标记
        # 我们要替换的是从 "--- 4. Recommendations" 开始，直到 "const states_list" 之前的内容
        start_marker = "// --- 4. Recommendations & State Grid ---"
        end_marker = "const states_list"
        
        # 2. 检查文件里有没有这一段
        if start_marker not in content or end_marker not in content:
            print(f"[跳过] {os.path.basename(filepath)} (未找到目标代码块)")
            return False

        # 3. 构造新的代码块
        # 这段代码只生成 5 个空白的占位框，完全清除了之前的静态数据
        new_code_block = """// --- 4. Recommendations & State Grid ---
        // [已修改] 仅保留 5 个空白占位框，等待 related.js 填充
        function renderRecommendation() {
            const container = document.getElementById('recommendation-grid');
            if (!container) return;
            
            // 生成 5 个空白的灰色占位卡片
            let html = '';
            for(let i=0; i<5; i++) {
                html += `
                <div class="tool-card cursor-default opacity-60">
                    <div class="flex flex-col items-center text-center pt-3 pb-2">
                        <div class="bg-slate-200 dark:bg-slate-700/50 w-12 h-12 rounded-lg mb-3"></div>
                        <div class="w-full px-4 space-y-2">
                            <div class="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-3/4 mx-auto"></div>
                            <div class="h-3 bg-slate-100 dark:bg-slate-800/50 rounded w-1/2 mx-auto"></div>
                        </div>
                    </div>
                </div>
                `;
            }
            container.innerHTML = html;
        }

        """

        # 4. 使用正则进行精准替换
        # re.DOTALL 让 . 可以匹配换行符
        pattern = re.escape(start_marker) + r".*?" + re.escape(end_marker)
        
        # 替换内容（保留 start_marker 和 end_marker 的逻辑结构）
        new_content = re.sub(pattern, new_code_block + end_marker, content, flags=re.DOTALL)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[修改成功] {os.path.basename(filepath)}")
            return True
        else:
            print(f"[未修改] {os.path.basename(filepath)} (正则匹配未发生变化)")
            return False

    except Exception as e:
        print(f"[出错] 处理 {filepath} 时发生错误: {str(e)}")
        return False

# 主程序
print(f"=== 开始清理工具页内嵌代码: {target_directory} ===")

count = 0
modified_count = 0

# 遍历目录 (包括子目录)
for root, dirs, files in os.walk(target_directory):
    for filename in files:
        if filename.endswith(".html"):
            filepath = os.path.join(root, filename)
            count += 1
            if process_html_file(filepath):
                modified_count += 1

print(f"\n=== 处理完成 ===")
print(f"扫描文件: {count}")
print(f"修改文件: {modified_count}")
print("提示：现在这些页面只会显示空白框。")
print("请确保你的 related.js 已经启用，它会自动把这些空白框填满。")