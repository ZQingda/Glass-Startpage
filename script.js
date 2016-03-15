function blurAdjustBG () {
  var totalInnerWidth = window.innerWidth;
  document.getElementById("blurtest").style.backgroundSize = totalInnerWidth + "px";
};

window.onload = blurAdjustBG;
window.onresize = blurAdjustBG;

function backColorChange() {
  $('#backColor').on('keyup', function() {
    var colorID = $(this).val();
    //alert(colorID);
    if (colorID.length == 6 || colorID.length == 0) {
      $(this).closest('#outershell').css('background-color', colorID);
    };
  });
};

function menuButton() {
  $('#menuButton').on('click', function() {
    $(this).closest('body').find('#menu').fadeToggle('200');
    //$(this).closest('body').find('#outershell').fadeToggle('200');
    //$(this).closest('body').find('#blurtest').fadeToggle('200');
  })
}

function linkChange() {

}

$(document).ready(function () {
  menuButton();
  backColorChange();
});
