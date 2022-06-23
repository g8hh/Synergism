import { format, player } from './Synergism';
import { Globals as G } from './Variables';
import { Alert, Notification, revealStuff } from './UpdateHTML';
import { Synergism } from './Events';
import { sumContents } from './Utility';
import Decimal from 'break_infinity.js';
import { CalcCorruptionStuff, calculateTimeAcceleration } from './Calculate';
import { DOMCacheGetOrSet } from './Cache/DOM';

export const achievementpointvalues = [0,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    2, 8, 10, 2, 8, 10, 10,
    2, 8, 10, 10, 10, 10, 10,
    2, 4, 6, 8, 10, 10, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    1, 2, 4, 6, 8, 9, 10,
    10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
    20, 20, 20, 40, 60, 60, 100,
    20, 20, 40, 40, 60, 60, 100,
    20, 20, 40, 40, 60, 60, 100,
    20, 40, 40, 40, 60, 60, 100,
    40, 40, 40, 60, 60, 100, 100,
    40, 40, 60, 60, 100, 100, 100,
    20, 40, 40, 60, 60, 100, 100,
    40, 60, 100, 60, 100, 100, 40,
    40, 40, 40, 40, 40, 40, 40,
    40, 40, 40, 40, 100, 100, 0,
    50, 75, 75, 75, 100, 100, 150,
    50, 75, 75, 75, 100, 100, 150,
    50, 75, 75, 75, 100, 100, 150,
    10, 10, 20, 20, 30, 40, 50
];

export const totalachievementpoints = achievementpointvalues.reduce((a, b) => a + b, 0);

