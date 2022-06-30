import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  const toggle = true;

  // if toggle return true
  return <View style={toggle ? style.containerLight : style.container} />;
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
