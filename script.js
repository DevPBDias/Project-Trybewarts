const buttonLogin = document.getElementById('btn'); 
function login() {
  const email = document.getElementById('email').value;
  const psw = document.getElementById('psw').value;
  if (email === 'tryber@teste.com' && psw === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login)

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
textarea.addEventListener('input', (e) => {
  const { target } = e;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  counter.innerHTML = `${maxLength - currentLength}`;
});

const checkbox = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
button.disabled = true;
function onOffBtn() {
  if (document.querySelector('#agreement').value === false) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
checkbox.addEventListener('change', onOffBtn);