const adesc = {
    adesc1: '[1] A Loyal Employee: Hire your first worker.',
    adesc2: '[2] Small Business: Hire 10 workers.',
    adesc3: '[3] Now we\'re synergizing!: Hire 100 workers.',
    adesc4: '[4] Gaining Redundancies: Hire 1,000 workers.',
    adesc5: '[5] A cog in the machine: Hire 5,000 workers.',
    adesc6: '[6] A nail in the machine: Hire 10,000 workers.',
    adesc7: '[7] Are we even in the machine anymore?: Hire 20,000 workers.',
    adesc8: '[8] STONKS!!!: Purchase 1 Investment.',
    adesc9: '[9] Planning ahead: Purchase 10 Investments.',
    adesc10: '[10] Inside Trading: Purchase 100 Investments.',
    adesc11: '[11] Outside Trading?: Purchase 1,000 Investments.',
    adesc12: '[12] Market Takeover: Purchase 5,000 Investments.',
    adesc13: '[13] Trickle-Down Economics: Purchase 10,000 Investments.',
    adesc14: '[14] Eliminated Regulation: Purchase 20,000 Investments.',
    adesc15: '[15] Stationery!: Build 1 Printer.',
    adesc16: '[16] Printing Press: Build 10 Printers.',
    adesc17: '[17] It prints free money!: Build 100 Printers.',
    adesc18: '[18] Solving Our Debts: Build 1,000 Printers.',
    adesc19: '[19] Monopolizing the market: Build 5,000 Printers.',
    adesc20: '[20] We\'re running out of Ink!: Build 10,000 Printers.',
    adesc21: '[21] 3D-printing the universe: Build 20,000 Printers.',
    adesc22: '[22] A national treasure: Establish 1 Coin Mint.',
    adesc23: '[23] Now with competition!: Establish 10 Coin Mints.',
    adesc24: '[24] Counterfeiting with Style!: Establish 100 Coin Mints.',
    adesc25: '[25] Why do we need all these?: Establish 1000 Coin Mints.',
    adesc26: '[26] No really, why??: Establish 5,000 Coin Mints.',
    adesc27: '[27] Is no one to stop us???: Establish 10,000 Coin Mints.',
    adesc28: '[28] Oh well, time to mint: Establish 20,000 Coin Mints.',
    adesc29: '[29] Newton\'s Apprentice: Create 1 Alchemy.',
    adesc30: '[30] Lab Work: Create 10 Alchemies.',
    adesc31: '[31] Satanic Becomings: Create 66 Alchemies.',
    adesc32: '[32] Satan Incarnate: Create 666 Alchemies.',
    adesc33: '[33] Is this more demonic?: Create 6,666 Alchemies.',
    adesc34: '[34] Golden Paradise: Create 17,777 Alchemies.',
    adesc35: '[35] Unlocking secrets to the world: Create 42,777 Alchemies.',
    adesc36: '[36] Leveling up: Prestige for at least 1 Diamond.',
    adesc37: '[37] High-Tiered: Prestige for at least 1e+6 Diamonds.',
    adesc38: '[38] Highly Regarded: Prestige for at least 1e+100 Diamonds.',
    adesc39: '[39] Prestigious: Prestige for at least 1e+1000 Diamonds.',
    adesc40: '[40] Legendary: Prestige for at least 1e+10000 Diamonds.',
    adesc41: '[41] Divine: Prestige for at least 1e+77777 Diamonds.',
    adesc42: '[42] Perfectly Respected: Prestige for at least 1e+250000 Diamonds.',
    adesc43: '[43] A Simple Detour: Transcend for at least 1 Mythos.',
    adesc44: '[44] Tunnel Vision: Transcend for at least 1e+6 Mythos.',
    adesc45: '[45] Risen from the Ashes: Transcend for at least 1e+50 Mythos.',
    adesc46: '[46] Paradigm Shift: Transcend for at least 1e+308 Mythos.',
    adesc47: '[47] Preparation: Transcend for at least 1e+2000 Mythos.',
    adesc48: '[48] Revising the Plan: Transcend for at least 1e+25000 Mythos.',
    adesc49: '[49] Leaving the Universe: Transcend for at least 1e+100000 Mythos.',
    adesc50: '[50] Going Quantum: Reincarnate for at least 1 Particle.',
    adesc51: '[51] Tunneling Vision: Reincarnate for at least 100,000 Particles.',
    adesc52: '[52] Simulating the World: Reincarnate for at least 1e+30 Particles.',
    adesc53: '[53] Multidimensional Creation: Reincarnate for at least 1e+200 Particles.',
    adesc54: '[54] Lepton Dance: Reincarnate for at least 1e+1500 Particles.',
    adesc55: '[55] Do we have enough yet?: Reincarnate for at least 1e+5000 Particles.',
    adesc56: '[56] I Feel Luck in My Cells: Reincarnate for at least 1e+7777 Particles.',
    adesc57: '[57] One Way Only: Prestige without buying multipliers.',
    adesc58: '[58] Authentic Shifting: Transcend without having bought a multiplier.',
    adesc59: '[59] The Singularity: Reincarnate without having bought a multiplier.',
    adesc60: '[60] Gotta go SLOW!: Prestige without buying Accelerators or Accelerator Boosts.',
    adesc61: '[61] I\'m really going slow: Transcend without having bought Accelerators or Boosts.',
    adesc62: '[62] Are we there yet?: Reincarnate without having bought Accelerators or Boosts.',
    adesc63: '[63] A careful search for Diamonds: Get 1e120,000 Coins in [Reduced Diamonds] without buying Accelerators or Boosts.',
    adesc64: '[64] Very Based: Prestige without purchasing Coin Upgrades.',
    adesc65: '[65] Miser: Transcend without purchasing Coin Upgrades.',
    adesc66: '[66] True Miser: Transcend without purchasing Coin or Diamond Upgrades.',
    adesc67: '[67] Coinless Pursuit: Reincarnate without purchasing Coin Upgrades.',
    adesc68: '[68] Diamonds don\'t matter to me!: Reincarnate without purchasing Coin or Diamond Upgrades.',
    adesc69: '[69] Leave nothing behind: Reincarnate without purchasing Coin, Diamond or Mythos Upgrades.',
    adesc70: '[70] Leave NOTHING behind.: Reincarnate without purchasing Coin, Diamond, Mythos, or Generator Upgrades.',
    adesc71: '[71] Out of Order: Buy Generator Upgrade Row 1, #2 first in a transcension (IV -> III)',
    adesc72: '[72] More Out of Order: Buy Generator Upgrade Row 1, #3 first in a transcension (III -> II)',
    adesc73: '[73] Four\'s a Company: Buy Generator Upgrade Row 1, #4 first in a transcension (II -> I)',
    adesc74: '[74] Five\'s a Croud: Buy Generator Upgrade Row 1, #5 first in a transcension (I -> V)',
    adesc75: '[75] Vaseline without the Machine: Exit [No Multiplier] with at least 1e1000 coins and without any of the row 1 generator upgrades.',
    adesc76: '[76] Rage against the Machine: Exit [No Accelerator] with at least 1e1000 coins and without any of the row 1 generator upgrades.',
    adesc77: '[77] Amish Paradise: Exit [No Shards] with at least 1e99,999 coins and without any of the row 1 generator upgrades.',
    adesc78: '[78] Single-Cell: Complete [No Multiplier] once.',
    adesc79: '[79] Solidarity: Complete [No Multiplier] three times.',
    adesc80: '[80] Duplication-Free!: Complete [No Multiplier] five times.',
    adesc81: '[81] Multitasking Challenged: Complete [No Multiplier] ten times.',
    adesc82: '[82] No Deaths: Complete [No Multiplier] twenty times.',
    adesc83: '[83] Population One: Complete [No Multiplier] fifty times.',
    adesc84: '[84] Insert Another Token: Complete [No Multiplier] seventy-five times.',
    adesc85: '[85] Slow Start: Complete [No Accelerator] once',
    adesc86: '[86] Respawn Rate -12%: Complete [No Accelerator] three times.',
    adesc87: '[87] Putting the Breaks On: Complete [No Accelerator] five times.',
    adesc88: '[88] Racing a Sloth...: Complete [No Accelerator] ten times.',
    adesc89: '[89] ... and Losing.: Complete [No Accelerator] twenty times.',
    adesc90: '[90] Planck Distance Traveled: Complete [No Accelerator] fifty times.',
    adesc91: '[91] Inverse-Ackermann Growth: Complete [No Accelerator] seventy-five times.',
    adesc92: '[92] Intact: Complete [No Shards] once.',
    adesc93: '[93] Augments are Stupid!: Complete [No Shards] three times.',
    adesc94: '[94] Grandmasters are Brilliant!: Complete [No Shards] five times.',
    adesc95: '[95] Gotta get those Grandmasters Stronger: Complete [No Shards] ten times.',
    adesc96: '[96] Summoning Enhancements: Complete [No Shards] twenty times.',
    adesc97: '[97] Magic 99/99: Complete [No Shards] fifty times.',
    adesc98: '[98] Perfect Foresight: Complete [No Shards] seventy-five times.',
    adesc99: '[99] Inflation: Complete [Cost+] once.',
    adesc100: '[100] Hyperinflation: Complete [Cost+] three times.',
    adesc101: '[101] Market Bubble: Complete [Cost+] five times.',
    adesc102: '[102] Bull Market: Complete [Cost+] ten times.',
    adesc103: '[103] Wealth Inequality: Complete [Cost+] twenty times.',
    adesc104: '[104] Severe Overpay: Complete [Cost+] fifty times.',
    adesc105: '[105] Societal Collapse: Complete [Cost+] seventy-five times.',
    adesc106: '[106] Excavation: Complete [Reduced Diamonds] once.',
    adesc107: '[107] Digging Deep: Complete [Reduced Diamonds] three times.',
    adesc108: '[108] Frack As Needed: Complete [Reduced Diamonds] five times.',
    adesc109: '[109] Unobtainium Pickaxe: Complete [Reduced Diamonds] ten times.',
    adesc110: '[110] Fortune III: Complete [Reduced Diamonds] twenty times.',
    adesc111: '[111] Every kiss...: Complete [Reduced Diamonds] fifty times.',
    adesc112: '[112] ...begins with K.: Complete [Reduced Diamonds] seventy-five times.',
    adesc113: '[113] Tax evasion!: Complete {[Tax+]} once.',
    adesc114: '[114] Keeping up with the Joneses: Complete {[Tax+]} twice.',
    adesc115: '[115] Offshore deposits: Complete {[Tax+]} three times.',
    adesc116: '[116] Bribing officials: Complete {[Tax+]} five times.',
    adesc117: '[117] Becoming President: Complete {[Tax+]} ten times.',
    adesc118: '[118] Charitable Donation: Complete {[Tax+]} fifteen times.',
    adesc119: '[119] IRS Audit: Complete {[Tax+]} twenty-five times.',
    adesc120: '[120] Is there anybody in there?: Complete {[No Accelerator/Multiplier]} once.',
    adesc121: '[121] Human being: Complete {[No Accelerator/Multiplier]} twice.',
    adesc122: '[122] Interdimensional: Complete {[No Accelerator/Multiplier]} three times.',
    adesc123: '[123] A slow nickel: Complete {[No Accelerator/Multiplier]} five times.',
    adesc124: '[124] Multipliers don\'t even work 0/5: Complete {[No Accelerator/Multiplier]} ten times.',
    adesc125: '[125] Accelerators don\'t even work -5/5: Complete {[No Accelerator/Multiplier]} fifteen times.',
    adesc126: '[126] ACCELERATOR BOOSTS DON\'T EVEN WORK -100/5: Complete {[No Accelerator/Multiplier]} twenty-five times.',
    adesc127: '[127] I hate this challenge: Complete Cost++ Once.',
    adesc128: '[128] A costly mistake: Complete Cost++ Twice.',
    adesc129: '[129] Impetus: Complete Cost++ Three Times.',
    adesc130: '[130] Are you broke yet? Complete Cost++ Five Times.',
    adesc131: '[131] The world of Finance: Complete Cost++ Ten Times.',
    adesc132: '[132] Marginal Gains: Complete Cost++ Twenty Times.',
    adesc133: '[133] I buy these: Complete Cost++ Twenty-Five Times.',
    adesc134: '[134] Agnostic: Complete No Runes Once.',
    adesc135: '[135] Ant-i Runes: Complete No Runes Twice.',
    adesc136: '[136] Isn\'t it getting tiresome?: Complete No Runes Three Times.',
    adesc137: '[137] Machine does not accept offerings: Complete No Runes Five Times.',
    adesc138: '[138] Runes Suck 1/5: Complete No Runes Ten Times.',
    adesc139: '[139] I didn\'t even notice Prism was gone: Complete No Runes Twenty Times.',
    adesc140: '[140] Atheist: Complete No Runes Twenty-Five Times.',
    adesc141: '[141] Sadism: Complete {[Sadistic I]} Once.',
    adesc142: '[142] Masochism: Complete {[Sadistic I]} Twice.',
    adesc143: '[143] Insanity: Complete {[Sadistic I]} Three Times.',
    adesc144: '[144] How? Complete {[Sadistic I]} Five Times.',
    adesc145: '[145] Why? Complete {[Sadistic I]} Ten Times.',
    adesc146: '[146] Descend: Complete {[Sadistic I]} Twenty Times.',
    adesc147: '[147] End of the Universe: Complete {[Sadistic I]} Twenty-Five Times.',
    adesc148: '[148] Gas gas gas: Purchase 5 Accelerators.',
    adesc149: '[149] 0 to 25: Purchase 25 Accelerators.',
    adesc150: '[150] 0 to 100: Purchase 100 Accelerators',
    adesc151: '[151] Highway to Hell: Purchase 666 Accelerators.',
    adesc152: '[152] Perhaps you should brake: Purchase 2,000 Accelerators.',
    adesc153: '[153] Exit the vehicle now!: Purchase 12,500 Accelerators.',
    adesc154: '[154] Faster than light: Purchase 100,000 Accelerators.',
    adesc155: '[155] I\'ve been duped!: Purchase 2 Multipliers.',
    adesc156: '[156] Funhouse Mirrors: Purchase 20 Multipliers.',
    adesc157: '[157] Friend of binary: Purchase 100 Multipliers.',
    adesc158: '[158] Feeling the cost growth yet?: Purchase 500 Multipliers.',
    adesc159: '[159] Perhaps you\'ll feel the cost now: Purchase 2,000 Multipliers.',
    adesc160: '[160] Exponential Synergy: Purchase 12,500 Multipliers.',
    adesc161: '[161] Cloned: Purchase 100,000 Multipliers.',
    adesc162: '[162] Jerk > 0: Purchase 2 Accelerator Boosts.',
    adesc163: '[163] Can\'t the speedometer move any faster?: Purchase 10 Accelerator Boosts.',
    adesc164: '[164] 50 G rotations: Purchase 50 Accelerator Boosts.',
    adesc165: '[165] Dematerialize: Purchase 200 Accelerator Boosts.',
    adesc166: '[166] Breaking the laws of Physics: Purchase 1,000 Accelerator Boosts.',
    adesc167: '[167] Decayed Realism: Purchase 5,000 Accelerator Boosts.',
    adesc168: '[168] Kinda fast: Purchase 15,000 Accelerator Boosts.',
    adesc169: '[169] The Galactic Feast: Obtain 3 Galactic Crumbs.',
    adesc170: '[170] Only the finest: Obtain 100,000 Galactic Crumbs.',
    adesc171: '[171] Six-Course Meal: Obtain 666,666,666 Galactic Crumbs.',
    adesc172: '[172] Accumulation of Food: Obtain 1e20 Galactic Crumbs.',
    adesc173: '[173] Cookie Clicking: Obtain 1e40 Galactic Crumbs.',
    adesc174: '[174] Unlimited Bread Sticks!: Obtain 1e500 Galactic Crumbs.',
    adesc175: '[175] Restaurant at the end of the Universe: Obtain 1e2500 Galactic Crumbs.',
    adesc176: '[176] Ant-icipation!: Amass a 2x Ant Multiplier through sacrifice and own a Tier 2 ant.',
    adesc177: '[177] Ant-ecedent: Amass a 6x Ant Multiplier through sacrifice and own a Tier 3 ant.',
    adesc178: '[178] Ants are friends, not food!: Amass a 20x Ant Multiplier through sacrifice and own a Tier 4 Ant.',
    adesc179: '[179] Ant Devil?: Amass a 100x Ant Multiplier through sacrifice and own a Tier 5 Ant.',
    adesc180: '[180] The world\'s best chef: Amass a 500x Ant Multiplier through sacrifice and own a Tier 6 Ant.',
    adesc181: '[181] 6 Michelin Stars: Amass a 6,666x Ant Multiplier through sacrifice and own a Tier 7 Ant.',
    adesc182: '[182] Keys to the Restaurant at the end of the Universe: Amass a 77,777x Ant Multiplier through sacrifice and own a Tier 8 Ant.',
    adesc183: '[183] Up: Ascend Once.',
    adesc184: '[184] Double-Up: Ascend Twice.',
    adesc185: '[185] Give me Ten!: Ascend Ten Times.',
    adesc186: '[186] Give me a Hundred: Ascend 100 Times.',
    adesc187: '[187] Give me a Thousand: Ascend 1,000 Times.',
    adesc188: '[188] Give me some arbitrary number I: Ascend 14,142 Times.',
    adesc189: '[189] Give me some arbitrary number II: Ascend 141,421 Times.',
    adesc190: '[190] Now that\'s what I call getting some Pi!: Attain a constant of 3.14.',
    adesc191: '[191] One in a million: Attain a constant of 1,000,000 [1e6].',
    adesc192: '[192] A number: Attain a constant of 4.32e10.',
    adesc193: '[193] The coolest of numbers: Attain a constant of 6.9e21.',
    adesc194: '[194] Planck^(-1): Attain a constant of 1.509e33.',
    adesc195: '[195] Epsilon > a lot: Attain a constant of 1e66.',
    adesc196: '[196] NUM_MAX: Attain a constant of 1.8e308.',
    adesc197: '[197] Casualties: Clear \'Reduced Ants\' challenge once.',
    adesc198: '[198] Fatalities: Clear \'Reduced Ants\' challenge twice.',
    adesc199: '[199] Destruction: Clear \'Reduced Ants\' challenge three times.',
    adesc200: '[200] War, what is it good for?: Clear \'Reduced Ants\' challenge five times.',
    adesc201: '[201] Absolutely everything.: Clear \'Reduced Ants\' challenge ten times.',
    adesc202: '[202] Perfect Storm: Clear \'Reduced Ants\' challenge twenty times.',
    adesc203: '[203] Immaculate Storm: Clear \'Reduced Ants\' challenge thirty times.',
    adesc204: '[204] I didn\'t need those stupid reincarnations anyway!: Clear \'No Reincarnation\' challenge once.',
    adesc205: '[205] [x1,x2,0,x3]: Clear \'No Reincarnation\' challenge twice.',
    adesc206: '[206] Nonmetaphysical: Clear \'No Reincarnation\' challenge three times.',
    adesc207: '[207] Living alone: Clear \'No Reincarnation\' challenge five times.',
    adesc208: '[208] DM me on discord if you read these names: Clear \'No Reincarnation\' challenge ten times.',
    adesc209: '[209] Yeah: Clear \'No Reincarnation\' challenge twenty times.',
    adesc210: '[210] Science! Clear \'No Reincarnation\' challenge thirty times.',
    adesc211: '[211] The IRS strikes back: Clear \'Tax+++\' challenge once.',
    adesc212: '[212] Fiscal Policy: Clear \'Tax+++\' challenge twice.',
    adesc213: '[213] Economic Boom: Clear \'Tax+++\' challenge three times.',
    adesc214: '[214] Ant-onomics: Clear \'Tax+++\' challenge five times.',
    adesc215: '[215] \'Wow Platonic Tax sucks 1/5\': Clear \'Tax+++\' challenge ten times.',
    adesc216: '[216] Haha this is hard for some reason: Clear \'Tax+++\' challenge twenty times.',
    adesc217: '[217] Taxes are hard: Clear \'Tax+++\' challenge thirty times.',
    adesc218: '[218] Shiny Blue Rock: Clear \'No Research\' once.',
    adesc219: '[219] It\'s like Avatar: Clear \'No Research\' twice.',
    adesc220: '[220] It\'s like Unobtainium: Clear \'No Research\' three times.',
    adesc221: '[221] It\'s like a thing: Clear \'No Research\' five times.',
    adesc222: '[222] It\'s like: Clear \'No Research\' ten times.',
    adesc223: '[223] It\'s: Clear \'No Research\' twenty times.',
    adesc224: '[224] It: Clear \'No Research\' thirty times.',
    adesc225: '[225] Pretty Corrupt: Clear an Ascension with above 100,000 score.',
    adesc226: '[226] Bought out: Clear an Ascension with above 1 million score.',
    adesc227: '[227] Utterly Corrupt: Clear an Ascension with above 10 million score.',
    adesc228: '[228] Antitrust: Clear an Ascension with above 100 million score.',
    adesc229: '[229] Ant-i-trust: Clear an Ascension with above 1 billion score.',
    adesc230: '[230] This is pretty unfair: Clear an Ascension with above 5 billion score.',
    adesc231: '[231] Antichrist: Clear an Ascension with above 25 billion score.',
    adesc232: '[232] Highly Blessed: Level your Speed Rune blessing to 100,000.',
    adesc233: '[233] Divine Blessing: Level your Speed Rune blessing to 100,000,000.',
    adesc234: '[234] Blessing III: Level your Speed Rune blessing to 100 billion.',
    adesc235: '[235] Spirit I: Level your Speed Spirit to 1 Million.',
    adesc236: '[236] Spirit II: Level your Speed Spirit to 1 Billion.',
    adesc237: '[237] Spirit III: Level your Speed Spirit to 1 Trillion.',
    adesc238: '[238] Three-folded: [Hint: you may want to look into the inception]',
    adesc239: '[239] Seeing red: [Hint: you may need a lot of red items]',
    adesc240: '[240] ASCENDED: [Hint: you may need a LOT of ascensions OR an particularly amazing ascension]',
    adesc241: '[241] Aesop: [Hint: you gotta be pretty dang slow]',
    adesc242: '[242] Aesop\'s Revenge: [Hint: you gotta be pretty dang fast]',
    adesc243: '[243] Unsmith: [Hint: unsmith emoji :unsmith: can be a pretty good input]',
    adesc244: '[244] Smith: [Hint: :antismith: looks promising as well]',
    adesc245: '[245] BLESSED: [Hint: Your Speed Blessing best be unreasonably high!]',
    adesc246: '[246] Why? [Hint: Sometimes even 1 in over a Trillion counts!]',
    adesc247: '[247] Challenging! [Hint: Challenge 11 is calling your name, but with even less ants]',
    adesc248: '[248] Seeing Red but not Blue: [Hint: Can you get red stuff without getting blue stuff?]',
    adesc249: '[249] Overtaxed: [Hint: It might pay not to read!]',
    adesc250: '[250] The Thousand Suns: [Hint: You need to fully research into becoming GOD]',
    adesc251: '[251] The Thousand Moons: [Hint: You may need to cube yourself up]',
    adesc252: '[252] Ultimate: Complete \'SADISTIC II\' challenge.',
    adesc253: '[253] Platonicism: Clear an ascension with 1e12 score.',
    adesc254: '[254] That\'s a handful!: Clear an ascension with 1e14 score.',
    adesc255: '[255] The game where everything is made up: Clear an ascension with 1e17 score.',
    adesc256: '[256] ... and the points don\'t matter: Clear an ascension with 2e18 score.',
    adesc257: '[257] Arguably moral: Clear an ascension with 4e19 score.',
    adesc258: '[258] Khafra\'s Personal Best: Clear an ascension with 1e21 score.',
    adesc259: '[259] 100 million million million!: Clear an ascension with 1e23 score.',
    adesc260: '[260] Highly Dimensional Being: Ascend a total of 10 million times.',
    adesc261: '[261] Ant God\'s upheaval: Ascend a total of 100 million times.',
    adesc262: '[262] Did you forget about ant god?: Ascend a total of 2 billion times.',
    adesc263: '[263] Ant god is unemployed thanks to you: Ascend a total of 40 billion times.',
    adesc264: '[264] I hope you\'re happy with yourself: Ascend a total of 800 billion times.',
    adesc265: '[265] Oh well: Ascend a total of 16 trillion times.',
    adesc266: '[266] Keep up the gradual numerical increase: Ascend a total of 100 trillion times.',
    adesc267: '[267] Eigenvalued: Achieve a constant of 1e1,000.',
    adesc268: '[268] Achieve Mathematics: Achieve a constant of 1e5,000.',
    adesc269: '[269] Ramsay (5,5): Achieve a constant of 1e15,000.',
    adesc270: '[270] What comes after this?: Achieve a constant of 1e50,000.',
    adesc271: '[271] LARGE BOY: Achieve a constant of 1e100,000.',
    adesc272: '[272] LARGER BOY: Achieve a constant of 1e300,000.',
    adesc273: '[273] LARGEST BOY: Achieve a constant of 1e1,000,000.',
    adesc274: '[274] Power Creep: Singularity 1 time.',
    adesc275: '[275] Have you enough cubes?: Singularity 2 times.',
    adesc276: '[276] Singularity: Singularity 3 times.',
    adesc277: '[277] SingularRity: Singularity 4 times.',
    adesc278: '[278] SiINguLaRrRity: Singularity 5 times.',
    adesc279: '[279] SiIINGuLArRrIiTyY: Singularity 7 times.',
    adesc280: '[280] Inception: Singularity 10 times.'

}

