var achievementpointvalues = [0, 1, 2, 4, 6, 8, 9, 10,
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
1, 2, 4, 6, 8, 9, 10,]

var totalachievementpoints = achievementpointvalues.reduce((a, b) => a + b, 0)

var adesc1 = "A Loyal Employee: Hire your first worker."
var adesc2 = "Small Business: Hire 10 workers."
var adesc3 = "Now we're synergizing!: Hire 100 workers."
var adesc4 = "Gaining Redundancies: Hire 1,000 workers."
var adesc5 = "A cog in the machine: Hire 5,000 workers."
var adesc6 = "A nail in the machine: Hire 10,000 workers."
var adesc7 = "Are we even in the machine anymore?: Hire 20,000 workers."
var adesc8 = "STONKS!!!: Purchase 1 Investment."
var adesc9 = "Planning ahead: Purchase 10 Investments."
var adesc10 = "Inside Trading: Purchase 100 Investments."
var adesc11 = "Outside Trading?: Purchase 1,000 Investments."
var adesc12 = "Market Takeover: Purchase 5,000 Investments."
var adesc13 = "Trickle-Down Economics: Purchase 10,000 Investments."
var adesc14 = "Eliminated Regulation: Purchase 20,000 Investments."
var adesc15 = "Stationery!: Build 1 Printer."
var adesc16 = "Printing Press: Build 10 Printers."
var adesc17 = "It prints free money!: Build 100 Printers."
var adesc18 = "Solving Our Debts: Build 1,000 Printers."
var adesc19 = "Monopolizing the market: Build 5,000 Printers."
var adesc20 = "We're running out of Ink!: Build 10,000 Printers."
var adesc21 = "3D-printing the universe: Build 20,000 Printers."
var adesc22 = "A national treasure: Establish 1 Coin Mint."
var adesc23 = "Now with competition!: Establish 10 Coin Mints."
var adesc24 = "Counterfeiting with Style!: Establish 100 Coin Mints."
var adesc25 = "Why do we need all these?: Establish 1000 Coin Mints."
var adesc26 = "No really, why??: Establish 5,000 Coin Mints."
var adesc27 = "Is no one to stop us???: Establish 10,000 Coin Mints."
var adesc28 = "Oh well, time to mint: Establish 20,000 Coin Mints."
var adesc29 = "Newton's Apprentice: Create 1 Alchemy."
var adesc30 = "Lab Work: Create 10 Alchemies."
var adesc31 = "Satanic Becomings: Create 66 Alchemies."
var adesc32 = "Satan Incarnate: Create 666 Alchemies."
var adesc33 = "Is this more demonic?: Create 6,666 Alchemies."
var adesc34 = "Golden Paradise: Create 17,777 Alchemies."
var adesc35 = "Unlocking secrets to the world: Create 42,777 Alchemies."
var adesc36 = "Leveling up: Prestige for at least 1 Diamond."
var adesc37 = "High-Tiered: Prestige for at least 1e+6 Diamonds."
var adesc38 = "Highly Regarded: Prestige for at least 1e+100 Diamonds."
var adesc39 = "Prestigious: Prestige for at least 1e+1000 Diamonds."
var adesc40 = "Legendary: Prestige for at least 1e+10000 Diamonds."
var adesc41 = "Divine: Prestige for at least 1e+77777 Diamonds."
var adesc42 = "Perfectly Respected: Prestige for at least 1e+250000 Diamonds."
var adesc43 = "A Simple Detour: Transcend for at least 1 Mythos."
var adesc44 = "Tunnel Vision: Transcend for at least 1e+6 Mythos."
var adesc45 = "Risen from the Ashes: Transcend for at least 1e+50 Mythos."
var adesc46 = "Paradigm Shift: Transcend for at least 1e+308 Mythos."
var adesc47 = "Preparation: Transcend for at least 1e+2000 Mythos."
var adesc48 = "Revising the Plan: Transcend for at least 1e+25000 Mythos."
var adesc49 = "Leaving the Universe: Transcend for at least 1e+100000 Mythos."
var adesc50 = "Going Quantum: Reincarnate for at least 1 Particle."
var adesc51 = "Tunneling Vision: Reincarnate for at least 100,000 Particles."
var adesc52 = "Simulating the World: Reincarnate for at least 1e+30 Particles."
var adesc53 = "Multidimensional Creation: Reincarnate for at least 1e+200 Particles."
var adesc54 = "Lepton Dance: Reincarnate for at least 1e+1000 Particles."
var adesc55 = "Do we have enough yet?: Reincarnate for at least 1e+5000 Particles."
var adesc56 = "I Feel Luck in My Cells: Reincarnate for at least 1e+7777 Particles."
var adesc57 = "One Way Only: Prestige without buying multipliers."
var adesc58 = "Authentic Shifting: Transcend without having bought a multiplier."
var adesc59 = "The Singularity: Reincarnate without having bought a multiplier."
var adesc60 = "Gotta go SLOW!: Prestige without buying Accelerators or Accelerator Boosts."
var adesc61 = "I'm really going slow: Transcend without having bought Accelerators or Boosts."
var adesc62 = "Are we there yet?: Reincarnate without having bought Accelerators or Boosts."
var adesc63 = "A careful search for Diamonds: Get 1e120,000 Coins in [Diamond-] without buying Accelerators or Boosts."
var adesc64 = "Very Based: Prestige without purchasing Coin Upgrades."
var adesc65 = "Miser: Transcend without purchasing Coin Upgrades."
var adesc66 = "True Miser: Transcend without purchasing Coin or Diamond Upgrades."
var adesc67 = "Coinless Pursuit: Reincarnate without purchasing Coin Upgrades."
var adesc68 = "Diamonds don't matter to me!: Reincarnate without purchasing Coin or Diamond Upgrades."
var adesc69 = "Leave nothing behind: Reincarnate without purchasing Coin, Diamond or Mythos Upgrades."
var adesc70 = "Leave NOTHING behind.: Reincarnate without purchasing Coin, Diamond, Mythos, or Generator Upgrades."
var adesc71 = "Out of Order: Buy Generator Upgrade Row 1, #2 first in a transcension (IV -> III)"
var adesc72 = "More Out of Order: Buy Generator Upgrade Row 1, #3 first in a transcension (III -> II)"
var adesc73 = "Four's a Company: Buy Generator Upgrade Row 1, #4 first in a transcension (II -> I)"
var adesc74 = "Five's a Croud: Buy Generator Upgrade Row 1, #5 first in a transcension (I -> V)"
var adesc75 = "Vaseline without the Machine: Exit [No Multiplier] with at least 1e1000 coins and without any of the row 1 generator upgrades."
var adesc76 = "Rage against the Machine: Exit [No Accelerator] with at least 1e1000 coins and without any of the row 1 generator upgrades."
var adesc77 = "Amish Paradise: Exit [No Shards] with at least 1e99,999 coins and without any of the row 1 generator upgrades."
var adesc78 = "Single-Cell: Complete [No Multiplier] once."
var adesc79 = "Solidarity: Complete [No Multiplier] three times."
var adesc80 = "Duplication-Free!: Complete [No Multiplier] five times."
var adesc81 = "Multitasking Challenged: Complete [No Multiplier] ten times."
var adesc82 = "No Deaths: Complete [No Multiplier] twenty times."
var adesc83 = "Population One: Complete [No Multiplier] fifty times."
var adesc84 = "Insert Another Token: Complete [No Multiplier] seventy-five times."
var adesc85 = "Slow Start: Complete [No Accelerator] once"
var adesc86 = "Respawn Rate -12%: Complete [No Accelerator] three times."
var adesc87 = "Putting the Breaks On: Complete [No Accelerator] five times."
var adesc88 = "Racing a Sloth...: Complete [No Accelerator] ten times."
var adesc89 = "... and Losing.: Complete [No Accelerator] twenty times."
var adesc90 = "Planck Distance Traveled: Complete [No Accelerator] fifty times."
var adesc91 = "Inverse-Ackermann Growth: Complete [No Accelerator] seventy-five times."
var adesc92 = "Intact: Complete [No Shards] once."
var adesc93 = "Augments are Stupid!: Complete [No Shards] three times."
var adesc94 = "Grandmasters are Brilliant!: Complete [No Shards] five times."
var adesc95 = "Gotta get those Grandmasters Stronger: Complete [No Shards] ten times."
var adesc96 = "Summoning Enhancements: Complete [No Shards] twenty times."
var adesc97 = "Magic 99/99: Complete [No Shards] fifty times."
var adesc98 = "Perfect Foresight: Complete [No Shards] seventy-five times."
var adesc99 = "Inflation: Complete [Cost+] once."
var adesc100 = "Hyperinflation: Complete [Cost+] three times."
var adesc101 = "Market Bubble: Complete [Cost+] five times."
var adesc102 = "Bull Market: Complete [Cost+] ten times."
var adesc103 = "Wealth Inequality: Complete [Cost+] twenty times."
var adesc104 = "Severe Overpay: Complete [Cost+] fifty times."
var adesc105 = "Societal Collapse: Complete [Cost+] seventy-five times."
var adesc106 = "Excavation: Complete [Diamond-] once."
var adesc107 = "Digging Deep: Complete [Diamond-] three times."
var adesc108 = "Frack As Needed: Complete [Diamond-] five times."
var adesc109 = "Unobtainium Pickaxe: Complete [Diamond-] ten times."
var adesc110 = "Fortune III: Complete [Diamond-] twenty times."
var adesc111 = "Every kiss...: Complete [Diamond-] fifty times."
var adesc112 = "...begins with K.: Complete [Diamond-] seventy-five times."
var adesc113 = "Tax evasion!: Complete {[Tax+]} once."
var adesc114 = "Keeping up with the Joneses: Complete {[Tax+]} twice."
var adesc115 = "Offshore deposits: Complete {[Tax+]} three times."
var adesc116 = "Bribing officials: Complete {[Tax+]} five times."
var adesc117 = "Becoming President: Complete {[Tax+]} ten times."
var adesc118 = "Charitable Donation: Complete {[Tax+]} fifteen times."
var adesc119 = "IRS Audit: Complete {[Tax+]} twenty-five times."
var adesc120 = "Is there anybody in there?: Complete {[No Accelerator/Multiplier]} once."
var adesc121 = "Human being: Complete {[No Accelerator/Multiplier]} twice."
var adesc122 = "Interdimensional: Complete {[No Accelerator/Multiplier]} three times."
var adesc123 = "A slow nickel: Complete {[No Accelerator/Multiplier]} five times."
var adesc124 = "Multipliers don't even work 0/5: Complete {[No Accelerator/Multiplier]} ten times."
var adesc125 = "Accelerators don't even work -5/5: Complete {[No Accelerator/Multiplier]} fifteen times."
var adesc126 = "ACCELERATOR BOOSTS DON'T EVEN WORK -100/5: Complete {[No Accelerator/Multiplier]} twenty-five times."
var adesc127 = "Are you ready to handle a challenge this hard?"
var adesc128 = "It's coming up in v1.009. Get prepared!"
var adesc129 = "You may need a lot of rune levels to crack this one."
var adesc130 = "Maybe even some stored obtainium?"
var adesc131 = "In any case, buckle up for the challenge."
var adesc132 = "I know you can beat this."
var adesc133 = "I believe in you."
var adesc134 = "TBD: TBD"
var adesc135 = "TBD: TBD"
var adesc136 = "TBD: TBD"
var adesc137 = "TBD: TBD"
var adesc138 = "TBD: TBD"
var adesc139 = "TBD: TBD"
var adesc140 = "TBD: TBD"
var adesc141 = "TBD: TBD"
var adesc142 = "TBD: TBD"
var adesc143 = "TBD: TBD"
var adesc144 = "TBD: TBD"
var adesc145 = "TBD: TBD"
var adesc146 = "TBD: TBD"
var adesc147 = "TBD: TBD"
var adesc148 = "Gas gas gas: Purchase 5 Accelerators."
var adesc149 = "0 to 25: Purchase 25 Accelerators."
var adesc150 = "0 to 100: Purchase 100 Accelerators"
var adesc151 = "Highway to Hell: Purchase 666 Accelerators."
var adesc152 = "Perhaps you should brake: Purchase 2,000 Accelerators."
var adesc153 = "Exit the vehicle now!: Purchase 12,500 Accelerators."
var adesc154 = "Faster than light: Purchase 100,000 Accelerators."
var adesc155 = "I've been duped!: Purchase 2 Multipliers."
var adesc156 = "Funhouse Mirrors: Purchase 20 Multipliers."
var adesc157 = "Friend of binary: Purchase 100 Multipliers."
var adesc158 = "Feeling the cost growth yet?: Purchase 500 Multipliers."
var adesc159 = "Perhaps you'll feel the cost now: Purchase 2,000 Multipliers."
var adesc160 = "Exponential Synergy: Purchase 12,500 Multipliers."
var adesc161 = "Cloned: Purchase 100,000 Multipliers."
var adesc162 = "Jerk > 0: Purchase 2 Accelerator Boosts."
var adesc163 = "Can't the spedometer move any faster?: Purchase 10 Accelerator Boosts."
var adesc164 = "50 G rotations: Purchase 50 Accelerator Boosts."
var adesc165 = "Dematerialize: Purchase 200 Accelerator Booosts."
var adesc166 = "Breaking the laws of Physics: Purchase 1,000 Accelerator Boosts."
var adesc167 = "Decayed Realism: Purchase 5,000 Accelerator Boosts."
var adesc168 = "Kinda fast: Purchase 15,000 Accelerator Boosts."
var adesc169 = "A small stash: Hold onto 100 offerings."
var adesc170 = "Fit for a king: Hold onto 400 offerings."
var adesc171 = "Fit for a god: Hold onto 1600 offerings."
var adesc172 = "Extreme Hoarders edition: Hold onto 6400 offerings."
var adesc173 = "This can't be healthy: Hold onto 24000 offerings."
var adesc174 = "At least we get a little obtainium: Hold onto 96000 offerings."
var adesc175 = "Sacrilege: Hold onto 400000 offerings."







