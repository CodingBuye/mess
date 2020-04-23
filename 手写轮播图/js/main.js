var picIndex = 0;

$(".dots div").mouseover(function() {
  picIndex = $(this).index();
  let left = -(picIndex)*500 + 'px';
  $("#carousel").stop().animate({'margin-left': left});
  $(this).addClass('current').siblings().removeClass('current');
})

autoPlayCarousel();

var timeId;
function autoPlayCarousel(){
  timeId = setInterval(function(){
    $(".arrowItems .right").click();
  }, 1000);
}

$(".arrowItems .right").click(function() {
  if(picIndex === $('#carousel li').length-1) {
    picIndex = 0;
    $('#carousel').css({'margin-left': '0px'});
  }
  picIndex++;
  var left = -(picIndex)*500 +'px';
  $("#carousel").stop().animate({'margin-left': left});

  if(picIndex === $('#carousel li').length-1) {
    $(".dots .dot").eq(0).addClass('current').siblings().removeClass('current');
  } else {
    $(".dots .dot").eq(picIndex).addClass('current').siblings().removeClass('current')
  }
});

$(".arrowItems .left").click(function() {
  if(picIndex === 0) {
    picIndex = $('#carousel li').length-1;
    $('#carousel').css({'margin-left': -($('#carousel li').length-1)*500+'px'});
  }
  picIndex--;
  var left = -(picIndex)*500 +'px';
  $("#carousel").stop().animate({'margin-left': left});

  if(picIndex === 0) {
    $(".dots .dot").eq(0).addClass('current').siblings().removeClass('current');
  } else {
    $(".dots .dot").eq(picIndex).addClass('current').siblings().removeClass('current');
  }
});

$(".container").mouseover(function(){
  clearInterval(timeId);
})

$(".container").mouseout(function(){
  autoPlayCarousel();
})


// var picIndex = 0;

// // 为小圆点绑定鼠标经过事件
// $(".dots div").mouseover(function(){
//   picIndex = $(this).index();
//   var left = -(picIndex) * 500 + 'px';
//   // 鼠标经过小圆点时，切换对应的图片
//   $("#carousel").stop().animate({'margin-left': left});
//   // 当前小圆点为红色，其他为白色
//   $(this).addClass('current').siblings().removeClass('current');
// });

// // 自动播放
// autoPlayCarousel();

// var timeId;
// function autoPlayCarousel() {
//   timeId = setInterval(function(){
//     $(".arrowItems .right").click();
//   }, 1000)
// }

// // 右边按钮
// $(".arrowItems .right").click(function(){
//   if(picIndex === $("#carousel li").length -1) {
//     picIndex = 0;
//     $("#carousel").css({'margin-left': '0px'});
//   }
//   picIndex++;
//   var left = -(picIndex)*500+'px';
//   $("#carousel").stop().animate({'margin-left': left});

//   // 控制小圆点
//   if(picIndex === $("#carousel li").length -1){
//     $(".dots div").eq(0).addClass('current').siblings().removeClass('current');
//   } else {
//     $(".dots div").eq(picIndex).addClass('current').siblings().removeClass('current');
//   }
// });

// // 左边按钮
// $(".arrowItems .left").click(function(){
//   if(picIndex === 0) {
//     picIndex = $("#carousel li").length -1;
//     $("#carousel").css({'margin-left': -($("#carousel li").length -1)*500+'px'});
//   }
//   picIndex--;
//   var left = -(picIndex)*500+'px';
//   $("#carousel").stop().animate({'margin-left': left});

//   // 控制小圆点
//   if(picIndex === 0){
//     $(".dots div").eq(0).addClass('current').siblings().removeClass('current');
//   } else {
//     $(".dots div").eq(picIndex).addClass('current').siblings().removeClass('current');
//   }
 
// });

// $(".container").mouseover(function () { 
//   clearInterval(timeId);
// });

// $(".container").mouseout(function(){
//   autoPlayCarousel();
// })