import React, { useState,useCallback } from "react";
import { TouchableOpacity ,StyleSheet, Image, View, Text} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontSizes from "../design/textSizes";
import Colors from "../design/colors";
import * as strings from "../strings";

const PhotosPicker = () => {

    const [response, setResponse] = useState(null);

    const onButtonPress = useCallback((type, options) => {
      if (type === 'capture') {
        launchCamera(options, setResponse);
      } else {
        launchImageLibrary(options, setResponse);
      }
    }, []);

    return (

        <View>
                 {actions.map(({title, type, options}) => {
                    return (
                    <TouchableOpacity
                        onPress={() => onButtonPress(type, options)}>
                        <Text style={styles.subtext_style}>{title}</Text>
                    </TouchableOpacity>
                    );
                })}

            {response?.assets &&
            response?.assets.map(({uri}) => (
                <View key={uri} >
                <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={{width: 200, height: 200}}
                    source={{uri: uri}}
                />
                </View>
            ))}
        </View>
    )
}

const actions = [
    {
      title: strings.sub_service_choose_camera,
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'photo',
        cameraType:'front',
      },
    },
    {
      title: strings.sub_service_choose_gallery,
      type: 'library',
      options: {
        maxHeight: 500,
        maxWidth: 500,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    },
  ];

  const styles = StyleSheet.create({
    
    subtext_style: {
      color: Colors.white,
      fontSize: FontSizes.caption,
      paddingRight: 16,
      marginBottom: 16,
    },
    
  });

export default PhotosPicker;