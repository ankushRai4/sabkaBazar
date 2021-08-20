$(document).ready(function(){ 

    function creatbanners(bannerData){
      var bannerTemplate = $("#bannerList").html();
      var bannerComplieTemplate = Handlebars.compile(bannerTemplate);
      var bannerGeneratedHTML = bannerComplieTemplate(bannerData);
      $("#independenceDayBanner").html(bannerGeneratedHTML);
    }

    $("#myCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item").click(function(){
      let count = $(this).attr("data-count")
      $("#myCarousel").carousel(parseInt(count));
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
    $.getJSON("/server/banners/index.get.json", 
    function (data) {
     var myJsonData = data;
     creatbanners(myJsonData);
      
     for(var i=0; i< myJsonData.length; i++){
       $(".carousel-indicators").append('<li class="item" data-count="'+i+'"></li>')
     }
});
  
  });