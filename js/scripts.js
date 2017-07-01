$(document).ready(function () {
    $('#wow-bis-tos').DataTable({
        data: bloodDkData,
        "paging": false,
        dom: 'l<"toolbar">frtip',
        initComplete: function () {
            $("div.toolbar").html('<div class="btn-group" data-toggle="buttons"> <label class="btn btn-primary toggleDifficulty active"> <input type="radio" name="options" id="3563" autocomplete="off" checked> Mythic Mode </label> <label class="btn btn-primary toggleDifficulty"> <input type="radio" name="options" id="3562" autocomplete="off"> Heroic Mode </label> </div>');
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
                    return '<a href="https://ptr.wowhead.com/item=' + full.item_id + '" rel="bonus=' + full.rel + '" class="itemRef"/>';
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
var regexDifficultyId = new RegExp(Object.values(difficulty).reduce(function (a, b) {
    return a + '|' + b;
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
    return '<a href="https://ptr.wowhead.com/spell=' + value + '"></a>';
}