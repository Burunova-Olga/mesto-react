import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

function handleEditAvatarClick()
{
  const popup = document.querySelector('.popup_type_avatar');
  popup.classList.add("popup_opened");
}

function handleEditProfileClick()
{
  const popup = document.querySelector('.popup_type_profile');
  popup.classList.add("popup_opened");
}

function handleAddPlaceClick()
{
  const popup = document.querySelector('.popup_type_places');
  popup.classList.add("popup_opened");
}

function App() {
  return (
    <> 
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace ={handleAddPlaceClick}
        onEditAvatar ={handleEditAvatarClick}
      />    
      <Footer />

      <template className="elementTemplate">
        <div className="element">
          <button type="button" className="element__zoom" aria-label="Открыть оригинал фото">
            <img src="#" className="element__image" alt="..." />
          </button>
          <button type="button" className="button element__delete element__delete_invisible" aria-label="Удалить место"></button>
          <div className="element__caption">
            <h3 className="block element__text"></h3>
            <div className="like">
              <button type="button" className="like__button" aria-label="Поставить лайк"></button>
              <p className="like__count">0</p>
            </div>
          </div>
        </div>
      </template>

      <ImagePopup/>      
    </>
  );
}

export default App;
