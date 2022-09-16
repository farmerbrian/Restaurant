import './style.css';
import { onLoad } from './onload.js';
import { homePage } from './home.js';
import { contactPage } from './contact.js';
import { menuPage } from './menu.js';
console.log('woohoo, you are inside index.js');

onLoad();

homePage();

let buttons = document.querySelectorAll('.menu-item');

let setClass = () => {
	buttons.forEach((button) => {
		button.classList.remove('selected');
	});
};

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
	setClass();
	homePage();
});

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', () => {
	setClass();
	contactPage();
});

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
	setClass();
	menuPage();
});
