import React from 'react';
import {Text,TouchableOpacity, Image} from 'react-native';
import Colors from '../design';

const LoginButton = (props) => {

    const {onPress, title, icon, borderStyle} = props;
    return (
            <TouchableOpacity style={[styles.button_view, {...borderStyle}]} onPress={onPress}>
                <Image style={styles.icon} source={icon} />
                <Text style={styles.text}>  {title}</Text>
            </TouchableOpacity>
    )
};

const styles = {
    button_view : {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width:170,
    height:90,
    backgroundColor: Colors.white,
    },
    text: {
        color: Colors.black,
        fontSize: 16,
        textAlign: 'center',
    },
    icon: {
        width:30,
        height:30,
    },
};

export default LoginButton;