var areward3 = "Gain +.05% to Accelerator Power."
var areward4 = "Start transcensions/challenges with Worker Autobuyer unlocked."
var areward5 = "Gain +1 Accelerator per 500 Workers owned."
var areward6 = "Gain +1 Multiplier per 1,000 Workers owned."
var areward7 = "Gain +1 Accelerator Boost per 2,000 workers owned."
var areward10 = "Gain +.10% to Accelerator Power."
var areward11 = "Start transcensions/challenges with Investment Autobuyer unlocked."
var areward12 = "Gain +1 Accelerator per 500 Investments owned."
var areward13 = "Gain +1 Multiplier per 1,000 Investments owned."
var areward14 = "Gain +1 Accelerator Boost per 2,000 Investments owned."
var areward17 = "Gain +.15% to Accelerator Power."
var areward18 = "Start transcensions/challenges with Printer Autobuyer unlocked."
var areward19 = "Gain +1 Accelerator per 500 Printers owned."
var areward20 = "Gain +1 Multiplier per 1,000 Printers owned."
var areward21 = "Gain +1 Accelerator Boost per 2,000 Printers owned."
var areward24 = "Gain +.20% to Accelerator Power."
var areward25 = "Start transcensions/challenges with Coin Mint Autobuyer unlocked."
var areward26 = "Gain +1 Accelerator per 500 Mints owned."
var areward27 = "Gain +1 Multiplier per 1,000 Mints owned."
var areward28 = "Gain +1 Accelerator Boost per 2,000 Mints owned."
var areward31 = "Gain +.25% to Accelerator Power."
var areward32 = "Start transcensions/challenges with Alchemy Autobuyer unlocked."
var areward33 = "Gain 10% more offerings from resets || +1 Accelerator per 500 Alchemies!"
var areward34 = "Gain 15% more offerings from resets (stacks multiplicatively!) || +1 Multiplier per 1,000 Alchemies!"
var areward35 = "Gain 25% more offerings from resets (stacks multiplicatively!) || +1 Accelerator Boost per 2,000 Alchemies!"
var areward36 = "Multiply Crystal Production by 2x."
var areward37 = "Multiply Crystal Production by the common logarithm of owned Diamonds. Prestiges give more offerings based on time spent (Up to +15 at 1800 seconds)"
var areward38 = "Unlock the Duplication rune!"
var areward43 = "Accelerator Boosts can be purchased from any screen. Unlock the Auto-Prestige feature."
var areward44 = "Unlock the Prism Rune! Transcensions give more offerings based on time spent (Up to +15 at 1800 seconds)"
var areward45 = "Reduce tax scaling by up to 5%, depending on the length of prestige."
var areward46 = "Reduce tax scaling by up to another 5%, depending on length of prestige."
var areward47 = "Reduce tax scaling by up to ANOTHER 10%, depending on length of prestige!"
var areward50 = "Unlock new Atomic production and unlock 3 new incredibly difficult challenges! Gain 2x particles on all future Reincarnations!"
var areward51 = "Reincarnations give more offerings based on time spent (Up to +25 at 1800 seconds)"
var areward57 = "Gain +1, +1% free Multipliers!"
var areward58 = "Gain +1, +1% more free Multipliers!"
var areward59 = "Gain +1, +1% more, MORE free Multipliers!"
var areward60 = "Gain +2, +1% free Accelerators!"
var areward61 = "Gain +2, +1% more free Accelerators!"
var areward62 = "Gain +2, +1% more, MORE free Accelerators!"
var areward71 = "+1% Conversion Exponent on all generator upgrades!"
var areward72 = "+1% Conversion Exponent on all generator upgrades!"
var areward73 = "+1% Conversion Exponent on all generator upgrades!"
var areward74 = "+1% Conversion Exponent on all generator upgrades!"
var areward75 = "+1% Conversion Exponent on all generator upgrades!"
var areward76 = "+1% Conversion Exponent on all generator upgrades!"
var areward77 = "+1% Conversion Exponent on all generator upgrades! They're in overdrive now!"
var areward78 = "Start transcensions/challenges with 1 Refinery and automatically buy Refineries."
var areward79 = "Automatically buy the first crystal upgrade if you can afford it!"
var areward80 = "Start transcensions/challenges with Multiplier Autobuyer unlocked. +5% chance to not spend an offering when sacrificing."
var areward82 = "Delay tax growth by 4%."
var areward85 = "Start transcensions/challenges with 1 Coal Plant and automatically buy Coal Plants."
var areward86 = "Automatically buy the second crystal upgrade if you can afford it!"
var areward87 = "Start transcensions/challenges with Accelerator Autobuyer unlocked. +5% chance to not spend an offering when sacrificing."
var areward89 = "Delay tax growth by 4%."
var areward92 = "Start transcensions/challenges with 1 Coal Rig and automatically buy Coal Rigs."
var areward93 = "Automatically buy the third crystal upgrade if you can afford it!"
var areward94 = "+5% chance to not spend an offering when sacrificing."
var areward96 = "Delay tax growth by 4%."
var areward99 = "Start transcensions/challenges with 1 Diamond Pickaxe and automatically buy Diamond Pickaxes."
var areward100 = "Automatically buy the fourth crystal upgrade if you can afford it!"
var areward101 = "+5% chance to not spend an offering when sacrificing."
var areward102 = "Unlock the Thrift rune!"
var areward103 = "Delay tax growth by 4%."
var areward106 = "Start transcensions/challenges with 1 Pandora's Box and automatically buy Pandora's Boxes."
var areward107 = "Automatically buy the fifth crystal upgrade if you can afford it!"
var areward108 = "+5% chance to not spend an offering when sacrificing."
var areward110 = "Delay tax growth by 4%."
var areward115 = "+5% chance to not spend an offering when sacrificing."
var areward117 = "Delay tax growth by 5.66%."
var areward122= "+10% chance to not spend an offering when sacrificing."
var areward123 = "Unlock 5 expensive yet powerful researches!"
var areward124 = "Delay tax growth by 5.66%."
var areward129= "+10% chance to not spend an offering when sacrificing."
var areward131 = "Delay tax growth by 5.66%."

