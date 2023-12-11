// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

import "./styles.css";

//part 1 - getting started

// Select main element
let mainEl = document.querySelector("main");

// Set background color to mainEl using the --main-bg variable
mainEl.style.backgroundColor = "var(--main-bg)";

// Create an h1 element and set its content
let heading = document.createElement("h1");
heading.textContent = "DOM Manipulation";

// Add flex-ctr class to mainEl
mainEl.classList.add("flex-ctr");

// Append the heading to the main element
mainEl.appendChild(heading);

//part 2 - creating a menu bar
let topMenuEl = document.querySelector("#top-menu"); // Use # for ID selection

// Check if the element is found
if (topMenuEl) {
  // Change height
  topMenuEl.style.height = "100%";

  // Change background color of topMenuEl
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

  // Add flex-around
  topMenuEl.classList.add("flex-around");


//part 3 - adding menu buttons

let menuContainer = document.getElementById('menu');

// iterate through array and add buttons
menuLinks.forEach(link => {
  let button = document.createElement('a');
  button.textContent = link.text;
  button.href = link.href;
  menuContainer.appendChild(button);
});




