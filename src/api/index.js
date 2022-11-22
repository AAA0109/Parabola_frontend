import { API } from '../config';

const signin = (email) => {
  const data = {
    email,
    ce_id: localStorage.getItem('ce_id') || ''
  }
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

const verifyUser = (token) => {
  const data = {
    token
  }
  return fetch(`${API}/verify`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

const getProducts = (skip, limit, share=0, _id='') => {
  const data = {
    limit,
    skip,
    share,
    _id,
    token: localStorage.getItem('token') || '',
    ce_id: localStorage.getItem('ce_id') || ''
  };
  return fetch(`${API}/products/by/search`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const shareProduct = (productID, share) => {
  const data = {
    share,
    token: localStorage.getItem('token')
  }
  return fetch(`${API}/share/${productID}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export default {
  signin,
  verifyUser,
  getProducts,
  shareProduct
}