export const areward = (i: number): string => {
    // May 22, 2021: Allow achievement bonus values display directly in the description
    // Using areward as const object did not allow ${player object}

    //Effective score is 3rd index
    const corr = CalcCorruptionStuff();

    const descs: {[key: number]: string} = {
        3: '增加0.05%的加速器效果。',
        4: '超越或进入挑战后直接解锁工人自动购买。',
        5: '每拥有500个工人，就获得1个加速器。',
        6: '每拥有1000个工人，就获得1个加倍器。',
        7: '每拥有2000个工人，就获得1个加速器加成。',
        10: '增加0.10%的加速器效果。',
        11: '超越或进入挑战后直接解锁投资自动购买。',
        12: '每拥有500个投资，就获得1个加速器。',
        13: '每拥有1000个投资，就获得1个加倍器。',
        14: '每拥有2000个投资，就获得1个加速器加成。',
        17: '增加0.15%的加速器效果。',
        18: '超越或进入挑战后直接解锁打印机自动购买。',
        19: '每拥有500台打印机，就获得1个加速器。',
        20: '每拥有1000台打印机，就获得1个加倍器。',
        21: '每拥有2000台打印机，就获得1个加速器加成。',
        24: '增加0.20%的加速器效果。',
        25: '超越或进入挑战后直接解锁铸币厂自动购买。',
        26: '每拥有500个铸币厂，就获得1个加速器。',
        27: '每拥有1000个铸币厂，就获得1个加倍器。',
        28: '每拥有2000个铸币厂，就获得1个加速器加成。',
        31: '增加0.25%的加速器效果。',
        32: '超越或进入挑战后直接解锁炼金术自动购买。',
        33: '重置时多获得10%祭品 || 每拥有500个炼金术，就获得1个加速器！',
        34: '重置时多获得15%祭品(效果叠乘！) || 每拥有1000个炼金术，就获得1个加倍器！',
        35: '重置时多获得25%祭品(效果叠乘！) || 每拥有2000个炼金术，就获得1个加速器加成！',
        36: '水晶产量翻倍。',
        37: '水晶产量乘以(当前钻石数量的常用对数)。根据花费的时间，转生可获得更多祭品(在1800秒时达到最大，此时多获得15祭品)',
        38: '解锁重叠符文！',
        43: '在任何屏幕上都可以购买加速器加成了。解锁自动转生特性。',
        44: '解锁棱柱符文！根据花费的时间，超越可获得更多祭品(在1800秒时达到最大，此时多获得15祭品)',
        45: '至多减少税收增长5%，此数值与转生的时长有关。',
        46: '再次至多减少税收增长5%，此数值与转生的时长有关。',
        47: '再次至多减少税收增长10%，此数值与转生的时长有关！',
        50: '解锁原子的生产建筑，另外还解锁了3个非常难的挑战！转世可以获得2倍粒子！',
        51: '手动转世可以多获得4难得素(除了时间倍率以外，不受其他倍率影响)！',
        52: '根据花费的时间，转世可获得更多祭品(在1800秒时达到最大，此时多获得25祭品)',
        53: '每级符文使难得素的获取数量增加0.125%，数值相互叠加。',
        57: '获得1个加倍器，并且多获得1%加倍器！',
        58: '再获得1个加倍器，并且再多获得1%加倍器！',
        59: '再获得1个加倍器，并且再多获得1%加倍器！',
        60: '获得2个加速器，并且多获得1%加速器！',
        61: '再获得2个加速器，并且再多获得1%加速器！',
        62: '再获得2个加速器，并且再多获得1%加速器！',
        71: '所有发生器升级的转换指数增加1%！',
        72: '所有发生器升级的转换指数增加1%！',
        73: '所有发生器升级的转换指数增加1%！',
        74: '所有发生器升级的转换指数增加1%！',
        75: '所有发生器升级的转换指数增加1%！',
        76: '所有发生器升级的转换指数增加1%！',
        77: '所有发生器升级的转换指数增加1%！它们已经在超速运转了！',
        78: '超越或进入挑战后直接获得1个炼油厂并解锁炼油厂自动购买。',
        79: '自动购买第一个水晶升级！',
        80: '超越或进入挑战后直接解锁加倍器自动购买。祭品回收概率增加5%。',
        82: '税收增长减缓4%。',
        84: '难得素的获取数量增加1%(与其他成就的同类效果叠加)',
        85: '超越或进入挑战后直接获得1个煤电厂并解锁煤电厂自动购买。',
        86: '自动购买第二个水晶升级！',
        87: '超越或进入挑战后直接解锁加速器自动购买。祭品回收概率增加5%。',
        89: '税收增长减缓4%。',
        91: '难得素的获取数量增加3%(与其他成就的同类效果叠加)',
        92: '超越或进入挑战后直接获得1个煤钻机并解锁煤钻机自动购买。',
        93: '自动购买第三个水晶升级！',
        94: '祭品回收概率增加5%。',
        96: '税收增长减缓4%。',
        98: '难得素的获取数量增加5%(与其他成就的同类效果叠加)',
        99: '超越或进入挑战后直接获得1个十字镐并解锁十字镐自动购买。',
        100: '自动购买第四个水晶升级！',
        101: '祭品回收概率增加5%。',
        102: '解锁节俭符文！',
        103: '税收增长减缓4%。',
        105: '难得素的获取数量增加7%(与其他成就的同类效果叠加)',
        106: '超越或进入挑战后直接获得1个潘多拉魔盒并解锁潘多拉魔盒自动购买。',
        107: '自动购买第五个水晶升级！',
        108: '祭品回收概率增加5%。',
        110: '税收增长减缓4%。',
        112: '难得素的获取数量增加9%(与其他成就的同类效果叠加)',
        115: '祭品回收概率增加5%。',
        117: '税收增长减缓5.66%。',
        118: `每完成一次任意转世挑战，税收增长就减缓0.75%，效果叠乘。效果：${format(Math.pow(0.9925, player.challengecompletions[6] + player.challengecompletions[7] + player.challengecompletions[8] + player.challengecompletions[9] + player.challengecompletions[10]), 4)}倍`,
        119: '难得素的获取数量增加11%。某个地方解锁了一个很不错的饰品……',
        122: '祭品回收概率增加7.5%。',
        124: '税收增长减缓5.66%。解锁5个非常强大的研究！',
        126: '难得素的获取数量增加13%。您得到了一个纪念这一刻的饰品！',
        127: '解锁20个极贵也极强的研究。解锁[蚁丘]特性！',
        128: '难得素获取数量变为1.5倍！',
        129: '祭品回收概率增加7.5%。难得素获取数量变为1.25倍！',
        131: '税收增长减缓5.66%。',
        132: '献祭奖励永久增加25%！',
        133: '难得素的获取数量增加15%。获得米达斯的一份礼物。',
        134: '解锁10个极贵也极强的研究。解锁符文选项卡下的<<护身符>>面板！',
        135: '护身符的每级加成效果增加0.02。',
        136: '护身符的每级加成效果再增加0.02。',
        137: '献祭奖励永久增加25%！',
        140: '难得素的获取数量增加17%。懒得拿不泄露护身符来开玩笑了[您可以获得一个新的护身符]',
        141: '解锁下一阶的重置！',
        147: '难得素的获取数量增加19%(成就同类型加成总和为100%！)。获得博识护身符！',
        169: `所有蚂蚁的速度都乘以${format(Decimal.log(player.antPoints.add(10), 10), 2)}`,
        171: '所有蚂蚁的速度增加16.666%！',
        172: '转世持续越久就可以获得越多蚂蚁(2小时的时候速度达到最大)',
        173: '解锁蚂蚁献祭，重置蚂蚁数量和蚂蚁升级以获取强大的奖励！自动购买工蚁。',
        174: `献祭获得的蚂蚁倍率乘以另一个对数倍率：×${format(0.4 * Decimal.log(player.antPoints.add(1), 10), 2)}`,
        176: '解锁T2蚂蚁自动购买，并且可以自动购买创始蚁和财富蚁！基础蚂蚁强度分增加25。',
        177: '解锁T3蚂蚁自动购买，并且可以自动购买示威蚁！基础蚂蚁强度分增加50。',
        178: '解锁T4蚂蚁自动购买，并且可以自动购买迅捷蚁和加倍蚁！基础蚂蚁强度分增加75。',
        179: '解锁T5蚂蚁自动购买，并且可以自动购买献祭蚁！基础蚂蚁强度分增加100。',
        180: '解锁T6蚂蚁自动购买，并且可以自动购买建筑蚁和博学蚁！基础蚂蚁强度分增加1%。',
        181: '解锁T7蚂蚁自动购买，并且可以自动购买预言蚁！基础蚂蚁强度分增加2%。',
        182: '解锁T8蚂蚁自动购买，并且可以自动购买科学蚁和命匣蚁！基础蚂蚁强度分增加3%。',
        187: `根据您的飞升分数，使飞升的方盒及立方倍率乘以${format(Math.max(1, Math.log10(corr[3]+1) - 7), 2)}。另外，祭品获取数量增加${format(Math.min(100, player.ascensionCount / 10000), 2)}%[与飞升次数有关，在1000000次飞升时达到上限：100%]`,
        188: `飞升时长超过10秒时，本次飞升使飞升次数增加100次。另外，难得素获取数量增加${format(Math.min(100, player.ascensionCount / 50000), 2)}%[与飞升次数有关，在5000000次飞升时达到上限：100%]`,
        189: `飞升时间超过10秒以后，超出部分的时间的2%将变为飞升次数的倍率。另外，方盒获取数量增加${format(Math.min(200, player.ascensionCount / 2.5e6), 2)}%[与飞升次数有关，在500000000(5e8)次飞升时达到上限：200%]`,
        193: `飞升时方盒获取数量增加${format(Decimal.log(player.ascendShards.add(1), 10) / 4, 2)}%！`,
        195: `飞升时方盒和超立方获取数量增加${format(Math.min(25000, Decimal.log(player.ascendShards.add(1), 10) / 4), 2)}%！与其他成就的加成相互叠乘[在e100000常数时达到上限：25000%]`,
        196: `飞升时PLATONIC方盒获取数量增加${format(Math.min(2000, Decimal.log(player.ascendShards.add(1), 10) / 50), 2)}%！[在e100000常数时达到上限：2000%]。`,
        197: '解锁飞升的数据追踪器。',
        198: '飞升时方盒获取数量增加4%！',
        199: '飞升时方盒获取数量增加4%！',
        200: '飞升时方合获取数量增加4%！什么？我打错字了？您猜猜我是有意的呢，还是有意的呢，还是有意的呢？',
        201: '飞升时方盒获取数量增加3%！',
        202: `飞升时间超过10秒以后，超出部分的时间的2%将变为飞升次数的倍率。另外，超立方获取数量增加${format(Math.min(200, player.ascensionCount / 5e6), 2)}%[与飞升次数有关，在1000000000(1e9)次飞升时达到上限：200%]`,
        204: '飞升时间超过10秒以后，超出部分的时间的25%将变为飞升奖励的倍率。',
        205: '飞升时超立方获取数量增加4%！',
        206: '飞升时超立方获取数量增加4%！',
        207: '飞升时超立方获取数量增加4%！',
        208: '飞升时超立方获取数量增加3%！',
        209: '飞升时间超过10秒以后，超出部分的时间的2%将变为飞升次数的倍率。',
        211: '飞升时间超过10秒以后，超出部分的时间的25%将再次变为飞升奖励的倍率(总和：50%)。',
        212: '飞升时五阶立方获取数量增加4%！',
        213: '飞升时五阶立方获取数量增加4%！',
        214: '飞升时五阶立方获取数量增加4%！',
        215: '飞升时五阶立方获取数量增加3%！',
        216: `飞升时间超过10秒以后，超出部分的时间的2%将变为飞升次数的倍率。另外，五阶立方获取数量增加${format(Math.min(200, player.ascensionCount / 1e7), 2)}%[与飞升次数有关，在2000000000(2e9)次飞升时达到上限：200%]`,
        218: '飞升时间超过10秒以后，超出部分的时间的50%将再次变为飞升奖励的倍率(总和：100%)。',
        219: '飞升时PLATONIC方盒获取数量增加4%！',
        220: '飞升时PLATONIC方盒获取数量增加4%！',
        221: '飞升时PLATONIC方盒获取数量增加4%！',
        222: '飞升时PLATONIC方盒获取数量增加3%！',
        223: `飞升时间超过10秒以后，超出部分的时间的2%将变为飞升次数的倍率。另外，PLATONIC方盒获取数量增加${format(Math.min(200, player.ascensionCount / 13370000), 2)}%[与飞升次数有关，在2674000000(2.674e9)次飞升时达到上限：200%]`,
        240: `飞升时所有类型的方盒及立方获取数量受到全局速度轻微的影响：乘以${format(Math.min(1.5, 1 + Math.max(2, Math.log10(calculateTimeAcceleration()))/20), 2)}(最小1.10倍，最大1.50倍)`,
        250: '难得素和祭品获取数量永久增加60%，所有类型的方盒及立方获取数量永久增加6%！',
        251: '难得素和祭品获取数量永久增加100%，所有类型的方盒及立方获取数量永久增加10%！',
        253: '五阶立方获取数量增加10%！原因？我也不知道。',
        254: `方盒获取数量增加${format(Math.min(15, Math.log10(corr[3]+1) * 0.6), 2, true)}%[在1e25飞升分数时达到上限：15%]`,
        255: `超立方获取数量增加${format(Math.min(15, Math.log10(corr[3]+1) * 0.6), 2, true)}%[在1e25飞升分数时达到上限：15%]，并且解锁惊奇七阶立方。`,
        256: `五阶立方获取数量增加${format(Math.min(15, Math.log10(corr[3]+1) * 0.6), 2, true)}%[在1e25飞升分数时达到上限：15%]。另外，超通量粉的转化效率增加5%。`,
        257: `PLATONIC方盒获取数量增加${format(Math.min(15, Math.log10(corr[3]+1) * 0.6), 2, true)}%[在1e25飞升分数时达到上限：15%]。另外，超通量粉的转化效率增加5%。`,
        258: `七阶立方获取数量增加${format(Math.min(15, Math.log10(corr[3]+1) * 0.6), 2, true)}%[在1e25飞升分数时达到上限：15%]`,
        259: '每次延展惊奇七阶立方·深渊以后，腐化分数就增加1%！',
        260: '飞升次数获取数量永久增加10%！',
        261: '飞升次数获取数量永久增加10%！',
        262: `飞升的速度增加${format(Math.min(10, Math.log10(player.ascensionCount+1)), 2)}%！上限：增加10%`,
        263: `飞升的速度增加${format(Math.min(10, Math.log10(player.ascensionCount+1)), 2)}%！上限：增加10%`,
        264: `七阶立方获取数量增加${format(Math.min(40, player.ascensionCount / 2e11), 2)}%[在8000000000000(8e12)次飞升时达到上限：40%]！`,
        265: `七阶立方获取数量增加${format(Math.min(20, player.ascensionCount / 8e12), 2)}%[在160000000000000(1.6e14)次飞升时达到上限：20%]！`,
        266: `夸克获取数量增加${format(Math.min(10, player.ascensionCount / 1e14), 2)}%[在1000000000000000(1e15)次飞升时达到上限：10%]！`,
        267: `飞升分数增加${format(Math.min(100, Decimal.log(player.ascendShards.add(1), 10) / 1000), 2)}%[在e100000常数时达到上限：100%]`,
        270: `七阶立方获取数量增加${format(Math.min(100, Decimal.log(player.ascendShards.add(1), 10) / 10000), 2)}%[在e1000000常数时达到上限：100%]，数学常数升级1的效果从1.05变为1.06，数学常数升级2的效果从1.1变为1.11。`,
        271: `开启一个PLATONIC方盒时，获得${format(Math.max(0, Math.min(1, (Decimal.log(player.ascendShards.add(1), 10) - 1e5) / 9e5)), 2, true)}个五阶立方，向下取整[在e1000000常数时达到上限：1]`,
        274: '蚂蚁速度永久变为4.44倍！只要资源充足，将最大化购买PLATONIC方盒升级！',
        275: '进入奇点后直接获得1次超越和1001神话！',
        276: '进入奇点后直接获得1次转世和10粒子！(隐藏效果：进入奇点后直接完成挑战1至挑战5各三次，完成成就37、成就38、成就44、成就50、成就57至成就77、成就80、成就87)',
        277: '进入奇点后直接获得500难得素！(隐藏效果：进入奇点后直接获得1e16粒子，完成一次挑战6)',
        278: '夸克获取数量永久增加5%！(隐藏效果：进入奇点后直接获得粒子建筑自动购买，直接获得商店的EX额外祭品、AUTO自动献祭祭品、EX额外难得素、AUTO难得素自动研究、蚂蚁速度、昂贵物品各10级，可以重置这些升级获得夸克)',
        279: '进入奇点后直接完成一次挑战7，并获得1e100粒子。护身符的额外等级对所有符文均生效！',
        280: '进入奇点后直接完成一次挑战8，并获得一只工蚁。(隐藏效果：进入奇点后直接完成成就176至成就182，直接获得更好的自动研究效果) ---- (15次奇点的隐藏效果：进入奇点后直接完成五次挑战8，获得一只蚁后，并获得2.22e2222粒子，可以自动购买祝福和魂灵，自动符文可以自动献祭所有祭品，挑战13在计算挑战的完成次数时，视为减少4次完成次数) ---- (20次奇点的隐藏效果：进入奇点后直接完成一次挑战9，获得1e100银河碎屑，并获得虔蚁护身符，夸克获取数量永久增加5%，获得商店的EX额外祭品、AUTO自动献祭祭品、EX额外难得素、AUTO难得素自动研究、蚂蚁速度、昂贵物品至满级(同时变为无法重置)，挑战13在计算挑战的完成次数时，视为减少1次完成次数) ---- (25次奇点的隐藏效果：进入奇点后直接获得一只神使蚁) ---- (30次奇点的隐藏效果：自动符文自动献祭祭品时，也会将祭品分配给符文6 - 无限晋升)'
    }

    if (i in descs) {
        return descs[i]
    } else {
        return ''
    }
}

