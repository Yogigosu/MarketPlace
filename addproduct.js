var xhr;
var xhr1;
window.addEventListener("load",function()
{
    //event listener for product add button
    document.getElementById("addproduct").addEventListener("click",addproductfn,false);
    //code to send get request for categories.xml file
xhr=new XMLHttpRequest();
xhr.addEventListener("readystatechange",loadcategories,false);
xhr.open("GET","categories.xml",true);
xhr.send();

//code to send get request for brands.json file

xhr1=new XMLHttpRequest();
xhr1.addEventListener("readystatechange",loadbrands,false);
xhr1.open("GET","brands.json",true);
xhr1.send();
},false);

//load categories from xml file
function loadcategories()
{
    let dropdown=document.getElementById("categorydropdown");
    if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
    {
        let data=xhr.responseXML;
        let categories=data.getElementsByTagName("category");
        //read all categories from xml file and show in dropdown
        for(let i=0;i<categories.length;i++)
        {
            let name=categories[i].getElementsByTagName("name").item(0).firstChild.nodeValue;
            let option=document.createElement("option");
            option.value=name;
            option.innerHTML=name;
            dropdown.appendChild(option);

        }
        
    }
}

//load brands from brands.json file
function loadbrands()
{
    let dropdown=document.getElementById("brands");

    if(xhr1.readyState==4 && xhr1.status==200 && xhr1.responseText)
    {
        var list=JSON.parse(xhr1.responseText);
        var brands=list.brands;
        //each brand show in dropdown list
        for(let i=0;i<brands.length;i++)
        {
            var brand=brands[i].brand;
            let option=document.createElement("option");
            option.value=brand;
            option.innerHTML=brand;
            dropdown.appendChild(option);            
        }

    }
}

function addproductfn()
{
    var price=document.getElementById("price").value;
    var prodname=document.getElementById("productname").value;
    var detailss=document.getElementById("details").value;
    var resultpararesult=document.getElementById("resultpara");
    var delivery = document.getElementsByName('delivery');
    //validation for price, product name, details and delivery options
    if(price=="")
    {
        resultpararesult.innerHTML="<b><font color='red'>Please Enter Price</font></b>";
        return; 
    }
    else if(price<=0)
    {
        resultpararesult.innerHTML="<b><font color='red'>Please Enter Valid Price</font></b>";
        return;
    }
    else if(prodname=="")
    {
        resultpararesult.innerHTML="<b><font color='red'>Please Enter Product Name</font></b>";
        return;
    }
    else if(detailss=="")
    {
        resultpararesult.innerHTML="<b><font color='red'>Please Enter Product Details</font></b>";
        return;
    }
    else if(!(delivery[0].checked || delivery[1].checked || delivery[2].checked)) 
    {
        resultpararesult.innerHTML="<b><font color='red'>Please Select Delivery Type</font></b>";
        return;
    }
    else
    {
        resultpararesult.innerHTML="<b><font color='green'>Congrats!! Your Product have been added successfully!!</font></b>";
        return;
    }
}