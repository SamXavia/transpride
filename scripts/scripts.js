function on() {
    // display overlay
    const turnOn = document.getElementById("overlay");
    turnOn.style.display = "block";
    // turn off vertical scroll
    const overflow = document.querySelector("body");
    overflow.style.overflow = "hidden"
}

function off() {
    // display overlay
    const turnOff = document.getElementById("overlay");
    turnOff.style.display = "none";
    // turn off vertical scroll
    const overflow = document.querySelector("body");
    overflow.style.overflow = ""
}

function stripHtml(html)
{
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

var sharkname = new Array();
sharkname.push("Bridget");
sharkname.push("Nixs");
sharkname.push("Salve");
sharkname.push("Sharkie");
sharkname.push("Jeff the Landshork");
sharkname.push("Lemon");
sharkname.push("Shylo");
sharkname.push("Markiplier");
sharkname.push("Mrs Lovett");
sharkname.push("Pip");
sharkname.push("Vida");
sharkname.push("Billie Eilish");
sharkname.push("Melli");
sharkname.push("Greg");
sharkname.push("Fudge");
sharkname.push("Blaj");
sharkname.push("Cheese");
sharkname.push("Yoshi");
sharkname.push("Kirby");
sharkname.push("Alex");
sharkname.push("Nicole");
sharkname.push("Shorky");
sharkname.push("Armando");

var point = 0;

function changeText(){
  $('span').html(sharkname[point]);
  if(point < sharkname.length - 1){
    point ++;
  }else{
    point = 0;
  }
  setTimeout(changeText, 2000)
}

changeText();