function resetachievementcheck(i) {
    if (i == 1) {
        if (player.prestigenoaccelerator == true) {
            achievementaward(60)
        }
        if (player.prestigenomultiplier == true) {
            achievementaward(57)
        }
        if (player.prestigenocoinupgrades == true){
            achievementaward(64)
        }
        if (prestigePointGain.greaterThanOrEqualTo(1)) {
            achievementaward(36)

        }
        if (prestigePointGain.greaterThanOrEqualTo(1e6)) {
            achievementaward(37)

        }
        if (prestigePointGain.greaterThanOrEqualTo(1e100)) {
            achievementaward(38)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e1000")) {
            achievementaward(39)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e10000")) {
            achievementaward(40)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e77777")) {
            achievementaward(41)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e250000")) {
            achievementaward(42)

        }
    }
    if (i == 2) {
        if (player.transcendnoaccelerator == true) {
            achievementaward(61)
        }
        if (player.transcendnomultiplier == true) {
            achievementaward(58)
        }
        if (player.transcendnocoinupgrades == true) {
            achievementaward(65)
        }
        if (player.transcendnocoinorprestigeupgrades == true) {
            achievementaward(66)
        }
        if (player.transcendnoaccelerator == true) {
            achievementaward(61)
        }
        if (player.transcendnomultiplier == true) {
            achievementaward(58)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1)) {
            achievementaward(43)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1e6)) {
            achievementaward(44)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1e50)) {
            achievementaward(45)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1e308)) {
            achievementaward(46)
        }
        if (transcendPointGain.greaterThanOrEqualTo("1e2000")) {
            achievementaward(47)
        }
        if (transcendPointGain.greaterThanOrEqualTo("1e25000")) {
            achievementaward(48)
        }
        if (transcendPointGain.greaterThanOrEqualTo("1e100000")) {
            achievementaward(49)
        }
    }
    if (i == 3) {
        if (player.reincarnatenoaccelerator == true) {
            achievementaward(62)
        }
        if (player.reincarnatenomultiplier == true) {
            achievementaward(59)
        }
        if (player.reincarnatenocoinupgrades == true) {
            achievementaward(67)
        }
        if (player.reincarnatenocoinorprestigeupgrades == true) {
            achievementaward(68)
        }
        if (player.reincarnatenocoinprestigeortranscendupgrades == true) {
            achievementaward(69)
        }
        if (player.reincarnatenocoinprestigetranscendorgeneratorupgrades == true) {
            achievementaward(70)
        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1)) {
            achievementaward(50)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1e5)) {
            achievementaward(51)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1e30)) {
            achievementaward(52)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1e200)) {
            achievementaward(53)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo("1e2000")) {
            achievementaward(54)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo("1e5000")) {
            achievementaward(55)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo("1e7777")) {
            achievementaward(56)

        }
    }
}


