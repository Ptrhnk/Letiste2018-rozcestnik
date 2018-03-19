const clickAnimationTime = 200;
const focusAnimationTime = 400;
const clickResizeAmount = 200;
const focusResizeAmount = 200;
//
$(document).ready(function() {
    $(".logo").click(function() {
      $(".logo").animate({
        height: '-=' + clickResizeAmount + 'px',
        width: '-=' + clickResizeAmount + 'px',
      },
      clickAnimationTime);
      $(".logo").animate({
        height: '+=' + clickResizeAmount + 'px',
        width: '+=' + clickResizeAmount + 'px',
      },
      300);
    });
    $(".logo").mouseover(function() {
      $(".logo").animate({
        height: '+=' + focusResizeAmount + 'px',
        width: '+=' + focusResizeAmount + 'px',
      }, focusAnimationTime);
    });
    $(".logo").mouseout(function() {
      $(".logo").animate({
        height: '-=' + focusResizeAmount + 'px',
        width: '-=' + focusResizeAmount + 'px',
      }, focusAnimationTime);
    });
});
