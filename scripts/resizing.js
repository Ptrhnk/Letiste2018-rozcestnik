const clickResizeAmount = 20;
const clickAnimationTime = 100;
const focusResizeAmount = 70;
const focusAnimationTime = 200;
const gooutResizeAmount = 20;
const gooutResizeTime = 200;
//
$(document).ready(function() {
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
    $(".goout").mouseover(function() {
      $(".goout").animate({
        height: '+=' + gooutResizeAmount + 'px',
        marginLeft: '-=' + gooutResizeAmount / 2 + 'px',
        marginTop: '-=' + gooutResizeAmount / 2 + 'px',
        borderRadius: 60 + "px",
      }, gooutResizeTime);
    });
    $(".goout").mouseout(function() {
      $(".goout").animate({
        height: '-=' + gooutResizeAmount + 'px',
        marginLeft: '+=' + gooutResizeAmount / 2 + 'px',
        marginTop: '+=' + gooutResizeAmount / 2 + 'px',
        borderRadius: 90 + "px",
      }, gooutResizeTime);
    });
});
