import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors, sizes} from '../constants/theme';
import { useNavigation } from '@react-navigation/native';


const image2 = { uri: "https://i.pinimg.com/564x/63/06/37/630637917bc35ad26071eb126acea445.jpg" };
const App = () => {
  const [data, setData] = useState(null);
  let [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthDay] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [hotelRole_id, setHotelRole_id] = useState('');
 // const [hotelStatusEntity_id, setHotelStatusEntity_id] = useState('');
  const [state,setState] = useState('');
  const [CheckValidBirthday, setCheckValidBirthday] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [CheckValidPassword, setCheckValidPassword]= useState(false);
  const [CheckValidPhone,setCheckValidPhone]= useState('');
  const [checkValidName,setCheckValidName] =useState('')

  const hotelRole_id=1;
  const hotelStatusEntity_id =1;
  const navigation = useNavigation();
 
  //Validaciones fecha correcta 
  const handleCheckBirthday = text => {
    let re = /S\S\S/;
    let regex = /[1-2]{1}?[0-9]{3}?[-]?[0-1]{1}?[1-9]{1}?[-]?[0-3]{1}?[1-9]{1}$/;

    setBirthDay(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidBirthday(false);
    } else {
      setCheckValidBirthday(true);
    }
  };
    //Validaciones email correcto
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
    let regex = /^[0-9]{3}?[0-9]{3}?[0-9]{4}$/im;

    setPhone(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPhone(false);
    } else {
      setCheckValidPhone(true);
    }
  };


  const handleCheckName = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[A-Z]{10}?[a-z]{10}?$/im;

    setName(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidName(false);
    } else {
      setCheckValidName(true);
    }
  };


  const handleCheckPassword = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[a-z]{4}?[a-z]{2,4}?$/;

    setPassword(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };


  useEffect(async() => {
    // Obtener el token de autorización de tu fuente preferida
    const token1 = await AsyncStorage.getItem('token');
    let data_user = await AsyncStorage.getItem('data_user');
    if (data_user !== null) {
      //console.log(JSON.parse(data_user));
      data_user = JSON.parse(data_user);
      // Aquí puedes utilizar los datos obtenidos
    }
    //console.log(token);
    console.log(data_user.id);
    
    const id = data_user.id;
    //console.log(data_user.name);
    // Realizar la solicitud GET con el token de autorización adjunto en el encabezado
    fetch(`https://apphotel.iidtec.com/api/v1/user/${data_user.id}`, {
      headers: {
        Authorization: `Bearer ${token1}` ,
       
      },
    })
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.data);
        console.log(responseData.data.password);
      
      })
      .catch(error => console.error(error));
  }, []);

//Boton para subir los cambios
const handleRegister = async() => {
  // Hacer la solicitud a la API REST con los datos del usuario

  const token =  await AsyncStorage.getItem('token');
  //const data_user = await AsyncStorage.getItem('data_user');
  
    let data_user = await AsyncStorage.getItem('data_user');
    if (data_user !== null) {
      //console.log(JSON.parse(data_user));
      data_user = JSON.parse(data_user);
      // Aquí puedes utilizar los datos obtenidos
      
    }
    //console.log(token);
    const id= data_user.id;

    
  fetch(`https://apphotel.iidtec.com/api/v1/update/${data_user.id}`, {
    method: 'POST',
    headers: {

      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name:name,
      firstName: data.firstName,
      lastName: data.lastName,
      birthday:data.birthday,
      address:data.address,
      phone:data.phone,
      email:data.email,
      
      hotelRole_id,
      hotelStatusEntity_id,
      
      
    })
  })
  .then(response => response.text())

      .then(data => {

        //navigation.navigate('Login',{ data: responseData });
        // Si la solicitud es exitosa, mostrar un mensaje de éxito
        //this.setState({register: data});
        Alert.alert('¡Cambios Guardados!');

        navigation.navigate('Edit2');

        console.log(data);
       
        
        // console.log(token)

      })
      .catch(error => console.error(error));
    }

