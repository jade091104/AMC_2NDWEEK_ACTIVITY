import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const YourApp = () => {
  return (
    <ScrollView style={{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{textAlign:'center'}}>Edifer Jade Balbin</Text>
      <View
>
        <Text style={{textAlign:'center'}}>IT-302</Text>
        <Image
          source={{
            uri:'https://th.bing.com/th/id/OIP._JmxRlJYsTy3RBbpQDs3BwHaHC?w=808&h=768&rs=1&pid=ImgDetMain'
          }}
          style={{width: 200, 
                  height:200,
                  }}
          />
      </View>
      <TextInput
        style={{
          color: 'lightblue',
          textAlign: 'center',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="YOU CAN TYPE IN ME"
        />

      </ScrollView>
  );
};

export default YourApp;