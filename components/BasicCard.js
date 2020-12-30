import React from 'react';
import {Text,TouchableOpacity, View} from 'react-native';
import Colors from '../design';

const BasicCard = (props) => {

    const {title, icon, date, text} = props;
    return (
        <TouchableOpacity style={styles.base_style} >
            <View style= {styles.header}>
                {icon}
                <Text style={styles.title}>  {title}</Text>
                <Text style={styles.date}>  {date}</Text>
            </View>
            <Text style={styles.text}>  {text}</Text>
        </TouchableOpacity>
    )
};

const styles = {
    base_style : {
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: 20,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius:15,
    },
    header: {
        flexDirection: 'row',
    },
    title: {
        color: Colors.black,
        fontSize: 20,
        fontFamily: "Assistant-Regular",
    },
    date: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: "Assistant-Regular",
    },
    text: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: "Assistant-Regular",
    }
};

export default BasicCard;