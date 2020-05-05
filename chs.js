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
    'Successfully imported your savefile. Go nuts!': '存档已导入，去疯吧!',
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
    'Copied to clickboard! Paste it somewhere safe.': '存档已导出至剪贴板!请把它粘贴在安全的地方',
    'Import the game here.': '在这里导入游戏',
    'Confirmation Toggles': '转生时的弹窗询问',
    'Go through a transcension, except Multipliers do not directly increase Multiplier. Instead, Multipliers act as Accelerators. Accelerator Power from Accelerator Boosts are nerfed by about 50%.': '完成一次超越,加倍不再像加倍一样工作,而是像加速器一样,并且加速器强化的效果削减50%',
    'Go through a transcension, except Accelerators only boost generation through Coin Upgrades. Otherwise, Accelerators do nothing. Multiplier power is nerfed by about 75%.': '完成一次超越,加速器只能提供金币的繁衍加成,再其它方面加速器不再生效,加倍效果也被削减了75%',
    'Go through a transcension, except you cannot gain Crystals or Mythos Shards. Accelerators are weaker.': '完成一次超越,你无法获得水晶和神话碎片,加速器也被削弱了',
    'Go through a transcension, except the cost of Coin buildings, Accelerators and Multipliers scales much faster and scales immediately. Gets harder each completion!': '完成一次超越,所有建筑,加速器和加倍价格膨胀更快并且立即开始膨胀,每次完成后都会变得更难!',
    'Go through a transcension, except prestiging rewards scale much more slowly. Diamond generation is also debuffed, and diamond-boosting upgrades are disabled. Gets harder each completion!': '完成一次超越,转生收益将变得非常低,钻石收益也被严重削减,并且所有增加钻石产量的升级无效,每次完成后都会变得更难!',
    'Cost+ Challenge': '消耗增加挑战',
    'Diamond- Challenge': '钻石减少挑战',
    'Press [1], [2], [3], [4], or [5] to enter challenges, starting from the top. Press [E] or [e] to exit your current challenge!': '按[1],[2],[3],[4]或[5]来进入挑战,挑战在页面上方查看,按[E]或[e]来退出挑战!',
    'Press [1], [2], [3], [4], or [5] to buy the respective tiered producer. Press [6], [7], [8], [9] or [0] to buy the corresponding Crystal upgrade starting on the left.': '按[1],[2],[3],[4]或[5]来购买生产者,按[6],[7],[8],[9]或[0]来购买右侧的水晶升级',
    'Press [1], [2], [3], [4], or [5] to buy the corresponding tier starting from the top. Press [A] to buy Accelerator, [M] to buy Multiplier, or [B] to buy Accelerator Boost. Press [left arrow] or [right arrow] to switch tabs and [P], [T], [R] for corresponding reset features. Enjoy!': '按[1],[2],[3],[4]或[5]来购买生产者,按[A]来购买加速器,[M]来购买加倍,[B]来购买加速器强化,用[←]和[→]来切换转生标签并用[P],[T],[R]转生',
    'Hey, hover over a rune icon to get details on what each one does and what benefits they\'re giving you!': '鼠标悬停在符文上来查看它会给你带来什么',
    '+1 Accelerator, +0.5% Accelerators per level. +1 Accelerator Boost every 10 levels!': '+1加速器,+0.5%加速器每级,+1加速器强化每10级',
    '~(Level^2/100) Multipliers, +0.5% Multipliers per level. Tax growth is delayed more for each level!': '+(等级^2/100)加倍,+0.5%加倍每级,每级都会降低税收',
    '~(1 + Level^2 * 2^Level / 256)x Crystal Production. +1 free level for each Crystal upgrade per 10 levels!': '(1+等级^2*2^等级/256)倍水晶产量,每10级额外获得一级所有水晶升级',
    'Duplication Rune': '重叠符文',
    'Press [1], [2], [3], or [4] on your keyboard to use offerings for each rune, starting with Speed Rune on the left; must have rune unlocked to use hotkey!': '按[1],[2],[3]或[4]使用祭品献祭对应符文,从左到右,必须解锁符文后才能献祭',
    'Press [1], [2], [3], [4], or [5] to buy the respective tiered producer.': '按[1],[2],[3],[4]或[5]来购买生产者',
    'Red background: Unachieved, provides content/feature unlock.': '红色背景:未完成,会提供特权/游戏内容解锁',
    'Green background: Achieved.': '绿色背景:已完成成就',
    'Gain a 5% multiplicative boost to crystals per AP per level.': '每级每个成就点给予水晶产量5%加成',
    'Gain a boost to crystals based on held coins per level.': '基于未使用的金币提供水晶产量加成',
    'Each purchased Crystal producer increases generation of Crystal producers by .1% per level.': '每级每个购买的水晶生产者增加总水晶产量.1%',
    'Improve the multiplier to coin production by .05 exponent per level.': '增加水晶提供的金币产量指数.05每级',
    'Every challenge completion increases crystal gain by 1% per level.': '每个完成的挑战提高水晶产量1%每级',
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
    'Prestige when exponent of diamonds increases by': '自动转生当转生后钻石位数增加',
    'Times Completed:': '完成的次数',
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
    'Reward: Accelerator cost scaling starts 5 slower, and Multiplier cost scaling starts 2 slower per completion. Buildings scale 1% slower as well! This will be the your highest ever completions so you will also gain': '奖励:每次完成挑战加速器价格膨胀减缓5级,加倍价格膨胀减缓2级,建筑价格膨胀也会减缓1%,每次完成会获得',
    'Reward: +10%, +10 Multiplier Power Boosts per completion. First Completion awards 1 multiplier. This will be the your highest ever completions so you will also gain 1x': '奖励:每次完成使加倍+10,+10%加成,首次完成获得一个加倍,每次完成会获得',
    'Reward: Increase crystal multiplier to production by an exponent of .04 per completion. Purchased mythos producers will also increase mythos producers by +0.5% per producer per completion. This will be the your highest ever completions so you will also gain': '奖励:每次完成以.04的指数增加水晶产量,每次完成后已购买的神话生产者酱额外提高神话神话产出0.5%,每次完成会获得',
    'Reward: Increase crystal multiplier to production by an exponent of .04 per completion. Purchased mythos producers will also increase mythos producers by +0.5% per producer per completion. This will be the your highest ever completions so you will also gain': '奖励:每次完成以.04的指数增加水晶产量,每次完成后已购买的神话生产者酱额外提高神话神话产出0.5%,每次完成会获得',
    'Reward: Each completions multiplies all crystal producer production by 10. Diamond gain is also increased significantly per completion. This will be the your highest ever completions so you will also gain 1x': '奖励:每次完成都将使所有水晶生产者的产量提高10倍,钻石收益也会明显的提高,每次完成会获得',
    'Coins, Coin Producers, Coin Upgrades, and Crystals are reset, but in return you gain diamonds and a few offerings.': '金币,金币生产者,金币升级,水晶都会被重置,但你可以获得钻石和少量祭品',
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
    'Printing Press: Build 10 Printers.': '印刷机:购买10台打印机',
    'It prints free money!: Build 100 Printers.': '它印的是免费的钱!:购买100台打印机',
    'Solving Our Debts: Build 1,000 Printers.': '解决我们的债务:购买1000台打印机',
    'Monopolizing the market: Build 5,000 Printers.': '垄断市场:购买5000台打印机',
    'We\'re running out of Ink!: Build 10,000 Printers.': '我们的墨水不够用了!:购买10,000台打印机',
    '3D-printing the universe: Build 20,000 Printers.': '3D打印宇宙:购买20,000台打印机',
    'A national treasure: Establish 1 Coin Mint.': '国家的宝藏:建立一个铸币厂',
    'Now with competition!: Establish 10 Coin Mints.': '是时候开始竞争了!:建立10个铸币厂',
    'Counterfeiting with Style!: Establish 100 Coin Mints.': '有个性的仿制!:建立100个铸币厂',
    'Why do we need all these?: Establish 1000 Coin Mints.': '为什么我们需要这么多?:建立1000个铸币厂',
    'No really, why??: Establish 5,000 Coin Mints.': '这不是真的,为什么??:建立5000个铸币厂',
    'Is no one to stop us???: Establish 10,000 Coin Mints.': '没有人来阻止我们吗???:建立10,000个铸币厂',
    'Oh well, time to mint: Establish 20,000 Coin Mints.': '噢好吧,是时候铸币了:建立20,000个铸币厂',
    'Newton\'s Apprentice: Create 1 Alchem.': '牛顿学说:创造一个炼金术',
    'Lab Work: Create 10 Alchems.': '开始实验:创造10个炼金术',
    'Satanic Becomings: Create 66 Alchems.': '正在成为撒旦:创造66个炼金术',
    'Satan Incarnate: Create 666 Alchemies.': '撒旦的化身:创造666个炼金术',
    'Is this more demonic?: Create 6,666 Alchemies.': '这会更邪恶吗?:创造6666个炼金术',
    'Golden Paradise: Create 17,777 Alchemies.': '黄金的天堂:创造17,777个炼金术',
    'Unlocking secrets to the world: Create 42,777 Alchemies.': '正在探索世界的秘密:创造42,777个炼金术',
    'Leveling up: Prestige for at least 1 Diamond.': '正在升级:转生获得至少一个钻石',
    'High-Tiered: Prestige for at least 1e+6 Diamonds.': '高等级:转生获得至少1e6钻石',
    'Highly Regarded: Prestige for at least 1e+100 Diamonds.': '备受推崇:转生获得至少1e100钻石',
    'Prestigious: Prestige for at least 1e+1000 Diamonds.': '威名远扬:转生获得1e1000钻石',
    'Legendary: Prestige for at least 1e+10000 Diamonds.': '成为传说:转生获得1e10000钻石',
    'Divine: Prestige for at least 1e+77777 Diamonds.': '神圣的:转生获得1e77777钻石',
    'Perfectly Respected: Prestige for at least 1e+250000 Diamonds.': '无人不知:转生获得1e250000钻石',
    'A Simple Detour: Transcend for at least 1 Mythos.': '一个简单的绕道:超越获得至少一个神话',
    'Tunnel Vision: Transcend for at least 1e+6 Mythos.': '井底之蛙:超越获得至少1e6神话',
    'Risen from the Ashes: Transcend for at least 1e+50 Mythos.': '从灰烬中重生:超越获得1e50神话',
    'Paradigm Shift: Transcend for at least 1e+308 Mythos.': '思维转换:超越获得1e308神话',
    'Preparation: Transcend for at least 1e+2000 Mythos.': '准备工作:超越获得1e2000神话',
    'Revising the Plan: Transcend for at least 1e+25000 Mythos.': '完善计划:超越获得1e25000神话',
    'Leaving the Universe: Transcend for at least 1e+100000 Mythos.': '离开宇宙:超越获得1e100000神话',
    'Going Quantum: Reincarnate for at least 1 Particle.': '量子化:转世获得至少一个粒子',
    'Tunneling Vision: Reincarnate for at least 100,000 Particles.': '隧道视觉:转世获得至少100,000粒子',
    'Simulating the World: Reincarnate for at least 1e+30 Particles.': '模拟世界:转世获得1e30粒子',
    'Multidimensional Creation: Reincarnate for at least 1e+200 Particles.': '多维创造:转世获得1e200粒子',
    'Lepton Dance: Reincarnate for at least 1e+1000 Particles.': '轻子舞动:转世获得1e1000粒子',
    'Do we have enough yet?: Reincarnate for at least 1e+5000 Particles.': '我们是不是已经有足够多了?:转世获得1e5000粒子',
    'I Feel Luck in My Cells: Reincarnate for at least 1e+7777 Particles.': '连我的细胞都感觉到了幸运:转世获得1e7777粒子',
    'One Way Only: Prestige without owning multipliers.': '只用其中一种:不购买加倍进行一次转生',
    'Authentic Shifting: Transcend without having owned a multiplier.': '真正的转变:不购买加倍进行一次超越',
    'The Singularity: Reincarnate without having owned a multiplier.': '奇点:不购买加倍进行一次转世',
    'Gotta go SLOW!: Prestige without owning Accelerators or Accelerator Boosts.': '正在变慢!:不购买加速器和加速器强化进行一次转生',
    'I\'m really going slow: Transcend without having owned Accelerators or Boosts.': '我真的变慢了:不购买加速器和加速器强化进行一次超越',
    'Are we there yet?: Reincarnate without having owned Accelerators or Boosts.': '我们还在那里吗?:不购买加速器和加速器强化进行一次转世',
    'A careful search for Diamonds: Get 1e120,000 Coins in [Diamond-] without buying Accelerators or Boosts.': '仔细寻找钻石:在钻石减少挑战中不购买加速器和加速器强化达到e120,000金币',
    'Very Based: Prestige without purchasing Coin Upgrades.': '非常基础:不购买金币升级进行一次转生',
    'Miser: Transcend without purchasing Coin Upgrades.': '守财奴:不购买金币升级进行一次超越',
    'True Miser: Transcend without purchasing Coin or Prestige Upgrades.': '真正的守财奴:不购买金币升级和钻石升级进行一次超越',
    'Coinless Pursuit: Reincarnate without purchasing Coin Upgrades.': '穷人的追求:不购买金币升级进行一次转世',
    'Diamonds don\'t matter to me!: Reincarnate without purchasing Coin or Prestige Upgrades.': '钻石和我没关系!:不购买金币升级和钻石升级进行一次转世',
    'Leave nothing behind: Reincarnate without purchasing Coin, Prestige or Transcend Upgrades.': '什么也不留下:不购买金币升级,钻石升级和神话升级进行一次转世',
    'Leave NOTHING behind.: Reincarnate without purchasing Coin, Prestige, Transcend, or Generator Upgrades.': '真的什么也不留下:不购买金币升级,钻石升级,神话升级和繁衍升级进行一次转世',
    'Out of Order: Buy Generator Upgrade Row 1, #2 first in a transcension (IV -> III)': '无序:始终先购买繁衍升级第一排第二项的情况下完成一次超越(IV -> III)',
    'More Out of Order: Buy Generator Upgrade Row 1, #3 first in a transcension (III -> II)': '更多的无序:始终先购买繁衍升级第一排第三项的情况下完成一次超越(III -> II)',
    'Four\'s a Company: Buy Generator Upgrade Row 1, #4 first in a transcension (II -> I)': '第四项,一个工厂:始终先购买繁衍升级第一排第四项的情况下完成一次超越(II -> I)',
    'Five\'s a Croud: Buy Generator Upgrade Row 1, #5 first in a transcension (I -> V)': '第五项,一个骗局:始终先购买繁衍升级第一排第五项的情况下完成一次超越(I -> V)',
    'Vaseline without the Machine: Exit [No Multiplier] with at least 1e1000 coins and without any of the row 1 generator upgrades.': '没有润滑油的机器:拥有1e1000金币并且不购买第一排(横向)繁衍升级的情况下退出无加倍挑战',
    'Rage against the Machine: Exit [No Accelerator] with at least 1e1000 coins and without any of the row 1 generator upgrades.': '对机器发脾气:拥有1e1000金币并且不购买第一排(横向)繁衍升级的情况下退出无加速挑战',
    'Amish Paradise: Exit [No Shards] with at least 1e99,999 coins and without any of the row 1 generator upgrades.': '阿曼门诺的天堂:在拥有1e99,999金币并且不购买第一排(横向)繁衍升级的情况下退出无碎片挑战',
    'Single-Cell: Complete [No Multiplier] once.': '第一部分:完成一次无加倍挑战',
    'Solidarity: Complete [No Multiplier] three times.': '团结一致:完成三次无加倍挑战',
    'Duplication-Free!: Complete [No Multiplier] five times.': '自由的重复!:完成五次无加倍挑战',
    'Multitasking Challenged: Complete [No Multiplier] ten times.': '多重挑战:完成十次无加倍挑战',
    'No Deaths: Complete [No Multiplier] twenty times.': '不会死亡:完成二十次无加倍挑战',
    'Population One: Complete [No Multiplier] fifty times.': '最受欢迎的挑战:完成五十次无加倍挑战',
    'Insert Another Token: Complete [No Multiplier] seventy-five times.': '插入另一个标记:完成七十五次无加倍挑战',
    'Slow Start: Complete [No Accelerator] once': '缓慢的开始:完成一次无加速挑战',
    'Respawn Rate -12%: Complete [No Accelerator] three times.': '刷新频率-12%:完成三次无加速挑战',
    'Putting the Breaks On: Complete [No Accelerator] five times.': '踩住刹车:完成五次无加速挑战',
    'Racing a Sloth...: Complete [No Accelerator] ten times.': '比比谁慢...:完成十次无加速挑战',
    '... and Losing.: Complete [No Accelerator] twenty times.': '...然后输了:完成二十次无加速挑战',
    'Planck Distance Traveled: Complete [No Accelerator] fifty times.': '通过了普朗克级的距离:完成五十次无加速挑战',
    'Inverse-Ackermann Growth: Complete [No Accelerator] seventy-five times.': '逆阿克曼增长:完成七十五次无加速挑战',
    'Intact: Complete [No Shards] once.': '完整:完成一次无碎片挑战',
    'Augments are Stupid!: Complete [No Shards] three times.': '强化太愚蠢了!:完成三次无碎片挑战',
    'Grandmasters are Brilliant!: Complete [No Shards] five times.': '大师还是很聪明!:完成五次无碎片挑战',
    'Gotta get those Grandmasters Stronger: Complete [No Shards] ten times.': '使大师变得更强:完成十次无碎片挑战',
    'Summoning Enhancements: Complete [No Shards] twenty times.': '正在召唤附魔:完成二十次无碎片挑战',
    'Magic 99/99: Complete [No Shards] fifty times.': '魔法99/99:完成五十次无碎片挑战',
    'Perfect Foresight: Complete [No Shards] seventy-five times.': '完美的远见:完成七十五次无碎片挑战',
    'Inflation: Complete [Cost+] once.': '通货膨胀:完成一次消耗增加挑战',
    'Hyperinflation: Complete [Cost+] three times.': '恶性通货膨胀:完成三次消耗增加挑战',
    'Market Bubble: Complete [Cost+] five times.': '经济泡沫:完成五次消耗增加挑战',
    'Bull Market: Complete [Cost+] ten times.': '牛市:完成十次消耗增加挑战',
    'Wealth Inequality: Complete [Cost+] twenty times.': '贫富不均:完成二十次消耗增加挑战',
    'Severe Overpay: Complete [Cost+] fifty times.': '严重透支:完成五十次消耗增加挑战',
    'Societal Collapse: Complete [Cost+] seventy-five times.': '社会崩溃:完成七十五次消耗增加挑战',
    'Excavation: Complete [Diamond-] once.': '挖掘:完成一次钻石减少挑战',
    'Digging Deep: Complete [Diamond-] three times.': '深挖:完成三次钻石减少挑战',
    'Frack As Needed: Complete [Diamond-] five times.': '需要压碎:完成五次钻石减少挑战',
    'Unobtainium Pickaxe: Complete [Diamond-] ten times.': '难得的镐子:完成十次钻石减少挑战',
    'Fortune III: Complete [Diamond-] twenty times.': '财富III:完成二十次钻石减少挑战',
    'Every kiss...: Complete [Diamond-] fifty times.': '每一个吻...:完成五十次钻石减少挑战',
    '...begins with K.: Complete [Diamond-] seventy-five times.': '...都从K开始(kiss):完成七十五次钻石减少挑战',
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
    'Increase production of Workers per producer bought.': '基于已购买的生产者提供工人的加成',
    'Increase production of Investments per producer bought.': '基于已购买的生产者提供投资的加成',
    'Increase production of Printers per producer bought.': '基于已购买的生产者提供打印机的加成',
    'Increase production of Mints per producer bought.': '基于已购买的生产者提供铸币厂的加成',
    'Increase production of Alchemies per producer bought.': '基于已购买的生产者提供炼金术的加成',
    'Increase all production by 25% per producer bought.': '每个购买的生产者会增加所有产量25%',
    'Gain free multipliers based on your purchased Alchemies.': '根据炼金术等级获得免费的加倍',
    'Effect: Worker Production': '效果:工人产量',
    'Effect: Investment Production': '效果:投资产量',
    'Effect: Printer Production': '效果:打印机产量',
    'Effect: Mint Production': '效果:铸币厂产量',
    'Effect: Alchemy Production': '效果:炼金术产量',
    'Effect: All Coin production': '效果:所有金币产量',
    'Effect: Gain': '效果:获得',
    'Gain 1 free Accelerator per 7 purchased Multipliers.': '每购买7个加倍可以获得一个免费的加速器',
    'Gain 1 free Multiplier per 10 purchased Accelerators.': '每购买10个加速器可以获得一个免费的加倍',
    'Improve Workers based on the first 750 purchased Investments.': '基于前750个已购买投资提供工人的加成',
    'Accelerators improve generation production by 2% each.': '加速器每个提供繁衍效果2%',
    'Effect: Generator efficiency': '效果:繁衍效果',
    'Each prestige multiplies production by 1.01 (Max: 1e4x).': '每次转生使倍率增强1.01(最大:1e4倍)',
    'Effect: All Coin production': '效果:所有金币产出',
    'Augments buff the production of Investments.': '强化(超越标签)会增强投资',
    'Free Accelerators buff generation of Printers.': '免费的加速器会增强打印机的繁衍效果',
    'Effect: Printer Generation': '效果:打印机繁衍效果',
    'Free Accelerators buff generation of Mints.': '免费的加速器会增强铸币厂的繁衍效果',
    'Effect: Mint Generation': '效果:铸币厂繁衍效果',
    'Acceleration Multiplier buffs Diamond gain.': '加速器和加倍的加成会额外影响钻石获取',
    'Multiply Mint production by 1e+100.': '铸币厂获得1e100的加成',
    'Multiply Printer production based on Mythos Shards.': '基于神话碎片提高打印机加成',
    'Multiply Investment production based on Mythos.': '基于神话提高投资加成',
    'Coin upgrade 1 is raised to the eleventh power.': '金币升级每级提供11倍的效果',
    'Effect: All coin production is further multiplied by': '效果:大幅提升所有金币产量',
    'Gain 1 Multiplier and 5 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍和5个加速器以及1%的免费加速器/加倍',
    'Gain 1 Multiplier and 4 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍和4个加速器以及1%的免费加速器/加倍',
    'Gain 1 Multiplier and 3 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍和3个加速器以及1%的免费加速器/加倍',
    'Gain 1 Multiplier and 2 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍和2个加速器以及1%的免费加速器/加倍',
    'Gain 1 Multiplier and 1 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍和1个加速器以及1%的免费加速器/加倍',
    'Gain a free Accelerator Boost plus 2.5% more free Accelerator Boosts.': '获得1个加速器加成以及2.5%加速器加成',
    'Gain free Accelerators based on unspent Coins.': '基于未使用的金币获得免费加速器',
    'Gain a free Multiplier per 160 Coin producers bought.': '每购买160个金币生产者获得额外一个加倍',
    'Gain a free Accelerator per 80 Coin producers bought.': '每购买80个金币生产者获得额外一个加速器',
    'Gain free Multipliers based on unspent Coins.': '基于未使用的金币获得免费加倍',
    'Gain 1 free Accelerator Boost per 2,000 Coin producers bought.': '每购买2000个金币生产者获得额外一个加速器加成',
    'Gain free Accelerators based on Unspent Diamonds.': '基于未使用的钻石获得免费加速器',
    'Gain 1 free Multiplier for each Accelerator Boost owned.': '每个拥有的加速器加成额外提供一个加倍',
    'Gain 3% more free Accelerators and Multipliers.': '获得3%的免费加速器和加倍',
    'Gain 2% more free Accelerators and Multipliers [up to 5%].': '获得2%的免费加速器和加倍[最高5%]',
    'Gain 1% more free Accelerators and Multipliers [up to 5%].': '获得1%的免费加速器和加倍[最高5%]',
    'Gain 3% more free Accelerators and Multipliers [up to 5%].': '获得3%的免费加速器和加倍[最高5%]',
    'Gain 4% more free Accelerators and Multipliers [up to 5%].': '获得4%的免费加速器和加倍[最高5%]',
    'Gain 5% more free Accelerators and Multipliers [up to 5%].': '获得5%的免费加速器和加倍[最高5%]',
    'Multiply production based on unspent Mythos.': '基于未使用的神话提供加成',
    'Effect: Welcome to Transcension! Coin production is multiplied by': '效果:欢迎来到超越!提高金币产出',
    'Multiply Mythos Shard production based on unspent Diamonds.': '基于未使用的钻石提高神话碎片加成',
    'Effect: All mythos shard producers are going into overdrive:': '效果:所有神话碎片生产者都超载了:',
    'Multiply coin production by 1.01 per transcension (Max: 1e30x).': '每次超越提供1.01金币加成(最高:1e30倍)',
    'Effect: Multiply all coin production by': '效果:所有金币产量提高',
    'Multiply Mythos gain on Transcend by 1.01 per transcension (Max: 1e6x).': '每次超越使超越获得1.01额外神话加成(最高:1e6倍)',
    'Effect: Multiply Mythos gained in Transcension by': '效果:超越获得的神话加成',
    'Gain free Accelerators based on Mythos Shards.': '基于神话碎片获得免费的加速器',
    'Accelerator Boosts are 5% stronger and do not reset prestige features.': '加速器加成效果提高5%,并且不会重置转生加成',
    'Effect: It\'s kinda self-evident, ain\'t it?': '效果:这真是个亲切的升级,不是吗',
    'Multiply Mythos Shard production based on your AP.': '基于你的成就点加成神话碎片产量',
    'Effect: Mythos-tier producers production': '效果:神话碎片生产者产量提高',
    'Multiply production based on owned Accelerators and Multipliers.': '基于已有的加速器和加倍提供产量加成',
    'Effect: Multiply coin production by a factor of': '效果:大幅提升金币产量',
    'Gain free Multipliers based on unspent Mythos.': '基于未使用的神话获得免费的加倍',
    'Gain +25% free Accelerators and Multipliers, but ONLY while doing challenges.': '获得25%免费的加速器和加倍,但只能在挑战中生效',
    'Effect: It\'s quite obvious what the benefit is, but you must be in a challenge for it to be in use!': '一个相当巨大的加成,但你必须在挑战中才能使用它',
    'Alchemies will produce Coin Mints.': '炼金术会繁衍铸币厂',
    'Effect: All you need to know is right above this message!': '效果:你想要知道的东西都在这条信息上面!',
    'Coin Mints will produce Printers.': '铸币厂会繁衍打印机',
    'Printers will produce Investments.': '打印机会繁衍投资',
    'Investments will produce Workers.': '投资会繁衍工人',
    'Purchased Workers will produce Alchemies.': '购买的工人会繁衍炼金术',
    'Refineries can produce Alchemies equal to Refineries owned raised to 0.10': '炼油厂将按已有的0.10生产炼金术',
    'Refinery -> Alchemy exponent increased from 0.10 to 0.25.': '炼油厂生产炼金术的效率从0.10提高至0.25',
    'Refinery -> Alchemy exponent increased from 0.25 to 0.50': '炼油厂生产炼金术的效率从0.25提高至0.50',
    'Refinery -> Alchemy exponent increased from 0.50 to 0.75': '炼油厂生产炼金术的效率从0.50提高至0.75',
    'Refinery -> Alchemy exponent increased from 0.75 to 1': '炼油厂生产炼金术的效率从0.75提高至1',
    'Augments can produce Pandora Boxes equal to Augments owned raised to 0.08': '强化将按已有的0.08生产潘多拉盒子',
    'Augment -> Box exponent increased from 0.08 to 0.16': '强化生产潘多拉盒子的效率从0.08提高至0.16',
    'Augment -> Box exponent increased from 0.16 to 0.24': '强化生产潘多拉盒子的效率从0.16提高至0.24',
    'Augment -> Box exponent increased from 0.24 to 0.32': '强化生产潘多拉盒子的效率从0.24提高至0.32',
    'Augment -> Box exponent increased from 0.32 to 0.40': '强化生产潘多拉盒子的效率从0.32提高至0.40',
    'Protons can produce Grandmasters equal to Protons owned raised to 0.05': '质子将按已有的0.05生产大师',
    'Protons -> Grandmaster exponent increased from 0.05 to 0.10': '质子生产大师的效率从0.05提高至0.10',
    'Protons -> Grandmaster exponent increased from 0.10 to 0.15': '质子生产大师的效率从0.10提高至0.15',
    'Protons -> Grandmaster exponent increased from 0.15 to 0.20': '质子生产大师的效率从0.15提高至0.20',
    'Protons -> Grandmaster exponent increased from 0.20 to 0.25': '质子生产大师的效率从0.20提高至0.25',
    'Automatically buy Workers if affordable.': '自动购买工人',
    'Automatically buy Investments if affordable.': '自动购买投资',
    'Automatically buy Printers if affordable.': '自动购买打印机',
    'Automatically buy Coin Mints if affordable.': '自动购买铸币厂',
    'Automatically buy Alchemies if affordable.': '自动购买炼金术',
    'Automatically buy Accelerators if affordable.': '自动购买加速器',
    'Automatically buy Multipliers if affordable.': '自动购买加倍',
    'Automatically buy Accelerator Boosts if affordable.': '自动购买加速器加强',
    'Unlock Automatic Transcensions.': '解锁自动超越',
    'Automatically buy Generators if affordable.': '自动购买繁衍升级',
    'Automatically buy Coin Upgrades.': '自动购买金币升级',
    'Automatically buy Prestige Upgrades.': '自动购买钻石升级',
    'Generate 1% of Diamond Gain from prestiging per second.': '每秒产出1%转生可获得的钻石',
    'Reset all Coin and Diamond upgrades/features, Crystal Upgrades & Producers, for Mythos/Offerings.': '重置所有金币和钻石升级/特权,水晶升级以及生产者,获得神话/祭品',
    'Reset ALL previous reset tiers, but gain Particles, Obtainium and Offerings!': '重置所有前面等级的项目,但获得粒子,Obtainium和祭品!',
    'Speed Rune Bonus:': '速度符文加成:',
    'Duplication Rune Bonus:': '重叠符文加成:',
    'Prism Rune Bonus:': '棱柱符文加成:',
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
    'Pickaxes/Sec': '十字镐/秒',
    'Rigs/Sec': '煤矿钻机/秒',
    'Plants/Sec': '煤电厂/秒',
    'Ref./Sec': '炼油厂/秒',
    'Crystal/sec': '水晶/秒',
    'Reset Diamonds and Prestige Upgrade,but add': '重置钻石和转生升级,但增加',
    'free Accelerators': '免费加速器',
    'Multiplier Power:': '加倍效果:',
    'Acceleration Power:': '加速器效果:',
    'Effect: Gain': '效果:获得',
    'Pandora\'s Boxes': '潘多拉的盒子',
    'Pickaxes': '十字镐',
    'Coal Rigs': '煤矿钻机',
    'Coal Plants': '煤电厂',
    'Refineries': '炼油厂',
    'Cost:': '消耗:',
    'Effect: ': '效果:',
    'Workers': '工人',
    'Accelerator Boost': '加速器加成',
    'Investments': '投资',
    'Printers': '打印机',
    'Coin Mints': '铸币厂',
    'Alchemies': '炼金术',
    'Coins/Sec': '金币/秒',
    'Accelerators': '加速器',
    'Multipliers': '加倍',
    'Shards/Sec:': '碎片/秒',
    'Augments/Sec': '强化/秒',
    'Enchantments/Sec': '附魔/秒',
    'Wizards/Sec': '法师/秒',
    'Oracles/Sec': '神谕/秒',
    'Augments': '强化',
    'Enchantments': '附魔',
    'Wizards': '法师',
    'Oracles': '神谕',
    'Grandmasters': '大师',
    'Reward:': '奖励:',
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
    'Multipliers through magic!': '加倍',
    'Quarks! Gain +.05% to Accelerator Power.': '夸克!加速器效果+.05%',
    'Quarks! Start transcensions/challenges with Worker Autobuyer unlocked.': '夸克!超越后/开始挑战将自动解锁自动购买工人',
    'Quarks! Gain +1 Accelerator per 500 Workers owned.': '夸克!每500工人额外获得+1加速器',
    'Quarks! Gain +1 Multiplier per 1,000 Workers owned.': '夸克!每1000工人额外获得+1加倍',
    'Quarks! Gain +1 Accelerator Boost per 2,000 workers owned.': '夸克!每2000工人额外获得+1加速器强化',
    'Quarks! Gain +.10% to Accelerator Power.': '夸克!加速器效果+.10%',
    'Quarks! Start transcensions/challenges with Investment Autobuyer unlocked.': '夸克!超越后/开始挑战将自动解锁自动购买投资',
    'Quarks! Gain +1 Accelerator per 500 Investments owned.': '夸克!每500投资额外获得+1加速器',
    'Quarks! Gain +1 Multiplier per 1,000 Investments owned.': '夸克!每1000投资额外获得+1加倍',
    'Quarks! Gain +1 Accelerator Boost per 2,000 Investments owned.': '夸克!每2000投资额外获得+1加速器强化',
    'Quarks! Gain +.15% to Accelerator Power.': '夸克!加速器效果+.15%',
    'Quarks! Start transcensions/challenges with Printer Autobuyer unlocked.': '夸克!超越后/开始挑战将自动解锁自动购买打印机',
    'Quarks! Gain +1 Accelerator per 500 Printers owned.': '夸克!每500打印机额外获得+1加速器',
    'Quarks! Gain +1 Multiplier per 1,000 Printers owned.': '夸克!每1000打印机额外获得+1加倍',
    'Quarks! Gain +1 Accelerator Boost per 2,000 Printers owned.': '夸克!每2000打印机额外获得+1加速器强化',
    'Quarks! Gain +.20% to Accelerator Power.': '夸克!加速器效果+.20%',
    'Quarks! Start transcensions/challenges with Coin Mint Autobuyer unlocked.': '夸克!超越后/开始挑战将自动解锁自动购买铸币厂',
    'Quarks! Gain +1 Accelerator per 500 Mints owned.': '夸克!每500铸币厂额外获得+1加速器',
    'Quarks! Gain +1 Multiplier per 1,000 Mints owned.': '夸克!每1000铸币厂额外获得+1加倍',
    'Quarks! Gain +1 Accelerator Boost per 2,000 Mints owned.': '夸克!每2000铸币厂额外获得+1加速器强化',
    'Quarks! Gain +.25% to Accelerator Power.': '夸克!加速器效果+.25%',
    'Quarks! Start transcensions/challenges with Alchemy Autobuyer unlocked.': '夸克!超越后/开始挑战将自动解锁自动购买炼金术',
    'Quarks! Gain 10% more offerings from resets.': '夸克!重置获得的祭品增加10%',
    'Quarks! Gain 15% more offerings from resets (+25% total).': '夸克!重置获得的祭品增加15%(共计25%)',
    'Quarks! Gain 25% more offerings from resets (+50% total)!': '夸克!重置获得的祭品增加25%(共计50%)',
    'Quarks! Multiply Crystal Production by 2x.': '夸克!水晶产量x2',
    'Quarks! Multiply Crystal Production by the common logarithm of owned Diamonds. Prestiges give more offerings based on time spent (Up to +15 at 1800 seconds)': '夸克!根据已持有的钻石的对数增加水晶产量,转生根据时间获得祭品(1800秒时最高+15)',
    'Quarks! Accelerator Boosts can be purchased from any screen. Unlock the Auto-Prestige feature.': '夸克!加速器强化可以在顶部转生列表购买,解锁自动转生功能',
    'Quarks! Unlock the Prism Rune! Transcensions give more offerings based on time spent (Up to +15 at 1800 seconds)': '夸克!解锁棱镜符文!超越根据时间获得祭品(1800秒时最高+15)',
    'Quarks! Reduce tax scaling by up to 5%, depending on the length of prestige.': '夸克!降低税收膨胀最多5%,基于转生时间',
    'Quarks! Reduce tax scaling by up to another 5%, depending on length of prestige.': '夸克!额外降低税收膨胀最多5%,基于转生时间',
    'Quarks! Reduce tax scaling by up to ANOTHER 10%, depending on length of prestige!': '夸克!额外降低税收膨胀最多10%,基于转生时间',
    'Quarks! Unlock new Atomic production and unlock 3 new incredibly difficult challenges! Gain obtainium based your fastest ever Reincarnation (Max 1 per second).': '夸克!解锁新的原子升级并解锁三个更难的挑战!基于你最快的转生额外获得obtainium(最多1每秒)',
    'Quarks! Gain +1, +1% free Multipliers!': '夸克!获得+1,+1%免费的加倍',
    'Quarks! Gain +1, +1% more free Multipliers!': '夸克!额外获得+1,+1%免费的加倍',
    'Quarks! Gain +1, +1% more, MORE free Multipliers!': '夸克!再额外获得+1,+1%免费的加倍',
    'Quarks! Gain +2, +1% free Accelerators!': '夸克!获得+2,+1%免费的加速器',
    'Quarks! Gain +2, +1% more free Accelerators!': '夸克!额外获得+2,+1%免费的加速器',
    'Quarks! Gain +2, +1% more, MORE free Accelerators!': '夸克!再额外获得+2,+1%免费的加速器',
    'Quarks! +1% Conversion Exponent on all generator upgrades!': '夸克!所有繁衍升级+1%转换指数',
    'Quarks! +1% Conversion Exponent on all generator upgrades! They\'re in overdrive now!': '夸克!所有繁衍升级+1%转换指数,现在他们都超载了!',
    'Quarks! Start transcensions/challenges with 1 Refinery and automatically buy Refineries.': '夸克!超越/开始挑战都会自带1炼油厂并获得自动购买炼油厂',
    'Quarks! Automatically buy the first crystal upgrade if you can afford it! Gain 2 additional Offerings in prestiges that take 600 seconds or more.': '夸克!自动购买第一个水晶升级,转生时间超过600秒可以额外获得2祭品',
    'Quarks! Start transcensions/challenges with Multiplier Autobuyer unlocked. +5% chance to not spend an offering when sacrificing.': '夸克!超越/开始挑战时自动解锁自动购买加倍,献祭时不消耗祭品概率+5%',
    'Quarks! Delay tax growth by 4%.': '夸克!税收增长降低4%',
    'Quarks! Start transcensions/challenges with 1 Coal Plant and automatically buy Coal Plants.': '夸克!超越/开始挑战会自带1煤电厂并获得自动购买煤电厂',
    'Quarks! Automatically buy the second crystal upgrade if you can afford it!': '夸克!自动购买第二项水晶升级',
    'Quarks! Start transcensions/challenges with Accelerator Autobuyer unlocked. +5% chance to not spend an offering when sacrificing.': '夸克!超越/开始挑战自动解锁自动购买加速器,献祭时不消耗祭品概率+5%',
    'Quarks! Start transcensions/challenges with 1 Coal Rig and automatically buy Coal Rigs.': '夸克!超越/开始挑战时会自带1煤矿钻机并获得自动购买煤矿钻机',
    'Quarks! Automatically buy the third crystal upgrade if you can afford it!': '夸克!自动购买第三项水晶升级',
    'Quarks! +5% chance to not spend an offering when sacrificing.': '夸克!献祭时不消耗祭品概率+5%',
    'Quarks! Start transcensions/challenges with 1 Diamond Pickaxe and automatically buy Diamond Pickaxes.': '夸克!超越/开始挑战时会自带1十字镐并获得自动购买十字镐',
    'Quarks! Automatically buy the fourth crystal upgrade if you can afford it!': '夸克!自动购买第四项水晶升级',
    'Quarks! Unlock the Thrift rune!': '夸克!解锁节俭符文!',
    'Quarks! Start transcensions/challenges with 1 Pandora\'s Box and automatically buy Pandora\'s Boxes.': '夸克!超越/开始挑战时会自带1潘多拉盒子并获得自动购买潘多拉盒子',
    'Quarks! Automatically buy the fifth crystal upgrade if you can afford it!': '夸克!自动购买第五项水晶升级',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'the production!': '产量加成!',
    'Accelerator Boosts': '加速器加成',
    'Accelerator Boosts.': '加速器加成',
    'Accelerators.': '加速器',
    '[Stacks with upgrade 1]!': '[从第一级开始计算]!',
    'more Diamonds on prestige': '额外钻石在转生时',
    '[Enter a number above to toggle]': '[在上方输入一个数字来控制]',
    'free Multipliers.': '免费的加倍',
    'free multipliers from bought Alchemies.': '免费的加倍基于已购买的炼金术',
    'free Accelerators.': '免费的加速器',
    'Coins': '金币',
    'Diamonds': '钻石',
    'Mythos': '神话',
    'Multipliers': '加倍',
    'Multipliers.': '加倍',
    'Accelerators!': '加速器!',
    'Quarks!': '夸克!',
    'crystals': '水晶',
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