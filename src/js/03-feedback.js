import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let feedbackFormState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

formEl.email.value = feedbackFormState.email;
formEl.message.value = feedbackFormState.message;

formEl.addEventListener(
  'input',
  throttle(event => {
    feedbackFormState[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
  }, 700)
);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (formEl.email.value == '') {
    return alert('А де Email?');
  }
  if (formEl.message.value == '') {
    return alert('Бігом заповнювати форму!!!!');
  }
  console.log(feedbackFormState);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
});
