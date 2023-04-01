{/*import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { user_login } from '../../api/user_api';
import { Eye, EyeActive } from '../../assets';

import useNavigation from '@react-navigation/native';
import { AuthProvider } from '../../api/AuthContext';



export default function Login({navigation  }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);

    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[a-z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    


    return null;
  };

  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {

      user_login(


        {
          
        //email,
        password: password,
          

        })

        .then( Response => {
          if (Response == 200) {

           AsyncStorage.setItem('AccessToken', result.data.token);
            navigation.replace('Home');

            //navigator.mediaDevices.push('Home');
            
            console.log("hola2");
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
      console.log('hola3');

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}>
          <Image source={seePassword ? Eye : EyeActive} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {email == '' || password == '' || checkValidEmail == true ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleLogin}
          >
          <Text style={styles.text}>login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>login</Text>
        </TouchableOpacity>
      )}

      <Text>Don't  have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});
*/}


import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert,Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

//import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateReserva from '../../assets/DateReserva';
import { Eye, EyeActive } from '../../assets';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);

    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[a-z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    


    return null;
  };

  const handleLogin = async() => {
    

    const checkPassowrd = checkPasswordValidity(password);
    if(!checkPassowrd ){
    // Hacer la solicitud a la API REST con los datos del usuario
      await fetch('https://apphotel.iidtec.com/api/v1/login', {
      method: 'POST',
      headers: {
        email,
        password,
        

        //'Content-Type': 'application/json'
      },
      //body:{
        
      //}
    })
    .then(response => response.json())
    
    .then(data => {
    if (data.success) {
      
     
      //const token = data.message;
      // Si la solicitud es exitosa, mostrar un mensaje de éxito
    
       AsyncStorage.setItem('token', data.message);
       
       Alert.alert('¡Inicio de sesión exitoso!');
    navigation.navigate('Menu', {hotelUser_id:data.id});
      
      console.log(data)
    //console.log(id) 
      //console.log(token)
      
    }
  else {
    Alert.alert('error de email o contraseña');
  }


})
    
    .catch(error => {
      // Si hay un error en la solicitud, mostrar un mensaje de error
      
      Alert.alert('Error en el inicio de sesión', error.message);
      navigation.navigate('Login');
     
    });
  }};

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>email invalido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
    
      <View style={styles.wrapperInput}>
     
      <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity 
          
          title=""
          onPress={() => setSeePassword(!seePassword)}>
          <Image source={seePassword ? EyeActive : Eye} style={styles.icon} />
       </TouchableOpacity>
      </View>
      {email == '' || password == '' || checkValidEmail == true ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleLogin}
          >
          <Text style={styles.text}>login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity >
        <Button 
        title='iniciar Sesion'
        
        onPress={handleLogin}/>
        
       
         
        </TouchableOpacity>
      )}
      <Text>No tienes una cuenta?</Text>
      <TouchableOpacity 
      
        onPress={() => navigation.navigate('Register')}>
     
    
        <Text style={styles.text}>Registrate</Text>
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 5,
    padding: 5,
    marginStart:-1,
  },
  icon: {
    width: 30,
    height: 24,
    paddingStart:-40
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
})
export default LoginScreen;


