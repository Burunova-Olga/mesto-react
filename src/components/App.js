import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import FormProfile from './FormProfile';
import FormPlaces from './FormPlaces';
import FormAvatar from './FormAvatar';
import FormDelete from './FormDelete';

function App()
{
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [isImageZoomPopupOpen, setImageZoomPopupOpen] = React.useState(false);

  // Открытие картинки на полный экран
  function handleCardClick(card)
  {
    setSelectedCard(card);
    setImageZoomPopupOpen(true);
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
    <> 
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace ={handleAddPlaceClick}
        onEditAvatar ={handleEditAvatarClick}
        onCardClick = {handleCardClick}
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
    </>
  );
}

export default App;
