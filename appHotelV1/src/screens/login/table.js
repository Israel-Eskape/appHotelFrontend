import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Table = ({ datos }) => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      {Object.keys(item).map((key, index) => (
        <Text key={index} style={{ flex: 1 }}>
          {item[key]}
        </Text>
      ))}
    </View>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        {Object.keys(datos[0]).map((key, index) => (
          <Text key={index} style={{ flex: 1 }}>
            {key}
          </Text>
        ))}
      </View>
      <FlatList
        data={datos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Table;
