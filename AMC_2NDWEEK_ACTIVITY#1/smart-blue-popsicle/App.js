import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Jade");
  const bodyText = 'wew';

  const onPressTitle = () => {
    setTitleText("Jade Balbin" + 
                  '\n'+
                  '\n'+
                  '\n'+
                "20yr old" +
                '\n'+
                  '\n'+
                "3rd Year College"+ 
                '\n'+
                  '\n'+
                "IT Student in GRC"
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'brown'
  },
});

export default TextInANest;