class Api
{
  constructor({baseUrl, headers})
  {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //*********************************************
  //                  Request
  //*********************************************
  _request({method, url, body})
  {
    let question;

    // Проверка на пустое тело
    if (body == null)
      question = fetch(this._baseUrl + url,
        {
          method: method,
          headers: this._headers
        });
    else
      question = fetch(this._baseUrl + url,
        {
          method: method,
          headers: this._headers,
          body: body
        });

    return question
      .then((res) =>
      {
        if (res.ok)
        {
          return res.json();
        }
        else
          return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //*********************************************
  //                  Cards
  //*********************************************
  getInitialCards()
  {
    return this._request({method: 'GET', url: "/cards"});
  }

  addNewCard(name, link)
  {
    return this._request
    ({
      method: 'POST',
      url: "/cards",
      body: JSON.stringify
      ({
        name: name,
        link: link
      })
    })
  }

  changeLike(cardId, isLike)
  {
    const method = isLike ? 'PUT' : 'DELETE';
    return this._request({method: method, url: `/cards/${cardId}/likes`});
  }

  deleteCard(cardId)
  {
    return this._request({method: 'DELETE', url: `/cards/${cardId}`});
  }

  //*********************************************
  //                  User
  //*********************************************
  getUserInfo()
  {
    return this._request({method: 'GET', url: "/users/me"});
  }

  setUserInfo(name, description)
  {
    return this._request
    ({
      method: 'PATCH',
      url: "/users/me",
      body: JSON.stringify
      ({
        name: name,
        about: description
      })
    })
  }

  setUserAvatar(link)
  {
    return this._request
    ({
      method: 'PATCH',
      url: "/users/me/avatar",
      body: JSON.stringify
      ({
        avatar: link
      })
    })
  }
}

const api = new Api
({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers:
  {
    authorization: 'e3eda12f-0d31-4fd3-b509-9437a2757934',
    'Content-Type': 'application/json'
  }
});

export default api;
