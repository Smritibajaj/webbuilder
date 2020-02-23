var data = function () {
    var jsonTemp = null;
    $.ajax({
        'async': false,
        'url': "config.json",
        'success': function (data) {
            jsonTemp = data;
        }
    });
    return jsonTemp;
}();
console.log(data.themeFinder[0].html);
$(document).ready(function () {
for(var i = 0 ; i<data.themeFinder.length ; i++){
    $('#data').append(data.themeFinder[i].html)
}
$('#data').on('click','.hi', function(){
    var dataId = ($(this).attr("id"));
    window.location.href = "/web?"+dataId;
});
});