function challengeachievementcheck(i,auto=false) {
    var generatorcheck = Math.max(player.upgrades[101] + player.upgrades[102] + player.upgrades[103] + player.upgrades[104] + player.upgrades[105])
if (i == 'one') {
    if (player.challengecompletions.one > 0.5) {achievementaward(78)}
    if (player.challengecompletions.one > 2.5) {achievementaward(79)}
    if (player.challengecompletions.one > 4.5) {achievementaward(80)}
    if (player.challengecompletions.one > 9.5) {achievementaward(81)}
    if (player.challengecompletions.one > 19.5) {achievementaward(82)}
    if (player.challengecompletions.one > 49.5) {achievementaward(83)}
    if (player.challengecompletions.one > 74.5) {achievementaward(84)}

    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e1000") && generatorcheck == 0){achievementaward(75)}
    }
}
if (i == 'two') {
    if (player.challengecompletions.two > 0.5) {achievementaward(85)}
    if (player.challengecompletions.two > 2.5) {achievementaward(86)}
    if (player.challengecompletions.two > 4.5) {achievementaward(87)}
    if (player.challengecompletions.two > 9.5) {achievementaward(88)}
    if (player.challengecompletions.two > 19.5) {achievementaward(89)}
    if (player.challengecompletions.two > 49.5) {achievementaward(90)}
    if (player.challengecompletions.two > 74.5) {achievementaward(91)}
    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e1000") && generatorcheck == 0){achievementaward(76)}
    }
}
if (i == 'three') {
    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e99999") && generatorcheck == 0){achievementaward(77)}
    }
    if (player.challengecompletions.three > 0.5) {achievementaward(92)}
    if (player.challengecompletions.three > 2.5) {achievementaward(93)}
    if (player.challengecompletions.three > 4.5) {achievementaward(94)}
    if (player.challengecompletions.three > 9.5) {achievementaward(95)}
    if (player.challengecompletions.three > 19.5) {achievementaward(96)}
    if (player.challengecompletions.three > 49.5) {achievementaward(97)}
    if (player.challengecompletions.three > 74.5) {achievementaward(98)}
}
if (i == 'four') {
    if (player.challengecompletions.four > 0.5) {achievementaward(99)}
    if (player.challengecompletions.four > 2.5) {achievementaward(100)}
    if (player.challengecompletions.four > 4.5) {achievementaward(101)}
    if (player.challengecompletions.four > 9.5) {achievementaward(102)}
    if (player.challengecompletions.four > 19.5) {achievementaward(103)}
    if (player.challengecompletions.four > 49.5) {achievementaward(104)}
    if (player.challengecompletions.four > 74.5) {achievementaward(105)}
}
if (i == 'five') {
    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e120000")) {achievementaward(63)}
    }
    if (player.challengecompletions.five > 0.5) {achievementaward(106)}
    if (player.challengecompletions.five > 2.5) {achievementaward(107)}
    if (player.challengecompletions.five > 4.5) {achievementaward(108)}
    if (player.challengecompletions.five > 9.5) {achievementaward(109)}
    if (player.challengecompletions.five > 19.5) {achievementaward(110)}
    if (player.challengecompletions.five > 49.5) {achievementaward(111)}
    if (player.challengecompletions.five > 74.5) {achievementaward(112)}
}
if (i == 'six') {
    if (player.challengecompletions.six > 0.5) {achievementaward(113)}
    if (player.challengecompletions.six > 1.5) {achievementaward(114)}
    if (player.challengecompletions.six > 2.5) {achievementaward(115)}
    if (player.challengecompletions.six > 4.5) {achievementaward(116)}
    if (player.challengecompletions.six > 9.5) {achievementaward(117)}
    if (player.challengecompletions.six > 14.5) {achievementaward(118)}
    if (player.challengecompletions.six > 24.5) {achievementaward(119)}
}
if (i == 'seven') {
    if (player.challengecompletions.seven > 0.5) {achievementaward(120)}
    if (player.challengecompletions.seven > 1.5) {achievementaward(121)}
    if (player.challengecompletions.seven > 2.5) {achievementaward(122)}
    if (player.challengecompletions.seven > 4.5) {achievementaward(123)}
    if (player.challengecompletions.seven > 9.5) {achievementaward(124)}
    if (player.challengecompletions.seven > 14.5) {achievementaward(125)}
    if (player.challengecompletions.seven > 24.5) {achievementaward(126)}
}
if (i == 'eight') {
    if (player.challengecompletions.eight > 0.5) {achievementaward(127)}
    if (player.challengecompletions.eight > 1.5) {achievementaward(128)}
    if (player.challengecompletions.eight > 2.5) {achievementaward(129)}
    if (player.challengecompletions.eight > 4.5) {achievementaward(130)}
    if (player.challengecompletions.eight > 9.5) {achievementaward(131)}
    if (player.challengecompletions.eight > 14.5) {achievementaward(132)}
    if (player.challengecompletions.eight > 24.5) {achievementaward(133)}
}
}

