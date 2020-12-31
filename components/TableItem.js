import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import Colors from '../design';

const TableItem = (props) => {

    const {onPress, title, icon} = props;
    return (
            <TouchableOpacity style={[styles.tableItem]} onPress={onPress}>
                {icon}
                <Text style={styles.text}>  {title}</Text>
            </TouchableOpacity>
    )
};

const styles = {
    tableItem : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:2,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:10,
        backgroundColor: Colors.white,
    },
    text: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: 'Assistant-Regular',
        textAlign: 'center',
    },
};

export default TableItem;