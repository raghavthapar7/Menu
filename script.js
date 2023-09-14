"use strict";

const recipes = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://images.pexels.com/photos/1476332/pexels-photo-1476332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://images.pexels.com/photos/2961957/pexels-photo-2961957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://images.pexels.com/photos/7159295/pexels-photo-7159295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.pexels.com/photos/2347383/pexels-photo-2347383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// ===============================================================
// ===============================================================

// ELEMENTS TO BE USED

// Navigation Buttons
const btnAll = document.querySelector(".btn-all");
const btnBreakfast = document.querySelector(".btn-breakfast");
const btnLunch = document.querySelector(".btn-lunch");
const btnShakes = document.querySelector(".btn-shakes");

// HTML Containers
const containerApp = document.querySelector(".app");
const containerRecipe = document.querySelector(".recipe-container");

// ===============================================================
// ===============================================================

// Clearing the container for the data to be displayed
containerRecipe.innerHTML = "";

const displayRecipes = function (recipes) {
  // Clearing the container so as to not pile up the content
  containerRecipe.innerHTML = "";

  // HTML content to be added dynamically
  recipes.forEach((recipe) => {
    const html = `<article class="recipe">
                  <img
                    src=${recipe.img}
                    alt="Recipe Image"
                    class="recipe--img"
                  />

                  <div class="recipe-details">
                    <div class="info">
                      <h3 class="recipe--name">${recipe.title}</h3>
                      <p class="recipe--cost">$${recipe.price}</p>
                    </div>
                    <p class="recipe--description">
                      ${recipe.desc}
                    </p>
                  </div>
                </article>`;

    containerRecipe.insertAdjacentHTML("beforeend", html);
  });
};

// Adds the content as the page loads up
window.addEventListener("DOMContentLoaded", function (e) {
  displayRecipes(recipes);
});

btnAll.addEventListener("click", function () {
  displayRecipes(recipes);
});

btnBreakfast.addEventListener("click", function () {
  // Filtering the recipes that are of the category breakfast
  let breakfastRecipes = recipes.filter(
    (recipe) => recipe.category === "breakfast"
  );

  displayRecipes(breakfastRecipes);
});

btnLunch.addEventListener("click", function () {
  // Filtering the recipes that are of the category lunch
  let lunchRecipes = recipes.filter((recipe) => recipe.category === "lunch");

  displayRecipes(lunchRecipes);
});

btnShakes.addEventListener("click", function () {
  // Filtering the recipes that are of the category shakes
  let shakeRecipes = recipes.filter((recipe) => recipe.category === "shakes");

  displayRecipes(shakeRecipes);
});
