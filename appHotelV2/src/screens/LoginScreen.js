

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Eye, EyeActive } from '../assets/index';
import { colors, sizes } from '../constants/theme';
import { color } from 'react-native-reanimated';
import TabNavigator from '../navigations/TabNavigator';

const blueColor = 'rgba(0, 122, 255, 0.2)';
const image = { uri: "https://i.pinimg.com/564x/fc/3b/62/fc3b6298b8cdb690b51772c8281def8d.jpg" };
const image2 = {uri:"https://i.pinimg.com/564x/87/0c/37/870c37363bd67cc67a61a81ceda318bf.jpg"}

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

  const handleLogin = async () => {


    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
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
            //se convierte el json a una cadena de texto
            const jsonData = JSON.stringify(data.data);
            AsyncStorage.setItem('data_user', jsonData);
            

            Alert.alert('¡Inicio de sesión exitoso!');
            //  Alert.alert('recuerdalo, te servira para tu reserva',data.id);
            navigation.navigate('Home');

            console.log(data)
            //console.log(data.data)


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
    }
  };
  return (

    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} blurRadius={2}>
      
      <Text style={styles.title}>Inicio de Sesión</Text>

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
          
          onPress={() => setSeePassword(!seePassword)}>
          <Image source={seePassword ? EyeActive : Eye} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {checkValidEmail || password == true ? (
        <TouchableOpacity
      
          style={styles.buttonDisable} onPress={handleLogin} >
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonDisable}  onPress={handleLogin}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>

      )}
      <View>
        <Text>¿Aún no tienes cuenta?</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Registro')} style={styles.button} ><Text style={styles.link}>Regístrate</Text>

        </TouchableOpacity>
      </View>
      </ImageBackground>
 
      
    </View>
    
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
    fontFamily: 'sans-serif-medium',
   
    
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity:1,
    borderRadius: 25,
    padding:35,
    paddingVertical:12

 
  },
  image2: {
    resizeMode: "cover",
    justifyContent: "center",
    opacity:2,
    opacity:0.6, 
    borderStartWidth:17, 
    borderEndWidth:17,
    borderTopWidth:15,
    borderWidth:15,
    borderColor: 'rgba(0, 50, 7, 0.88)',
    borderTopEndRadius:15,
    borderTopColor: 'rgba(0, 50, 7, 0.88)',
    paddingStart:15,
    borderLeftColor:'rgba(0, 50, 7, 0.88) ',
    flex:0.43,
    borderRightColor:'rgba(0, 50, 7, 0.88)',
    borderHorizontal:'rgba(0, 50, 7, 0.88)',
    borderRadius:15,
    padding:34,
    paddingVertical:12,

    
    
    
 
  },
  wrapperInput: {
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    //borderTopColor: 'gray',
    fontFamily: 'sans-serif-medium',
    backgroundColor:'RGBA( 139, 0, 139, 1 )'


  },

  
  input: {
    padding: 10,
    width: '100%',
    fontFamily: 'sans-serif-medium',
    backgroundColor:'rgba(210, 180, 140, 1 )',
    opacity:0.7,
    color:'rgba(0, 0, 0, 1 )',
    shadowOpacity:1,
    borderRadius:10,    
    
    

  
  },
  wrapperIcon: {
    position: 'absolute',
    right: 1,
    padding: 2,
    marginStart: -1,
  },
  icon: {
    width: 30,
    height: 24,
    paddingStart: -50,
    position: 'relative',
    left: -50


  },
  button: {
    alignContent: 'flex-start',
    borderRadius: 5,
    backgroundColor:'rgba(105, 213, 255, 1)',
    marginHorizontal:250,
    marginStart:5
  },

  buttonDisable: {
    padding: 15,
    paddingStart: 28,
    alignContent: 'flex-start',
    height: 50,
    marginTop: 35,
    borderRadius: 15,
    backgroundColor:'rgba(105, 213, 255, 1)',
    marginHorizontal: 75,
 
    
    
  },
  buttonVisible: {
    padding: 15,
    paddingStart: 120,
    alignContent: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginHorizontal: 50,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'sans-serif-medium',
    left:12,

  },

  text2: {
    color: 'RGBA( 0, 0, 0, 1 )',
    fontWeight: '700',


  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    paddingStart:40,
    opacity: 10,
    color: 'black',
    fontFamily: 'sans-serif',

  },
  link: {
    backgroundColor:'RGBA( 255, 0, 0, 1 )',
  },
  container2: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  },
})
export default LoginScreen;