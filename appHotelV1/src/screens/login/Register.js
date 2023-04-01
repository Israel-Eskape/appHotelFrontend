{/*import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { AuthContext } from '../../api/AuthContext';
import { user_login, user_register } from '../../api/user_api';
import DateSingle from '../../assets/DateSingle';

//import {Eye, EyeActive} from '../../assets';
//import Spinner from 'react-native-loading-spinner-overlay';
//import {AuthContext} from '../context/AuthContext';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
 // const val= useContext(AuthProvider);
 const [seePassword, setSeePassword] = useState(true);
 const [checkValidEmail, setCheckValidEmail] = useState(false);
 const [checkValidNmae, setCheckValidName] = useState(false);

  //const {isLoading, register} = useContext(AuthContext);

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

    const isValidLength = /^.{6,8}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 6-8 Characters Long.';
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const handleRegister = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      user_register({
        name:password,
        email: email.toLocaleLowerCase(),
        password: password,
      })
        .then(result => {
          if (result == 200) {
            AsyncStorage.setItem('AccessToken', result.data.token);
            navigation.replace('Login');
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
    }
  };

  return (
    
    <View style={styles.container}>
      {/*<Spinner visible={isLoading} />

    
        <TouchableOpacity style={styles.wrapper}>
        <DateSingle/>
         
        
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => handleCheckEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
  
       
<View>
<TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}>
         
        </TouchableOpacity>
      </View>
      {email == '' || password == '' || checkValidEmail == true ? (
        <TouchableOpacity
          disabled
          style={styles.buttonDisable}
          onPress={handleRegister}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleRegister} >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      )}


        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
      </View>
      
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingVertical: '100px',
    alignContent: 'center',
    marginTop:21,
    shadowRadius: 20,
    paddingHorizontal: 50,
    paddingStart: 50,
    
  },
  wrapper: {
    flex:1,
    width: '60%',
    padding:-10,
    paddingVertical: 50,
    paddingStart: 50,

  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  link: {
    color: 'blue',
  },
 
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
  

export default RegisterScreen;*/}

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert,Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateSingle from '../../assets/DateSingle'
import DatePicker from 'react-native-neat-date-picker'
import { out } from 'react-native/Libraries/Animated/Easing';

const  RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthDay] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidName, setCheckValidName] = useState(false);
  const [checkValidDate,  setCheckValidDate]= useState(false);
  const [CheckValidPassword, setCheckValidPassword]= useState(false);
  const [CheckValidBirthday, setCheckValidBirthday] = useState(false);
  //const [hotelRole_id, setHotelRole_id] = useState('');
  //const [hotelStatusEntity_id, setHotelStatusEntity_id] = useState('');
  const hotelRole_id=1;
  const hotelStatusEntity_id=1;

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

  const handleCheckBirthday = text => {
    let re = /S\S\S/;
    let regex = /[1-9]{2}?[1-9]{2}?[-]?[0-1]{1}?[1-9]{1}?[-]?[0-3]{1}?[1-9]{1}$/;

    setBirthDay(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidBirthday(false);
    } else {
      setCheckValidBirthday(true);
    }
  };





  
  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[a-z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return Alert.alert( 'Password must have at least one Uppercase Character.');
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{6,8}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 6-8 Characters Long.';
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const handleRegister = () => {
    const checkPassowrd = checkPasswordValidity(password)
    if(!checkPassowrd){
    // Hacer la solicitud a la API REST con los datos del usuario
    fetch('https://apphotel.iidtec.com/api/v1/register', {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,
        firstName,
        lastName,
        birthday,
        address,
        phone,
        email,
        password,
        hotelRole_id,
        hotelStatusEntity_id

        
      })
    })
    .then(response => response.json())
    
    .then(data => {
    if(data.sucess){
      //const token = data.message;
      // Si la solicitud es exitosa, mostrar un mensaje de éxito
      Alert.alert('¡Registro Exitoso!');
       //AsyncStorage.setItem('token', data.message);
      navigation.navigate('Login');
      
      console.log(data)
      console.log(email) 
     // console.log(token)
      
     }else{
      Alert.alert('error de registro');
      //navigation.navigate('Login');
      console.log(data)
     }
      
     }) 
    .catch(error => {
      // Si hay un error en la solicitud, mostrar un mensaje de error
      
      Alert.alert('Error en el inicio de sesión', error.message);
     
    });
}};

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Primer Apellido"
        //secureTextEntry={true}
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput 
        placeholder="Segundo Apellido"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      
   


{CheckValidBirthday ? (
        <Text style={styles.textFailed}>fecha invalida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
         
      
      <TextInput
        placeholder="Fecha de nacimiento"
        value={birthday}
        onChangeText={text => handleCheckBirthday(text)}
      />
      <TextInput
        placeholder="Direccion"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        placeholder="Telefono"
       // secureTextEntry={true}
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType='number-pad'
      />
      {checkValidEmail ? (
        <Text style={styles.textFailed}>email invalido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => handleCheckEmail(text)}
      />
       {CheckValidPassword? (
        <Text style={styles.textFailed}>contraseña invalida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword (text)}
      />




      {email == '' || password == '' || birthday==''|| checkValidEmail || checkValidDate|| CheckValidBirthday == true ? (
          
            <TouchableOpacity
              disabled
              style={styles.buttonDisable}
              onPress={handleRegister}
              >
              <Text style={styles.text}>Registarme</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity >
            <Button 
            title='Registrarme'
            
            onPress={handleRegister}/>
            
           
             
            </TouchableOpacity>
          )}
        
    </View>
  );
};
const styles = StyleSheet.create({
  link:{
    color: 'blue'
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
    //paddingStart:12,
  },
  icon: {
    width: 30,
    height: 24,
    paddingStart:-25
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
    borderRadius: 20,
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  textFailed: {
   // alignSelf: 'flex-end',
    color: 'red',
    paddingLeft:300
  },
  
})
export default RegisterScreen;
