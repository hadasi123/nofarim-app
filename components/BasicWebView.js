import React from 'react';
import { WebView } from 'react-native-webview';
import { Text, StyleSheet } from 'react-native';
import * as strings from '../strings';
import Colors from '../design/colors';

const renderLoading = () => {
    return (
      <Text style={styles.container}>{strings.report_loading}</Text>
    )
}

const BasicWebView = (props) => {
    return (
      <WebView
        source={props.source}
        renderLoading={renderLoading}
        startInLoadingState/>
    )
}

const styles = StyleSheet.create({
    container: {
    flex:1,
      color:Colors.dark_purple,
      fontFamily:'Assistant-Bold',
      fontSize:25,
      alignSelf:'center',
      alignContent:'center',
      alignItems:'center'
    }
})

export default BasicWebView