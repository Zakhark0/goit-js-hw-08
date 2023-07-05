import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector(`textarea`);
const emailEl = document.querySelector('input');

const STORAGE_KEY = 'feedback - form - state';
const formData = {};

textareaEl.addEventListener('input', throttle(getInputText, 700));
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  const formToJson = JSON.stringify(formData);
  localStorage.setItem('form', formToJson);
});

savedText();
function onFormSubmit(evt) {
  if (!textareaEl.value) {
    alert('Бігом заповняти форму!!!');
    localStorage.removeItem('form');
    return;
  }
  if (!emailEl.value) {
    alert('A де Email???');
    localStorage.removeItem('form');
    return;
  }

  const savedFormText = JSON.parse(localStorage.getItem('form'));

  console.log(savedFormText);

  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getInputText(evt) {
  const inputText = evt.target.value;

  localStorage.setItem(STORAGE_KEY, inputText);
}

function savedText(evt) {
  const savedMassage = localStorage.getItem(STORAGE_KEY);
  if (savedMassage) {
    textareaEl.value = savedMassage;
  }
}
