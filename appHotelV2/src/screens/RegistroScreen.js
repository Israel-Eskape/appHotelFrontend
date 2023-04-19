import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors, sizes } from '../constants/theme';
const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthDay] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [hotelRole_id, setHotelRole_id] = useState('');
  // const [hotelStatusEntity_id, setHotelStatusEntity_id] = useState('');
  const [state, setState] = useState('');
  const [CheckValidBirthday, setCheckValidBirthday] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [CheckValidPassword, setCheckValidPassword] = useState(false);
  const [CheckValidPhone,setCheckValidPhone]= useState('');
  const hotelRole_id = 1;
  const hotelStatusEntity_id = 1;
  const image = { uri: "https://i.pinimg.com/564x/9b/24/31/9b2431d7ccdacb7a700a7390d11f7a93.jpg" };
const image2 = {uri:"https://i.pinimg.com/564x/87/0c/37/870c37363bd67cc67a61a81ceda318bf.jpg"}

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

  const handleCheckPhone = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setPhone(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPhone(false);
    } else {
      setCheckValidPhone(true);
    }
  };


  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[a-z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return Alert.alert('Password must have at least one Uppercase Character.');
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
     //Alert.alert('error de registro');
     Alert.alert('¡Registro Exitoso!');
      navigation.navigate('Login');
      console.log(data)
     }
      
     }) 
    .catch(error => {
      // Si hay un error en la solicitud, mostrar un mensaje de error
      
      Alert.alert('Error de Registro', error.message);
     
    });
}};

  return (
    <ScrollView>
    <View style={styles.container}>
       <ImageBackground source={image} style={styles.image} blurRadius={2}>
      
      <Text style={styles.title}>Registro</Text>
      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Nombre"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Primer Apellido"
          //secureTextEntry={true}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
      </View>
      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Segundo Apellido"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>

      {CheckValidBirthday ? (
        <Text style={styles.textFailed}>fecha invalida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}

      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Fecha de nacimiento   Año-Mes-Día"
          value={birthday}
          onChangeText={text => handleCheckBirthday(text)}
        />
      </View>
      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Dirección"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>

      {CheckValidPhone ? (
        <Text style={styles.textFailed}> Teléfono inválido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Teléfono"
          // secureTextEntry={true}
          value={phone}
          onChangeText={text => handleCheckPhone(text)}
          keyboardType='number-pad'
        />
      </View>
      {checkValidEmail ? (
        <Text style={styles.textFailed}>email invalido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
      </View>
      {CheckValidPassword ? (
        <Text style={styles.textFailed}>contraseña inválida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <View style={styles.wrapperInput}>
        <TextInput style={styles.text}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          
          onChangeText={text => setPassword(text)}
        />
      </View>



      {name == '' || lastName == '' || address == '' || phone == '' || email == '' || password == '' || birthday == '' || checkValidEmail || CheckValidBirthday || CheckValidPhone == true ? (

        <TouchableOpacity
          disabled
          style={styles.buttonDisable}

          onPress={handleRegister}

        >
          <Text style={styles.text}>Registrarme</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonDisable} onPress={handleRegister}>
          <Text style={styles.text}>Registrarme</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.buttonDisable}

        title='Iniciar Sesión'

        onPress={() => navigation.navigate('Login')}>

        <Text style={styles.text}>Regresarme</Text>
      </TouchableOpacity>

      </ImageBackground>
    


    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }, 
 
  wrapperInput: {
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'column-reverse',
    paddingStart: 10,
    backgroundColor:'rgba(255, 240, 245, 1)', 
    fontFamily: 'Helvetican',
    opacity:0.75
    


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
  input: {
    padding: 10,
    width: '100%',
    color: colors.gray
    
  },
  wrapperIcon: {
    position: 'absolute',
    right: 5,
    padding: 5,
    marginStart: -1,
    //paddingStart:12,
  },
  icon: {
    width: 30,
    height: 24,
    paddingStart: -25
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
    padding: 15,
    paddingStart: 55,
    alignContent: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 15,
    marginHorizontal: 60,
    alignItems: 'baseline',
    backgroundColor:'rgba(105, 213, 255, 1)'
    


  },
  text: {
    color: colors.black,
    opacity: 5,
    fontWeight: '700',
    fontFamily: 'Helvetican'
   
    

  },
  textFailed: {
    // alignSelf: 'flex-end',
    color: 'red',
    paddingLeft: 200
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color:'rgba(149, 199, 146, 0.82)',
    borderColor:colors.black,
    fontFamily:'sans-serif-condensed'
    
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
   
    borderRadius: 30
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
   // borderColor:'rgba(0, 50, 7, 0.88)',
   borderRightColor:'rgba(0, 50, 7, 0.88)',
    borderHorizontal:'rgba(0, 50, 7, 0.88)',
    borderRadius:15,
    padding:34,
    paddingVertical:12,
  //marginVertical:12

  }





})
export default Register;