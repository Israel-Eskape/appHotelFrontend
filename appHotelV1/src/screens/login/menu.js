import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Touchable, View,TouchableOpacity, Button , StyleSheet,Text} from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler'

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity>
            <Text style={styles.text}> MENU </Text>
            <Button title='Reservar' onPress={()=> navigation.navigate('Reserva')}>Reservar </Button>
            <Button title='Editar perfil'  onPress={()=> navigation.navigate ('Editar')}> Editar perfil</Button>
            <Button title='ver mis reservas' onPress={()=>navigation.navigate('Ver')}>Todas mis reservaciones </Button>
            <Button title='Cerrar sesion'   onPress={()=> navigation.navigate('Home')}>Cerrar Sesion </Button>
        </TouchableOpacity>
      
    </View>
  )




}

const styles = StyleSheet.create({

text: {
    color: 'white',
    fontWeight: '700',
}})
export default Menu;
