import os
import re
import shutil

# ================= 配置区域 =================
# 获取项目根目录 (假设脚本在 scripts/ 文件夹)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)  # 回退到 StateTaxCalc2026/

# 备份文件夹 (脚本运行时会自动备份修改过的文件，以防万一)
BACKUP_DIR = os.path.join(PROJECT_ROOT, "_backup_" + os.urandom(4).hex())

# -------------------------------------------
# 1. 新的导航栏代码 (Standard Navbar)
# -------------------------------------------
# 这里的 class 需要和你原有的保持一致，我使用了你在 template.html 里的样式
NEW_NAVBAR_HTML = """<div class="hidden md:flex items-center gap-8">
                <a href="/#states" class="nav-link" data-i18n="nav_calculators">Calculators</a>
                <a href="/articles/2026-federal-tax-brackets.html" class="nav-link text-primary" data-i18n="nav_policy">Articles</a>
                <a href="/about.html" class="nav-link" data-i18n="nav_about">About</a>
            </div>"""

# -------------------------------------------
# 2. Sidebar 注入代码 (Related Tools)
# -------------------------------------------
SIDEBAR_INJECTION = """
                <div id="related-tools-container"></div>
                <script src="/scripts/related.js"></script>
"""

# ================= 核心逻辑 =================

def create_backup(file_path):
    """创建文件备份"""
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
    
    # 计算相对路径，保持备份目录结构
    rel_path = os.path.relpath(file_path, PROJECT_ROOT)
    backup_path = os.path.join(BACKUP_DIR, rel_path)
    
    os.makedirs(os.path.dirname(backup_path), exist_ok=True)
    shutil.copy2(file_path, backup_path)

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    modified = False

    # --- 任务 A: 替换 Navbar ---
    # 使用正则寻找 <div class="hidden md:flex items-center gap-8"> ... </div>
    # 这里的正则很宽容，只要找到这个特定的 class 开头，到第一个 </div> 结束
    nav_pattern = re.compile(r'<div class="hidden md:flex items-center gap-8">.*?</div>', re.DOTALL)
    
    if nav_pattern.search(content):
        # 只有当现有内容和新内容不一样时才替换
        current_match = nav_pattern.search(content).group(0)
        # 简单去除空白符比较，避免因为空格不同导致重复修改
        if "".join(current_match.split()) != "".join(NEW_NAVBAR_HTML.split()):
            content = nav_pattern.sub(NEW_NAVBAR_HTML, content)
            modified = True
            print(f"  [Navbar] Updated")

    # --- 任务 B: 注入 Sidebar ---
    # 只有当文件里有 <aside> 标签，且还没有插入过 related-tools-container 时才执行
    if '<aside' in content and '</aside>' in content:
        if 'id="related-tools-container"' not in content:
            # 在 </aside> 标签之前插入代码
            content = content.replace('</aside>', SIDEBAR_INJECTION + '\n            </aside>')
            modified = True
            print(f"  [Sidebar] Injected")
    
    # --- 保存修改 ---
    if modified:
        create_backup(file_path) # 先备份
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Modified: {os.path.basename(file_path)}")
    else:
        # print(f"   Skipped: {os.path.basename(file_path)} (No changes needed)")
        pass

def main():
    print(f"🚀 Starting site update...")
    print(f"📂 Project Root: {PROJECT_ROOT}")
    print(f"📦 Backup Dir:   {BACKUP_DIR} (Safety First!)")
    print("-" * 30)

    # 遍历所有文件
    count = 0
    for root, dirs, files in os.walk(PROJECT_ROOT):
        # 排除备份文件夹、git文件夹
        if "_backup" in root or ".git" in root:
            continue
            
        for file in files:
            if file.endswith(".html"):
                full_path = os.path.join(root, file)
                process_file(full_path)
                count += 1
                
    print("-" * 30)
    print(f"🎉 Complete! Scanned {count} HTML files.")
    print(f"⚠️  Please verify the changes. If broken, restore from: {BACKUP_DIR}")

if __name__ == "__main__":
    main()