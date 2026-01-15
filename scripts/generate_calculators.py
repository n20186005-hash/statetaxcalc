import json
import os
import sys
from jinja2 import Environment, FileSystemLoader, TemplateNotFound, TemplateSyntaxError

# ================= 配置 =================
# 獲取腳本所在目錄
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# 1. 路徑配置
DATA_FILE = os.path.join(SCRIPT_DIR, "states_data.json") 
TEMPLATE_FILE = "_template_calculator.html"

# 嘗試在當前目錄或上級目錄的 calculators 文件夾尋找模板
POSSIBLE_TEMPLATE_DIRS = [
    SCRIPT_DIR,  # 優先找當前目錄
    os.path.join(os.path.dirname(SCRIPT_DIR), "calculators"), # 其次找 ../calculators
    os.path.join(SCRIPT_DIR, "calculators") # 再次找 ./calculators
]

TEMPLATE_DIR = SCRIPT_DIR # 默認值
found_template = False
for path in POSSIBLE_TEMPLATE_DIRS:
    if os.path.exists(os.path.join(path, TEMPLATE_FILE)):
        TEMPLATE_DIR = path
        found_template = True
        break

# 輸出目錄
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "calculators", "state")

# =======================================

def main():
    print(f"📂 Working Directory: {SCRIPT_DIR}")
    if found_template:
        print(f"📄 Template Found at: {os.path.join(TEMPLATE_DIR, TEMPLATE_FILE)}")
    else:
        print(f"⚠️  Template NOT found in search paths.")
    print(f"🎯 Output Directory:   {OUTPUT_DIR}")

    # 確保輸出目錄存在
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"📁 Created output directory: {OUTPUT_DIR}")

    # 1. 加載模板 (增強錯誤捕獲)
    try:
        env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
        template = env.get_template(TEMPLATE_FILE)
    except TemplateNotFound:
        print(f"❌ Error: Template file '{TEMPLATE_FILE}' not found.")
        print(f"   Searched in: {TEMPLATE_DIR}")
        return
    except TemplateSyntaxError as e:
        print(f"❌ Error: Syntax error in template '{TEMPLATE_FILE}'")
        print(f"   Line: {e.lineno}")
        print(f"   Message: {e.message}")
        return
    except Exception as e:
        print(f"❌ Error: Unexpected error loading template.")
        print(f"   Detail: {e}")
        return

    # 2. 加載數據
    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            states_data = json.load(f)
    except Exception as e:
        print(f"❌ Error: Cannot read data file '{DATA_FILE}'")
        print(f"Detail: {e}")
        return

    print(f"🚀 Generating calculator pages for {len(states_data)} states...")

    # 3. 循環生成
    count = 0
    for state in states_data:
        # 生成兩個語言版本
        for lang in ['en', 'zh-TW']:
            
            # --- 準備 Policy 數據 ---
            policy = state.get('policy')
            policy_vars = {}
            
            if policy:
                suffix = '_cn' if lang == 'zh-TW' else '_en'
                p_personal = policy.get('personal', {})
                p_corp = policy.get('corporate', {})
                p_portals = policy.get('portals', {})

                policy_vars = {
                    'POLICY_EXISTS': True,
                    'POLICY_PERSONAL_RATE': p_personal.get(f'rate{suffix}', ''),
                    'POLICY_PERSONAL_NEW': p_personal.get(f'new_rules{suffix}', ''), # 修正: 原代碼為 new_rule 少了s
                    'POLICY_DEADLINE': p_personal.get('deadline', ''),
                    'POLICY_PERSONAL_SRC': p_personal.get('source_url', '#'),
                    'POLICY_CORP_RATE': p_corp.get(f'rate{suffix}', ''),
                    'POLICY_CORP_NEW': p_corp.get(f'new_rules{suffix}', ''), # 修正: 原代碼為 new_rule 少了s
                    'POLICY_CORP_SALES': p_corp.get(f'sales_tax_obligations{suffix}', ''), # 修正: JSON key 是 sales_tax_obligations_en/cn
                    'POLICY_CORP_SRC': p_corp.get('source_url', '#'),
                    'POLICY_LINK_INDIV': p_portals.get('personal_url', '#'), # 修正: JSON key 是 personal_url
                    'POLICY_LINK_CORP': p_portals.get('corporate_url', '#')
                }
            else:
                policy_vars = { 'POLICY_EXISTS': False }

            # --- 準備基本變量 ---
            is_tw = (lang == 'zh-TW')
            state_name_display = state['names']['cn'] if is_tw else state['names']['en']
            
            filename = f"{state['slug']}-tax-calculator.html"
            if is_tw:
                filename = f"{state['slug']}-tax-calculator-tw.html"

            # 渲染
            try:
                html_content = template.render(
                    LANG=lang,
                    STATE_NAME_EN=state['names']['en'],
                    STATE_NAME_DISPLAY=state_name_display,
                    
                    # Meta Info
                    PAGE_TITLE=f"{state_name_display} Tax Calculator 2026 | StateTaxCalc",
                    META_DESC=state['meta'].get('desc_cn' if is_tw else 'desc_en', ''),
                    META_KEYWORDS=state['meta'].get('keywords_cn' if is_tw else 'keywords_en', ''),
                    
                    # Content
                    INTRO_TEXT=state['content'].get('intro_cn' if is_tw else 'intro_en', ''),
                    CAP_GAINS_TEXT=state['content'].get('cap_gains_cn' if is_tw else 'cap_gains_en', ''),
                    RELO_PITCH=state['relocation'].get('pitch_cn' if is_tw else 'pitch_en', ''),
                    RELO_TARGET=state['relocation'].get('target_state', ''),
                    
                    # Calculator Data Injection
                    STATE_JSON_DUMP=json.dumps(state, ensure_ascii=False),
                    MAX_TAX_RATE=state['tax_logic'].get('max_rate_display', ''),

                    # Policy Vars
                    **policy_vars
                )

                output_path = os.path.join(OUTPUT_DIR, filename)
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(html_content)
                count += 1
            except Exception as e:
                print(f"⚠️ Error rendering {state['slug']} ({lang}): {e}")

    print(f"🎉 Success! Generated {count} files in '{OUTPUT_DIR}'")

if __name__ == "__main__":
    main()