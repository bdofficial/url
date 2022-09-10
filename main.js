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
    window.open('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bdop") {
    window.open('https://bdop.netlify.app');
  }
  //////////////////
else if (dstText.toLowerCase() == "light") {
    window.open('fl.html');
  }
else if (dstText.toLowerCase() == "fl") {
    window.open('fl.html');
  }
else if (dstText.toLowerCase() == "notepad") {
    window.open('https://notepad.js.org');
  }
else if (dstText.toLowerCase() == "np") {
    window.open('https://notepad.js.org');
  }
  //////////////////
  //////////////////
  //////////////////
  else if (dstText == "1234") {
    window.open('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bd official products") {
    window.open('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bdofficialproducts") {
    window.open('https://bdop.netlify.app');
  }
  //////////////////
  else if (dstText == "1436") {
    window.open('https://bdop.netlify.app');
  }
////////////////////
else if (dstText.toLowerCase() == "google") {
    window.open('https://google.com');
  }
else if (dstText.toLowerCase() == "youtube") {
    window.open('https://youtube.com');
  }
else if (dstText.toLowerCase() == "facebook") {
    window.open('https://facebook.com');
  }
else if (dstText.toLowerCase() == "instagram") {
  window.open("https://instagram.com");
}
else if (dstText.toLowerCase() == "tiktok") {
  window.open("https://instagram.com");
}
else if (dstText.toLowerCase() == "twitter") {
  window.open("https://twitter.com");
}
////////////////////
else if (dstText.toLowerCase() == "go") {
  window.open("https://google.com");
}
else if (dstText.toLowerCase() == "gg") {
  window.open("https://google.com");
}
else if (dstText.toLowerCase() == "yt") {
  window.open("https://youtube.com");
}
else if (dstText.toLowerCase() == "fb") {
  sbfade.opacity = 0;
  window.open('https://facebook.com');
}
else if (dstText.toLowerCase() == "ig") {
  window.open("https://instagram.com");
}
else if (dstText.toLowerCase() == "tt") {
  window.open("https://tiktok.com");
}
else if (dstText.toLowerCase() == "tw") {
  window.open("https://twitter.com");
}
 else if(dstText==""){
   alert("Fill-Token-Correctly");
 }
else if (dstText.includes('http')) {
  var sel = document.getElementById('dstText').value;
  window.open(sel);
 }
 else if (dstText.includes('.')) {
  var sel = document.getElementById('dstText').value;
  window.open('http://' + sel);
 }
  //////////////////
  //////////////////
else if (srcText == "") {
  alert("Fill-Token-Correctly");
}
else {
 window.open('https://www.google.com/search?sitesearch=&q='+srcText);
  }
};
/////////////////
