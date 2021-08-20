$(document).ready(function(){ 

    function creatcategories(categoryData){
      var categoryTemplate = $("#categorieList").html();
      var categoryComplieTemplate = Handlebars.compile(categoryTemplate);
      var categoryGeneratedHTML = categoryComplieTemplate(categoryData);
      $("#categoriescontainer").html(categoryGeneratedHTML);
    }
    $.getJSON("/server/categories/index.get.json", 
    function (data) {
     var myJsonData = data;
     creatcategories(myJsonData);
});
  
  });