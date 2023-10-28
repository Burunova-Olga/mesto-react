import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function PopupEditProfile({ isOpen, onClose, onEditProfile })
{
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('', '');
  const [description, setDescription] = React.useState(false);
  const handleEditProfile = () => onEditProfile(name, description);

  React.useEffect(() =>
  {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e)
  {
    e.preventDefault();
    handleEditProfile();
  }

  function handleSetName(e)
  {
    setName(e.target.value);
  }

  function handleSetDescription(e)
  {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      {
        <>
          <input type="text" className="form-popup__input form-popup__input_type_title" name="input-name" id="input-name"
            placeholder="Ваше имя" required minLength="2" maxLength="40" onChange={handleSetName} value={name} />
          <span className="form-popup__input-error input-name-error" />

          <input type="text" className="form-popup__input form-popup__input_type_subtitle" name="input-description"
            id="input-description" placeholder='Краткая информация' required minLength="2" onChange={handleSetDescription}
            maxLength="200" value={description} />
          <span className="form-popup__input-error input-description-error" />
        </>
      }
    </PopupWithForm>
  )
}

export default PopupEditProfile;