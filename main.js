document.getElementById("texsti"); innerHTML = "BREEF PEAKS BEYOND"



console.log("hello console log")

window.alert("Pleace, accept the coockies");
const cookie = "user=hussein; samesite=lax; secure";

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

/* (ask Salome)
menuToggle.addEventListener('click', () => {menuToggle.classList.toggle('active'); showcase.classList.toggle('active');
})
*/

/* 
const nav = ["Home", "News", "Authors", "Interviews", "Contact" ];

let nav = nav.length;
let navtxt = "<ul>";

for(let i=0; i<nav1; i++) {
   navtxt += '<li><a href="">' + nav[i] + "</a></li>";
}

navtxt += "</ul>";

document.getElementById("nav").innerHTML = navtxt;
*/

const nav = ["Home", "News", "Authors", "Interviews", "Contact"];
const links = ["index.html", "news.html", "authors.html", "interviews.html", "contact.html"];

let navl = nav.length;
let navtxt = "<ul>";

for(let i=0; i<navl; i++){
    navtxt += '<li><a href=" ' + links[i] + ' ">' + nav[i] + "</a></li>";
}

navtxt += "</ul>";

document.getElementById("nav").innerHTML = navtxt;
/*
function gotoauthors() {
  let explore = document.getElementById("social")
} 
*/

console.log("screenwidth: " + screen.width);
console.log("screenheight: " + screen.height);

console.log("possiblewidth: " + screen.availWidth);
console.log("possibleheight: " + screen.availHeight);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}