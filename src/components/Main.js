import React from 'react';
import Avatar from '../images/profile-image.jpg';
import api from '../utils/Api';
import Card from './Card';

function Main(props)
{
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(Avatar);
  const [cards, updateCards] = React.useState([]);

  React.useEffect(() => 
  {
    api.getUserInfo()
      .then((userData) => 
      {     
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch(console.error);
    
    api.getInitialCards()
      .then((cardsData) => 
      {  
        updateCards(cardsData); 
      })
      .catch(console.error);
  }, []); 
  
  return (
    <main>
      <section className="profile">
        <div className="avatar">
          <div style={{ backgroundImage: `url(${userAvatar})` }} className="avatar__image"/>
          <button type="button" className="button avatar__button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
            <div className="avatar__pen" />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="block profile__name">{userName}</h1>
          <button type="button" className="button profile__edit" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
          <p className="block profile__description">{userDescription}</p>
        </div>
        <button type="button" className="button profile__add" aria-label="Добавить место" onClick={props.onAddPlace} />
      </section>
      
      <section className="elements" aria-label="Место для фотографий">
        {
          cards.map((item) =>
          {
            return <Card card={item} key={item._id} onCardClick={props.onCardClick}/> 
          })
        }
      </section>

    </main>
  );
}

export default Main;