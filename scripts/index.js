let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-button')
let likeButton = document.querySelector('.elements');
let formElement = document.querySelector('.popup__form-edit');
let nameInput = formElement.querySelector('#name_text');
let jobInput = formElement.querySelector('#description_text');
const elementsList = document.querySelector('.elements-list');

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  document.querySelector('.profile__title').textContent = nameInput.value;
  document.querySelector('.profile__text').textContent = jobInput.value;
  popup.classList.remove('popup_window-opened');
}

formElement.addEventListener('submit', handleFormSubmit); 

editButton.addEventListener('click', () => {
  popup.classList.add('popup_window-opened');
  nameInput.value = document.querySelector('.profile__title').textContent;
  jobInput.value = document.querySelector('.profile__text').textContent;
})

closePopup.addEventListener('click', ()=> {
  popup.classList.remove('popup_window-opened');
})

likeButton.addEventListener('click', (evt)=> {
  evt.target.classList.toggle('element__like-button_status_active');
})

const elementTemplate = document.querySelector('#element-template').content;


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

for (let i =0; i < initialCards.length; i+=1) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = initialCards[i].link;
  element.querySelector('.element__title').textContent = initialCards[i].name;
  elementsList.append(element);
}
