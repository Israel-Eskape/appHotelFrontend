import axios from 'axios';
import React, { createContext } from 'react'
import {baseURL} from '../api/ApiManager'
export const AuthContext = createContext();

export const  AuthProvider = ({children})=>  {
    const login = (email, password) => {
        setIsLoading(true);
    
        axios
          .post(`${baseURL}login`, {
            email,
            password,
          })
          .then(res => {
           // let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo')
            //setIsLoading(false);
          })
          .catch(e => {
            console.log(`login error ${e}`);
            setIsLoading(false);
          });
      };
    

    const register =(name, email, password)=>{
        axios.post( `${baseURL}register`,{
            name, email, password
        }).then(res=>{
            let userInfo = res.data;
            console.log(userInfo);

        }).catch(e=>{
            console.log(`register error ${e}`);
        })
    }
  return (
    <AuthContext.Provider value= {{login,register}}>{children} </AuthContext.Provider>
  )
}
