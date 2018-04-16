
$('#btnstyle1').click(function (e) {
    e.stopPropagation();
    $('#img1').hide();
});

$('#btnstyle2').click(function (e) {
    e.stopPropagation();
    $('#img1').show();
});
