"use strict";
import {
  englishFlag,
  brazilianFlag,
  englishFlag1,
  brazilianFlag1,
} from "./variables.js";

// * Flags
englishFlag.addEventListener("click", () => changeFlags());
brazilianFlag.addEventListener("click", () => changeFlags());
englishFlag1.addEventListener("click", () => changeFlags());
brazilianFlag1.addEventListener("click", () => changeFlags());

const changeFlags = () => {
  if (englishFlag.src.match("united-kingdom-logo.png")) {
    englishFlag.src = "assets/images/united-kingdom-logo-desative.png";
    brazilianFlag.src = "assets/images/brazil-logo.png";
    englishFlag1.src = "assets/images/united-kingdom-logo-desative.png";
    brazilianFlag1.src = "assets/images/brazil-logo.png";
    // HOME PAG E NAVBAR
    document.querySelector("html").setAttribute("lang", "pt-br");
    document.querySelector(".navbarhome").innerHTML = "Início";
    document.querySelector(".navbarabout").innerHTML = "Sobre";
    document.querySelector(".navbarportfolio").innerHTML = "Portfólio";
    document.querySelector(".navbarcontact").innerHTML = "Contato";
    document.querySelector(".homeh3").innerHTML = "Desenvolvedor";
    document.querySelector(".homeh1").innerHTML = "Front-End";
    document.querySelector(
      ".homep"
    ).innerHTML = `Olá. Eu sou <span class="highlight">Davi Fernandes</span>. Um desenvolvedor apaixonado especialmente por Front-end React e moro na Bahia, Brasil.
		<img
						src="assets/images/placeholder.png"
						alt="placeholder"
						class="placeholder"
					/>`;
    //ABOUT
    document.querySelector(".heading").innerHTML = "Sobre mim";
    document.querySelector(
      ".heading3"
    ).innerHTML = `<span>Oi, eu tenho 21 anos,</span>`;
    document.querySelector(".aboutp1").innerHTML =
      "Estou cursando Engenharia de Software, atualmente no primeiro semestre de um programa de oito semestres. Meu objetivo é obter minha oportunidade inicial como Desenvolvedor Front End, onde possa aplicar meus conhecimentos tecnológicos e aprimorar minhas habilidades profissionais, sociais e pessoais.";
    document.querySelector(".aboutp2").innerHTML =
      "Sou uma pessoa organizada, responsável, proativa e criativa, com uma forte capacidade de aprendizado rápido. Estou comprometido em aprender e crescer nesta área e estou entusiasmado com a possibilidade de contribuir para um time de desenvolvimento de sucesso.";
    //PORTFOLIO
    document.querySelector(".portfolio__headingh2").innerHTML = "PORTFÓLIO";
    document.querySelector(".portfolio__headingh3").innerHTML =
      "Cada projeto é uma parte única do desenvolvimento";
    document.querySelector(".portfolio__layerp1").innerHTML =
      "Hoobank é um banco moderno com uma linda página inicial que permite que você faça transferências de dinheiro, receba empréstimos, veja suas transações e verifique seu saldo atual. Se você deseja testá-lo, utilize as contas de demonstração: user: js pin: 1111 ou user: test pin: 1234.";
    document.querySelector(".portfolio__layerp2").innerHTML =
      "Este é o meu primeiro projeto desenvolvido de forma independente, no qual repliquei o site pomofocus.io de maneira simples e funcional, utilizando o conceito de classes.";
    //CONTACT
    document.querySelector(".contact__headingh2").innerHTML = "CONTATO";
    document.querySelector(".contact__headingh3").innerHTML =
      "Não tenha vergonha, entre em contato!";
    document.querySelector(".contact__texth1").innerHTML = "Localização";
    document.querySelector(".contact__texth2").innerHTML = "Email";
    document.querySelector(".footer__textp").innerHTML =
      "Copyright &copy; 2023 por Davi Fernandes | Todos os direitos reservados";
  } else {
    englishFlag.src = "assets/images/united-kingdom-logo.png";
    brazilianFlag.src = "assets/images/brazil-logo-desative.png";
    englishFlag1.src = "assets/images/united-kingdom-logo.png";
    brazilianFlag1.src = "assets/images/brazil-logo-desative.png";
    // HOME PAG E NAVBAR
    document.querySelector("html").setAttribute("lang", "en");
    document.querySelector(".navbarhome").innerHTML = "Home";
    document.querySelector(".navbarabout").innerHTML = "About";
    document.querySelector(".navbarportfolio").innerHTML = "Portfolio";
    document.querySelector(".navbarcontact").innerHTML = "Contact";
    document.querySelector(".homeh3").innerHTML = "Front-End";
    document.querySelector(".homeh1").innerHTML = "Developer";
    document.querySelector(
      ".homep"
    ).innerHTML = `Hi. I'm <span class="highlight">Davi Fernandes</span>. A passionate Front-end React Developer based in Bahia, Brazil.
		<img
						src="assets/images/placeholder.png"
						alt="placeholder"
						class="placeholder"
					/>`;
    //ABOUT
    document.querySelector(".heading").innerHTML = "About me";
    document.querySelector(
      ".heading3"
    ).innerHTML = `<span>Hi, I'm 21 years old,</span>`;
    document.querySelector(".aboutp1").innerHTML =
      "I'm a Software Engineering student currently enrolled in a higher education institution, currently in my first semester of an eight-semester program. My objective is to obtain my initial opportunity as a Front End Developer, where I can apply my technological knowledge and improve my professional,social, and personal skills.";
    document.querySelector(".aboutp2").innerHTML =
      "I'm an organized, responsible, proactive and creative person, with a strong ability to learn quickly. I am dedicated to increasing my knowledge and expertise in the field and eager to contribute to a dynamic development team.";
    //PORTFOLIO
    document.querySelector(".portfolio__headingh2").innerHTML = "PORTFOLIO";
    document.querySelector(".portfolio__headingh3").innerHTML =
      "Each project is a unique piece of development";
    document.querySelector(".portfolio__layerp1").innerHTML =
      "Hoobank is a modern bank with a beautiful landing page that allows you to transfer money, receive loans, view your transactions, and check your current balance. If you want to test it, use the demo accounts: user: js pin: 1111 or user: test pin: 1234.";
    document.querySelector(".portfolio__layerp2").innerHTML =
      "This is my first solo project, in which I replicated the website pomofocus.io in a simple and functional manner, using the concept of classes.";
    //CONTACT
    document.querySelector(".contact__headingh2").innerHTML = "CONTACT";
    document.querySelector(".contact__headingh3").innerHTML =
      "Don't be shy! Hit me up!";
    document.querySelector(".contact__texth1").innerHTML = "Location";
    document.querySelector(".contact__texth2").innerHTML = "Mail";
    document.querySelector(".footer__textp").innerHTML =
      "Copyright &copy; 2023 by Davi Fernandes | All Rights Reserved";
  }
};