function achievementdescriptions(i) {
    var x = "adesc" + i
    var y = window[x]
    var z = ""
    var k = ""
   
    var j = "areward" + i
    k = window[j]
    if (k === undefined) {
        k = ""
    } 

    if (player.achievements[i] > 0.5) {
        z = z + " COMPLETED!"
    }
    document.getElementById("achievementdescription").textContent = y + z
    document.getElementById("achievementreward").textContent = "Reward: " + achievementpointvalues[i] + " AP. " + achievementpointvalues[i] + " Quarks! " + k
    if (player.achievements[i] > 0.5) {
        document.getElementById("achievementdescription").style.color = "gold"
    }
    else {document.getElementById("achievementdescription").style.color = "white"}
}
function achievementaward(num) {
    if (player.achievements[num] < 0.5) {
        player.achievementPoints += achievementpointvalues[num]
        player.worlds += achievementpointvalues[num]
        document.getElementById("achievementprogress").textContent = "Achievement Points: " + player.achievementPoints + "/" + totalachievementpoints + " [" + (100 * player.achievementPoints / totalachievementpoints).toPrecision(4) + "%]"
        player.achievements[num] = 1;
        revealStuff()
    }
    var x = "ach" + num
    document.getElementById(x).style.backgroundColor = "Green"
}

