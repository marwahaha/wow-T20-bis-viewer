$(document).ready(function () {
    $('#wow-bis-tos').DataTable({
        "paging": false,
        dom: 'l<"toolbar">frtip',
        initComplete: function () {
            $("div.toolbar").html('<div class="btn-group" data-toggle="buttons"> <label class="btn btn-primary toggleDifficulty active"> <input type="radio" name="options" id="3563" autocomplete="off" checked> Mythic Mode </label> <label class="btn btn-primary toggleDifficulty"> <input type="radio" name="options" id="3562" autocomplete="off"> Heroic Mode </label> </div>');
        }
    });

    $('.toggleDifficulty').on('change', function (e) {
        changeDifficulty(e.target.id);
    });

});

var changeDifficulty = (bonusVal) => {
    var wowTooltips = document.getElementsByClassName('q4');
    Array.prototype.forEach.call(wowTooltips, e => {
        e.setAttribute("rel", "bonus=" + bonusVal);
    });
};