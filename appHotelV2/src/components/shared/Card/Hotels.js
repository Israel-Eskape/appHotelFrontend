import React from 'react';
import {StyleSheet} from 'react-native';
//import HotelsButton from '././hotels';

const CardHotelsIcon = ({style, active, onPress}) => {
  return (
    <HotelsButton
      style={[styles.icon, style]}
      active={active}
      onPress={onPress}
     
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 20,
    right: 16,
    zIndex: 10,
  },
});

export default CardHotelsIcon;
