$(document).ready(function () {
    $('#wow-bis-tos').DataTable({
        data: bloodDkData,
        "paging": false,
        dom: 'l<"toolbar">frtip',
        initComplete: function () {
            $("div.toolbar").html('<div class="btn-group" data-toggle="buttons"> <label class="btn btn-primary toggleDifficulty active"> <input type="radio" name="options" id="' + difficulty.mythic.id + '" autocomplete="off" checked>' + difficulty.mythic.name + '</label> <label class="btn btn-primary toggleDifficulty"> <input type="radio" name="options" id="' + difficulty.heroic.id + '" autocomplete="off">' + difficulty.heroic.name + '</label> <label class="btn btn-primary toggleDifficulty"> <input type="radio" name="options" id="' + difficulty.normal.id + '" autocomplete="off">' + difficulty.normal.name + '</label> <label class="btn btn-primary toggleDifficulty"> <input type="radio" name="options" id="' + difficulty.raidfinder.id + '" autocomplete="off">' + difficulty.raidfinder.name + '</label></div>');
        },
        columns: [
            { title: "#" },
            { title: "Slot" },
            { title: "Item" },
            { title: "Boss" },
            { title: "Base ilevel" },
            { title: "Bonus" }
        ],
        columnDefs: [
            {
                'targets': 0,
                'cellType': 'th',
                'data': 'number',
                'createdCell': function (th, cellData, rowData, row, col) {
                    $(th).attr('scope', 'row');
                }
            },
            {
                'targets': 1,
                'data': 'item_slot'
            },
            {
                'targets': 2,
                'render': function (data, type, full, meta) {
                    // Render wowhead tooltip with item_id and bonuses
                    return '<a href="https://www.wowhead.com/item=' + full.item_id + '" rel="bonus=' + full.rel + '" class="itemRef"/>';
                }
            },
            {
                'targets': 3,
                'render': function (data, type, full, meta) {
                    // Render boss name and avatar
                    return full.boss_id ? bossWithImg(full.boss_id) : 'N / A';
                }
            },
            {
                'targets': 4,
                'data': 'item_level'
            },
            {
                'targets': 5,
                'render': function (data, type, full, meta) {
                    // Render bonuses (Tier set, Legendary and Relics)
                    return renderBonus(full.bonus);
                }
            }
        ]
    });

    /**
     * update tooltip when switching difficulty
     */
    $('.toggleDifficulty').on('change', function (e) {
        changeDifficulty(e.target.id);
    });
    
});

/**
 * RegExp matching all difficulties ID
 */
var regexDifficultyId = new RegExp(Object.keys(difficulty).reduce(function (acc, current, index, array) {
    // Fixing initial value
    if (index === 1) {
        return difficulty[acc].id + '|' + difficulty[current].id;
    }
    return acc + '|' + difficulty[current].id;
}), 'g');


/**
 * Update all items to selected difficulty
 * 
 * @param {number} bonusVal 
 */
var changeDifficulty = (bonusVal) => {
    var wowTooltips = document.getElementsByClassName('itemRef');
    Array.prototype.forEach.call(wowTooltips, e => {
        // Switching difficulty ID in "rel" attribute for all item cell
        e.setAttribute("rel", e.getAttribute("rel").replace(regexDifficultyId, bonusVal));
    });
};

/**
 * Generate html with boss name and avatar for view value
 * 
 * @param {number} id 
 */
var bossWithImg = (id) => {
    var boss = bosses.find((e) => { return e.id === id; });
    return '<img src="' + boss.img + '" alt="" class="content-image" /><br/>' + boss.name;
}


/**
 * Render bonuses (Tier set, Legendary and Relics)
 * 
 * @param {*} value 
 */
var renderBonus = (value) => {
    if (!value) {
        return '';
    }
    if (value.match(/legendary/i)) {
        return '<span class="q5 bold">Legendary</span>';
    }
    if (value.match(/T/i)) {
        return '<span class="q4 bold">' + value + '</span>';
    }
    return '<a href="https://www.wowhead.com/spell=' + value + '"></a>';
}