$(document).ready(function(){ 

    let windowSize =$(window).width();
    if(windowSize < 768){
         $(".sidenav").hide();
         $(".container-fluid").children("select").show();
    }else{
         $(".container-fluid").children("select").hide();
         $(".sidenav").show();
    }
    
    function creatproductList(productData){
      var productTemplate = $("#productList").html();
      var productComplieTemplate = Handlebars.compile(productTemplate);
      var productGeneratedHTML = productComplieTemplate(productData);
      $("#product-list-container").html(productGeneratedHTML);
    }
    $.getJSON("/server/products/index.get.json", 
    function (data) {
     var myProductData = data;
     creatproductList(myProductData);
    });

     function creatproductDropDown(productListDropData){
        var productListTemplate = $("#productDropDownListList").html();
        var productListComplieTemplate = Handlebars.compile(productListTemplate);
        var productListGeneratedHTML = productListComplieTemplate(productListListDropData);
        $("#productdropDown-list-container").html(productListGeneratedHTML);
      }
      $.getJSON("/server/categories/index.get.json", 
      function (data) {
       var myProductListData = data;
       creatproductDropDown(myProductListData);
       for(var i= 0; i<data.length; i++){
           $("#productListMobile").append('<option class="dropDownList" value="'+data[i].id+'" selected>'+data[i].name+'</option>')
       }
});

$(document).on("click","#productdropDown-list-container",function(){
 let selectedProductId = $(this).attr("id");
 $(".productCards").each(function(){
   let productId = $(this).attr("category");
   if(selectedProductId == productId){
     $(this).show();
   }else{
    $(this).hide();
   }
 });
});

$(document).on("change","#productListMobile",function(){
    let selectedProductId = $(this).find("option:selected").val();
    $(".productCards").each(function(){
      let productId = $(this).attr("category");
      if(selectedProductId == productId){
        $(this).show();
      }else{
       $(this).hide();
      }
    });
   });

});