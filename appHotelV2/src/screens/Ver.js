import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from '../components/shared/Icon';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, sizes } from '../constants/theme';
//import Carousel from 'react-native-snap-carousel';

const image = { uri: "https://i.pinimg.com/564x/10/0e/89/100e892df47694634ad1704d12f1f2b9.jpg" };
const Ver = () => {
  const [reservations, setReservations] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [description, setDescription] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [amountPeople, setAmountPeople] = useState('');
  const [Editreservations, setEditReservations] = useState([]);
  const [images, setImages] = useState([
    { image: "https://i.pinimg.com/564x/63/ab/16/63ab16ff049a67d4481e3d628c57ff66.jpg" },
    { image: "https://i.pinimg.com/564x/8e/6f/1a/8e6f1a029de8d44db84ed0ed0e33df15.jpg" },
    { image: "https://i.pinimg.com/564x/a3/d5/6d/a3d56d2c36642d198477349c3341a140.jpg" },
  ]);
  const fetchReservations = async () => {
    const token1 = await AsyncStorage.getItem('token');
    let data_user = await AsyncStorage.getItem('data_user');
    if (data_user !== null) {
      //console.log(JSON.parse(data_user));
      data_user = JSON.parse(data_user);
      // Aquí puedes utilizar los datos obtenidos
    }
    //console.log(token);
    console.log(data_user.id);
    const User_id = data_user.id;
    //console.log(data_user.name);
    const response = await fetch(`https://apphotel.iidtec.com/api/v1/userReservation/${User_id}`, {
      headers: {
        Authorization: `Bearer ${token1}`
      }
    });

    const data = await response.json();
    setReservations(data);
    console.log(data);
  };

  useEffect(() => {
    fetchReservations();
  }, []);
  
 
  const handleEditReservation = async (id) => {
    const token1 = await AsyncStorage.getItem('token');
    let data_user = await AsyncStorage.getItem('data_user');
    if (data_user !== null) {
      //console.log(JSON.parse(data_user));
      data_user = JSON.parse(data_user);
      // Aquí puedes utilizar los datos obtenidos
    }
    //console.log(token);
    console.log(data_user.id);
    const User_id = data_user.id;
    
    // Update the reservation with the provided ID
    await fetch(`https://apphotel.iidtec.com/api/v1/update-reservation/${User_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token1}`
      },
      body: JSON.stringify({
        description,
        arrival,
        departure,
        amountPeople
      })
      
    })


    // Clear the input fields and stop editing
   
   
  
    setReservations(newReservations);
    setDescription('');
    setArrival('');
    setDeparture('');
    setAmountPeople('');
    setEditingId(null);
    console.log(departure)
   

    // Refresh the reservations list
   // fetchReservations();
  
  const newReservations = reservations.map((reservation) =>
      reservation.id === id
        ? {
            ...reservation,
            description,
            arrival,
            departure,
            amountPeople
          }
        : reservation
        
    );

    setReservations(newReservations);
    setDescription('');
    setArrival('');
    setDeparture('');
    setAmountPeople('');
    setEditingId(null);
    console.log(departure)
    
  }


  const renderItem = ({ item }) => {
    // Check if the item is being edited
    const isEditing = item.id === editingId;

    return (
      <ScrollView>
      <View style={styles.container}>
     
        <View style={{ flex: 1 }}>
        
          </View>
          <Text style={styles.title}>Editar Reserva</Text>
          <View style={styles.container}>
       
          <Text style={{ fontWeight: 'bold' }} >{item.description}</Text>
          <Text>{`Llegada: ${item.arrival}`}</Text>
          <Text>{`Salida: ${item.departure}`}</Text>
          <Text>{`Numero de personas: ${item.amountPeople}`}</Text>
        </View>
        <TouchableOpacity onPress={() => setEditingId(item.id)}  style={styles.buttonDisable}>
        <Text >    Editar Reserva</Text>
        </TouchableOpacity>
        {isEditing && (
          <TouchableOpacity onPress={() => handleEditReservation(item.id)} style={styles.buttonDisable}>
         
            <Text >Guardar cambios</Text>
            
          </TouchableOpacity>
        )}
        
      </View>
      </ScrollView>
    );
  };

  return (
  
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} blurRadius={2}>
      
      
      <FlatList
        data={reservations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {editingId && (
          <ScrollView>
        <View style={styles.wrapperInput}>
          <TextInput style={styles.text}
            placeholder="Descripción"
            value={description}
            onChangeText={setDescription}
          />
          </View>
          <View style={styles.wrapperInput}>
          <TextInput  style={styles.text}
            placeholder="Fecha de llegada"
            value={arrival}
            onChangeText={setArrival}
          />
          </View>
            <View style={styles.wrapperInput}>
          <TextInput style={styles.text}
            placeholder="Salida"
            value={departure}
            onChangeText={setDeparture}
          />
          </View>
          <View style={styles.wrapperInput}>
          <TextInput style={styles.text}
            placeholder="Número de personas"
            value={amountPeople}
            onChangeText={setAmountPeople}
          />
          </View>
       
        </ScrollView>
      )}
      </ImageBackground>
    </View>
    
  );
};
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
      borderTopColor: 'gray',
      fontFamily: 'sans-serif-medium',
      backgroundColor:'RGBA(  139, 0, 139, 1 )'
  
  
    },
  
    
    input: {
      padding: 10,
      width: '100%',
      fontFamily: 'sans-serif-medium',
      backgroundColor:'rgba( 139, 0, 139, 1  )',
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
      backgroundColor:'rgba(255, 0, 0, 1)',
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
      borderColor:'grey'
    
  
  
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

export default Ver;