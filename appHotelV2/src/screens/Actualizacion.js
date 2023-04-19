import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const UpdateRecord = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const token = await AsyncStorage.getItem('token');
        let data_user = await AsyncStorage.getItem('data_user');
        if (data_user !== null) {
          //console.log(JSON.parse(data_user));
          data_user = JSON.parse(data_user);
          // Aquí puedes utilizar los datos obtenidos
        }
        //console.log(token);
        console.log(data_user.id);
        console.log(token)

      try {
        const response = await fetch(`https://apphotel.iidtec.com/api/v1/user/6`,{
            headers: {
                Authorization: `Bearer ${token}` ,
               
              },

        });
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data ? (
        <Text>{data}</Text>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
};

export default UpdateRecord;
