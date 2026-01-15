import os
import re

# === 配置区域 ===
target_directory = "." 
# =================

# 1. 定义标准的“空壳”HTML
# 这是一个完美的、干净的紫色主题框架，里面是空的，专门等着 JS 来填
clean_html_structure = """
<section class="w-full mt-8">
    <div class="glass rounded-2xl p-6 shadow-soft border-t-4 border-t-purple-500">
        <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <i class="fa fa-star text-yellow-400"></i> <span data-i18n="rec_title">Recommended Tools</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4" id="recommendation-grid">
        </div>
    </div>
</section>
"""

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        original_content = content
        
        # --- 步骤 A: 删除旧的 Recommended Tools 区域 ---
        # 我们寻找特征：包含 "Recommended Tools" 或 "推薦工具" 的那个 glass div
        # 使用正则非贪婪匹配，尝试锁定整个紫色卡片区域
        
        # 匹配模式：寻找 border-t-purple-500 (紫色边框) 的 div 及其内容
        # 注意：这需要HTML结构比较标准。如果匹配失败，我们尝试另一种更暴力的特征。
        
        # 方案：找到包含 id="recommendation-grid" 的父级 section 或 div
        # 我们先尝试定位这个 ID，然后替换它周围的容器
        
        if 'id="recommendation-grid"' in content:
            # 找到这个 ID 所在的 <div class="glass ..."> ... </div> 结构
            # 为了保险，我们用简单的字符串定位替换，虽然不如正则灵活，但更稳健
            
            # 1. 尝试定位旧的 Grid 区域
            # 大多数文件里它长这样： <div class="glass ... border-t-purple-500"> ... </div>
            # 我们用正则找到这个块的开头和结尾可能比较难，所以我们直接定位 "Recommended Tools" 标题附近
            
            # 使用更通用的替换策略：
            # 找到 <div ... border-t-purple-500"> ... </div> 这个特征
            pattern_block = r'<div class="glass[^>]*border-t-purple-500".*?id="recommendation-grid".*?</div>\s*</div>'
            
            # 如果正则太难匹配，我们直接在文件底部找位置插入，把旧的删掉
            # 简化策略：
            # 1. 删掉旧的 <div ... id="recommendation-grid"> ... </div> 及其父级
            # 2. 修正 JS 路径
            
            pass # 这种解析太复杂容易误删，我们换个思路
            
        # === 简单粗暴方案：直接替换 ===
        
        # 1. 修正 JS 路径 (这是最重要的，路径不对什么都白搭)
        # 只要是引用 related.js 的，统统改成正确的相对路径
        js_pattern = r'<script src=".*?related\.js.*?"></script>'
        content = re.sub(js_pattern, '<script src="../../scripts/related.js?v=rebuild"></script>', content)
        
        # 2. 替换推荐工具区域
        # 我们查找那个包含 "recommendation-grid" 的容器。
        # 如果你的文件格式比较统一，我们可以尝试直接替换整段
        
        # 尝试匹配旧的 Recommendations 区域 (基于你上传的文件特征)
        # 这是一个比较宽泛的匹配，涵盖了从 <section> 开始到结束
        # 或者直接找那个 div
        
        # 我们用一个特征字符串来定位：
        target_marker = 'id="recommendation-grid"'
        
        if target_marker in content:
            # 如果存在旧的 Grid，我们需要找到它的外层容器并替换
            # 由于正则匹配嵌套 div 很难，我们采用 "插入覆盖" 法
            
            # 找到 "Recommended Tools" 或 "推薦工具" 的标题位置
            # 然后向上找 <div class="glass...
            
            # 让我们尝试用你之前上传的文件里的特征代码块进行替换
            # 旧代码特征：包含 border-t-purple-500
            
            # 正则：匹配 <div class="glass ... border-t-purple-500"> ... </div> 
            # 注意：这假设该 div 内部没有其他同名 div 嵌套，通常是安全的
            block_pattern = r'<div class="glass[^>]*border-t-purple-500">.*?id="recommendation-grid".*?</div>\s*</div>'
            
            # 执行替换：把旧块换成新壳子
            new_content = re.sub(block_pattern, clean_html_structure, content, flags=re.DOTALL)
            
            # 如果上面的正则没匹配到 (可能是 HTML 结构乱了)，我们尝试只清空 grid 内部
            if new_content == content:
                 # 备选方案：只清空 grid 内部，并确保 ID 存在
                 print(f"  -> {os.path.basename(filepath)}: 结构复杂，尝试直接清空 Grid 内容...")
                 grid_pattern = r'(<div[^>]*id="recommendation-grid"[^>]*>).*?(</div>)'
                 new_content = re.sub(grid_pattern, r'\1\2', content, flags=re.DOTALL)
            
            content = new_content

        # 写入文件
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[重构成功] {os.path.basename(filepath)}")
            return True
        else:
            print(f"[无需修改] {os.path.basename(filepath)}")
            return False

    except Exception as e:
        print(f"[出错] {filepath}: {str(e)}")
        return False

# 主程序
print("=== 开始重构推荐工具区域 ===")
count = 0
for filename in os.listdir(target_directory):
    if filename.endswith(".html"):
        filepath = os.path.join(target_directory, filename)
        if process_file(filepath):
            count += 1

print(f"\n=== 处理完成，共重构 {count} 个页面 ===")
print("1. 旧的推荐区域已被替换为干净的空壳。")
print("2. JS 路径已修正为 ../../scripts/related.js")
print("请刷新网页查看效果。")