"use strict";
import {
  menuIcon,
  navbar,
  darkModeIcon,
  englishFlag,
  brazilianFlag,
  englishFlag1,
  brazilianFlag1,
  header,
  logo,
  emailClick,
} from "./variables.js";

// * MENU ICON NAVBAR
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("block");
};

// * STICKY NAVBAR
window.onscroll = () => {
  header.classList.toggle("sticky", window.scrollY > 100);
  logo.classList.toggle("sticky", window.scrollY > 100);

  //* REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("block");
};

// * COPY MAIL
emailClick.addEventListener("click", () => {
  const name = emailClick.textContent;
  navigator.clipboard.writeText(name);
});

emailClick.addEventListener("mouseover", () => {
  emailClick.style.color = "var(--color-primary)";
});

emailClick.addEventListener("mouseout", () => {
  emailClick.style.color = "#777";
});

// * DARK LIGHT MODE
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

