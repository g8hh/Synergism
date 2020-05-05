/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Buildings': '建筑',
    'Challenges': '挑战',
    'Click one of the buttons on the left to start a challenge!': '点击选择左侧一个挑战按钮来开启挑战!',
    'Current Challenge: None': '正在进行的挑战:无',
    'Current Challenges: No Accelerators [Transcension]': '正在进行的挑战:无加速（超越挑战）',
    'Export the game here.': '在这里导出游戏',
    'No Accelerator Challenge': '无加速挑战',
    'No background: Unachieved, nothing special.': '没有背景色:未完成，没有加成',
    'No Multiplier Challenge': '无加倍挑战',
    'No Shards Challenge': '无碎片挑战',
    'Prestige': '转生',
    'Prism Rune': '棱柱符文',
    'Purple background: Unachieved, provides bonus multiplier.': '紫色背景:未完成，提供加成',
    'Reincarnation': '转世',
    'Research': '研究',
    'Runes': '符文',
    'SACRIFICE': '献祭',
    'Settings': '选项',
    'Speed Rune': '加速符文',
    'Successfully imported your savefile. Go nuts!': '存档已保存，去疯吧!',
    'Tax+': '税收+',
    'Thanks to researches, your effective levels are increased by': '通过研究，你的提高了',
    'Thrift Rune': '节俭符文',
    'To leave a challenge, press the hotkey listed above OR click on the red Challenge "C" button on the reset buttons on top.': '想要退出挑战，你可以按列表里的快捷键或者点击上方转生按钮右边的C按钮',
    'To leave a reincarnation challenge, press the grey Challenge "C" instead!': '如果想要退出转世挑战，请按灰色的C',
    'Toggle amount to buy': '批量购买',
    'Toggle amount to use per sacrifice': '批量献祭',
    'Transcension': '超越',
    'Upgrades': '升级',
    'Hover over an achievement to view information.': '鼠标悬停在成就上查看详细信息',
    'Achievements': '成就',
    'A Loyal Employee: Hire your first worker.': '一个忠实的员工:招募第一个工人',
    'Small Business: Hire 10 workers.': '小生意:招募10个工人',
    'Now we\'re synergizing!: Hire 100 workers.': '现在我们在协作了!:招募100个工人',
    'Gaining Redundancies: Hire 1,000 workers.': '该裁员了:招募1000个工人',
    'A cog in the machine: Hire 5,000 workers.': '机器上的齿轮:招募5000个工人',
    'A nail in the machine: Hire 10,000 workers.': '机器上的钉子:招募10,000个工人',
    'Are we even in the machine anymore?: Hire 20,000 workers.': '我们还在机器里吗？:招募20,000个工人',
    'STONKS!!!: Purchase 1 Investment.': '进击!!!:购买一个投资',
    'Planning ahead: Purchase 10 Investments.': '提前计划:购买10个投资',
    'Inside Trading: Purchase 100 Investments.': '内部交易:购买100个投资',
    'Outside Trading?: Purchase 1,000 Investments.': '外部交易?:购买1000个投资',
    'Market Tackover: Purchase 5,000 Investments.': '接管市场:购买5000个投资',
    'Trickle-Down Economics: Purchase 10,000 Investments.': '滴入式经济学:购买10,000个投资',
    'Eliminated Regulation: Purchase 20,000 Investments.': '拒绝调控:购买20,000个投资',
    'Stationery!: Build 1 Printer.': '文具!:购买一台打印机',
    'Printing Press: Build 10 Printer.': '印刷机:购买10台打印机',
    'It prints free money!: Build 100 Printer.': '它印的是免费的钱!:购买100台打印机',
    'Solving Our Debts: Build 1,000 Printer.': '解决我们的债务:购买1000台打印机',
    'Monopolizing the market: Build 5,000 Printer.': '垄断市场:购买5000台打印机',
    'We\'re running out of Ink!: Build 10,000 Printer.': '我们的墨水不够用了!:购买10,000台打印机',
    '3D-printing the universe: Build 20,000 Printers.': '3D打印宇宙:购买20,000台打印机',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    'Workers': '工人',
    'Investments': '投资',
    'Printers': '打印机',
    'Coin Mints': '铸币厂',
    'Alchemies': '炼金术',
    'Coin/Sec': '金币/秒',
    'Accelerators': '加速器',
    'Multipliers': '加倍',
    'Accelerator Boost': '加速器加成',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    'BOUGHT!': '已购买!',
    'COMPLETED!': '已完成!',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);