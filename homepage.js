var counter=1;
window.addEventListener("load",function()
{
document.getElementById("prevbtn").addEventListener("click",loadpreviousimage,false);
document.getElementById("nextbtn").addEventListener("click",loadnextimage,false);
});

function loadpreviousimage()
{
    if(counter==1)
    counter=10;
    else
    counter--;
document.getElementById("homepageimages").src="images/"+counter+".jpg";

}

function loadnextimage()
{
    if(counter==10)
    counter=1;
    else
    counter++;
    document.getElementById("homepageimages").src="images/"+counter+".jpg";
}