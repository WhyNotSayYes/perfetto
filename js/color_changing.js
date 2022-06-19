// let btnGreen = document.getElementById("btn-green");
// btnGreen.addEventListener("click", function() {
//   this.classList.add("green");
// });
// let btnRed = document.getElementById("btn-red");
// btnRed.addEventListener("click", function() {
//   this.classList.add("red");
// });
// let btnOrange = document.getElementById("btn-orange");
// btnOrange.addEventListener("click", function() {
//   this.classList.add("orange");
// });

$(".languages__spanish").click(function(){
    $(this).toggleClass("green");
    $(".welcome__button-welcome").toggleClass("green");
   });

   $(document).on('mouseup', function(e) { 
    let s = $('.languages__spanish.green');
    let sS = $('.welcome__button-welcome');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('green');
    }
    if(!sS.is(e.target) && sS.has(e.target).length === 0) {
        sS.removeClass('green'); 
    }
  });

  $(".languages__english").click(function(){
    $(this).toggleClass("red");
    $(".welcome__button-welcome").toggleClass("red");
   });

   $(document).on('mouseup', function(e) { 
    let s = $('.languages__english.red');
    let sS = $('.welcome__button-welcome');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('red');
    }
    if(!sS.is(e.target) && sS.has(e.target).length === 0) {
        sS.removeClass('red'); 
    }
  });

  $(".languages__italian").click(function(){
    $(this).toggleClass("orange");
    $(".welcome__button-welcome").toggleClass("orange");
   });

   $(document).on('mouseup', function(e) { 
    let s = $('.languages__italian.orange');
    let sS = $('.welcome__button-welcome');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('orange');
    }
    if(!sS.is(e.target) && sS.has(e.target).length === 0) {
        sS.removeClass('orange'); 
    }
  });

