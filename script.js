const contacts = document.querySelectorAll('.contact');
const chatName = document.querySelector('.ChatName');

const input = document.querySelector('.input');
const button = document.querySelector('button');
const message = document.querySelector('.message');
const right = document.querySelector('.right');

let currentChat = '';
contacts.forEach((contact) => {
  contact.addEventListener('click', () => {
    right.style.display = 'block';
    currentChat = contact.textContent;
    chatName.textContent = currentChat;
    message.innerHTML = '';
  });
});

button.addEventListener('click', () => {
  console.log('first');
  const inputValue = input.value.trim();
  if (currentChat && inputValue) {
    addMessage(inputValue, 'sent');
    input.value = '';

    setTimeout(() => {
      addMessage(`Reply to: ${inputValue}`, 'received');
    }, 1000);
  }
  input.Value = '';
});

function addMessage(text, type) {
  const messages = document.createElement('div');
  messages.classList.add('msg', type);
  messages.textContent = text;
  message.appendChild(messages);
  message.scrollTop = message.scrollHeight;
}
