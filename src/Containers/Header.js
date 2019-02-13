import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.NavText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor:'#348686',
    height: 70,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.5,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
}

export default Header;
