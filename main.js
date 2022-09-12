/////////////////
//hide display
const valuehide=document.getElementById('products').style;
(function fade(){(sbfade.opacity-=0)<0?sbfade.display="none":setTimeout(fade,0)})();
////////////////
function Verify() {
  let srcText = document.getElementById("srcText").value;
  let dstText = document.getElementById("dstText").value;
  //////////////////
  if (dstText.toLowerCase() == "bdofficial"|| dstText.toLowerCase() == "bdo"|| dstText.toLowerCase() == "bd official") {
   sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('decode.html');
  }
  //////////////////
  else if (dstText.toLowerCase() == "bdop"|| dstText.toLowerCase() == "bdofficialproducts"|| dstText.toLowerCase() == "bd official products") {
   sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  //////////////////
else if (dstText.toLowerCase() == "light"||dstText.toLowerCase() == "fl") {
   sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('fl.html');
  }
else if (dstText.toLowerCase() == "notepad"||dstText.toLowerCase() == "np") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://notepad.js.org');
  }
  //////////////////
  //////////////////
  //////////////////
  else if (dstText == "1234") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bd official products") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  else if (dstText.toLowerCase() == "bdofficialproducts") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
  //////////////////
  else if (dstText == "1436") {
 var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://bdop.netlify.app');
  }
////////////////////
else if (dstText.toLowerCase() == "google") {
var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://google.com');
  }
else if (dstText.toLowerCase() == "youtube") {
var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://youtube.com');
  }
else if (dstText.toLowerCase() == "facebook") {
var sbfade=valuehide;sbfade.opacity=0;
    window.location.replace('https://facebook.com');
  }
else if (dstText.toLowerCase() == "instagram") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://instagram.com");
}
else if (dstText.toLowerCase() == "tiktok") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://instagram.com");
}
else if (dstText.toLowerCase() == "twitter") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://twitter.com");
}
////////////////////
else if (dstText.toLowerCase() == "go") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://google.com");
}
else if (dstText.toLowerCase() == "gg") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://google.com");
}
else if (dstText.toLowerCase() == "yt") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://youtube.com");
}
else if (dstText.toLowerCase() == "fb") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace('https://facebook.com');
}
else if (dstText.toLowerCase() == "fbo") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace('');
}
else if (dstText.toLowerCase() == "ig") {
 var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://instagram.com");
}
else if (dstText.toLowerCase() == "tt") {
 var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://tiktok.com");
}
else if (dstText.toLowerCase() == "tw") {
var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace("https://twitter.com");
}
else if (dstText.includes('http')) {
 var sbfade=valuehide;sbfade.opacity=0;
  var sel = document.getElementById('dstText').value;
  window.location.replace(sel);
 }
 else if (dstText.includes('.')) {
 var sbfade=valuehide;sbfade.opacity=0;
  window.location.replace('http://' + dstText);
 }
  //////////////////
else if (dstText == "") {
  alert("Fill-Token-Correctly");
}
  //////////////////
else if (srcText == "") {
  alert("Fill-Token-Correctly");
}
else if (srcText.includes('9 30 12 15 22 5 30 25 15 21 ')) {
 sbfade=valuehide;sbfade.opacity=0;
 window.location.replace('https://www.google.com/search?sitesearch=&q='+"i love you");
 }
 else if (srcText.includes('143')) {
 sbfade=valuehide;sbfade.opacity=0;
 window.location.replace('https://www.google.com/search?sitesearch=&q='+"i love you");
 }
else {
 window.open('https://www.google.com/search?sitesearch=&q='+srcText);
  }
};///////////////  