export const achievementAlerts = async (num: number) => {
    let text = ''
    switch (num){
        case 36:
            text = 'Congratulations on your first prestige. The first of many. You obtain offerings. You can use them in the new Runes tab! [Unlocked Runes, Achievements, Diamond Buildings and some Upgrades!]'
            break;
        case 38:
            text = 'Hmm, it seems you are getting richer, being able to get 1 Googol diamonds in a single prestige. How about we give you another rune? [Unlocked Duplication rune in Runes tab!]'
            break;
        case 255:
            text = 'Wow! You gained 1e17 (100 Quadrillion) score in a single Ascension. For that, you can now generate Hepteracts if you get above 1.66e17 (166.6 Quadrillion) score in an Ascension. Good luck!'
    }

    if (text !== '' && player.singularityCount === 0) {
        return Alert(text)
    }
}
//${format(Decimal.log(player.ascendShards.add(1), 10) / 1000, 2)} (log(constant)/1000)%!

// TODO: clean this up
export const resetachievementcheck = (i: number) => {
    if (i === 1) {
        if (player.prestigenoaccelerator === true) {
            achievementaward(60)
        }
        if (player.prestigenomultiplier === true) {
            achievementaward(57)
        }
        if (player.prestigenocoinupgrades === true) {
            achievementaward(64)
        }
        if (G['prestigePointGain'].gte(1)) {
            achievementaward(36)

        }
        if (G['prestigePointGain'].gte(1e6)) {
            achievementaward(37)

        }
        if (G['prestigePointGain'].gte(1e100)) {
            achievementaward(38)
        }
        if (G['prestigePointGain'].gte('1e1000')) {
            achievementaward(39)

        }
        if (G['prestigePointGain'].gte('1e10000')) {
            achievementaward(40)

        }
        if (G['prestigePointGain'].gte('1e77777')) {
            achievementaward(41)

        }
        if (G['prestigePointGain'].gte('1e250000')) {
            achievementaward(42)

        }
    }
    if (i === 2) {
        if (player.transcendnoaccelerator === true) {
            achievementaward(61)
        }
        if (player.transcendnomultiplier === true) {
            achievementaward(58)
        }
        if (player.transcendnocoinupgrades === true) {
            achievementaward(65)
        }
        if (player.transcendnocoinorprestigeupgrades === true) {
            achievementaward(66)
        }
        if (G['transcendPointGain'].gte(1)) {
            achievementaward(43)
        }
        if (G['transcendPointGain'].gte(1e6)) {
            achievementaward(44)
        }
        if (G['transcendPointGain'].gte(1e50)) {
            achievementaward(45)
        }
        if (G['transcendPointGain'].gte(1e308)) {
            achievementaward(46)
        }
        if (G['transcendPointGain'].gte('1e1500')) {
            achievementaward(47)
        }
        if (G['transcendPointGain'].gte('1e25000')) {
            achievementaward(48)
        }
        if (G['transcendPointGain'].gte('1e100000')) {
            achievementaward(49)
        }
    }
    if (i === 3) {
        if (player.reincarnatenoaccelerator === true) {
            achievementaward(62)
        }
        if (player.reincarnatenomultiplier === true) {
            achievementaward(59)
        }
        if (player.reincarnatenocoinupgrades === true) {
            achievementaward(67)
        }
        if (player.reincarnatenocoinorprestigeupgrades === true) {
            achievementaward(68)
        }
        if (player.reincarnatenocoinprestigeortranscendupgrades === true) {
            achievementaward(69)
        }
        if (player.reincarnatenocoinprestigetranscendorgeneratorupgrades === true) {
            achievementaward(70)
        }
        if (G['reincarnationPointGain'].gte(1)) {
            achievementaward(50)

        }
        if (G['reincarnationPointGain'].gte(1e5)) {
            achievementaward(51)

        }
        if (G['reincarnationPointGain'].gte(1e30)) {
            achievementaward(52)

        }
        if (G['reincarnationPointGain'].gte(1e200)) {
            achievementaward(53)

        }
        if (G['reincarnationPointGain'].gte('1e1500')) {
            achievementaward(54)

        }
        if (G['reincarnationPointGain'].gte('1e5000')) {
            achievementaward(55)

        }
        if (G['reincarnationPointGain'].gte('1e7777')) {
            achievementaward(56)

        }
    }
}

