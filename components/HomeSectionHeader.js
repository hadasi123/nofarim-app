import React from 'react';
import {Text,TouchableOpacity, View} from 'react-native';
import MoreIcon from '../assets/more_arrow.svg';
import Colors from '../design';
import * as strings from '../strings'

const HomeSectionHeader = (props) => {

    const {onPress, title, showMore} = props;
    return (
        <TouchableOpacity style={[styles.tableItem]} onPress={onPress}>
            <Text  style={styles.title}> {title}</Text>
            {showMore && 
            <View style={styles.show_more}>
                <Text style={styles.sub_title} > {strings.main_see_more}</Text>
                <MoreIcon></MoreIcon>
            </View>}        
        </TouchableOpacity>
    )
};

const styles = {
    tableItem : {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent:'space-between',       
        margin:10,
        flexDirection:'row-reverse'
        
    },
    title: {
        color: Colors.white,
        fontSize: 30,
        fontFamily: "Assistant-Bold",

    },
    sub_title: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: "Assistant-Regular",
        marginLeft:10,
        marginRight:10
    },
    show_more: {
        flexDirection:'row-reverse',
        alignItems:'center'
    }
};

export default HomeSectionHeader;