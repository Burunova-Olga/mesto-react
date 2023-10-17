import React from 'react';
import FormProfile from './FormProfile';
import FormPlaces from './FormPlaces';
import FormAvatar from './FormAvatar';
import Avatar from '../images/profile-image.jpg';
import api from '../utils/Api';
import Card from './Card';

function Main(props)
{
  const [userName, SetUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, SetUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, SetUserAvatar] = React.useState(Avatar);
  const [cards, UpdateCards] = React.useState([]);

  React.useEffect(() => 
  {
    api.getUserInfo()
      .then((userData) => 
      {     
        SetUserName(userData.name);
        SetUserDescription(userData.about);
        SetUserAvatar(userData.avatar);
      })
      .catch(err =>
      {
        console.log("Данные профиля загрузить не удалось: " + err);
      });
    
    api.getInitialCards()
      .then((cardsData) => 
      {  
        UpdateCards(cardsData); 
      })
      .catch(err =>
      {
        console.log("Фотографии загрузить не удалось: " + err);
      });
  }, []); 
  
  return (
    <main>
      <section className="profile">
        <div className="avatar">
          <div style={{ backgroundImage: `url(${userAvatar})` }} className="avatar__image"/>
          <button type="button" className="button avatar__button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
            <div className="avatar__pen"></div>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="block profile__name">{userName}</h1>
          <button type="button" className="button profile__edit" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
          <p className="block profile__description">{userDescription}</p>
        </div>
        <button type="button" className="button profile__add" aria-label="Добавить место" onClick={props.onAddPlace} />
      </section>
      
      <FormProfile isOpen ={props.isEditProfilePopupOpen} onClose={props.onClose} />
      
      <FormAvatar isOpen ={props.isEditAvatarPopupOpen}  onClose={props.onClose} />

      <div className="popup popup_type_delete" id="popup-delete">
        <div className="popup__container">
          <div className="close">
            <button type="button" className="button close__button" aria-label="Закрыть без сохранения"></button>
          </div>
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="form-popup form-popup_type_delete" name="form-popup_type_delete" noValidate>
            <input type="submit" className="form-popup__submit" value="Да" />
          </form>
        </div>
      </div>

      <FormPlaces isOpen ={props.isAddPlacePopupOpen} onClose={props.onClose} />

      <section className="elements" aria-label="Место для фотографий">
        {
          cards.map((item, i) =>
          {
            return <Card card={item} key={i} onCardClick={props.onCardClick}/> 
          })
        }
      </section>

    </main>
  );
}

export default Main;