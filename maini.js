window.onload = function () {
document.getElementById("save").click(); };
//check if "dstText" is in localStorage
if (localStorage["dstText"])
{
    var dstText = localStorage["dstText"] ;
    document.getElementById("dstText").value = dstText ;
}
else
{
    document.getElementById("dstText").placeholder = " " ;
    console.log("dstText no found in localStorage")
}

//save entered gmail address
document.getElementById("save").addEventListener("click", function ()
    {
        var dstText = document.getElementById("dstText").value ;
        //localStorage["dstText"] = dstText ;
        localStorage.setItem("dstText", dstText) ;
        console.log("gmail id saved")
    } , false);
//////////////////
/////////////////
////////////////
function Verify() {
  let dstText = document.getElementById("dstText").value;
  if (dstText == "14369") {
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText = "bdop") {
    window.location.replace('https://bdop.netlify.app');
  }
  //////////////////
  else if (dstText == "1234") {
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText = "bd official products") {
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText = "bdofficialproducts") {
    window.location.replace('https://bdop.netlify.app');
  }
  //////////////////
  else if (dstText == "1436") {
    window.location.replace('https://bdop.netlify.app');
  }
  //////////////////
  //////////////////
  else {
    var sel = document.getElementById('dstText');
    window.location = sel.value
  }
};
/////////////////
