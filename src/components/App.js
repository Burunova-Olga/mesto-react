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

  // Открытие картинки на полный экран
  function handleCardClick(card)
  {
    setSelectedCard(card);
    setImageZoomPopupOpen(true);
  }

  // Удаление картинки
  function handleDeleteClick(card)
  {
    //
  }
   
  // Изменение аватара
  function handleEditAvatarClick()
  {
    setEditAvatarPopupOpen(true);
  }

  // Изменение профиля
  function handleEditProfileClick()
  {
    setEditProfilePopupOpen(true);
  }

  // Постановка лайка
  function handleCardLike(card)
  {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(isLiked);
    api.changeLike(card._id, !isLiked)
      .then((newCard) => 
      {
        updateCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  // Добавление новой фотографии
  function handleAddPlaceClick()
  {
    setAddPlacePopupOpen(true);
  }

  // Уходя - гасите свет
  function closeAllPopups()
  {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});    
    setImageZoomPopupOpen(false);
  }

  return ( 
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
        cards ={cards}
        onEditProfile={handleEditProfileClick} 
        onAddPlace ={handleAddPlaceClick}
        onEditAvatar ={handleEditAvatarClick}
        onCardClick = {handleCardClick}
        onDeleteClick = {handleDeleteClick}
        onCardLike = {handleCardLike}
      />    
      <Footer />
      
      <FormProfile 
        isOpen ={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />      
      <FormAvatar 
        isOpen ={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <FormPlaces 
        isOpen ={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
