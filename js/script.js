
// jq Example-01
$(document).ready(function(){
  
    $('#s_alert').on('click',function(){
    alert("welcme");
    });

    // jq Example-02
    
    $('#hide').on('click',function(){
     $('#sh_h3').hide();
   });
    $('#show').on('click',function(){
     $('#sh_h3').show();
   });
    $('#togg').on('click',function(){
     $('#sh_h3').toggle(300);
   });

    //ex-3
   $(".ques").on('click',function(){
    $('.answ').slideToggle();
   });

   //ex-4
   $("#ex-4 p").on("click", function () {
    $(this).hide();
  });
   $("#ex-5 button").on("click", function () {
    $("#ex-5 p").hide();
  });

    $("#ex-6 button").on("click", function () {
    $("#ex-6 h5").hide();
  });

    $("#ex-7 button").on("click", function () {
    $("#ex-7 .red-7").fadeIn();
    $("#ex-7 .green-7").fadeIn("fast");
    $("#ex-7 .blue-7").fadeIn(2000);
  });

      $("#ex-8 button").on("click", function () {
    $("#ex-8 .red-8").fadeOut();
    $("#ex-8 .green-8").fadeOut("slow");
    $("#ex-8 .blue-8").fadeOut(2000);
  });

      $("#ex-9 button").on("click", function () {
    $("#ex-9 .red-9").fadeToggle();
    $("#ex-9 .green-9").fadeToggle("slow");
    $("#ex-9 .blue-9").fadeToggle(2000);
  });

      $("#ex-10 #btn-new-comment").on("click", function () {
    var comment = $("#ex-10 #new-comment").val();
    var newP = document.createElement("p");
    newP.innerHTML = `
      <p>${comment}</p>
    `;
    $("#ex-10 #comment-container").append(newP);

    // $("#ex-10 #comment-container").append(`
    //   <p>${comment}</p>
    // `);

    $("#ex-10 #new-comment").val('');

    // console.log(comment)
  });

   $("#ex-11 button").on("click", function () {
    const value = $("#ex-11 input").val();
    alert(value);
  })
    
    $("#ex-12 button").on("click", function () {
    $(".container-12").prepend("<h5>Alhamdulillah</h5>");
  }); 

  $("#ex-13 .btn-1").on("click", function () {
    const attr = $("#ex-13 p a").attr("href");
    alert(attr);
  });
  $("#ex-13 .btn-2").on("click", function () {
    const attr = $("#ex-13 img#tea").attr("alt");
    alert(attr);
  });

  $("#ex-14 #button-1").on("click", function () {
    $("#ex-14 p")
      .animate({ width: "100%" })
      .animate({ fontSize: "45px" })
      .animate({ borderWidth: 30 });
  });
  $("#ex-14 #button-2").on("click", function () {
    $("#ex-14 p").removeAttr("style");
  });

 $(".flip-15").on("click", function () {
    $(".panel-15").slideToggle(6000);
  });
  $("#ex-15 button").on("click", function () {
    $(".panel-15").stop();
  });

 $("#ex-16 button").on("click", function () {
    $(".box-16").animate({ width: "toggle" }, 6000);
  });

 $("#ex-17 button").on("click", function () {
    $(".box-17").animate({
      width: "200px",
      height: "200px",
      marginLeft: "150px",
      borderWidth: "10px",
      opacity: "0.5",
    });
  });

 $("#ex-18 button").on("click", function () {
    const num1 = $("#ex-18 #num-1").val();
    const num2 = $("#ex-18 #num-2").val();
    const result = parseInt(num1) + parseInt(num2);
    $("#r-18").text(result);
  });
 $("#ex-19 button").on("click", function () {
    const num1 = $("#ex-19 #num-1").val();
    const num2 = $("#ex-19 #num-2").val();
    const result = parseInt(num1) - parseInt(num2);
    $("#r-19").text(result);
  });

$("#ex-20 button").on("click", function () {
    const num1 = $("#ex-20 #num-1").val();
    const num2 = $("#ex-20 #num-2").val();
    const result = parseInt(num1) * parseInt(num2);
    $("#r-20").text(result);
  });

$("#ex-21 button").on("click", function () {
    const num1 = $("#ex-21 #num-1").val();
    const num2 = $("#ex-21 #num-2").val();
    const result = parseInt(num1) / parseInt(num2);
    $("#r-21").text(result);
  });

$("#ex-22 #btn-post").on("click", function () {
      const post = $("#ex-22 #post-text").val();
      $("#ex-22 #default-post").text(post);
      $("#ex-22 #post-text").val('');
    });

});
// 

 