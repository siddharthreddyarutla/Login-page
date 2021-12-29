function user()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="user"&& password=="admin")
    {
        alert("Logined successfully");
        return false;
    }
    else
    {
        alert("Login failed");
    }

}