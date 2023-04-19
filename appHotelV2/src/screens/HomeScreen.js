import React from 'react';
import {View, StyleSheet, ScrollView, Button,Text, ImageBackground} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/Home/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/Home/TripsList';
import { useNavigation } from '@react-navigation/native';
//import Drawers from '../navigations/DrawerNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { color } from 'react-native-reanimated';
import Icon from '../components/shared/Icon';

const image = { uri: "https://i.pinimg.com/564x/84/27/91/842791ecb3b567ec1eff6995f05a34f2.jpg" };
const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (

    
    <View style={styles.container}>
       <ImageBackground source={image} style={styles.image} blurRadius={2}>
     
      <MainHeader title="Hoteles App" />
      
      <ScreenHeader mainTitle="Hoteles 5 estrellas" secondTitle="Excelentes Opciones" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Mejores alojamientos"
        />
        <TouchableOpacity style={styles.styleB}>
        <TouchableOpacity style={styles.buttonDisable}  onPress={() => navigation.navigate('HotelsScreen')}>
          <Text style={styles.text}>Ver más</Text>
        </TouchableOpacity>
{/** 
        <Button
        color='gray'
        title="Ver más"
        onPress={() => navigation.navigate('HotelsScreen')}
        />
        */}
        </TouchableOpacity>
      
        <View style={ {paddingLeft:30, paddingHorizontal:20}}>
    

    </View>
 
        <TripsList list={PLACES} />
        
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  styleB: {
  
    marginTop:-50,
    fontWeight: 5,
    padding:50,
    marginEnd:175,
    fontSize: 2,
   
  },
  styleB1: {
  
    marginTop:-50,
    fontWeight: 5,
    padding:20,
    marginEnd:175,
    fontSize: 2,

  },


  text: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'sans-serif-medium',
    left:20,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity:1,
    borderRadius: 25,
    padding:10,
    paddingVertical:12, 
    borderTopColor:'RGBA( 0, 0, 255, 1 )'
 
  },

  buttonDisable: {
    padding: 1,
    alignContent: 'flex-start',
    height: 25,
    borderRadius: 15,
    backgroundColor:'rgba(105, 213, 255, 1)',
  
 
    
    
  },
});

export default HomeScreen;
