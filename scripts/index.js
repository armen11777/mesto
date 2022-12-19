let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-button')
let likeButton = document.querySelector('.elements');
let formElement = document.querySelector('.popup__form-edit');
let nameInput = formElement.querySelector('#name_text');
let jobInput = formElement.querySelector('#description_text');

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