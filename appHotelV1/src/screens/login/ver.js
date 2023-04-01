import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Table from '../login/table';

const Ver = () => {
  const [datos, setDatos] = useState([]);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthDay] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidName, setCheckValidName] = useState(false);
  const [checkValidDate,  setCheckValidDate]= useState(false);
  const [CheckValidPassword, setCheckValidPassword]= useState(false);
  const [CheckValidBirthday, setCheckValidBirthday] = useState(false);
  //const [hotelRole_id, setHotelRole_id] = useState('');
  //const [hotelStatusEntity_id, setHotelStatusEntity_id] = useState('');
  const hotelRole_id=1;
  const hotelStatusEntity_id=1;

  useEffect(() => {
    fetch('https://apphotel.iidtec.com/api/v1/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Aquí puedes enviar los datos que necesites en la petición POST
        name,
        firstName,
        lastName,
        birthday,
        address,
        phone,
        email,
        password,
        hotelRole_id,
        hotelStatusEntity_id
      })
    })
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Tabla de datos:</Text>
      <Table datos={datos} />
    </View>
  );
};

export default Ver;
