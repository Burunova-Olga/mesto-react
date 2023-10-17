import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

function App()
{
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [isImageZoomPopupOpen, setImageZoomPopupOpen] = React.useState();

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
    setImageZoomPopupOpen(false);
  }

  return (
    <> 
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace ={handleAddPlaceClick}
        onEditAvatar ={handleEditAvatarClick}
        onClose = {closeAllPopups}
        onCardClick = {handleCardClick}
        isEditAvatarPopupOpen = {isEditAvatarPopupOpen}
        isEditProfilePopupOpen = {isEditProfilePopupOpen}
        isAddPlacePopupOpen = {isAddPlacePopupOpen}
      />    
      <Footer />
      <ImagePopup 
        isOpen = {isImageZoomPopupOpen}
        onClose = {closeAllPopups}
        card = {selectedCard}
      />      
    </>
  );
}

export default App;
