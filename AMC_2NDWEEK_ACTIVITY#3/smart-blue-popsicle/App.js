import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <Text style={styles.baseText}>
        I am Edifer 
        <Text style={styles.innerText}> Balbin </Text>
      </Text>

      <Text style={styles.basesText}>
        3rd Year College at 
        <Text style={styles.grc}> GRC</Text>
      </Text>

      <Text style={styles.wowText}>
        My hobby 
        <Text style={styles.games}> is Computer Games</Text>
      </Text>

      <Text style={styles.live}>
        I live at 
        <Text style={styles.brgy}> brgy. 81 cal. City</Text>
      </Text>


    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'brown',
    fontFamily: 'cancun',
  },
  innerText: {
    color: 'red',
    fontSize: '25px'
  },
  grc: {
    color: 'violet',
    fontWeight: 'bold',
    fontFamily: 'cancun' 
  },
  basesText: {
    fontWeight: 'bold',
    color: 'darkblue',
    fontFamily: 'cancun',
  },
  wowText: {
    color: 'cyan',
    fontFamily: 'calibri',
    fontWeight: 'bold'
  },
  games: {
    color: "darkgreen",
  },

  brgy:{
    color: 'purple',
    fontStyle: 'decorative',
    fontSize: '25px'
  }

});

export default BoldAndBeautiful;