//en el name le habia puesto pablo
  //elementos que componen la vista
  return (
    <ScrollView>
      <View style={styles.container}>
              <ImageBackground source={image2} style={styles.image2} blurRadius={2}>
    <View style={styles.container}>
      {data ? (
        <View >
           <Text style={styles.title}>Editar Datos</Text>
      
       
         <View style={styles.wrapperInput}>
          
        <TextInput 
        style={styles.input}
         onChangeText={text => setName(text)}>
          <Text>{data.name}</Text>
          </TextInput>

        
        </View>
        <Text style={styles.textFailed}> </Text>
      
        <View style={styles.wrapperInput}>
          
        <TextInput 
        style={styles.input}

         onChangeText={text => setFirstName(text)}>{data.firstName}</TextInput>
        </View>

        
        <View style={styles.wrapperInput}>
        <TextInput 
        style={styles.input}
         onChangeText={text => setLastName(text)}>{data.lastName}</TextInput>
        </View>
        <View style={styles.wrapperInput}>
          
        {CheckValidBirthday ? (
        <Text style={styles.textFailed}>Fecha inválida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
        <TextInput 
        style={styles.input}
         onChangeText={text => setBirthDay(text)}>{data.birthday}</TextInput>
        </View>

        {checkValidName ? (
        <Text style={styles.textFailed}>Dirección inválida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
        <View style={styles.wrapperInput}>
        <TextInput 
        style={styles.input}
         onChangeText={text => setAddress(text)}>{data.address}</TextInput>
        </View>

        {CheckValidPhone ? (
        <Text style={styles.textFailed}>Teléfono invalido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
        <View style={styles.wrapperInput}>
        <TextInput 
        style={styles.input}
         onChangeText={text => setPhone(text)}>{data.phone}</TextInput>
        </View>

        {checkValidEmail ? (
        <Text style={styles.textFailed}>Email Inválido</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
        <View style={styles.wrapperInput}>
        <TextInput 
        style={styles.input}
         onChangeText={text => setEmail(text)}>{data.email} </TextInput>
        </View>
        {CheckValidPassword ? (
        <Text style={styles.textFailed}>Contraseña inválida</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
       
        </View>
        
      ) : 
      (
       
        <Text>Cargando...</Text>
        
      )}


{name == '' || lastName == ''  || phone == '' || email == '' || password == '' || birthday == '' || checkValidEmail || CheckValidBirthday || CheckValidPhone == true ? (
     <TouchableOpacity  style={styles.buttonDisable}
          
          title='Guardar Cambios'
          onPress={handleRegister}>

          <Text style={styles.text}>Guardar Cambios</Text>
          </TouchableOpacity>

) : (
      <TouchableOpacity style={styles.buttonDisable}
      title='Guardar Cambios'
      onPress={handleRegister}>
        <Text style={styles.text1}>Guardar Cambios</Text>
      </TouchableOpacity>

  )}
          <TouchableOpacity  style={styles.buttonDisable}
          
          title='Cancelar'
          
          onPress={()=> navigation.navigate('Home')}>
  
          <Text style={styles.text1}>Cancelar</Text>
          </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  link:{
    color: 'blue'
  }, container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
   marginTop:-70
  },
  image2: {
    resizeMode: "cover",
    justifyContent: 'space-between',
    opacity: 1,
    borderRadius: 50,
    padding: 50,
    paddingVertical: 180,

  },
  wrapperInput: {
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'column-reverse',
    paddingStart: 5,
    backgroundColor:'rgba(255, 240, 245, 1)', 
    fontFamily: 'Helvetican',
    opacity:0.75
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  buttonDisable: {
    padding: 15,
    paddingStart: 50,
    alignContent: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: 'rgba(50, 205, 50, 1)',
    opacity:0.7,
    marginHorizontal: 50,
    alignItems: 'baseline'
    

  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  text1: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'sans-serif-medium',
   
  },
  input: {
    padding: 10,
    width: '100%',
  },
  textFailed: {
    // alignSelf: 'flex-end',
    color: 'red',
    paddingLeft: 250
  },
});
export default App;
///user edit funcionando