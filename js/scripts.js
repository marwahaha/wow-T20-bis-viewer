$(document).ready(function () {
    $('#wow-bis-tos').DataTable({
        data: bloodDkData,
        "paging": false,
        "info": false,
        dom: 'l<"toolbar">frtip',
        initComplete: function () {
            $("div.toolbar").html(toolbarDifficultyButton);
        },
        columns: [
            { title: "#" },
            { title: "Slot" },
            { title: "Item" },
            { title: "Boss", className: "dt-center" },
            { title: "Base ilevel", className: "dt-center" },
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
                    if (type === 'sort') {
                        // Sorting by ID (which is the right order)
                        return full.boss_id;
                    }
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
    let wowTooltips = document.getElementsByClassName('itemRef');
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
    let boss = bosses.find((e) => { return e.id === id; });
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

/**
 * Create a difficulty button (with icon)
 * 
 * @param {object} difficulty 
 */
var difficultyButton = (difficulty) => {
    return '<label class="btn btn-primary toggleDifficulty">' +
        '<input type="radio" name="options" id="' + difficulty.id + '" autocomplete="off" checked>' +
        '<img src="' + difficulty.img + '" alt="" class="img-circle" />' +
        '<span class="hidden-xs"> ' + difficulty.name + '</span>' +
        '</label>';
};

/**
 * Concat all difficulty buttons
 */
var allDifficultyButton = Object.keys(difficulty).reduce(function (acc, current, index, array) {
    return acc + difficultyButton(difficulty[current]);
}, '');

/**
 * Btn-group + all buttons => table toolbar
 */
var toolbarDifficultyButton = '<div class="btn-group" data-toggle="buttons">' + allDifficultyButton + '</div>';