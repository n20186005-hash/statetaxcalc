import json

# ==========================================
# 1. 基础配置：全美50州+DC 的元数据
#    包含：ID, 英文名, 中文名, 官方税务局官网, 是否有州税
# ==========================================
STATES_DB = [
    # --- No Income Tax States (免税州/特殊税制) ---
    {"id": "alaska", "name": "Alaska", "name_cn": "阿拉斯加州", "url": "http://tax.alaska.gov/", "has_tax": False},
    {"id": "florida", "name": "Florida", "name_cn": "佛羅里達州", "url": "https://floridarevenue.com/", "has_tax": False},
    {"id": "nevada", "name": "Nevada", "name_cn": "內華達州", "url": "https://tax.nv.gov/", "has_tax": False},
    {"id": "south-dakota", "name": "South Dakota", "name_cn": "南達科他州", "url": "https://dor.sd.gov/", "has_tax": False},
    {"id": "tennessee", "name": "Tennessee", "name_cn": "田納西州", "url": "https://www.tn.gov/revenue.html", "has_tax": False},
    {"id": "texas", "name": "Texas", "name_cn": "德克薩斯州", "url": "https://comptroller.texas.gov/", "has_tax": False},
    {"id": "washington", "name": "Washington", "name_cn": "華盛頓州", "url": "https://dor.wa.gov/", "has_tax": False},
    {"id": "wyoming", "name": "Wyoming", "name_cn": "懷俄明州", "url": "http://revenue.wyo.gov/", "has_tax": False},
    {"id": "new-hampshire", "name": "New Hampshire", "name_cn": "新罕布什爾州", "url": "https://www.revenue.nh.gov/", "has_tax": False}, # 仅针对利息/股息，通常视为无工资税

    # --- Taxable States (有州税) ---
    {"id": "alabama", "name": "Alabama", "name_cn": "阿拉巴馬州", "url": "https://revenue.alabama.gov/", "has_tax": True},
    {"id": "arizona", "name": "Arizona", "name_cn": "亞利桑那州", "url": "https://azdor.gov/", "has_tax": True},
    {"id": "arkansas", "name": "Arkansas", "name_cn": "阿肯色州", "url": "https://www.dfa.arkansas.gov/", "has_tax": True},
    {"id": "california", "name": "California", "name_cn": "加利福尼亞州", "url": "https://www.ftb.ca.gov/", "has_tax": True},
    {"id": "colorado", "name": "Colorado", "name_cn": "科羅拉多州", "url": "https://tax.colorado.gov/", "has_tax": True},
    {"id": "connecticut", "name": "Connecticut", "name_cn": "康乃狄克州", "url": "https://portal.ct.gov/DRS", "has_tax": True},
    {"id": "delaware", "name": "Delaware", "name_cn": "特拉華州", "url": "https://revenue.delaware.gov/", "has_tax": True},
    {"id": "district-of-columbia", "name": "District of Columbia", "name_cn": "華盛頓特區", "url": "https://otr.cfo.dc.gov/", "has_tax": True},
    {"id": "georgia", "name": "Georgia", "name_cn": "喬治亞州", "url": "https://dor.georgia.gov/", "has_tax": True},
    {"id": "hawaii", "name": "Hawaii", "name_cn": "夏威夷州", "url": "https://tax.hawaii.gov/", "has_tax": True},
    {"id": "idaho", "name": "Idaho", "name_cn": "愛達荷州", "url": "https://tax.idaho.gov/", "has_tax": True},
    {"id": "illinois", "name": "Illinois", "name_cn": "伊利諾伊州", "url": "https://www2.illinois.gov/rev", "has_tax": True},
    {"id": "indiana", "name": "Indiana", "name_cn": "印第安納州", "url": "https://www.in.gov/dor/", "has_tax": True},
    {"id": "iowa", "name": "Iowa", "name_cn": "愛荷華州", "url": "https://tax.iowa.gov/", "has_tax": True},
    {"id": "kansas", "name": "Kansas", "name_cn": "堪薩斯州", "url": "https://www.ksrevenue.org/", "has_tax": True},
    {"id": "kentucky", "name": "Kentucky", "name_cn": "肯塔基州", "url": "https://revenue.ky.gov/", "has_tax": True},
    {"id": "louisiana", "name": "Louisiana", "name_cn": "路易斯安那州", "url": "https://revenue.louisiana.gov/", "has_tax": True},
    {"id": "maine", "name": "Maine", "name_cn": "緬因州", "url": "https://www.maine.gov/revenue/", "has_tax": True},
    {"id": "maryland", "name": "Maryland", "name_cn": "馬里蘭州", "url": "https://www.marylandtaxes.gov/", "has_tax": True},
    {"id": "massachusetts", "name": "Massachusetts", "name_cn": "馬薩諸塞州", "url": "https://www.mass.gov/orgs/massachusetts-department-of-revenue", "has_tax": True},
    {"id": "michigan", "name": "Michigan", "name_cn": "密西根州", "url": "https://www.michigan.gov/taxes", "has_tax": True},
    {"id": "minnesota", "name": "Minnesota", "name_cn": "明尼蘇達州", "url": "https://www.revenue.state.mn.us/", "has_tax": True},
    {"id": "mississippi", "name": "Mississippi", "name_cn": "密西西比州", "url": "https://www.dor.ms.gov/", "has_tax": True},
    {"id": "missouri", "name": "Missouri", "name_cn": "密蘇里州", "url": "https://dor.mo.gov/", "has_tax": True},
    {"id": "montana", "name": "Montana", "name_cn": "蒙大拿州", "url": "https://mats.mt.gov/", "has_tax": True},
    {"id": "nebraska", "name": "Nebraska", "name_cn": "內布拉斯加州", "url": "https://revenue.nebraska.gov/", "has_tax": True},
    {"id": "new-jersey", "name": "New Jersey", "name_cn": "紐澤西州", "url": "https://www.state.nj.us/treasury/taxation/", "has_tax": True},
    {"id": "new-mexico", "name": "New Mexico", "name_cn": "新墨西哥州", "url": "https://www.tax.newmexico.gov/", "has_tax": True},
    {"id": "new-york", "name": "New York", "name_cn": "紐約州", "url": "https://www.tax.ny.gov/", "has_tax": True},
    {"id": "north-carolina", "name": "North Carolina", "name_cn": "北卡羅來納州", "url": "https://www.ncdor.gov/", "has_tax": True},
    {"id": "north-dakota", "name": "North Dakota", "name_cn": "北達科他州", "url": "https://www.nd.gov/tax/", "has_tax": True},
    {"id": "ohio", "name": "Ohio", "name_cn": "俄亥俄州", "url": "https://tax.ohio.gov/", "has_tax": True},
    {"id": "oklahoma", "name": "Oklahoma", "name_cn": "奧克拉荷馬州", "url": "https://oklahoma.gov/tax.html", "has_tax": True},
    {"id": "oregon", "name": "Oregon", "name_cn": "俄勒岡州", "url": "https://www.oregon.gov/dor/", "has_tax": True},
    {"id": "pennsylvania", "name": "Pennsylvania", "name_cn": "賓夕法尼亞州", "url": "https://www.revenue.pa.gov/", "has_tax": True},
    {"id": "rhode-island", "name": "Rhode Island", "name_cn": "羅德島州", "url": "https://tax.ri.gov/", "has_tax": True},
    {"id": "south-carolina", "name": "South Carolina", "name_cn": "南卡羅來納州", "url": "https://dor.sc.gov/", "has_tax": True},
    {"id": "utah", "name": "Utah", "name_cn": "猶他州", "url": "https://tax.utah.gov/", "has_tax": True},
    {"id": "vermont", "name": "Vermont", "name_cn": "佛蒙特州", "url": "https://tax.vermont.gov/", "has_tax": True},
    {"id": "virginia", "name": "Virginia", "name_cn": "維吉尼亞州", "url": "https://www.tax.virginia.gov/", "has_tax": True},
    {"id": "west-virginia", "name": "West Virginia", "name_cn": "西維吉尼亞州", "url": "https://tax.wv.gov/", "has_tax": True},
    {"id": "wisconsin", "name": "Wisconsin", "name_cn": "威斯康星州", "url": "https://www.revenue.wi.gov/", "has_tax": True}
]

