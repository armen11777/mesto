const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup-profile');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const formElement = document.querySelector('.popup__form-edit');
const nameInput = formElement.querySelector('#name_text');
const jobInput = formElement.querySelector('#description_text');
const elementsList = document.querySelector('.elements-list');
const elementTemplate = document.querySelector('#element-template').content;
const popupImgView = document.querySelector('.popup_view_img');
const addImageButton = document.querySelector('.profile__add-button');
const popupAddImage = document.querySelector('.popup_add-image');
const popupFormAdd = document.querySelector('.popup__form-add');
const nameInputImg = popupFormAdd.querySelector('#name-image');
const jobInputLink = popupFormAdd.querySelector('#link-image');
const profileTitle = document.querySelector('.profile__title');
const profileText =   document.querySelector('.profile__text');
const popupImage = popupImgView.querySelector('.popup__image');
const popupTitleImage = popupImgView.querySelector('.popup__title-image')

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//Редактирование профиля
function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(profilePopup);
}

//функция добавления карточек
function createCard (name, link) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  elementImage = cardElement.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = name;
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__like-button').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like-button_status_active');
  });
  deleteButton = cardElement.querySelector('.element__remove');//Удаление карточки
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });
  elementImage.addEventListener('click', evt => {
    popupTitleImage.textContent = name;
    popupImage.src = link;
    popupImage.alt = name;
    openPopup(popupImgView);
  })
  return cardElement; 
}

function addCards(evt) {
  evt.preventDefault();
  cardElement = createCard(nameInputImg.value, jobInputLink.value)
  closePopup(popupAddImage);
  elementsList.prepend(cardElement);
  evt.target.reset()
}

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
  cardElement = createCard(item.name, item.link)
  elementsList.append(cardElement);
});

formElement.addEventListener('submit', handleFormSubmit); 
popupFormAdd.addEventListener('submit', addCards)

// Открытие формы редактирования профиля
editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
})
//закрытие попапов
popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//Откываем форму добавления карточек
addImageButton.addEventListener('click', () => {
  openPopup(popupAddImage);
});