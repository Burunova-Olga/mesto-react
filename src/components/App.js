import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import FormProfile from './FormProfile';
import FormPlaces from './FormPlaces';
import FormAvatar from './FormAvatar';
import FormDelete from './FormDelete';
import { CurrentUserContext } from './CurrentUserContext';
import Avatar from '../images/profile-image.jpg';
import api from '../utils/Api';

function App()
{
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [isImageZoomPopupOpen, setImageZoomPopupOpen] = React.useState(false); 
  const [cards, updateCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: 'Жак-Ив Кусто',
      about: 'Исследователь океана',
      avatar: {Avatar}
    });

  React.useEffect(() => 
  {
    api.getUserInfo()
      .then((userData) => 
      {     
        setCurrentUser(userData);
      })
      .catch(console.error);

      api.getInitialCards()
      .then((cardsData) => 
      {  
        updateCards(cardsData); 
      })
      .catch(console.error);
  }, []); 
  
  // Уходя - гасите свет
  function closeAllPopups()
  {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});    
    setImageZoomPopupOpen(false);
  }

  //----------------------------------------------------
  //                    Картинки
  //----------------------------------------------------

  // Открытие картинки на полный экран
  function handleCardClick(card)
  {
    setSelectedCard(card);
    setImageZoomPopupOpen(true);
  }

  // Добавление новой фотографии
  function handleAddPlaceClick()
  {
    setAddPlacePopupOpen(true);
  }
  
  // Добавление картинки
  function handleCardAdd(description, link)
  {
    api.addNewCard(description, link)
      .then((card) => 
      {
        updateCards([card, ...cards]); 
        closeAllPopups();
      });
  }

  // Постановка лайка
  function handleCardLike(card)
  {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLike(card._id, !isLiked)
      .then((newCard) => 
      {
        updateCards((state) => state.map((oldCard) => oldCard._id === card._id ? newCard : oldCard));
      });
  }

  // Удаление картинки
  function handleCardDelete(card)
  {
    api.deleteCard(card._id)
      .then(() => 
      {
        updateCards((state) => state.filter((oldCard) => oldCard._id !== card._id));
      });
  }
  //----------------------------------------------------
  //                    Аватар
  //----------------------------------------------------

  // Изменение аватара
  function handleEditAvatarClick()
  {
    setEditAvatarPopupOpen(true);
  }
  
  function handleUpdateAvatar(link)
  {
    console.log(link);
    api.setUserAvatar(link)
      .then((result) =>
      {
        setCurrentUser({
          name: currentUser.name,
          about: currentUser.about,
          avatar: result.avatar
        });
        closeAllPopups();
      });
  }

  //----------------------------------------------------
  //                    Профиль
  //----------------------------------------------------
  // Изменение профиля
  function handleEditProfileClick()
  {
    setEditProfilePopupOpen(true);
  }

  function handleUpdateUser(name, about)
  {
    api.setUserInfo(name, about)
      .then((result) =>
      {
        setCurrentUser({
          name: result.name,
          about: result.about,
          avatar: currentUser.avatar
        });
        closeAllPopups();
      });
  }
 
  //----------------------------------------------------
  //                    Страница
  //----------------------------------------------------
  return ( 
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
        cards ={cards}
        onEditProfile={handleEditProfileClick} 
        onAddPlace ={handleAddPlaceClick}
        onEditAvatar ={handleEditAvatarClick}
        onCardClick = {handleCardClick}
        onCardDelete = {handleCardDelete}
        onCardLike = {handleCardLike}
      />    
      <Footer />
      
      <FormProfile 
        isOpen ={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser = {handleUpdateUser}
      />      
      <FormAvatar 
        isOpen ={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar = {handleUpdateAvatar}
      />
      <FormPlaces 
        isOpen ={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace = {handleCardAdd}
      />
      <FormDelete 
        isOpen ={false}
        onClose={closeAllPopups}
      />
      <ImagePopup 
        isOpen = {isImageZoomPopupOpen}
        onClose = {closeAllPopups}
        card = {selectedCard}
      />      
    </CurrentUserContext.Provider>
  );
}

export default App;
