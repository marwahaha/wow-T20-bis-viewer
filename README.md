# World of Warcraft Tier 20 Best in Slot viewer

_Outdated and Abandonned Project._
Website hosted by Github [link](brack0.github.io/wow-T20-bis-viewer/).

Aside from the obvious goal for the users, I created this project to practice the basics of Web development.
Here are the things I use to do so :
- HTML
- SASS
- JS (ES5 or so)
- JQuery :disappointed:
- Bootstrap
- Datatable
- Wowhead lib (Fansite)

## Sass watcher

```
sass --watch main.scss:main.min.css --style compressed
```

## World of Warcraft item template

```javascript
/**
 * Current template for listing Best in Slot (example right below)
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
    },
    {
        number: "2",
        item_slot: "Neck",
        item_id: "147013",
        rel: "3563",
        boss_id: "2",
        item_level: "930",
        bonus: ""
    }
];
```
