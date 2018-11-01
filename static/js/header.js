/**
 * Created by acer on 2018/9/23.
 */
$(function() {
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    $.ajax({
        url: "header.html",
        type: "get",
        success: function (res) {
            $(res).replaceAll("#header");
        }
    })
})