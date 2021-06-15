import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import Colors from '../design/colors';

const TableItem = (props) => {

    const {onPress, title, icon, pickerMode} = props;
    return (
            <TouchableOpacity

                style={[styles.table_item, pickerMode ? styles.picker_table_item : styles.regular_table_item]}
                onPress={onPress}>
                {icon}

                <Text
                    style={[styles.text, pickerMode ? styles.picker_mode_text : styles.regular_text]}> 
                    {title}
                </Text>

            </TouchableOpacity>
    )
};

const styles = {
    table_item : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:2,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:10,
    },
    picker_table_item : {
        borderColor:Colors.white,
        borderWidth:1,
    },
    regular_table_item : {
        backgroundColor: Colors.white,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Assistant-Regular',
        textAlign: 'center',
    },
    regular_text : {
        color: Colors.black,
    },
    picker_mode_text : {
        color: Colors.white,
    },
};

export default TableItem;