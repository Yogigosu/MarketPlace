$(document).ready(function()
{
    $("#addfeedback").css("display","none");
    $("#addfeedback").on("click",function()
    {
        if($("#feedback").val()=="")
        {
            alert("Please Enter Feedback");
            return;
        }
        else
        {
            alert("Thanks for submitting the feedback");
            window.location="homepage.html";
        }
    });
$.ajax(
    {
        url:"sellers.json",
        cache:false,
        success:function(sellers)
        {
            
            $(sellers.sellers).each(function()
            {
                let sellername=this.name;
                let radiobutton=document.createElement("input");
                radiobutton.type="radio";
                radiobutton.name="sellers";  
                radiobutton.onclick=function(){clicked()};
                $("#sellers").append(radiobutton);
                let label1=document.createElement("label");
                label1.innerText=sellername;
                $("#sellers").append(label1);
                let div=document.createElement("div");
                div.style.height="20px";
                $("#sellers").append(div);

            });            
        },
        error:function(xhr,status,error)
        {
            alert("Unable to load sellers");
            return;
        }
    }
);
});

function clicked()
{
    $("#addfeedback").css("display","block");
}