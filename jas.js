alert
var bil;
bil=parseInt (prompt("Jumlah Sila di Pancasila: ", "10"));
if(bil==5)
{
    alert("Selamat Datang di Website Pemerintah Provinsi Bali");
}
else
{
    alert("Jawaban Anda Salah, Silahkan Dipikir Lagi");
    window.location.href = "index.html"
}
function pilih()
{
    if(document.getElementById("pilihan"))
    {
        alert("Terimakasih Atas Pilihannya, Have A Nice Day");
    }
}
function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
{
    xmlhttp=new XMLHttpRequest();
}
else
    xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
	document.getElementById("ajax").innerHTML=xmlhttp.responseText;
}
}
	xmlhttp.open("GET","ajax_info.txt",true);
	xmlhttp.send();
}
function loadXMLDocument()
{
    var xmlhttp;
    if (windows.XMLHttpRequest)
    {
        xmlhttp= new XMLHttpRequest();
    }
    else
        xmlhttp.onreadystatechange=function()
       {
           if(xmlhttp.readyState==4 && xmlhttp.status==200)
           {
               document.getElementById("dataxml").innerHTML=xmlhttp.responseText;
           }
       } 
       xmlhttp.open("GET","data.xml", true);
       xmlhttp.send();
}
