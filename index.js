// (function () {
//   var slideContainer = $(".slide-container");

//   slideContainer.slick();

//   $(".card__image img").hide();
//   $(".slick-active").find(".card img").fadeIn(200);

//   // // On before slide change
//   slideContainer.on(
//     "beforeChange",
//     function (event, slick, currentSlide, nextSlide) {
//       $(".slick-active").find(".card img").fadeOut(1000);
//     }
//   );

//   // On after slide change
//   slideContainer.on("afterChange", function (event, slick, currentSlide) {
//     $(".slick-active").find(".card img").fadeIn(200);
//   });
// })();

$(".slide-container").slick({
  rtl: true,
  prevArrow:
    '<span class="priv-arrow"><img src="transparent img/x.png" alt="" class = "x-arrow"></span>',
  nextArrow: null,
});

// need a function for creating li, div, animal-img, name-span, heart image
//  we'll have 10 variables for the 10 heart buttons for animals then we
// make the button1.onclick, button2.onclick and input in the brackets the createPetList func

const albinaButton = document.getElementById("albina-btn");
const mugButton = document.getElementById("mug-btn");
const casperButton = document.getElementById("casper-btn");
const cottonButton = document.getElementById("cotton-btn");
const edgarButton = document.getElementById("edgar-btn");
const georgeButton = document.getElementById("george-btn");
const grumpyButton = document.getElementById("grumpy-btn");
const happyButton = document.getElementById("happy-btn");
const scarButton = document.getElementById("scar-btn");
const simbaButton = document.getElementById("simba-btn");
const ul = document.getElementById("pet-list");
const removeButton = document.getElementsByClassName("removeBtn");

removeButton.onclick;

function createPetList(name, image) {
  const displayName = document.getElementById(name);
  const li = document.createElement("li");
  const div = document.createElement("div");
  const animalImg = document.createElement("img");
  animalImg.setAttribute("src", document.getElementById(image).src);
  animalImg.className = "animal";
  const span = document.createElement("span");
  span.innerHTML = displayName.innerHTML;
  const heartImg = document.createElement("img");
  heartImg.className = "heart";
  heartImg.setAttribute("src", "images/heart.png");
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.className = "removeBtn";

  li.appendChild(div);
  div.appendChild(animalImg);
  div.appendChild(span);
  div.appendChild(heartImg);
  div.appendChild(removeButton);

  return li;
}

albinaButton.onclick = function () {
  const li = createPetList("albina-name", "albina-img");
  ul.appendChild(li);
};
mugButton.onclick = function () {
  const li = createPetList("mug-name", "mug-img");
  ul.appendChild(li);
};
casperButton.onclick = function () {
  const li = createPetList("casper-name", "casper-img");
  ul.appendChild(li);
};
cottonButton.onclick = function () {
  const li = createPetList("cotton-name", "cotton-img");
  ul.appendChild(li);
};
edgarButton.onclick = function () {
  const li = createPetList("edgar-name", "edgar-img");
  ul.appendChild(li);
};
georgeButton.onclick = function () {
  const li = createPetList("george-name", "george-img");
  ul.appendChild(li);
};
grumpyButton.onclick = function () {
  const li = createPetList("grumpy-name", "grumpy-img");
  ul.appendChild(li);
};
happyButton.onclick = function () {
  const li = createPetList("happy-name", "happy-img");
  ul.appendChild(li);
};
scarButton.onclick = function () {
  const li = createPetList("scar-name", "scar-img");
  ul.appendChild(li);
};
simbaButton.onclick = function () {
  const li = createPetList("simba-name", "simba-img");
  ul.appendChild(li);
};
