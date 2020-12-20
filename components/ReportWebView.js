import React from 'react';
import { WebView } from 'react-native-webview';
import { Text, StyleSheet } from 'react-native';
import * as strings from '../strings';

const renderLoading = () => {
    return (
      <Text style={styles.container}>{strings.report_loading}</Text>
    )
}

const ReportWebView = () => {
    return (
      <WebView
        source={{uri:'https://tiktak-qa.metropolinet.co.il/#!form/201732361158450/15'}}
        renderLoading={renderLoading}
        startInLoadingState/>
    )
}

const styles = StyleSheet.create({
    container: {
    flex:1,
      color:'blue',
      fontSize:25,
      alignSelf:'center',
      alignContent:'center',
      alignItems:'center'
    }
})

export default ReportWebView