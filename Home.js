import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';




export default class Home extends React.Component {
  render() {
    var mediaUrl = 'https://www.youtube.com/watch?v=FW06ZVj9JxY';
    return (
      <TouchableOpacity
        style={{
          marginTop: 200,
          alignSelf: 'center',
          alignContent:'center',
          justifyContent:'center',
          borderWidth: 2,
          borderRadius: 10,
          width: 200,
          height: 50,
          backgroundColor: 'lavender',
         
        }}
        onPress={()=>this.props.navigation.navigate('Video')}>
        <Text style={{alignSelf:'center'}}>Play Video</Text>
      </TouchableOpacity>
    );
  }
}
