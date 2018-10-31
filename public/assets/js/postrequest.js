
var i = 0;
$('body').on('click', '#submit', function (event) {
    event.preventDefault()

    // console.log("computer");
    var ndiv = $('<div/>', { class: 'ndiv', id: 'newdiv' + i });

    var newitem = $('#inputtext').val();
    if ($.trim($("#inputtext").val()) == '') {

        alert('Enter Burger Name');
    }
    else {
        var p = $('<p>', { text: newitem });
        var newid = Date.now();
        var mdevour = $('<button/>', { text: 'Devour it', class: 'devour', id: newid, value: newid + "_" + newitem });

        i++;
        $(ndiv).append(p, mdevour);
        $('.row21').append(ndiv);
        $('#inputtext').val(" ");

        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/api/burgers/",

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            data: JSON.stringify({
                item_name: newitem,
                item_id: newid
            })
        });
    }
});


