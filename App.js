/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View>
        <Text style={styles.teste}>Teste (fonte ubuntu)</Text>
      </View>
      <View>
        <Text style={styles.teste2}>Teste (fonte normal)</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  teste: {
    fontFamily: 'Ubuntu',
    fontSize: 40,
  },
  teste2: {
    fontSize: 40,
  },
});

export default App;