# ==========================================
# 2. 联邦数据 (Federal Data)
# ==========================================
FEDERAL_DATA = {
    "id": "federal",
    "sources": [
        {"name": "IRS Revenue Procedure 2025-XX", "url": "https://www.irs.gov/newsroom/inflation-adjustments"},
        {"name": "Internal Revenue Service", "url": "https://www.irs.gov/"}
    ],
    "content": {
        "en": {
            "title": "2026 Federal Tax Brackets Overview",
            "description": "Comprehensive guide to 2026 IRS federal tax brackets, standard deduction changes, and inflation adjustments.",
            "intro": "The IRS has announced annual inflation adjustments for the tax year 2026. These changes prevent 'bracket creep' and may result in lower taxes for filers whose income has not increased significantly.",
            "details": "<ul><li><strong>Standard Deduction (Single):</strong> Projected to increase to approximately $16,100.</li><li><strong>Standard Deduction (Married):</strong> Projected to increase to approximately $32,200.</li><li><strong>Top Tax Rate:</strong> Remains at 37% for the highest income bracket.</li></ul><p>The 2026 tax year generally corresponds to tax returns filed in early 2027.</p>"
        },
        "zh-TW": {
            "title": "2026 聯邦稅率級距總覽",
            "description": "2026 年 IRS 聯邦稅率級距、標準扣除額變化及通膨調整的完整指南。",
            "intro": "IRS 已宣布 2026 納稅年度的年度通膨調整。這些變化旨在防止「級距攀升」，對於收入未顯著增加的申報人來說，可能會降低稅負。",
            "details": "<ul><li><strong>標準扣除額 (單身):</strong> 預計增加至約 $16,100。</li><li><strong>標準扣除額 (已婚):</strong> 預計增加至約 $32,200。</li><li><strong>最高稅率:</strong> 最高收入級距維持在 37%。</li></ul><p>2026 納稅年度通常對應於 2027 年初申報的稅表。</p>"
        }
    }
}

