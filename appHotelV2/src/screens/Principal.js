import React from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/Home/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/Home/TripsList';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import Tabs from '../components/shared/Tabs';
const PrincipalScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <MainHeader title="Hoteles App" />
      <Drawers/>
      <ScreenHeader mainTitle="Hoteles 5 estrellas" secondTitle="Excelentes Opciones" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Mejores alojamientos"
        />
        <TouchableOpacity style={styles.styleB}>
        <Button
        color='gray'
        title="Ver más"
        onPress={() => navigation.navigate('Hotels',{screen:'HomeScreen'})}
        />
        </TouchableOpacity>
        <TripsList list={PLACES} />
        
      </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  styleB: {
  
    marginTop:-50,
    fontWeight: 5,
    padding:50,
    marginEnd:175,
    fontSize: 2,
   


  }
});

export default PrincipalScreen;
