import React from 'react';
import {Text,TouchableOpacity, Image} from 'react-native';

const TableItem = (props) => {

    const {onPress, title} = props;
    return (
            <TouchableOpacity style={[styles.tableItem]} onPress={onPress}>
                <Image style={styles.icon} source={require('../assets/favicon.png')} />
                <Text style={styles.text}>  {title}</Text>
            </TouchableOpacity>
    )
};

const styles = {
    tableItem : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft:10,
        marginRight:10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "pink",
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
    icon: {
        width:50,
        height:50,
    },
};

export default TableItem;