import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert,Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateSingle from '../../assets/DateSingle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateReserva from '../../assets/DateReserva';


const  ReservaScreen= () => {
  const navigation = useNavigation();
 const [hotelUser_id, setHotelUser_id] = useState('');
  const [description, setDescription] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [amountPeople, setAmountPeople] = useState('');
  const [hotelRoom_id, setHotelRoom_id] = useState('');
  //const [hotelReservationStatu_id, setHotelReservationStatu_id] = useState('');
  //const [hotelStatusEntity_id, setHotelStatusEntity_id] = useState('');
  //const [token, setToken] = useState('');

 // const token = req.headers.authorization.split(' ')[1];
 //const token =  AsyncStorage.getItem('token');

 const hotelReservationStatu_id=1;
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

const checkPasswordValidity = value => {
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return 'Password must not contain Whitespaces.';
  }

  const isContainsUppercase = /^(?=.[a-z]).$/;
  if (!isContainsUppercase.test(value)) {
    return 'Password must have at least one Uppercase Character.';
  }

  const isContainsLowercase = /^(?=.[a-z]).$/;
  if (!isContainsLowercase.test(value)) {
    return 'Password must have at least one Lowercase Character.';
  }

  const isContainsNumber = /^(?=.).$/;
  if (!isContainsNumber.test(value)) {
    return 'Password must contain at least one Digit.';
  }

  


  return null;
};












  
  const handleReserva = async() => {
    // Hacer la solicitud a la API REST con los datos del usuario

     //localStorage.setItem('access_token', response.access_token);

 
     const token = await AsyncStorage.getItem('token');
     ///const hotelUser_id = await AsyncStorage.getItem('hotelUser_id');
     console.log(token)
    fetch('https://apphotel.iidtec.com/api/v1/reservation', {
      
      
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json',
        'Authorization':  `Bearer ${token}`
      },
      
      
      
      body:JSON.stringify({
        hotelUser_id,
        description,
        arrival,
        departure,
        amountPeople,
        hotelRoom_id,
        hotelReservationStatu_id,
        hotelStatusEntity_id:hotelStatusEntity_id,
        token
        
      })

    })
    .then(response => response.json())
    .then(data => {
      // Si la solicitud es exitosa, mostrar un mensaje de éxito
 
      //localStorage.setItem  ('token', JSON.stringify(token));
      
      Alert.alert('¡Reserva Exitosa!');
      console.log(token)
      console.log(data)
      console.log(hotelUser_id)
     
      
    
      
    })
    .catch(error => {
      // Si hay un error en la solicitud, mostrar un mensaje de error
    
      Alert.alert('Error de Reserva', error.message);
     
    });
  };

  return (
    <View>
      <TextInput
        placeholder="HotelUser"
        value={hotelUser_id}
        onChangeText={text => setHotelUser_id(text)}
      />
      <TextInput
        placeholder="Descripcion"
        //secureTextEntry={true}
        value={description  }
        onChangeText={text => setDescription(text)}
       
      />
    

     <TextInput 
        placeholder="Fecha de Llegada"
        value={arrival}
        onChangeText={text => setArrival(text)}
      />
      <TextInput 
        placeholder="Fecha de Salida"
        value={departure}
        onChangeText={text => setDeparture(text)}
      />
      
      
      <TextInput 
        placeholder="Personas"
        value={ amountPeople}
        onChangeText={text => setAmountPeople(text)}
        keyboardType='numeric'
      />

      <TextInput
        placeholder="Numero de Habitacion"
        value={hotelRoom_id}
        onChangeText={text => setHotelRoom_id(text)}
        keyboardType='numeric'
      />


      
    {/*  <TextInput
        placeholder="ReservationStatus"
       // secureTextEntry={true}
        value={hotelReservationStatu_id}
        onChangeText={text => setHotelReservationStatu_id(text)}
      />
    
  <TextInput
        placeholder="Estatus"
        value={hotelStatusEntity_id}
        onChangeText={text => setHotelStatusEntity_id(text)}
      />

<TextInput
        placeholder="Token"
        value={token}
        onChangeText={text => setToken(text)}
        
      />*/}

      <DateReserva/>

      <Button title="Reservacion" onPress={handleReserva}   />
      {/* <Text>Already have an accoutn? </Text>
         
         <Button
          title='Register'
          onPress={()=> navigation.push ('Register')}
          />
          
        
    {/<Text style={styles.link}>Register</Text>*/}
          
    </View>
  );
};
const styles = StyleSheet.create({
  link:{
    color: 'blue'
  }
})
export default ReservaScreen;