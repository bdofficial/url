window.onload = function() {

};
//check if "dstText" is in localStorage
if (localStorage["dstText"])
{
  var dstText = localStorage["dstText"];
  document.getElementById("dstText").value = dstText;
}
else
{
  document.getElementById("dstText").placeholder = " ";
  console.log("dstText no found in localStorage")
}
//save entered gmail address
document.getElementById("save").addEventListener("click", function()
{
  var dstText = document.getElementById("dstText").value;
  //localStorage["dstText"] = dstText ;
  localStorage.setItem("dstText", dstText);
  console.log("gmail id saved")
}, false);
//////////////////
/////////////////
////////////////
function Verify() {
  let srcText = document.getElementById('srcText').value;
  let dstText = document.getElementById("dstText").value;
  if (dstText == "14369") {
    window.location.href=('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bdop") {
    window.location.href=('https://bdop.netlify.app');
  }
  //////////////////
else if (dstText.toLowerCase() == "light") {
    window.location.href=('fl.html');
  }
else if (dstText.toLowerCase() == "fl") {
    window.location.href=('fl.html');
  }
else if (dstText.toLowerCase() == "notepad") {
    window.location.href=('https://notepad.js.org');
  }
else if (dstText.toLowerCase() == "np") {
    window.location.href=('https://notepad.js.org');
  }
  //////////////////
  //////////////////
  //////////////////
  else if (dstText == "1234") {
    window.location.href=('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bd official products") {
    window.location.href=('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bdofficialproducts") {
    window.location.href=('https://bdop.netlify.app');
  }
  //////////////////
  else if (dstText == "1436") {
    window.location.href=('https://bdop.netlify.app');
  }
////////////////////
else if (dstText.toLowerCase() == "google") {
    window.location.href=('https://google.com');
  }
else if (dstText.toLowerCase() == "youtube") {
    window.location.href=('https://youtube.com');
  }
else if (dstText.toLowerCase() == "facebook") {
    window.location.href=('https://facebook.com');
  }
else if (dstText.toLowerCase() == "instagram") {
  window.location.href=("https://instagram.com");
}
else if (dstText.toLowerCase() == "tiktok") {
  window.location.href=("https://instagram.com");
}
else if (dstText.toLowerCase() == "twitter") {
  window.location.href=("https://twitter.com");
}
////////////////////
else if (dstText.toLowerCase() == "go") {
  window.location.href=("https://google.com");
}
else if (dstText.toLowerCase() == "gg") {
  window.location.href=("https://google.com");
}
else if (dstText.toLowerCase() == "yt") {
  window.location.href=("https://youtube.com");
}
else if (dstText.toLowerCase() == "fb") {
  window.location.href=('https://facebook.com');
}
else if (dstText.toLowerCase() == "ig") {
  window.location.href=("https://instagram.com");
}
else if (dstText.toLowerCase() == "tt") {
  window.location.href=("https://tiktok.com");
}
else if (dstText.toLowerCase() == "tw") {
  window.location.href=("https://twitter.com");
}
 else if(dstText==""){
   alert("Fill-Token-Correctly");
 }
else if (dstText.includes('http')) {
  var sel = document.getElementById('dstText').value;
  window.location.href=(sel);
 }
 else if (dstText.includes('.')) {
  var sel = document.getElementById('dstText').value;
  window.location.href=('http://' + sel);
 }
  //////////////////
  //////////////////
else if (srcText == "") {
  alert("Fill-Token-Correctly");
}
else {
 window.location.href=('https://www.google.com/search?sitesearch=&q='+srcText);
  }
};
/////////////////
