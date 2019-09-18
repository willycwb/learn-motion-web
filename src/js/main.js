import {
    Form
} from "./utils/form"
import {
    Modal
} from "./utils/modal"
import {
    Tools
} from "./utils/tools"
import "./app";

const tools = new Tools();
new Modal();
new Form();

const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const frame = document.querySelector('.frame');

button.addEventListener('click', () => {
    if (button.classList.contains('opened')) {
        tools.removeClass(button, 'opened');
        tools.removeClass(menu, 'show');
        tools.removeClass(frame, 'menuOpen');
    } else {
        tools.addClass(button, 'opened');
        tools.addClass(menu, 'show');
        tools.addClass(frame, 'menuOpen');
    }
})