/**
 * Array of [index, bar to get achievement if greater than, achievement number]
 */
const challengeCompletionsBar: [number, number, number][] = [
    [1, 0.5, 78], [1, 2.5, 79], [1, 4.5, 80], [1, 9.5, 81], [1, 19.5, 82], [1, 49.5, 83], [1, 74.5, 84],
    [2, 0.5, 85], [2, 2.5, 86], [2, 4.5, 87], [2, 9.5, 88], [2, 19.5, 89], [2, 49.5, 90], [2, 74.5, 91],
    [3, 0.5, 92], [3, 2.5, 93], [3, 4.5, 94], [3, 9.5, 95], [3, 19.5, 96], [3, 49.5, 97], [3, 74.5, 98],
    [4, 0.5, 99], [4, 2.5, 100], [4, 4.5, 101], [4, 9.5, 102], [4, 19.5, 103], [4, 49.5, 104], [4, 74.5, 105],
    [5, 0.5, 106], [5, 2.5, 107], [5, 4.5, 108], [5, 9.5, 109], [5, 19.5, 110], [5, 49.5, 111], [5, 74.5, 112],
    [6, 0.5, 113], [6, 1.5, 114], [6, 2.5, 115], [6, 4.5, 116], [6, 9.5, 117], [6, 14.5, 118], [6, 24.5, 119],
    [7, 0.5, 120], [7, 1.5, 121], [7, 2.5, 122], [7, 4.5, 123], [7, 9.5, 124], [7, 14.5, 125], [7, 24.5, 126],
    [8, 0.5, 127], [8, 1.5, 128], [8, 2.5, 129], [8, 4.5, 130], [8, 9.5, 131], [8, 19.5, 132], [8, 24.5, 133],
    [9, 0.5, 134], [9, 1.5, 135], [9, 2.5, 136], [9, 4.5, 137], [9, 9.5, 138], [9, 19.5, 139], [9, 24.5, 140],
    [10, 0.5, 141], [10, 1.5, 142], [10, 2.5, 143], [10, 4.5, 144], [10, 9.5, 145], [10, 19.5, 146], [10, 24.5, 147]
];

