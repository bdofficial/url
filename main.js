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
//hide display
const valuehide=document.getElementById('products').style;
(function fade(){(sbfade.opacity-=0)<0?sbfade.display="none":setTimeout(fade,0)})();  
////////////////
function Verify() {
  let srcText = document.getElementById('srcText').value;
  let dstText = document.getElementById("dstText").value;
  if (dstText == "14369") {
 var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bdop") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  //////////////////
else if (dstText.toLowerCase() == "light") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('fl.html');
  }
else if (dstText.toLowerCase() == "fl") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('fl.html');
  }
else if (dstText.toLowerCase() == "notepad") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://notepad.js.org');
  }
else if (dstText.toLowerCase() == "np") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://notepad.js.org');
  }
  //////////////////
  //////////////////
  //////////////////
  else if (dstText == "1234") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bd official products") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bdofficialproducts") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  //////////////////
  else if (dstText == "1436") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
////////////////////
else if (dstText.toLowerCase() == "google") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://google.com');
  }
else if (dstText.toLowerCase() == "youtube") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://youtube.com');
  }
else if (dstText.toLowerCase() == "facebook") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://facebook.com');
  }
else if (dstText.toLowerCase() == "instagram") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (dstText.toLowerCase() == "tiktok") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (dstText.toLowerCase() == "twitter") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://twitter.com");
}
////////////////////
else if (dstText.toLowerCase() == "go") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://google.com");
}
else if (dstText.toLowerCase() == "gg") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://google.com");
}
else if (dstText.toLowerCase() == "yt") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://youtube.com");
}
else if (dstText.toLowerCase() == "fb") {
  var sbfade=valuehide;sbfade.opacity=0;
  sbfade.opacity = 0;
  window.open('https://facebook.com');
}
else if (dstText.toLowerCase() == "ig") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (dstText.toLowerCase() == "tt") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://tiktok.com");
}
else if (dstText.toLowerCase() == "tw") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://twitter.com");
}
 else if(dstText==""){
   alert("Fill-Token-Correctly");
 }
else if (dstText.includes('http')) {
 var sbfade=valuehide;sbfade.opacity=0;
  var sel = document.getElementById('dstText').value;
  window.open(sel);
 }
 else if (dstText.includes('.')) {
 var sbfade=valuehide;sbfade.opacity=0;
  var sel = document.getElementById('dstText').value;
  window.open('http://' + sel);
 }
  //////////////////
  //////////////////
else if (srcText == "") {
  alert("Fill-Token-Correctly");
}
else {
 var sbfade=valuehide;sbfade.opacity=0;
 window.open('https://www.google.com/search?sitesearch=&q='+srcText);
  }
};
/////////////////
