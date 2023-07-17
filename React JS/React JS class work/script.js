function ValidData(e,spnid)
{
    // alert("cjsdhjd")
    if(e.value == "")
    {
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="please Enter Data";
    }
}
function Alpha(e,spnid)
{
    let name=/^[a-zA-Z]+$/
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerHTML=''
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="Please Enter only characters!"
    }
}
function EmailCheck(e,spnid)
{
   
    let email = /^([a-z0-9.-_])+@([a-z0-9.-_])+\.([a-z]{2,3})$/
    if(email.test(e.value))
    {
        document.getElementById(spnid).innerHTML=''
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="Please Enter valid email!"
    }
}

function PwdCheck(e,spnid)
{
    let pwd = /^[a-zA-Z0-9]{3,5}$/
    if(pwd.test(e.value))
    {
        document.getElementById(spnid).innerHTML=''
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="Please Enter min 3 and max 5 chars!"
    }
}
function MobileValid(e,spnid)
{
    let mobile= /^[0-9]{10}$/
    if(mobile.test(e.value))
    {
        document.getElementById(spnid).innerHTML=''
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="Please Enter valid mobile!"
    }
}