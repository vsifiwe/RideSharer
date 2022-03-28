import {View, StyleSheet, Button} from 'react-native';
import React from 'react';

const Tapper = props => {
  return (
    <View style={styles.button_container}>
      <Button onPress={props.onPress} title={props.title} color={props.color} />
    </View>
  );
};

export default Tapper;

const styles = StyleSheet.create({
  button_container: {
    margin: 10,
  },
});
