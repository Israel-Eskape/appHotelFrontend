import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors, sizes} from '../constants/theme';
import { useNavigation } from '@react-navigation/native';



const EditReserva = () => {
  const navigation = useNavigation();
  //const [hotelUser_id, setHotelUser_id] = useState('');
  const [data, setData] = useState(null);
  const [description, setDescription] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [amountPeople, setAmountPeople] = useState('');
 // const [hotelRoom_id, setHotelRoom_id] = useState('');
  const [CheckValidArrival, setCheckValidArrival] = useState('');
  const [CheckValidDeparture, setCheckValidDeparture] = useState('');
 
  //Validaciones fecha correcta 
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
    //console.log(data_user.name);
    // Realizar la solicitud GET con el token de autorización adjunto en el encabezado
    fetch(`https://apphotel.iidtec.com/api/v1/userReservation/${data_user.id}`, {
      headers: {
        Authorization: `Bearer ${token1}` ,
       
      },
    })
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.data);
        console.log(responseData)
      })
      .catch(error => console.error(error));
  }, []);

//Boton para subir los cambios
const handleRegister = async() => {
  // Hacer la solicitud a la API REST con los datos del usuario

  const token =  await AsyncStorage.getItem('token');
  const data_user = await AsyncStorage.getItem('data_user');
  console.log(data_user);

  fetch(`https://apphotel.iidtec.com/api/v1/update-reservation?${data_user.id}`, {
    method: 'POST',
    headers: {

      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
     description,
     arrival,
     departure,
     amountPeople
    })
  })
  .then(response => response.json())

      .then(data => {

        //navigation.navigate('Login',{ data: responseData });



        // Si la solicitud es exitosa, mostrar un mensaje de éxito
        //this.setState({register: data});
        Alert.alert('¡Cambios Guardados!');

        navigation.navigate('Edit2');


        console.log(data)
        console.log(email)
        // console.log(token)

      })
    }


  //elementos que componen la vista
  return (
    <View>
      {data ? (
        <View>
        {/*<Text>{JSON.stringify(data)}</Text>*/}
         <View style={styles.wrapperInput}>
          
        <TextInput 
        style={styles.input}
      
         onChangeText={text => setDescription(text)}>
          <Text>{data.description} </Text>
          
          </TextInput>
        </View>
        <View style={styles.wrapperInput}>
          
        <TextInput 
        style={styles.input}
      
         onChangeText={text => setArrival(text)}>{data.arrival} </TextInput>
        </View>
        <View style={styles.wrapperInput}>
          
        <TextInput 
        style={styles.input}
      
         onChangeText={text => setDeparture(text)}>{data.departure} </TextInput>
        </View>
        <View style={styles.wrapperInput}>
          
        <TextInput 
        style={styles.input}
      
         onChangeText={text => setAmountPeople(text)}>{data.amountPeople} </TextInput>
        </View>
        <View style={styles.wrapperInput}>
          
        
        </View>
        </View>
        
      ) : 
      (
       
        <Text>Cargando...</Text>
        
      )}
     <TouchableOpacity  style={styles.buttonDisable}
          
          title='Guardar Cambios'
          
          onPress={handleRegister}>

          <Text style={styles.text}>Guardar Cambios</Text>
          </TouchableOpacity>


          <TouchableOpacity  style={styles.buttonDisable}
          
          title='Cancelar'
          
          onPress={()=> navigation.navigate('Home')}>

          <Text style={styles.text}>Cancelar</Text>
          </TouchableOpacity>
    </View>
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
  wrapperInput: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'column-reverse',
    paddingStart: 10,
    borderColor: colors.gray,
    fontSize: 12,
  },
  buttonDisable: {
    padding: 15,
    paddingStart: 100,
    alignContent: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginHorizontal: 50,
    alignItems:'baseline'
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  input: {
    padding: 10,
    width: '100%',
  },
});
export default EditReserva;
///user edit funcionando