const accordionBtns = document.querySelectorAll(".item-header")
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active")
    let content = this.nextElementSibling;
    console.log(content)
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
})
let list = document.querySelectorAll(".like-end");
let list_svg = document.querySelectorAll('.size8');
let list_svg_show1 = document.querySelector('.size81');
let list_svg_show2 = document.querySelector('.size82');
let list_svg_show3 = document.querySelector('.size83');


function change1() {
  list[0].style.backgroundColor = "red";
  list[0].style.Color = "white";
  list_svg[0].style.backgroundColor = "white";
  list_svg[0].style.display = "none";
  list_svg_show1.style.display = "block";
}
function change2() {
  list[1].style.backgroundColor = "red";
  list[1].style.Color = "white";
  list_svg[1].style.backgroundColor = "white";
  list_svg[1].style.display = "none";
  list_svg_show2.style.display = "block";
}
function change3() {
  list[2].style.backgroundColor = "red";
  list[2].style.Color = "white";
  list_svg[2].style.backgroundColor = "white";
  list_svg[2].style.display = "none";
  list_svg_show3.style.display = "block";
}
let show_more = document.getElementsByClassName('show-more');
function show() {
  show_more.style.display = 'block';
}
function dark() {
  document.body.style.backgroundColor = "#222222";
  let head = document.querySelector(".head");
  head.style.backgroundColor = "#181818";
}