# ==========================================
# 3. 模板生成函数
# ==========================================
def generate_state_content(state):
    """
    根据州是否收税，动态生成内容模板
    """
    sources = [{"name": f"{state['name']} Dept. of Revenue", "url": state['url']}]
    
    # ---------------- 无税州模板 ----------------
    if not state['has_tax']:
        return {
            "id": state['id'],
            "sources": sources,
            "content": {
                "en": {
                    "title": f"{state['name']} State Tax 2026: No Income Tax Guide",
                    "state_name": state['name'],
                    "description": f"Detailed guide to {state['name']} taxes in 2026. {state['name']} is one of the few states with no individual income tax.",
                    "intro": f"Good news for residents: <strong>{state['name']} does not impose a state individual income tax</strong>. This can lead to significant savings compared to other states.",
                    "details": f"<p>While there is no income tax on wages, residents should be aware of other taxes:</p><ul><li><strong>Sales Tax:</strong> {state['name']} relies heavily on sales tax revenue.</li><li><strong>Property Tax:</strong> Property taxes may be higher to offset the lack of income tax.</li></ul><p>Always check with the <a href='{state['url']}' target='_blank'>official department of revenue</a> for the latest updates on other local taxes.</p>"
                },
                "zh-TW": {
                    "title": f"2026 {state['name_cn']}稅務：免所得稅指南",
                    "state_name": state['name_cn'],
                    "description": f"2026 年{state['name_cn']}稅務詳細指南。{state['name_cn']}是少數幾個不徵收個人所得稅的州之一。",
                    "intro": f"居民的好消息：<strong>{state['name_cn']}不徵收州個人所得稅</strong>。與其他州相比，這可以節省大量稅款。",
                    "details": f"<p>雖然工資不徵收所得稅，但居民應注意其他稅種：</p><ul><li><strong>銷售稅 (Sales Tax):</strong> {state['name_cn']} 主要依賴銷售稅收入。</li><li><strong>房產稅 (Property Tax):</strong> 房產稅可能會較高，以彌補所得稅的缺失。</li></ul><p>請務必查看 <a href='{state['url']}' target='_blank'>官方稅務部門</a> 以獲取其他地方稅的最新更新。</p>"
                }
            }
        }
    
    # ---------------- 有税州模板 ----------------
    else:
        # 针对大州的特殊微调 (示例：加州)
        if state['id'] == 'california':
            extra_en = "California has one of the most progressive tax systems in the US, with rates ranging from 1% up to 13.3% (plus mental health service tax for high earners)."
            extra_cn = "加利福尼亞州擁有全美最累進的稅收制度之一，稅率範圍從 1% 到 13.3%（高收入者需額外繳納心理健康服務稅）。"
        elif state['id'] == 'new-york':
            extra_en = "New York state tax rates range from 4% to 10.9%. Residents of New York City are also subject to an additional local city tax."
            extra_cn = "紐約州稅率範圍從 4% 到 10.9%。紐約市居民還需繳納額外的當地城市稅。"
        else:
            extra_en = f"{state['name']} employs a graduated tax rate system. Specific brackets for 2026 are subject to legislative approval."
            extra_cn = f"{state['name_cn']} 採用累進稅率制度。2026 年的具體級距有待立法批准。"

        return {
            "id": state['id'],
            "sources": sources,
            "content": {
                "en": {
                    "title": f"{state['name']} State Tax Brackets & Rates 2026",
                    "state_name": state['name'],
                    "description": f"Updated 2026 income tax brackets and rates for {state['name']}. Calculate your state tax liability.",
                    "intro": f"For the 2026 tax year, {state['name']} continues to adjust its tax policy. {extra_en}",
                    "details": f"<p><strong>Key Tax Features:</strong></p><ul><li><strong>Filing Status:</strong> Brackets vary based on whether you file Single, Married Jointly, or Head of Household.</li><li><strong>Standard Deduction:</strong> Check if {state['name']} allows a standard deduction that mirrors the federal amount.</li></ul><p>For the most accurate tables, please refer to the <a href='{state['url']}' target='_blank'>official {state['name']} Department of Revenue</a> website.</p>"
                },
                "zh-TW": {
                    "title": f"2026 {state['name_cn']}州稅：稅率與級距",
                    "state_name": state['name_cn'],
                    "description": f"2026 年{state['name_cn']}所得稅級距與稅率更新。計算您的州稅負。",
                    "intro": f"對於 2026 納稅年度，{state['name_cn']} 繼續調整其稅務政策。{extra_cn}",
                    "details": f"<p><strong>關鍵稅務特徵：</strong></p><ul><li><strong>申報狀態：</strong> 稅級根據您是單身、已婚聯合申報還是戶主而有所不同。</li><li><strong>標準扣除額：</strong> 請確認 {state['name_cn']} 是否允許與聯邦金額相對應的標準扣除額。</li></ul><p>如需最準確的稅表，請參閱 <a href='{state['url']}' target='_blank'>{state['name_cn']}稅務局官方網站</a>。</p>"
                }
            }
        }

# ==========================================
# 4. 主执行逻辑
# ==========================================
def main():
    full_data = {
        "federal": FEDERAL_DATA,
        "states": []
    }

    print(f"Generating data for {len(STATES_DB)} locations...")
    
    for state_config in STATES_DB:
        state_data = generate_state_content(state_config)
        full_data["states"].append(state_data)

    # 写入 JSON 文件
    output_file = "tax_data.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(full_data, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Success! 'tax_data.json' has been created with Federal + {len(STATES_DB)} States.")

if __name__ == "__main__":
    main()