const challengeCompletionsNotAuto: Record<number, [string, number]> = {
    1: ['1e1000', 75],
    2: ['1e1000', 76],
    3: ['1e99999', 77],
    5: ['1e120000', 63]
}

export const challengeachievementcheck = (i: number, auto?: boolean) => {
    const generatorcheck = sumContents(player.upgrades.slice(101, 106));

    for (const [, bar, ach] of challengeCompletionsBar.filter(([o]) => o === i)) {
        if (player.challengecompletions[i] > bar) {
            achievementaward(ach);
        }
    }

    // Challenges 1, 2, 3 check for not buying generators and getting X coins
    // Challenge 5 check for not buying Acc/Acc Boosts and getting 1.00e120,000 coins
    if ([1, 2, 3, 5].includes(i) && !auto) {
        const [gte, ach] = challengeCompletionsNotAuto[i];
        if (i === 5) {
            if (player.coinsThisTranscension.gte(gte) && player.acceleratorBought === 0 && player.acceleratorBoostBought === 0) {
                achievementaward(ach)
            }
        } else if (player.coinsThisTranscension.gte(gte) && generatorcheck === 0) {
            achievementaward(ach);
        }
    }

    if (i >= 11 && i <= 14) {
        const challengeArray = [0, 1, 2, 3, 5, 10, 20, 30]
        for (let j = 1; j <= 7; j++) {
            if (player.challengecompletions[i] >= challengeArray[j] && player.achievements[119 + 7 * i + j] < 1) {
                achievementaward(119 + 7 * i + j)
            }
        }
    }
}

