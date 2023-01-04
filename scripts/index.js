const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form-edit');
const nameInput = formElement.querySelector('#name_text');
const jobInput = formElement.querySelector('#description_text');
const elementsList = document.querySelector('.elements-list');
const elementTemplate = document.querySelector('#element-template').content;
const popupImgView = document.querySelector('.popup_img');
const closePopupImg = document.querySelector('.popup__close-button_form_img'); 
const addImageButton = document.querySelector('.profile__add-button');
const popupAddImage = document.querySelector('.popup_add-image');
const closePopupNewCard = document.querySelector('.popup__close-button_form_new-card');
const popupFormAdd = document.querySelector('.popup__form-add');
const nameInputImg = popupFormAdd.querySelector('#name-image');
const jobInputLink = popupFormAdd.querySelector('#link-image');

//Редактирование профиля
function handleFormSubmit (evt) {
  evt.preventDefault(); 
  document.querySelector('.profile__title').textContent = nameInput.value;
  document.querySelector('.profile__text').textContent = jobInput.value;
  popup.classList.remove('popup_window-opened');
}

//функция добавления карточrb
function createCards (name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__title').textContent = name;
  element.querySelector('.element__like-button').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like-button_status_active');
  });
  elementsList.append(element);  
  deleteButton = element.querySelector('.element__remove');//Удаление карточки
  deleteButton.addEventListener('click', () => {
    element.remove();
  });
  element.querySelector('.element__image').addEventListener('click', evt => {
    popupImage = popupImgView.querySelector('.popup__image');
    popupTitkeImage = popupImgView.querySelector('.popup__title-image').textContent = name;
    popupImage.src = link;
    popupImgView.classList.add('popup_window-opened');
    console.log(evt)
  })
}

function addCards(evt) {
  evt.preventDefault();
  createCards(nameInputImg.value, jobInputLink.value)
  popupAddImage.classList.remove('popup_window-opened');
}

formElement.addEventListener('submit', handleFormSubmit); 
popupFormAdd.addEventListener('submit', addCards)

// Открытие формы редактирования профиля
editButton.addEventListener('click', () => {
  popup.classList.add('popup_window-opened');
  nameInput.value = document.querySelector('.profile__title').textContent;
  jobInput.value = document.querySelector('.profile__text').textContent;
})
//закрытие формы редактирования профиля
closePopup.addEventListener('click', ()=> {
  popup.classList.remove('popup_window-opened');
})

//Откываем форму добавления карточек
addImageButton.addEventListener('click', () => {
  popupAddImage.classList.add('popup_window-opened');
})
closePopupNewCard.addEventListener('click', ()=> {
  popupAddImage.classList.remove('popup_window-opened');
})
//Закрытие попапа просмотра фотографий
closePopupImg.addEventListener('click', () => {
  popupImgView.classList.remove('popup_window-opened');
});

//Добавление 6 карточек
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
initialCards.forEach(item => {
  createCards(item.name, item.link)
});




