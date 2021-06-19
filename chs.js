/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //标点处理
    '.': '。',
    //标点处理结束

    //主脚本
    'OK': '确定',
    'Cancel': '取消',
    'Loading Offline Progress...': '加载离线进度...',
    'You have gained the following from offline progression!': '离线时您获得了以下内容！',
    ' seconds': '秒',
    'Prestige Count: +': '转生次数：+',
    'Current Prestige Timer: +': '当前转生时间：+',
    'Offerings Generated': '产生的祭品数量',
    'Transcension Count: +': '超越次数：+',
    'Current Transcension Timer: +': '当前超越时间：+',
    'Reincarnation Count: +': '转世次数：+',
    'Current Reincarnation Timer: +': '当前转世时间：+',
    'Obtainium Generated': '产生的难得素数量',
    'In-Game Ant Sacrifice Timer: +': '游戏内的蚂蚁计时：+',
    'Real-Life Ant Sacrifice Timer: +': '现实中的蚂蚁计时：+',
    'Current Ascension Timer: +': '当前飞升时间：+',
    'Export Quarks: +': '导出可获得的夸克数量：+',
    'That\'s cool. Take me to the game!': '非常棒。开始游戏吧！',
    'Auto [ON]': '自动[开]',
    'Auto [OFF]': '自动[关]',
    'Mode: AMOUNT': '模式：数量',
    'Mode: TIME': '模式：时间',
    'Auto Buy: ON': '自动购买：开',
    'Auto Buy: OFF': '自动购买：关',
    'Auto Rune: ON': '自动符文：开',
    'Auto Rune: OFF': '自动符文：关',
    'Auto Runes: ON': '自动符文：开',
    'Auto Runes: OFF': '自动符文：关',
    'Auto Fortify: ON': '自动加强：开',
    'Auto Fortify: OFF': '自动加强：关',
    'Auto Enhance: ON': '自动升阶：开',
    'Auto Enhance: OFF': '自动升阶：关',
    'Automatic: ON': '自动：开',
    'Automatic: OFF': '自动：关',
    'Per second: ON': '每秒产量：开',
    'Per second: OFF': '每秒产量：关',
    'Thanks to researches, your effective levels are increased by': '由于研究效果，符文有效等级增加了',
    //主脚本结束

    //主界面及建筑
    '/s': '/秒',
    'Buildings': '建筑',
    'Upgrades': '升级',
    'Settings': '设置',
    'Achievements': '成就',
    'Runes': '符文',
    'Challenges': '挑战',
    'Research': '研究',
    'Shop': '商店',
    'Anthill': '蚁丘',
    'WOW! Cubes': '惊奇方盒',
    'Corruption': '腐化',
    'Coin Buildings': '金币建筑',
    'Diamond Buildings': '钻石建筑',
    'Mythos Buildings': '神话建筑',
    'Particle Buildings': '粒子建筑',
    'Tesseract Buildings': '超立方建筑',
    'Toggle amount to buy': '切换购买数量',
    'Press [1], [2], [3], [4], or [5] to buy the corresponding tier starting from the top. Press [A] to buy Accelerator, [M] to buy Multiplier, or [B] to buy Accelerator Boost. Press [left arrow] or [right arrow] to switch tabs. Enjoy!': '按[1]，[2]，[3]，[4]或[5]来购买生产者，按[A]来购买加速器，按[M]来购买加倍器，按[B]来购买加速器加成，用[←]和[→]来切换选项卡。祝您玩的开心！',
    'Hover over a crystal upgrade to get information!': '将鼠标停在水晶升级上可以获得更多信息！',
    'Auto Prestige [ON]': '自动转生[开]',
    'Auto Prestige [OFF]': '自动转生[关]',
    'Level': '等级',
    'Level: ---': '等级: ---',
    'Press [1], [2], [3], [4], or [5] to buy the respective tiered producer. Press [6], [7], [8], [9] or [0] to buy the corresponding Crystal upgrade starting on the left.': '按[1]，[2]，[3]，[4]或[5]来购买生产者，按[6]，[7]，[8]，[9]或[0]来购买从左往右对应位置的水晶升级。',
    'Each Multiplier Boost increases the base effect of Multipliers by 0.005!': '每1个加倍器加成使加倍器的基础效果增加0.005！',
    'Auto Transcend [ON]': '自动超越[开]',
    'Auto Transcend [OFF]': '自动超越[关]',
    'Press [1], [2], [3], [4], or [5] to buy the respective tiered producer.': '按[1]，[2]，[3]，[4]或[5]来购买生产者。',
    'Auto Reincarnate [ON]': '自动转世[开]',
    'Auto Reincarnate [OFF]': '自动转世[关]',
    'Hover over an icon for a description of the upgrade. Click to buy it!': '将鼠标停在图标上可以获得升级描述。点击以购买！',
    'Cost': '花费',
    'Current Level': '当前等级',
    'Current Effect': '当前效果',
    ' from your Constant': '数学常数',
    //主界面及建筑结束

    //重置
    'You\'re not in a challenge right now. Get in one before you can leave it, duh!': '您目前并没有在进行挑战。进行挑战后再来考虑离开的事，懂了吧！',
    'You\'re not in a reincarnation challenge right now. Why would you need to leave it?': '您目前并没有在进行转世挑战。为什么您会想要离开挑战的？',
    'Click this if you\'re in an Ascension Challenge and want to leave. You get it already!': '如果您想要退出飞升挑战，请点击这里。您懂的！',
    //重置结束

    //升级
    'Coin Upgrades': '金币升级',
    'Diamond Upgrades': '钻石升级',
    'Mythos Upgrades': '神话升级',
    'Generator Shop': '发生器升级',
    'Automation Shop': '自动化升级',
    'Particles Upgrades': '粒子升级',
    'Increase production of Workers per producer bought.': '购买生产者使工人产量增加。',
    'Increase production of Investments per producer bought.': '购买生产者使投资产量增加。',
    'Increase production of Printers per producer bought.': '购买生产者使打印机产量增加。',
    'Increase production of Mints per producer bought.': '购买生产者使铸币厂产量增加。',
    'Increase production of Alchemies per producer bought.': '购买生产者使炼金术产量增加。',
    'Increase all production based on producer bought.': '根据生产者数量增加所有产量。',
    'Gain free multipliers based on your purchased Alchemies.': '根据已购买的炼金术数量获得免费加倍器。',
    'Gain 1 free Accelerator per 7 purchased Multipliers.': '每购买7个加倍器就获得1个免费加速器。',
    'Gain 1 free Multiplier per 10 purchased Accelerators.': '每购买10个加速器就获得1个免费加倍器。',
    'Improve Workers based on the first 750 purchased Investments.': '工人产量根据已购买的投资数量而增加，但只有前750个投资有效。',
    'Accelerators improve generation production by 2% each.': '每个加速器使发生器产量增加2%。',
    'Each prestige multiplies production by 1.01, multiplicatively (Max: 1e4x).': '每次转生使产量变为1.01倍，相互叠乘(上限：1e4倍)。',
    'Augments buff the production of Investments.': '强化可增加投资的产量。',
    'Free Accelerators buff generation of Printers.': '免费加速器增加产生打印机的发生器产量。',
    'Free Accelerators buff generation of Mints.': '免费加速器增加产生铸币厂的发生器产量。',
    'Acceleration Multiplier buffs Diamond gain.': '加速器倍率可以增加钻石产量。',
    'Multiply Mint production by 1e+100.': '将铸币厂产量变为1e100倍。',
    'Multiply Printer production based on Mythos Shards.': '根据神话碎片数量增加打印机产量。',
    'Multiply Investment production based on Mythos.': '根据神话数量增加投资产量。',
    'Coin upgrade 1 is raised to the eleventh power.': '第一个金币升级效果变为原效果的11次方。',
    'Gain 1 Multiplier and 5 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍器，5个加速器，然后再获得1%的免费加倍器及加速器。',
    'Gain 1 Multiplier and 4 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍器，4个加速器，然后再获得1%的免费加倍器及加速器。',
    'Gain 1 Multiplier and 3 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍器，3个加速器，然后再获得1%的免费加倍器及加速器。',
    'Gain 1 Multiplier and 2 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍器，2个加速器，然后再获得1%的免费加倍器及加速器。',
    'Gain 1 Multiplier and 1 Accelerators plus 1% more free Multipliers/Accelerators.': '获得1个加倍器，1个加速器，然后再获得1%的免费加倍器及加速器。',
    'Gain a free Accelerator Boost.': '获得1个免费加速器加成。',
    'Gain free Accelerators based on unspent Coins.': '根据未花费的金币获得免费加速器。',
    'Gain a free Multiplier per 160 Coin producers bought.': '每购买160个金币生产者就获得1个免费加倍器。',
    'Gain a free Accelerator per 80 Coin producers bought.': '每购买80个金币生产者就获得1个免费加速器。',
    'Gain free Multipliers based on unspent Coins.': '根据未花费的金币获得免费加倍器。',
    'Gain 1 free Accelerator Boost per 2,000 Coin producers bought.': '每购买2000个金币生产者就获得1个免费加速器加成。',
    'Gain free Accelerators based on Unspent Diamonds.': '获得免费加速器，根据未花费的钻石。',
    'Gain free Accelerators based on Unspent': '获得免费加速器，根据未花费的',
    'Gain 1 free Multiplier for each Accelerator Boost owned.': '每拥有一个加速器加成就获得1个免费加倍器。',
    'Gain 3% more free Multipliers.': '免费加倍器数量增加3%。',
    'Gain 2% more free Multipliers.': '免费加倍器数量增加2%。',
    'Multiply crystal production by Diamonds, maximum 1e5000x.': '将水晶产量乘以钻石数量，最高乘以1e5000倍。',
    'Multiply mythos shard production by the squared logarithm of Diamonds.': '将神话碎片产量乘以一个数值对数的平方，此数值为钻石。',
    'Multiply mythos shard production by the squared logarithm of': '将神话碎片产量乘以一个数值对数的平方，此数值为',
    'Gain +15% more offerings thanks to generous Discord Server Boosters!': '感谢每个进行Discord助力的朋友们！祭品获取数量增加15%！',
    'Gain +50% more Ant Speed thanks to generous Discord Server Boosters!': '感谢每个进行Discord助力的朋友们！蚂蚁速度增加50%！',
    'Gain +25% more Ant Sacrifice rewards thanks to generous Discord Server Boosters!': '感谢每个进行Discord助力的朋友们！蚂蚁献祭奖励增加25%！',
    'Multiply production based on unspent Mythos.': '根据未花费的神话增加金币产量。',
    'Multiply Mythos Shard production based on unspent Diamonds.': '增加神话碎片产量，根据未花费的钻石。',
    'Multiply Mythos Shard production based on unspent': '增加神话碎片产量，根据未花费的',
    'Multiply coin production by 1.01 per transcension (Max: 1e30x).': '每次超越使金币产量变为1.01倍(上限：1e30倍)。',
    'Multiply Mythos gain on Transcend by 1.01 per transcension (Max: 1e6x).': '每次超越使神话产量变为1.01倍(上限：1e6倍)。',
    'Gain free Accelerators based on Mythos Shards.': '根据神话碎片数量获得免费加速器。',
    'Accelerator Boosts are 5% stronger and do not reset prestige features.': '加速器加成效果增加5%，且不会重置转生相关的资源。',
    'Multiply Mythos Shard production based on your AP.': '根据成就点数增加神话碎片产量。',
    'Multiply production based on owned Accelerators and Multipliers.': '根据拥有的加速器和加倍器数量增加金币产量。',
    'Gain free Multipliers based on unspent Mythos.': '根据未花费的神话获得免费加倍器。',
    'Gain +25% free Accelerators and Multipliers, but ONLY while doing challenges.': '仅在挑战时加速器和加倍器数量增加25%。',
    'Increase production of all Mythos buildings based on owned Accelerator Boosts.': '根据拥有的加速器加成数量增加神话建筑产量。',
    'Mythos building exponent +0.025.': '神话建筑的指数增加0.025。',
    'Augments produce more Shards based on Acceleration Multiplier.': '根据加速器倍率增加强化的神话碎片产量。',
    'Wizards produce more Enchantments based on Multiplier.': '根据加倍器数量增加法师的附魔产量。',
    'Grandmasters produce more Oracles based on Building power.': '根据建筑能量增加宗师的先知产量。',
    'Worker production is multiplied by 1e+5000.': '工人产量变为1e5000倍。',
    'Investment production is multiplied by 1e+7500.': '投资产量变为1e7500倍。',
    'Printer production is multiplied by 1e+15000.': '打印机产量变为1e15000倍。',
    'Coin Mint production is multiplied by 1e+25000.': '铸币厂产量变为1e25000倍。',
    'Alchemies production is multiplied by 1e+35000.': '炼金术产量变为1e35000倍。',
    'Welcome to reincarnation! +5% Offering Recycle, +5 EXP/Offering!': '欢迎进入转世时代！祭品回收概率增加5%，每个祭品提供的经验值增加5！',
    'Completing challenges, automatically or manually, increase offerings gained in Reincarnation. Bonus subject to time multiplier!': '转世过程中完成挑战，无论手动自动，都可以增加转世的祭品获取数量。增加的数量与转世时间有关！',
    'Crystal Production is multiplied based on Particles to the sixth power [Caps at 1e6000x].': '将水晶产量乘以粒子数量的6次方[上限为1e6000]。',
    'Mythos Shard Production is multiplied by your Particles squared.': '将神话碎片产量乘以粒子数量的平方。',
    'Multiply the gain of Particles from Reincarnation by 5x!': '转世的粒子获取数量变为5倍！',
    'When you use an Offering, every unlocked rune will get 3 free experience.': '每献祭一个祭品，其他所有解锁的符文也获得3点免费经验值。',
    'Atom gain is increased by 3% per Particle producer purchased!': '每个粒子生产者使原子产量增加3%！',
    'Gain a free multiplier for every 1e1000x increase in tax.': '税收每增加1e1000倍就获得一个免费加倍器。',
    'Gain more Obtainium based on your particle gain. [Works with automation at a reduced rate!]': '根据您的粒子产量增加难得素的获取数量。[以减少的倍率对自动难得素生效！]',
    'Time seems to go +0.333*log10(MAX obtainium +1)% faster when you buy this.': '购买这个以后，时间似乎加快了 0.333*log10(最大持有的难得素数量+1)% 。',
    'Runes will gain (Rune Level/25) additional EXP per offering used.': '每献祭一个祭品，符文就额外获得(符文等级/25)的经验值。',
    'Gain +100% free accelerator boosts and +10 free Crystal Upgrade levels, but only in Reincarnation Challenges.': '仅在转世挑战时免费加速器加成数量增加100%，免费水晶升级等级增加10。',
    'Ant generation kinda slow? I agree! Make all ant tiers 5x faster!': '蚂蚁增长得太慢了？我也这么觉得！使蚂蚁速度变为5倍！',
    'This is Synergism, right? Let\'s make each purchased ant make all ants 0.4% faster.': '这游戏叫协同放置，对吧？所以每购买一只蚂蚁，蚂蚁速度就增加0.4%。',
    'Gain an ant speed multiplier equivalent to (1 + 0.005 * (log10(MAX offerings + 1))^2).': '蚂蚁速度变为 (1 + 0.005 * (log10(最大持有的祭品数量 + 1))^2) 倍。',
    'The Ant God will accept an arbitrary number of Particles in order to give you 10% more from sacrifices.': '蚁神愿意收下一些粒子，然后使您的献祭奖励增加10%。',
    'The Ant God will accept a larger arbitrary number of Particles to give you more ant ELO.': '蚁神愿意收下更多一些的粒子，然后增加蚂蚁的强度分。',
    'Automatically buy Workers if affordable.': '自动购买工人。',
    'Automatically buy Investments if affordable.': '自动购买投资。',
    'Automatically buy Printers if affordable.': '自动购买打印机。',
    'Automatically buy Coin Mints if affordable.': '自动购买铸币厂。',
    'Automatically buy Alchemies if affordable.': '自动购买炼金术',
    'Automatically buy Accelerators if affordable.': '自动购买加速器。',
    'Automatically buy Multipliers if affordable.': '自动购买加倍器。',
    'Automatically buy Accelerator Boosts if affordable.': '自动购买加速器加成。',
    'Unlock Automatic Transcensions.': '解锁自动超越。',
    'Automatically buy from the Generator Shop.': '自动购买发生器升级。',
    'Automatically buy Coin Upgrades.': '自动购买金币升级。',
    'Automatically buy Diamond Upgrades.': '自动购买钻石升级。',
    'Generate 1% of Diamond Gain from prestiging per second.': '每秒获得钻石，数量为转生的钻石每秒产量的1%。',
    'Automatically buy Augments if affordable.': '自动购买强化。',
    'Automatically buy Enchantments if affordable.': '自动购买附魔。',
    'Automatically buy Wizards if affordable.': '自动购买法师。',
    'Automatically buy Oracles if affordable.': '自动购买先知。',
    'Automatically buy Grandmasters if affordable.': '自动购买宗师。',
    'Automatically buy Mythos Upgrades if affordable.': '自动购买神话升级。',
    'Generate 1% of Mythos Gain from transcending per second.': '每秒获得神话，数量为超越的神话每秒产量的1%。',
    'Alchemies will produce Coin Mints.': '炼金术可以产生铸币厂。',
    'Coin Mints will produce Printers.': '铸币厂可以产生打印机。',
    'Printers will produce Investments.': '打印机可以产生投资。',
    'Investments will produce Workers.': '投资可以产生工人。',
    'Purchased Workers will produce Alchemies.': '购买的工人会产生炼金术。',
    'Refineries can produce Alchemies equal to Refineries owned raised to': '炼油厂可以产生炼金术，根据炼油厂数量的指数：',
    'Refinery -> Alchemy exponent increased from 0.10 to 0.25.': '炼油厂产生炼金术的指数从 0.10 变为 0.25。',
    'Refinery -> Alchemy exponent increased from 0.25 to': '炼油厂产生炼金术的指数从 0.25 变为',
    'Refinery -> Alchemy exponent increased from 0.50 to': '炼油厂产生炼金术的指数从 0.50 变为',
    'Refinery -> Alchemy exponent increased from 0.75 to': '炼油厂产生炼金术的指数从 0.75 变为',
    'Augments can produce Pandora Boxes equal to Augments owned raised to': '强化可以产生潘多拉魔盒，根据强化数量的指数：',
    'Augment -> Box exponent increased from 0.08 to': '强化产生潘多拉魔盒的指数从 0.08 变为',
    'Augment -> Box exponent increased from 0.16 to': '强化产生潘多拉魔盒的指数从 0.16 变为',
    'Augment -> Box exponent increased from 0.24 to': '强化产生潘多拉魔盒的指数从 0.24 变为',
    'Augment -> Box exponent increased from 0.32 to': '强化产生潘多拉魔盒的指数从 0.32 变为',
    'Protons can produce Grandmasters equal to Protons owned raised to': '质子可以产生宗师，根据质子数量的指数：',
    'Protons -> Grandmaster exponent increased from 0.05 to': '质子产生宗师的指数从 0.05 变为',
    'Protons -> Grandmaster exponent increased from 0.10 to': '质子产生宗师的指数从 0.10 变为',
    'Protons -> Grandmaster exponent increased from 0.15 to': '质子产生宗师的指数从 0.15 变为',
    'Protons -> Grandmaster exponent increased from 0.20 to': '质子产生宗师的指数从 0.20 变为',
    'You probably autobought this. -50% taxes!': '您可能已经自动购买了这个升级。税收减少50%！',
    'Increase Crystal Upgrade 3 cap from +12% to +100%!': '将水晶升级3的上限从+12%增加到+100%！',
    'Raise coin production to the power of 1.025. More EXPONENTS.': '将金币产量乘以1.025次方。又是指数。',
    'Gain +3% more effective ELO.': '蚂蚁有效分增加3%。',
    'Constant Tax divisor is 0.333% stronger per challenge 10 completion. [Divisor^(1 + upgrade)]': '每完成一次挑战10，数学常数的税收除数效果就增加0.333%。[除数^(1 + 升级效果)]',
    'Gain a 5% multiplicative boost to crystals per AP per level.': '每级使每个成就点数增加水晶产量5%(效果叠乘)。',
    'Gain a boost to crystals based on held coins per level.': '每级根据未花费的金币数量增加水晶产量。',
    'Every challenge completion increases crystal gain by 1% per level.': '每级使每次挑战完成次数增加水晶产量1%。',
    'Make all Tesseract buildings 5% more productive per level.': '每级使所有超立方建筑产量增加5%。',
    'Each Tesseract building bought increases the production of all of them by 0.1% per level [Max 10.00%].': '每级使每购买一个超立方建筑增加0.1%的超立方建筑产量[上限10.00%]。',
    'Increase offering gain +2% per level.': '每级使祭品获取数量增加2%。',
    'Increase obtainium gain +4% per level.': '每级使难得素获取数量增加4%。',
    'Multiply ant speed by (1 + log10(Constant + 1)/10)^level': '蚂蚁速度变为 (1 + log10(数学常数数量 + 1)/10)^升级等级 倍。',
    'Add +2 free Ant Levels per level.': '每级增加2级免费蚂蚁等级。',
    'Provides 7 free rune levels and increases the rune cap by 3 per level.': '每级使免费符文等级增加7级，并且使符文等级上限增加3。',
    'Increase the rune EXP given by offerings by 10% per level [Additive]': '每级使祭品提供的符文经验值增加10%[相互叠加]',
    'When bought, rune effectiveness is increased by Log4(Talisman Shards +1) ': '(译者注：注意，与升级等级无关)购买后，符文效果增加 log4(护身符碎片 +1)',
    'When bought, gain Log4(Constant + 1)% more Wow! Cubes and Tesseracts on ascension.': '(译者注：注意，与升级等级无关)购买后，飞升的惊奇方盒和惊奇超立方获取数量增加 log4(数学常数数量 + 1)%',
    'Effect: +1 Accelerator Boost.': '效果：增加1个加速器加成。',
    'Effect: Thank you for getting the server above 30 boosts!': '效果：感谢您让服务器助力超过了30！',
    'Effect: It\'s kinda self-evident, ain\'t it?': '效果：明摆着的效果，不是么？',
    'Effect: It\'s quite obvious what the benefit is, but you must be in a challenge for it to be in use!': '效果：好处很明显，但必须在挑战中才能生效！',
    'Effect: It\'s quite obvious, ain\'t it?': '效果：很明显，不是么？',
    'Effect: Look above!': '效果：看上面！',
    'Effect: +5% Offering Recycle/+5EXP per Offerings. Duh!': '效果：祭品回收概率增加5%，每个祭品提供的经验值增加5。废话！',
    'Effect: 5x Particle gain from Reincarnations. Duh!': '效果：转世的粒子获取数量变为5倍。又是废话！',
    'Effect: It\'s quite clear in the description!': '效果：看描述，写得很清楚！',
    'Effect: Writing\'s on the wall. Look above!': '效果：在那写着呢。看上面！',
    'Effect: Same as Transcend upgrade 10, except you MUST be in a Reincarnation challenge in particular.': '效果：跟第十个神话升级的效果类似，但只能在转世挑战中生效。',
    'Effect: Epic 5x Ants!': '效果：蚂蚁速度变为史诗般的5倍！',
    'Effect: You will gain +10% rewards =': '效果：献祭奖励增加10% =',
    'Effect: Ant Elo +75 if this upgrade is purchased.': '效果：蚂蚁强度分增加75。',
    'Effect: All you need to know is right above this message!': '效果：想要知道的，都在上面了！',
    'Effect: -50% Taxes duh!': '效果：减少50%税收，又开始废话了！',
    'Effect: +88% cap to Crystal Upgrade 3, duh!': '效果：水晶升级3的上限增加88%，还是废话！',
    'Effect: Coin Production ^1.025, duh!': '效果：金币产量^1.025，废话废话！',
    'Effect: +3% Effective Ant ELO, duh!': '效果：蚂蚁有效分增加3%，废话废话废话！',
    'Auto: ON': '自动：开',
    'Auto: OFF': '自动：关',
    'Hover over an upgrade to view details!': '鼠标停在升级上可以查看详细信息！',
    'Hover-to-Buy [ON]': '鼠标停留购买[开]',
    'Hover-to-Buy [OFF]': '鼠标停留购买[关]',
    //升级结束

    //成就
    '[1] A Loyal Employee: Hire your first worker.':'[1]一个忠实的雇员：雇佣第1个工人。',
    '[2] Small Business: Hire 10 workers.':'[2]小生意：雇佣10个工人。',
    '[3] Now we\'re synergizing!: Hire 100 workers.':'[3]我们就是协同！：雇佣100个工人。',
    '[4] Gaining Redundancies: Hire 1,000 workers.':'[4]该裁员了：雇佣1000个工人。',
    '[5] A cog in the machine: Hire 5,000 workers.':'[5]机器上的齿轮：雇佣5000个工人。',
    '[6] A nail in the machine: Hire 10,000 workers.':'[6]机器上的螺丝钉：雇佣10000个工人。',
    '[7] Are we even in the machine anymore?: Hire 20,000 workers.':'[7]我们还在机器里吗？：雇佣20000个工人。',
    '[8] STONKS!!!: Purchase 1 Investment.':'[8]进击！！！：购买1个投资。',
    '[9] Planning ahead: Purchase 10 Investments.':'[9]提前计划：购买10个投资。',
    '[10] Inside Trading: Purchase 100 Investments.':'[10]内部交易：购买100个投资。',
    '[11] Outside Trading?: Purchase 1,000 Investments.':'[11]外部交易？：购买1000个投资。',
    '[12] Market Takeover: Purchase 5,000 Investments.':'[12]接管市场：购买5000个投资。',
    '[13] Trickle-Down Economics: Purchase 10,000 Investments.':'[13]利益均沾论：购买10000个投资。',
    '[14] Eliminated Regulation: Purchase 20,000 Investments.':'[14]监管消失：购买20000个投资。',
    '[15] Stationery!: Build 1 Printer.':'[15]文具！：购买1台打印机。',
    '[16] Printing Press: Build 10 Printers.':'[16]印刷机：购买10台打印机。',
    '[17] It prints free money!: Build 100 Printers.':'[17]印的是免费的钱！：购买100台打印机。',
    '[18] Solving Our Debts: Build 1,000 Printers.':'[18]解决债务问题：购买1000台打印机。',
    '[19] Monopolizing the market: Build 5,000 Printers.':'[19]垄断市场：购买5000台打印机。',
    '[20] We\'re running out of Ink!: Build 10,000 Printers.':'[20]油墨用完了！：购买10000台打印机。',
    '[21] 3D-printing the universe: Build 20,000 Printers.':'[21]3D打印出宇宙：购买20000台打印机。',
    '[22] A national treasure: Establish 1 Coin Mint.':'[22]国家宝藏：建立1个铸币厂。',
    '[23] Now with competition!: Establish 10 Coin Mints.':'[23]有竞争了！：建立10个铸币厂。',
    '[24] Counterfeiting with Style!: Establish 100 Coin Mints.':'[24]山寨货而已！：建立100个铸币厂。',
    '[25] Why do we need all these?: Establish 1000 Coin Mints.':'[25]我们要这么多做什么？：建立1000个铸币厂。',
    '[26] No really, why??: Establish 5,000 Coin Mints.':'[26]不是，说真的，为什么？？：建立5000个铸币厂。',
    '[27] Is no one to stop us???: Establish 10,000 Coin Mints.':'[27]就没人能阻止我们吗？？？：建立10000个铸币厂。',
    '[28] Oh well, time to mint: Establish 20,000 Coin Mints.':'[28]好吧，该铸币了：建立20000个铸币厂。',
    '[29] Newton\'s Apprentice: Create 1 Alchemy.':'[29]牛顿的学徒：创造1个炼金术。',
    '[30] Lab Work: Create 10 Alchemies.':'[30]开始实验：创造10个炼金术。',
    '[31] Satanic Becomings: Create 66 Alchemies.':'[31]正在成为撒旦：创造66个炼金术。',
    '[32] Satan Incarnate: Create 666 Alchemies.':'[32]撒旦的化身：创造666个炼金术。',
    '[33] Is this more demonic?: Create 6,666 Alchemies.':'[33]更邪恶了吗？：创造6666个炼金术。',
    '[34] Golden Paradise: Create 17,777 Alchemies.':'[34]黄金天堂：创造17777个炼金术。',
    '[35] Unlocking secrets to the world: Create 42,777 Alchemies.':'[35]揭示世界之谜底：创造42777个炼金术。',
    '[36] Leveling up: Prestige for at least 1 Diamond.':'[36]升级了：转生获得至少1个钻石。',
    '[37] High-Tiered: Prestige for at least 1e+6 Diamonds.':'[37]更高阶了：转生获得至少1e6钻石。',
    '[37] High-Tiered: Prestige for at least':'[37]更高阶了：转生获得至少',
    '[38] Highly Regarded: Prestige for at least 1e+100 Diamonds.':'[38]备受推崇：转生获得至少1e100钻石。',
    '[38] Highly Regarded: Prestige for at least':'[38]备受推崇：转生获得至少',
    '[39] Prestigious: Prestige for at least 1e+1000 Diamonds.':'[39]威名远扬：转生获得至少1e1000钻石。',
    '[39] Prestigious: Prestige for at least':'[39]威名远扬：转生获得至少',
    '[40] Legendary: Prestige for at least 1e+10000 Diamonds.':'[40]成为传奇：转生获得至少1e10000钻石。',
    '[40] Legendary: Prestige for at least':'[40]成为传奇：转生获得至少',
    '[41] Divine: Prestige for at least 1e+77777 Diamonds.':'[41]具有神性：转生获得1e77777钻石。',
    '[41] Divine: Prestige for at least':'[41]具有神性：转生获得至少',
    '[42] Perfectly Respected: Prestige for at least 1e+250000 Diamonds.':'[42]无人不知：转生获得1e250000钻石。',
    '[42] Perfectly Respected: Prestige for at least':'[42]无人不知：转生获得至少',
    '[43] A Simple Detour: Transcend for at least 1 Mythos.':'[43]简单迂回：超越获得至少1个神话。',
    '[44] Tunnel Vision: Transcend for at least 1e+6 Mythos.':'[44]井底之蛙：超越获得至少1e6神话。',
    '[45] Risen from the Ashes: Transcend for at least 1e+50 Mythos.':'[45]灰烬重生：超越获得1e50神话。',
    '[46] Paradigm Shift: Transcend for at least 1e+308 Mythos.':'[46]模式转换：超越获得1e308神话。',
    '[47] Preparation: Transcend for at least 1e+2000 Mythos.':'[47]准备工作：超越获得1e2000神话。',
    '[48] Revising the Plan: Transcend for at least 1e+25000 Mythos.':'[48]完善计划：超越获得1e25000神话。',
    '[49] Leaving the Universe: Transcend for at least 1e+100000 Mythos.':'[49]离开宇宙：超越获得1e100000神话。',
    '[50] Going Quantum: Reincarnate for at least 1 Particle.':'[50]量子化：转世获得至少1个粒子。',
    '[51] Tunneling Vision: Reincarnate for at least 100,000 Particles.':'[51]鼠目寸光：转世获得至少100000粒子。',
    '[52] Simulating the World: Reincarnate for at least 1e+30 Particles.':'[52]模拟世界：转世获得1e30粒子。',
    '[53] Multidimensional Creation: Reincarnate for at least 1e+200 Particles.':'[53]多维创造：转世获得1e200粒子。',
    '[54] Lepton Dance: Reincarnate for at least 1e+1500 Particles.':'[54]轻子之舞：转世获得1e1500粒子。',
    '[55] Do we have enough yet?: Reincarnate for at least 1e+5000 Particles.':'[55]还不够吗？：转世获得1e5000粒子。',
    '[56] I Feel Luck in My Cells: Reincarnate for at least 1e+7777 Particles.':'[56]生而为细胞，我很幸运：转世获得1e7777粒子。',
    '[57] One Way Only: Prestige without buying multipliers.':'[57]单行道：不购买加倍器进行一次转生。',
    '[58] Authentic Shifting: Transcend without having bought a multiplier.':'[58]正宗的转变：不购买加倍器进行一次超越。',
    '[59] The Singularity: Reincarnate without having bought a multiplier.':'[59]奇点：不购买加倍器进行一次转世。',
    '[60] Gotta go SLOW!: Prestige without buying Accelerators or Accelerator Boosts.':'[60]得慢点！：不购买加速器和加速器加成进行一次转生。',
    '[61] I\'m really going slow: Transcend without having bought Accelerators or Boosts.':'[61]真的很慢：不购买加速器和加速器加成进行一次超越。',
    '[62] Are we there yet?: Reincarnate without having bought Accelerators or Boosts.':'[62]还没到吗？：不购买加速器和加速器加成进行一次转世。',
    '[63] A careful search for Diamonds: Get 1e120,000 Coins in [Reduced Diamonds] without buying Accelerators or Boosts.':'[63]仔细寻找钻石：在钻石减少挑战中不购买加速器和加速器加成达到e120000金币。',
    '[64] Very Based: Prestige without purchasing Coin Upgrades.':'[64]非常基础：不购买金币升级进行一次转生。',
    '[65] Miser: Transcend without purchasing Coin Upgrades.':'[65]悭吝人：不购买金币升级进行一次超越。',
    '[66] True Miser: Transcend without purchasing Coin or Diamond Upgrades.':'[66]真·守财奴：不购买金币升级和钻石升级进行一次超越。',
    '[67] Coinless Pursuit: Reincarnate without purchasing Coin Upgrades.':'[67]无金币的追求：不购买金币升级进行一次转世。',
    '[68] Diamonds don\'t matter to me!: Reincarnate without purchasing Coin or Diamond Upgrades.':'[68]钻石无用！：不购买金币升级和钻石升级进行一次转世。',
    '[69] Leave nothing behind: Reincarnate without purchasing Coin, Diamond or Mythos Upgrades.':'[69]空手而来：不购买金币升级，钻石升级和神话升级进行一次转世。',
    '[70] Leave NOTHING behind.: Reincarnate without purchasing Coin, Diamond, Mythos, or Generator Upgrades.':'[70]空手而归：不购买金币升级，钻石升级，神话升级和发生器升级进行一次转世。',
    '[71] Out of Order: Buy Generator Upgrade Row 1, #2 first in a transcension (IV -> III)':'[71]顺序错乱：在发生器升级中，首先购买第一排第二项的前提下完成一次超越(图标为IV->III)',
    '[71] Out of Order: Buy Generator Upgrade Row 1, #2 first in a transcension (IV -> III':'[71]顺序错乱：在发生器升级中，首先购买第一排第二项的前提下完成一次超越(图标为IV->III',
    '[72] More Out of Order: Buy Generator Upgrade Row 1, #3 first in a transcension (III -> II)':'[72]更严重的错乱：在发生器升级中，首先购买第一排第三项的前提下完成一次超越(图标为III->II)',
    '[72] More Out of Order: Buy Generator Upgrade Row 1, #3 first in a transcension (III -> II':'[72]更严重的错乱：在发生器升级中，首先购买第一排第三项的前提下完成一次超越(图标为III->II',
    '[73] Four\'s a Company: Buy Generator Upgrade Row 1, #4 first in a transcension (II -> I)':'[73]四人成伴：在发生器升级中，首先购买第一排第四项的前提下完成一次超越(图标为II->I)',
    '[73] Four\'s a Company: Buy Generator Upgrade Row 1, #4 first in a transcension (II -> I':'[73]四人成伴：在发生器升级中，首先购买第一排第四项的前提下完成一次超越(图标为II->I',
    '[74] Five\'s a Croud: Buy Generator Upgrade Row 1, #5 first in a transcension (I -> V)':'[74]五人不欢：在发生器升级中，首先购买第一排第五项的前提下完成一次超越(图标为I->V)',
    '[74] Five\'s a Croud: Buy Generator Upgrade Row 1, #5 first in a transcension (I -> V':'[74]五人不欢：在发生器升级中，首先购买第一排第五项的前提下完成一次超越(图标为I->V',
    '[75] Vaseline without the Machine: Exit [No Multiplier] with at least 1e1000 coins and without any of the row 1 generator upgrades.':'[75]有润滑油却没有机器：在拥有1e1000金币并且不购买第一排(横向)发生器升级的前提下退出无加倍器挑战。',
    '[76] Rage against the Machine: Exit [No Accelerator] with at least 1e1000 coins and without any of the row 1 generator upgrades.':'[76]对机器发脾气：在拥有1e1000金币并且不购买第一排(横向)发生器升级的前提下退出无加速器挑战。',
    '[77] Amish Paradise: Exit [No Shards] with at least 1e99,999 coins and without any of the row 1 generator upgrades.':'[77]阿米什人的天堂：在拥有1e99999金币并且不购买第一排(横向)发生器升级的前提下退出无碎片挑战。',
    '[78] Single-Cell: Complete [No Multiplier] once.':'[78]第一部分：完成一次无加倍器挑战。',
    '[79] Solidarity: Complete [No Multiplier] three times.':'[79]精诚团结：完成三次无加倍器挑战。',
    '[80] Duplication-Free!: Complete [No Multiplier] five times.':'[80]重叠自由！：完成五次无加倍器挑战。',
    '[81] Multitasking Challenged: Complete [No Multiplier] ten times.':'[81]多重挑战：完成十次无加倍器挑战。',
    '[82] No Deaths: Complete [No Multiplier] twenty times.':'[82]不会死亡：完成二十次无加倍器挑战。',
    '[83] Population One: Complete [No Multiplier] fifty times.':'[83]炼蛊：完成五十次无加倍器挑战。',
    '[84] Insert Another Token: Complete [No Multiplier] seventy-five times.':'[84]该投币了：完成七十五次无加倍器挑战。',
    '[85] Slow Start: Complete [No Accelerator] once':'[85]缓慢启动：完成一次无加速器挑战。',
    '[86] Respawn Rate -12%: Complete [No Accelerator] three times.':'[86]重生速率-12%：完成三次无加速器挑战。',
    '[87] Putting the Breaks On: Complete [No Accelerator] five times.':'[87]踩住刹车：完成五次无加速器挑战。',
    '[88] Racing a Sloth...: Complete [No Accelerator] ten times.':'[88]比懒大赛……：完成十次无加速器挑战。',
    '[89] ... and Losing.: Complete [No Accelerator] twenty times.':'[89]……然后输了。：完成二十次无加速器挑战。',
    '[90] Planck Distance Traveled: Complete [No Accelerator] fifty times.':'[90]只走了普朗克长度而已：完成五十次无加速器挑战。',
    '[91] Inverse-Ackermann Growth: Complete [No Accelerator] seventy-five times.':'[91]反阿克曼函数增长：完成七十五次无加速器挑战。',
    '[92] Intact: Complete [No Shards] once.':'[92]完好无缺：完成一次无碎片挑战。',
    '[93] Augments are Stupid!: Complete [No Shards] three times.':'[93]强化太蠢了！：完成三次无碎片挑战。',
    '[94] Grandmasters are Brilliant!: Complete [No Shards] five times.':'[94]宗师太聪明了！：完成五次无碎片挑战。',
    '[95] Gotta get those Grandmasters Stronger: Complete [No Shards] ten times.':'[95]加强宗师：完成十次无碎片挑战。',
    '[96] Summoning Enhancements: Complete [No Shards] twenty times.':'[96]召唤附魔：完成二十次无碎片挑战。',
    '[97] Magic 99/99: Complete [No Shards] fifty times.':'[97]魔法99/99：完成五十次无碎片挑战。',
    '[98] Perfect Foresight: Complete [No Shards] seventy-five times.':'[98]完全预见：完成七十五次无碎片挑战。',
    '[99] Inflation: Complete [Cost+] once.':'[99]通货膨胀：完成一次花费增加挑战。',
    '[100] Hyperinflation: Complete [Cost+] three times.':'[100]恶性通货膨胀：完成三次花费增加挑战。',
    '[101] Market Bubble: Complete [Cost+] five times.':'[101]市场泡沫：完成五次花费增加挑战。',
    '[102] Bull Market: Complete [Cost+] ten times.':'[102]牛市：完成十次花费增加挑战。',
    '[103] Wealth Inequality: Complete [Cost+] twenty times.':'[103]贫富不均：完成二十次花费增加挑战。',
    '[104] Severe Overpay: Complete [Cost+] fifty times.':'[104]工资虚高：完成五十次花费增加挑战。',
    '[105] Societal Collapse: Complete [Cost+] seventy-five times.':'[105]社会崩溃：完成七十五次花费增加挑战。',
    '[106] Excavation: Complete [Reduced Diamonds] once.':'[106]挖掘：完成一次钻石减少挑战。',
    '[107] Digging Deep: Complete [Reduced Diamonds] three times.':'[107]深挖：完成三次钻石减少挑战。',
    '[108] Frack As Needed: Complete [Reduced Diamonds] five times.':'[108]需要压碎：完成五次钻石减少挑战。',
    '[109] Unobtainium Pickaxe: Complete [Reduced Diamonds] ten times.':'[109]难得素之镐：完成十次钻石减少挑战。',
    '[110] Fortune III: Complete [Reduced Diamonds] twenty times.':'[110]命运 III：完成二十次钻石减少挑战。',
    '[111] Every kiss...: Complete [Reduced Diamonds] fifty times.':'[111]钻石恒久远：完成五十次钻石减少挑战。',
    '[112] ...begins with K.: Complete [Reduced Diamonds] seventy-five times.':'[112]一颗永流传：完成七十五次钻石减少挑战。',
    '[113] Tax evasion!: Complete {[Tax+]} once.':'[113]逃税！：完成一次税收增加挑战。',
    '[114] Keeping up with the Joneses: Complete {[Tax+]} twice.':'[114]攀比：完成两次税收增加挑战。',
    '[115] Offshore deposits: Complete {[Tax+]} three times.':'[115]海外存款：完成三次税收增加挑战。',
    '[116] Bribing officials: Complete {[Tax+]} five times.':'[116]贿赂官员：完成五次税收增加挑战。',
    '[117] Becoming President: Complete {[Tax+]} ten times.':'[117]正在成为总统：完成十次税收增加挑战。',
    '[118] Charitable Donation: Complete {[Tax+]} fifteen times.':'[118]慈善捐款：完成十五次税收增加挑战。',
    '[119] IRS Audit: Complete {[Tax+]} twenty-five times.':'[119]税务审计：完成二十五次税收增加挑战。',
    '[120] Is there anybody in there?: Complete {[No Accelerator/Multiplier]} once.':'[120]还有人在吗？：完成一次无加倍器/加速器挑战。',
    '[121] Human being: Complete {[No Accelerator/Multiplier]} twice.':'[121]人类：完成两次无加倍器/加速器挑战。',
    '[122] Interdimensional: Complete {[No Accelerator/Multiplier]} three times.':'[122]多维度：完成三次无加倍器/加速器挑战。',
    '[123] A slow nickel: Complete {[No Accelerator/Multiplier]} five times.':'[123]薄利多销：完成五次无加倍器/加速器挑战。',
    '[124] Multipliers don\'t even work 0/5: Complete {[No Accelerator/Multiplier]} ten times.':'[124]加倍器没效果，游戏评分0/5：完成十次无加倍器/加速器挑战。',
    '[125] Accelerators don\'t even work -5/5: Complete {[No Accelerator/Multiplier]} fifteen times.':'[125]加速器也没效果，游戏评分-5/5：完成十五次无加倍器/加速器挑战。',
    '[126] ACCELERATOR BOOSTS DON\'T EVEN WORK -100/5: Complete {[No Accelerator/Multiplier]} twenty-five times.':'[126]连加速器加成都没效果，游戏评分-100/5：完成二十五次无加倍器/加速器挑战。',
    '[127] I hate this challenge: Complete Cost++ Once.':'[127]我恨这个挑战：完成一次花费暴增挑战。',
    '[128] A costly mistake: Complete Cost++ Twice.':'[128]代价高昂的错误：完成两次花费暴增挑战。',
    '[129] Impetus: Complete Cost++ Three Times.':'[129]原动力：完成三次花费暴增挑战。',
    '[130] Are you broke yet? Complete Cost++ Five Times.':'[130]您破产了吗？：完成五次花费暴增挑战。',
    '[131] The world of Finance: Complete Cost++ Ten Times.':'[131]金融世界：完成十次花费暴增挑战。',
    '[132] Marginal Gains: Complete Cost++ Twenty Times.':'[132]边际收益：完成二十次花费暴增挑战。',
    '[133] I buy these: Complete Cost++ Twenty-Five Times.':'[133]这些我买了：完成二十五次花费暴增挑战。',
    '[134] Agnostic: Complete No Runes Once.':'[134]不可知论：完成一次无符文挑战。',
    '[135] Ant-i Runes: Complete No Runes Twice.':'[135]反蚁符文：完成两次无符文挑战。',
    '[136] Isn\'t it getting tiresome?: Complete No Runes Three Times.':'[136]是不是有点厌烦了？：完成三次无符文挑战。',
    '[137] Machine does not accept offerings: Complete No Runes Five Times.':'[137]机器不接受祭品：完成五次无符文挑战。',
    '[138] Runes Suck 1/5: Complete No Runes Ten Times.':'[138]符文弱爆了，游戏评分1/5：完成十次无符文挑战。',
    '[139] I didn\'t even notice Prism was gone: Complete No Runes Twenty Times.':'[139]棱镜符文什么时候不见了：完成二十次无符文挑战。',
    '[140] Atheist: Complete No Runes Twenty-Five Times.':'[140]无神论：完成二十五次无符文挑战。',
    '[141] Sadism: Complete {[Sadistic I]} Once.':'[141]抖S：完成一次虐待狂挑战 I。',
    '[142] Masochism: Complete {[Sadistic I]} Twice.':'[142]抖M：完成两次虐待狂挑战 I。',
    '[143] Insanity: Complete {[Sadistic I]} Three Times.':'[143]精神错乱：完成三次虐待狂挑战 I。',
    '[144] How? Complete {[Sadistic I]} Five Times.':'[144]怎么？完成五次虐待狂挑战 I。',
    '[145] Why? Complete {[Sadistic I]} Ten Times.':'[145]为何？完成十次虐待狂挑战 I。',
    '[146] Descend: Complete {[Sadistic I]} Twenty Times.':'[146]落凡：完成二十次虐待狂挑战 I。',
    '[147] End of the Universe: Complete {[Sadistic I]} Twenty-Five Times.':'[147]宇宙的尽头：完成二十五次虐待狂挑战 I。',
    '[148] Gas gas gas: Purchase 5 Accelerators.':'[148]Gas gas gas(头文字D主题曲)：购买5个加速器。',
    '[149] 0 to 25: Purchase 25 Accelerators.':'[149]从0到25：购买25个加速器。',
    '[150] 0 to 100: Purchase 100 Accelerators':'[150]从0到100：购买100个加速器。',
    '[151] Highway to Hell: Purchase 666 Accelerators.':'[151]地狱公路：购买666个加速器。',
    '[152] Perhaps you should brake: Purchase 2,000 Accelerators.':'[152]您该刹车了：购买2000个加速器。',
    '[153] Exit the vehicle now!: Purchase 12,500 Accelerators.':'[153]快下车！：购买12500个加速器。',
    '[154] Faster than light: Purchase 100,000 Accelerators.':'[154]超越光速：购买100000个加速器。',
    '[155] I\'ve been duped!: Purchase 2 Multipliers.':'[155]我重叠了！：购买2个加倍器。',
    '[156] Funhouse Mirrors: Purchase 20 Multipliers.':'[156]哈哈镜：购买20个加倍器。',
    '[157] Friend of binary: Purchase 100 Multipliers.':'[157]二进制之友：购买100个加倍器。',
    '[158] Feeling the cost growth yet?: Purchase 500 Multipliers.':'[158]感觉到成本飞涨了吗？：购买500个加倍器。',
    '[159] Perhaps you\'ll feel the cost now: Purchase 2,000 Multipliers.':'[159]该感觉到了吧：购买2000个加倍器。',
    '[160] Exponential Synergy: Purchase 12,500 Multipliers.':'[160]指数协同：购买12500个加倍器。',
    '[161] Cloned: Purchase 100,000 Multipliers.':'[161]克隆：购买100000个加倍器。',
    '[162] Jerk > 0: Purchase 2 Accelerator Boosts.':'[162]加加速度大于0：购买2个加速器加成。',
    '[163] Can\'t the speedometer move any faster?: Purchase 10 Accelerator Boosts.':'[163]速度计就不能更快点吗？：购买10个加速器加成。',
    '[164] 50 G rotations: Purchase 50 Accelerator Boosts.':'[164]50个G的轮转：购买50个加速器加成。',
    '[165] Dematerialize: Purchase 200 Accelerator Boosts.':'[165]非物虚化：购买200个加速器加成。',
    '[166] Breaking the laws of Physics: Purchase 1,000 Accelerator Boosts.':'[166]正在打破物理法则：购买1000个加速器加成。',
    '[167] Decayed Realism: Purchase 5,000 Accelerator Boosts.':'[167]现实主义被扫进了垃圾堆：购买5000个加速器加成。',
    '[168] Kinda fast: Purchase 15,000 Accelerator Boosts.':'[168]有点快欸：购买15000个加速器加成。',
    '[169] The Galactic Feast: Obtain 3 Galactic Crumbs.':'[169]银河盛宴：获得3个银河碎屑。',
    '[170] Only the finest: Obtain 100,000 Galactic Crumbs.':'[170]食不厌精：获得100000个银河碎屑。',
    '[171] Six-Course Meal: Obtain 666,666,666 Galactic Crumbs.':'[171]六道菜的大餐：获得666666666个银河碎屑。',
    '[172] Accumulation of Food: Obtain 1e20 Galactic Crumbs.':'[172]囤积食物：获得1e20个银河碎屑。',
    '[173] Cookie Clicking: Obtain 1e40 Galactic Crumbs.':'[173]点击饼干：获得1e40个银河碎屑。',
    '[174] Unlimited Bread Sticks!: Obtain 1e500 Galactic Crumbs.':'[174]无限的面包棒！：获得1e500个银河碎屑。',
    '[175] Restaurant at the end of the Universe: Obtain 1e2500 Galactic Crumbs.':'[175]宇宙尽头的餐馆：获得1e2500个银河碎屑。',
    '[176] Ant-icipation!: Amass a 2x Ant Multiplier through sacrifice and own a Tier 2 ant.':'[176]蚁之期待！：通过献祭获得2x的蚂蚁倍率并拥有一个T2蚂蚁。',
    '[177] Ant-ecedent: Amass a 6x Ant Multiplier through sacrifice and own a Tier 3 ant.':'[177]蚁之前提：通过献祭获得6x的蚂蚁倍率并拥有一个T3蚂蚁。',
    '[178] Ants are friends, not food!: Amass a 20x Ant Multiplier through sacrifice and own a Tier 4 Ant.':'[178]蚂蚁是朋友，不是食物！：通过献祭获得20x的蚂蚁倍率并拥有一个T4蚂蚁。',
    '[179] Ant Devil?: Amass a 100x Ant Multiplier through sacrifice and own a Tier 5 Ant.':'[179]蚁之魔？：通过献祭获得100x的蚂蚁倍率并拥有一个T5蚂蚁。',
    '[180] The world\'s best chef: Amass a 500x Ant Multiplier through sacrifice and own a Tier 6 Ant.':'[180]世界上最好的厨师：通过献祭获得500x的蚂蚁倍率并拥有一个T6蚂蚁。',
    '[181] 6 Michelin Stars: Amass a 6,666x Ant Multiplier through sacrifice and own a Tier 7 Ant.':'[181]米其林6星：通过献祭获得6666x的蚂蚁倍率并拥有一个T7蚂蚁。',
    '[182] Keys to the Restaurant at the end of the Universe: Amass a 77,777x Ant Multiplier through sacrifice and own a Tier 8 Ant.':'[182]宇宙尽头的餐馆的钥匙：通过献祭获得77777x的蚂蚁倍率并拥有一个T8蚂蚁。',
    '[183] Up: Ascend Once.':'[183]向上走：进行1次飞升。',
    '[184] Double-Up: Ascend Twice.':'[184]双倍向上：进行2次飞升。',
    '[185] Give me Ten!: Ascend Ten Times.':'[185]我要打十个！进行10次飞升。',
    '[186] Give me a Hundred: Ascend 100 Times.':'[186]一百个也一样：进行100次飞升。',
    '[187] Give me a Thousand: Ascend 1,000 Times.':'[187]一千个也一样：进行1000次飞升。',
    '[188] Give me some arbitrary number I: Ascend 14,142 Times.':'[188]随便多少都一样：进行14142次飞升。',
    '[189] Give me some arbitrary number II: Ascend 141,421 Times.':'[189]一个能打的都没有：进行141421次飞升。',
    '[190] Now that\'s what I call getting some Pi!: Attain a constant of 3.14.':'[190]这就是所谓的Pi了：达到3.14的数学常数。',
    '[191] One in a million: Attain a constant of 1,000,000 [1e6].':'[191]万里挑一：达到1000000[1e6]的数学常数。',
    '[192] A number: Attain a constant of 4.32e10.':'[192]一个数字：达到4.32e10的数学常数。',
    '[193] The coolest of numbers: Attain a constant of 6.9e21.':'[193]最棒的数字：达到6.9e21的数学常数。',
    '[194] Planck^(-1): Attain a constant of 1.509e33.':'[194]普朗克常数的倒数：达到1.509e33的数学常数。',
    '[195] Epsilon > a lot: Attain a constant of 1e66.':'[195]无穷小也比很多数大：达到1e66的数学常数。',
    '[196] NUM_MAX: Attain a constant of 1.8e308.':'[196]最大的常数：达到1.8e308的数学常数。',
    '[197] Casualties: Clear \'Reduced Ants\' challenge once.':'[197]伤亡：完成一次蚂蚁减少挑战。',
    '[198] Fatalities: Clear \'Reduced Ants\' challenge twice.':'[198]死亡：完成两次蚂蚁减少挑战。',
    '[199] Destruction: Clear \'Reduced Ants\' challenge three times.':'[199]毁灭：完成三次蚂蚁减少挑战。',
    '[200] War, what is it good for?: Clear \'Reduced Ants\' challenge five times.':'[200]战争，是为何而战？：完成五次蚂蚁减少挑战。',
    '[201] Absolutely everything.: Clear \'Reduced Ants\' challenge ten times.':'[201]当然是为了一切。：完成十次蚂蚁减少挑战。',
    '[202] Perfect Storm: Clear \'Reduced Ants\' challenge twenty times.':'[202]祸不单行：完成二十次蚂蚁减少挑战。',
    '[203] Immaculate Storm: Clear \'Reduced Ants\' challenge thirty times.':'[203]屋漏偏逢连夜雨：完成二十五次蚂蚁减少挑战。',
    '[204] I didn\'t need those stupid reincarnations anyway!: Clear \'No Reincarnation\' challenge once.':'[204]没用的转世说丢就丢！：完成一次无转世挑战。',
    '[205] [x1,x2,0,x3]: Clear \'No Reincarnation\' challenge twice.':'[205][x1,x2,0,x3]：完成两次无转世挑战。',
    '[206] Nonmetaphysical: Clear \'No Reincarnation\' challenge three times.':'[206]非玄学：完成三次无转世挑战。',
    '[207] Living alone: Clear \'No Reincarnation\' challenge five times.':'[207]离群索居：完成五次无转世挑战。',
    '[208] DM me on discord if you read these names: Clear \'No Reincarnation\' challenge ten times.':'[208]如果您读了这些名字就在Discord上私聊我：完成十次无转世挑战。',
    '[209] Yeah: Clear \'No Reincarnation\' challenge twenty times.':'[209]是的：完成二十次无转世挑战。',
    '[210] Science! Clear \'No Reincarnation\' challenge thirty times.':'[210]科学！完成三十次无转世挑战。',
    '[211] The IRS strikes back: Clear \'Tax+++\' challenge once.':'[211]税务局杀回来了：完成一次税收激增挑战。',
    '[212] Fiscal Policy: Clear \'Tax+++\' challenge twice.':'[212]财政政策：完成两次税收激增挑战。',
    '[213] Economic Boom: Clear \'Tax+++\' challenge three times.':'[213]经济繁荣：完成三次税收激增挑战。',
    '[214] Ant-onomics: Clear \'Tax+++\' challenge five times.':'[214]蚂蚁经济学：完成五次税收激增挑战。',
    '[215] \'Wow Platonic Tax sucks 1/5\': Clear \'Tax+++\' challenge ten times.':'[215]\'Platonic的税收弱爆了，游戏评分1/5\'：完成十次税收激增挑战。',
    '[216] Haha this is hard for some reason: Clear \'Tax+++\' challenge twenty times.':'[216]哈哈因为某些原因这是有点难：完成二十次税收激增挑战。',
    '[217] Taxes are hard: Clear \'Tax+++\' challenge thirty times.':'[217]严苛的税收：完成三十次税收激增挑战。',
    '[218] Shiny Blue Rock: Clear \'No Research\' once.':'[218]发亮的蓝石：完成一次无研究挑战。',
    '[219] It\'s like Avatar: Clear \'No Research\' twice.':'[219]就像阿凡达一样：完成二次无研究挑战。',
    '[220] It\'s like Unobtainium: Clear \'No Research\' three times.':'[220]这回真的难得了：完成三次无研究挑战。',
    '[221] It\'s like a thing: Clear \'No Research\' five times.':'[221]就像那啥一样：完成五次无研究挑战。',
    '[222] It\'s like: Clear \'No Research\' ten times.':'[222]就像那啥：完成十次无研究挑战。',
    '[223] It\'s: Clear \'No Research\' twenty times.':'[223]就像：完成二十次无研究挑战。',
    '[224] It: Clear \'No Research\' thirty times.':'[224]就：完成三十次无研究挑战。',
    '[225] Pretty Corrupt: Clear an Ascension with above 100,000 score.':'[225]相当腐化：以十万以上的分数完成飞升。',
    '[226] Bought out: Clear an Ascension with above 1 million score.':'[226]买断：以一百万以上的分数完成飞升。',
    '[227] Utterly Corrupt: Clear an Ascension with above 10 million score.':'[227]完全腐化：以一千万以上的分数完成飞升。',
    '[228] Antitrust: Clear an Ascension with above 100 million score.':'[228]反垄断：以一亿以上的分数完成飞升。',
    '[229] Ant-i-trust: Clear an Ascension with above 1 billion score.':'[229]蚁之反垄断：以十亿以上的分数完成飞升。',
    '[230] This is pretty unfair: Clear an Ascension with above 5 billion score.':'[230]这一点也不公平：以五十亿以上的分数完成飞升。',
    '[231] Antichrist: Clear an Ascension with above 25 billion score.':'[231]反基督者：以二百五十亿以上的分数完成飞升。',
    '[232] Highly Blessed: Level your Speed Rune blessing to 100,000.':'[232]高度祝福：将加速符文的祝福等级提升到十万。',
    '[233] Divine Blessing: Level your Speed Rune blessing to 100,000,000.':'[233]神圣祝福：将加速符文的祝福等级提升到一亿。',
    '[234] Blessing III: Level your Speed Rune blessing to 100 billion.':'[234]祝福 III：将加速符文的祝福等级提升到一千亿。',
    '[235] Spirit I: Level your Speed Spirit to 1 Million.':'[235]魂灵 I：将加速符文的魂灵等级提升到一百万。',
    '[236] Spirit II: Level your Speed Spirit to 1 Billion.':'[236]魂灵 II：将加速符文的魂灵等级提升到十亿。',
    '[237] Spirit III: Level your Speed Spirit to 1 Trillion.':'[237]魂灵 III：将加速符文的魂灵等级提升到一万亿。',
    '[238] Three-folded: [Hint: you may want to look into the inception]':'[238]三次折扣：[提示：想想一路走来，有什么刚好可以三重叠加的]',
    '[239] Seeing red: [Hint: you may need a lot of red items]':'[239]红色危机：[提示：这个游戏中，有什么资源基本全是红色的，当然不是说什么立方，您需要很多那种资源，有多少？应该不是1后面跟25个0啥的了]',
    '[240] ASCENDED: [Hint: you may need a LOT of ascensions OR an particularly amazing ascension]':'[240]多次飞升：[提示：在之前飞升成就的基础上，再多一位，至于是哪一位？肯定跟根号2没关系的]',
    '[241] Aesop: [Hint: you gotta be pretty dang slow]':'[241]伊索：[提示：想想哪个腐化会减慢速度，不要低于6级]',
    '[242] Aesop\'s Revenge: [Hint: you gotta be pretty dang fast]':'[242]伊索的复仇：[提示：与上个成就相反，速度的倍率需要大于一个数字，当然不是大于1小时的秒数]',
    '[243] Unsmith: [Hint: unsmith emoji :unsmith: can be a pretty good input]':'[243]面无表情：[提示：奖励代码输入 :unsmith: ]',
    '[244] Smith: [Hint: :antismith: looks promising as well]':'[244]反色面无表情：[提示：奖励代码输入 :antismith: ]',
    '[245] BLESSED: [Hint: Your Speed Blessing best be unreasonably high!]':'[245]彻底祝福：[提示：加速符文的祝福等级需要大到离谱，甚至是1e14的一亿倍]',
    '[246] Why? [Hint: Sometimes even 1 in over a Trillion counts!]':'[246]意义何在？[提示：在赫尔墨斯的祝福等级已经比一千万的两万倍还多时，再去开一个方盒又有什么意义呢，对不对？]',
    '[247] Challenging! [Hint: Challenge 11 is calling your name, but with even less ants]':'[247]真正的挑战！[提示：使用某个跟蚂蚁产量有关的腐化以后，完成挑战11，且本次完成挑战10的次数不能低于49，也不需要高于51？什么，腐化要多少级？挑战10至少需要次数的第一位就是了]',
    '[248] Seeing Red but not Blue: [Hint: Can you get red stuff without getting blue stuff?]':'[248]无蓝见红：[提示：在某个见不到发亮蓝石的挑战中，获得1后面跟着10个0……哦不好意思还少了个0的某种红色资源。什么资源？前面不是有一个一样的吗，就那个]',
    '[249] Overtaxed: [Hint: It might pay not to read!]':'[249]课税过重：[提示：在某个税收增加极快的挑战，当然不是那种转转世就能完成的挑战中，由于税收，金币产量连1后面跟着1，2，3……等等，多少来着，哦，100……1000？不不，100000个0都达不到]',
    '[250] The Thousand Suns: [Hint: You need to fully research into becoming GOD]':'[250]烈日千阳：[提示：将某个最后出现的研究提升至最大]',
    '[251] The Thousand Moons: [Hint: You may need to cube yourself up]':'[251]静月千阴：[提示：将方盒最后的某个升级提升至最大]',
    '[252] Ultimate: Complete \'SADISTIC II\' challenge.':'[252]终级挑战：完成虐待狂挑战 II。',
    '[253] Platonicism: Clear an ascension with 1e12 score.':'[253]Platonic主义：以1e12以上的分数完成飞升。',
    '[254] That\'s a handful!: Clear an ascension with 1e14 score.':' [254]屈指可数：以1e14以上的分数完成飞升。',
    '[255] The game where everything is made up: Clear an ascension with 1e17 score.':'[255]万物皆为虚妄：以1e17以上的分数完成飞升。',
    '[256] ... and the points don\'t matter: Clear an ascension with 2e18 score.':'[256]……千古即是一瞬：以2e18以上的分数完成飞升。',
    '[257] Arguably moral: Clear an ascension with 4e19 score.':'[257]可谓正直了：以4e19以上的分数完成飞升。',
    '[258] Khafra\'s Personal Best: Clear an ascension with 1e21 score.':'[258]Khafra的最高纪录：以1e21以上的分数完成飞升。',
    '[259] 100 million million million!: Clear an ascension with 1e23 score.':'[259]一千万亿亿！：以1e23以上的分数完成飞升。',
    '[260] Highly Dimensional Being: Ascend a total of 10 million times.':'[260]高维度的存在：进行一千万次飞升。',
    '[261] Ant God\'s upheaval: Ascend a total of 100 million times.':'[261]蚁神惊变：进行一亿次飞升。',
    '[262] Did you forget about ant god?: Ascend a total of 2 billion times.':'[262]您忘记蚁神了吗？：进行二十亿次飞升。',
    '[263] Ant god is unemployed thanks to you: Ascend a total of 40 billion times.':'[263]拜您所赐，蚁神失业了：进行四百亿次飞升。',
    '[264] I hope you\'re happy with yourself: Ascend a total of 800 billion times.':'[264]希望您对自己感到满意：进行八千亿次飞升。',
    '[265] Oh well: Ascend a total of 16 trillion times.':'[265]好吧：进行十六万亿(1.6e13)次飞升。',
    '[266] Keep up the gradual numerical increase: Ascend a total of 100 trillion times.':'[266]数字还在逐渐增长，保持住这个势头：进行一百万亿(1e14)次飞升。',
    '[267] Eigenvalued: Achieve a constant of 1e1,000.':'[267]特征值：达到1e1000的数学常数。',
    '[268] Achieve Mathematics: Achieve a constant of 1e5,000.':'[268]达到数学：达到1e5000的数学常数。',
    '[269] Ramsay (5,5): Achieve a constant of 1e15,000.':'[269]拉姆齐数R(5,5)(译者注：此数不存在)：达到1e15000的数学常数。',
    '[270] What comes after this?: Achieve a constant of 1e50,000.':'[270]下一个是什么？：达到1e50000的数学常数。',
    '[271] LARGE BOY: Achieve a constant of 1e100,000.':'[271]小伙子：达到1e100000的数学常数。',
    '[272] LARGER BOY: Achieve a constant of 1e300,000.':'[272]中伙子：达到1e300000的数学常数。',
    '[273] LARGEST BOY: Achieve a constant of 1e1,000,000.':'[273]大伙子：达到1e1000000的数学常数。',
    'Reward: 4 AP. 4 Quarks! Gain +.05% to Accelerator Power.': '奖励：4成就点数。4夸克！增加0.05%的加速器效果。',
    'Reward: 6 AP. 6 Quarks! Start transcensions/challenges with Worker Autobuyer unlocked.': '奖励：6成就点数。6夸克！超越或进入挑战后直接解锁工人自动购买。',
    'Reward: 8 AP. 8 Quarks! Gain +1 Accelerator per 500 Workers owned.': '奖励：8成就点数。8夸克！每拥有500个工人，就获得1个加速器。',
    'Reward: 9 AP. 9 Quarks! Gain +1 Multiplier per 1,000 Workers owned.': '奖励：9成就点数。9夸克！每拥有1000个工人，就获得1个加倍器。',
    'Reward: 10 AP. 10 Quarks! Gain +1 Accelerator Boost per 2,000 workers owned.': '奖励：10成就点数。10夸克！每拥有2000个工人，就获得1个加速器加成。',
    'Reward: 4 AP. 4 Quarks! Gain +.10% to Accelerator Power.': '奖励：4成就点数。4夸克！增加0.10%的加速器效果。',
    'Reward: 6 AP. 6 Quarks! Start transcensions/challenges with Investment Autobuyer unlocked.': '奖励：6成就点数。6夸克！超越或进入挑战后直接解锁投资自动购买。',
    'Reward: 8 AP. 8 Quarks! Gain +1 Accelerator per 500 Investments owned.': '奖励：8成就点数。8夸克！每拥有500个投资，就获得1个加速器。',
    'Reward: 9 AP. 9 Quarks! Gain +1 Multiplier per 1,000 Investments owned.': '奖励：9成就点数。9夸克！每拥有1000个投资，就获得1个加倍器。',
    'Reward: 10 AP. 10 Quarks! Gain +1 Accelerator Boost per 2,000 Investments owned.': '奖励：10成就点数。10夸克！每拥有2000个投资，就获得1个加速器加成。',
    'Reward: 4 AP. 4 Quarks! Gain +.15% to Accelerator Power.': '奖励：4成就点数。4夸克！增加0.15%的加速器效果。',
    'Reward: 6 AP. 6 Quarks! Start transcensions/challenges with Printer Autobuyer unlocked.': '奖励：6成就点数。6夸克！超越或进入挑战后直接解锁打印机自动购买。',
    'Reward: 8 AP. 8 Quarks! Gain +1 Accelerator per 500 Printers owned.': '奖励：8成就点数。8夸克！每拥有500台打印机，就获得1个加速器。',
    'Reward: 9 AP. 9 Quarks! Gain +1 Multiplier per 1,000 Printers owned.': '奖励：9成就点数。9夸克！每拥有1000台打印机，就获得1个加倍器。',
    'Reward: 10 AP. 10 Quarks! Gain +1 Accelerator Boost per 2,000 Printers owned.': '奖励：10成就点数。10夸克！每拥有2000台打印机，就获得1个加速器加成。',
    'Reward: 4 AP. 4 Quarks! Gain +.20% to Accelerator Power.': '奖励：4成就点数。4夸克！增加0.20%的加速器效果。',
    'Reward: 6 AP. 6 Quarks! Start transcensions/challenges with Coin Mint Autobuyer unlocked.': '奖励：6成就点数。6夸克！超越或进入挑战后直接解锁铸币厂自动购买。',
    'Reward: 8 AP. 8 Quarks! Gain +1 Accelerator per 500 Mints owned.': '奖励：8成就点数。8夸克！每拥有500个铸币厂，就获得1个加速器。',
    'Reward: 9 AP. 9 Quarks! Gain +1 Multiplier per 1,000 Mints owned.': '奖励：9成就点数。9夸克！每拥有1000个铸币厂，就获得1个加倍器。',
    'Reward: 10 AP. 10 Quarks! Gain +1 Accelerator Boost per 2,000 Mints owned.': '奖励：10成就点数。10夸克！每拥有2000个铸币厂，就获得1个加速器加成。',
    'Reward: 4 AP. 4 Quarks! Gain +.25% to Accelerator Power.': '奖励：4成就点数。4夸克！增加0.25%的加速器效果。',
    'Reward: 6 AP. 6 Quarks! Start transcensions/challenges with Alchemy Autobuyer unlocked.': '奖励：6成就点数。6夸克！超越或进入挑战后直接解锁炼金术自动购买。',
    'Reward: 8 AP. 8 Quarks! Gain 10% more offerings from resets || +1 Accelerator per 500 Alchemies!': '奖励：8成就点数。8夸克！重置时多获得10%祭品 || 每拥有500个炼金术，就获得1个加速器！',
    'Reward: 9 AP. 9 Quarks! Gain 15% more offerings from resets (stacks multiplicatively!) || +1 Multiplier per 1,000 Alchemies!': '奖励：9成就点数。9夸克！重置时多获得15%祭品(效果叠乘！) || 每拥有1000个炼金术，就获得1个加倍器！',
    'Reward: 10 AP. 10 Quarks! Gain 25% more offerings from resets (stacks multiplicatively!) || +1 Accelerator Boost per 2,000 Alchemies!': '奖励：10成就点数。10夸克！重置时多获得25%祭品(效果叠乘！) || 每拥有2000个炼金术，就获得1个加速器加成！',
    'Reward: 1 AP. 1 Quarks! Multiply Crystal Production by 2x.': '奖励：1成就点数。1夸克！水晶产量变为2倍。',
    'Reward: 2 AP. 2 Quarks! Multiply Crystal Production by the common logarithm of owned Diamonds. Prestiges give more offerings based on time spent (Up to +15 at 1800 seconds': '奖励：2成就点数。2夸克！水晶产量乘以(当前钻石数量的常用对数)。根据花费的时间，转生可获得更多祭品(在1800秒时达到最大，此时多获得15祭品',
    'Reward: 4 AP. 4 Quarks! Unlock the Duplication rune!': '奖励：4成就点数。4夸克！解锁重叠符文！',
    'Reward: 1 AP. 1 Quarks! Accelerator Boosts can be purchased from any screen. Unlock the Auto-Prestige feature.': '奖励：1成就点数。1夸克！在任何屏幕上都可以购买加速器加成了。解锁自动转生特性。',
    'Reward: 2 AP. 2 Quarks! Unlock the Prism Rune! Transcensions give more offerings based on time spent (Up to +15 at 1800 seconds': '奖励：2成就点数。2夸克！解锁棱柱符文！根据花费的时间，超越可获得更多祭品(在1800秒时达到最大，此时多获得15祭品',
    'Reward: 4 AP. 4 Quarks! Reduce tax scaling by up to 5%, depending on the length of prestige.': '奖励：4成就点数。4夸克！至多减少税收增长5%，此数值与转生的时长有关。',
    'Reward: 6 AP. 6 Quarks! Reduce tax scaling by up to another 5%, depending on length of prestige.': '奖励：6成就点数。6夸克！再次至多减少税收增长5%，此数值与转生的时长有关。',
    'Reward: 8 AP. 8 Quarks! Reduce tax scaling by up to ANOTHER 10%, depending on length of prestige!': '奖励：8成就点数。8夸克！再次至多减少税收增长10%，此数值与转生的时长有关！',
    'Reward: 1 AP. 1 Quarks! Unlock new Atomic production and unlock 3 new incredibly difficult challenges! Gain 2x particles on all future Reincarnations!': '奖励：1成就点数。1夸克！解锁原子的生产建筑，另外还解锁了3个非常难的挑战！转世可以获得2倍粒子！',
    'Reward: 2 AP. 2 Quarks! Manual Reincarnations give +4 Obtainium (unaffected by multipliers except time multiplier)!': '奖励：2成就点数。2夸克！手动转世可以多获得4难得素(除了时间倍率以外，不受其他倍率影响)！',
    'Reward: 4 AP. 4 Quarks! Reincarnations give more offerings based on time spent (Up to +25 at 1800 seconds': '奖励：4成就点数。4夸克！根据花费的时间，转世可获得更多祭品(在1800秒时达到最大，此时多获得25祭品',
    'Reward: 6 AP. 6 Quarks! Increase the amount of obtainium gained through all features by 0.125% additive for each rune level.': '奖励：6成就点数。6夸克！每级符文使难得素的获取数量增加0.125%，数值相互叠加。',
    'Reward: 2 AP. 2 Quarks! Gain +1, +1% free Multipliers!': '奖励：2成就点数。2夸克！获得1个加倍器，并且多获得1%加倍器！',
    'Reward: 8 AP. 8 Quarks! Gain +1, +1% more free Multipliers!': '奖励：8成就点数。8夸克！再获得1个加倍器，并且再多获得1%加倍器！',
    'Reward: 10 AP. 10 Quarks! Gain +1, +1% more, MORE free Multipliers!': '奖励：10成就点数。10夸克！再获得1个加倍器，并且再多获得1%加倍器！',
    'Reward: 2 AP. 2 Quarks! Gain +2, +1% free Accelerators!': '奖励：2成就点数。2夸克！获得2个加速器，并且多获得1%加速器！',
    'Reward: 8 AP. 8 Quarks! Gain +2, +1% more free Accelerators!': '奖励：8成就点数。8夸克！再获得2个加速器，并且再多获得1%加速器！',
    'Reward: 10 AP. 10 Quarks! Gain +2, +1% more, MORE free Accelerators!': '奖励：10成就点数。10夸克！再获得2个加速器，并且再多获得1%加速器！',
    'Reward: 2 AP. 2 Quarks! +1% Conversion Exponent on all generator upgrades!': '奖励：2成就点数。2夸克！所有发生器升级的转换指数增加1%！',
    'Reward: 4 AP. 4 Quarks! +1% Conversion Exponent on all generator upgrades!': '奖励：4成就点数。4夸克！所有发生器升级的转换指数增加1%！',
    'Reward: 6 AP. 6 Quarks! +1% Conversion Exponent on all generator upgrades!': '奖励：6成就点数。6夸克！所有发生器升级的转换指数增加1%！',
    'Reward: 8 AP. 8 Quarks! +1% Conversion Exponent on all generator upgrades!': '奖励：8成就点数。8夸克！所有发生器升级的转换指数增加1%！',
    'Reward: 10 AP. 10 Quarks! +1% Conversion Exponent on all generator upgrades!': '奖励：10成就点数。10夸克！所有发生器升级的转换指数增加1%！',
    'Reward: 10 AP. 10 Quarks! +1% Conversion Exponent on all generator upgrades! They\'re in overdrive now!': '奖励：10成就点数。10夸克！所有发生器升级的转换指数增加1%！它们现在是超速运转了！',
    'Reward: 1 AP. 1 Quarks! Start transcensions/challenges with 1 Refinery and automatically buy Refineries.': '奖励：1成就点数。1夸克！超越或进入挑战后直接获得1个炼油厂并解锁炼油厂自动购买。',
    'Reward: 2 AP. 2 Quarks! Automatically buy the first crystal upgrade if you can afford it!': '奖励：2成就点数。2夸克！自动购买第一个水晶升级！',
    'Reward: 4 AP. 4 Quarks! Start transcensions/challenges with Multiplier Autobuyer unlocked. +5% offering recycle.': '奖励：4成就点数。4夸克！超越或进入挑战后直接解锁加倍器自动购买。祭品回收概率增加5%。',
    'Reward: 8 AP. 8 Quarks! Delay tax growth by 4%.': '奖励：8成就点数。8夸克！税收增长减缓4%。',
    'Reward: 10 AP. 10 Quarks! +1% obtainium (stacks additively with other achievement rewards': '奖励：10成就点数。10夸克！难得素的获取数量增加1%(与其他成就的同类效果叠加',
    'Reward: 1 AP. 1 Quarks! Start transcensions/challenges with 1 Coal Plant and automatically buy Coal Plants.': '奖励：1成就点数。1夸克！超越或进入挑战后直接获得1个煤电厂并解锁煤电厂自动购买。',
    'Reward: 2 AP. 2 Quarks! Automatically buy the second crystal upgrade if you can afford it!': '奖励：2成就点数。2夸克！自动购买第二个水晶升级！',
    'Reward: 4 AP. 4 Quarks! Start transcensions/challenges with Accelerator Autobuyer unlocked. +5% offering recycle.': '奖励：4成就点数。4夸克！超越或进入挑战后直接解锁加速器自动购买。祭品回收概率增加5%。',
    'Reward: 10 AP. 10 Quarks! +3% obtainium (stacks additively with other achievement rewards': '奖励：10成就点数。10夸克！难得素的获取数量增加3%(与其他成就的同类效果叠加',
    'Reward: 1 AP. 1 Quarks! Start transcensions/challenges with 1 Coal Rig and automatically buy Coal Rigs.': '奖励：1成就点数。1夸克！超越或进入挑战后直接获得1个煤钻机并解锁煤钻机自动购买。',
    'Reward: 2 AP. 2 Quarks! Automatically buy the third crystal upgrade if you can afford it!': '奖励：2成就点数。2夸克！自动购买第三个水晶升级！',
    'Reward: 4 AP. 4 Quarks! +5% offering recycle.': '奖励：4成就点数。4夸克！祭品回收概率增加5%。',
    'Reward: 10 AP. 10 Quarks! +5% obtainium (stacks additively with other achievement rewards': '奖励：10成就点数。10夸克！难得素的获取数量增加5%(与其他成就的同类效果叠加',
    'Reward: 1 AP. 1 Quarks! Start transcensions/challenges with 1 Diamond Pickaxe and automatically buy Diamond Pickaxes.': '奖励：1成就点数。1夸克！超越或进入挑战后直接获得1个十字镐并解锁十字镐自动购买。',
    'Reward: 2 AP. 2 Quarks! Automatically buy the fourth crystal upgrade if you can afford it!': '奖励：2成就点数。2夸克！自动购买第四个水晶升级！',
    'Reward: 6 AP. 6 Quarks! Unlock the Thrift rune!': '奖励：6成就点数。6夸克！解锁节俭符文！',
    'Reward: 10 AP. 10 Quarks! +7% obtainium (stacks additively with other achievement rewards': '奖励：10成就点数。10夸克！难得素的获取数量增加7%(与其他成就的同类效果叠加',
    'Reward: 1 AP. 1 Quarks! Start transcensions/challenges with 1 Pandora\'s Box and automatically buy Pandora\'s Boxes.': '奖励：1成就点数。1夸克！超越或进入挑战后直接获得1个潘多拉魔盒并解锁潘多拉魔盒自动购买。',
    'Reward: 2 AP. 2 Quarks! Automatically buy the fifth crystal upgrade if you can afford it!': '奖励：2成就点数。2夸克！自动购买第五个水晶升级！',
    'Reward: 10 AP. 10 Quarks! +9% obtainium (stacks additively with other achievement rewards': '奖励：10成就点数。10夸克！难得素的获取数量增加9%(与其他成就的同类效果叠加',
    'Reward: 8 AP. 8 Quarks! Delay tax growth by 5.66%.': '奖励：8成就点数。8夸克！税收增长减缓5.66%。',
    'Reward: 9 AP. 9 Quarks! Each Reincarnation challenge completion delays tax growth by 0.75% per level, multiplicative. Effect': '奖励：9成就点数。9夸克！每完成一次任意转世挑战，税收增长就减缓0.75%，效果叠乘。效果',
    'Reward: 10 AP. 10 Quarks! +11% obtainium. Unlock a nice trinket somewhere...': '奖励：10成就点数。10夸克！难得素的获取数量增加11%。某个地方解锁了一个很不错的饰品……',
    'Reward: 4 AP. 4 Quarks! +7.5% offering recycle.': '奖励：4成就点数。4夸克！祭品回收概率增加7.5%。',
    'Reward: 8 AP. 8 Quarks! Delay tax growth by 5.66%. Unlock 5 new incredibly powerful researches!': '奖励：8成就点数。8夸克！税收增长减缓5.66%。解锁5个非常强大的研究！',
    'Reward: 10 AP. 10 Quarks! +13% obtainium. You get an accessory to commemorate this moment!': '奖励：10成就点数。10夸克！难得素的获取数量增加13%。您得到了一个纪念这一刻的饰品！',
    'Reward: 1 AP. 1 Quarks! Unlock 20 new incredibly expensive yet good researches. Unlock the [Anthill] feature!': '奖励：1成就点数。1夸克！解锁20个极贵也极强的研究。解锁[蚁丘]特性！',
    'Reward: 2 AP. 2 Quarks! Make researches go Cost-- with 1.5x Obtainium!': '奖励：2成就点数。2夸克！难得素获取数量变为1.5倍！',
    'Reward: 4 AP. 4 Quarks! +7.5% offering recycle. Gain another 1.25x Obtainium multiplier!': '奖励：4成就点数。4夸克！祭品回收概率增加7.5%。难得素获取数量变为1.25倍！',
    'Reward: 9 AP. 9 Quarks! Permanently gain +25% more sacrifice reward!': '奖励：9成就点数。9夸克！献祭奖励永久增加25%！',
    'Reward: 10 AP. 10 Quarks! +15% obtainium. Obtain the gift of Midas himself.': '奖励：10成就点数。10夸克！难得素的获取数量增加15%。获得米达斯的一份礼物。',
    'Reward: 1 AP. 1 Quarks! Unlock 10 newer incredibly expensive yet good researches. Unlock <<Talismans>> in the Runes Tab!': '奖励：1成就点数。1夸克！解锁10个极贵也极强的研究。解锁符文选项卡下的<<护身符>>面板！',
    'Reward: 2 AP. 2 Quarks! Talisman positive bonuses are now +0.05 stronger per level.': '奖励：2成就点数。2夸克！护身符的每级加成效果增加0.05。',
    'Reward: 4 AP. 4 Quarks! Talisman positive bonuses are now +0.05 even stronger per level.': '奖励：4成就点数。4夸克！护身符的每级加成效果再增加0.05。',
    'Reward: 6 AP. 6 Quarks! Permanently gain +25% more sacrifice reward!': '奖励：6成就点数。6夸克！献祭奖励永久增加25%！',
    'Reward: 10 AP. 10 Quarks! +17% obtainium. Lazy joke about not leaking talismans here [You get a new one]': '奖励：10成就点数。10夸克！难得素的获取数量增加17%。懒得拿不泄露护身符来开玩笑了[您可以获得一个新的护身符]',
    'Reward: 1 AP. 1 Quarks! Unlock a new reset tier!': '奖励：1成就点数。1夸克！解锁下一阶的重置！',
    'Reward: 10 AP. 10 Quarks! +19% obtainium (Achievement total is up to 100%!). Gain the Polymath Talisman!': '奖励：10成就点数。10夸克！难得素的获取数量增加19%(成就同类型加成总和为100%！)。获得博识护身符！',
    'Reward: 10 AP. 10 Quarks! +16.666% ALL Ant speed!': '奖励：10成就点数。10夸克！所有蚂蚁的速度增加16.666%！',
    'Reward: 10 AP. 10 Quarks! Gain more ants the longer your reincarnation lasts (max speed achieved in 2 hours': '奖励：10成就点数。10夸克！转世持续越久就可以获得越多蚂蚁(2小时的时候速度达到最大',
    'Reward: 10 AP. 10 Quarks! Unlock Ant Sacrifice, allowing you to reset your ants and ant upgrades in exchange for amazing rewards! Automatically buy Worker Ants.': '奖励：10成就点数。10夸克！解锁蚂蚁献祭，重置蚂蚁数量和蚂蚁升级以获取强大的奖励！自动购买工蚁。',
    'Reward: 10 AP. 10 Quarks! Unlock Tier 2 Ant autobuy, and autobuy Inceptus and Fortunae ants! Add +25 Base Ant ELO.': '奖励：10成就点数。10夸克！解锁T2蚂蚁自动购买，并且可以自动购买创始蚁和财富蚁！基础蚂蚁强度分增加25。',
    'Reward: 10 AP. 10 Quarks! Unlock Tier 3 Ant autobuy, and autobuy Tributum ants! Add +50 Base Ant ELO.': '奖励：10成就点数。10夸克！解锁T3蚂蚁自动购买，并且可以自动购买示威蚁！基础蚂蚁强度分增加50。',
    'Reward: 10 AP. 10 Quarks! Unlock Tier 4 Ant autobuy, and autobuy Celeritas and Multa ants! Add +75 Base Ant ELO.': '奖励：10成就点数。10夸克！解锁T4蚂蚁自动购买，并且可以自动购买迅捷蚁和加倍蚁！基础蚂蚁强度分增加75。',
    'Reward: 10 AP. 10 Quarks! Unlock Tier 5 Ant autobuy, and autobuy Sacrificium ants! Add +100 Base Ant ELO.': '奖励：10成就点数。10夸克！解锁T5蚂蚁自动购买，并且可以自动购买献祭蚁！基础蚂蚁强度分增加100。',
    'Reward: 10 AP. 10 Quarks! Unlock Tier 6 Ant autobuy, and autobuy Hic and Experientia ants! Add +1% Base Ant ELO.': '奖励：10成就点数。10夸克！解锁T6蚂蚁自动购买，并且可以自动购买建筑蚁和博学蚁！基础蚂蚁强度分增加1%。',
    'Reward: 10 AP. 10 Quarks! Unlock Tier 7 Ant autobuy, and autobuy Praemoenio ants! Add +2% Base Ant ELO.': '奖励：10成就点数。10夸克！解锁T7蚂蚁自动购买，并且可以自动购买预言蚁！基础蚂蚁强度分增加2%。',
    'Reward: 10 AP. 10 Quarks! Unlock Tier 8 Ant autobuy, and autobuy Scientia and Phylacterium ants! Add +3% Base Ant ELO.': '奖励：10成就点数。10夸克！解锁T8蚂蚁自动购买，并且可以自动购买科学蚁和命匣蚁！基础蚂蚁强度分增加3%。',
    'Reward: 20 AP. 100 Quarks! You will unlock a stat tracker for ascensions.': '奖励：20成就点数。100夸克！解锁飞升的数据追踪器。',
    'Reward: 20 AP. 100 Quarks! Gain +4% Cubes on ascension!': '奖励：20成就点数。100夸克！飞升时方盒获取数量增加4%！',
    'Reward: 40 AP. 200 Quarks! Gain +4% Cubes on ascension!': '奖励：40成就点数。200夸克！飞升时方盒获取数量增加4%！',
    'Reward: 40 AP. 200 Quarks! Gain +4% Cubs on ascension! Did I spell that wrong? You bet I did.': '奖励：40成就点数。200夸克！飞升时方合获取数量增加4%！什么？我打错字了？您猜猜我是有意的呢，还是有意的呢，还是有意的呢？',
    'Reward: 60 AP. 300 Quarks! Gain +3% Cubes on ascension!': '奖励：60成就点数。300夸克！飞升时方盒获取数量增加3%！',
    'Reward: 20 AP. 100 Quarks! You will gain 25% of excess time after 10 seconds each Ascension as a linear multiplier to rewards.': '奖励：20成就点数。100夸克！飞升时间超过10秒以后，超出部分的时间的25%将变为飞升奖励的倍率。',
    'Reward: 40 AP. 200 Quarks! Gain +4% Tesseracts on ascension!': '奖励：40成就点数。200夸克！飞升时超立方获取数量增加4%！',
    'Reward: 60 AP. 300 Quarks! Gain +3% Tesseracts on ascension!': '奖励：60成就点数。300夸克！飞升时超立方获取数量增加3%！',
    'Reward: 60 AP. 300 Quarks! Gain 20% of excess time after 10 seconds each Ascensions as a linear multiplier to ascensions (max 24 hours).': '奖励：60成就点数。300夸克！飞升时间超过10秒以后，超出部分的时间(最高24小时)的2%将变为飞升次数的倍率。',
    'Reward: 40 AP. 200 Quarks! You will gain 25% MORE excess time (Total: 50%) after 10 seconds each Ascension as a linear multiplier to rewards.': '奖励：40成就点数。200夸克！飞升时间超过10秒以后，超出部分的时间的25%将再次变为飞升奖励的倍率(总和：50%)。',
    'Reward: 40 AP. 200 Quarks! Gain +4% Hypercubes on ascension!': '奖励：40成就点数。200夸克！飞升时五阶立方获取数量增加4%！',
    'Reward: 60 AP. 300 Quarks! Gain +4% Hypercubes on ascension!': '奖励：60成就点数。300夸克！飞升时五阶立方获取数量增加4%！',
    'Reward: 60 AP. 300 Quarks! Gain +3% Hypercubes on ascension!': '奖励：60成就点数。300夸克！飞升时五阶立方获取数量增加3%！',
    'Reward: 40 AP. 200 Quarks! You gain gain 50% MORE MORE excess time (Total: 100%) after 10 seconds each Ascension as a linear multiplier to rewards.': '奖励：40成就点数。200夸克！飞升时间超过10秒以后，超出部分的时间的50%将再次变为飞升奖励的倍率(总和：100%)。',
    'Reward: 40 AP. 200 Quarks! Gain +4% Platonic Cubes on ascension!': '奖励：40成就点数。200夸克！飞升时PLATONIC方盒获取数量增加4%！',
    'Reward: 60 AP. 300 Quarks! Gain +4% Platonic Cubes on ascension!': '奖励：60成就点数。300夸克！飞升时PLATONIC方盒获取数量增加4%！',
    'Reward: 100 AP. 500 Quarks! Gain +3% Platonic Cubes on ascension!': '奖励：100成就点数。500夸克！飞升时PLATONIC方盒获取数量增加3%！',
    'Reward: 100 AP. 500 Quarks! You gain a permanent +60% Obtainium and Offering bonus, with +6% all cube types!': '奖励：100成就点数。500夸克！难得素和祭品获取数量永久增加60%，所有类型的方盒及立方获取数量永久增加6%！',
    'Reward: 100 AP. 500 Quarks! You gain a permanent +100% Obtainium and Offering bonus, with +10% all cube types!': '奖励：100成就点数。500夸克！难得素和祭品获取数量永久增加100%，所有类型的方盒及立方获取数量永久增加10%！',
    'Reward: 50 AP. 2,000 Quarks! You will gain +10% Hypercubes! Why? I don\'t know.': '奖励：50成就点数。2000夸克！五阶立方获取数量增加10%！原因？我也不知道。',
    'Reward: 150 AP. 6,000 Quarks! Ascensions are 25% faster, forever!': '奖励：150成就点数。6000夸克！飞升的速度永久增加25%！',
    'Reward: 50 AP. 2,000 Quarks! You will gain 10% more ascension count, forever!': '奖励：50成就点数。2000夸克！飞升次数获取数量永久增加10%！',
    'Reward: 75 AP. 3,000 Quarks! You will gain 10% more ascension count, forever!': '奖励：75成就点数。3000夸克！飞升次数获取数量永久增加10%！',
    'Hover over an achievement to view information.': '鼠标停在成就上可以查看详细信息。',
    'Green background: Achieved.': '绿色背景：成就已完成。',
    'Purple background: Unachieved, provides bonus multiplier.': '紫色背景：成就可提供加成，未完成。',
    'Red background: Unachieved, provides content/feature unlock.': '红色背景：成就可解锁游戏内容或特性，未完成。',
    'No background: Unachieved, nothing special.': '无背景色：成就没有什么特别的，未完成。',
    'Congratulations on your first prestige. The first of many. You obtain offerings. You can use them in the new Runes tab! [Unlocked Runes, Achievements, Diamond Buildings and some Upgrades!]': '恭喜您完成了第一次转生。当然，有一次，就会有无数次。您获得了祭品，您可以在新解锁的符文选项卡中使用它们！[解锁了符文，成就，钻石建筑和一些其他升级！]',
    'Hmm, it seems you are getting richer, being able to get 1 Googol diamonds in a single prestige. How about we give you another rune? [Unlocked Duplication rune in Runes tab!]': '嗯，您越来越有钱了，一次转生中就能获得1e100的钻石了。不如，我们再给您一个符文吧？[解锁重叠符文！]',
    'Wow! You gained 1e17 (100 Quadrillion) score in a single Ascension. For that, you can now generate Hepteracts if you get above 6.66e16 (66.6 Quadrillion) score in an Ascension. Good luck!': '哇哦！您在这一次飞升中获得了1e17的飞升分数。因此从现在起，只要您的飞升分数大于6.66e16，您就可以获得七阶立方了。祝您好运！',
    //成就结束

    //符文等
    'Talismans': '护身符',
    'Blessings': '祝福',
    '[=-Spirits-=]': '[=-魂灵-=]',
    'Toggle the number of levels to buy per sacrifice': '切换每次献祭时购买的符文等级',
    'Speed Rune': '加速符文',
    'Duplication Rune': '重叠符文',
    'Prism Rune': '棱柱符文',
    'Thrift Rune': '节俭符文',
    'Superior Intellect': '卓越智慧',
    'Infinite Ascent': '无限晋升',
    'Grandiloquence': '豪言壮语',
    '[Bonus: Nope!]': '[额外等级：无！]',
    'SACRIFICE': '献祭',
    'Hey, hover over a rune icon to get details on what each one does and what benefits they\'re giving you!': '鼠标停在符文上来查看它有什么作用！',
    '=====RUNE EFFECT SUMMARY=====': '=====符文效果总结=====',
    '(Level/4)^1.25 Accelerator, +0.25% Accelerators per level. +1 Accelerator Boost every 20 levels!': '(等级/4)^1.25的加速器数量，每级再+0.25%的加速器数量。每20级加速器加成数量+1！',
    '(Level/10) Multipliers every 10th level, +0.25% Multipliers per level. Tax growth is delayed more for each level!': '(等级/10)加倍器数量于每10级，每级再+0.25%的加倍器数量。每级使税收增长减缓更多！',
    '~(1 + (Level/2)^2 * 2^(Level/2) / 256)x Crystal Production. +1 free level for each Crystal upgrade per 16 levels!': '水晶产量变为[1+(等级/2)^2*2^(等级/2)/256]倍。每16级使每个水晶升级免费+1级！',
    '0.125% building cost growth delay per level, +0.0625% offering recycle chance per level [MAX: 25%], 2^((1000 - Level)/1100) Tax growth multiplier AFTER level': '0.125%建筑成本增长减缓于每级，每级增加0.0625%祭品回收概率[上限：25%]。另外税收增长倍率变为2^[(1000-等级)/1100]倍，但只生效于超过等级',
    '~(1 + level/200)x Obtainium, (1 + Level^2/2500)x Ant Hatch Speed, +0.005 base offerings for each tier per level': '难得素获取数量变为(1+等级/200)倍，蚂蚁速度变为(1+等级^2/2500)倍，每级使每一阶重置的基础祭品数量+0.005',
    'Press [1], [2], [3], [4] or [5] on your keyboard to use offerings for each rune, starting with Speed Rune on the left; must have rune unlocked to use hotkey!': '按[1]，[2]，[3]，[4]或[5]来为每个符文进行献祭，从加速符文开始从左往右依次对应。需要解锁了相应符文才可以使用快捷键献祭！',
    'Toggle percent resources used': '切换使用的资源比例',
    'BUY': '购买',
    'Cost for 1: 1e6 Obtainium': '',
    'Exemption': '免税',
    'Chronos': '时光',
    'Midas': '点金',
    'Metaphysics': '玄学',
    'Polymath': '博识',
    'Mortuus Est': '虔蚁',
    'Plastic': '信卡',
    'FORTIFY': '加强',
    'ENHANCE': '升阶',
    'RESPEC': '洗点',
    'RESPEC ALL': '全部洗点',
    '=-=-=-= Exemption Talisman Effects =-=-=-=': '=-=-=-= 免税护身符效果 =-=-=-=',
    'Taxes -': '税收减少',
    'Mythic Effect: +400 Duplication Rune Levels!': '神秘效果：重叠符文等级增加400！',
    '=-=-=-= Chronos Talisman Effects =-=-=-=': '=-=-=-= 时光护身符效果 =-=-=-=',
    'Mythic Effect: +400 Speed Rune Levels!': '神秘效果：加速符文等级增加400！',
    '=-=-=-= Midas Talisman Effects =-=-=-=': '=-=-=-= 点金护身符效果 =-=-=-=',
    'Rune Blessing bonuses +': '符文祝福奖励增加',
    'Mythic Effect: +400 Thrift Rune Levels!': '神秘效果：节俭符文等级增加400！',
    '=-=-=-= Metaphysics Talisman Effects =-=-=-=': '=-=-=-= 玄学护身符效果 =-=-=-=',
    'Mythic Effect: +400 Prism Rune Levels!': '神秘效果：棱柱符文等级增加400！',
    '=-=-=-= Polymath Talisman Effects =-=-=-=': '=-=-=-= 博识护身符效果 =-=-=-=',
    'Rune Spirit Bonuses +': '符文魂灵奖励增加',
    'Mythic Effect: +400 SI Rune Levels!': '神秘效果：卓越智慧等级增加400！',
    '=-=-=-= Mortuus Est Talisman Effects =-=-=-=': '=-=-=-= 虔蚁护身符效果 =-=-=-=',
    'Bonus Ant Levels: +': '蚂蚁等级额外增加',
    'Mythic Effect: Gain ant speed based on your total rune level!': '神秘效果：根据符文总等级增加蚂蚁速度！',
    '=-=-=-= Plastic Talisman Effects =-=-=-=': '=-=-=-= 信卡护身符效果 =-=-=-=',
    'Gain 1x normal production': '无',
    'Mythic Effect: +2 Quarks per Hour on Export!': '神秘效果：每小时导出奖励增加2夸克！',
    'Get Max Enhance for a Mythical bonus effect!': '升阶到最大后可获得一个神秘效果！',
    '=-=- Resources Required to Level Up -=-=-': '=-=- 加强所需的资源 -=-=-',
    '=-=-= Resources Required to ENHANCE =-=-=': '=-=-= 升阶所需的资源 =-=-=',
    '-==-+ Select for 3 GREEN Runes, for Respec! +-==-+': '-==-+ 请正好选择3个符文，否则无法洗点！ +-==-+',
    'Confirm [-100,000 Offerings]': '确认洗点[花费100,000祭品]',
    'Confirm ALL [-400,000 Offerings]': '确认全部洗点[花费400,000祭品]',
    'Speed Rune: Positive': '加速符文：获得加成',
    'Speed Rune: Negative': '加速符文：无加成',
    'Duplication Rune: Positive': '重叠符文：获得加成',
    'Duplication Rune: Negative': '重叠符文：无加成',
    'Prism Rune: Positive': '棱柱符文：获得加成',
    'Prism Rune: Negative': '棱柱符文：无加成',
    'Thrift Rune: Positive': '节俭符文：获得加成',
    'Thrift Rune: Negative': '节俭符文：无加成',
    'SI Rune: Positive': '卓越智慧：获得加成',
    'SI Rune: Negative': '卓越智慧：无加成',
    'Cancel respec changes': '取消洗点',
    'Blessing level': '祝福等级',
    'Increase Level By': '提升等级：',
    ' [Cost': '[花费',
    ' Offerings]': '祭品]',
    'Blessing Power': '祝福能量',
    ' =-=-= Effect': ' =-=-= 效果',
    'x Global Speed': '倍全局速度',
    'x Multiplier Boosts': '倍加倍器加成',
    'x Ant Sacrifice Rewards': '倍蚂蚁献祭奖励',
    'x Delay for A.Boost Cost': '倍加速器加成成本增长减缓',
    ' Obtainium --> Ant Mult. Exponent': '难得素对蚂蚁倍率的指数',
    'Buy up to': '最多一次购买',
    ' Levels per purchase, if affordable. [Input to toggle]': '级。[输入数字来控制]',
    'Spirit level': '魂灵等级',
    'Spirit Power': '魂灵能量',
    'x Wow! Cubes by Ascension': '倍飞升时惊奇方盒获取数量',
    ' Additional levels to Crystal caps': '额外的水晶升级等级上限',
    'x Obtainium': '倍难得素',
    '% stronger Research 4x9 effect': '%的研究4x9额外效果',
    //符文等结束

    //挑战
    'Is the base game too easy? Try these situations! [Click the icons to view challenge details!]': '正常游戏是不是已经让您觉得太简单了？试试这些吧！[点击图标以查看挑战详情！]',
    'Mode: OFF': '模式：关闭',
    'MODE: OFF': '模式：关闭',
    'MODE: START': '模式：开始',
    'MODE: ENTER': '模式：进入',
    'MODE: EXIT': '模式：退出',
    'Per Completion Bonuses': '每次完成奖励',
    'Bonus/Unlock for First Completion': '首次完成奖励',
    '|| Softcapped past 100! Effective completion count': '|| 超过100次以后效果下降！有效的完成次数为',
    '|| Softcapped past 25! Effective completion count': '|| 超过25次以后效果下降！有效的完成次数为',
    '|| Softcapped past 10! Effective completion count': '|| 超过10次以后效果下降！有效的完成次数为',
    'Multipliers make the game a little too fast. Let\'s take them out!': '加倍器让游戏的进度有点太快了。它们可以走了！',
    'Transcend and reach the goal except Multipliers do nothing but act like Accelerators, which are nerfed by 50%!': '立即超越开始挑战，加倍器失去加倍器效果，变为与加速器作用相同，且效果削弱50%！',
    '10 base Multiplier Boosts! \[\+0.05 to power!\] Current': '10个基础加倍器加成！[增加0.05加倍器效果！]当前效果',
    '10% total Multiplier Boosts! Current': '10%总加倍器加成！当前效果',
    '0.04 base Rune exp per Offering! Current': '0.04每个祭品的基础符文经验值！当前效果',
    '1 free Multiplier! +1 Base EXP per offering used!': '1个免费加倍器！每个祭品的基础符文经验值增加1！',
    'Start [No Multipliers]': '开始[无加倍器挑战]',
    'Who needs accelerators? They do basically nothing now.': '加速器？谁要就拿去，不过是无用之物而已。',
    'Transcend and reach the goal except Accelerators do nothing! Multipliers are nerfed a bit as well.': '立即超越开始挑战，加速器完全无效，加倍器也被削弱了。',
    '5 Free Accelerators! Current': '5个免费加速器！当前效果',
    '5% Accelerator Boost Power! Current': '5%加速器加成效果！当前效果',
    '0.25% Accelerator Power! Current': '0.25%加速器效果！当前效果',
    '1 base offering for Prestige and Transcensions.': '1转生和超越的基础祭品获取数量。',
    'Start [No Accelerators]': '开始[无加速器挑战]',
    'Alright, now you\'re thinking, how else can I make the game harder?': '很好，您是不是在想，我还能玩出什么花样来？',
    'Transcend and reach the goal except you do not produce Crystals or Mythos Shards.': '立即超越开始挑战，您不能产生水晶或神话碎片。',
    'Crystal --> Coin conversion exponent +0.04! Current': '水晶对金币转换指数增加0.04！当前效果',
    '0.5% to Grandmaster production per Mythos producer bought. Current': '0.5%宗师产量于每购买1个神话生产者。当前效果',
    'When you use a rune, all other runes gain +0.01 EXP. Current': '当您献祭符文的时候，其他所有符文也获得0.01经验值。当前效果',
    'Gain an offering automatically every 2 seconds!': '每2秒自动获得1个祭品！',
    'Start [No Shards]': '开始[无碎片挑战]',
    'Exponent +': '指数增加',
    'You\'re getting rich now, but inflation hasn\'t happened yet? I don\'t think so!': '您腰包越来越鼓了。但，没有通货膨胀？您想多了！',
    'Transcend and reach the goal except Coin/Crystal producers, Accelerators and Multipliers cost more. [Gets harder each time!]': '立即超越开始挑战，金币/水晶生产者，加速器和加倍器的花费变得更高。[挑战难度会随着完成次数越来越高！]',
    'Accelerator Cost scale slows down by +5 purchases. Current': '加速器花费增长减缓5次购买。当前效果',
    'Multiplier Cost scale slows down by +2 purchases. Current': '加倍器花费增长减缓2次购买。当前效果',
    'Building Cost Delay +0.5%. Current': '建筑成本增长减缓0.5%。当前效果',
    'None': '无',
    'Start [Cost+]': '开始[花费增加挑战]',
    'Accelerator Delay +': '加速器减缓次数',
    'Multiplier Delay +': '加倍器减缓次数',
    'Building Cost Delay +': '建筑成本增长减缓',
    'You ever wonder how you get so many diamonds?': '您想过钻石是怎么来的吗？',
    'Transcend and reach the goal except you gain far fewer Diamonds from all sources [Gets harder each time!]': '立即超越开始挑战，您获得的钻石数量大幅度减少[挑战难度会随着完成次数越来越高！]',
    '0.01 Coin --> Diamond conversion exponent on Prestige! Current': '0.01转生时金币对钻石的转换指数！当前效果',
    'Multiply Crystal production by 10! Current': '水晶产量变为10倍！当前效果',
    'Start [Reduced Diamonds]': '开始[钻石减少挑战]',
    'Exponent = ^': '指数变为',
    'The tax man caught wind that you reincarnated recently...': '据说，您最近在转世……税务官如是说',
    'Reincarnate and reach the goal except tax has a lower cap, and Coin production is divided by 1e250.': '立即转世开始挑战，税收将金币上限限制得更低，并且金币产量将除以1e250。',
    '3.5% Taxes [Multiplicative]! Current': '3.5%税收[效果叠乘]！当前效果',
    'Thrift Rune Exp +10%! Current': '节俭符文经验值增加10%！当前效果',
    'Prestige Offerings +2%! Current': '转生的祭品获取数量增加2%！当前效果',
    '7.5% Taxes!': '7.5%税收！',
    'Start <Higher Tax>': '开始<税收增加挑战>',
    'Tax multiplier': '税收倍率变为',
    'EXP +': '经验值增加',
    'You\'re really going to hate this one.': '憎恨我，怨恨我，然后，再来到我眼前吧。',
    'Reincarnate and reach the goal except Accelerators and Multipliers do nothing. Coin Production is divided by 1e1,250.': '立即转世开始挑战，加速器和加倍器完全无效。金币产量将除以1e1250。',
    'Accelerator/Multiplier boost power exponent +0.04! Current': '加速器加成及加倍器加成效果指数增加0.04！当前效果',
    'Speed Rune Exp +10%! Current': '加速符文经验值增加10%！当前效果',
    'Duplication Rune Exp +10%! Current': '重叠符文经验值增加10%！当前效果',
    'Multiplier Boost power +25%! The first Discord-Booster Global Diamond Upgrade.': '加倍器加成效果增加25%！解锁第一个由Discord助力而出现的全局钻石升级。',
    'Start <No Multipliers/Accelerators>': '开始<无加倍器/加速器挑战>',
    'You thought you could outgrow inflation by Reincarnating?': '转世了，您以为通货膨胀从此就消失了吗？太天真了。',
    'Reincarnate and reach the goal except Cost Scaling for producers and Accelerators/Multipliers scale much, much faster.': '立即转世开始挑战，生产者，加速器和加倍器的花费变得高得多。',
    'Base Building Power +0.25! Current': '基础建筑能量增加0.25！当前效果',
    'Prism Rune Exp +20%! Current': '棱柱符文经验值增加20%！当前效果',
    'Transcend Offerings +4%! Current': '超越的祭品获取数量增加4%！当前效果',
    'Unlock the Anthill feature! Includes 20 new Researches. A Global Diamond Upgrade.': '解锁蚁丘特性！解锁20个新研究。另外还解锁了一个全局钻石升级。',
    'Start <Cost++>': '开始<花费暴增挑战>',
    'You\'ll never complain about Prism being bad again.': '您大概不会再抱怨棱柱符文没用了。',
    'Reincarnate and reach the goal except runes always have level 1 effects. All coin production is divided by e2,000,000.': '立即转世开始挑战，所有符文只有1级的效果。金币产量将除以1e2000000。',
    '1 free Ant level! Current': '1免费蚂蚁等级！当前效果',
    '10% Ant speed [Multiplicative!] Current': '10%蚂蚁速度[效果叠乘！]当前效果',
    'SI Rune Exp +20%! Current': '卓越智慧经验值增加20%！当前效果',
    'Unlock the Talismans feature! [In Runes tab]. A Global Diamond Upgrade.': '解锁护身符特性！[在符文选项卡下]。另外还解锁了一个全局钻石升级。',
    'Start <No Runes>': '开始<无符文挑战>',
    'I\'m sorry for what I\'ve unleashed onto the world.': '生而为人，我很抱歉。',
    'Reincarnate and reach the goal except run the first five challenges AT THE SAME TIME! Coin Production /e12,500,000.': '立即转世开始挑战，前五个挑战的限制同时生效！金币产量将除以1e12500000。',
    '100 base ELO for sacrificing ants! Current': '100蚂蚁基础强度分！当前效果',
    '2% Ant Sacrifice Reward! Current': '2%蚂蚁献祭奖励！当前效果',
    'Reincarnation Offerings +10%! Current': '转世的祭品获取数量增加10%！当前效果',
    'Unlock the Ascension Reset Tier!': '解锁飞升，下一阶的重置！',
    'Start <Sadistic I>': '开始<虐待狂挑战 I>',
    'The great Ant War of \'21 wiped off all of the skilled ants.': '二十一世纪的蚂蚁大战将所有技艺娴熟的蚂蚁都抹杀了。',
    'Ascend and reach the goal but only get free ant upgrades and from Challenge8/9 completions. FOR ASCENSION CHALLENGES YOU MUST CLEAR CHALLENGE 10 TO ATTEMPT THEM.': '立即飞升开始挑战，您只能获得免费的蚂蚁升级，完成挑战9也可以获得免费的蚂蚁升级。请注意，所有飞升挑战需要先完成挑战10以后才可以进行。',
    '12 free Ant Levels! Current': '12免费蚂蚁等级！当前效果',
    '80 to Rune Caps! Current': '80级符文等级上限！当前效果',
    'Unlock 15 Researches, and unlock the ability to open Tesseracts!': '解锁15个研究，并且解锁开启超立方的能力！',
    'Start <[(Reduced Ants)]>': '开始<[(蚂蚁减少挑战)]>',
    'For some reason, you just can\'t do it.': '因为某些原因，总之您就是没法那么做了。',
    'Ascend and reach the goal but you do not gain Particles and you cannot Reincarnate at all! Ant production ^0.5.': '立即飞升开始挑战，您无法获得粒子，也无法转世！蚂蚁产量^0.5。',
    '50% Obtainium! Current': '50%难得素获取数量！当前效果',
    '12% Offerings! Current': '12%祭品获取数量！当前效果',
    '1 Cube Tribute per opening! Current': '1打开每个方盒的贡品获取数量！当前效果',
    'Unlock 15 Researches, and unlock the mystical Spirit Power! Find these in the Runes tab.': '解锁15个研究，并且解锁神秘的魂灵能量！在符文选项卡下可以找到它们。',
    'Start <[(No Reincarnation)]>': '开始<[(无转世挑战)]>',
    'Good luck with the IRS, buddy.': '祝您好运，税务局又归来了。',
    'Ascend and reach the goal, but taxes are much higher and grow with challenge completions. Ant production ^': '立即飞升开始挑战，税收高得多，而且随着所有挑战的完成次数增加。蚂蚁产量^',
    'Taxes -3.33%! Multiplicative! Current': '税收减少3.33%！效果叠乘！当前效果',
    '6 maximum to Talisman Level Cap! Current': '6护身符等级上限！当前效果',
    '3% Spirit Power effectiveness! Current': '3%魂灵能量效果！当前效果',
    'Unlock 15 Researches, and unlock the power of the Hypercube!': '解锁15个研究，并且解锁五阶立方的力量！',
    'Start <[(Tax+++)]>': '开始<[(税收激增挑战)]>',
    'The dimension that never progressed past the dark ages. Many fear to even step foot.': '这个维度没能跨越黑暗时代。很多人甚至不敢越雷池一步。',
    'Ascend and reach the goal but you do not gain Obtainium nor are any researches purchasable. Ant production ^0.2.': '立即飞升开始挑战，您无法获得难得素，也无法进行研究。蚂蚁产量^0.2。',
    '50% stronger effect on researches 1x1 through 1x5. Current': '50%研究1x1至研究1x5的效果。当前效果',
    '1 research purchased per roomba tick! Current': '1每次自动购买的研究数量！当前效果',
    '200 to Rune Caps! Current': '200级符文等级上限！当前效果',
    'Unlock 15 Researches, and a way to coalesce your power into the Singularity.': '解锁15个研究，并且解锁将能量与奇点结合的方法。',
    'Start <[(No Research)]>': '开始<[(无研究挑战)]>',
    'The worst sin a man can do is making others suffer.': '折磨他人，是人类最大的原罪。',
    'Ascend and reach the goal but you\'re FULLY corrupt and must stay that way.': '立即飞升开始挑战，腐化全部为最大级别，并且无法清除。',
    'Goal: 1e4T Coins, but get bonuses based on your best attempt.': '目标：1e4T金币，根据您在此挑战中的最高金币数量获得奖励。',
    'You have no idea': '你根本不知道',
    'what you have just done': '你做了些什么',
    'the ant god shakes their mighty head': '蚁神摇着巨大的脑袋如是说',
    'Enter the singularity.': '进入奇点。',
    'Start <[(Sadistic Challenge II)]>': '开始<[(虐待狂挑战 II)]>',
    'Gain 1 Wow! HYPERCUBE for completing this challenge (First Time Bonus': '完成挑战后可以获得1个惊奇五阶立方(首次完成奖励',
    'Retry Challenges: ON': '重新尝试挑战：开',
    'Retry Challenges: OFF': '重新尝试挑战：关',
    'Auto Challenge Sweep [ON]': '自动扫荡挑战[开]',
    'Auto Challenge Sweep [OFF]': '自动扫荡挑战[关]',
    'Time for start of sweep': '扫荡间隔时间',
    'Time before exiting challenge': '退出挑战前经过时间',
    'Time before entering challenge': '进入挑战前经过时间',
    'Auto Timer': '扫荡计时',
    'Press [1], [2], [3], [4], or [5] to enter challenges, starting from the top. Press [E] or [e] to exit your transcension challenge if stuck!': '按[1]，[2]，[3]，[4]或[5]来进入挑战，从左往右对应。如果在挑战中卡住了，按[E]或[e]可以退出挑战！',
    'If you are unable to finish the challenge, press the hotkey listed above OR click on the red Challenge "C" button on the reset buttons on top.': '如果您无法完成挑战，可以按下上面列出的快捷键退出，或者点击顶部重置按钮上的红色 C 按钮来退出。',
    'To leave a reincarnation challenge, press the grey Challenge "C" instead!': '如果想要退出转世挑战，请按灰色的 C 按钮！',
    //挑战结束

    //研究
    'Upgrade: 1 Level': '升级：1级',
    'Upgrade: MAX [if possible]': '升级：最大[尽可能]',
    '[1x1] Increase the number of free Accelerators gained by 20% from all sources.': '[1x1]免费加速器数量增加20%。',
    '[1x2] Increase the number of free Multipliers gained by 20% from all sources.': '[1x2]免费加倍器数量增加20%。',
    '[1x3] Increase the number of free Accelerator Boosts gained by 20% from all sources.': '[1x3]免费加速器加成数量增加20%。',
    '[1x4] Increase most rune effects by 10%. (Excludes any recycle chance bonus': '[1x4]绝大多数符文的效果增加10%。(增加回收概率的除外',
    '[1x5] Multiply the production of all crystal producers by 1e4.': '[1x5]水晶生产者产量变为1e4倍。',
    '[1x6] Gain +5% free accelerators per level.': '[1x6]每级增加5%免费加速器数量。',
    '[1x7] Gain +4% free accelerators per level.': '[1x7]每级增加4%免费加速器数量。',
    '[1x8] Gain +3% free accelerators per level.': '[1x8]每级增加3%免费加速器数量。',
    '[1x9] Gain +2% free accelerators per level.': '[1x9]每级增加2%免费加速器数量。',
    '[1x10] Gain +2% free accelerators per level.': '[1x10]每级增加2%免费加速器数量。',
    '[1x11] Gain +5% free multipliers per level.': '[1x11]每级增加5%免费加倍器数量。',
    '[1x12] Gain +4% free multipliers per level.': '[1x12]每级增加4%免费加倍器数量。',
    '[1x13] Gain +2.5% free multipliers per level.': '[1x13]每级增加2.5%免费加倍器数量。',
    '[1x14] Gain +1.5% free multipliers per level.': '[1x14]每级增加1.5%免费加倍器数量。',
    '[1x15] Gain +0.5% free multipliers per level.': '[1x15]每级增加0.5%免费加倍器数量。',
    '[1x16] Gain +5% free accelerator boosts per level.': '[1x16]每级增加5%免费加速器加成数量。',
    '[1x17] Gain +5% free accelerator boosts per level.': '[1x17]每级增加5%免费加速器加成数量。',
    '[1x18] Gain +2 free accelerator per accelerator boost.': '[1x18]每个加速器加成额外增加2个免费加速器。',
    '[1x19] Gain +2 free accelerator per accelerator boost.': '[1x19]每个加速器加成额外增加2个免费加速器。',
    '[1x20] Gain +3 free accelerator per accelerator boost!': '[1x20]每个加速器加成额外增加3个免费加速器！',
    '[1x21] Most rune effects are increased by 1% per level. (Excludes any recycle chance bonus': '[1x11]绝大多数符文的效果每级增加1%。(增加回收概率的除外',
    '[1x22] Each Offering used increases Rune EXP by 0.6 per level.': '[1x22]每级使每个祭品增加的经验值提升0.6。',
    '[1x23] Each Offering used increases Rune EXP by another 0.3 per level!': '[1x23]每级使每个祭品增加的经验值再提升0.3。',
    '[1x24] Prestige and Transcensions base Offering is increased by 0.2 per level.': '[1x24]转生和超越相关的基础祭品数量每级增加0.2。',
    '[1x25] Reincarnations base Offering is increased by 0.6 per level.': '[1x25]转世相关的基础祭品数量每级增加0.6。',
    '[2x1] Multiply all crystal producer production by 150% per level (multiplicative).': '[2x1]每级使水晶生产者产量变为之前的150%(效果叠乘)。',
    '[2x2] Multiply all crystal producer production by 150% per level (multiplicative).': '[2x2]每级使水晶生产者产量变为之前的150%(效果叠乘)。',
    '[2x3] Coin Exponent is increased by 0.08 per level.': '[2x3]每级使金币指数增加0.08。',
    '[2x4] Coin Exponent is increased by another 0.08 per level.': '[2x4]每级使金币指数再增加0.08。',
    '[2x5] Coin Exponent is increased by ANOTHER 0.04 per level.': '[2x5]每级使金币指数再度增加0.04。',
    '[2x6] Want to bake cookies instead? You can go offline for 2 additional hours per level (base 24hr).': '[2x6]想要稍微划划水吗？每级可以使离线时间上限增加2小时(基础值为24小时)。',
    '[2x7] Want to bake a lot of cookies instead? Extend the offline maximum timer by another 2 hours per level!': '[2x7]想要多划几次水吗？每级可以使离线时间上限再增加2小时！',
    '[2x8] Gain +11% more multiplier boosts from Mythos Shards per level.': '[2x8]每级使神话碎片的加倍器加成增加11%。',
    '[2x9] Gain another +11% more multiplier boosts from Mythos Shards per level.': '[2x9]每级再使神话碎片的加倍器加成增加11%。',
    '[2x10] Gain ANOTHER +11% more multiplier boosts from Mythos Shards per level.': '[2x10]每级再度使神话碎片的加倍器加成增加11%。',
    '[2x11] Building power scales 5% faster per level.': '[2x11]每级使建筑能量增长速度加快5%。',
    '[2x12] Building power scales 2.5% faster per level.': '[2x12]每级使建筑能量增长速度加快2.5%。',
    '[2x13] Building power scales 2.5% faster per level.': '[2x13]每级使建筑能量增长速度加快2.5%。',
    '[2x14] Building power affects crystal production at a reduced rate.': '[2x14]建筑能量可以以减少的倍率增加水晶产量。',
    '[2x15] Building power affects mythos shard production at a reduced rate.': '[2x15]建筑能量可以以减少的倍率增加神话碎片产量。',
    '[2x16] Start Reincarnations with automatic A.Boosts unlocked. Note: this research doesn\'t affect earning achievements.': '[2x16]转世后直接解锁自动购买加速器加成。注意：此研究不影响获得成就。',
    '[2x17] Start Reincarnations with automatic Generators unlocked.': '[2x17]转世后直接解锁自动购买发生器升级。',
    '[2x18] Start Reincarnations with automatic C.Upgrades unlocked.': '[2x18]转世后直接解锁自动购买金币升级。',
    '[2x19] Start Reincarnations with automatic D.Upgrades unlocked.': '[2x19]转世后直接解锁自动购买钻石升级。',
    '[2x20] Start Reincarnations with automatic Diamond production unlocked.': '[2x20]转世后直接解锁每秒获得钻石升级。',
    '[2x21] Unlock the ability to automatically Reincarnate!': '[2x21]解锁自动转世功能！',
    '[2x22] Unlock Reincarnation upgrades 1-5. [Upgrades cost between 1 and 1,000 Particles]': '[2x22]解锁转世升级1-5。[升级花费在1至1000粒子之间]',
    '[2x23] Unlock Reincarnation upgrades 6-10. [Upgrades cost between 100,000 and 1e22 Particles]': '[2x23]解锁转世升级6-10。[升级花费在100000至1e22粒子之间]',
    '[2x24] Unlock Reincarnation upgrades 11-15. [Upgrades cost between 1e30 and 1e60 Particles]': '[2x24]解锁转世升级11-15。[升级花费在1e30至1e60粒子之间]',
    '[2x25] Unlock Reincarnation upgrades 16-20. [You might want to wait until challenge 8 is doable!]': '[2x25]解锁转世升级16-20。[建议到能完成挑战8时再购买此升级！]',
    '[3x1] Taxation scales 5.0% slower per level. [Up to -50%]': '[3x1]每级使税收增长减缓5.0%。[上限50%]',
    '[3x2] Taxation scales 2.5% slower per level. [Up to -75%]': '[3x2]每级使税收增长减缓2.5%。[加上前面的研究，上限75%]',
    '[3x3] Taxation scales 1.25% slower per level. [Up to -87.5%]': '[3x3]每级使税收增长减缓1.25%。[加上前面的研究，上限87.5%]',
    '[3x4] Taxation scales 0.625% slower per level. [Up to -93.75%]': '[3x4]每级使税收增长减缓0.625%。[加上前面的研究，上限93.75%]',
    '[3x5] Taxation scales 0.3125% slower per level. [Up to -96.875%]': '[3x5]每级使税收增长减缓0.3125%。[加上前面的研究，上限96.875%]',
    '[3x6] Building Cost Scale is delayed by 0.5% per level.': '[3x6]每级使建筑成本增长减缓0.5%。',
    '[3x7] Building Cost Scale is delayed by 0.5% per level.': '[3x7]每级使建筑成本增长减缓0.5%。',
    '[3x8] Building Cost Scale is delayed by 0.5% per level.': '[3x8]每级使建筑成本增长减缓0.5%。',
    '[3x9] Building Cost Scale is delayed by 0.5% per level.': '[3x9]每级使建筑成本增长减缓0.5%。',
    '[3x10] Building Cost Scale is delayed by 0.5% per level.': '[3x10]每级使建筑成本增长减缓0.5%。',
    '[3x11] Gain +50% of your best obtainium per second AUTOMATICALLY!': '[3x11]每秒自动获得难得素，数量为最佳难得素/秒的50%！',
    '[3x12] Gain an additional +10% of your best obtainium per second automatically.': '[3x12]每秒再自动获得难得素，数量为最佳难得素/秒的10%。',
    '[3x13] If your Reincarnation lasts at least 2 seconds you gain +1 obtainium per level.': '[3x13]如果转世持续时间超过2秒，则每级使难得素获取数量增加1。',
    '[3x14] If your Reincarnation lasts at least 5 seconds you gain +2 obtainium per level.': '[3x14]如果转世持续时间超过5秒，则每级使难得素获取数量增加2。',
    '[3x15] Increase the rate of gaining obtainium through reincarnations by 20% per level.': '[3x15]每级使转世的难得素获取数量增加20%。',
    '[3x16] Increase the maximum number of [No Multipliers] completions by 5 per level.': '[3x16]每级使[无加倍器挑战]的次数上限增加5。',
    '[3x17] Increase the maximum number of [No Accelerators] completions by 5 per level.': '[3x17]每级使[无加速器挑战]的次数上限增加5。',
    '[3x18] Increase the maximum number of [No Shards] completions by 5 per level.': '[3x18]每级使[无碎片挑战]的次数上限增加5。',
    '[3x19] Increase the maximum number of [Cost+] completions by 5 per level.': '[3x19]每级使[花费增加挑战]的次数上限增加5。',
    '[3x20] Increase the maximum number of [Reduced Diamonds] completions by 5 per level.': '[3x20]每级使[钻石减少挑战]的次数上限增加5。',
    '[3x21] Automatically gain completions for Challenge 1, even without running it!': '[3x21]无须进行挑战1也可以自动完成它。',
    '[3x22] Automatically gain completions for Challenge 2, even without running it!': '[3x22]无须进行挑战2也可以自动完成它。',
    '[3x23] Automatically gain completions for Challenge 3, even without running it!': '[3x23]无须进行挑战3也可以自动完成它。',
    '[3x24] Automatically gain completions for Challenge 4, even without running it!': '[3x24]无须进行挑战4也可以自动完成它。',
    '[3x25] Automatically gain completions for Challenge 5, even without running it!': '[3x25]无须进行挑战5也可以自动完成它。',
    '[4x1] Welcome to the land of expensive researches. Here\'s +10% obtainium per level to help you out!': '[4x1]欢迎来到昂贵研究的领域。此研究每级可以增加10%难得素获取数量，希望能帮到您！',
    '[4x2] Increase the level cap of Thrift rune by 10 per level, and +2% exp for that rune in particular.': '[4x2]每级增加10级节俭符文等级上限，并且使此符文经验值获取数量增加2%。',
    '[4x3] Increase the level cap of Speed rune by 10 per level, and +2% exp for that rune in particular.': '[4x3]每级增加10级加速符文等级上限，并且使此符文经验值获取数量增加2%。',
    '[4x4] Increase the level cap of Prism rune by 10 per level, and +2% exp for that rune in particular.': '[4x4]每级增加10级棱柱符文等级上限，并且使此符文经验值获取数量增加2%。',
    '[4x5] Increase the level cap of Duplication rune by 10 per level, and +2% exp for that rune in particular.': '[4x5]每级增加10级重叠符文等级上限，并且使此符文经验值获取数量增加2%。',
    '[4x6] You thought the previous researches are expensive? You\'re going to need this! [+10% Obtainium/level]': '[4x6]您觉得前面的研究太贵了？您会需要这个的！[每级增加10%难得素获取数量]',
    '[4x7] Permanently UNLOCK the Rune of Superior Intellect! [+%Ob / +Ant Speed / +Base Offerings.]': '[4x7]永久解锁卓越智慧符文！[提升难得素获取数量/蚂蚁速度/基础祭品获取数量。]',
    '[4x8] Taking forever to level up that SI Rune? Here\'s +5% SI Rune EXP per level.': '[4x8]觉得卓越智慧升级太慢了吗？此研究每级可以使它的经验值获取数量增加5%。',
    '[4x9] Does the new rune kinda suck? Power it up! +0.5% level effectiveness for SI rune per level!': '[4x9]感觉新符文不太给力吗？让它变得更强吧！每级使卓越智慧的等级效果增加0.5%！',
    '[4x10] Gain +0.01% more offerings per level per challenge completion!': '[4x10]每级使您每完成一次挑战就增加0.01%的祭品获取数量！',
    '[4x11] Yeah, going back to basics. +5% Accelerators/Level.': '[4x11]是的，回归本源。每级增加5%加速器数量。',
    '[4x12] 0/5 Multipliers SUCK: +5% Multipliers/Level.': '[4x12]游戏评分0/5 加倍器弱爆了：每级增加5%加倍器数量。',
    '[4x13] -1/5 A.Boosts SUCK: +5% Accelerator Boosts/Level.': '[4x13]游戏评分-1/5 加速器加成也弱爆了：每级增加5%加速器加成数量。',
    '[4x14] -5/5 MULTIPLIERS STILL SUCK: +20% Multiplier Boosts/Level': '[4x14]游戏评分-5/5 加倍器真的弱 爆 了：每级增加20%加倍器加成数量。',
    '[4x15] Runes don\'t suck at all, but why not make them even BETTER? +1% Rune Effect/level!': '[4x15]符文可不算弱，但为什么不让它们更强一些呢？每级使符文效果增加1%！',
    '[4x16] A simple +5% Rune EXP for all runes!': '[4x16]简明地使所有符文的经验值获取数量增加5%！',
    '[4x17] Another simple +5% Rune EXP for all runes!': '[4x17]再次简明地使所有符文的经验值获取数量增加5%！',
    '[4x18] +1 Accelerator Boost per 20 Summative Rune Levels, per level.': '[4x18]每级使您每有20级符文总等级就获得1个加速器加成。',
    '[4x19] +20 Multiplier per 8 Summative Rune Levels, per level.': '[4x19]每级使您每有8级符文总等级就获得20个加倍器。',
    '[4x20] Gain +4 base Offerings from Reincarnations by purchasing this. Math Nerds will love this!': '[4x20]购买此研究后，转世的基础祭品获取数量增加4。数学大神们会喜欢这个的！',
    '[4x21] Ants slow? Add +0.0002 to ant efficiency increase per ant purchased per level.': '[4x21]蚂蚁太慢了？每级使您每购买1只蚂蚁，就增加0.0002的蚂蚁效率。',
    '[4x22] Add +4 level to the first six upgradable ants per level!': '[4x22]每级使前六个蚂蚁升级的等级增加4级！',
    '[4x23] Add +4 level to the next five upgradable ants per level!': '[4x23]每级使后五个蚂蚁升级的等级增加4级！',
    '[4x24] Is the Quark Shop too hot to resist? Get +1 Quark per hour from Exporting for each level (Up to +75)!': '[4x24]夸克商店的诱惑太强无法自制了？每级使每小时导出奖励增加1夸克(上限为75)！',
    '[4x25] Alright, Platonic is off his rocker. I don\'t expect you to get this but this will give +1 MORE Quark per hour from Exporting (Up to +100)!': '[4x25]好吧，这游戏作者Platonic怕是石乐志了。本来不指望您能购买这个的，总之，它会使每小时导出奖励再增加1夸克(上限为100)！',
    '[5x1] Alright, you\'re past the big wall. How about adding +.001 to Inceptus Ant efficiency per level?': '[5x1]很好，您穿过了高墙。每级增加0.001创始蚁效率，听起来如何？',
    '[5x2] Gain +1 bonus level to ALL ants per level! A rainbow attack!': '[5x2]每级使所有蚂蚁额外增加1级！这就是彩虹攻击！',
    '[5x3] Pray to Ant God for +5% sacrifice rewards per level!': '[5x3]向蚁神祈祷，每级增加5%的献祭奖励！',
    '[5x4] You\'re beginning to feel like an ant god (ant god): +5% sacrifice reward per level!': '[5x4]您越来越有蚁神的感觉了：每级增加5%的献祭奖励！',
    '[5x5] Buy this and be able to run the first five challenges infinitely! (Note that requirements scale a LOT faster after': '[5x5]购买此研究后，将可以无限地进行前五个挑战！(请注意，挑战目标将急剧增加，如果完成次数超过',
    '[5x6] Engrave your talismans with obtainium to get +0.03 Rune Levels per talisman level per level.': '[5x6]使用难得素给护身符刻印，每级使每级护身符多增加0.03级符文。',
    '[5x7] Refine your talismans with the powder of Obtainium to get +0.03 Rune Levels per talisman level per level again.': '[5x7]使用难得素的粉末精炼护身符，每级再次使每级护身符多增加0.03级符文。',
    '[5x8] A simple trick makes your base ant ELO increase by 25 per level!': '[5x8]一个简单的小把戏就可以每级使蚂蚁基础强度分增加25！',
    '[5x9] A more convoluted trick makes your base ant ELO increase by 25 per level again!': '[5x9]一个更复杂一点的小把戏就可以每级再次使蚂蚁基础强度分增加25！',
    '[5x10] Gain +1% more ELO from ant sources per level because why not?': '[5x10]每级使蚂蚁增加1%强度分，因为，为什么不呢？',
    '[5x11] Gotta go fast [+10 max Speed Rune Level per level, +1% EXP to that rune]': '[5x11]得快点了[每级使加速符文等级上限增加10，且此符文经验值获取数量增加1%]',
    '[5x12] Double Trouble [+10 max Duplication Rune level per level, +1% EXP to that rune]': '[5x12]难上加难[每级使重叠符文等级上限增加10，且此符文经验值获取数量增加1%]',
    '[5x13] Newton\'s Delight [+10 max Prism Rune Level per level, +1% EXP to that rune]': '[5x13]牛顿的愉悦[每级使棱柱符文等级上限增加10，且此符文经验值获取数量增加1%]',
    '[5x14] Five-Finger discounts [+10 max Thrift Rune Level per level, +1% EXP to that rune]': '[5x14]顺手牵羊[每级使节俭符文等级上限增加10，且此符文经验值获取数量增加1%]',
    '[5x15] Scientific Breakthrough [+10 max SI Rune Level per level +1% EXP to that rune]': '[5x15]科学突破[每级使卓越智慧等级上限增加10，且此符文经验值获取数量增加1%]',
    '[5x16] Talismans have +0.015 Rune levels per talisman level per level. Levelception!': '[5x16]每级使每级护身符多增加0.015级符文。等级异常！',
    '[5x17] Talismans have another +0.015 Rune levels per talisman level per level!': '[5x17]每级使每级护身符再次多增加0.015级符文。',
    '[5x18] For \'neutral\' talisman effects, increase by +0.06 per level!': '[5x18]每级使每级护身符无加成的符文增加0.06级！',
    '[5x19] Gain +0.25% Wow! Cubes per level upon Ascension.': '[5x19]每级使飞升的惊奇方盒获取数量增加0.25%。',
    '[5x20] Gain another +0.25% Wow! per level upon Ascension.': '[5x20]每级再次使飞升的惊奇方盒获取数量增加0.25%。',
    '[5x21] Bend time to your will, making all ticks 2% faster each level.': '[5x21]使时间屈从于您的意志，每级使所有速度加快2%。',
    '[5x22] Adds +2% ant sacrifice reward per level.': '[5x22]每级使蚂蚁献祭奖励增加2%。',
    '[5x23] Adds +40 base ant ELO per level.': '[5x23]每级使蚂蚁基础强度分增加40。',
    '[5x24] Unlock the automator for Ant Sacrifice! [Good luck buying this.]': '[5x24]解锁自动献祭蚂蚁！[祝您好运。]',
    '[5x25] Good luck, buddy. [+1 Export Quark/hour]': '[5x25]祝好运，哥们。[使每小时导出奖励增加1夸克]',
    '[6x1] 6 rows? That can\'t be... You\'ve angered ant god (+1% Accelerators / level': '[6x1]六行了？不可能啊……您已经激怒了蚁神(每级增加1%加速器数量',
    '[6x2] Ant God gets angrier (+1% Accelerator Boosts / level': '[6x2]蚁神更生气了(每级增加1%加速器加成数量',
    '[6x3] Ant God cannot believe your bravery (+1% Multipliers / level': '[6x3]蚁神不敢相信您的勇气(每级增加1%加倍器数量',
    '[6x4] Add +1 extra level to Crystal upgrade caps multiplied by Level * Log4(Common Fragments +': '[6x4]使水晶升级上限乘上 此研究等级 * log4(普通碎片数量 +',
    '[6x5] Unlock automation for Fortifying talismans! Activates every 2 real life seconds.': '[6x5]解锁自动加强护身符！现实时间每2秒激活一次。',
    '[6x6] Turn some Ant Disciples against Ant God, giving +0.5% Rune Effectiveness per level.': '[6x6]让一部分神使蚁转而对抗蚁神，每级使符文效果增加0.5%。',
    '[6x7] Recruit a couple other ants towards your side as well, giving +2 free ant levels per level.': '[6x7]让其他一部分蚂蚁也加入您这一方，每级增加2级免费蚂蚁等级。',
    '[6x8] Using some coalesced Obtainium, you can make Ant Sacrifice 3% better per level.': '[6x8]联合难得素的能量，每级可以使蚂蚁献祭奖励增加3%。',
    '[6x9 lol] The funny number. Gain a +6.9% bonus to blessing level.': '[6x9 笑]有趣的数字。使祝福等级增加6.9%。',
    '[6x10] Unlock automation for Enhancing talismans! Activates every 2 real life seconds.': '[6x10]解锁自动升阶护身符！现实时间每2秒激活一次。',
    '[6x11] It may be time to look back. Makes all ticks 1.5% faster each level.': '[6x11]是时候回顾过去了。每级使所有速度加快1.5%。',
    '[6x12] Paying off Wow! Industries, they\'ll sponsor +1% cubes per level towards your Ascension bank.': '[6x12]赞助惊奇公司，每级让他们增加飞升库中1%的惊奇方盒数量。',
    '[6x13] When you open Wow! Cubes you will get +0.1% tributes per level!': '[6x13]打开惊奇方盒时，每级额外获得0.1%的贡品数量！',
    '[6x14] Make all Tesseract buildings produce 2% faster per level.': '[6x14]每级使超立方建筑的产量增加2%。',
    '[6x15] The first of a Tetralogy, this tome reduces the base requirements of Challenge 10 by dividing it by 1e100M! A must-read!': '[6x15]四部曲的第一部，它可以使挑战10的基础目标减少1e100M！不可错过！',
    '[6x16] The Ant God has infiltrated your mind. Run away from your conscience! (+0.8% Accelerators / level': '[6x16]蚁神正在渗透您的思维。把良心扔掉吧！(每级增加0.8%加速器数量',
    '[6x17] Run... RUN FASTER from your nightmares! (+0.8% Accelerator Boosts / level': '[6x17]跑……一定要逃离您的噩梦！(每级增加0.8%加速器加成数量',
    '[6x18] Your resilience somehow gives you +0.8% Multipliers / level!': '[6x18]您的适应能力使您每级增加0.8%加倍器数量！',
    '[6x19] Your obtainium gain is increased by 3 * Log4(Uncommon Fragments + 1) * level%! Why is this? I don\'t know.': '[6x19]您的难得素获取数量增加 3 * log4(罕见碎片数量 + 1) * 此研究等级%！为什么是这个公式？我也不知道。',
    '[6x20] Your knowledge from the ant war will help you automatically gain Mortuus Est Ant levels.': '[6x20]从蚂蚁大战中获取的知识让您可以自动获得死神蚁等级。',
    '[6x21] Feed your Disciples pure Obtainium to make your runes +0.4% more effective per level.': '[6x21]给神使蚁喂食纯净的难得素，每级使符文效果增加0.4%。',
    '[6x22] Feed your ants their own crumbs to make them Log(Crumbs + 10)x faster!': '[6x22]给蚂蚁们喂食碎屑，使它们的速度变为 log(银河碎屑数 + 10) 倍！',
    '[6x23] Increase your base Ant ELO by 2.5% per level!': '[6x23]每级使蚂蚁基础强度分增加2.5%！',
    '[6x24] You will gain +0.03% more Offerings per level per level in the Midas Talisman!': '[6x24]每级使每级点金护身符增加0.03%的祭品获取数量！',
    '[6x25] Auto Challenge. Enough said. (Lets you automatically run and complete challenges!': '[6x25]解锁自动挑战。效果一目了然。(您可以自动进行和完成挑战了！',
    '[7x1] A new row, old upgrade. Makes all ticks 1.2% faster each level.': '[7x1]新行装旧升级。每级使所有速度加快1.2%。',
    '[7x2] Wow! Industries sponsors another +0.9% cubes per level towards your Ascension bank!': '[7x2]惊奇公司再度使您每级增加飞升库中0.9%的惊奇方盒数量。',
    '[7x3] Hey, I totally didn\'t steal this idea. You gain 12 tributes of Wow! Cube tier for every Tesseract opened.': '[7x3]嘿，这可是我自己想出来的点子。每开启一个超立方，您就获得12个惊奇方盒的贡品。',
    '[7x4] Make all Tesseract buildings produce 3% faster per level. Hey, isn\'t that more than the last research tier?': '[7x4]每级使超立方建筑的产量增加3%。嘿，这是不是比之前的研究还强力了？',
    '[7x5] Tome 2 of 4: How to win over the Ant universe. Another e100M Divider to Challenge 10 Base Requirement on purchase.': '[7x5]四部曲的第二部：如何征服蚂蚁宇宙。使挑战10的基础目标再次减少1e100M。',
    '[7x6] What, again? Alright. +0.6% Accelerators / level.': '[7x6]什么，又来了？好吧。每级增加0.6%加速器数量。',
    '[7x7] Gas, gas, gas. +0.6% Accelerator Boosts / level.': '[7x7]Gas, gas, gas(详见第一行第六个成就)。每级增加0.6%加速器加成数量。',
    '[7x8] Dupe DUPE DUPE. +0.6% Multipliers / level.': '[7x8]骗骗骗。每级增加0.6%加倍器数量。',
    '[7x9] Somehow, I can\'t explain why, you reduce your taxes by 2% multiplicative, based on 3/5 * log10(Rare Fragments)!': '[7x9]我也解释不了原因，总之您的税收减少为 (1-2%) 的 3/5 * log10(稀有碎片数量) 次方！',
    '[7x10] Want a permanent blessing boost? I know you do. A permanent +25% effect to all blessings.': '[7x10]想要永久提升祝福效果吗？我知道您想的。永久提升所有祝福25%效果。',
    '[7x11] SIGMA KAPPA: +0.3% Rune Effectiveness each level!': '[7x11]姐妹旗：每级使符文效果增加0.3%！',
    '[7x12] More exponentiation! +0.0001% more inceptus power per level!': '[7x12]更多指数！每级使创始蚁效率增加0.0001%！',
    '[7x13] Ant God\'s wanting blood: +2% Ant Sacrifice rewards / level': '[7x13]蚁神渴望鲜血：每级增加2%献祭奖励',
    '[7x14] Spirit power still sucks, so add +8% power per level!': '[7x14]魂灵能量不给力，所以每级增加8%能量！',
    '[7x15] Gain 2x the Spirit buffs in challenges!': '[7x15]挑战中魂灵效果翻倍！',
    '[7x16] < T I M E >: +0.9% faster ticks / level': '[7x16] < 白 金 之 星 >：每级使所有速度加快0.9%。',
    '[7x17] Because of sponsorships, Wow! Industries is raising cubes gained in Ascension by 0.8% per level.': '[7x17]由于赞助的缘故，惊奇公司使您每级增加0.8%飞升的惊奇方盒获取数量。',
    '[7x18] Gain +0.08% tributes from cubes per level. You know, you should expect it at this point.': '[7x18]每级使惊奇方盒的贡品获取数量增加0.08%。您到这个时候应该预料的到。',
    '[7x19] +4% faster Tesseract Buildings / level. It\'s GROWING.': '[7x19]每级使超立方建筑的产量增加4%。它还在增加。',
    '[7x20] Tome 3 of 4: How to totally ROCK challenge 10. e100m divisor!': '[7x20]四部曲的第三部：如何完全搞定挑战10。挑战10的基础目标再次减少1e100M！',
    '[7x21] You should know how this goes. +0.4% Accelerator Boosts / level': '[7x21]您应该知道这个趋势了。每级增加0.4%加速器数量',
    '[7x22] Accelerator Boosts += 0.004 * Accelerator Boosts': '[7x22]每级增加0.4%加速器加成，就这样',
    '[7x23] A lot of a small +0.4% Multipliers per level': '[7x23]聚沙成塔，每级增加0.4%加倍器数量',
    '[7x24] Epic Fragments boost Blessing power by 10% * Log10(Epic Shards +': '[7x24]史诗碎片将祝福能量乘以 10% * log10(史诗碎片数量 +',
    '[7x25] Automatically buy Constant Upgrades, if they are affordable! They also no longer subtract from your constant.': '[7x25]自动购买数学常数升级！升级不再消耗数学常数。',
    '[8x1] Row 8 baby! +0.2% Rune Effectiveness / level.': '[8x1]第八行了，乖乖！每级使符文效果增加0.2%。',
    '[8x2] +Log10(Crumbs)% to ant production per level. Pretty cool buff ain\'t it?': '[8x2]每级使蚂蚁产量增加log10(银河碎屑数量)%。很棒的效果，对吧？',
    '[8x3] +666 Base ELO per level! Spooky number of the devil.': '[8x3]每级增加666蚂蚁基础强度分！给蚂蚁们刷一波6。',
    '[8x4] +0.04% more offerings per level per midas level!': '[8x4]每级使每级点金护身符增加0.04%的祭品获取数量！',
    '[8x5] +1 Export Quark per hour, yet again.': '[8x5]每小时导出奖励增加1夸克，是的，又是这个。',
    '[8x6] +0.6% faster ticks / level because why not? You\'re already the speed of light.': '[8x6]每级使所有速度加快0.6%，因为，为什么不呢？我是说，您已经是光速一样了。',
    '[8x7] +0.7% cubes in ascension bank / level, from dividends in Wow! Stock.': '[8x7]由于惊奇公司的分红，每级增加飞升库中0.7%的惊奇方盒数量。',
    '[8x8] When you open a Hypercube, you also open 100 Tesseracts! (This works with 7x3, if you were curious.': '[8x8]开启一个五阶立方时，获得100个超立方的奖励！(此研究与研究7x3可以一起生效',
    '[8x9] +5% faster Tesseract Buildings / level. ASCENDED.': '[8x9]每级使超立方建筑的产量增加5%。它快要上天了。',
    '[8x10] Tome 4 of 4: You need to prepare for your ascent. e100m divisor!': '[8x10]四部曲的第四部：为了前进做好准备吧。挑战10的基础目标再次减少1e100M！',
    '[8x11] Something something +0.2% Accelerators pretty cool!': '[8x11]那啥那啥，总之每级增加0.2%加速器数量，很棒！',
    '[8x12] Something somewhere, +0.2% Accelerator Boosts!': '[8x12]那啥这啥，总之每级增加0.2%加速器加成数量！',
    '[8x13] You are DUPLICATED. +0.2% Multipliers/level': '[8x13]您被复制了。每级增加0.2%加倍器数量',
    '[8x14] Legendary Fragments increase Spirit power by +15% multiplied by Log10(Legendary Fragments +': '[8x14]传奇碎片将魂灵能量增加 15% * log10(传奇碎片数量 +',
    '[8x15] Unlock Automations for all 5 of the Tesseract buildings.': '[8x15]解锁超立方建筑的自动购买。',
    '[8x16] +0.1% Rune Effectiveness / level. Does this even do anything at this point?': '[8x16]每级使符文效果增加0.1%。都这个时候了，这还有什么用吗？',
    '[8x17] Each purchased level of Mortuus Est also increases Ascension Cube reward by +': '[8x17]每级死神蚁增加飞升的方盒奖励数量',
    '[8x18] +1% Ant Sacrifice Reward per level. Singularity HYPE.': '[8x18]每级增加1%献祭奖励。奇点促销。',
    '[8x19] Increases both Spirit AND Blessing power by 2% per level.': '[8x19]每级使魂灵能量和祝福能量都增加2%。',
    '[8x20] Gain +1 export Quark per level, and increases the max timer to redeem quarks by 12.5 hours each!': '[8x20]每级使每小时导出奖励增加1夸克，并且使导出奖励的时间上限增加12.5小时！',
    '[8x21] +0.3% faster ticks / level, because you just can\'t wait to become the singularity.': '[8x21]每级使所有速度加快0.3%，因为您已经迫不及待要成为奇点了。',
    '[8x22] +0.6% cubes in Ascension Bank / level. No one knows how. Bank error perhaps.': '[8x22]每级增加飞升库中0.6%的惊奇方盒数量。没人知道发生了什么。或许是银行内部故障。',
    '[8x23] +0.06% tributes from cubes / level!. Wow! Cubes really has a lot of manufacturing errors in your favor.': '[8x23]每级使惊奇方盒的贡品获取数量增加0.06%！惊奇方盒真的有很多对您有利的制造错误。',
    '[8x24] +10% faster Tesseract Buildings / level. THE ARISEN. WITH THE PRAISE OF THE SINGULARITY.': '[8x24]每级使超立方建筑的产量增加10%。它觉醒了。赞美奇点。',
    '[8x25] Gain the power of a thousand suns! +0.01% Accelerators, A. Boosts, Multipliers, Offerings, and +0.004% Cubes, +0.04 Max Rune level, + Floor(level/400) max Talisman Level, +Floor(level/200) free ants.': '[8x25]获得烈日千阳的力量！每级使加速器、加速器加成、加倍器、祭品获取数量增加0.01%，方盒获取数量增加0.004%，符文等级上限增加0.04，另外，护身符等级上限增加 此研究等级/400，数字向下取整，免费蚂蚁等级增加 此研究等级/200，数字向下取整。',
    'Hover over the grid to get details about researches!': '将鼠标停在网格上可获得有关研究的详情！',
    '[LOCKED - Buy Research 3x11]': '[未解锁 - 请先购买研究3x11]',
    'Welcome to the future! Obtainium is gained through': '欢迎来到研究！难得素可以通过',
    ' Reincarnations': '转世',
    '. I\'d recommend studying the': '获得。我个人建议优先研究',
    'green-bordered': '绿色边框',
    ' researches first. The': '的升级。',
    'red-bordered': '红色边框',
    ' researches are never reset whereas the': '的升级不会被重置，',
    'white-bordered': '白色边框',
    ' researches will reset upon the next reset tier!': '的升级在下一阶重置时将被重置！',
    //研究结束

    //蚂蚁
    'The ants welcome you to their home.': '蚂蚁们欢迎您来到它们的家',
    'Hover over the icons for description. Click icons to buy!': '鼠标停在图标上可获取信息。点击图标来购买！',
    'Gain a worker ant for your everyday life. Gathers Galactic Crumbs. Essential!': '获得一只工蚁为您每日工作。它会采集银河碎屑。它很有用！',
    'Gain a breeder ant that produces worker ants automatically!': '获得一只繁殖蚁，它会自动产生工蚁！',
    'Gain a meta-breeder ant that produces breeder ants automatically!': '获得一只高级繁殖蚁，它会自动产生繁殖蚁！',
    'Gain a mega-breeder ant that produces meta-breeder ants automatically!': '获得一只超级繁殖蚁，它会自动产生高级繁殖蚁！',
    'Gain a Queen ant that produces mega-breeder ants automatically!': '获得一只蚁后，它会自动产生超级繁殖蚁！',
    'Gain a Lord Royal ant that produces Queen ants automatically!': '获得一只国王蚁，它会自动产生蚁后！',
    'Gain an ALMIGHTY ANT that produces Lord Royal ants automatically!': '获得一只全能蚁，它会自动产生国王蚁！',
    'Gain a DISCIPLE OF ANT GOD that produces ALMIGHTY ANTS automatically!': '获得一只神使蚁，它会自动产生全能蚁！',
    'Promotes romance and unity within the colony. [+12% Ant Speed / level]': '促进群落的爱意和团结。[每级增加12%蚂蚁速度]',
    'Sweetens crumbs to increase their value [Each level increases Crumb --> Coin Conversion efficiency, up to ^50,000,000]': '使碎屑变得更美味以增加它们的价值[每级增加碎屑对金币产量的加成效率，最大为^50000000]',
    'Swarms the Taxman into submission [Up to -99% taxes!]': '迫使税务人员屈服[最高可以减少99%税收！]',
    'Scares you into running faster [up to x20]': '恐惧使您跑得更快[最高为20倍]',
    'Imitates your body through magic shape-shifting powers [up to x40]': '通过神奇的变形效果模仿您的行动[最高为40倍]',
    'Tries to please Ant God... but fails [Additional Offerings!]': '尝试取悦蚁神……但很遗憾地失败了[获得额外祭品！]',
    'Helps you build a few things here and there [+3% Building Cost Delay / level, Cap 9,999,999%]': '帮助您到处建造一些东西[每级使建筑成本减缓3%，最高为9999999%]',
    'Knows how to salt and pepper food [Up to 1,000x Rune EXP!]': '懂得如何给食物加盐和胡椒[最高为1000倍符文经验！]',
    'Can make your message to Ant God a little more clear [+1 all Rune Levels / level, Cap 10 Million]': '使您的信息更容易传达给蚁神[每级使所有符文增加1级，最高为10000000级]',
    'Has big brain energy [Additional Obtainium!]': '有一个超级强大的大脑[获得额外难得素！]',
    'A valuable offering to the Ant God [Gain up to 3x Sacrifice Rewards!]': '献给蚁神的贵重祭品[最高可以获得3倍献祭奖励！]',
    'Betray Ant God increasing the fragility of your dimension [Unlocks ant talisman, Up to 2x faster timers on most things]': '背叛蚁神将使您的维度更加脆弱[解锁蚂蚁护身符，全局速度最高为2倍]',
    'Buy Max: ON': '购买最大数量：开',
    'Buy Max: OFF': '购买最大数量：关',
    'Auto Sacrifice: ON': '自动献祭：开',
    'Auto Sacrifice: OFF': '自动献祭：关',
    'Mode: In-game time': '模式：游戏时间',
    'Mode: Real time': '模式：现实时间',
    'Your Ant ELO is': '蚂蚁强度分为',
    'Upgrade Multiplier': '升级倍率',
    'Time Multiplier': '时间倍率',
    'Reset Anthill features for': '重置蚁丘可获得(下方 分 指强度分)',
    'This resets your Crumbs, Ants and Ant Upgrades in exchange for some multiplier and resources. Continue?': '这么做将重置银河碎屑，蚂蚁以及蚂蚁升级，但可以获得更高的倍率和一些其他资源。您确定要继续吗？',
    //蚂蚁结束

    //惊奇方盒
    'Cube Tributes': '方盒的贡品',
    'Tesseract Gifts': '超立方的赠礼',
    'Hypercube Benedictions': '五阶立方的恩赐',
    'Platonic Statues': 'PLATONIC的塑像',
    'Cube Upgrades': '方盒升级',
    'Challenge 15/Platonic Upgrades': '挑战15/PLATONIC方盒升级',
    'Hepteract Forge': '七阶立方的锻炉',
    '=- Time Until Daily Refill -=-': '=- 直到每日重置的时间 -=-',
    'Quarks gained from Cubes': '从方盒获取的夸克数量',
    'Open': '开启',
    ' cubes for next quark.': '个方盒后可获取下一个夸克。',
    'Cubes opened today': '今日开启方盒数量',
    'Quarks gained from Tesseracts': '从超立方获取的夸克数量',
    ' tesseracts for next quark.': '个超立方后可获取下一个夸克。',
    'Tesseracts opened today': '今日开启超立方数量',
    'Quarks gained from Hypercubes': '从五阶立方获取的夸克数量',
    ' hypercubes for next quark.': '个五阶立方后可获取下一个夸克。',
    'Hypercubes opened today': '今日开启五阶立方数量',
    'Quarks gained from Platonics': '从PLATONIC方盒获取的夸克数量',
    ' platonic cubes for next quark.': '个PLATONIC方盒后可获取下一个夸克。',
    'Platonic Cubes opened today': '今日开启PLATONIC方盒数量',
    'You feel a sense of Pride and Accomplishment... and a hunger for power.': '您感到了自豪和成就感……还有对力量的渴求。',
    'Open up some Lootb-- er, Wow! Cubes, to get one of ten permanent bonuses.': '开启一些盲——呃，我是说惊奇方盒，来获取十种永久加成中的一种。',
    'You can also spend them on upgrades that persist through Ascension.': '您也可以将它们用来购买升级，这些升级不会因为飞升而重置。',
    'You possess': '您拥有 ',
    ' Wow! Cubes. Get more from harder Ascensions and other stuff.': '惊奇方盒。您可以通过更高难度的飞升或者其他途径获取更多。',
    'Open x1,': '开启 x1',
    'Custom Amount': '自定数量',
    'Open All': '开启全部',
    'Hermes\' Tribute': '赫尔墨斯的贡品',
    'Aphrodite\'s Tribute': '阿佛洛狄忒的贡品',
    'Plutus\' Tribute': '普路托斯的贡品',
    'Iris\' Tribute': '伊丽丝的贡品',
    'Athena\'s Tribute': '雅典娜的贡品',
    'Artemis\' Tribute': '阿尔忒弥斯的贡品',
    'Ares\' Tribute': '阿瑞斯的贡品',
    'Moloch\'s Tribute': '摩洛克的贡品',
    'Midas\' Tribute': '米达斯的贡品',
    'Chronos\' Tribute': '柯罗诺斯的贡品',
    ' Accelerators per Accelerator Boost': '每个加速器加成提供的加速器数',
    ' Multipliers': '加倍器数量',
    ' Offering Gain': '祭品获取数量',
    ' Rune': '符文',
    ' Obtainium Gain': '难得素获取数量',
    ' Ant Speed': '蚂蚁速度',
    ' Sacrifice Reward': '献祭奖励',
    ' Effective ELO': '有效强度分',
    ' Bonus Rune Levels on Talismans': '每级护身符的额外符文等级',
    ' Global Time Acceleration': '全局时间加速',
    'You have a total of': '您一共有',
    ' Cube tributes!': '方盒的贡品！',
    'You obtain guidance from beings in another dimension!': '您从另一个维度的生物那边获得了指引！',
    'Open up some Lootb-- er, Wow! Tesseracts, to boost tributes from the previous tier.': '开启一些秘——呃，我是说惊奇超立方，来加成上一阶的贡品。',
    ' Wow! TESSERACTS. Get more from harder Ascensions and other stuff.': '惊奇超立方。您可以通过更高难度的飞升或者其他途径获取更多。',
    'Hermes\' Gift': '赫尔墨斯的赠礼',
    'Aphrodite\'s Gift': '阿佛洛狄忒的赠礼',
    'Plutus\' Gift': '普路托斯的赠礼',
    'Iris\' Gift': '伊丽丝的赠礼',
    'Athena\'s Gift': '雅典娜的赠礼',
    'Artemis\' Gift': '阿尔忒弥斯的赠礼',
    'Ares\' Gift': '阿瑞斯的赠礼',
    'Moloch\'s Gift': '摩洛克的赠礼',
    'Midas\' Gift': '米达斯的赠礼',
    'Chronos\' Gift': '柯罗诺斯的赠礼',
    ' Hermes\' Tribute power': '赫尔墨斯的贡品效果',
    ' Aphrodite\'s Tribute power': '阿佛洛狄忒的贡品效果',
    ' Plutus\' Tribute power': '普路托斯的贡品效果',
    ' Iris\' Tribute power': '伊丽丝的贡品效果',
    ' Athena\'s Tribute power': '雅典娜的贡品效果',
    ' Artemis\' Tribute power': '阿尔忒弥斯的贡品效果',
    ' Ares\' Tribute power': '阿瑞斯的贡品效果',
    ' Moloch\'s Tribute power': '摩洛克的贡品效果',
    ' Midas\' Tribute power': '米达斯的贡品效果',
    ' Chronos\' Tribute power': '柯罗诺斯的贡品效果',
    ' Tesseract gifts!': '超立方的赠礼！',
    'I didn\'t know that Wow! enterprises made 5-Dimensional Objects.': '我之前可不知道惊奇公司居然有五维的产品。',
    'Open up some Lootb-- er, Wow! Hypercubes, to boost blessings from the previous tier.': '开启一些嫩牛五——呃，我是说惊奇五阶立方，来加成上一阶的赠礼。',
    ' Wow! HYPERCUBES. Get more from harder Ascensions and other stuff.': '惊奇五阶立方。您可以通过更高难度的飞升或者其他途径获取更多。',
    'Hermes\' Benediction': '赫尔墨斯的恩赐',
    'Aphrodite\'s Benediction': '阿佛洛狄忒的恩赐',
    'Plutus\' Benediction': '普路托斯的恩赐',
    'Iris\' Benediction': '伊丽丝的恩赐',
    'Athena\'s Benediction': '雅典娜的恩赐',
    'Artemis\' Benediction': '阿尔忒弥斯的恩赐',
    'Ares\' Benediction': '阿瑞斯的恩赐',
    'Moloch\'s Benediction': '摩洛克的恩赐',
    'Midas\' Benediction': '米达斯的恩赐',
    'Chronos\' Benediction': '柯罗诺斯的恩赐',
    ' Hermes Gift power': '赫尔墨斯的赠礼效果',
    ' Aphrodite Gift power': '阿佛洛狄忒的赠礼效果',
    ' Plutus Gift power': '普路托斯的赠礼效果',
    ' Iris Gift power': '伊丽丝的赠礼效果',
    ' Athena Gift power': '雅典娜的赠礼效果',
    ' Artemis Gift power': '阿尔忒弥斯的赠礼效果',
    ' Ares Gift power': '阿瑞斯的赠礼效果',
    ' Moloch Gift power': '摩洛克的赠礼效果',
    ' Midas Gift power': '米达斯的赠礼效果',
    ' Chronos Gift power': '柯罗诺斯的赠礼效果',
    'Hypercube benedictions!': '五阶立方的恩赐！',
    'This seems very familiar.': '这看上去总感觉……很眼熟。',
    'Open up some Lootb-- er, Platonic! Cubes, for epic perks!.': '开启一些作者方——呃，我是说PLATONIC方盒，来获得一些强大的特权！',
    ' Platonic! Cubes. Get more from really hard ascensions.': 'PLATONIC方盒。您可以通过超高难度的飞升获取更多。',
    'Open x40,': '开启 x40',
    'Open x1 Million': '开启 x1000000',
    'Cube Shard': '方盒碎片',
    'Tesseract Shard': '超立方碎片',
    'Hypercube Shard': '五阶立方碎片',
    'Platonic Remnant': 'PLATONIC遗物',
    'Hypercube Statue': '五阶立方塑像',
    'Keynesian Statue': '凯恩斯塑像',
    'High-Scoring Statue': '高分塑像',
    'Chronos Statue': '柯罗诺斯塑像',
    ' Bonus Wow! Cubes': '额外数量于获取惊奇方盒',
    ' Bonus Wow!': '额外数量于获取惊奇',
    ' Bonus Wow! Hypercubes': '额外数量于获取惊奇五阶立方',
    ' Bonus Platonic! Cubes': '额外数量于获取PLATONIC方盒',
    ' ALL Hypercube bonuses': '惊奇五阶立方的加成数值',
    ' Bonus Constant exponent on taxes': '数学常数减缓税收的指数的加成数值',
    ' More Score on corruptions': '腐化时的飞升分数',
    ' Global Speed (Unaffected by corruption / diminishing returns!': '全局速度(不受腐化影响/效果逐渐衰减！',
    ' Platonic Cubes opened!': 'PLATONIC方盒已开启！',
    'Wow! I want more Cubes.': '真惊奇！我想要更多方盒。',
    'Wow! I want passive Offering gain too.': '真惊奇！我也想被动获得祭品。',
    'Wow! I want better passive Obtainium': '真惊奇！我想更好地被动获得难得素',
    'Wow! I want to keep mythos building autobuyers.': '真惊奇！我想要保留神话建筑自动购买。',
    'Wow! I want to keep mythos upgrade autobuyer.': '真惊奇！我想要保留神话升级自动购买。',
    'Wow! I want to keep auto mythos gain.': '真惊奇！我还想保留自动获得神话。',
    'Wow! I want the particle building automators.': '真惊奇！我想获得粒子建筑自动购买。',
    'Wow! I want to automate Particle Upgrades.': '真惊奇！我想要自动升级粒子升级。',
    'Wow! I want to automate researches better dangit.': '真惊奇！我想要自动研究变得更好。',
    'Wow! This is pretty good but expensive.': '真惊奇！这很棒，但是好贵。',
    'Wow! I want more cubes 2.': '真惊奇！我想要更多方盒2。',
    'Wow! I want building power to be useful 1.': '真惊奇！我想让建筑能量更有用1。',
    'Wow! I want opened cubes to give more tributes 1.': '真惊奇！我想让方盒给予更多贡品1。',
    'Wow! I want Iris Tribute bonuses to scale better 1.': '真惊奇！我想让伊丽丝的贡品加成更高1。',
    'Wow! I want Ares Tribute bonuses to scale better 1.': '真惊奇！我想让阿瑞斯的贡品加成更高1。',
    'Wow! I want more rune levels 1.': '真惊奇！我想要更多的符文等级1。',
    'Wow! I want just a little bit more crystal power.': '真惊奇！我想要更多一点的水晶效果。',
    'Wow! I want to accelerate time!': '真惊奇！我想要加速时间！',
    'Wow! I want to unlock a couple more coin upgrades.': '真惊奇！我想解锁更多的金币升级。',
    'Wow! I want to improve automatic rune tools.': '真惊奇！我想要自动符文变得更好。',
    'Wow! I want more cubes 3.': '真惊奇！我想要更多方盒3。',
    'Wow! I wish my Artemis was a little better': '真惊奇！我希望阿尔忒弥斯能更好一点',
    'Wow! I want opened cubes to give more tributes 2.': '真惊奇！我想让方盒给予更多贡品2。',
    'Wow! I want Plutus Tribute bonuses to scale better': '真惊奇！我想让普路托斯的贡品加成更高',
    'Wow! I want Moloch Tribute bonuses to scale better': '真惊奇！我想让摩洛克的贡品加成更高',
    'Wow! I want to start Ascensions with rune levels.': '真惊奇！我想要在飞升后就有符文等级。',
    'Wow! I want to start Ascensions with one of each reincarnation building.': '真惊奇！我想要在飞升后就有各一个粒子建筑。',
    'Wow! I want to finally render Reincarnating obsolete.': '真惊奇！我想让转世从此过时。',
    'Wow! I want to increase maximum Reincarnation Challenge completions.': '真惊奇！我想要增加转世挑战的完成次数上限。',
    'Wow! I want to arbitrarily increase my cube and tesseract gain.': '真惊奇！我想要随意增加方盒和超立方的获取数量。',
    'Wow! I want more cubes 4.': '真惊奇！我想要更多方盒4。',
    'Wow! I want runes to be easier to level up over time.': '真惊奇！我想要符文随着时间推移更容易升级。',
    'Wow! I want opened cubes to give more tributes 3.': '真惊奇！我想让方盒给予更多贡品3。',
    'Wow! I want Chronos Tribute bonuses to scale better': '真惊奇！我想让柯罗诺斯的贡品加成更高',
    'Wow! I want Aphrodite Tribute bonuses to scale better': '真惊奇！我想让阿佛洛狄忒的贡品加成更高',
    'Wow! I want building power to be useful 2.': '真惊奇！我想让建筑能量更有用2。',
    'Wow! I want more rune levels 2.': '真惊奇！我想要更多的符文等级2。',
    'Wow! I want more tesseracts while corrupted!': '真惊奇！我想要在腐化时获得更多超立方！',
    'Wow! I want more score from challenge 10 completions.': '真惊奇！我想要让完成挑战10给予的分数更高。',
    'Wow! I want Athena Tribute bonuses to scale better 1.': '真惊奇！我想让雅典娜的贡品加成更高1。',
    'Wow! I want more cubes 5.': '真惊奇！我想要更多方盒5。',
    'Wow! I want some Uncorruptable Obtainium.': '真惊奇！我想要一些无法腐化的难得素。',
    'Wow! I want even more Uncorruptable Obtainium!': '真惊奇！我还想要一些无法腐化的难得素！',
    'Wow! I want Midas Tribute bonus to scale better 1.': '真惊奇！我想让米达斯的贡品加成更高1。',
    'Wow! I want Hermes Tribute bonus to scale better 1.': '真惊奇！我想让赫尔墨斯的贡品加成更高1。',
    'Wow! I want even MORE offerings!': '真惊奇！我想要更多更多的祭品！',
    'Wow! I want even MORE obtainium!': '真惊奇！我想要更多更多的难得素！',
    'Wow! I want to start ascension with an ant.': '真惊奇！我想要在飞升后就有一只蚂蚁。',
    'Wow! I want to start ascension with a challenge 6-8 completion.': '真惊奇！我想要在飞升后就已经各完成了挑战6至挑战8一次。',
    'Wow! I want to be enlightened by the power of a thousand suns.': '真惊奇！我想要获得静月千阴的启迪。',
    '[1x1] You got it! +14% cubes from Ascending per level.': '[1x1]好！每级增加飞升时方盒14%获取数量。',
    '[1x2] Plutus grants you +1 Offering per second, no matter what, per level. Also a +0.5% Recycling chance!': '[1x2]普路托斯使您每级每秒多获得一个祭品。另外祭品回收概率每级增加0.5%！',
    '[1x3] Athena grants you +10% more Obtainium, and +80% Auto Obtainium per level.': '[1x3]雅典娜使您每级多获得10%难得素和80%自动难得素。',
    '[1x4] You keep those 5 useful automation upgrades in the upgrades tab!': '[1x4]您可以保留升级选项卡下5个有用的自动化升级！',
    '[1x5] You keep the mythos upgrade automation upgrade in the upgrades tab!': '[1x5]您可以保留升级选项卡下的自动购买神话升级！',
    '[1x6] You keep the automatic mythos gain upgrade in the upgrades tab!': '[1x6]您可以保留升级选项卡下的自动获得神话升级！',
    '[1x7] Automatically buy each Particle Building whenever possible.': '[1x7]自动购买每个粒子建筑。',
    '[1x8] Automatically buy Particle Upgrades.': '[1x8]自动购买粒子升级。',
    '[1x9] The research automator in shop now automatically buys cheapest when enabled. It\'s like a roomba kinda!': '[1x9]商店中出售的自动研究现在会自动购买最便宜的升级了。就像扫地机器人一样！',
    '[1x10] Unlock some tools to automate Ascensions or whatever. Kinda expensive but cool.': '[1x10]解锁自动飞升。很贵，也很酷。',
    '[2x1] You got it again! +7% cubes from Ascending per level.': '[2x1]好好！每级增加飞升时方盒7%获取数量。',
    '[2x2] Raise building power to the power of (1 + level * 0.09).': '[2x2]将建筑能量变为(1+等级*0.09)次方。',
    '[2x3] For each 20 cubes opened at once, you get 1 additional tribute at random.': '[2x3]每开启20个方盒，就额外获得1个随机贡品。',
    '[2x4] Iris shines her light on you. The effect power is now increased by +0.01 (+0.005 if >1000 tributes) per level.': '[2x4]伊丽丝照亮了您。每级使效果的指数增加0.01(如果超过1000贡品则改为增加0.005)。',
    '[2x5] Ares teaches you the art of war. The effect power is now increased by +0.01 (+0.0033 if >1000 tributes) per level.': '[2x5]阿瑞斯教导了您兵法韬略。每级使效果的指数增加0.01(如果超过1000贡品则改为增加0.0033)。',
    '[2x6] You got it buster! +20 ALL max rune levels per level.': '[2x6]说对了，小鬼！每级使符文等级上限增加20。',
    '[2x7] Yep. +5 Exponent per level to crystals.': '[2x7]是的。每级使水晶的指数增加5。',
    '[2x8] Quantum tunnelling ftw. +20% global game speed.': '[2x8]量子隧穿棒棒哒。全局游戏速度增加20%。',
    '[2x9] Unlocks new coin upgrades ranging from start of ascend to post c10 and beyond.': '[2x9]解锁新的金币升级。',
    '[2x10] The rune automator in shop now spends all offerings automatically, \'splitting\' them into each of the 5 runes equally.': '[2x10]商店中出售的自动符文现在会自动献祭所有祭品了，祭品将平均分配给所有5个符文。',
    '[3x1] You got it once more! +7% cubes from Ascending per level.': '[3x1]好好好！每级增加飞升时方盒7%获取数量。',
    '[3x2] The exponent of the bonus of Artemis is increased by 0.05 per level.': '[3x2]每级使阿尔忒弥斯的加成指数增加0.05。',
    '[3x3] For each 20 cubes opened at once, you get 1 additional tribute at random.': '[3x3]每开启20个方盒，就额外获得1个随机贡品。',
    '[3x4] Plutus teaches you the Art of the Deal. The effect power is now increased by +0.01 (+0.0033 if >1000 tributes) per level.': '[3x4]普路托斯教导了您生意经。每级使效果的指数增加0.01(如果超过1000贡品则改为增加0.0033)。',
    '[3x5] Moloch lends you a hand in communicating with Ant God. The effect power is now increased by +0.01 (+0.0033 if >1000 tributes) per level.': '[3x5]摩洛克帮助您更好地与蚁神沟通。每级使效果的指数增加0.01(如果超过1000贡品则改为增加0.0033)。',
    '[3x6] Start ascensions with 3 additional rune levels [Does not decrease EXP requirement] per level.': '[3x6]每级使您飞升后直接获得3级符文[不减少经验值需求]。',
    '[3x7] Upon an ascension, you will start with 1 of each reincarnation building to speed up Ascensions.': '[3x7]飞升后，您直接获得各一个粒子建筑。',
    '[3x8] Well, I think you got it? Gain +1% of particles on Reincarnation per second.': '[3x8]嗯，如您所愿？每秒获得粒子，数量为转世的粒子每秒产量的1%。',
    '[3x9] Add +5 to Reincarnation Challenge cap per level. Completions after 25 scale faster in requirement!': '[3x9]每级增加5次转世挑战次数上限。超过25次以后，挑战的目标将大幅上升！',
    '[3x10] You now get +25% Cubes and Tesseracts forever!': '[3x10]从现在起，您永久多获得25%的方盒和超立方体！',
    '[4x1] You again? +7% cubes from Ascending per level.': '[4x1]又是你啊？每级增加飞升时方盒7%获取数量。',
    '[4x2] Gain +0.1% Rune EXP per second you have spent in an Ascension. This has no cap!': '[4x2]本次飞升每经过一秒，符文经验值获取数量就增加0.1%。此效果没有上限！',
    '[4x3] For each 20 cubes opened at once, you get yet another additional tribute at random.': '[4x3]每开启20个方盒，就再次额外获得1个随机贡品。',
    '[4x4] Chronos overclocks the universe for your personal benefit. (Rewards the same as others': '[4x4]柯罗诺斯将宇宙加速以使您受益。(与其他的奖励相同',
    '[4x5] Aphrodite increases the fertility of your coins. (Rewards the same as others': '[4x5]阿佛洛狄忒让您的金币更能生。(与其他的奖励相同',
    '[4x6] Raise building power to (1 + 0.05 * Level) once more.': '[4x6]再次将建筑能量变为(1+等级*0.05)次方。',
    '[4x7] Adds +20 to ALL rune caps again per level.': '[4x7]每级使符文等级上限再次增加20。',
    '[4x8] Gain +0.5% more tesseracts on ascension for each additional level in a corruption you enable.': '[4x8]每激活一级腐化，飞升的超立方获取数量就多0.5%。',
    '[4x9] Instead of the multiplier being 1.03^(C10 completions), it is now 1.035^(C10 completions)!': '[4x9]分数倍率从1.03^(挑战10完成次数)变为1.035^(挑战10完成次数)！',
    '[4x10] Athena is very smart (Rewards the same as others).': '[4x10]雅典娜非常睿智(与其他的奖励相同)。',
    '[5x1] Yeah yeah yeah, +7% cubes from Ascending per level. Isn\'t it enough?': '[5x1]好好，每级增加飞升时方盒7%获取数量。够了吗？',
    '[5x2] You now gain +4% Obtainium per level, which is not dependent on corruptions!': '[5x2]您每级多获取4%难得素，此效果不受腐化影响！',
    '[5x3] Gain another +3% corruption-independent Obtainium per level.': '[5x3]每级再多获取3%难得素，此效果不受腐化影响。',
    '[5x4] Blah blah blah Midas works harder (same rewards as before': '[5x4]米达斯努力工作等等(与其他的奖励相同',
    '[5x5] Blah blah blah Hermes works harder (same rewards as before': '[5x5]赫尔墨斯努力工作等等(与其他的奖励相同',
    '[5x6] Gain +5% more offerings per level!': '[5x6]每级多获得5%祭品！',
    '[5x7] Gain +10% more obtainium per level!': '[5x7]每级多获得10%难得素！',
    '[5x8] When you ascend, start with 1 worker ant (this is a lot better than it sounds!': '[5x8]飞升后直接获得一只工蚁(比听起来要强多了！',
    '[5x9] When you ascend, gain 1 of each challenge 6-8 completion.': '[5x9]飞升后直接完成挑战6至挑战8各一次。',
    '[5x10] What doesn\'t this boost? +0.01% Accelerators, Multipliers, Accelerator Boosts, +0.02% Obtainium, +0.02% Offerings, +0.1 Max Rune Levels, +1 Effective ELO, +0.001 Talisman bonuses per level.': '[5x10]它无所不包。每级使加速器、加倍器、加速器加成数量增加0.01%，难得素和祭品获取数量增加0.02%，符文等级上限增加0.1，有效强度分增加1，护身符的每级符文等级加成增加0.001。',
    'Wow! Hover over the upgrades you want to look at!': '真惊奇！鼠标停在您想要的升级上可以看到详情！',
    'Upgrade: 1 Level wow': '升级：1级(惊奇)',
    'Upgrade: MAX [if possible wow]': '升级：最大[尽可能(惊奇)]',
    'Best Challenge 15 Exponent': '挑战15最高达到的指数',
    'Gain': '达到',
    ' Coin Exponent in Challenge 15 to gain more score!': '金币指数于挑战15中以获得更多奖励！',
    '% [Uncorruptable!]': '%[不受腐化影响！]',
    '% [Additive]': '%[相互叠加]',
    'Unlocked!': '已解锁！',
    '1. All Cube Types I: +': '1. 所有类型的方盒及立方产量I：+',
    '2. Ascension Count: +': '2. 飞升次数：+',
    '3. Coin Exponent: +': '3. 金币产量加成指数：+',
    '4. Taxes': '4. 税收',
    '5. Obtainium: +': '5. 难得素：+',
    '6. Offerings: +': '6. 祭品：+',
    '7. Accelerators: +': '7. 加速器：+',
    '8. Multipliers: +': '8. 加倍器：+',
    '9. Rune EXP: +': '9. 符文经验值：+',
    '10. Rune Effectiveness: +': '10. 符文效果：+',
    '11. All Cube Types II: +': '11. 所有类型的方盒及立方产量II：+',
    '12. Challenge 1-5 Requirement Scaling': '12. 挑战1-5目标数值',
    '13. Challenge 6-10 Requirement Scaling': '13. 挑战6-10目标数值',
    '14. Ant Speed: +': '14. 蚂蚁速度：+',
    '15. Bonus Ant Levels: +': '15. 蚂蚁额外等级：+',
    '16. All Cube Types III: +': '16. 所有类型的方盒及立方产量III：+',
    '17. Talisman Effectiveness: +': '17. 护身符效果：+',
    '18. Global Speed: +': '18. 全局速度：+',
    '19. Blessing Effectiveness: +': '19. 祝福效果：+',
    '20. Ascend Building Production: +': '20. 超立方建筑产量：+',
    '21. All Cube Types IV: +': '21. 所有类型的方盒及立方产量IV：+',
    '22. Spirit Effectiveness: +': '22. 魂灵效果：+',
    '23. Ascension Score: +': '23. 飞升分数：+',
    '24. Quarks: +': '24. 夸克获取数量：+',
    '25. Hepteracts': '25. 惊奇七阶立方',
    '26. Challenge Hepteract': '26. 惊奇七阶立方·挑战',
    '27. All Cube Types V: +': '27. 所有类型的方盒及立方产量V：+',
    '28. Powder Conversion: +': '28. 超通量粉转化效率：+',
    '29. Abyss Hepteract': '29. 惊奇七阶立方·深渊',
    '30. Constant Upgrade 2: +': '30. 数学常数升级2效果：+',
    '31. Accelerator Hepteract': '31. 惊奇七阶立方·加速器',
    '32. Accelerator Boost Hepteract': '32. 惊奇七阶立方·加速器加成',
    '33. Multiplier Hepteract': '33. 惊奇七阶立方·加倍器',
    '===Upgrade Description===': '===升级效果===',
    'Click an icon for info!': '点击图标以查看信息！',
    '0.0075% cubes per corruption level per level!': '0.0075%飞升时方盒获取数量于每腐化等级每级此升级！',
    '0.015% tesseracts per corruption level per level!': '0.015%飞升时超立方获取数量于每腐化等级每级此升级！',
    '0.045% hypercubes per corruption level per level!': '0.045%飞升时五阶立方获取数量于每腐化等级每级此升级！',
    'Gain +2% Platonic Cubes per level! It is that simple.': '每级此升级增加2%的PLATONIC方盒获取数量！简单明了。',
    'C10 Exponent: 1.035 --> 1.0375, Constant tax exponent +0.10, 2x faster constant production, +5/+3 Challenge caps, 2x Obtainium/Offerings, ^1.10 coin gain in C15!': 'C10的分数倍率的指数从1.035变为变为1.0375，数学常数减缓税收的指数增加0.1，数学常数产量变为2倍，挑战上限次数分别增加5和3，难得素和祭品获取数量翻倍，在挑战15中金币产量变为金币产量^1.10！',
    'Raises corruption 1 and 2 exponent ^(1 + level/30), capacity of ^1 on Mult/Accel.': '将腐化 I和腐化 II的效果指数乘以(1+此升级等级/30)，但效果指数不能超过1。',
    'Raises speed below 1x to the power of ^(1 - level/30).': '全局速度低于1倍时，将速度变为速度的(1-(此升级等级/30))次方。',
    'Divides Hyperchallenged by (1 + 0.4 * level), with a minimum 1x challenge req. multiplier!': '将腐化：极致挑战的效果指数除以(1+0.4*此升级等级)，但效果指数不能低于1！',
    'Raise Obtainium to the power of (1+(0.09*log10(Obt owned))) and add another x2.5 multiplier (uncorruptable), up until 1e100 Obtainium!': '难得素获取数量变为原来的(1+(0.09*log10(难得素当前数量)))次方，并且使难得素获取数量变为2.5倍(不受腐化影响)，最高到1e100难得素！',
    'C10 Exponent: 1.0375 --> 1.04, Const. tax exponent +0.20 and 10x faster constant production, +5/+3 Challenge caps, 3.5x Obtainium and Offerings, 2x All Cubes. ^1.25 ant exponent in C15!': 'C10的分数倍率的指数从1.0375变为1.04，数学常数减缓税收的指数增加0.2，数学常数产量变为10倍，挑战上限次数分别增加5和3，难得素和祭品获取数量变为3.5倍，所有类型的方盒及立方的获取数量翻倍，在挑战15中蚂蚁产量变为蚂蚁产量^1.25！',
    'With this upgrade, you will gain diamonds equal to particle gain on reincarnation while using Market Deflation 11 or higher! Does not work with cube upgrade [3x8]!': '在11级及以上的腐化：市场通缩中，使转世时的钻石获取数量等于粒子获取数量！无法对方盒升级[3x8]生效！',
    'Gain (1 + lvl/100)x ant multiplier per challenge completion, ignoring corruptions to ants.': '每完成1次挑战，蚂蚁倍率就增加(1+此升级等级/100)倍，此效果无视腐化。',
    'Effect of Drought is raised to the power of 0.5.': '将腐化：干旱的效果变为原来的0.5次方。',
    'Reduce the effect of Financial Recession in challenge 15, multiplying the coin exponent by 1.55.': '挑战15中腐化：经济衰退的效果减少，即金币的指数乘以1.55。',
    'I suppose that, after all, we all are Everywhere at the End of Time.': '我想，在时间的尽头，我们将无处不在。',
    '===Upgrade Costs===': '===升级成本===',
    '===Affordable! Click to buy!===': '===资源充足！点击购买！===',
    '===You cannot afford this!===': '===资源不足，无法购买===',
    '===Maxed===': '===等级已达最大===',
    'How did I get here?': '我是怎么到这里的？',
    'Oh well, no time to waste. This is your lab. Make cool shit with your Hepteracts!': '好吧，没时间管那些了。这就是您的实验室。用惊奇七阶立方弄出一些有用的东西来吧！',
    'Hepteracts do not provide passive bonuses. They must be made useful through crafting.': '惊奇七阶立方没有任何被动加成。必须通过锻造才能变得有用。',
    ' Hepteracts! You know where to get these, right?': '惊奇七阶立方！您应该已经知道这些是哪来的了吧？',
    'Craft': '锻造',
    'Expand': '延展',
    'Warp': '时间跃迁',
    'How far in the future would you like to go into the future? Anything awaits when it is testing season.': '您想要跃迁到多久以后？',
    'Hey! That\'s not a valid time!': '您输入的时间……确定是有效的时间吗？',
    //惊奇方盒结束

    //腐化
    'The most rewarding ventures are those few would dare to embark.': '不入虎穴，焉得虎子。',
    'Select the trait levels you wish to run with. Choose wisely!': '选择您想要使用的腐化等级。请明智地进行选择！',
    'Don\'t bite off more than you can chew...': '切记，贪多嚼不烂……',
    'Corruption I: Divisiveness': '腐化 I：分歧',
    'Your multipliers get disintegrated! Is extra devious without also using Maladaption Corruption': '您的加倍器崩坏了！如果与适应不良等级不同，将变得更难',
    'Corruption II: Maladaption': '腐化 II：适应不良',
    'Insert Cool Text Here. Is extra devious without also using Divisiveness Corruption. Yin/Yang!': '此处可以插入有趣的文本。如果与分歧等级不同，将变得更难。这就是阴阳相生！',
    'Corruption III: Spacial Dilation': '腐化 III：空间膨胀',
    'Way to go, Albert.': '干得好，阿尔伯特。',
    'Corruption IV: Hyperchallenged': '腐化 IV：极致挑战',
    'What\'s in a challenge?': '翻译翻译，什么叫挑战？',
    'Corruption V: Scientific Illiteracy': '腐化 V：科盲',
    'Maybe Albert wouldn\'t have theorized Dilation after all.': '至少阿尔伯特不会提出膨胀理论了。',
    'Corruption VI: Market Deflation': '腐化 VI：市场通缩',
    'Diamond Mine destroyed... no more monopolies!': '钻石矿被摧毁了……没有垄断了！',
    'Corruption VII: Extinction': '腐化 VII：灭绝',
    'It killed the dinosaurs too, ya dingus.': '它连恐龙都干掉了，憨憨。',
    'Corruption VIII: Drought': '腐化 VIII：干旱',
    'More like California, am I right?': '更像加州了，对吧？',
    'Corruption IX: Financial Recession': '腐化 IX：经济衰退',
    '2008.exe has stopped working.': '2008.exe已停止工作。',
    'CLEANSE THE CORRUPTION': '清除腐化',
    'Free this world of sin.': '这个罪恶的世界解脱了。',
    'Reset all Corruptions to level 0 for your current ascension. Does not reset your current ascension.': '使当前飞升的所有腐化等级回到0级。不会重置当前的飞升。',
    'Push that big \'Reset Corruptions\' button to confirm your decision.': '按下中间的按钮来清除腐化。',
    'Note: if you need to do this, you may have bitten off more than you can chew.': '注意：如果您需要这么做的话，显然您是贪多嚼不烂了。',
    'Corruption Stats': '腐化状态',
    'Corruption Loadouts': '腐化预设',
    'Cleanse': '清除腐化',
    'Confirm': '确认清除',
    'Current': '目前',
    ' / Next': ' / 下次',
    'Next': '下次',
    'Loadout': '档',
    'Save': '存',
    'Load': '载',
    'This Ascension\'s climate raises ant production to the power of': '此飞升的气候使蚂蚁产量变为蚂蚁产量^',
    'However, it also multiplies Rune Spirit Effects by': '但它也会使符文魂灵效果乘以',
    'You have': '您有',
    ' Wow! Cubes in the Ascension bank. Gain more by finishing challenges! Ascend to redeem them.': '个惊奇方盒还存在飞升库中。完成更多挑战，以获得更多惊奇方盒！飞升后才可以获得它们。',
    'Your Ascension Score is': '您的飞升分数为',
    ' (base) *': '(基础值)*',
    ' (Corruption mult) =': '(腐化因子)=',
    'If you ascend now, you will gain': '如果现在飞升，您可以获得',
    ' Wow! Cubes.': '个惊奇方盒。',
    ' Wow! Tesseracts. [': '个惊奇超立方。[',
    'Get more if Score >100,': '可以获得更多，只要分数大于100,',
    ' Wow! Hypercubes. [': '个惊奇五阶立方。[',
    'Req Score: >1,000,000,': '需要分数大于1,000,000,',
    ' PLATONIC CUBES. [': '个PLATONIC方盒。[',
    'Req Score: >1,337,000,000,': '需要分数大于1,337,000,000,',
    ' HEPTERACTS. [': '个惊奇七阶立方。[',
    'Req Score: >': '需要分数大于',
    'Auto Ascend [ON]': '自动飞升[开]',
    'Auto Ascend [OFF]': '自动飞升[关]',
    'Mode: C10 Completions': '模式：挑战10完成数',
    'Ascend when you\'ve completed Sadistic Challenge I a total of': '完成以下次数挑战10以后飞升：',
    ' times.': '次。',
    //腐化结束

    //设置
    'Credits': '制作组',
    'Stats for Nerds': '高玩特供统计',
    'Reset History': '重置历史数据',
    'Ascend History': '飞升历史数据',
    'Hotkeys': '快捷键',
    'Confirmation Toggles': '相应重置时是否弹窗确认',
    '[ON]': '[开]',
    '[OFF]': '[关]',
    'These do not work with hotkeys. Too bad!': '这些对快捷键无效。糟透了！',
    'Copy to Clipboard': '是否将存档导出到剪贴板',
    'Export the game here': '点击此处导出游戏存档',
    'Copied save to your clipboard!': '存档已导出到剪贴板！',
    'Savefile copied to file!': '存档已导出！',
    'Load game below!': '从下方导入存档！',
    'Load from file': '从文件导入',
    'Save the game manually': '手动保存游戏',
    'Delete savefile': '删除存档',
    'Enter a promotion code here!': '点击此处输入奖励代码！',
    'It\'s Spaghetti Time! [Awarded an achievement!!!]': '意面时间！[获得一个成就！！！]',
    'Hey, isn\'t this just a reference to Antimatter Dimensions? Shh. [Awarded an achievement!!!]': '这不是玩的反物质维度的梗吗？切。[获得一个成就！！！]',
    'You already used this promocode in the last hour!': '距离上次使用此奖励代码未超过1小时！',
    'Your code is either invalid or already used. Try again!': '奖励代码输入错误，或者已经使用过。请再次尝试！',
    'Submit your stats to Kongregate!': '将数据上传至Kongregate！',
    'You\'re playing v2.5.0 - Seal of the Merchant [Last Update: 8:22PM UTC-8 18-Jun-2021].': '您目前玩的版本为V2.5.0 - 商人的印记 [2021年6月18日 西八区 下午8:22更新]。',
    'Event Status': '活动状态',
    'INACTIVE': '暂无活动',
    '2x Global Speed, 3x Offerings, 2.021x All Cube Gain, Triple Export Quark Gain and Caps!': '全局速度变为2倍，祭品获取数量变为3倍，所有类型的方盒及立方的获取数量变为2.021倍，导出夸克的获取速度和上限变为3倍！',
    'Game saved successfully!': '游戏已保存！',
    'Coders': '码农',
    'Artists': '画师',
    'Miscellaneous Stats': '统计数据',
    'Prestige Count': '转生次数',
    'Fastest Prestige': '最快转生时间',
    'Most Offerings Saved at Once': '最大持有的祭品数量',
    'Summative Rune Levels': '符文总等级',
    'Transcension Count': '超越次数',
    'Fastest Transcension': '最快超越时间',
    'Reincarnation Count': '转世次数',
    'Fastest Reincarnation': '最快转世时间',
    'Most Obtainium Saved at Once': '最大持有的难得素数量',
    'Best Obtainium/sec': '最佳难得素/秒',
    'Current Obtainium/sec': '当前难得素/秒',
    'Ascension Count': '飞升次数',
    'Free Accelerators': '免费加速器',
    'Accelerators from Upgrades/Misc': '来自升级和杂项的加速器',
    'Accelerators from Boosts': '来自加速器加成的加速器',
    'Accelerators from Speed Rune': '来自加速符文的加速器',
    'Speed Rune Multiplier': '加速符文倍率',
    'Achievement Multiplier': '成就倍率',
    'Research [1x1] Multiplier': '研究[1x1]倍率',
    'Research [1x6]-[1x10] Multiplier': '研究[1x6]-[1x10]倍率',
    'Research [4x11] Multiplier': '研究[4x11]倍率',
    'Challenge Multiplier': '挑战倍率',
    'Corruption Exponent': '腐化指数',
    'TOTAL FREE ACCELERATORS': '免费加速器总和',
    'Free Multipliers': '免费加倍器',
    'Multipliers from upgrades/misc': '来自升级和杂项的加倍器',
    'Multipliers from Duplication Rune': '来自重叠符文的加倍器',
    'Duplication Rune Multiplier': '重叠符文倍率',
    'Research [1x2] Multiplier': '研究[1x2]倍率',
    'Research [1x11]-[1x15] Multiplier': '研究[1x11]-[1x15]倍率',
    'Research [4x12] Multiplier': '研究[4x12]倍率',
    'Multa Formicidae Ant Multiplier': '加倍蚁倍率',
    'Aphrodite Tribute Multiplier': '阿佛洛狄忒的贡品倍率',
    'TOTAL FREE MULTIPLIERS': '免费加倍器总和',
    'Offering Multipliers': '祭品倍率',
    'Alchemy Achievement': '炼金术成就',
    'Diamond Upgrade': '钻石升级',
    'Particle Upgrade': '粒子升级',
    'Auto Offering Shop Upgrade': '商店AUTO自动献祭祭品升级',
    'Offering EX Shop Upgrade': '商店EX额外祭品升级',
    'Cash Grab Shop Upgrade': '商店昂贵物品升级',
    'Sacrificium Formicidae': '献祭蚁',
    'Plutus Cube Tribute': '普路托斯方盒贡品',
    'Constant Upgrade': '数学常数升级',
    'Research 6x24,': '研究 6x24，',
    'Challenge': '挑战',
    'Ascension Count Achievement': '飞升次数成就',
    'Sun & Moon Achievements': '[烈日千阳]及[静月千阴]成就',
    'Cube Upgrade': '方盒升级',
    'Platonic ALPHA': 'PLATONIC ALPHA升级(第一排最后一个)',
    'Platonic BETA': 'PLATONIC BETA升级(第二排最后一个)',
    'Platonic OMEGA': 'PLATONIC OMEGA升级(第三排最后一个)',
    'TOTAL OFFERING MULTIPLIER': '祭品总倍率',
    'Global Cube multipliers': '所有类型的方盒及立方倍率',
    'Ascension Time Multiplier': '飞升时间倍率',
    'Sun and Moon Achievements': '[烈日千阳]及[静月千阴]成就',
    'Speed Achievement': '成就240的全局速度加成',
    'Challenge 15 All Cube Bonus': '挑战15的所有类型的方盒及立方产量加成',
    'Rune 6 - Infinite Ascent': '符文6 - 无限晋升',
    'Platonic Beta': 'Platonic Beta升级',
    'Platonic Omega': 'Platonic Omega升级',
    'Overflux Powder': '超通量粉',
    'TOTAL GLOBAL CUBE MULTIPLIER': '所有类型的方盒及立方总倍率',
    'Cube multipliers': '方盒倍率',
    'Ascension Score Multiplier': '飞升分数倍率',
    'Global Cube Multiplier': '所有类型的方盒及立方倍率',
    'Season Pass': '季票',
    'Researches (Except': '研究 (除了',
    'Cube upgrade': '方盒升级',
    'Achievement 189 Bonus': '成就189的加成',
    'Achievement 193 Bonus': '成就193的加成',
    'Achievement 195 Bonus': '成就195的加成',
    'Achievement 198-201 Bonus': '成就198-201的加成',
    'Achievement 254 Bonus': '成就254的加成',
    'Platonic Cubes': 'PLATONIC方盒',
    'Platonic': 'PLATONIC方盒升级',
    'TOTAL CUBE MULTIPLIER': '方盒总倍率',
    'Tesseract multipliers': '超立方倍率',
    'Achievement 202 Bonus': '成就202的加成',
    'Achievement 205-208 Bonus': '成就205-208的加成',
    'Achievement 255 Bonus': '成就255的加成',
    'TOTAL TESSERACT MULTIPLIER': '超立方总倍率',
    'Hypercube multipliers': '五阶立方倍率',
    'Achievement 212-215 Bonus': '成就212-215的加成',
    'Achievement 216 Bonus': '成就216的加成',
    'Achievement 253 Bonus': '成就253的加成',
    'Achievement 256 Bonus': '成就256的加成',
    'Achievement 265 Bonus': '成就265的加成',
    'Hyperreal Hepteract Bonus': '七阶立方·超真实的加成',
    'TOTAL HYPERCUBE MULTIPLIER': '五阶立方总倍率',
    'Platonic multipliers': 'PLATONIC方盒倍率',
    'Achievement 196 Bonus': '成就196的加成',
    'Achievement 219-222 Bonus': '成就219-222的加成',
    'Achievement 223 Bonus': '成就223的加成',
    'Achievement 257 Bonus': '成就257的加成',
    'TOTAL PLATONIC MULTIPLIER': 'PLATONIC方盒总倍率',
    'Hepteract multipliers': '七阶立方倍率',
    'Achievement 258 Bonus': '成就258的加成',
    'Achievement 264 Bonus': '成就264的加成',
    'Achievement 265 Bonus': '成就265的加成',
    'Achievement 270 Bonus': '成就270的加成',
    'TOTAL HEPTERACT MULTIPLIER': '七阶立方总倍率',
    'You have unlocked all reward types from Challenge 15!': '您解锁了挑战15的所有奖励类型！',
    'Here\'s what you got from your last resets (except challenges': '这就是您从之前重置中获得的东西(挑战除外',
    'Your sacrifices got you the following': '从献祭中您获得了以下内容',
    'Your last ascensions got you the following': '之前的飞升中您获得了以下内容',
    'Why don\'t you try clicking on one of the item\'s': '为何不尝试点击上方的',
    'gold': '金色',
    ' text above to get started? You can always cancel!': '文本来进行设置？反正您还可以取消的。',
    //设置结束

    //商店
    'Welcome to the Quark Shop. You can\'t believe what\'s in stock!': '欢迎来到夸克商店，您肯定想不到这里会有些什么！',
    'Own': '拥有',
    'Buy Yer\' Potions!': '买点药剂！',
    'Buy 1 for 100 Quarks': '花费100夸克购买1瓶',
    'USE 1 [+2hr]': '使用1瓶[2小时效果]',
    'Bought': '已购买',
    'Not Bought': '未购买',
    'Maxed!': '达到最大等级！',
    'Bought!': '已购买！',
    'Instantly gain 2 real life hours of Offerings, based on your all time best Offerings/sec and speed acceleration!': '立刻获得相当于现实时间2小时产量的祭品，数量基于您的最佳祭品/秒和加速效果！',
    'Instantly gain 2 real life hours of Obtainium, based on your all time best Obtainium/sec and speed acceleration!': '立刻获得相当于现实时间2小时产量的难得素，数量基于您的最佳难得素/秒和加速效果！',
    'Gain +(level)^2 /4% more offerings from all sources!': '祭品获取数量增加(等级^2)/4%！',
    'Automatically pour Offerings into a rune. 1st level unlocks feature, and each level increases Offering gain by 2%. Every second, 2^(Level) levels worth of offerings are spent. [First Level Cannot be refunded!]': '自动献祭祭品至符文中。第一级解锁特性，之后的每一级使祭品获取数量增加2%。只要祭品足够，每秒最多献祭祭品使符文增加2^(等级)的等级。[无法重置此项的第一级购买！]',
    'Gain +(level)^2 /2% more obtainium from all sources!': '难得素获取数量增加(等级^2)/2%！',
    'Automatically pour Obtainium into a research. 1st level unlocks feature, and each level increases Obtainium gain by 2%. Every reincarnation, dump all Obtainium into research until maxed. [First Level Cannot be Refunded!]': '自动使用难得素进行研究。第一级解锁特性，之后的每一级使难得素获取数量增加2%。每次转世，尽可能地使用难得素升级目标研究，激活方式与自动献祭类似。[无法重置此项的第一级购买！]',
    'T and R challenges don\'t cause resets if retry is enabled and gain up to 10 completions per tick. Addtionally, instantly gain T challenge completions up to highest completed when exiting R challenges. [Cannot be Refunded!]': '只要开启重新尝试挑战，超越和转世挑战将不再重置资源，且每个时刻可以完成10次。另外，在退出转世挑战时，立刻使超越挑战的完成次数达到之前的完成次数上限。[无法重置此项购买！]',
    'This is a cash grab but it gives a couple cool stats. +1% production per level to Offerings and Obtainium.': '这玩意非常贵，但是效果拔群。每级使祭品和难得素的产量增加1%。',
    'Each level gives a 1.5x speed multiplier to all Ant tiers\' production! Short and simple.': '每级使蚂蚁速度变为1.5倍！简单有效。',
    'Permanently unlock a Shop talisman! [Warning: you can\'t refund this and this is VERY expensive to level. Be sure you want to buy it!]': '永久解锁一个商店护身符！[警告：您无法重置此项购买，而且升级花费非常高昂。买之前想清楚了！]',
    'Using some amazing trick, you manage to increase your Reincarnation Challenge cap by 2 for each level! [Cannot be Refunded!]': '耍点漂亮的小把戏，每级增加2次转世挑战次数上限！[无法重置此项购买！]',
    'The extended cut: This fifth forgotten tome gives you an additional -20M exponent reduction on the Challenge 10 requirement per level.': '后传来了：第五部后传虽然有点被遗忘了，但每级还是可以使挑战10的基础目标再次减少1e20M。',
    'Wow! Cubes is giving you a deal: Buy this totally fair Season Pass and gain +3% cubes per level when you ascend!': '惊奇方盒提出交易：购买这个完全公平的季票以后，每级使您飞升的方盒获取数量增加3%！',
    'Instead of a daily cap of 25 Quarks by opening Wow! Cubes, how about 100 instead? This adds 75 to the daily cap! [Cannot be Refunded!]': '将每天开启惊奇方盒获取夸克的上限从25提升到100！[无法重置此项购买！]',
    'Instead of a daily cap of 25 Quarks by opening Wow! Tesseracts, how about 100 instead? This adds 75 to the daily cap! [Cannot be Refunded!]': '将每天开启惊奇超立方获取夸克的上限从25提升到100！[无法重置此项购买！]',
    'Instead of a daily cap of 25 Quarks by opening Wow! Hypercubes, how about 100 instead? This adds 75 to the daily cap! [Cannot be Refunded!]': '将每天开启惊奇五阶立方获取夸克的上限从25提升到100！[无法重置此项购买！]',
    'CURRENT Effect: Even in a premium shop it\'s kinda obvious, right?': '当前效果：就算在这个高档商店中，它的效果仍然很明显，不是么？',
    'CURRENT Effect: All Ants\' Speed': '当前效果：所有蚂蚁速度',
    'Reset Perm Shop [Cost: 15 Quarks]': '重置商店购买[花费：15夸克]',
    'Shop Confirmations: ON': '商店确认框：开',
    'Shop Confirmations: OFF': '商店确认框：关',
    'Hover over each portion of the shop to see what each upgrade does!': '鼠标停在商店物品上以查看详细介绍！',
    //商店结束

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "Thanks to researches you automatically gain ": "由于研究效果，您在现实时间每秒自动获得", //主脚本
    "ACTIVE UNTIL Tue May 04 2021 23:59:59 GMT+0800 (": "活动持续到2021年5月4日 23:59:59 东八区 (", //主界面
    "Workers: ": "工人：", //主界面及建筑
    "Investments: ": "投资：", //主界面及建筑
    "Printers: ": "打印机：", //主界面及建筑
    "Coin Mints: ": "铸币厂：", //主界面及建筑
    "Alchemies: ": "炼金术：", //主界面及建筑
    "Cost: ": "花费：", //主界面及建筑
    "Coins/Sec: ": "金币每秒产量：", //主界面及建筑
    "Accelerators: ": "加速器：", //主界面及建筑
    "Multipliers: ": "加倍器：", //主界面及建筑
    "Accelerator Boost: ": "加速器加成：", //主界面及建筑
    "Reset Diamonds and Prestige Upgrades, but add ": "重置钻石及转生升级，但将增加", //主界面及建筑
    "Due to your excessive wealth, coin production is divided by ": "由于您的财富过多，需要减少", //主界面及建筑
    "Refineries: ": "炼油厂：", //主界面及建筑
    "Coal Plants: ": "煤电厂：", //主界面及建筑
    "Coal Rigs: ": "煤钻机：", //主界面及建筑
    "Pickaxes: ": "十字镐：", //主界面及建筑
    "Pandoras Boxes: ": "潘多拉魔盒：", //主界面及建筑
    "Crystal/sec: ": "水晶每秒产量：", //主界面及建筑
    "Ref./sec: ": "炼油厂每秒产量：", //主界面及建筑
    "Plants/sec: ": "煤电厂每秒产量：", //主界面及建筑
    "Rigs/sec: ": "煤钻机每秒产量：", //主界面及建筑
    "Pickaxes/sec: ": "十字镐每秒产量：", //主界面及建筑
    "Augments: ": "强化：", //主界面及建筑
    "Enchantments: ": "附魔：", //主界面及建筑
    "Wizards: ": "法师：", //主界面及建筑
    "Oracles: ": "先知：", //主界面及建筑
    "Grandmasters: ": "宗师：", //主界面及建筑
    "Shards/sec: ": "神话碎片每秒产量：", //主界面及建筑
    "Augments/sec: ": "强化每秒产量：", //主界面及建筑
    "Enchantments/sec: ": "附魔每秒产量：", //主界面及建筑
    "Wizards/sec: ": "法师每秒产量：", //主界面及建筑
    "Oracles/sec: ": "先知每秒产量：", //主界面及建筑
    "Protons: ": "质子：", //主界面及建筑
    "Elements: ": "元素：", //主界面及建筑
    "Pulsars: ": "脉冲星：", //主界面及建筑
    "Quasars: ": "类星体：", //主界面及建筑
    "Galactic Nuclei: ": "星系核心：", //主界面及建筑
    "Atoms/sec: ": "原子每秒产量：", //主界面及建筑
    "Protons/sec: ": "质子每秒产量：", //主界面及建筑
    "Elements/sec: ": "元素每秒产量：", //主界面及建筑
    "Pulsars/sec: ": "脉冲星每秒产量：", //主界面及建筑
    "Quasars/sec: ": "类星体每秒产量：", //主界面及建筑
    "Thanks to Research 2x14, you also multiply Crystal production by ": "由于研究2x14的效果，您还使水晶产量乘以", //主界面及建筑
    "Thanks to Research 2x15, you also multiply Mythos Shard production by ": "由于研究2x15的效果，您还使神话碎片产量乘以", //主界面及建筑
    "Dot: ": "点：", //主界面及建筑
    "Vector: ": "矢量：", //主界面及建筑
    "Three-Space: ": "三维空间：", //主界面及建筑
    "Bent Time: ": "时间扭曲：", //主界面及建筑
    "Hilbert Space: ": "希尔伯特空间：", //主界面及建筑
    "+Constant/sec: ": "数学常数每秒产量：", //主界面及建筑
    "Dot/sec: ": "点每秒产量：", //主界面及建筑
    "Vector/sec: ": "矢量每秒产量：", //主界面及建筑
    "Three-Space/sec: ": "三维空间每秒产量：", //主界面及建筑
    "Bent Time/sec: ": "时间扭曲每秒产量：", //主界面及建筑
    "Level: ": "等级：", //主界面及建筑
    "+1 in ": "升1级需要", //主界面及建筑
    "Level ": "等级 ", //主界面及建筑
    "Achievement Points: ": "成就点数：", //成就
    "Bonus Speed Rune Levels: ": "加速符文额外等级：", //符文等
    "Bonus Duplication Rune Levels: ": "重叠符文额外等级：", //符文等
    "Bonus Prism Rune Levels: ": "棱柱符文额外等级：", //符文等
    "Bonus Thrift Rune Levels: ": "节俭符文额外等级：", //符文等
    "Bonus SI Rune Levels: ": "卓越智慧额外等级：", //符文等
    "Inceptus Formicidae Level ": "创始蚁等级 ", //蚂蚁
    "Fortunae Formicidae Level ": "财富蚁等级 ", //蚂蚁
    "Tributum Formicidae Level ": "示威蚁等级 ", //蚂蚁
    "Celeritas Formicidae Level ": "迅捷蚁等级 ", //蚂蚁
    "Multa Formicidae Level ": "加倍蚁等级 ", //蚂蚁
    "Sacrificium Formicidae Level ": "献祭蚁等级 ", //蚂蚁
    "Hic Formicidae Level ": "建筑蚁等级 ", //蚂蚁
    "Experientia Formicidae Level ": "博学蚁等级 ", //蚂蚁
    "Praemoenio Formicidae Level ": "预言蚁等级 ", //蚂蚁
    "Scientia Formicidae Level ": "科学蚁等级 ", //蚂蚁
    "Phylacterium Formicidae Level ": "命匣蚁等级 ", //蚂蚁
    "Mortuus Est Formicidae Level ": "死神蚁等级 ", //蚂蚁
    "Owned: ": "拥有：", //蚂蚁
    "Generates ": "每秒产生", //蚂蚁
    "Ant Multiplier ": "蚂蚁倍率", //蚂蚁
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    " Obtainium per real life second.": "难得素。", //主脚本
    " coins.": "金币。", //主界面及建筑
    " Diamonds.": "钻石。", //主界面及建筑
    "% Acceleration Power and 5 free Accelerators.": "加速器效果，并增加5个免费的加速器。", //主界面及建筑
    " Diamonds": "钻石", //主界面及建筑
    " crystals": "水晶", //主界面及建筑
    " Mythos": "神话", //主界面及建筑
    " Particles": "粒子", //主界面及建筑
    " Tesseracts": "超立方", //主界面及建筑
    " EXP": "经验值", //主界面及建筑
    " Coins": "金币", //升级
    " Galactic Crumbs": "银河碎屑", //蚂蚁
    " Crumbs/sec": "银河碎屑", //蚂蚁
    " Workers/sec": "工蚁", //蚂蚁
    " Breeders/sec": "繁殖蚁", //蚂蚁
    " MetaBreeders/sec": "高级繁殖蚁", //蚂蚁
    " MegaBreeders/sec": "超级繁殖蚁", //蚂蚁
    " Queens/sec": "蚁后", //蚂蚁
    " Royals/sec": "国王蚁", //蚂蚁
    " ALMIGHTIES/sec": "全能蚁", //蚂蚁
    "0.2% Quarks, +1% all cube types per level! Start with +10% Quarks.": "0.2%夸克获取数量，+1%所有类型的方盒及立方获取数量于每级！初始+10%夸克获取数量。", //符文等
    " Quarks.": "夸克。", //商店
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    ")": ")",
    "%": "%",
    " COMPLETED!": "已完成！",
    " BOUGHT!": " 已购买！",
    " || MAXED!": " || 已满级！",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*\-?$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s*[A-Za-z]\s*$/, //带单字母的纯空格
    /^([\d\,]+)\/([\d\,]*)$/, //数字处理
    /^x(.*) -->$/, //数字处理
    /^x([e\d\,\.]+)\,$/, //数字处理
    /^([e\d\,\.]+)$/, //数字处理
    /^([e\d\,\.]+)[A-Za-rt-z]{0,2} \[([e%\d\,\.\+]+)[A-Za-rt-z]{0,2}\]$/, //数字处理
    /^(\d+)\s\/$/, //数字处理    
    /^(.*)[\u4E00-\u9FFF]+(.*)$/, //不抓取内容
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-rt-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.+)s until \+(.+) export Quark$/, '距离增加导出奖励$2夸克还有$1秒'], //主脚本
    [/^Quarks on export: (\d+) \[Max (.+)\]$/, '导出奖励的夸克总和：$1[最大为$2]'], //主脚本
    [/^Acceleration Power: (.+) \|\| Acceleration Multiplier(.*)$/, '加速器效果: $1 || 加速器倍率$2'], //主界面及建筑
    [/^Multiplier Power: (.+) \|\| Multiplier(.*)$/, '加倍器效果: $1 || 加倍器倍率$2'], //主界面及建筑
    [/^(.+) to pay taxes!$/, '$1的金币产量用于缴税！'], //主界面及建筑
    [/^(.+) to pay taxes! Your tax also caps your Coin gain at (.+)\/s.$/, '$1的金币产量用于缴税！税收还将您的金币每秒产量上限限制在$2。'], //主界面及建筑
    [/^You have (.+) Crystals, multiplying Coin production by (.+)x.$/, '您有$1水晶，金币产量因此乘以$2倍。'], //主界面及建筑
    [/^Prestige when your Diamonds can increase by a factor (.*) \[Toggle number above\]. Current Multiplier: (.+).$/, '当水晶为之前的$1倍时转生[在上方输入设置数值]。当前倍率：$2。'], //主界面及建筑
    [/^Prestige when the autotimer is at least (.*) real-life seconds. \[Toggle number above\]. Current timer: (.+)s.$/, '当现实时间经过$1秒后转生[在上方输入设置数值]。当前时间：$2秒。'], //主界面及建筑
    [/^You have (.+) Mythos Shards, providing (.+) Multiplier Power boosts.$/, '您有$1神话碎片，加倍器加成因此增加$2个。'], //主界面及建筑
    [/^Prestige when your Mythos can increase by a factor (.*) \[Toggle number above\]. Current Multiplier: (.+).$/, '当神话碎片为之前的$1倍时超越[在上方输入设置数值]。当前倍率：$2。'], //主界面及建筑
    [/^Transcend when the autotimer is at least (.*) real-life seconds. \[Toggle number above\]. Current timer: (.+)s.$/, '当现实时间经过$1秒后超越[在上方输入设置数值]。当前时间：$2秒。'], //主界面及建筑
    [/^You have (.+) Atoms, providing (.+) Building Power. Multiplier to Coin Production(.*)$/, '您有$1原子，建筑能量因此增加$2。金币产量倍率变为$3'], //主界面及建筑
    [/^Reincarnate when your Particles can increase by a factor (.*) \[Toggle number above\]. Current Multiplier: (.+).$/, '当粒子为之前的$1倍时转世[在上方输入设置数值]。当前倍率：$2。'], //主界面及建筑
    [/^Reincarnate when the autotimer is at least (.*) real-life seconds. \[Toggle number above\]. Current timer: (.+)s.$/, '当现实时间经过$1秒后转世[在上方输入设置数值]。当前时间：$2秒。'], //主界面及建筑
    [/^You have (.+) Wow! Tesseracts. Gain more by beating Challenge 10 on each Ascension.$/, '您有$1惊奇超立方。飞升时通过挑战10以获取更多。'], //主界面及建筑
    [/^You have a mathematical constant of (.+). Taxes are divided by (.+).$/, '您有$1数学常数。税收因此除以$2。'], //主界面及建筑
    [/^Auto buyer will save at least (.+) tesseracts. \[Enter number above\].$/, '自动购买至少保留$1超立方[在上方输入设置数值]。'], //主界面及建筑
    [/^(.*) \[\+(\d+) LVL\]$/, '$1[可提升$2级]'], //主界面及建筑
    [/^You have (.+) Offerings.$/, '您有$1祭品。'], //主界面及建筑
    [/^Gain (.+)\* EXP per offering sacrificed.$/, '献祭每个祭品可以获得$1经验值。'], //主界面及建筑
    [/^You have (.+)% chance of recycling your offerings. This multiplies EXP gain by (.+)!$/, '您有$1%概率回收祭品。这意味着您可以获得$2倍的经验值！'], //主界面及建筑
    [/^ \[Bonus: (.+)\]$/, '[额外等级：$1]'], //主界面及建筑
    [/^You have (.+) Galactic Crumbs \[(.+)\/s\], providing a (.+)x Coin Multiplier.$/, '您有$1银河碎屑[每秒$2]，使金币产量变为$3倍。'], //主界面及建筑
    [/^Sacrifice when the timer is at least (.+) seconds \(In-game time\), Currently(.*)$/, '当时间至少经过$1秒(游戏时间)后献祭蚂蚁，目前时间为$2'], //主界面及建筑
    [/^Sacrifice when the timer is at least (.+) seconds \(Real-time\), Currently(.*)$/, '当时间至少经过$1秒(现实时间)后献祭蚂蚁，目前时间为$2'], //主界面及建筑
    [/^(.+) Hours (.+) Mins (.+) Secs$/, '$1小时$2分$3秒'], //主界面及建筑
    [/^You have (.+) Wow! Cubes =$/, '您有$1个惊奇方盒 ='], //主界面及建筑
    [/^(\s+)Click the image below to join the Discord!(\s+)$/, '$1点击下方的图片加入Discord频道！$2'], //主界面及建筑
    [/^(\s+)\[NEW!\] Support Development on Patreon!(\s+)$/, '$1[新！]在Patreon上支持本游戏开发！$2'], //主界面及建筑
    [/^You have (.+) Quarks!$/, '您有$1夸克！'], //主界面及建筑
    [/^Upgrade for (.+) Quarks$/, '使用$1夸克进行升级'], //主界面及建筑
    [/^Buy for (.+) Quarks$/, '使用$1夸克进行购买'], //主界面及建筑
    [/^You have (.+) seconds of Offline Progress!$/, '您的离线时间为$1秒！'], //离线计算
    [/^Coins, Coin Producers, Coin Upgrades, and Crystals are reset, but in return you gain diamonds and a few offerings. Required: (.+)\/1e16 Coins \|\| TIME SPENT: (.+) seconds.$/, '重置金币、金币生产者、金币升级、水晶，获得钻石和一些祭品。需要：$1/1e16金币 || 花费时间：$2秒。'], //重置
    [/^Reset all Coin and Diamond Upgrades\/Features, Crystal Upgrades & Producers, for Mythos\/Offerings. Required: (.+)\/1e100 Coins \|\| TIME SPENT: (.+) seconds.$/, '重置所有金币和钻石的升级和特性，以及水晶升级和水晶生产者，获得神话和一些祭品。需要：$1/1e100金币 || 花费时间：$2秒。'], //重置
    [/^Are you tired of being in your challenge or stuck\? Click to leave challenge (.+). Progress: (.+)\/(.+) Coins. TIME SPENT: (.+) seconds.$/, '您已经厌倦了挑战，或者是单纯想退出了吗？点击此处将离开挑战$1。进度：$2/$3金币。花费时间：$4秒。'], //重置
    [/^Reset ALL previous reset tiers, but gain Particles, Obtainium and Offerings! Required: (.+)\/1e300 Mythos Shards \|\| TIME SPENT: (.+) seconds.$/, '重置之前的所有低阶资源，获得粒子，难得素和一些祭品！需要：$1/1e300神话碎片 || 花费时间：$2秒。'], //重置
    [/^Reset Coin Producers\/Upgrades, Crystals and Diamonds in order to increase the power of your Accelerators. Required: (.+)\/(.*)$/, '重置所有金币的生产者和升级，以及水晶和钻石，增加加速器效果。需要：$1/$2'], //重置
    [/^Are you done or tired of being in your challenge\? Click to leave challenge (.+). Progress: (.+)\/(.+) Mythos Shards. TIME SPENT: (.+) Seconds.$/, '您已经不想再继续了，或者是厌倦了挑战吗？点击此处将离开挑战$1。进度：$2/$3神话碎片。花费时间：$4秒。'], //重置
    [/^Are you done or tired of being in your challenge\? Click to leave challenge (.+). Progress: (.+)\/(.+) Coins. TIME SPENT: (.+) Seconds.$/, '您已经不想再继续了，或者是厌倦了挑战吗？点击此处将离开挑战$1。进度：$2/$3金币。花费时间：$4秒。'], //重置
    [/^Ascend. 10x1 is required! \+(.+) Wow! Cubes for doing it! Time: (.+) Seconds.$/, '进行飞升。需要完成一次挑战10才可飞升！可获得$1惊奇方盒！花费时间：$2秒。'], //重置
    [/^Effect: Worker Production(.*)$/, '效果：工人产量$1'], //升级
    [/^Effect: Investment Production(.*)$/, '效果：投资产量$1'], //升级
    [/^Effect: Printer Production(.*)$/, '效果：打印机产量$1'], //升级
    [/^Effect: Mint Production x1e100 \(Duh$/, '效果：铸币厂产量 x1e100 (废话'], //升级，前置
    [/^Effect: Mint Production(.*)$/, '效果：铸币厂产量$1'], //升级
    [/^Effect: Alchemy Production(.*)$/, '效果：炼金术产量$1'], //升级
    [/^Effect: All Coin production(.*)$/, '效果：所有金币产量$1'], //升级
    [/^Effect: Gain (.+) free multipliers from bought Alchemies.$/, '效果：根据已购买的炼金术数量获得$1个免费加倍器。'], //升级
    [/^Effect: \+(.+) free Accelerators.$/, '效果：增加$1个免费加速器。'], //升级
    [/^Effect: \+(.+) free Multipliers.$/, '效果：增加$1个免费加倍器。'], //升级
    [/^Effect: Generator efficiency(.*)$/, '效果：发生器产量$1'], //升级
    [/^Effect: Printer Generation(.*)$/, '效果：产生打印机的发生器产量$1'], //升级
    [/^Effect: Mint Generation(.*)$/, '效果：产生铸币厂的发生器产量$1'], //升级
    [/^Effect: Gain (.+)x more Diamonds on prestige$/, '效果：转生的钻石产量增加$1倍'], //升级
    [/^Effect: All coin production is further multiplied by (.+) \[Stacks with upgrade 1\]!$/, '效果：金币产量再增加$1倍[前面为不算上第一个升级原来效果时的数字]！'], //升级
    [/^Effect: \+(.+) Multipliers, \+(.+) Accelerators.$/, '效果：增加$1个加倍器，$2个加速器。'], //升级
    [/^Effect: \+(.+) Accelerators.$/, '效果：增加$1个加速器。'], //升级
    [/^Effect: \+(.+) Multipliers.$/, '效果：增加$1个加倍器。'], //升级
    [/^Effect: \+(.+) Accelerator Boosts$/, '效果：增加$1个加速器加成'], //升级
    [/^Effect: \+(.+) Accelerators$/, '效果：增加$1个加速器'], //升级
    [/^Effect: \+(.+) Multipliers$/, '效果：增加$1个加倍器'], //升级
    [/^Effect: All Crystal producers(.*)$/, '效果：所有水晶生产者产量$1'], //升级
    [/^Effect: All Mythos producers production(.*)$/, '效果：所有神话生产者产量$1'], //升级
    [/^Effect: Welcome to Transcension! Coin production is multiplied by (.+).$/, '效果：欢迎进入超越时代！金币产量变为$1倍。'], //升级
    [/^Effect: All mythos shard producers are going into overdrive: x(.+) the production!$/, '效果：所有神话碎片生产者都在超速运转：产量变为$1倍！'], //升级
    [/^Effect: Multiply all coin production by (.+)!$/, '效果：金币产量变为$1倍！'], //升级
    [/^Effect: Multiply Mythos gained in Transcension by (.+)!$/, '效果：超越的神话产量变为$1倍！'], //升级
    [/^Effect: Mythos-tier producers production x(.+)! It's like inception, or something.$/, '效果：神话生产者产量变为$1倍！这就像开始了什么一样。'], //升级，位置前置
    [/^Effect: Mythos-tier producers production x(.+)!$/, '效果：神话生产者产量变为$1倍！'], //升级，位置前置
    [/^Effect: Mythos-tier producers production(.*)$/, '效果：神话生产者产量$1'], //升级
    [/^Effect: Multiply coin production by a factor of (.+)!$/, '效果：金币产量变为$1倍！'], //升级
    [/^Effect: \+(.+) Multipliers through magic!$/, '效果：通过魔法获得了$1加倍器！'], //升级
    [/^Effect: Augments will produce (.+)x as many Mythos Shards.$/, '效果：强化的神话碎片产量变为$1倍。'], //升级
    [/^Effect: Wizards will produce (.+)x as many Enchantments; what productive spirits!$/, '效果：法师的附魔产量变为$1倍。真是一群干劲十足的家伙们！'], //升级
    [/^Effect: Grandmasters will produce (.+)x as many Oracles!$/, '效果：宗师的先知产量变为$1倍！'], //升级
    [/^Effect: Base offering amount for Reincarnations \+(.+). Challenge yourself!$/, '效果：转世的基础祭品获取数量增加$1。是时候挑战自我了！'], //升级
    [/^Effect: All crystal production(.*)$/, '效果：所有水晶产量$1'], //升级
    [/^Effect: All mythos shard production(.*)$/, '效果：所有神话碎片产量$1'], //升级
    [/^Effect: The first particle-tier producer is (.+)x as productive.$/, '效果：第一级粒子生产者的效率变为$1倍。'], //升级
    [/^Effect: Your compliance with tax laws provides you with (.+) free Multipliers, for some reason.$/, '效果：您遵守法律法规，足额纳税，由于某种原因获得了$1个免费加倍器。'], //升级
    [/^Effect: Cosmic Magnetics will allow you to gain (.+)x as much Obtainium reincarnating, x(.+) automation gain.$/, '效果：由于宇宙磁体的作用，转世的难得素获取数量变为$1倍，自动难得素获取数量变为$2倍。'], //升级
    [/^Effect: Contracted time makes your game timers run (.+)% more quickly.$/, '效果：时间收缩使游戏时间加快了$1%。'], //升级
    [/^Effect: Obtainium multiplier(.*)$/, '效果：难得素倍率$1'], //升级
    [/^Effect: Offering Multiplier(.*)$/, '效果：祭品倍率$1'], //升级
    [/^Effect: Ant Speed Multiplier(.*)$/, '效果：蚂蚁速度$1'], //升级
    [/^Effect: \+(.+)% Constant Divisor power.$/, '效果：增加$1%数学常数的税收除数效果。'], //升级
    [/^Each purchased Crystal producer increases generation of Crystal producers by .1% per level. \[MAX: (.*)%\]$/, '每级使每购买一个水晶生产者增加0.1%的水晶生产者产量。[上限：$1%]'], //升级
    [/^Improve the multiplier to coin production by .05 exponent per level. \[MAX: \+(.*)\]$/, '每级使水晶对金币产量提升的指数增加0.05。[上限：增加$1]'], //升级
    [/^Tesseract building production(.*)$/, '超立方建筑产量$1'], //升级
    [/^Offering gain is increased based on highest ever unspent obtainium \[Max: 30,000,000 obtainium\]$/, '根据最大持有的难得素数量增加祭品获取数量。[难得素数量效果上限：30000000]'], //升级，前置
    [/^Offering gain(.*)$/, '祭品获取数量$1'], //升级
    [/^Obtainium gain from Reincarnations is multiplied \(1 \+ 2C\) where C is #Reincarnation Challenges completed, up to 50x!$/, '转世的难得素获取数量变为 (1+2C) 倍，上限为50倍，C为转世挑战完成次数！'], //升级，前置
    [/^Obtainium gain is increased based on highest ever unspent offerings. \[Max: 100,000 unspent\]$/, '根据最大持有的祭品数量增加难得素获取数量。[祭品数量效果上限：100000]'], //升级，前置
    [/^Obtainium gain(.*)$/, '难得素获取数量$1'], //升级
    [/^(.+) free Ant Levels$/, '$1免费蚂蚁等级'], //升级
    [/^Ant Speed x\(1e5\)\^completions! Current$/, '蚂蚁速度每完成1次变为1e5倍！当前效果'], //挑战，前置
    [/^Ant Speed (.+)$/, '蚂蚁速度$1'], //升级
    [/^(.+) free Rune Levels, \+(.+) to Rune Cap$/, '$1免费符文等级，+$2符文等级上限'], //升级
    [/^Rune EXP(.*)$/, '符文经验$1'], //升级
    [/^Runes effectiveness(.*)$/, '符文效果$1'], //升级
    [/^Cubes\/Tesseracts on Ascension(.*)$/, '飞升的惊奇方盒和惊奇超立方获取数量$1'], //升级
    [/^Reward: (.+) AP. (.+) Quarks!$/, '奖励：$1成就点数。$2夸克！'], //成就
    [/^Reward: 10 AP. 10 Quarks! ALL Ant speed multiplied by(.*)$/, '奖励：10成就点数。10夸克！所有蚂蚁的速度都乘以$1'], //成就
    [/^Reward: 10 AP. 10 Quarks! Ant Multiplier from sacrifice is multiplied by another logarithm: x(.*)$/, '奖励：10成就点数。10夸克！献祭获得的蚂蚁倍率乘以另一个对数倍率：乘以$1'], //成就
    [/^Reward: 60 AP. 300 Quarks! Gain an Ascension cubes multiplier based on your score: x(.*). Also: Offerings \+(.*)% \[Max: 100% at 1M Ascensions\]$/, '奖励：60成就点数。300夸克！根据您的飞升分数，使飞升的方盒及立方倍率乘以$1。另外，祭品获取数量增加$2%[与飞升次数有关，在1000000次飞升时达到上限：100%]'], //成就
    [/^Reward: 60 AP. 300 Quarks! Gain \+100 ascension count for all ascensions longer than 10 seconds. Also: Obtainium \+(.*)% \[Max: 100% at 5M Ascensions\]$/, '奖励：60成就点数。300夸克！飞升时长超过10秒时，本次飞升使飞升次数增加100次。另外，难得素获取数量增加$1%[与飞升次数有关，在5000000次飞升时达到上限：100%]'], //成就
    [/^Reward: 100 AP. 500 Quarks! Gain 20% of excess time after 10 seconds each Ascension as a linear multiplier to ascensions \(max 24 hours\). Also: Cubes \+(.*)% \[Max: 200% at 500M Ascensions\]$/, '奖励：100成就点数。500夸克！飞升时间超过10秒以后，超出部分的时间(最高24小时)的2%将变为飞升次数的倍率。另外，方盒获取数量增加$1%[与飞升次数有关，在500000000(5e8)次飞升时达到上限：200%]'], //成就
    [/^Reward: 40 AP. 200 Quarks! Gain (.*)% more Cubes on ascension!$/, '奖励：40成就点数。200夸克！飞升时方盒获取数量增加$1%！'], //成就
    [/^Reward: 60 AP. 300 Quarks! Gain (.*)% more Cubes and Tesseracts on ascension! Multiplicative with the other Ach. bonus \[MAX: 25,000% at e100,000 Const\]$/, '奖励：60成就点数。300夸克！飞升时方盒和超立方获取数量增加$1%！与其他成就的加成相互叠乘[在e100000常数时达到上限：25000%]。'], //成就
    [/^Reward: 100 AP. 500 Quarks! Gain (.*)% more Platonic Cubes on ascension! \[MAX: 2,000% at e100,000 Const\]$/, '奖励：100成就点数。500夸克！飞升时PLATONIC方盒获取数量增加$1%！[在e100000常数时达到上限：2000%]。'], //成就
    [/^Reward: 60 AP. 300 Quarks! Gain 20% of excess time after 10 seconds each Ascensions as a linear multiplier to ascensions \(max 24 hours\). Also: Tesseracts \+(.*)% \[Max: 200% at 1B Ascensions\]$/, '奖励：60成就点数。300夸克！飞升时间超过10秒以后，超出部分的时间(最高24小时)的2%将变为飞升次数的倍率。另外，超立方获取数量增加$1%[与飞升次数有关，在1000000000(1e9)次飞升时达到上限：200%]'], //成就
    [/^Reward: 100 AP. 500 Quarks! Gain 20% of excess time after 10 seconds each Ascensions as a linear multiplier to ascensions \(max 24 hours\). Also: Hypercubes \+(.*)% \[Max: 200% at 2B Ascensions\]$/, '奖励：100成就点数。500夸克！飞升时间超过10秒以后，超出部分的时间(最高24小时)的2%将变为飞升次数的倍率。另外，五阶立方获取数量增加$1%[与飞升次数有关，在2000000000(2e9)次飞升时达到上限：200%]'], //成就
    [/^Reward: 100 AP. 500 Quarks! Gain 20% of excess time after 10 seconds each Ascensions as a linear multiplier to ascensions \(max 24 hours\). Also: Platonic Cubes \+(.*)% \[Max: 200% at 2.674B Ascensions\]$/, '奖励：100成就点数。500夸克！飞升时间超过10秒以后，超出部分的时间(最高24小时)的2%将变为飞升次数的倍率。另外，PLATONIC方盒获取数量增加$1%[与飞升次数有关，在2674000000(2.674e9)次飞升时达到上限：200%]'], //成就
    [/^Reward: 40 AP. 200 Quarks! Ascension Cube Gain Multipliers is VERY slightly affected by global speed multipliers: (.*)x \(Min: 1.10x, Max$/, '奖励：40成就点数。200夸克！飞升时方盒获取数量受到全局速度轻微的影响：乘以$1(最小值: 1.10x，最大值'], //成就
    [/^Reward: 75 AP. 3,000 Quarks! Cube Gain \+(.*)% \[Max: \+15% at 1e25 Ascension Score\]$/, '奖励：75成就点数。3000夸克！方盒获取数量增加$1%[在1e25飞升分数时达到上限：15%]'], //成就
    [/^Reward: 75 AP. 3,000 Quarks! Tesseract Gain \+(.*)% \[Max: \+15% at 1e25 Ascension Score\], and allow gain of Hepteracts.$/, '奖励：75成就点数。3000夸克！超立方获取数量增加$1%[在1e25飞升分数时达到上限：15%]，并且解锁七阶立方。'], //成就
    [/^Reward: 75 AP. 3,000 Quarks! Hypercube Gain \+(.*)% \[Max: \+15% at 1e25 Ascension Score\]. Also, Overflux Powder conversion rate is 5% better!$/, '奖励：75成就点数。3000夸克！五阶立方获取数量增加$1%[在1e25飞升分数时达到上限：15%]。另外，超通量粉的转化效率增加5%。'], //成就
    [/^Reward: 100 AP. 4,000 Quarks! Platonic Gain \+(.*)% \[Max: \+15% at 1e25 Ascension Score\]. Also, Overflux Powder conversion rate is 5% better!$/, '奖励：100成就点数。4000夸克！PLATONIC方盒获取数量增加$1%[在1e25飞升分数时达到上限：15%]。另外，超通量粉的转化效率增加5%。'], //成就
    [/^Reward: 100 AP. 4,000 Quarks! Hepteract Gain \+(.*)% \[Max: \+15% at 1e25 Ascension Score\]$/, '奖励：100成就点数。4000夸克！七阶立方获取数量增加$1%[在1e25飞升分数时达到上限：15%]'], //成就
    [/^Reward: 75 AP. 3,000 Quarks! Ascensions are (.*) faster! Max: \+$/, '奖励：75成就点数。3000夸克！飞升的速度增加$1！上限：增加'], //成就
    [/^Reward: 100 AP. 4,000 Quarks! Hepteracts \+(.*)% \[Max: 40% at 8T Ascensions\]!$/, '奖励：100成就点数。4000夸克！七阶立方获取数量增加$1%[在8000000000000(8e12)次飞升时达到上限：40%]！'], //成就
    [/^Reward: 100 AP. 4,000 Quarks! Hepteracts \+(.*)% \[Max: 20% at 160T Ascensions\]!$/, '奖励：100成就点数。4000夸克！七阶立方获取数量增加$1%[在160000000000000(1.6e14)次飞升时达到上限：20%]！'], //成就
    [/^Reward: 150 AP. 6,000 Quarks! Quarks \+(.*)% \[Max: 10% at 1Qa Ascensions\]!$/, '奖励：100成就点数。4000夸克！七阶立方获取数量增加$1%[在1000000000000000(1e15)次飞升时达到上限：10%]！'], //成就
    [/^Reward: 50 AP. 2,000 Quarks! Ascension Score is boosted by (.*)% \[Max: 100% at 1e100,000 Const\]$/, '奖励：50成就点数。2000夸克！飞升分数增加$1%[在e100000常数时达到上限：100%]'], //成就
    [/^Reward: 75 AP. 3,000 Quarks! Hepteract Gain is boosted by (.*)% \[Max: 100% at 1e1,000,000 const\], Constant Upgrade 1 boosted to 1.06 \(from 1.05\), Constant Upgrade 2 boosted to 1.11 \(from 1.10\).$/, '奖励：75成就点数。3000夸克！七阶立方获取数量增加$1%[在e1000000常数时达到上限：100%]，数学常数升级1的效果从1.05变为1.06，数学常数升级2的效果从1.1变为1.11。'], //成就
    [/^Reward: 100 AP. 4,000 Quarks! When you open a Platonic Cube, gain (.*) Hypercubes, rounded down \[Max: 1 at 1e1,000,000 Const\]$/, '奖励：100成就点数。4000夸克！开启一个PLATONIC方盒时，获得$1个五阶立方，向下取整[在e1000000常数时达到上限：1]'], //成就
    [/^(.+) EXP per offering. (.+) Offerings to level up once.$/, '$1经验值于每个祭品。需要$2祭品以提升1级。'], //符文等
    [/^(.+) EXP per offering. (.+) Offerings to level up (.+) times.$/, '$1经验值于每个祭品。需要$2祭品以提升$3级。'], //符文等
    [/^Speed Rune Bonus: \+(.+) Accelerators, \+(.+)% Accelerators, \+(.+) Accelerator Boosts.$/, '加速符文奖励：加速器数量增加$1，加速器数量再增加$2%，加速器加成数量增加$3。'], //符文等
    [/^Duplication Rune Bonus: \+(.+) Multipliers, \+(.+)% Multipliers, \-(.+)% Tax Growth.$/, '重叠符文奖励：加倍器数量增加$1，加倍器数量再增加$2%，税收增长减缓$3%。'], //符文等
    [/^Prism Rune Bonus: All Crystal Producer production multiplied by (.+), gain \+(.+) free crystal levels.$/, '棱柱符文奖励：水晶产量变为$1倍，水晶升级免费增加$2级。'], //符文等
    [/^Thrift Rune Bonus: Delay all producer cost increases by (.+)%. Offering recycle chance: \+(.+)%. \-(.+)% Tax Growth$/, '节俭符文奖励：所有建筑成本增长减缓$1%。祭品回收概率：$2%。税收增长减缓$3%。'], //符文等
    [/^S. Intellect Rune Bonus: Obtainium gain x(.+). Ant Speed: x(.+). Base Offerings: \+(.*)$/, '卓越智慧符文奖励：难得素获取数量变为$1倍。蚂蚁速度变为$2倍。基础祭品数量：增加$3'], //符文等
    [/^Cost to buy (.+) Talisman Shards?: (.+) Obtainium and (.+) offerings.$/, '购买$1个护身符碎片的花费：$2难得素及$3祭品。'], //符文等
    [/^Cost to buy (.+) Common Fragments?: (.+) Obtainium and (.+) offerings.$/, '购买$1个普通碎片的花费：$2难得素及$3祭品。'], //符文等
    [/^Cost to buy (.+) Uncommon Fragments?: (.+) Obtainium and (.+) offerings.$/, '购买$1个罕见碎片的花费：$2难得素及$3祭品。'], //符文等
    [/^Cost to buy (.+) Rare Fragments?: (.+) Obtainium and (.+) offerings.$/, '购买$1个稀有碎片的花费：$2难得素及$3祭品。'], //符文等
    [/^Cost to buy (.+) Epic Fragments?: (.+) Obtainium and (.+) offerings.$/, '购买$1个史诗碎片的花费：$2难得素及$3祭品。'], //符文等
    [/^Cost to buy (.+) Legendary Fragments?: (.+) Obtainium and (.+) offerings.$/, '购买$1个传奇碎片的花费：$2难得素及$3祭品。'], //符文等
    [/^Cost to buy (.+) Mythical Fragments?: (.+) Obtainium and (.+) offerings.$/, '购买$1个神秘碎片的花费：$2难得素及$3祭品。'], //符文等
    [/^Gain \+(.+)% Global Speed Acceleration.$/, '全局速度增加$1%。'], //符文等
    [/^Talismans' Bonus Rune Levels \+(.+) per level$/, '护身符的符文额外等级每级多增加$1'], //符文等
    [/^No Multipliers Challenge \|\| (.+)\/(.+) Completions$/, '无加倍器挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^Goal: Gain (.+) Coins in challenge.$/, '目标：在挑战中达到$1金币。'], //挑战
    [/^(.+)% more Boosts$/, '$1%加倍器加成'], //挑战
    [/^([e\d\,\.\s]+) Boosts$/, '$1加倍器加成'], //挑战
    [/^(.+) Rune EXP \[Highest Completion\]$/, '$1符文经验值[取最高完成次数]'], //挑战
    [/^No Accelerators Challenge \|\| (.+)\/(.+) Completions$/, '无加速器挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^([e\d\,\.\s]+) Accelerators$/, '$1加速器'], //挑战
    [/^(.+)% A.Boost Power$/, '$1%加速器加成效果'], //挑战
    [/^(.+)% Accelerator Power$/, '$1%加速器效果'], //挑战
    [/^No Shards Challenge \|\| (.+)\/(.+) Completions$/, '无碎片挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^([e%\d\,\.\s]+) EXP$/, '$1经验值'], //挑战
    [/^Cost\+ Challenge \|\| (.+)\/(.+) Completions$/, '花费增加挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^Reduced Diamonds Challenge \|\| (.+)\/(.+) Completions$/, '钻石减少挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^Crystal production(.*)$/, '水晶产量倍率变为$1'], //挑战
    [/^Higher Tax Challenge \|\| (.+)\/(.+) Completions$/, '税收增加挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^Goal: Gain (.+) Mythos Shards in challenge.$/, '目标：在挑战中达到$1神话碎片。'], //挑战
    [/^(.+)% Prestige-based Offerings$/, '$1%转生相关的祭品数量'], //挑战
    [/^No Multipliers\/Accelerators Challenge \|\| (.+)\/(.+) Completions$/, '无加倍器/加速器挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^Cost\+\+ Challenge \|\| (.+)\/(.+) Completions$/, '花费暴增挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^(.+)% Transcend-based offerings$/, '$1%超越相关的祭品数量'], //挑战
    [/^No Runes Challenge \|\| (.+)\/(.+) Completions$/, '无符文挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^(.+) free levels$/, '$1免费等级'], //挑战
    [/^(.+) Ant Speed$/, '$1蚂蚁速度'], //挑战
    [/^Sadistic Challenge I \|\| (.+)\/(.+) Completions$/, '虐待狂挑战 I || 完成$1次，次数上限为$2'], //挑战
    [/^(.+) Ant ELO$/, '$1蚂蚁强度分'], //挑战
    [/^(.+)% Ant Sacrifice reward$/, '$1%蚂蚁献祭奖励'], //挑战
    [/^(.+)% Reincarnate-based offerings$/, '$1%转世相关的祭品数量'], //挑战
    [/^Reduced Ants Challenge \|\| (.+)\/(.+) Completions$/, '蚂蚁减少挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^Goal: Complete Challenge 10 \[Sadistic Challenge I\] (.+) times.$/, '目标：在挑战中完成$1次挑战10<虐待狂挑战 I>。'], //挑战
    [/^(.+) free ant levels$/, '$1免费蚂蚁等级'], //挑战
    [/^(.+) to Rune Caps$/, '$1级符文等级上限'], //挑战
    [/^No Reincarnation Challenge \|\| (.+)\/(.+) Completions$/, '无转世挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^(.+)% Obtainium$/, '$1%难得素'], //挑战
    [/^(.+)% Offerings$/, '$1%祭品'], //挑战
    [/^(.+) additional Cube Tributes$/, '$1额外的方盒贡品'], //挑战
    [/^Tax\+\+\+ Challenge \|\| (.+)\/(.+) Completions$/, '税收激增挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^(.+)% Corruption Tax$/, '$1%腐化税收'], //挑战
    [/^(.+) Talisman Level Cap$/, '$1护身符等级上限'], //挑战
    [/^(.+)% Effectiveness$/, '$1%效果'], //挑战
    [/^No Research Challenge \|\| (.+)\/(.+) Completions$/, '无研究挑战 || 完成$1次，次数上限为$2'], //挑战
    [/^(.+)% Power$/, '$1%效果'], //挑战
    [/^(.+) per Tick$/, '$1个研究于每次自动购买'], //挑战
    [/^SADISTIC CHALLENGE II \|\| (.+)\/(.+) Completions$/, '虐待狂挑战 II || 完成$1次，次数上限为$2'], //挑战
    [/^Gain (.+) Quarks for completing this challenge \[First Time Bonus\]!$/, '完成挑战后可以获得$1夸克[首次完成奖励]！'], //挑战
    [/^Completing the challenge adds (.+) to Ascension Bank and increase base Score by (.+).$/, '完成挑战后飞升库增加$1个惊奇方盒，飞升基础分数增加$2。'], //挑战
    [/^Automatically Run Chal.(.+) \[ON\]$/, '自动运行挑战$1[开]'], //挑战
    [/^Automatically Run Chal.(.+) \[OFF\]$/, '自动运行挑战$1[关]'], //挑战
    [/^ Cost: (.*) Obtainium \[\+(.+) Levels\]$/, '花费：$1难得素[可提升$2级]'], //研究
    [/^CURRENT EFFECT: ALL Ants work at (.+)x speed.$/, '当前效果：所有蚂蚁工作速度变为$1倍。'], //蚂蚁
    [/^CURRENT EFFECT: Crumb --> Coin exponent is \^(.*)$/, '当前效果：碎屑对金币产量的加成效率变为^$1'], //蚂蚁
    [/^CURRENT EFFECT: Tax growth is multiplied by(.*)$/, '当前效果：税收增长乘以$1'], //蚂蚁
    [/^CURRENT EFFECT: Accelerator Boosts \+(.*)$/, '当前效果：加速器加成增加$1'], //蚂蚁
    [/^CURRENT EFFECT: Multipliers \+(.*)$/, '当前效果：加倍器增加$1'], //蚂蚁
    [/^CURRENT EFFECT: Offerings(.*)$/, '当前效果：祭品$1'], //蚂蚁
    [/^CURRENT EFFECT: Building Costs scale (.+)% slower!$/, '当前效果：建筑成本增长速度减缓$1%！'], //蚂蚁
    [/^CURRENT EFFECT: Rune EXP is multiplied by (.+)!$/, '当前效果：符文经验乘以$1倍！'], //蚂蚁
    [/^CURRENT EFFECT: Each rune has +(.+) effective levels.$/, '当前效果：每个符文有效等级增加$1。'], //蚂蚁
    [/^CURRENT EFFECT: Obtainium(.*)$/, '当前效果：难得素$1'], //蚂蚁
    [/^CURRENT EFFECT: Sacrificing is (.+)x as effective$/, '当前效果：献祭效果变为$1倍'], //蚂蚁
    [/^CURRENT EFFECT: Global timer is sped up by a factor of(.*)$/, '当前效果：全局速率变为'], //蚂蚁
    [/^\[(.+) effective\]$/, '[有效分$1]'], //蚂蚁
    [/^(.+) \[>500 ELO\]$/, '$1[分>500]'], //蚂蚁
    [/^(.+) \[>750 ELO\]$/, '$1[分>750]'], //蚂蚁
    [/^(.+) \[>1,000 ELO\]$/, '$1[分>1000]'], //蚂蚁
    [/^(.+) \[>1,500 ELO\]$/, '$1[分>1500]'], //蚂蚁
    [/^(.+) \[>2,000 ELO\]$/, '$1[分>2000]'], //蚂蚁
    [/^(.+) \[>3,000 ELO\]$/, '$1[分>3000]'], //蚂蚁
    [/^(.+) \[>5,000 ELO\]$/, '$1[分>5000]'], //蚂蚁
    [/^(.+) Wow! Cubes \[\+(.+) Levels\]$/, '$1惊奇方盒[可提升$2级]'], //惊奇方盒
    [/^(\d+)\/(\d+) \[MAX\]$/, '$1/$2 [最大]'], //惊奇方盒
    [/^([e\,\.\d]+)\/([e\,\.\d]+) Offerings$/, '$1/$2 祭品'], //惊奇方盒
    [/^([e\,\.\d]+)\/([e\,\.\d]+) Obtainium$/, '$1/$2 难得素'], //惊奇方盒
    [/^([e\,\.\d]+)\/([e\,\.\d]+) Wow! Cubes$/, '$1/$2 惊奇方盒'], //惊奇方盒
    [/^([e\,\.\d]+)\/([e\,\.\d]+) Wow! Hypercubes$/, '$1/$2 惊奇五阶立方'], //惊奇方盒
    [/^([e\,\.\d]+)\/([e\,\.\d]+) Wow!$/, '$1/$2 惊奇'], //惊奇方盒
    [/^([e\,\.\d]+)\/([e\,\.\d]+) Platonic! Cubes$/, '$1/$2 PLATONIC方盒'], //惊奇方盒
    [/^([e\,\.\d]+)\/([e\,\.\d]+) Hepteracts of the Abyss$/, '$1/$2 惊奇七阶立方·深渊'], //惊奇方盒
    [/^Next reward type requires (.+) exponent.$/, '下一类奖励需要指数到达$1。'], //惊奇方盒
    [/^Current Score Multiplier: (.+)\/ Next Ascension Score Multiplier$/, '当前分数倍率: $1 / 下次飞升分数倍率'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Free Mult Exponent \^$/, '本次飞升，此腐化等级为$1。效果为：免费加倍器指数变为'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Free Multiplier Exponent \^$/, '下次飞升，此腐化等级将变为$1。效果为：免费加倍器指数变为'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Free Accel. Exponent \^$/, '本次飞升，此腐化等级为$1。效果为：免费加速器指数变为'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Free Accelerator Exponent \^$/, '下次飞升，此腐化等级将变为$1。效果为：免费加速器指数变为'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Time Speed is divided by(.*)$/, '本次飞升，此腐化等级为$1。效果为：时间速度除以$2'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Time is divided by(.*)/, '下次飞升，此腐化等级将变为$1。效果为：时间速度除以$2'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Challenge Exponent Reqs.$/, '本次飞升，此腐化等级为$1。效果为：挑战需求指数'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Challenge Exponent Reqs.$/, '下次飞升，此腐化等级将变为$1。效果为：挑战需求指数'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Obtainium gain \^$/, '本次飞升，此腐化等级为$1。效果为：难得素获取数量指数变为'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Obtainium gain \^$/, '下次飞升，此腐化等级将变为$1。效果为：难得素获取数量指数变为'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Diamond gain \^$/, '本次飞升，此腐化等级为$1。效果为：水晶获取数量指数变为'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Diamond gain \^$/, '下次飞升，此腐化等级将变为$1。效果为：水晶获取数量指数变为'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Ant Production \^$/, '本次飞升，此腐化等级为$1。效果为：蚂蚁产量指数变为'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Ant Production \^$/, '下次飞升，此腐化等级将变为$1。效果为：蚂蚁产量指数变为'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Offering EXP divided by(.*)$/, '本次飞升，此腐化等级为$1。效果为：祭品经验值除以$2'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Offering EXP divided by(.*)$/, '下次飞升，此腐化等级将变为$1。效果为：祭品经验值除以$2'], //腐化
    [/^On this Ascension, this corruption is level (.+). Effect: Coin Gain \^$/, '本次飞升，此腐化等级为$1。效果为：金币获取数量指数变为'], //腐化
    [/^On next Ascension, this corruption will be level (.+). Effect: Coin Gain \^$/, '下次飞升，此腐化等级将变为$1。效果为：金币获取数量指数变为'], //腐化
    [/^This Ascension gives Rune Spirit Effect \+(.+)% \/ Next Ascension Rune Spirit Effect \+$/, '当前魂灵效果加成：+$1% / 下次飞升魂灵效果加成：+'], //腐化
    [/^You were awarded (.+) quarks! Wait an hour to use this code again!$/, '您获得了$1夸克！请在一小时后再来！'], //每小时奖励代码
    [/^You guessed (.+), but the answer was (.+). Try again in an hour!$/, '您输入的数字为$1，但正确结果是$2。请在一小时后再来！'], //每小时奖励代码
    [/^([e\d\.\,]+)ms$/, '$1毫秒'], //统计数据
    [/^Currently(.*)$/, '上方输入存档名称，当前为$1'], //统计数据
    [/^([\d\.]+)s$/, '$1秒'], //历史统计
    [/^(\d+)m(\d+)s$/, '$1分$2秒'], //历史统计
    [/^(\d+)h(\d+)m(\d+)s$/, '$1时$2分$3秒'], //历史统计
    [/^([\d\,]+)d(\d+)h(\d+)m(\d+)s$/, '$1日$2时$3分$4秒'], //历史统计
    [/^([e\d\,\.]+)\/s$/, '$1/秒'], //历史统计
    [/^(.+) multi$/, '$1倍率'], //历史统计
    [/^([e\d\,\.]+) ELO$/, '$1分'], //历史统计
    [/^Score(.*)$/, '分数$1'], //历史统计
    [/^Gain (.+) Offerings.$/, '获得$1祭品。'], //商店
    [/^Gain (.+) Obtainium.$/, '获得$1难得素。'], //商店
    [/^CURRENT Effect: Offering gain \+(.+)%!$/, '当前效果：祭品获取数量增加$1%。'], //商店
    [/^CURRENT Effect: Per 10 seconds, pour (.+) Offerings. \+(.+)% Offerings.$/, '当前效果：每秒最多使符文增加$1级。祭品获取数量增加$2%。'], //商店
    [/^CURRENT Effect: Obtainium gain \+(.+)%!$/, '当前效果：难得素获取数量增加$1%。'], //商店
    [/^CURRENT Effect: Try to upgrade research each reincarnation, and gain \+(.+)% more Obtainium.$/, '当前效果：每次转世都尝试研究，并且难得素获取数量增加$1%。'], //商店
    [/^CURRENT Effect: Obtainium and Offerings increased by (.+)%.$/, '当前效果：难得素和祭品的获取数量增加$1%。'], //商店
    [/^CURRENT Effect: Reincarnation Challenges may be completed an additional (.+) times.$/, '当前效果：转世挑战完成次数上限额外增加$1次。'], //商店
    [/^CURRENT Effect: Challenge 10 Exponent Requirement reduced by (.+)M.$/, '当前效果：挑战10的基础目标减少1e$1M。'], //商店
    [/^CURRENT Effect: Ascensions give  \+(.+)% cubes.$/, '当前效果：飞升的方盒获取数量增加$1%。'], //商店
]);