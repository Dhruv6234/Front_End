function RegAPI()
{
    // console.log("called");

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let mobile = document.getElementById('mobile').value;

    console.log("name");
    

    const data = {username:name, email:email, password:pwd, mobile:mobile }
    console.log(data);


    fetch('http://localhost/api/registration_api' ,{method:'post',
headers:{
    'Content-type':'application/json'

},body:JSON.stringify({allData:data})}).then((res)=>res.json())
.then((Response)=>{
    console.log(Response);
})

}



//login



const logindata = document.querySelector('#logindata');
logindata.addEventListener('click',function(){
    console.log("called");
    let uname = document.getElementById('name').value;
    let pass = document.getElementById('pwd').value;
    fetch('http://localhost/api/login_get_method?username='+uname+'&password='+pass).then((res)=>res.json()).then((Res)=>{
        console.log(Res);
    if(Res.Code == 1)
    {
        alert("Login Success");
    }
    else{
        alert("Please Register your self");
    }
    })
})