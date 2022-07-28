# API - Bags for Coins

#
#
#### 1. Obter o AcessToken 
```js
import axios from 'axios';
const { data } = await axios.post('http://localhost:1337/api/auth/local', {
  identifier: 'reader@strapi.io',
  password: 'strapi',
});
console.log(data)
```

#### 2. Obter dados
```js
import axios from 'axios';
const { data } = await axios.get('http://localhost:1337/api/users', {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2OTM4MTUwLCJleHAiOjE1Nzk1MzAxNTB9.UgsjjXkAZ-anD257BF7y1hbjuY3ogNceKfTAQtzDEsU',
  },
});
console.log(data);
```

#### 3. Obter dados com relacionamento entre tabelas
```js
import axios from 'axios';
const { data } = await axios.get('http://localhost:1337/api/users?populate=coins', {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2OTM4MTUwLCJleHAiOjE1Nzk1MzAxNTB9.UgsjjXkAZ-anD257BF7y1hbjuY3ogNceKfTAQtzDEsU',
  },
});
console.log(data);
```

#### 4. Inserir Dados
```js
import axios from 'axios';
const { data } = await axios.post('http://localhost:1337/api/coins', {
  "data": {
    "value": 45,
    "user": 2
  }
},
{
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2OTM4MTUwLCJleHAiOjE1Nzk1MzAxNTB9.UgsjjXkAZ-anD257BF7y1hbjuY3ogNceKfTAQtzDEsU',
  },
});
console.log(data);
```

