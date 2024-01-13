import React from 'react';
import { Text, View } from 'react-native';

import WebView from 'react-native-webview';
export default class Video extends React.Component {
  render() {
    return (
      <WebView
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        source={{ uri: 'https://www.youtube.com/watch?v=FW06ZVj9JxY' }}
      />
    );
  }
}
