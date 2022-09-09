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
  let dstText = document.getElementById("dstText").value;
  if (dstText == "14369") {
 var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText == "bdop") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  //////////////////
else if (dstText == "f") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('f.html');
  }
  //////////////////
  //////////////////
  //////////////////
  else if (dstText == "1234") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText == "bd official products") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText == "bdofficialproducts") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  //////////////////
  else if (dstText == "1436") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
////////////////////
else if (dstText == "google") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://google.com');
  }
else if (dstText == "youtube") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://youtube.com');
  }
else if (dstText == "facebook") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://facebook.com');
  }
else if (dstText == "instagram") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (dstText == "tiktok") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (dstText == "twitter") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://twitter.com");
}
////////////////////
else if (dstText == "go") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://google.com");
}
else if (dstText == "gg") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://google.com");
}
else if (dstText == "yt") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://youtube.com");
}
else if (dstText == "fb") {
  var sbfade=valuehide;sbfade.opacity=0;
  sbfade.opacity = 0;
  window.location.replace('https://facebook.com');
}
else if (dstText == "ig") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (dstText == "tt") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://tiktok.com");
}
else if (dstText == "tw") {
  var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://twitter.com");
}
 else if(dstText.replace(/\s/g,"") == ""){
   alert("Fill-Token-Correctly");
 }
else if (dstText.includes('http')) {
 var sbfade=valuehide;sbfade.opacity=0;
  var sel = document.getElementById('dstText').value;
  window.location.replace(sel);
 }
  //////////////////
  //////////////////
else {
 var sbfade=valuehide;sbfade.opacity=0;
 var sel = document.getElementById('dstText').value;
 window.location.replace('http://'+sel);
  }
}; 
/////////////////
