/**
 * TAX_ARTICLES_DB
 * 配置说明：
 * 1. 所有的 url 路径请使用相对路径 "articles/文件名.html" (不要加开头的 /)。
 * 2. 确保您的 HTML 文件名与这里的 url 完全对应。
 */

window.TAX_ARTICLES_DB = [
    {
        id: '2026-federal-brackets',
        date: '2026-01-12',
        category: { en: 'Policy', zh: '政策更新' },
        icon: 'fa-line-chart', 
        url: 'articles/2026-federal-tax-brackets.html', // 确保您的文件夹里有这个文件
        title: {
            en: '2026 Standard Deduction Increases',
            zh: '2026年聯邦標準扣除額大幅調升'
        },
        desc: {
            en: 'The IRS has announced significant inflation adjustments for the 2026 tax year. See how this affects your filing status.',
            zh: 'IRS 宣佈了針對 2026 納稅年度的重大通脹調整。看看這將如何影響您的報稅身份。'
        },
        tags: ['Federal', 'IRS', '2026']
    },
    {
        id: 'florida-no-income-tax',
        date: '2026-01-08',
        category: { en: 'State Tax', zh: '州稅指南' },
        icon: 'fa-sun-o',
        url: 'articles/florida-tax-brackets-2026.html', // 这对应您之前上传的文件名
        title: {
            en: 'Florida State Tax 2026: No Income Tax Guide',
            zh: '2026 佛羅里達州稅務指南：免所得稅詳解'
        },
        desc: {
            en: 'Detailed guide to Florida taxes. While there is no income tax on wages, residents should be aware of sales and property taxes.',
            zh: '佛羅里達州稅務詳細指南。雖然沒有工資所得稅，但居民應注意銷售稅和財產稅。'
        },
        tags: ['Florida', 'Relocation', 'No-Tax']
    },
    {
        id: '401k-limits-2026',
        date: '2026-01-05',
        category: { en: 'Planning', zh: '稅務籌劃' },
        icon: 'fa-piggy-bank',
        url: 'articles/401k-limits-2026.html', // 请确保此文件存在
        title: {
            en: 'Maximizing Your 401(k) in 2026',
            zh: '2026年如何最大化您的 401(k) 收益'
        },
        desc: {
            en: 'New contribution limits allow for greater tax-deferred savings. Here is a strategy guide for high earners.',
            zh: '新的繳款限額允許更多的延稅儲蓄。這是一份針對高收入者的策略指南。'
        },
        tags: ['401k', 'Retirement', 'Savings']
    },
    {
        id: 'texas-move-guide',
        date: '2025-12-28',
        category: { en: 'Relocation', zh: '搬遷指南' },
        icon: 'fa-truck',
        url: 'articles/texas-tax-guide.html', // 请确保此文件存在
        title: {
            en: 'Moving to Texas? Tax Implications Explained',
            zh: '搬到德克薩斯州？稅務影響全解析'
        },
        desc: {
            en: 'Understand the tax benefits and hidden costs of moving to the Lone Star State in 2026.',
            zh: '了解 2026 年搬到孤星州的稅務優惠和隱性成本。'
        },
        tags: ['Texas', 'Relocation']
    }
    ,
    // Auto-added: _template_2026
    {
    "id": "_template_2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/_template_2026.html",
    "title": {
        "en": "{{ title }}",
        "zh": "{{ title }}"
    },
    "desc": {
        "en": "{{ description }}",
        "zh": "{{ description }}"
    },
    "tags": [
        "2026 tax brackets",
        "{{ state_name if state_name else"
    ]
}    ,
    // Auto-added: wyoming-tax-brackets-2026
    {
    "id": "wyoming-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/wyoming-tax-brackets-2026.html",
    "title": {
        "en": "Wyoming State Tax 2026: No Income Tax Guide",
        "zh": "2026 懷俄明州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to Wyoming taxes in 2026. Wyoming is one of the few states with no individual income tax.",
        "zh": "2026 年懷俄明州稅務詳細指南。懷俄明州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "Wyoming tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: wisconsin-tax-brackets-2026
    {
    "id": "wisconsin-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/wisconsin-tax-brackets-2026.html",
    "title": {
        "en": "Wisconsin State Tax Brackets & Rates 2026",
        "zh": "2026 威斯康星州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Wisconsin. Calculate your state tax liability.",
        "zh": "2026 年威斯康星州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Wisconsin tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: west-virginia-tax-brackets-2026
    {
    "id": "west-virginia-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/west-virginia-tax-brackets-2026.html",
    "title": {
        "en": "West Virginia State Tax Brackets & Rates 2026",
        "zh": "2026 西維吉尼亞州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for West Virginia. Calculate your state tax liability.",
        "zh": "2026 年西維吉尼亞州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "West Virginia tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: washington-tax-brackets-2026
    {
    "id": "washington-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/washington-tax-brackets-2026.html",
    "title": {
        "en": "Washington State Tax 2026: No Income Tax Guide",
        "zh": "2026 華盛頓州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to Washington taxes in 2026. Washington is one of the few states with no individual income tax.",
        "zh": "2026 年華盛頓州稅務詳細指南。華盛頓州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "Washington tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: virginia-tax-brackets-2026
    {
    "id": "virginia-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/virginia-tax-brackets-2026.html",
    "title": {
        "en": "Virginia State Tax Brackets & Rates 2026",
        "zh": "2026 維吉尼亞州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Virginia. Calculate your state tax liability.",
        "zh": "2026 年維吉尼亞州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Virginia tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: vermont-tax-brackets-2026
    {
    "id": "vermont-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/vermont-tax-brackets-2026.html",
    "title": {
        "en": "Vermont State Tax Brackets & Rates 2026",
        "zh": "2026 佛蒙特州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Vermont. Calculate your state tax liability.",
        "zh": "2026 年佛蒙特州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Vermont tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: utah-tax-brackets-2026
    {
    "id": "utah-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/utah-tax-brackets-2026.html",
    "title": {
        "en": "Utah State Tax Brackets & Rates 2026",
        "zh": "2026 猶他州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Utah. Calculate your state tax liability.",
        "zh": "2026 年猶他州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Utah tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: texas-tax-brackets-2026
    {
    "id": "texas-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/texas-tax-brackets-2026.html",
    "title": {
        "en": "Texas State Tax 2026: No Income Tax Guide",
        "zh": "2026 德克薩斯州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to Texas taxes in 2026. Texas is one of the few states with no individual income tax.",
        "zh": "2026 年德克薩斯州稅務詳細指南。德克薩斯州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "Texas tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: tennessee-tax-brackets-2026
    {
    "id": "tennessee-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/tennessee-tax-brackets-2026.html",
    "title": {
        "en": "Tennessee State Tax 2026: No Income Tax Guide",
        "zh": "2026 田納西州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to Tennessee taxes in 2026. Tennessee is one of the few states with no individual income tax.",
        "zh": "2026 年田納西州稅務詳細指南。田納西州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "Tennessee tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: south-dakota-tax-brackets-2026
    {
    "id": "south-dakota-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/south-dakota-tax-brackets-2026.html",
    "title": {
        "en": "South Dakota State Tax 2026: No Income Tax Guide",
        "zh": "2026 南達科他州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to South Dakota taxes in 2026. South Dakota is one of the few states with no individual income tax.",
        "zh": "2026 年南達科他州稅務詳細指南。南達科他州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "South Dakota tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: south-carolina-tax-brackets-2026
    {
    "id": "south-carolina-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/south-carolina-tax-brackets-2026.html",
    "title": {
        "en": "South Carolina State Tax Brackets & Rates 2026",
        "zh": "2026 南卡羅來納州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for South Carolina. Calculate your state tax liability.",
        "zh": "2026 年南卡羅來納州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "South Carolina tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: rhode-island-tax-brackets-2026
    {
    "id": "rhode-island-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/rhode-island-tax-brackets-2026.html",
    "title": {
        "en": "Rhode Island State Tax Brackets & Rates 2026",
        "zh": "2026 羅德島州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Rhode Island. Calculate your state tax liability.",
        "zh": "2026 年羅德島州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Rhode Island tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: pennsylvania-tax-brackets-2026
    {
    "id": "pennsylvania-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/pennsylvania-tax-brackets-2026.html",
    "title": {
        "en": "Pennsylvania State Tax Brackets & Rates 2026",
        "zh": "2026 賓夕法尼亞州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Pennsylvania. Calculate your state tax liability.",
        "zh": "2026 年賓夕法尼亞州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Pennsylvania tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: oregon-tax-brackets-2026
    {
    "id": "oregon-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/oregon-tax-brackets-2026.html",
    "title": {
        "en": "Oregon State Tax Brackets & Rates 2026",
        "zh": "2026 俄勒岡州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Oregon. Calculate your state tax liability.",
        "zh": "2026 年俄勒岡州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Oregon tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: oklahoma-tax-brackets-2026
    {
    "id": "oklahoma-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/oklahoma-tax-brackets-2026.html",
    "title": {
        "en": "Oklahoma State Tax Brackets & Rates 2026",
        "zh": "2026 奧克拉荷馬州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Oklahoma. Calculate your state tax liability.",
        "zh": "2026 年奧克拉荷馬州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Oklahoma tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: ohio-tax-brackets-2026
    {
    "id": "ohio-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/ohio-tax-brackets-2026.html",
    "title": {
        "en": "Ohio State Tax Brackets & Rates 2026",
        "zh": "2026 俄亥俄州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Ohio. Calculate your state tax liability.",
        "zh": "2026 年俄亥俄州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Ohio tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: north-dakota-tax-brackets-2026
    {
    "id": "north-dakota-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/north-dakota-tax-brackets-2026.html",
    "title": {
        "en": "North Dakota State Tax Brackets & Rates 2026",
        "zh": "2026 北達科他州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for North Dakota. Calculate your state tax liability.",
        "zh": "2026 年北達科他州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "North Dakota tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: north-carolina-tax-brackets-2026
    {
    "id": "north-carolina-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/north-carolina-tax-brackets-2026.html",
    "title": {
        "en": "North Carolina State Tax Brackets & Rates 2026",
        "zh": "2026 北卡羅來納州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for North Carolina. Calculate your state tax liability.",
        "zh": "2026 年北卡羅來納州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "North Carolina tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: new-york-tax-brackets-2026
    {
    "id": "new-york-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/new-york-tax-brackets-2026.html",
    "title": {
        "en": "New York State Tax Brackets & Rates 2026",
        "zh": "2026 紐約州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for New York. Calculate your state tax liability.",
        "zh": "2026 年紐約州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "New York tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: new-mexico-tax-brackets-2026
    {
    "id": "new-mexico-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/new-mexico-tax-brackets-2026.html",
    "title": {
        "en": "New Mexico State Tax Brackets & Rates 2026",
        "zh": "2026 新墨西哥州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for New Mexico. Calculate your state tax liability.",
        "zh": "2026 年新墨西哥州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "New Mexico tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: new-jersey-tax-brackets-2026
    {
    "id": "new-jersey-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/new-jersey-tax-brackets-2026.html",
    "title": {
        "en": "New Jersey State Tax Brackets & Rates 2026",
        "zh": "2026 紐澤西州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for New Jersey. Calculate your state tax liability.",
        "zh": "2026 年紐澤西州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "New Jersey tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: new-hampshire-tax-brackets-2026
    {
    "id": "new-hampshire-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/new-hampshire-tax-brackets-2026.html",
    "title": {
        "en": "New Hampshire State Tax 2026: No Income Tax Guide",
        "zh": "2026 新罕布什爾州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to New Hampshire taxes in 2026. New Hampshire is one of the few states with no individual income tax.",
        "zh": "2026 年新罕布什爾州稅務詳細指南。新罕布什爾州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "New Hampshire tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: nevada-tax-brackets-2026
    {
    "id": "nevada-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/nevada-tax-brackets-2026.html",
    "title": {
        "en": "Nevada State Tax 2026: No Income Tax Guide",
        "zh": "2026 內華達州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to Nevada taxes in 2026. Nevada is one of the few states with no individual income tax.",
        "zh": "2026 年內華達州稅務詳細指南。內華達州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "Nevada tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: nebraska-tax-brackets-2026
    {
    "id": "nebraska-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/nebraska-tax-brackets-2026.html",
    "title": {
        "en": "Nebraska State Tax Brackets & Rates 2026",
        "zh": "2026 內布拉斯加州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Nebraska. Calculate your state tax liability.",
        "zh": "2026 年內布拉斯加州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Nebraska tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: montana-tax-brackets-2026
    {
    "id": "montana-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/montana-tax-brackets-2026.html",
    "title": {
        "en": "Montana State Tax Brackets & Rates 2026",
        "zh": "2026 蒙大拿州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Montana. Calculate your state tax liability.",
        "zh": "2026 年蒙大拿州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Montana tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: missouri-tax-brackets-2026
    {
    "id": "missouri-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/missouri-tax-brackets-2026.html",
    "title": {
        "en": "Missouri State Tax Brackets & Rates 2026",
        "zh": "2026 密蘇里州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Missouri. Calculate your state tax liability.",
        "zh": "2026 年密蘇里州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Missouri tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: mississippi-tax-brackets-2026
    {
    "id": "mississippi-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/mississippi-tax-brackets-2026.html",
    "title": {
        "en": "Mississippi State Tax Brackets & Rates 2026",
        "zh": "2026 密西西比州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Mississippi. Calculate your state tax liability.",
        "zh": "2026 年密西西比州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Mississippi tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: minnesota-tax-brackets-2026
    {
    "id": "minnesota-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/minnesota-tax-brackets-2026.html",
    "title": {
        "en": "Minnesota State Tax Brackets & Rates 2026",
        "zh": "2026 明尼蘇達州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Minnesota. Calculate your state tax liability.",
        "zh": "2026 年明尼蘇達州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Minnesota tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: michigan-tax-brackets-2026
    {
    "id": "michigan-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/michigan-tax-brackets-2026.html",
    "title": {
        "en": "Michigan State Tax Brackets & Rates 2026",
        "zh": "2026 密西根州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Michigan. Calculate your state tax liability.",
        "zh": "2026 年密西根州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Michigan tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: massachusetts-tax-brackets-2026
    {
    "id": "massachusetts-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/massachusetts-tax-brackets-2026.html",
    "title": {
        "en": "Massachusetts State Tax Brackets & Rates 2026",
        "zh": "2026 馬薩諸塞州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Massachusetts. Calculate your state tax liability.",
        "zh": "2026 年馬薩諸塞州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Massachusetts tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: maryland-tax-brackets-2026
    {
    "id": "maryland-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/maryland-tax-brackets-2026.html",
    "title": {
        "en": "Maryland State Tax Brackets & Rates 2026",
        "zh": "2026 馬里蘭州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Maryland. Calculate your state tax liability.",
        "zh": "2026 年馬里蘭州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Maryland tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: maine-tax-brackets-2026
    {
    "id": "maine-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/maine-tax-brackets-2026.html",
    "title": {
        "en": "Maine State Tax Brackets & Rates 2026",
        "zh": "2026 緬因州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Maine. Calculate your state tax liability.",
        "zh": "2026 年緬因州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Maine tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: louisiana-tax-brackets-2026
    {
    "id": "louisiana-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/louisiana-tax-brackets-2026.html",
    "title": {
        "en": "Louisiana State Tax Brackets & Rates 2026",
        "zh": "2026 路易斯安那州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Louisiana. Calculate your state tax liability.",
        "zh": "2026 年路易斯安那州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Louisiana tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: kentucky-tax-brackets-2026
    {
    "id": "kentucky-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/kentucky-tax-brackets-2026.html",
    "title": {
        "en": "Kentucky State Tax Brackets & Rates 2026",
        "zh": "2026 肯塔基州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Kentucky. Calculate your state tax liability.",
        "zh": "2026 年肯塔基州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Kentucky tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: kansas-tax-brackets-2026
    {
    "id": "kansas-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/kansas-tax-brackets-2026.html",
    "title": {
        "en": "Kansas State Tax Brackets & Rates 2026",
        "zh": "2026 堪薩斯州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Kansas. Calculate your state tax liability.",
        "zh": "2026 年堪薩斯州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Kansas tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: iowa-tax-brackets-2026
    {
    "id": "iowa-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/iowa-tax-brackets-2026.html",
    "title": {
        "en": "Iowa State Tax Brackets & Rates 2026",
        "zh": "2026 愛荷華州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Iowa. Calculate your state tax liability.",
        "zh": "2026 年愛荷華州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Iowa tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: indiana-tax-brackets-2026
    {
    "id": "indiana-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/indiana-tax-brackets-2026.html",
    "title": {
        "en": "Indiana State Tax Brackets & Rates 2026",
        "zh": "2026 印第安納州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Indiana. Calculate your state tax liability.",
        "zh": "2026 年印第安納州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Indiana tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: illinois-tax-brackets-2026
    {
    "id": "illinois-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/illinois-tax-brackets-2026.html",
    "title": {
        "en": "Illinois State Tax Brackets & Rates 2026",
        "zh": "2026 伊利諾伊州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Illinois. Calculate your state tax liability.",
        "zh": "2026 年伊利諾伊州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Illinois tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: idaho-tax-brackets-2026
    {
    "id": "idaho-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/idaho-tax-brackets-2026.html",
    "title": {
        "en": "Idaho State Tax Brackets & Rates 2026",
        "zh": "2026 愛達荷州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Idaho. Calculate your state tax liability.",
        "zh": "2026 年愛達荷州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Idaho tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: hawaii-tax-brackets-2026
    {
    "id": "hawaii-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/hawaii-tax-brackets-2026.html",
    "title": {
        "en": "Hawaii State Tax Brackets & Rates 2026",
        "zh": "2026 夏威夷州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Hawaii. Calculate your state tax liability.",
        "zh": "2026 年夏威夷州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Hawaii tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: georgia-tax-brackets-2026
    {
    "id": "georgia-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/georgia-tax-brackets-2026.html",
    "title": {
        "en": "Georgia State Tax Brackets & Rates 2026",
        "zh": "2026 喬治亞州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Georgia. Calculate your state tax liability.",
        "zh": "2026 年喬治亞州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Georgia tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: district-of-columbia-tax-brackets-2026
    {
    "id": "district-of-columbia-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/district-of-columbia-tax-brackets-2026.html",
    "title": {
        "en": "District of Columbia State Tax Brackets & Rates 2026",
        "zh": "2026 華盛頓特區州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for District of Columbia. Calculate your state tax liability.",
        "zh": "2026 年華盛頓特區所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "District of Columbia tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: delaware-tax-brackets-2026
    {
    "id": "delaware-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/delaware-tax-brackets-2026.html",
    "title": {
        "en": "Delaware State Tax Brackets & Rates 2026",
        "zh": "2026 特拉華州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Delaware. Calculate your state tax liability.",
        "zh": "2026 年特拉華州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Delaware tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: connecticut-tax-brackets-2026
    {
    "id": "connecticut-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/connecticut-tax-brackets-2026.html",
    "title": {
        "en": "Connecticut State Tax Brackets & Rates 2026",
        "zh": "2026 康乃狄克州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Connecticut. Calculate your state tax liability.",
        "zh": "2026 年康乃狄克州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Connecticut tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: colorado-tax-brackets-2026
    {
    "id": "colorado-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/colorado-tax-brackets-2026.html",
    "title": {
        "en": "Colorado State Tax Brackets & Rates 2026",
        "zh": "2026 科羅拉多州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Colorado. Calculate your state tax liability.",
        "zh": "2026 年科羅拉多州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Colorado tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: california-tax-brackets-2026
    {
    "id": "california-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/california-tax-brackets-2026.html",
    "title": {
        "en": "California State Tax Brackets & Rates 2026",
        "zh": "2026 加利福尼亞州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for California. Calculate your state tax liability.",
        "zh": "2026 年加利福尼亞州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "California tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: arkansas-tax-brackets-2026
    {
    "id": "arkansas-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/arkansas-tax-brackets-2026.html",
    "title": {
        "en": "Arkansas State Tax Brackets & Rates 2026",
        "zh": "2026 阿肯色州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Arkansas. Calculate your state tax liability.",
        "zh": "2026 年阿肯色州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Arkansas tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: arizona-tax-brackets-2026
    {
    "id": "arizona-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/arizona-tax-brackets-2026.html",
    "title": {
        "en": "Arizona State Tax Brackets & Rates 2026",
        "zh": "2026 亞利桑那州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Arizona. Calculate your state tax liability.",
        "zh": "2026 年亞利桑那州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Arizona tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: alaska-tax-brackets-2026
    {
    "id": "alaska-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/alaska-tax-brackets-2026.html",
    "title": {
        "en": "Alaska State Tax 2026: No Income Tax Guide",
        "zh": "2026 阿拉斯加州稅務：免所得稅指南"
    },
    "desc": {
        "en": "Detailed guide to Alaska taxes in 2026. Alaska is one of the few states with no individual income tax.",
        "zh": "2026 年阿拉斯加州稅務詳細指南。阿拉斯加州是少數幾個不徵收個人所得稅的州之一。"
    },
    "tags": [
        "2026 tax brackets",
        "Alaska tax",
        "tax calculator 2026"
    ]
}    ,
    // Auto-added: alabama-tax-brackets-2026
    {
    "id": "alabama-tax-brackets-2026",
    "date": "2026-01-15",
    "category": {
        "en": "General",
        "zh": "通用"
    },
    "icon": "fa-file-text-o",
    "url": "articles/alabama-tax-brackets-2026.html",
    "title": {
        "en": "Alabama State Tax Brackets & Rates 2026",
        "zh": "2026 阿拉巴馬州州稅：稅率與級距"
    },
    "desc": {
        "en": "Updated 2026 income tax brackets and rates for Alabama. Calculate your state tax liability.",
        "zh": "2026 年阿拉巴馬州所得稅級距與稅率更新。計算您的州稅負。"
    },
    "tags": [
        "2026 tax brackets",
        "Alabama tax",
        "tax calculator 2026"
    ]
}
];
