/**
 * Current template for listing Best in Slot
 * 
 * number: row number
 * item_slot: where the item goes (ie. head, chest, ...)
 * item_id: Item Technical Identifier on wowhead.com(http://www.wowhead.com/item=147124/gravewarden-visage => id = 147124)
 * rel: bonus ID (difficulty, gems, procs, ...). See related section of http://www.wowhead.com/tooltips#related-legion-bonus-ids
 *  Tomb of Sargeras Bonus ID :
 *      - Raid Finder : 3564
 *      - Normal Mode : 3561
 *      - Heroic Mode : 3562
 *      - Mythic Mode : 3563
 *  Basically take the bonus value in wowhead url. "41:1537:1808:3563" for this item http://www.wowhead.com/item=147123/gravewarden-handguards&bonus=41:1537:1808:3563
 * boss_id : Boss number. See model.js
 * item_level : base item level
 * bonus: Benefits you get while having this piece
 *  Available bonus values :
 *      - Txx : Tier xx set
 *      - Legendary : You know what this means !
 *      - 238042 : Technical Identifier for relic spell ( https://www.wowhead.com/spell=238042 )
 */
var templateData = [
    {
        number: "1",
        item_slot: "Head",
        item_id: "147124",
        rel: "3563",
        boss_id: "2",
        item_level: "930",
        bonus: "T20"
    }
];

/**
 * Current Blood DK Best in Slot list
 */
var bloodDkData = [
    {
        number: "1",
        item_slot: "Head",
        item_id: "147124",
        rel: "3563",
        boss_id: "2",
        item_level: "930",
        bonus: "T20"
    },
    {
        number: "2",
        item_slot: "Neck",
        item_id: "147013",
        rel: "3563",
        boss_id: "2",
        item_level: "930",
        bonus: ""
    },
    {
        number: "3",
        item_slot: "Shoulder",
        item_id: "144281",
        rel: "3570",
        boss_id: "",
        item_level: "970",
        bonus: "Legendary"
    },
    {
        number: "4",
        item_slot: "Back",
        item_id: "147122",
        rel: "3563",
        boss_id: "6",
        item_level: "930",
        bonus: "T20"
    },
    {
        number: "5",
        item_slot: "Chest",
        item_id: "147067",
        rel: "3563",
        boss_id: "3",
        item_level: "930",
        bonus: ""
    },
    {
        number: "6",
        item_slot: "Wrist",
        item_id: "147073",
        rel: "3563",
        boss_id: "2",
        item_level: "930",
        bonus: ""
    },
    {
        number: "7",
        item_slot: "Hands",
        item_id: "147123",
        rel: "3563",
        boss_id: "3",
        item_level: "930",
        bonus: "T20"
    },
    {
        number: "8",
        item_slot: "Waist",
        item_id: "147072",
        rel: "3563",
        boss_id: "9",
        item_level: "940",
        bonus: ""
    },
    {
        number: "9",
        item_slot: "Legs",
        item_id: "147125",
        rel: "3563",
        boss_id: "5",
        item_level: "930",
        bonus: "T20"
    },
    {
        number: "10",
        item_slot: "Feet",
        item_id: "147428",
        rel: "3563",
        boss_id: "",
        item_level: "930",
        bonus: ""
    },
    {
        number: "11",
        item_slot: "Finger 1",
        item_id: "147195",
        rel: "3563",
        boss_id: "9",
        item_level: "940",
        bonus: ""
    },
    {
        number: "12",
        item_slot: "Finger 2",
        item_id: "147021",
        rel: "3563",
        boss_id: "4",
        item_level: "930",
        bonus: ""
    },
    {
        number: "13",
        item_slot: "Trinket Tank 1",
        item_id: "147023",
        rel: "3563",
        boss_id: "5",
        item_level: "930",
        bonus: ""
    },
    {
        number: "14",
        item_slot: "Trinket Tank 2",
        item_id: "147026",
        rel: "3563",
        boss_id: "9",
        item_level: "940",
        bonus: ""
    },
    {
        number: "15",
        item_slot: "Trinket Hybrid",
        item_id: "147022",
        rel: "3563",
        boss_id: "1",
        item_level: "930",
        bonus: ""
    },
    {
        number: "16",
        item_slot: "Trinket DPS",
        item_id: "147009",
        rel: "3563",
        boss_id: "1",
        item_level: "930",
        bonus: ""
    },
    {
        number: "17",
        item_slot: "Shadow Relic",
        item_id: "147108",
        rel: "3563",
        boss_id: "1",
        item_level: "930",
        bonus: "192457"
    },
    {
        number: "18",
        item_slot: "Iron Relic",
        item_id: "147100",
        rel: "3563",
        boss_id: "3",
        item_level: "930",
        bonus: "192457"
    },
    {
        number: "19",
        item_slot: "Blood Relic",
        item_id: "147082",
        rel: "3563",
        boss_id: "9",
        item_level: "940",
        bonus: "238042"
    }
];
