// related.js
// 核心逻辑：随机展示5个工具，并适配 Tailwind CSS 玻璃拟态风格
document.addEventListener('DOMContentLoaded', function() {
    const allLinks = [
        {
            "title": "Index",
            "link": "https://dreamwhisperai.com/public/dreams/index.html",
            "isExternal": true
        },
        {
            "title": "Fungames.today",
            "link": "https://fungames.today",
            "isExternal": true
        },
        {
            "title": "Nowgames.lol",
            "link": "https://nowgames.lol",
            "isExternal": true
        },
        {
            "title": "Alabama tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/alabama-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Alabama tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/alabama-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Alaska tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/alaska-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Alaska tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/alaska-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Arizona tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/arizona-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Arizona tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/arizona-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Arkansas tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/arkansas-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Arkansas tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/arkansas-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "California tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/california-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "California tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/california-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Colorado tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/colorado-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Colorado tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/colorado-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Connecticut tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/connecticut-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Connecticut tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/connecticut-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Delaware tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/delaware-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Delaware tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/delaware-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "District of columbia tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/district-of-columbia-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "District of columbia tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/district-of-columbia-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Florida tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/florida-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Florida tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/florida-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Georgia tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/georgia-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Georgia tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/georgia-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Hawaii tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/hawaii-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Hawaii tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/hawaii-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Idaho tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/idaho-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Idaho tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/idaho-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Illinois tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/illinois-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Illinois tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/illinois-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Indiana tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/indiana-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "Indiana tax calculator",
            "link": "https://statetaxcalc.com/calculators/state/indiana-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Iowa tax calculator tw",
            "link": "https://statetaxcalc.com/calculators/state/iowa-tax-calculator-tw.html",
            "isExternal": true
        },
        {
            "title": "License plate list",
            "link": "https://toolboxpro.top/modules/auto/license-plate-list.html",
            "isExternal": true
        },
        {
            "title": "Random card generator",
            "link": "https://toolboxpro.top/modules/auto/random-card-generator.html",
            "isExternal": true
        },
        {
            "title": "Sudokusolving",
            "link": "https://toolboxpro.top/modules/auto/sudokusolving.html",
            "isExternal": true
        },
        {
            "title": "Vin check",
            "link": "https://toolboxpro.top/modules/auto/vin-check.html",
            "isExternal": true
        },
        {
            "title": "Chemical calculator",
            "link": "https://toolboxpro.top/modules/chemistry/chemical-calculator.html",
            "isExternal": true
        },
        {
            "title": "Element periodic table",
            "link": "https://toolboxpro.top/modules/chemistry/element-periodic-table.html",
            "isExternal": true
        },
        {
            "title": "Molarity calculator",
            "link": "https://toolboxpro.top/modules/chemistry/molarity-calculator.html",
            "isExternal": true
        },
        {
            "title": "Chinese colors",
            "link": "https://toolboxpro.top/modules/color-tool/chinese-colors.html",
            "isExternal": true
        },
        {
            "title": "Color converter",
            "link": "https://toolboxpro.top/modules/color-tool/color-converter.html",
            "isExternal": true
        },
        {
            "title": "Color names and values reference tool",
            "link": "https://toolboxpro.top/modules/color-tool/color-names-and-values-reference-tool.html",
            "isExternal": true
        },
        {
            "title": "Gradient generator",
            "link": "https://toolboxpro.top/modules/color-tool/gradient-generator.html",
            "isExternal": true
        },
        {
            "title": "Japanese traditional colors",
            "link": "https://toolboxpro.top/modules/color-tool/japanese-traditional-colors.html",
            "isExternal": true
        },
        {
            "title": "Random color generator",
            "link": "https://toolboxpro.top/modules/color-tool/random-color-generator.html",
            "isExternal": true
        },
        {
            "title": "Chinese simplified traditional converter",
            "link": "https://toolboxpro.top/modules/conversion/chinese-simplified-traditional-converter.html",
            "isExternal": true
        },
        {
            "title": "Curlconverter",
            "link": "https://toolboxpro.top/modules/conversion/curlconverter.html",
            "isExternal": true
        },
        {
            "title": "File size converter",
            "link": "https://toolboxpro.top/modules/conversion/file-size-converter.html",
            "isExternal": true
        },
        {
            "title": "Length conversions",
            "link": "https://toolboxpro.top/modules/conversion/length-conversions.html",
            "isExternal": true
        },
        {
            "title": "Length converter",
            "link": "https://toolboxpro.top/modules/conversion/length-converter.html",
            "isExternal": true
        },
        {
            "title": "Lunar solar converter",
            "link": "https://toolboxpro.top/modules/conversion/lunar-solar-converter.html",
            "isExternal": true
        },
        {
            "title": "Power converter",
            "link": "https://toolboxpro.top/modules/conversion/power-converter.html",
            "isExternal": true
        },
        {
            "title": "Pressure converter",
            "link": "https://toolboxpro.top/modules/conversion/pressure-converter.html",
            "isExternal": true
        },
        {
            "title": "Ring size converter",
            "link": "https://toolboxpro.top/modules/conversion/ring-size-converter.html",
            "isExternal": true
        },
        {
            "title": "Roman numeral converter",
            "link": "https://toolboxpro.top/modules/conversion/roman-numeral-converter.html",
            "isExternal": true
        },
        {
            "title": "Shoe size converter",
            "link": "https://toolboxpro.top/modules/conversion/shoe-size-converter.html",
            "isExternal": true
        },
        {
            "title": "Speed conversions",
            "link": "https://toolboxpro.top/modules/conversion/speed-conversions.html",
            "isExternal": true
        },
        {
            "title": "Speed converter",
            "link": "https://toolboxpro.top/modules/conversion/speed-converter.html",
            "isExternal": true
        },
        {
            "title": "Temperature conversions",
            "link": "https://toolboxpro.top/modules/conversion/temperature-conversions.html",
            "isExternal": true
        },
        {
            "title": "Temperature converter",
            "link": "https://toolboxpro.top/modules/conversion/temperature-converter.html",
            "isExternal": true
        },
        {
            "title": "Traffic converter",
            "link": "https://toolboxpro.top/modules/conversion/traffic-converter.html",
            "isExternal": true
        },
        {
            "title": "Unit converter",
            "link": "https://toolboxpro.top/modules/conversion/unit-converter.html",
            "isExternal": true
        },
        {
            "title": "Weight converter",
            "link": "https://toolboxpro.top/modules/conversion/weight-converter.html",
            "isExternal": true
        },
        {
            "title": "Age calculator",
            "link": "https://toolboxpro.top/modules/date-time/age-calculator.html",
            "isExternal": true
        },
        {
            "title": "Countdown timer",
            "link": "https://toolboxpro.top/modules/date-time/countdown-timer.html",
            "isExternal": true
        },
        {
            "title": "Date countdown",
            "link": "https://toolboxpro.top/modules/date-time/date-countdown.html",
            "isExternal": true
        },
        {
            "title": "Date countdown pro",
            "link": "https://toolboxpro.top/modules/date-time/date-countdown-pro.html",
            "isExternal": true
        },
        {
            "title": "Date to chinese uppercase",
            "link": "https://toolboxpro.top/modules/date-time/date-to-chinese-uppercase.html",
            "isExternal": true
        },
        {
            "title": "Day of year calculator",
            "link": "https://toolboxpro.top/modules/date-time/day-of-year-calculator.html",
            "isExternal": true
        },
        {
            "title": "Daylight saving time",
            "link": "https://toolboxpro.top/modules/date-time/daylight-saving-time.html",
            "isExternal": true
        },
        {
            "title": "Days between dates",
            "link": "https://toolboxpro.top/modules/date-time/days-between-dates.html",
            "isExternal": true
        },
        {
            "title": "Digital clock stopwatch",
            "link": "https://toolboxpro.top/modules/date-time/digital-clock-stopwatch.html",
            "isExternal": true
        },
        {
            "title": "Gaokao countdown",
            "link": "https://toolboxpro.top/modules/date-time/gaokao-countdown.html",
            "isExternal": true
        },
        {
            "title": "Image watermark tool",
            "link": "https://toolboxpro.top/modules/date-time/image-watermark-tool.html",
            "isExternal": true
        },
        {
            "title": "Pomodoro timer",
            "link": "https://toolboxpro.top/modules/date-time/pomodoro-timer.html",
            "isExternal": true
        },
        {
            "title": "Race time predictor",
            "link": "https://toolboxpro.top/modules/date-time/race-time-predictor.html",
            "isExternal": true
        },
        {
            "title": "Stopwatch",
            "link": "https://toolboxpro.top/modules/date-time/stopwatch.html",
            "isExternal": true
        },
        {
            "title": "Storage unit converter",
            "link": "https://toolboxpro.top/modules/date-time/storage-unit-converter.html",
            "isExternal": true
        },
        {
            "title": "Time converter",
            "link": "https://toolboxpro.top/modules/date-time/time-converter.html",
            "isExternal": true
        },
        {
            "title": "Time zone abbreviations worldwide list",
            "link": "https://toolboxpro.top/modules/date-time/time-zone-abbreviations-worldwide-list.html",
            "isExternal": true
        },
        {
            "title": "Time zone map",
            "link": "https://toolboxpro.top/modules/date-time/time-zone-map.html",
            "isExternal": true
        },
        {
            "title": "Timestamp",
            "link": "https://toolboxpro.top/modules/date-time/timestamp.html",
            "isExternal": true
        },
        {
            "title": "Unix timestamp converter",
            "link": "https://toolboxpro.top/modules/date-time/unix-timestamp-converter.html",
            "isExternal": true
        },
        {
            "title": "World capitals",
            "link": "https://toolboxpro.top/modules/date-time/world-capitals.html",
            "isExternal": true
        },
        {
            "title": "World clock meeting planner",
            "link": "https://toolboxpro.top/modules/date-time/world-clock-meeting-planner.html",
            "isExternal": true
        },
        {
            "title": "Worldwide time differences for any city",
            "link": "https://toolboxpro.top/modules/date-time/worldwide-time-differences-for-any-city.html",
            "isExternal": true
        },
        {
            "title": "Braille encrypt",
            "link": "https://toolboxpro.top/modules/development-tools/braille-encrypt.html",
            "isExternal": true
        },
        {
            "title": "Country region code reference",
            "link": "https://toolboxpro.top/modules/development-tools/country-region-code-reference.html",
            "isExternal": true
        },
        {
            "title": "Cpf generator tool development",
            "link": "https://toolboxpro.top/modules/development-tools/cpf-generator-tool-development.html",
            "isExternal": true
        },
        {
            "title": "Cron simulator",
            "link": "https://toolboxpro.top/modules/development-tools/cron-simulator.html",
            "isExternal": true
        },
        {
            "title": "Css minifier",
            "link": "https://toolboxpro.top/modules/development-tools/css-minifier.html",
            "isExternal": true
        },
        {
            "title": "Css selector reference",
            "link": "https://toolboxpro.top/modules/development-tools/css-selector-reference.html",
            "isExternal": true
        },
        {
            "title": "Emoji code reference table",
            "link": "https://toolboxpro.top/modules/development-tools/emoji-code-reference-table.html",
            "isExternal": true
        },
        {
            "title": "Get html",
            "link": "https://toolboxpro.top/modules/development-tools/get-html.html",
            "isExternal": true
        },
        {
            "title": "Hash encrypt",
            "link": "https://toolboxpro.top/modules/development-tools/hash-encrypt.html",
            "isExternal": true
        },
        {
            "title": "Html entities reference tool",
            "link": "https://toolboxpro.top/modules/development-tools/html-entities-reference-tool.html",
            "isExternal": true
        },
        {
            "title": "Html2markdown",
            "link": "https://toolboxpro.top/modules/development-tools/html2markdown.html",
            "isExternal": true
        },
        {
            "title": "Json editor",
            "link": "https://toolboxpro.top/modules/development-tools/json-editor.html",
            "isExternal": true
        },
        {
            "title": "Json to go",
            "link": "https://toolboxpro.top/modules/development-tools/json-to-go.html",
            "isExternal": true
        },
        {
            "title": "Keyboard key code reference",
            "link": "https://toolboxpro.top/modules/development-tools/keyboard-key-code-reference.html",
            "isExternal": true
        },
        {
            "title": "Qr code generator",
            "link": "https://toolboxpro.top/modules/development-tools/qr-code-generator.html",
            "isExternal": true
        },
        {
            "title": "Random ip address",
            "link": "https://toolboxpro.top/modules/development-tools/random-ip-address.html",
            "isExternal": true
        },
        {
            "title": "Regex library",
            "link": "https://toolboxpro.top/modules/development-tools/regex-library.html",
            "isExternal": true
        },
        {
            "title": "Sql formatter",
            "link": "https://toolboxpro.top/modules/development-tools/sql-formatter.html",
            "isExternal": true
        },
        {
            "title": "Url escape characters reference",
            "link": "https://toolboxpro.top/modules/development-tools/url-escape-characters-reference.html",
            "isExternal": true
        },
        {
            "title": "Url format",
            "link": "https://toolboxpro.top/modules/development-tools/url-format.html",
            "isExternal": true
        },
        {
            "title": "Vs code common shortcuts",
            "link": "https://toolboxpro.top/modules/development-tools/vs-code-common-shortcuts.html",
            "isExternal": true
        },
        {
            "title": "Whois query",
            "link": "https://toolboxpro.top/modules/development-tools/whois-query.html",
            "isExternal": true
        },
        {
            "title": "Xml2json",
            "link": "https://toolboxpro.top/modules/development-tools/xml2json.html",
            "isExternal": true
        },
        {
            "title": "Zero width encryptor",
            "link": "https://toolboxpro.top/modules/development-tools/zero-width-encryptor.html",
            "isExternal": true
        },
        {
            "title": "Currency calculator",
            "link": "https://toolboxpro.top/modules/e-commerce-operations/currency-calculator.html",
            "isExternal": true
        },
        {
            "title": "Language switcher",
            "link": "https://toolboxpro.top/modules/e-commerce-operations/language-switcher.html",
            "isExternal": true
        },
        {
            "title": "Shopping discount master",
            "link": "https://toolboxpro.top/modules/e-commerce-operations/shopping-discount-master.html",
            "isExternal": true
        },
        {
            "title": "Title generator",
            "link": "https://toolboxpro.top/modules/e-commerce-operations/title-generator.html",
            "isExternal": true
        },
        {
            "title": "Comprehensive gpa calculator",
            "link": "https://toolboxpro.top/modules/education/comprehensive-gpa-calculator.html",
            "isExternal": true
        },
        {
            "title": "Exam countdown",
            "link": "https://toolboxpro.top/modules/education/exam-countdown.html",
            "isExternal": true
        },
        {
            "title": "Final grade calculator",
            "link": "https://toolboxpro.top/modules/education/final-grade-calculator.html",
            "isExternal": true
        },
        {
            "title": "Global grade companion",
            "link": "https://toolboxpro.top/modules/education/global-grade-companion.html",
            "isExternal": true
        },
        {
            "title": "Bjt bias voltage calculator",
            "link": "https://toolboxpro.top/modules/electronics/bjt-bias-voltage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Color band resistor",
            "link": "https://toolboxpro.top/modules/electronics/color-band-resistor.html",
            "isExternal": true
        },
        {
            "title": "Constant current calculator",
            "link": "https://toolboxpro.top/modules/electronics/constant-current-calculator.html",
            "isExternal": true
        },
        {
            "title": "Current calculator",
            "link": "https://toolboxpro.top/modules/electronics/current-calculator.html",
            "isExternal": true
        },
        {
            "title": "Electricity calculator",
            "link": "https://toolboxpro.top/modules/electronics/electricity-calculator.html",
            "isExternal": true
        },
        {
            "title": "Five band resistor",
            "link": "https://toolboxpro.top/modules/electronics/five-band-resistor.html",
            "isExternal": true
        },
        {
            "title": "Four color resistor",
            "link": "https://toolboxpro.top/modules/electronics/four-color-resistor.html",
            "isExternal": true
        },
        {
            "title": "Led resistor calculator",
            "link": "https://toolboxpro.top/modules/electronics/led-resistor-calculator.html",
            "isExternal": true
        },
        {
            "title": "Ohms law calculator",
            "link": "https://toolboxpro.top/modules/electronics/ohms-law-calculator.html",
            "isExternal": true
        },
        {
            "title": "Parallel plate capacitor calc",
            "link": "https://toolboxpro.top/modules/electronics/parallel-plate-capacitor-calc.html",
            "isExternal": true
        },
        {
            "title": "Parallel resistor",
            "link": "https://toolboxpro.top/modules/electronics/parallel-resistor.html",
            "isExternal": true
        },
        {
            "title": "Parallel resistor calculator",
            "link": "https://toolboxpro.top/modules/electronics/parallel-resistor-calculator.html",
            "isExternal": true
        },
        {
            "title": "Resistor calculator",
            "link": "https://toolboxpro.top/modules/electronics/resistor-calculator.html",
            "isExternal": true
        },
        {
            "title": "Resistor divider",
            "link": "https://toolboxpro.top/modules/electronics/resistor-divider.html",
            "isExternal": true
        },
        {
            "title": "Series capacitor calculator",
            "link": "https://toolboxpro.top/modules/electronics/series-capacitor-calculator.html",
            "isExternal": true
        },
        {
            "title": "Voltage calculator",
            "link": "https://toolboxpro.top/modules/electronics/voltage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Voltage divider pro",
            "link": "https://toolboxpro.top/modules/electronics/voltage-divider-pro.html",
            "isExternal": true
        },
        {
            "title": "Voltage drop calculator",
            "link": "https://toolboxpro.top/modules/electronics/voltage-drop-calculator.html",
            "isExternal": true
        },
        {
            "title": "Zener diode calculator",
            "link": "https://toolboxpro.top/modules/electronics/zener-diode-calculator.html",
            "isExternal": true
        },
        {
            "title": "Zener resistor",
            "link": "https://toolboxpro.top/modules/electronics/zener-resistor.html",
            "isExternal": true
        },
        {
            "title": "Amazon profit",
            "link": "https://toolboxpro.top/modules/finance/amazon-profit.html",
            "isExternal": true
        },
        {
            "title": "Auto loan comparison",
            "link": "https://toolboxpro.top/modules/finance/auto-loan-comparison.html",
            "isExternal": true
        },
        {
            "title": "Bank card type query",
            "link": "https://toolboxpro.top/modules/finance/bank-card-type-query.html",
            "isExternal": true
        },
        {
            "title": "Bank deposit calculator",
            "link": "https://toolboxpro.top/modules/finance/bank-deposit-calculator.html",
            "isExternal": true
        },
        {
            "title": "Canadian mortgage",
            "link": "https://toolboxpro.top/modules/finance/canadian-mortgage.html",
            "isExternal": true
        },
        {
            "title": "Compound interest",
            "link": "https://toolboxpro.top/modules/finance/compound-interest.html",
            "isExternal": true
        },
        {
            "title": "Compound interest pro",
            "link": "https://toolboxpro.top/modules/finance/compound-interest-pro.html",
            "isExternal": true
        },
        {
            "title": "Currency code lookup",
            "link": "https://toolboxpro.top/modules/finance/currency-code-lookup.html",
            "isExternal": true
        },
        {
            "title": "Currency converter",
            "link": "https://toolboxpro.top/modules/finance/currency-converter.html",
            "isExternal": true
        },
        {
            "title": "Debt to income ratio",
            "link": "https://toolboxpro.top/modules/finance/debt-to-income-ratio.html",
            "isExternal": true
        },
        {
            "title": "Discount calculator",
            "link": "https://toolboxpro.top/modules/finance/discount-calculator.html",
            "isExternal": true
        },
        {
            "title": "General loan calculator",
            "link": "https://toolboxpro.top/modules/finance/general-loan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Investment calculator",
            "link": "https://toolboxpro.top/modules/finance/investment-calculator.html",
            "isExternal": true
        },
        {
            "title": "Mortgage calculator uk",
            "link": "https://toolboxpro.top/modules/finance/mortgage-calculator-uk.html",
            "isExternal": true
        },
        {
            "title": "Retirement calculato",
            "link": "https://toolboxpro.top/modules/finance/retirement-calculato.html",
            "isExternal": true
        },
        {
            "title": "Retirement calculator",
            "link": "https://toolboxpro.top/modules/finance/retirement-calculator.html",
            "isExternal": true
        },
        {
            "title": "Salary budget simulator",
            "link": "https://toolboxpro.top/modules/finance/salary-budget-simulator.html",
            "isExternal": true
        },
        {
            "title": "Salary converter",
            "link": "https://toolboxpro.top/modules/finance/salary-converter.html",
            "isExternal": true
        },
        {
            "title": "Salary sacrifice pro",
            "link": "https://toolboxpro.top/modules/finance/salary-sacrifice-pro.html",
            "isExternal": true
        },
        {
            "title": "Salary tax stimator",
            "link": "https://toolboxpro.top/modules/finance/salary-tax-stimator.html",
            "isExternal": true
        },
        {
            "title": "Sales tax vat calculator",
            "link": "https://toolboxpro.top/modules/finance/sales-tax-vat-calculator.html",
            "isExternal": true
        },
        {
            "title": "Shopping calculator",
            "link": "https://toolboxpro.top/modules/finance/shopping-calculator.html",
            "isExternal": true
        },
        {
            "title": "Student budget pro",
            "link": "https://toolboxpro.top/modules/finance/student-budget-pro.html",
            "isExternal": true
        },
        {
            "title": "Student loan pro",
            "link": "https://toolboxpro.top/modules/finance/student-loan-pro.html",
            "isExternal": true
        },
        {
            "title": "Student loan tools",
            "link": "https://toolboxpro.top/modules/finance/student-loan-tools.html",
            "isExternal": true
        },
        {
            "title": "World major countries and regions currency reference",
            "link": "https://toolboxpro.top/modules/finance/world-major-countries-and-regions-currency-reference.html",
            "isExternal": true
        },
        {
            "title": "24 game solver",
            "link": "https://toolboxpro.top/modules/fun/24-game-solver.html",
            "isExternal": true
        },
        {
            "title": "Dice roller",
            "link": "https://toolboxpro.top/modules/fun/dice-roller.html",
            "isExternal": true
        },
        {
            "title": "Love marriage calculator",
            "link": "https://toolboxpro.top/modules/fun/love-marriage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Random generator",
            "link": "https://toolboxpro.top/modules/fun/random-generator.html",
            "isExternal": true
        },
        {
            "title": "Random letter generator",
            "link": "https://toolboxpro.top/modules/fun/random-letter-generator.html",
            "isExternal": true
        },
        {
            "title": "Solitaire",
            "link": "https://toolboxpro.top/modules/fun/solitaire.html",
            "isExternal": true
        },
        {
            "title": "Sudoku solver",
            "link": "https://toolboxpro.top/modules/fun/sudoku-solver.html",
            "isExternal": true
        },
        {
            "title": "Bac calculator",
            "link": "https://toolboxpro.top/modules/health/bac-calculator.html",
            "isExternal": true
        },
        {
            "title": "Bmi calculator",
            "link": "https://toolboxpro.top/modules/health/bmi-calculator.html",
            "isExternal": true
        },
        {
            "title": "Conception calculator",
            "link": "https://toolboxpro.top/modules/health/conception-calculator.html",
            "isExternal": true
        },
        {
            "title": "Energy converter",
            "link": "https://toolboxpro.top/modules/health/energy-converter.html",
            "isExternal": true
        },
        {
            "title": "Fat intake calculator",
            "link": "https://toolboxpro.top/modules/health/fat-intake-calculator.html",
            "isExternal": true
        },
        {
            "title": "Food calorie reference table",
            "link": "https://toolboxpro.top/modules/health/food-calorie-reference-table.html",
            "isExternal": true
        },
        {
            "title": "Pregnancy timeline",
            "link": "https://toolboxpro.top/modules/health/pregnancy-timeline.html",
            "isExternal": true
        },
        {
            "title": "Tdee calculator",
            "link": "https://toolboxpro.top/modules/health/tdee-calculator.html",
            "isExternal": true
        },
        {
            "title": "Weight watchers points calculator",
            "link": "https://toolboxpro.top/modules/health/weight-watchers-points-calculator.html",
            "isExternal": true
        },
        {
            "title": "New years goal",
            "link": "https://toolboxpro.top/modules/life/new-years-goal.html",
            "isExternal": true
        },
        {
            "title": "Visualize life remaining years",
            "link": "https://toolboxpro.top/modules/life/visualize-life-remaining-years.html",
            "isExternal": true
        },
        {
            "title": "2d shape calculator",
            "link": "https://toolboxpro.top/modules/math/2d-shape-calculator.html",
            "isExternal": true
        },
        {
            "title": "3d shape calculator",
            "link": "https://toolboxpro.top/modules/math/3d-shape-calculator.html",
            "isExternal": true
        },
        {
            "title": "401k calculator",
            "link": "https://toolboxpro.top/modules/math/401k-calculator.html",
            "isExternal": true
        },
        {
            "title": "45 45 90 triangle calculator",
            "link": "https://toolboxpro.top/modules/math/45-45-90-triangle-calculator.html",
            "isExternal": true
        },
        {
            "title": "8051 timer calculator",
            "link": "https://toolboxpro.top/modules/math/8051-timer-calculator.html",
            "isExternal": true
        },
        {
            "title": "Absolute value calculator",
            "link": "https://toolboxpro.top/modules/math/absolute-value-calculator.html",
            "isExternal": true
        },
        {
            "title": "Advanced mathematical calculator",
            "link": "https://toolboxpro.top/modules/math/advanced-mathematical-calculator.html",
            "isExternal": true
        },
        {
            "title": "Age zodiac sign calculator",
            "link": "https://toolboxpro.top/modules/math/age-zodiac-sign-calculator.html",
            "isExternal": true
        },
        {
            "title": "Amortization calculator",
            "link": "https://toolboxpro.top/modules/math/amortization-calculator.html",
            "isExternal": true
        },
        {
            "title": "Anorexic bmi calculator",
            "link": "https://toolboxpro.top/modules/math/anorexic-bmi-calculator.html",
            "isExternal": true
        },
        {
            "title": "Arctan calculator",
            "link": "https://toolboxpro.top/modules/math/arctan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Area calculator",
            "link": "https://toolboxpro.top/modules/math/area-calculator.html",
            "isExternal": true
        },
        {
            "title": "Asphalt calculator pro",
            "link": "https://toolboxpro.top/modules/math/asphalt-calculator-pro.html",
            "isExternal": true
        },
        {
            "title": "Attendance calculator",
            "link": "https://toolboxpro.top/modules/math/attendance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Audio crossover calculator",
            "link": "https://toolboxpro.top/modules/math/audio-crossover-calculator.html",
            "isExternal": true
        },
        {
            "title": "Auto loan calculator",
            "link": "https://toolboxpro.top/modules/math/auto-loan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Average calculator",
            "link": "https://toolboxpro.top/modules/math/average-calculator.html",
            "isExternal": true
        },
        {
            "title": "Average grade calculator by letters",
            "link": "https://toolboxpro.top/modules/math/average-grade-calculator-by-letters.html",
            "isExternal": true
        },
        {
            "title": "Average grade calculator by percentage",
            "link": "https://toolboxpro.top/modules/math/average-grade-calculator-by-percentage.html",
            "isExternal": true
        },
        {
            "title": "Average grade calculator by points",
            "link": "https://toolboxpro.top/modules/math/average-grade-calculator-by-points.html",
            "isExternal": true
        },
        {
            "title": "Bandpass filter calculator",
            "link": "https://toolboxpro.top/modules/math/bandpass-filter-calculator.html",
            "isExternal": true
        },
        {
            "title": "Bandwidth calculator",
            "link": "https://toolboxpro.top/modules/math/bandwidth-calculator.html",
            "isExternal": true
        },
        {
            "title": "Basic calculator",
            "link": "https://toolboxpro.top/modules/math/basic-calculator.html",
            "isExternal": true
        },
        {
            "title": "Bernoulli numbers",
            "link": "https://toolboxpro.top/modules/math/bernoulli-numbers.html",
            "isExternal": true
        },
        {
            "title": "Best protein calculator",
            "link": "https://toolboxpro.top/modules/math/best-protein-calculator.html",
            "isExternal": true
        },
        {
            "title": "Big number calculator",
            "link": "https://toolboxpro.top/modules/math/big-number-calculator.html",
            "isExternal": true
        },
        {
            "title": "Binary calculator",
            "link": "https://toolboxpro.top/modules/math/binary-calculator.html",
            "isExternal": true
        },
        {
            "title": "Birthday calculator",
            "link": "https://toolboxpro.top/modules/math/birthday-calculator.html",
            "isExternal": true
        },
        {
            "title": "Bjt switch saturation calculator",
            "link": "https://toolboxpro.top/modules/math/bjt-switch-saturation-calculator.html",
            "isExternal": true
        },
        {
            "title": "Blood type calculator",
            "link": "https://toolboxpro.top/modules/math/blood-type-calculator.html",
            "isExternal": true
        },
        {
            "title": "Bmr calculator",
            "link": "https://toolboxpro.top/modules/math/bmr-calculator.html",
            "isExternal": true
        },
        {
            "title": "Board foot calculator",
            "link": "https://toolboxpro.top/modules/math/board-foot-calculator.html",
            "isExternal": true
        },
        {
            "title": "Boat loan calculator",
            "link": "https://toolboxpro.top/modules/math/boat-loan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Body fat calculator",
            "link": "https://toolboxpro.top/modules/math/body-fat-calculator.html",
            "isExternal": true
        },
        {
            "title": "Body surface area calculator",
            "link": "https://toolboxpro.top/modules/math/body-surface-area-calculator.html",
            "isExternal": true
        },
        {
            "title": "Body type weight calculator",
            "link": "https://toolboxpro.top/modules/math/body-type-weight-calculator.html",
            "isExternal": true
        },
        {
            "title": "Bottleneck calculator",
            "link": "https://toolboxpro.top/modules/math/bottleneck-calculator.html",
            "isExternal": true
        },
        {
            "title": "Bra size calculator",
            "link": "https://toolboxpro.top/modules/math/bra-size-calculator.html",
            "isExternal": true
        },
        {
            "title": "Btu calculator",
            "link": "https://toolboxpro.top/modules/math/btu-calculator.html",
            "isExternal": true
        },
        {
            "title": "Calorie calculator",
            "link": "https://toolboxpro.top/modules/math/calorie-calculator.html",
            "isExternal": true
        },
        {
            "title": "Calories burned calculator",
            "link": "https://toolboxpro.top/modules/math/calories-burned-calculator.html",
            "isExternal": true
        },
        {
            "title": "Canadian mortgage calculator",
            "link": "https://toolboxpro.top/modules/math/canadian-mortgage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Car loan calculator",
            "link": "https://toolboxpro.top/modules/math/car-loan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Carbohydrate calculator",
            "link": "https://toolboxpro.top/modules/math/carbohydrate-calculator.html",
            "isExternal": true
        },
        {
            "title": "Cash back or low interest calculator",
            "link": "https://toolboxpro.top/modules/math/cash-back-or-low-interest-calculator.html",
            "isExternal": true
        },
        {
            "title": "Cd calculator",
            "link": "https://toolboxpro.top/modules/math/cd-calculator.html",
            "isExternal": true
        },
        {
            "title": "Chinese number capitalizer",
            "link": "https://toolboxpro.top/modules/math/chinese-number-capitalizer.html",
            "isExternal": true
        },
        {
            "title": "Chunjie calculator",
            "link": "https://toolboxpro.top/modules/math/chunjie-calculator.html",
            "isExternal": true
        },
        {
            "title": "Cidr calculator",
            "link": "https://toolboxpro.top/modules/math/cidr-calculator.html",
            "isExternal": true
        },
        {
            "title": "Circular ring calculator",
            "link": "https://toolboxpro.top/modules/math/circular-ring-calculator.html",
            "isExternal": true
        },
        {
            "title": "Class fee calculator",
            "link": "https://toolboxpro.top/modules/math/class-fee-calculator.html",
            "isExternal": true
        },
        {
            "title": "Clock calculator",
            "link": "https://toolboxpro.top/modules/math/clock-calculator.html",
            "isExternal": true
        },
        {
            "title": "College cost calculator",
            "link": "https://toolboxpro.top/modules/math/college-cost-calculator.html",
            "isExternal": true
        },
        {
            "title": "Combination calculator",
            "link": "https://toolboxpro.top/modules/math/combination-calculator.html",
            "isExternal": true
        },
        {
            "title": "Commission calculator",
            "link": "https://toolboxpro.top/modules/math/commission-calculator.html",
            "isExternal": true
        },
        {
            "title": "Common factor calculator",
            "link": "https://toolboxpro.top/modules/math/common-factor-calculator.html",
            "isExternal": true
        },
        {
            "title": "Complex calculator",
            "link": "https://toolboxpro.top/modules/math/complex-calculator.html",
            "isExternal": true
        },
        {
            "title": "Compound interest calculator",
            "link": "https://toolboxpro.top/modules/math/compound-interest-calculator.html",
            "isExternal": true
        },
        {
            "title": "Concrete calculator",
            "link": "https://toolboxpro.top/modules/math/concrete-calculator.html",
            "isExternal": true
        },
        {
            "title": "Cone calculator",
            "link": "https://toolboxpro.top/modules/math/cone-calculator.html",
            "isExternal": true
        },
        {
            "title": "Confidence interval calculator",
            "link": "https://toolboxpro.top/modules/math/confidence-interval-calculator.html",
            "isExternal": true
        },
        {
            "title": "Conversion calculator",
            "link": "https://toolboxpro.top/modules/math/conversion-calculator.html",
            "isExternal": true
        },
        {
            "title": "Cos calculator",
            "link": "https://toolboxpro.top/modules/math/cos-calculator.html",
            "isExternal": true
        },
        {
            "title": "Creatine dosage calculator",
            "link": "https://toolboxpro.top/modules/math/creatine-dosage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Cube calculator",
            "link": "https://toolboxpro.top/modules/math/cube-calculator.html",
            "isExternal": true
        },
        {
            "title": "Cylinder calculator",
            "link": "https://toolboxpro.top/modules/math/cylinder-calculator.html",
            "isExternal": true
        },
        {
            "title": "Date calculator",
            "link": "https://toolboxpro.top/modules/math/date-calculator.html",
            "isExternal": true
        },
        {
            "title": "Day of week calculator",
            "link": "https://toolboxpro.top/modules/math/day-of-week-calculator.html",
            "isExternal": true
        },
        {
            "title": "Days and leap year calculator",
            "link": "https://toolboxpro.top/modules/math/days-and-leap-year-calculator.html",
            "isExternal": true
        },
        {
            "title": "Days calculator",
            "link": "https://toolboxpro.top/modules/math/days-calculator.html",
            "isExternal": true
        },
        {
            "title": "Debt ratio calculator",
            "link": "https://toolboxpro.top/modules/math/debt-ratio-calculator.html",
            "isExternal": true
        },
        {
            "title": "Definite integral calculator",
            "link": "https://toolboxpro.top/modules/math/definite-integral-calculator.html",
            "isExternal": true
        },
        {
            "title": "Deposit calculator",
            "link": "https://toolboxpro.top/modules/math/deposit-calculator.html",
            "isExternal": true
        },
        {
            "title": "Depreciation calculator",
            "link": "https://toolboxpro.top/modules/math/depreciation-calculator.html",
            "isExternal": true
        },
        {
            "title": "Derivative calculator",
            "link": "https://toolboxpro.top/modules/math/derivative-calculator.html",
            "isExternal": true
        },
        {
            "title": "Diff amp calculator",
            "link": "https://toolboxpro.top/modules/math/diff-amp-calculator.html",
            "isExternal": true
        },
        {
            "title": "Distance calculator",
            "link": "https://toolboxpro.top/modules/math/distance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Due date calculator",
            "link": "https://toolboxpro.top/modules/math/due-date-calculator.html",
            "isExternal": true
        },
        {
            "title": "E commerce tax cost calculator",
            "link": "https://toolboxpro.top/modules/math/e-commerce-tax-cost-calculator.html",
            "isExternal": true
        },
        {
            "title": "Easy grader calculator",
            "link": "https://toolboxpro.top/modules/math/easy-grader-calculator.html",
            "isExternal": true
        },
        {
            "title": "Er calculator",
            "link": "https://toolboxpro.top/modules/math/er-calculator.html",
            "isExternal": true
        },
        {
            "title": "Euler numbers",
            "link": "https://toolboxpro.top/modules/math/euler-numbers.html",
            "isExternal": true
        },
        {
            "title": "Exponent calculator",
            "link": "https://toolboxpro.top/modules/math/exponent-calculator.html",
            "isExternal": true
        },
        {
            "title": "Expression calculator",
            "link": "https://toolboxpro.top/modules/math/expression-calculator.html",
            "isExternal": true
        },
        {
            "title": "Factor calculator",
            "link": "https://toolboxpro.top/modules/math/factor-calculator.html",
            "isExternal": true
        },
        {
            "title": "Factorial calculator",
            "link": "https://toolboxpro.top/modules/math/factorial-calculator.html",
            "isExternal": true
        },
        {
            "title": "Factoring calculator",
            "link": "https://toolboxpro.top/modules/math/factoring-calculator.html",
            "isExternal": true
        },
        {
            "title": "Fetal weight calculator",
            "link": "https://toolboxpro.top/modules/math/fetal-weight-calculator.html",
            "isExternal": true
        },
        {
            "title": "Fibonacci numbers",
            "link": "https://toolboxpro.top/modules/math/fibonacci-numbers.html",
            "isExternal": true
        },
        {
            "title": "Finance calculator",
            "link": "https://toolboxpro.top/modules/math/finance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Fish tank calculator",
            "link": "https://toolboxpro.top/modules/math/fish-tank-calculator.html",
            "isExternal": true
        },
        {
            "title": "Forestry toolkit calculator",
            "link": "https://toolboxpro.top/modules/math/forestry-toolkit-calculator.html",
            "isExternal": true
        },
        {
            "title": "Fraction calculator",
            "link": "https://toolboxpro.top/modules/math/fraction-calculator.html",
            "isExternal": true
        },
        {
            "title": "Fractional exponent calc",
            "link": "https://toolboxpro.top/modules/math/fractional-exponent-calc.html",
            "isExternal": true
        },
        {
            "title": "Frustum calculator",
            "link": "https://toolboxpro.top/modules/math/frustum-calculator.html",
            "isExternal": true
        },
        {
            "title": "Fuel cost calculator",
            "link": "https://toolboxpro.top/modules/math/fuel-cost-calculator.html",
            "isExternal": true
        },
        {
            "title": "Future value calculator",
            "link": "https://toolboxpro.top/modules/math/future-value-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gamma function calculator",
            "link": "https://toolboxpro.top/modules/math/gamma-function-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gas law calculator",
            "link": "https://toolboxpro.top/modules/math/gas-law-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gas mileage calculator",
            "link": "https://toolboxpro.top/modules/math/gas-mileage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gcd calculator",
            "link": "https://toolboxpro.top/modules/math/gcd-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gcf calculator",
            "link": "https://toolboxpro.top/modules/math/gcf-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gdp calculator",
            "link": "https://toolboxpro.top/modules/math/gdp-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gfr calculator",
            "link": "https://toolboxpro.top/modules/math/gfr-calculator.html",
            "isExternal": true
        },
        {
            "title": "Golf handicap calculator",
            "link": "https://toolboxpro.top/modules/math/golf-handicap-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gpa calculator",
            "link": "https://toolboxpro.top/modules/math/gpa-calculator.html",
            "isExternal": true
        },
        {
            "title": "Grade calculator",
            "link": "https://toolboxpro.top/modules/math/grade-calculator.html",
            "isExternal": true
        },
        {
            "title": "Grade calculator for students and teachers",
            "link": "https://toolboxpro.top/modules/math/grade-calculator-for-students-and-teachers.html",
            "isExternal": true
        },
        {
            "title": "Gravel calculator",
            "link": "https://toolboxpro.top/modules/math/gravel-calculator.html",
            "isExternal": true
        },
        {
            "title": "Gsat score calculator",
            "link": "https://toolboxpro.top/modules/math/gsat-score-calculator.html",
            "isExternal": true
        },
        {
            "title": "Half life calculator",
            "link": "https://toolboxpro.top/modules/math/half-life-calculator.html",
            "isExternal": true
        },
        {
            "title": "Heat index calculator",
            "link": "https://toolboxpro.top/modules/math/heat-index-calculator.html",
            "isExternal": true
        },
        {
            "title": "Height calculator",
            "link": "https://toolboxpro.top/modules/math/height-calculator.html",
            "isExternal": true
        },
        {
            "title": "Hex calculator",
            "link": "https://toolboxpro.top/modules/math/hex-calculator.html",
            "isExternal": true
        },
        {
            "title": "Hexagonal prism calculator",
            "link": "https://toolboxpro.top/modules/math/hexagonal-prism-calculator.html",
            "isExternal": true
        },
        {
            "title": "High pass filter calculator",
            "link": "https://toolboxpro.top/modules/math/high-pass-filter-calculator.html",
            "isExternal": true
        },
        {
            "title": "Hours calculator",
            "link": "https://toolboxpro.top/modules/math/hours-calculator.html",
            "isExternal": true
        },
        {
            "title": "Http status code reference",
            "link": "https://toolboxpro.top/modules/math/http-status-code-reference.html",
            "isExternal": true
        },
        {
            "title": "Hysteresis calculator",
            "link": "https://toolboxpro.top/modules/math/hysteresis-calculator.html",
            "isExternal": true
        },
        {
            "title": "Ideal weight calculator",
            "link": "https://toolboxpro.top/modules/math/ideal-weight-calculator.html",
            "isExternal": true
        },
        {
            "title": "Indefinite integral calculator",
            "link": "https://toolboxpro.top/modules/math/indefinite-integral-calculator.html",
            "isExternal": true
        },
        {
            "title": "Inflation calculator",
            "link": "https://toolboxpro.top/modules/math/inflation-calculator.html",
            "isExternal": true
        },
        {
            "title": "Inventory calculator",
            "link": "https://toolboxpro.top/modules/math/inventory-calculator.html",
            "isExternal": true
        },
        {
            "title": "Inverse function calculator",
            "link": "https://toolboxpro.top/modules/math/inverse-function-calculator.html",
            "isExternal": true
        },
        {
            "title": "Ip subnet calculator",
            "link": "https://toolboxpro.top/modules/math/ip-subnet-calculator.html",
            "isExternal": true
        },
        {
            "title": "Jfet bias calculator",
            "link": "https://toolboxpro.top/modules/math/jfet-bias-calculator.html",
            "isExternal": true
        },
        {
            "title": "Lazy calculator",
            "link": "https://toolboxpro.top/modules/math/lazy-calculator.html",
            "isExternal": true
        },
        {
            "title": "Lcm calculator",
            "link": "https://toolboxpro.top/modules/math/lcm-calculator.html",
            "isExternal": true
        },
        {
            "title": "Lean body mass calculator",
            "link": "https://toolboxpro.top/modules/math/lean-body-mass-calculator.html",
            "isExternal": true
        },
        {
            "title": "Limit calculator",
            "link": "https://toolboxpro.top/modules/math/limit-calculator.html",
            "isExternal": true
        },
        {
            "title": "Loan calculator",
            "link": "https://toolboxpro.top/modules/math/loan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Log antilog calculator",
            "link": "https://toolboxpro.top/modules/math/log-antilog-calculator.html",
            "isExternal": true
        },
        {
            "title": "Log calculator",
            "link": "https://toolboxpro.top/modules/math/log-calculator.html",
            "isExternal": true
        },
        {
            "title": "Log2 online calculator",
            "link": "https://toolboxpro.top/modules/math/log2-online-calculator.html",
            "isExternal": true
        },
        {
            "title": "Long division calculator",
            "link": "https://toolboxpro.top/modules/math/long-division-calculator.html",
            "isExternal": true
        },
        {
            "title": "Love calculator",
            "link": "https://toolboxpro.top/modules/math/love-calculator.html",
            "isExternal": true
        },
        {
            "title": "Low pass filter calculator",
            "link": "https://toolboxpro.top/modules/math/low-pass-filter-calculator.html",
            "isExternal": true
        },
        {
            "title": "Macro calculator",
            "link": "https://toolboxpro.top/modules/math/macro-calculator.html",
            "isExternal": true
        },
        {
            "title": "Macronutrient calculator",
            "link": "https://toolboxpro.top/modules/math/macronutrient-calculator.html",
            "isExternal": true
        },
        {
            "title": "Marriage calculator",
            "link": "https://toolboxpro.top/modules/math/marriage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Mass calculator",
            "link": "https://toolboxpro.top/modules/math/mass-calculator.html",
            "isExternal": true
        },
        {
            "title": "Math toolbox calculator",
            "link": "https://toolboxpro.top/modules/math/math-toolbox-calculator.html",
            "isExternal": true
        },
        {
            "title": "Matrix binary calculator",
            "link": "https://toolboxpro.top/modules/math/matrix-binary-calculator.html",
            "isExternal": true
        },
        {
            "title": "Matrix calculator",
            "link": "https://toolboxpro.top/modules/math/matrix-calculator.html",
            "isExternal": true
        },
        {
            "title": "Maya calendar calculator",
            "link": "https://toolboxpro.top/modules/math/maya-calendar-calculator.html",
            "isExternal": true
        },
        {
            "title": "Medical insurance calculator",
            "link": "https://toolboxpro.top/modules/math/medical-insurance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Mileage calculator",
            "link": "https://toolboxpro.top/modules/math/mileage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Molecular weight calculator",
            "link": "https://toolboxpro.top/modules/math/molecular-weight-calculator.html",
            "isExternal": true
        },
        {
            "title": "Mortgage calculator",
            "link": "https://toolboxpro.top/modules/math/mortgage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Mulch calculator",
            "link": "https://toolboxpro.top/modules/math/mulch-calculator.html",
            "isExternal": true
        },
        {
            "title": "Multi language",
            "link": "https://toolboxpro.top/modules/math/multi-language.html",
            "isExternal": true
        },
        {
            "title": "Number base converter",
            "link": "https://toolboxpro.top/modules/math/number-base-converter.html",
            "isExternal": true
        },
        {
            "title": "Number sequence calculator",
            "link": "https://toolboxpro.top/modules/math/number-sequence-calculator.html",
            "isExternal": true
        },
        {
            "title": "Number to words",
            "link": "https://toolboxpro.top/modules/math/number-to-words.html",
            "isExternal": true
        },
        {
            "title": "Overweight calculator",
            "link": "https://toolboxpro.top/modules/math/overweight-calculator.html",
            "isExternal": true
        },
        {
            "title": "Ovulation calculator",
            "link": "https://toolboxpro.top/modules/math/ovulation-calculator.html",
            "isExternal": true
        },
        {
            "title": "P value calculator",
            "link": "https://toolboxpro.top/modules/math/p-value-calculator.html",
            "isExternal": true
        },
        {
            "title": "Pace calculator",
            "link": "https://toolboxpro.top/modules/math/pace-calculator.html",
            "isExternal": true
        },
        {
            "title": "Payment calculator",
            "link": "https://toolboxpro.top/modules/math/payment-calculator.html",
            "isExternal": true
        },
        {
            "title": "Percent calculator",
            "link": "https://toolboxpro.top/modules/math/percent-calculator.html",
            "isExternal": true
        },
        {
            "title": "Percent error calculator",
            "link": "https://toolboxpro.top/modules/math/percent-error-calculator.html",
            "isExternal": true
        },
        {
            "title": "Percentage calculator",
            "link": "https://toolboxpro.top/modules/math/percentage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Permutation calculator",
            "link": "https://toolboxpro.top/modules/math/permutation-calculator.html",
            "isExternal": true
        },
        {
            "title": "Permutation combination calculator",
            "link": "https://toolboxpro.top/modules/math/permutation-combination-calculator.html",
            "isExternal": true
        },
        {
            "title": "Personal loan calculator",
            "link": "https://toolboxpro.top/modules/math/personal-loan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Photonics multi calculator pro",
            "link": "https://toolboxpro.top/modules/math/photonics-multi-calculator-pro.html",
            "isExternal": true
        },
        {
            "title": "Pinduoduo profit calculator",
            "link": "https://toolboxpro.top/modules/math/pinduoduo-profit-calculator.html",
            "isExternal": true
        },
        {
            "title": "Pregnancy calculator",
            "link": "https://toolboxpro.top/modules/math/pregnancy-calculator.html",
            "isExternal": true
        },
        {
            "title": "Pregnancy conception calculator",
            "link": "https://toolboxpro.top/modules/math/pregnancy-conception-calculator.html",
            "isExternal": true
        },
        {
            "title": "Pregnancy weight gain calculator",
            "link": "https://toolboxpro.top/modules/math/pregnancy-weight-gain-calculator.html",
            "isExternal": true
        },
        {
            "title": "Pricing calculator",
            "link": "https://toolboxpro.top/modules/math/pricing-calculator.html",
            "isExternal": true
        },
        {
            "title": "Prime factorization",
            "link": "https://toolboxpro.top/modules/math/prime-factorization.html",
            "isExternal": true
        },
        {
            "title": "Prime factorization calculator",
            "link": "https://toolboxpro.top/modules/math/prime-factorization-calculator.html",
            "isExternal": true
        },
        {
            "title": "Prime numbers",
            "link": "https://toolboxpro.top/modules/math/prime-numbers.html",
            "isExternal": true
        },
        {
            "title": "Probability calculator",
            "link": "https://toolboxpro.top/modules/math/probability-calculator.html",
            "isExternal": true
        },
        {
            "title": "Profit calculator",
            "link": "https://toolboxpro.top/modules/math/profit-calculator.html",
            "isExternal": true
        },
        {
            "title": "Protein calculator",
            "link": "https://toolboxpro.top/modules/math/protein-calculator.html",
            "isExternal": true
        },
        {
            "title": "Pythagorean theorem calculator",
            "link": "https://toolboxpro.top/modules/math/pythagorean-theorem-calculator.html",
            "isExternal": true
        },
        {
            "title": "Quadratic calculator",
            "link": "https://toolboxpro.top/modules/math/quadratic-calculator.html",
            "isExternal": true
        },
        {
            "title": "Quadratic equation calculator",
            "link": "https://toolboxpro.top/modules/math/quadratic-equation-calculator.html",
            "isExternal": true
        },
        {
            "title": "Random 4 digit number generator",
            "link": "https://toolboxpro.top/modules/math/random-4-digit-number-generator.html",
            "isExternal": true
        },
        {
            "title": "Random number generator",
            "link": "https://toolboxpro.top/modules/math/random-number-generator.html",
            "isExternal": true
        },
        {
            "title": "Ratio calculator",
            "link": "https://toolboxpro.top/modules/math/ratio-calculator.html",
            "isExternal": true
        },
        {
            "title": "Rc filter cutoff calculator",
            "link": "https://toolboxpro.top/modules/math/rc-filter-cutoff-calculator.html",
            "isExternal": true
        },
        {
            "title": "Reactance calculator",
            "link": "https://toolboxpro.top/modules/math/reactance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Rectangular prism calculator",
            "link": "https://toolboxpro.top/modules/math/rectangular-prism-calculator.html",
            "isExternal": true
        },
        {
            "title": "Relative calculator",
            "link": "https://toolboxpro.top/modules/math/relative-calculator.html",
            "isExternal": true
        },
        {
            "title": "Renpin calculator",
            "link": "https://toolboxpro.top/modules/math/renpin-calculator.html",
            "isExternal": true
        },
        {
            "title": "Rent vs buy calculator",
            "link": "https://toolboxpro.top/modules/math/rent-vs-buy-calculator.html",
            "isExternal": true
        },
        {
            "title": "Rental property calculator",
            "link": "https://toolboxpro.top/modules/math/rental-property-calculator.html",
            "isExternal": true
        },
        {
            "title": "Resistance calculator",
            "link": "https://toolboxpro.top/modules/math/resistance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Right triangle calculator",
            "link": "https://toolboxpro.top/modules/math/right-triangle-calculator.html",
            "isExternal": true
        },
        {
            "title": "Roofing calculator",
            "link": "https://toolboxpro.top/modules/math/roofing-calculator.html",
            "isExternal": true
        },
        {
            "title": "Root calculator",
            "link": "https://toolboxpro.top/modules/math/root-calculator.html",
            "isExternal": true
        },
        {
            "title": "Roth ira calculator",
            "link": "https://toolboxpro.top/modules/math/roth-ira-calculator.html",
            "isExternal": true
        },
        {
            "title": "Rounding calculator",
            "link": "https://toolboxpro.top/modules/math/rounding-calculator.html",
            "isExternal": true
        },
        {
            "title": "Runyue calculator",
            "link": "https://toolboxpro.top/modules/math/runyue-calculator.html",
            "isExternal": true
        },
        {
            "title": "Safe period calculator",
            "link": "https://toolboxpro.top/modules/math/safe-period-calculator.html",
            "isExternal": true
        },
        {
            "title": "Salary calculator",
            "link": "https://toolboxpro.top/modules/math/salary-calculator.html",
            "isExternal": true
        },
        {
            "title": "Salary design calculator",
            "link": "https://toolboxpro.top/modules/math/salary-design-calculator.html",
            "isExternal": true
        },
        {
            "title": "Sales tax calculator",
            "link": "https://toolboxpro.top/modules/math/sales-tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Sample size calculator",
            "link": "https://toolboxpro.top/modules/math/sample-size-calculator.html",
            "isExternal": true
        },
        {
            "title": "Scientific calculator",
            "link": "https://toolboxpro.top/modules/math/scientific-calculator.html",
            "isExternal": true
        },
        {
            "title": "Scientific notation calculator",
            "link": "https://toolboxpro.top/modules/math/scientific-notation-calculator.html",
            "isExternal": true
        },
        {
            "title": "Series calculator",
            "link": "https://toolboxpro.top/modules/math/series-calculator.html",
            "isExternal": true
        },
        {
            "title": "Series resistance calculator",
            "link": "https://toolboxpro.top/modules/math/series-resistance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Shengxiao calculator",
            "link": "https://toolboxpro.top/modules/math/shengxiao-calculator.html",
            "isExternal": true
        },
        {
            "title": "Sleep calculator",
            "link": "https://toolboxpro.top/modules/math/sleep-calculator.html",
            "isExternal": true
        },
        {
            "title": "Slope calculator",
            "link": "https://toolboxpro.top/modules/math/slope-calculator.html",
            "isExternal": true
        },
        {
            "title": "Speed calculator",
            "link": "https://toolboxpro.top/modules/math/speed-calculator.html",
            "isExternal": true
        },
        {
            "title": "Sphere calculator",
            "link": "https://toolboxpro.top/modules/math/sphere-calculator.html",
            "isExternal": true
        },
        {
            "title": "Sphere volume calculator",
            "link": "https://toolboxpro.top/modules/math/sphere-volume-calculator.html",
            "isExternal": true
        },
        {
            "title": "Square footage calculator",
            "link": "https://toolboxpro.top/modules/math/square-footage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Square root calculator",
            "link": "https://toolboxpro.top/modules/math/square-root-calculator.html",
            "isExternal": true
        },
        {
            "title": "Stair calculator",
            "link": "https://toolboxpro.top/modules/math/stair-calculator.html",
            "isExternal": true
        },
        {
            "title": "Standard calculator",
            "link": "https://toolboxpro.top/modules/math/standard-calculator.html",
            "isExternal": true
        },
        {
            "title": "Standard deviation calculator",
            "link": "https://toolboxpro.top/modules/math/standard-deviation-calculator.html",
            "isExternal": true
        },
        {
            "title": "Statistics calculator",
            "link": "https://toolboxpro.top/modules/math/statistics-calculator.html",
            "isExternal": true
        },
        {
            "title": "Student loan calculator",
            "link": "https://toolboxpro.top/modules/math/student-loan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Student loan calculator 8 percent rule",
            "link": "https://toolboxpro.top/modules/math/student-loan-calculator-8-percent-rule.html",
            "isExternal": true
        },
        {
            "title": "Surface area calculator",
            "link": "https://toolboxpro.top/modules/math/surface-area-calculator.html",
            "isExternal": true
        },
        {
            "title": "Take home pay calculator",
            "link": "https://toolboxpro.top/modules/math/take-home-pay-calculator.html",
            "isExternal": true
        },
        {
            "title": "Tan calculator",
            "link": "https://toolboxpro.top/modules/math/tan-calculator.html",
            "isExternal": true
        },
        {
            "title": "Target heart rate calculator",
            "link": "https://toolboxpro.top/modules/math/target-heart-rate-calculator.html",
            "isExternal": true
        },
        {
            "title": "Tax calculator",
            "link": "https://toolboxpro.top/modules/math/tax-calculator.html",
            "isExternal": true
        },
        {
            "title": "Taylor series calculator",
            "link": "https://toolboxpro.top/modules/math/taylor-series-calculator.html",
            "isExternal": true
        },
        {
            "title": "Tdee calculator pro",
            "link": "https://toolboxpro.top/modules/math/tdee-calculator-pro.html",
            "isExternal": true
        },
        {
            "title": "Tfsa calculator",
            "link": "https://toolboxpro.top/modules/math/tfsa-calculator.html",
            "isExternal": true
        },
        {
            "title": "Tile calculator",
            "link": "https://toolboxpro.top/modules/math/tile-calculator.html",
            "isExternal": true
        },
        {
            "title": "Time calculator",
            "link": "https://toolboxpro.top/modules/math/time-calculator.html",
            "isExternal": true
        },
        {
            "title": "Time card calculator",
            "link": "https://toolboxpro.top/modules/math/time-card-calculator.html",
            "isExternal": true
        },
        {
            "title": "Time constant calculator",
            "link": "https://toolboxpro.top/modules/math/time-constant-calculator.html",
            "isExternal": true
        },
        {
            "title": "Time duration calculator",
            "link": "https://toolboxpro.top/modules/math/time-duration-calculator.html",
            "isExternal": true
        },
        {
            "title": "Time zone calculator",
            "link": "https://toolboxpro.top/modules/math/time-zone-calculator.html",
            "isExternal": true
        },
        {
            "title": "Tip calculator",
            "link": "https://toolboxpro.top/modules/math/tip-calculator.html",
            "isExternal": true
        },
        {
            "title": "Tire calculator",
            "link": "https://toolboxpro.top/modules/math/tire-calculator.html",
            "isExternal": true
        },
        {
            "title": "Tire size calculator",
            "link": "https://toolboxpro.top/modules/math/tire-size-calculator.html",
            "isExternal": true
        },
        {
            "title": "Torus calculator",
            "link": "https://toolboxpro.top/modules/math/torus-calculator.html",
            "isExternal": true
        },
        {
            "title": "Triangle calculator",
            "link": "https://toolboxpro.top/modules/math/triangle-calculator.html",
            "isExternal": true
        },
        {
            "title": "Trigonometry calculator",
            "link": "https://toolboxpro.top/modules/math/trigonometry-calculator.html",
            "isExternal": true
        },
        {
            "title": "Two s complement calculator",
            "link": "https://toolboxpro.top/modules/math/two-s-complement-calculator.html",
            "isExternal": true
        },
        {
            "title": "Uk mortgage calculator",
            "link": "https://toolboxpro.top/modules/math/uk-mortgage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Unified calorie calculator",
            "link": "https://toolboxpro.top/modules/math/unified-calorie-calculator.html",
            "isExternal": true
        },
        {
            "title": "Universal net pay calculator",
            "link": "https://toolboxpro.top/modules/math/universal-net-pay-calculator.html",
            "isExternal": true
        },
        {
            "title": "Usa sea shipping calculator",
            "link": "https://toolboxpro.top/modules/math/usa-sea-shipping-calculator.html",
            "isExternal": true
        },
        {
            "title": "Va mortgage calculator",
            "link": "https://toolboxpro.top/modules/math/va-mortgage-calculator.html",
            "isExternal": true
        },
        {
            "title": "Variance calculator",
            "link": "https://toolboxpro.top/modules/math/variance-calculator.html",
            "isExternal": true
        },
        {
            "title": "Volume calculator",
            "link": "https://toolboxpro.top/modules/math/volume-calculator.html",
            "isExternal": true
        },
        {
            "title": "Volume converter",
            "link": "https://toolboxpro.top/modules/math/volume-converter.html",
            "isExternal": true
        },
        {
            "title": "Water calculator",
            "link": "https://toolboxpro.top/modules/math/water-calculator.html",
            "isExternal": true
        },
        {
            "title": "Weight calculator",
            "link": "https://toolboxpro.top/modules/math/weight-calculator.html",
            "isExternal": true
        },
        {
            "title": "Weighted grade calculator",
            "link": "https://toolboxpro.top/modules/math/weighted-grade-calculator.html",
            "isExternal": true
        },
        {
            "title": "Wind chill calculator",
            "link": "https://toolboxpro.top/modules/math/wind-chill-calculator.html",
            "isExternal": true
        },
        {
            "title": "Z score calculator",
            "link": "https://toolboxpro.top/modules/math/z-score-calculator.html",
            "isExternal": true
        },
        {
            "title": "Abstract talk",
            "link": "https://toolboxpro.top/modules/others/abstract-talk.html",
            "isExternal": true
        },
        {
            "title": "Amortization analysis",
            "link": "https://toolboxpro.top/modules/others/amortization-analysis.html",
            "isExternal": true
        },
        {
            "title": "Anime4k",
            "link": "https://toolboxpro.top/modules/others/anime4k.html",
            "isExternal": true
        },
        {
            "title": "Autoprefixer",
            "link": "https://toolboxpro.top/modules/others/autoprefixer.html",
            "isExternal": true
        },
        {
            "title": "Binary to decimal",
            "link": "https://toolboxpro.top/modules/others/binary-to-decimal.html",
            "isExternal": true
        },
        {
            "title": "Calculadora de calorias quemadas",
            "link": "https://toolboxpro.top/modules/others/calculadora-de-calorias-quemadas.html",
            "isExternal": true
        },
        {
            "title": "Cash flow pro",
            "link": "https://toolboxpro.top/modules/others/cash-flow-pro.html",
            "isExternal": true
        },
        {
            "title": "Cdn search",
            "link": "https://toolboxpro.top/modules/others/cdn-search.html",
            "isExternal": true
        },
        {
            "title": "Changfangti",
            "link": "https://toolboxpro.top/modules/others/changfangti.html",
            "isExternal": true
        },
        {
            "title": "Coherent sampling",
            "link": "https://toolboxpro.top/modules/others/coherent-sampling.html",
            "isExternal": true
        },
        {
            "title": "Coinsurance claims toolbox",
            "link": "https://toolboxpro.top/modules/others/coinsurance-claims-toolbox.html",
            "isExternal": true
        },
        {
            "title": "Common abbreviations pronunciation reference",
            "link": "https://toolboxpro.top/modules/others/common-abbreviations-pronunciation-reference.html",
            "isExternal": true
        },
        {
            "title": "Common file mime type reference",
            "link": "https://toolboxpro.top/modules/others/common-file-mime-type-reference.html",
            "isExternal": true
        },
        {
            "title": "Common linux commands reference",
            "link": "https://toolboxpro.top/modules/others/common-linux-commands-reference.html",
            "isExternal": true
        },
        {
            "title": "Common programmer english reference tool",
            "link": "https://toolboxpro.top/modules/others/common-programmer-english-reference-tool.html",
            "isExternal": true
        },
        {
            "title": "Computer science vocabulary reference",
            "link": "https://toolboxpro.top/modules/others/computer-science-vocabulary-reference.html",
            "isExternal": true
        },
        {
            "title": "Cost benefit analysis",
            "link": "https://toolboxpro.top/modules/others/cost-benefit-analysis.html",
            "isExternal": true
        },
        {
            "title": "Cpu rank",
            "link": "https://toolboxpro.top/modules/others/cpu-rank.html",
            "isExternal": true
        },
        {
            "title": "Cube root pro",
            "link": "https://toolboxpro.top/modules/others/cube-root-pro.html",
            "isExternal": true
        },
        {
            "title": "Cunkuanlixi",
            "link": "https://toolboxpro.top/modules/others/cunkuanlixi.html",
            "isExternal": true
        },
        {
            "title": "Dream plaza",
            "link": "https://toolboxpro.top/modules/others/dream-plaza.html",
            "isExternal": true
        },
        {
            "title": "Dwz reduction",
            "link": "https://toolboxpro.top/modules/others/dwz-reduction.html",
            "isExternal": true
        },
        {
            "title": "E commerce platform settled self inspection tool",
            "link": "https://toolboxpro.top/modules/others/e-commerce-platform-settled-self-inspection-tool.html",
            "isExternal": true
        },
        {
            "title": "Ebm toolbox",
            "link": "https://toolboxpro.top/modules/others/ebm-toolbox.html",
            "isExternal": true
        },
        {
            "title": "Emoji collection",
            "link": "https://toolboxpro.top/modules/others/emoji-collection.html",
            "isExternal": true
        },
        {
            "title": "Encoding",
            "link": "https://toolboxpro.top/modules/others/encoding.html",
            "isExternal": true
        },
        {
            "title": "Equation solver",
            "link": "https://toolboxpro.top/modules/others/equation-solver.html",
            "isExternal": true
        },
        {
            "title": "Expression simplifier",
            "link": "https://toolboxpro.top/modules/others/expression-simplifier.html",
            "isExternal": true
        },
        {
            "title": "Function graphing tool",
            "link": "https://toolboxpro.top/modules/others/function-graphing-tool.html",
            "isExternal": true
        },
        {
            "title": "Git command reference table",
            "link": "https://toolboxpro.top/modules/others/git-command-reference-table.html",
            "isExternal": true
        },
        {
            "title": "Global e commerce toolbox",
            "link": "https://toolboxpro.top/modules/others/global-e-commerce-toolbox.html",
            "isExternal": true
        },
        {
            "title": "Greater than symbol",
            "link": "https://toolboxpro.top/modules/others/greater-than-symbol.html",
            "isExternal": true
        },
        {
            "title": "Http request methods reference",
            "link": "https://toolboxpro.top/modules/others/http-request-methods-reference.html",
            "isExternal": true
        },
        {
            "title": "Id query",
            "link": "https://toolboxpro.top/modules/others/id-query.html",
            "isExternal": true
        },
        {
            "title": "Japanese conversion tool",
            "link": "https://toolboxpro.top/modules/others/japanese-conversion-tool.html",
            "isExternal": true
        },
        {
            "title": "Javascript minifier",
            "link": "https://toolboxpro.top/modules/others/javascript-minifier.html",
            "isExternal": true
        },
        {
            "title": "Letter conversion tool",
            "link": "https://toolboxpro.top/modules/others/letter-conversion-tool.html",
            "isExternal": true
        },
        {
            "title": "Linux command",
            "link": "https://toolboxpro.top/modules/others/linux-command.html",
            "isExternal": true
        },
        {
            "title": "Lucky wheel pro",
            "link": "https://toolboxpro.top/modules/others/lucky-wheel-pro.html",
            "isExternal": true
        },
        {
            "title": "Mianji",
            "link": "https://toolboxpro.top/modules/others/mianji.html",
            "isExternal": true
        },
        {
            "title": "Mind metrics pro",
            "link": "https://toolboxpro.top/modules/others/mind-metrics-pro.html",
            "isExternal": true
        },
        {
            "title": "Mobile tel segment",
            "link": "https://toolboxpro.top/modules/others/mobile-tel-segment.html",
            "isExternal": true
        },
        {
            "title": "Morse translator",
            "link": "https://toolboxpro.top/modules/others/morse-translator.html",
            "isExternal": true
        },
        {
            "title": "Net worth pro",
            "link": "https://toolboxpro.top/modules/others/net-worth-pro.html",
            "isExternal": true
        },
        {
            "title": "Operation plan tool",
            "link": "https://toolboxpro.top/modules/others/operation-plan-tool.html",
            "isExternal": true
        },
        {
            "title": "Paper sizes",
            "link": "https://toolboxpro.top/modules/others/paper-sizes.html",
            "isExternal": true
        },
        {
            "title": "Price compare",
            "link": "https://toolboxpro.top/modules/others/price-compare.html",
            "isExternal": true
        },
        {
            "title": "Raffle tool",
            "link": "https://toolboxpro.top/modules/others/raffle-tool.html",
            "isExternal": true
        },
        {
            "title": "Smart resp planner",
            "link": "https://toolboxpro.top/modules/others/smart-resp-planner.html",
            "isExternal": true
        },
        {
            "title": "Speaker cleaner",
            "link": "https://toolboxpro.top/modules/others/speaker-cleaner.html",
            "isExternal": true
        },
        {
            "title": "Special character tool with multilingual support",
            "link": "https://toolboxpro.top/modules/others/special-character-tool-with-multilingual-support.html",
            "isExternal": true
        },
        {
            "title": "Special symbols reference",
            "link": "https://toolboxpro.top/modules/others/special-symbols-reference.html",
            "isExternal": true
        },
        {
            "title": "Square root pro",
            "link": "https://toolboxpro.top/modules/others/square-root-pro.html",
            "isExternal": true
        },
        {
            "title": "Star history",
            "link": "https://toolboxpro.top/modules/others/star-history.html",
            "isExternal": true
        },
        {
            "title": "Star symbols",
            "link": "https://toolboxpro.top/modules/others/star-symbols.html",
            "isExternal": true
        },
        {
            "title": "Symbol copy",
            "link": "https://toolboxpro.top/modules/others/symbol-copy.html",
            "isExternal": true
        },
        {
            "title": "System of equations solver",
            "link": "https://toolboxpro.top/modules/others/system-of-equations-solver.html",
            "isExternal": true
        },
        {
            "title": "Temple blocks",
            "link": "https://toolboxpro.top/modules/others/temple-blocks.html",
            "isExternal": true
        },
        {
            "title": "Translator",
            "link": "https://toolboxpro.top/modules/others/translator.html",
            "isExternal": true
        },
        {
            "title": "Ua parser",
            "link": "https://toolboxpro.top/modules/others/ua-parser.html",
            "isExternal": true
        },
        {
            "title": "Usa dministrative divisions",
            "link": "https://toolboxpro.top/modules/others/usa-dministrative-divisions.html",
            "isExternal": true
        },
        {
            "title": "Viego toolbox",
            "link": "https://toolboxpro.top/modules/others/viego-toolbox.html",
            "isExternal": true
        },
        {
            "title": "Vim command reference",
            "link": "https://toolboxpro.top/modules/others/vim-command-reference.html",
            "isExternal": true
        },
        {
            "title": "Wheatstone bridge pro",
            "link": "https://toolboxpro.top/modules/others/wheatstone-bridge-pro.html",
            "isExternal": true
        },
        {
            "title": "Yuanzhuiti",
            "link": "https://toolboxpro.top/modules/others/yuanzhuiti.html",
            "isExternal": true
        },
        {
            "title": "Zhengfangti",
            "link": "https://toolboxpro.top/modules/others/zhengfangti.html",
            "isExternal": true
        },
        {
            "title": "Trademark classification table",
            "link": "https://toolboxpro.top/modules/pets/trademark-classification-table.html",
            "isExternal": true
        },
        {
            "title": "Density calculator",
            "link": "https://toolboxpro.top/modules/physics/density-calculator.html",
            "isExternal": true
        },
        {
            "title": "Engine horsepower calculator",
            "link": "https://toolboxpro.top/modules/physics/engine-horsepower-calculator.html",
            "isExternal": true
        },
        {
            "title": "Horsepower calculator",
            "link": "https://toolboxpro.top/modules/physics/horsepower-calculator.html",
            "isExternal": true
        },
        {
            "title": "Nth power calculator",
            "link": "https://toolboxpro.top/modules/physics/nth-power-calculator.html",
            "isExternal": true
        },
        {
            "title": "Power calc pro",
            "link": "https://toolboxpro.top/modules/physics/power-calc-pro.html",
            "isExternal": true
        },
        {
            "title": "Power calculator",
            "link": "https://toolboxpro.top/modules/physics/power-calculator.html",
            "isExternal": true
        },
        {
            "title": "Work hours calculator",
            "link": "https://toolboxpro.top/modules/physics/work-hours-calculator.html",
            "isExternal": true
        },
        {
            "title": "2fa totp",
            "link": "https://toolboxpro.top/modules/security/2fa-totp.html",
            "isExternal": true
        },
        {
            "title": "Chatgpt space remover",
            "link": "https://toolboxpro.top/modules/sports/chatgpt-space-remover.html",
            "isExternal": true
        },
        {
            "title": "Character counter",
            "link": "https://toolboxpro.top/modules/text-tools/character-counter.html",
            "isExternal": true
        },
        {
            "title": "Chinese capital number",
            "link": "https://toolboxpro.top/modules/text-tools/chinese-capital-number.html",
            "isExternal": true
        },
        {
            "title": "Chinese font name translation",
            "link": "https://toolboxpro.top/modules/text-tools/chinese-font-name-translation.html",
            "isExternal": true
        },
        {
            "title": "Day counter",
            "link": "https://toolboxpro.top/modules/text-tools/day-counter.html",
            "isExternal": true
        },
        {
            "title": "English art font generator",
            "link": "https://toolboxpro.top/modules/text-tools/english-art-font-generator.html",
            "isExternal": true
        },
        {
            "title": "Font generator",
            "link": "https://toolboxpro.top/modules/text-tools/font-generator.html",
            "isExternal": true
        },
        {
            "title": "Forbidden word detection tool",
            "link": "https://toolboxpro.top/modules/text-tools/forbidden-word-detection-tool.html",
            "isExternal": true
        },
        {
            "title": "Hollow knight save editor",
            "link": "https://toolboxpro.top/modules/text-tools/hollow-knight-save-editor.html",
            "isExternal": true
        },
        {
            "title": "La te x equation editor",
            "link": "https://toolboxpro.top/modules/text-tools/la-te-x-equation-editor.html",
            "isExternal": true
        },
        {
            "title": "Life count",
            "link": "https://toolboxpro.top/modules/text-tools/life-count.html",
            "isExternal": true
        },
        {
            "title": "New word creator",
            "link": "https://toolboxpro.top/modules/text-tools/new-word-creator.html",
            "isExternal": true
        },
        {
            "title": "Password check",
            "link": "https://toolboxpro.top/modules/text-tools/password-check.html",
            "isExternal": true
        },
        {
            "title": "Password generator",
            "link": "https://toolboxpro.top/modules/text-tools/password-generator.html",
            "isExternal": true
        },
        {
            "title": "Pinyin converter",
            "link": "https://toolboxpro.top/modules/text-tools/pinyin-converter.html",
            "isExternal": true
        },
        {
            "title": "Random country generator",
            "link": "https://toolboxpro.top/modules/text-tools/random-country-generator.html",
            "isExternal": true
        },
        {
            "title": "Text autospace",
            "link": "https://toolboxpro.top/modules/text-tools/text-autospace.html",
            "isExternal": true
        },
        {
            "title": "Text case converter",
            "link": "https://toolboxpro.top/modules/text-tools/text-case-converter.html",
            "isExternal": true
        },
        {
            "title": "Text remover",
            "link": "https://toolboxpro.top/modules/text-tools/text-remover.html",
            "isExternal": true
        },
        {
            "title": "Text to speech",
            "link": "https://toolboxpro.top/modules/text-tools/text-to-speech.html",
            "isExternal": true
        },
        {
            "title": "Ultimate fancy text generator",
            "link": "https://toolboxpro.top/modules/text-tools/ultimate-fancy-text-generator.html",
            "isExternal": true
        },
        {
            "title": "Sun earth",
            "link": "https://toolboxpro.top/modules/weather-health/sun-earth.html",
            "isExternal": true
        },
        {
            "title": "Weather",
            "link": "https://toolboxpro.top/modules/weather-health/weather.html",
            "isExternal": true
        }
    ];

    const container = document.getElementById('related-tools-container');
    if (!container) return;

    // 随机打乱并取 5 个链接
    const randomLinks = allLinks.sort(() => 0.5 - Math.random()).slice(0, 5);

    // 随机图标生成器 (增强视觉效果)
    const icons = ['fa-calculator', 'fa-line-chart', 'fa-pie-chart', 'fa-percent', 'fa-usd', 'fa-bank', 'fa-credit-card', 'fa-bar-chart'];
    const colors = [
        'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
        'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
        'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
        'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
        'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
    ];

    // 构建符合 Tailwind 风格的 HTML 结构 (匹配 .glass 和 .shadow-soft)
    let html = `
        <div class="glass rounded-2xl p-6 shadow-soft border-t-4 border-t-indigo-500 mb-6">
            <h3 class="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <i class="fa fa-wrench text-indigo-500"></i> Useful Tools
            </h3>
            <div class="space-y-3">
    `;
    
    randomLinks.forEach((item, index) => {
        // 随机分配图标和颜色
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const randomColor = colors[index % colors.length];

        html += `
            <a href="${item.link}" ${item.isExternal ? 'target="_blank"' : ''} class="tool-card group">
                <div class="icon-box ${randomColor}">
                    <i class="fa ${randomIcon}"></i>
                </div>
                <div class="overflow-hidden">
                    <div class="text-sm font-bold text-slate-800 dark:text-white truncate group-hover:text-primary transition-colors">${item.title}</div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 truncate flex items-center gap-1">
                        ${item.isExternal ? '<i class="fa fa-external-link text-[10px]"></i>' : ''} 
                        Check it out
                    </div>
                </div>
            </a>
        `;
    });

    html += `   </div>
        </div>`;
    
    container.innerHTML = html;
});
