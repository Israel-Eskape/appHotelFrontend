import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
const image = { uri: "https://i.pinimg.com/564x/a7/f1/ac/a7f1acde1a6dbef9c953f042ec4aa0d0.jpg" };
export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 1000);
  });

  const handleGetToken = async () => {
    const token = await AsyncStorage.getItem('token');
    ///const hotelUser_id = await AsyncStorage.getItem('hotelUser_id');
    let data_user = await AsyncStorage.getItem('data_user');
    if (data_user !== null) {
      //console.log(JSON.parse(data_user));
      data_user = JSON.parse(data_user);
      // Aquí puedes utilizar los datos obtenidos
    }
    //console.log(token);
    console.log(data_user.name);
    console.log(token)
    const nombre = data_user.name;
    const dataToken = await AsyncStorage.getItem('AccessToken');
    if (!dataToken) {
      navigation.replace('Login');
    } else {
      navigation.replace('Login');
    }
  };

  return (
   
    <View style={styles.container}>
       <ImageBackground source={image} style={styles.image} blurRadius={2}>
      <Text style={styles.text}>Hasta Pronto </Text>
      
      
      </ImageBackground>
    </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
   
    borderRadius: 30
  },
  text: {
    fontWeight: '800',
    fontSize: 30,
    color: 'white',
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
});
