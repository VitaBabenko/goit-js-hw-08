import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

updateForm();

function onFormSubmit(evt) {
    evt.preventDefault();
    
    if (!form.elements.email.value || !form.elements.message.value) {
        alert('Всі поля повинні бути заповнені!'); 
    } else {
        const userData = localStorage.getItem(STORAGE_KEY);
        console.log(JSON.parse(userData));
        form.reset();
        localStorage.removeItem(STORAGE_KEY);
    };
};

function onInput(evt) {
    const value = {
        name: form.elements.email.value,
        message: form.elements.message.value,
    };

    // console.log(value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
};

function updateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        form.elements.email.value = JSON.parse(savedData).name;
        form.elements.message.value = JSON.parse(savedData).message;
    };
    // console.log(savedData);
};