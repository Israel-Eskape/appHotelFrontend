import ApiManager from './ApiManager';
import axios from 'axios';

export const user_login = async (email, password) => {
  try {
    const response = await fetch ('https://apphotel.iidtec.com/api/v1/login', {
     method: 'POST',
    
     headers: JSON.stringify({
      email,
      password:password,
    
    'Content-Type': 'application/json',
    'X-Custom-Header': 'Custom value',
      
    }),
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(password)
  })  
  .catch(error => {
   console.error(error);
  });
  } catch (error) {
    console.error(error);
    console.log('hola1')
  }
};



export const user_register = async () => {


  try {
    const response = await axios.post('https://apphotel.iidtec.com/api/v1/login', {
      email: email,
      password: password,
    }, {
      headers:JSON.stringify( {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'Custom value',
        'Authorization': 'Bearer ' + ''
    
      })
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
