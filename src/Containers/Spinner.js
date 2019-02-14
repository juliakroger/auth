import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  return (
    <View style={styles.spinner} >
      <ActivityIndicator size={props.size}/>
    </View>
  );
};

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  }
}

export default Spinner;
