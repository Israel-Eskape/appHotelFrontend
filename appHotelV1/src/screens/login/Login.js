import React, { useState } from 'react'
import { View, Te } from 'react-native'
import { user_login } from '../../api/user_api'



export default function Login() {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    user_login({
        email:email,
        password: password
        
    }
        

    )
  return (


    <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
    
      
     <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={seePassword}
          onChangeText={text => setPassword(text)}
        />
      
    </View>
    </View>
    
  )
}
