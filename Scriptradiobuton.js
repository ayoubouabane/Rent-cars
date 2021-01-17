function somme()
{
var a=document.getElementById("txtX").value
var b=document.getElementById("txtY").value
if(document.getElementById("plus").checked)
document.getElementById("txtRes").innerHTML=parseInt(a)+parseInt(b)
if(document.getElementById("moins").checked)
document.getElementById("txtRes").innerHTML=parseInt(a)-parseInt(b)
if(document.getElementById("mult").checked)
document.getElementById("txtRes").innerHTML=parseInt(a)*parseInt(b)
if(document.getElementById("div").checked)
document.getElementById("txtRes").innerHTML=parseInt(a)/parseInt(b)

}