// \) \{\n\s+achievementaward\(\d+\)\n\s+\}

/**
 * Requirements for each building achievement
 * @type {(() => boolean)[]}
 */
const buildAchievementReq: (() => boolean)[] = [
    () => (player.firstOwnedCoin >= 1 && player.achievements[1] < 0.5),
    () => (player.firstOwnedCoin >= 10 && player.achievements[2] < 0.5),
    () => (player.firstOwnedCoin >= 100 && player.achievements[3] < 0.5),
    () => (player.firstOwnedCoin >= 1000 && player.achievements[4] < 0.5),
    () => (player.firstOwnedCoin >= 5000 && player.achievements[5] < 0.5),
    () => (player.firstOwnedCoin >= 10000 && player.achievements[6] < 0.5),
    () => (player.firstOwnedCoin >= 20000 && player.achievements[7] < 0.5),
    () => (player.secondOwnedCoin >= 1 && player.achievements[8] < 0.5),
    () => (player.secondOwnedCoin >= 10 && player.achievements[9] < 0.5),
    () => (player.secondOwnedCoin >= 100 && player.achievements[10] < 0.5),
    () => (player.secondOwnedCoin >= 1000 && player.achievements[11] < 0.5),
    () => (player.secondOwnedCoin >= 5000 && player.achievements[12] < 0.5),
    () => (player.secondOwnedCoin >= 10000 && player.achievements[13] < 0.5),
    () => (player.secondOwnedCoin >= 20000 && player.achievements[14] < 0.5),
    () => (player.thirdOwnedCoin >= 1 && player.achievements[15] < 0.5),
    () => (player.thirdOwnedCoin >= 10 && player.achievements[16] < 0.5),
    () => (player.thirdOwnedCoin >= 100 && player.achievements[17] < 0.5),
    () => (player.thirdOwnedCoin >= 1000 && player.achievements[18] < 0.5),
    () => (player.thirdOwnedCoin >= 5000 && player.achievements[19] < 0.5),
    () => (player.thirdOwnedCoin >= 10000 && player.achievements[20] < 0.5),
    () => (player.thirdOwnedCoin >= 20000 && player.achievements[21] < 0.5),
    () => (player.fourthOwnedCoin >= 1 && player.achievements[22] < 0.5),
    () => (player.fourthOwnedCoin >= 10 && player.achievements[23] < 0.5),
    () => (player.fourthOwnedCoin >= 100 && player.achievements[24] < 0.5),
    () => (player.fourthOwnedCoin >= 1000 && player.achievements[25] < 0.5),
    () => (player.fourthOwnedCoin >= 5000 && player.achievements[26] < 0.5),
    () => (player.fourthOwnedCoin >= 10000 && player.achievements[27] < 0.5),
    () => (player.fourthOwnedCoin >= 20000 && player.achievements[28] < 0.5),
    () => (player.fifthOwnedCoin >= 1 && player.achievements[29] < 0.5),
    () => (player.fifthOwnedCoin >= 10 && player.achievements[30] < 0.5),
    () => (player.fifthOwnedCoin >= 66 && player.achievements[31] < 0.5),
    () => (player.fifthOwnedCoin >= 666 && player.achievements[32] < 0.5),
    () => (player.fifthOwnedCoin >= 6666 && player.achievements[33] < 0.5),
    () => (player.fifthOwnedCoin >= 17777 && player.achievements[34] < 0.5),
    () => (player.fifthOwnedCoin >= 42777 && player.achievements[35] < 0.5)
];

