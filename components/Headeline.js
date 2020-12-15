import React from 'react';
import {View,Text, Image} from 'react-native';

const Headline = (props) => {

    const {title, description} = props;
    
    return (
        <View style={styles.businessItem} >
            <Image style={styles.icon} source={require('../assets/favicon.png')} />
            <View>
                <Text style={styles.title}>  {title}</Text>
                <Text style={styles.description}>  {description}</Text>
            </View>
        </View>
    )
};

const styles = {
    businessItem : {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent:'flex-start',
        padding:20,
        backgroundColor: "skyblue",
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: { 
        color: 'grey',
        fontSize: 16,
    },
    icon: {
        height:30,
        width:30,
    },
};

export default Headline;