/**
 * Created by acer on 2018/10/7.
 */
$(function() {
    $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
    $.ajax({
        url: "footer.html",
        type: "get",
        success: function (res) {
            $(res).replaceAll("#footer");
        }
    })
})