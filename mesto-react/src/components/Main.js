import React from 'react';
import PopupWithForm from './PopupWithForm';
import Avatar from '../images/profile-image.jpg';

function FormProfile()
{
  return (
    <>
      <input type="text" className="form-popup__input form-popup__input_type_title" name="input-name" id="input-name"
        placeholder="Ваше имя" required minlength="2" maxlength="40" />
      <span className="form-popup__input-error input-name-error"></span>

      <input type="text" className="form-popup__input form-popup__input_type_subtitle" name="input-description"
        id="input-description" placeholder='Краткая информация' required minlength="2"
        maxlength="200" />
      <span className="form-popup__input-error input-description-error"></span>

      <input type="submit" className="form-popup__submit" value="Сохранить" />
    </>
  );
}

function FormPlaces()
{
  return (
    <>
      <input type="text" className="form-popup__input form-popup__input_type_title" name="input-place" id="input-place"
        placeholder="Название" required minlength="2" maxlength="30" />
      <span className="form-popup__input-error input-place-error"></span>

      <input type="url" className="form-popup__input form-popup__input_type_subtitle" name="input-link" id="input-link"
        placeholder='Ссылка на картинку' required />
      <span className="form-popup__input-error input-link-error"></span>

      <input type="submit" className="form-popup__submit" value="Создать" />
    </>
  );
}

function FormAvatar()
{
  return (
    <>
      <input type="url" className="form-popup__input form-popup__input_type_title" name="input-avatar" id="input-avatar"
        placeholder='Ссылка на картинку' required />
      <span className="form-popup__input-error input-avatar-error"></span>

      <input type="submit" className="form-popup__submit" value="Сохранить" />
    </>
  );
}

function Main(props)
{
  return (
    <main>
      <section className="profile">
        <div className="avatar">
          <img src={Avatar} className="avatar__image" alt="Аватар" />
          <button type="button" className="button avatar__button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
            <div className="avatar__pen"></div>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="block profile__name">Жак-Ив Кусто</h1>
          <button type="button" className="button profile__edit" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
          <p className="block profile__description">Исследователь океана</p>
        </div>
        <button type="button" className="button profile__add" aria-label="Добавить место" onClick={props.onAddPlace} />
      </section>

      <PopupWithForm name="profile" title="Редактировать профиль" children= {FormProfile} />

      <PopupWithForm name="places" title="Новое место" children= {FormPlaces} />

      <div className="popup popup_type_delete" id="popup-delete">
        <div className="popup__container">
          <div className="close">
            <button type="button" className="button close__button" aria-label="Закрыть без сохранения"></button>
          </div>
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="form-popup form-popup_type_delete" name="form-popup_type_delete" novalidate>
            <input type="submit" className="form-popup__submit" value="Да" />
          </form>
        </div>
      </div>

      <PopupWithForm name="avatar" title="Обновить аватар" children= {FormAvatar} />

      <section className="elements" aria-label="Место для фотографий" />
    </main>
  );
}

export default Main;