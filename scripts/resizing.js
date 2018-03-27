const clickResizeAmount = 20;
const clickAnimationTime = 100;
const focusResizeAmount = 30;
const focusAnimationTime = 200;
const gooutResizeAmount = 12;
const gooutResizeTime = 150;
//
$(document).ready(function() {
  $(".logo").fadeOut(10);
  $(".logo").fadeIn(2000);
    $(".logo").mouseover(function() {
      $(".logo").animate({
        height: '+=' + focusResizeAmount + 'px',
      }, focusAnimationTime);
    });
    $(".logo").mouseout(function() {
      $(".logo").animate({
        height: '-=' + focusResizeAmount + 'px',
      }, focusAnimationTime);
    });
    $(".logo").mouseover(function() {
      $(".center_absolute").animate({
        marginTop: '-=' + focusResizeAmount / 2 + 'px',
      }, focusAnimationTime);
    });
    $(".logo").mouseout(function() {
      $(".center_absolute").animate({
        marginTop: '+=' + focusResizeAmount / 2 + 'px',
      }, focusAnimationTime);
    });
    $(".goout").mouseover(function() {
      $(".goout").animate({
        height: '+=' + gooutResizeAmount + 'px',
        marginLeft: '-=' + gooutResizeAmount / 4 + 'px',
        marginTop: '-=' + gooutResizeAmount / 2 + 'px',
        borderRadius: 50 + "px",
      }, gooutResizeTime);
    });
    $(".goout").mouseout(function() {
      $(".goout").animate({
        height: '-=' + gooutResizeAmount + 'px',
        marginLeft: '+=' + gooutResizeAmount / 4 + 'px',
        marginTop: '+=' + gooutResizeAmount / 2 + 'px',
        borderRadius: 20 + "px",
      }, gooutResizeTime);
    });
});
