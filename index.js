(function() {
  
    var slideContainer = $('.slide-container');
    
    slideContainer.slick();
    
    $('.card__image img').hide();
    $('.slick-active').find('.card img').fadeIn(200);
    
    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-active').find('.card img').fadeOut(1000);
    });
    
    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
      $('.slick-active').find('.card img').fadeIn(200);
    });
    
  })();
  
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

function createPetList(name, image) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const animalImg = document.createElement("img");
  animalImg.setAttribute("src", image.value);
  const span = document.createElement("span");
  span.textContent = name.value;
  const heartImg = document.createElement("img");
  heartImg.setAttribute("src", "images/heart.png");

  li.appendChild(div);
  div.appendChild(animalImg);
  div.appendChild(span);
  div.appendChild(heartImg);

  return li;
}

albinaButton.onclick = function () {
  createPetList("#albina-name", "#albina-img");
  const li = createPetList();
  ul.appendChild(li);
};
mugButton.onclick = function () {
  createPetList("#mug-name", "#mug-img");
  const li = createPetList();
  ul.appendChild(li);
};
casperButton.onclick = function () {
  createPetList("#casper-name", "#casper-img");
  const li = createPetList();
  ul.appendChild(li);
};
cottonButton.onclick = function () {
  createPetList("#cotton-name", "#cotton-img");
  const li = createPetList();
  ul.appendChild(li);
};
edgarButton.onclick = function () {
  createPetList("#edgar-name", "#edgar-img");
  const li = createPetList();
  ul.appendChild(li);
};
georgeButton.onclick = function () {
  createPetList("#george-name", "#george-img");
  const li = createPetList();
  ul.appendChild(li);
};
grumpyButton.onclick = function () {
  createPetList("#grumpy-name", "#grumpy-img");
  const li = createPetList();
  ul.appendChild(li);
};
happyButton.onclick = function () {
  createPetList("#happy-name", "#happy-img");
  const li = createPetList();
  ul.appendChild(li);
};
scarButton.onclick = function () {
  createPetList("#scar-name", "#scar-img");
  const li = createPetList();
  ul.appendChild(li);
};
simbaButton.onclick = function () {
  createPetList("#simba-name", "#simba-img");
  const li = createPetList();
  ul.appendChild(li);
};
