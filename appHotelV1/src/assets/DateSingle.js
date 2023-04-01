import { NavigationContainer } from "@react-navigation/native"
import React, { useState } from "react"
import { StyleSheet, View, Button, Text } from 'react-native'
import { TextInput } from "react-native-gesture-handler"
import DatePicker from 'react-native-neat-date-picker'
import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio"


const DateSingle = () => {

  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false)
  

  const [date, setDate] = useState('');
  

  const openDatePickerSingle = () => setShowDatePickerSingle(true)
 

  const onCancelSingle = () => {
    // You should close the modal in here
    setShowDatePickerSingle(false)
  }

  const onConfirmSingle = (output) => {
    // You should close the modal in here
    setShowDatePickerSingle(false)

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output)
    
  }

  return (
    <View  >
     
     
      {/*Single Date */}
      <Button title={'Birthday'} onPress={openDatePickerSingle}
      color='gray'
       />
      <DatePicker style={styles.container}
        
        isVisible={showDatePickerSingle}
        mode={'single'}
        onCancel={onCancelSingle}
        onConfirm={onConfirmSingle}
        colorOptions='gray'
        resizable={true}
        alignItems={true}
        
        

      />
      <TextInput>{date}</TextInput>

    
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:0.5,
    backgroundColor: '#FFF8F0',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  }
})
export default DateSingle;