export const buildingAchievementCheck = () => {
    for (const req of buildAchievementReq) {
        if (req()) {
            const idx = buildAchievementReq.indexOf(req) + 1;
            achievementaward(idx);
        }
    }
}

export const ascensionAchievementCheck = (i: number, score = 0) => {
    if (i === 1) {
        const ascendCountArray = [0, 1, 2, 10, 100, 1000, 14142, 141421, 1414213, //Column 1
            1e7, 1e8, 2e9, 4e10, 8e11, 1.6e13, 1e14] //Column 2
        for (let j = 1; j <= 7; j++) {
            if (player.ascensionCount >= ascendCountArray[j] && player.achievements[182 + j] < 1) {
                achievementaward(182 + j)
            }
            if (player.ascensionCount >= ascendCountArray[j + 8] && player.achievements[259 + j] < 1) {
                achievementaward(259 + j)
            }
        }
        if (player.ascensionCount >= ascendCountArray[8] && player.achievements[240] < 1) {
            achievementaward(240)
        }
    }
    if (i === 2) {
        const constantArray = [0, 3.14, 1e6, 4.32e10, 6.9e21, 1.509e33, 1e66, '1.8e308', //Column 1
            '1e1000', '1e5000', '1e15000', '1e50000', '1e100000', '1e300000', '1e1000000'] //Column 2
        for (let j = 1; j <= 7; j++) {
            if (player.ascendShards.gte(constantArray[j]) && player.achievements[189 + j] < 1) {
                achievementaward(189 + j)
            }
            if (player.ascendShards.gte(constantArray[j + 7]) && player.achievements[266 + j] < 1) {
                achievementaward(266 + j)
            }
        }
    }
    if (i === 3) {
        const scoreArray = [0, 1e5, 1e6, 1e7, 1e8, 1e9, 5e9, 2.5e10, //Column 1
            1e12, 1e14, 1e17, 2e18, 4e19, 1e21, 1e23] //Column 2
        for (let j = 1; j <= 7; j++) {
            if (score >= scoreArray[j] && player.achievements[224 + j] < 1) {
                achievementaward(224 + j)
            }

            if (score >= scoreArray[7 + j] && player.achievements[252 + j] < 1) {
                achievementaward(252 + j)
            }
        }
    }
}

export const getAchievementQuarks = (i: number) => {
    let multiplier = 1
    if (i >= 183) {
        multiplier = 5
    }
    if (i >= 253) {
        multiplier = 40
    }

    const globalQuarkMultiplier = player.worlds.applyBonus(1)
    let actualMultiplier = multiplier * globalQuarkMultiplier;
    if (actualMultiplier > 100) {
        actualMultiplier = Math.pow(100, 0.6) * Math.pow(actualMultiplier, 0.4)
    }

    return Math.floor(achievementpointvalues[i] * actualMultiplier)
}

export const achievementdescriptions = (i: number) => {
    const y = adesc[`adesc${i}` as keyof typeof adesc];
    const z = player.achievements[i] > 0.5 ? ' COMPLETED!' : '';
    const k = areward(i)

    DOMCacheGetOrSet('achievementdescription').textContent = y + z
    DOMCacheGetOrSet('achievementreward').textContent = '奖励：' + achievementpointvalues[i] + '成就点数。' + format(getAchievementQuarks(i), 0, true) + '夸克！' + k
    if (player.achievements[i] > 0.5) {
        DOMCacheGetOrSet('achievementdescription').style.color = 'gold'
    } else {
        DOMCacheGetOrSet('achievementdescription').style.color = 'white'
    }
}

export const achievementaward = (num: number) => {
    if (player.achievements[num] < 1) {
        if (player.toggles[34]) {
            void Notification(`You unlocked an achievement: ${adesc[`adesc${num}` as keyof typeof adesc]}`);
        }

        void achievementAlerts(num)
        player.achievementPoints += achievementpointvalues[num]
        player.worlds.add(getAchievementQuarks(num), false)
        DOMCacheGetOrSet('achievementprogress').textContent = 'Achievement Points: ' + player.achievementPoints + '/' + totalachievementpoints + ' [' + (100 * player.achievementPoints / totalachievementpoints).toPrecision(4) + '%]'
        player.achievements[num] = 1;
        revealStuff()
    }

    DOMCacheGetOrSet(`ach${num}`).style.backgroundColor = 'Green';
    Synergism.emit('achievement', num);
}

