import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const formInput = document.querySelector('.feedback-form input');
const formText = document.querySelector('.feedback-form textarea');
const FEEDBACK_KEY = 'feedback - form - state'

const localData = {
    email: "",
    message: "",
};

localStorageText();

form.addEventListener("input", throttle(saveMessage, 500));
function saveMessage() {
    localData.email = formInput.value;
    localData.message = formText.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(localData));
};

form.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    console.log(localData);
    event.target.reset();
    localStorage.removeItem(FEEDBACK_KEY);
};

function localStorageText() {
    let autocomplete;
    try {
        autocomplete = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    } catch {
        autocomplete = localData;
    }
    if (autocomplete === null) autocomplete = localData;

    formInput.value = autocomplete.email;
    formText.value = autocomplete.message;
};
