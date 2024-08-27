$(document).ready(function()
{
getallproducts();

});


function buyproduct()
{
   alert("Your Order have been placed successfully!!");
   return;
}

function getallproducts()
{
   $.ajax(
      {
         url:"products.xml",
         cache:false,
         success:function(products)
         {
            $("#allproductsdiv").html("");
            var productslist=$(products).find("product");
            var result="";
         $(productslist).each(function()
         {
            debugger;
            var category=$(this).find("category").text().toLowerCase();
            var productname=$(this).find("productname").text();
            var imagepath=$(this).find("imagepath").text();
            var price=$(this).find("price").text();
            var feature1=$(this).find("feature1").text();
            var feature2=$(this).find("feature2").text();
            var feature3=$(this).find("feature3").text();
            var feature4=$(this).find("feature4").text();
            var price=$(this).find("price").text();
 
               result+="<br><br><b><u>Category : </u></b>"+category+"<br><br>";
               result+="<b><u>Product Name : </u></b>"+productname+"<br><br>";
               result+="<b><u>Price : </u></b>"+price+"<br><br>";
               result+="<img src='"+imagepath+"' <br><br><br>";
               result+="<b><u>Features : </u></b><br>";
               result+="<ol>";
               result+="<li>"+feature1+"</li>";
               result+="<li>"+feature2+"</li>";
               result+="<li>"+feature3+"</li>";
               result+="<li>"+feature4+"</li>";
               result+="</ol><br>";
               result+="<input type='button' value='Buy' id='buybutton' onclick='buyproduct()'><br><br>";
               result+="<div style='background-color:gray;height:20px'></div><br>"
   
         });
         $("#allproductsdiv").html(result);
      
         },
         error:function(xhr,status,error)
         {
            alert("Unable to load products.xml file");
            return;
         }
      }
   );
}