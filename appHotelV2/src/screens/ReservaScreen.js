import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, sizes } from '../constants/theme';
import Carousel from 'react-native-snap-carousel';

import moment from 'moment';
import { color } from 'react-native-reanimated';


const ReservaScreen = () => {
  const navigation = useNavigation();
  //const [hotelUser_id, setHotelUser_id] = useState('');
  const [description, setDescription] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [amountPeople, setAmountPeople] = useState('');
  //const [hotelRoom_id, setHotelRoom_id] = useState('');
  const [CheckValidArrival, setCheckValidArrival] = useState('');
  const [CheckValidDeparture, setCheckValidDeparture] = useState('');
  const image2 = { uri: "https://i.pinimg.com/564x/7f/34/a1/7f34a1d1e92b6132bfd9e44f37125fde.jpg" };
  const hotelReservationStatu_id = 1;
  const hotelStatusEntity_id = 1;
  const hotelRoom_id = 1;
  const image = { uri: "https://i.pinimg.com/564x/87/0c/37/870c37363bd67cc67a61a81ceda318bf.jpg" };
  const [images, setImages] = useState([
    { image: "https://i.pinimg.com/564x/63/ab/16/63ab16ff049a67d4481e3d628c57ff66.jpg" },
    { image: "https://i.pinimg.com/564x/8e/6f/1a/8e6f1a029de8d44db84ed0ed0e33df15.jpg" },
    { image: "https://i.pinimg.com/564x/a3/d5/6d/a3d56d2c36642d198477349c3341a140.jpg" },
  ]);



  const handleCheckFecha = text => {
    let re = /S\S\S/;
    let regex = /[2]{1}?[0]{1}?[2]{1}?[1-9]{1}?[-]?[0,1]{1}?[1-9]{1}?[-]?[0-3]{1}?[0-9]{1}$/;

    setArrival(text);
    setDeparture(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidArrival(false);


    }


    else {
      setCheckValidArrival(true);

    }
  };


  const handleCheckDeparture = text => {
    let re = /S\S\S/;
    let regex = /[2]{1}?[0]{1}?[2]{1}?[1-9]{1}?[-]?[0,1]{1}?[1-9]{1}?[-]?[0-3]{1}?[0-9]{2}$/;


    setDeparture(text);
    if (re.test(text) || regex.test(text)) {

      setCheckValidDeparture(true);

    }

    else {
      setCheckValidDeparture(false);
    }
  };










  const handleReserva = async () => {
    // Hacer la solicitud a la API REST con los datos del usuario




    const token = await AsyncStorage.getItem('token');
    ///const hotelUser_id = await AsyncStorage.getItem('hotelUser_id');
    let data_user = await AsyncStorage.getItem('data_user');
    if (data_user !== null) {
      //console.log(JSON.parse(data_user));
      data_user = JSON.parse(data_user);
      // Aquí puedes utilizar los datos obtenidos
    }
    //console.log(token);
    console.log(data_user.id);
    console.log(token)
    const hotelUser_id = data_user.id;
    const isBefore = moment(arrival).isBefore(departure);
    if (isBefore) {
      fetch(`https://apphotel.iidtec.com/api/v1/reservation`, {


        method: 'POST',
        headers: {

          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },



        body: JSON.stringify({
          hotelUser_id,
          description,
          arrival,
          departure,
          amountPeople,
          hotelRoom_id,
          hotelReservationStatu_id,
          hotelStatusEntity_id: hotelStatusEntity_id,
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

        })
    }
    else {
      alert('La fecha de salida debe ser posterior a la fecha de llegada');
    };
  };


  const renderItem = ({ item }) => {
    return (


      <Image source={{ uri: item.image }} style={styles.image} />


    );
  };
  return (
    <ScrollView>
      <View>

        <ImageBackground source={image2} style={styles.image2} blurRadius={2}>
          <Text style={styles.text}>Reserva</Text>
          <View style={styles.container}>
            <Carousel
              data={images}
              renderItem={renderItem}
              sliderWidth={300}
              itemWidth={300}
              loop={true}
              autoplay={true}
              autoplayInterval={3000}
              lockScrollTimeoutDuration={500}

            />
          </View>
          <View style={styles.wrapperInput}>

            <TextInput
              placeholder="Descripción"
              //secureTextEntry={true}
              value={description}
              onChangeText={text => setDescription(text)}

            />
          </View>

          {CheckValidArrival ? (
            <Text style={styles.textFailed}>fecha inválida</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}

          <View style={styles.wrapperInput}>

            <TextInput
              placeholder="Fecha de Llegada"
              value={arrival}
              onChangeText={text => handleCheckFecha(text)}
            />
          </View>

          {CheckValidDeparture ? (
            <Text style={styles.textFailed}>fecha invalido</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <View style={styles.wrapperInput}>
            <TextInput
              placeholder="Fecha de Salida"
              value={departure}
              onChangeText={text => handleCheckDeparture(text)}
            />

          </View>
          <View style={styles.wrapperInput}>
            <TextInput
              placeholder="Personas"
              value={amountPeople}
              onChangeText={text => setAmountPeople(text)}
              keyboardType='numeric'
            />
          </View>


          {description == '' || arrival == '' || departure == '' || amountPeople == '' || CheckValidArrival || CheckValidDeparture == true ? (
            <TouchableOpacity style={styles.buttonDisable} onPress={handleReserva} >
              <Text style={styles.text1}>Reservar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonDisable}



              onPress={handleReserva}>
              <Text style={styles.text1}>Reservar</Text>
            </TouchableOpacity>

          )}
          <TouchableOpacity style={styles.buttonDisable} onPress={() => navigation.navigate('Home')} >
            <Text style={styles.text1}>Regresar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },

  image: {
    width: 300,
    height: 500,
    marginHorizontal: 10,
    borderRadius: 30,
    marginTop: 30



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
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'grey',
    marginTop: 5,
    flexDirection: 'column-reverse',
    paddingStart: 5,

  },
  container: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    top: -150,
  },
  text1: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'sans-serif-medium',
    left:-35
  },
  text: {
    start: 10,
    height: 200,
    color: 'white',
    fontWeight: '700',
    alignItems: 'center',
    paddingTop: 25,
    paddingStart: 20,
    marginTop: -200,
    fontSize: 35
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
    alignItems: 'baseline'


  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
  }
})


export default ReservaScreen;