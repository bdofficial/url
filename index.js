/////////////////
//hide display
const valuehide=document.getElementById('products').style;
(function fade(){(sbfade.opacity-=0)<0?sbfade.display="none":setTimeout(fade,0)})();  
////////////////
function Verify() {
  let srcText = document.getElementById("srcText").value;
  if (srcText == "14369") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  else if (srcText.toLowerCase() == "bdop") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  //////////////////
else if (srcText.toLowerCase() == "light") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('fl.html');
  }
else if (srcText.toLowerCase() == "fl") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('fl.html');
  }
else if (srcText.toLowerCase() == "notepad") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://notepad.js.org');
  }
else if (srcText.toLowerCase() == "np") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://notepad.js.org');
  }
  //////////////////
  //////////////////
  //////////////////
  else if (srcText == "1234") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  else if (srcText.toLowerCase() == "bd official products") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  else if (srcText.toLowerCase() == "bdofficialproducts") {
  var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
  //////////////////
  else if (srcText == "1436") {
 var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://bdop.netlify.app');
  }
////////////////////
else if (srcText.toLowerCase() == "google") {
var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://google.com');
  }
else if (srcText.toLowerCase() == "youtube") {
var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://youtube.com');
  }
else if (srcText.toLowerCase() == "facebook") {
var sbfade=valuehide;sbfade.opacity=0;
    window.open('https://facebook.com');
  }
else if (srcText.toLowerCase() == "instagram") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (srcText.toLowerCase() == "tiktok") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (srcText.toLowerCase() == "twitter") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://twitter.com");
}
////////////////////
else if (srcText.toLowerCase() == "go") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://google.com");
}
else if (srcText.toLowerCase() == "gg") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://google.com");
}
else if (srcText.toLowerCase() == "yt") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://youtube.com");
}
else if (srcText.toLowerCase() == "fb") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open('https://facebook.com');
}
else if (srcText.toLowerCase() == "fbo") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open('');
}
else if (srcText.toLowerCase() == "ig") {
 var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://instagram.com");
}
else if (srcText.toLowerCase() == "tt") {
 var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://tiktok.com");
}
else if (srcText.toLowerCase() == "tw") {
var sbfade=valuehide;sbfade.opacity=0;
  window.open("https://twitter.com");
}
 else if(srcText==""){
   alert("Fill-Token-Correctly");
 }
else if (srcText.includes('http')) {
 var sbfade=valuehide;sbfade.opacity=0;
  var sel = document.getElementById('srcText').value;
  window.open(sel);
 }
 else if (srcText.includes('.')) {
 var sbfade=valuehide;sbfade.opacity=0;
  var sel = document.getElementById('srcText').value;
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
};///////////////
