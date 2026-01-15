import os
import shutil

# ================= 配置区域 =================
# 脚本所在目录
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# 项目根目录
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
# 备份目录
BACKUP_DIR = os.path.join(PROJECT_ROOT, "_backup_rebrand")

# --- 定义替换规则 (顺序很重要，先长后短) ---
REPLACEMENTS = [
    # 1. 域名替换 (最优先)
    ("https://yourdomain.com", "https://statetaxcalc.com"),
    ("http://yourdomain.com", "https://statetaxcalc.com"),
    ("yourdomain.com", "statetaxcalc.com"),
    
    # 2. HTML Logo 样式替换 (保留颜色样式)
    # 原: Tax<span class="text-primary">Hub</span>
    # 新: State<span class="text-primary">TaxCalc</span>
    ('Tax<span class="text-primary">Hub</span>', 'State<span class="text-primary">TaxCalc</span>'),
    
    # 3. 网页标题和普通文本替换
    # 原: TaxHub 2026 -> 新: StateTaxCalc 2026
    ("TaxHub 2026", "StateTaxCalc 2026"),
    ("TaxHub", "StateTaxCalc"),
    
    # 4. 修正一些可能遗漏的小写
    ("taxhub", "statetaxcalc"),
    
    # 5. 修正邮箱或版权信息 (如果之前写死的话)
    ("TaxHub Team", "StateTaxCalc Team")
]

# 要处理的文件类型
TARGET_EXTENSIONS = ['.html', '.js', '.json', '.py', '.txt', '.xml']

# ================= 核心逻辑 =================

def create_backup(file_path):
    """修改前先备份，以防万一"""
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
    
    rel_path = os.path.relpath(file_path, PROJECT_ROOT)
    backup_path = os.path.join(BACKUP_DIR, rel_path)
    os.makedirs(os.path.dirname(backup_path), exist_ok=True)
    shutil.copy2(file_path, backup_path)

def process_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        print(f"⚠️  跳过非文本文件: {os.path.basename(file_path)}")
        return

    original_content = content
    modified = False

    # 循环执行所有替换规则
    for old_str, new_str in REPLACEMENTS:
        if old_str in content:
            content = content.replace(old_str, new_str)
            modified = True

    if modified:
        create_backup(file_path) # 备份
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ 更新了: {os.path.relpath(file_path, PROJECT_ROOT)}")
    else:
        # print(f"   无变化: {os.path.relpath(file_path, PROJECT_ROOT)}")
        pass

def main():
    print("🚀 开始全站品牌重塑 (Rebranding)...")
    print(f"🎯 目标域名: statetaxcalc.com")
    print(f"🎯 目标品牌: StateTaxCalc")
    print("-" * 30)

    count = 0
    for root, dirs, files in os.walk(PROJECT_ROOT):
        # 忽略备份文件夹和git文件夹
        if "_backup" in root or ".git" in root or "__pycache__" in root:
            continue
        
        # 忽略脚本自己，防止读写冲突
        if root == SCRIPT_DIR and "brand_update.py" in files:
            pass

        for file in files:
            # 检查后缀名
            _, ext = os.path.splitext(file)
            if ext.lower() in TARGET_EXTENSIONS:
                # 排除脚本自己
                if file == "brand_update.py": continue
                
                full_path = os.path.join(root, file)
                process_file(full_path)
                count += 1

    print("-" * 30)
    print(f"🎉 完成！扫描了 {count} 个文件。")
    print(f"⚠️  已自动备份修改前的文件到: {BACKUP_DIR}")
    print("📢 提示: 所有的 'TaxHub' 均已替换为 'StateTaxCalc'")

if __name__ == "__main__":
    main()
