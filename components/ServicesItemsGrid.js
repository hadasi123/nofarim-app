import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as constants from '../constants';
import * as strings from '../strings';
import Colors from '../design';
import BabysitterIcon from '../assets/babysitter_icon.svg';
import BeautyIcon from '../assets/beauty_icon.svg';
import FoodIcon from '../assets/food_icon.svg';
import RepairsIcon from '../assets/repairs_icon.svg';
import TableItem from './TableItem';

const ServicesItemsGrid = (props) => {
    return (

    <View style={styles.grid_style}>

        <View style={styles.row_style}>
            <TableItem
                title={strings.services_food}
                icon = {<FoodIcon></FoodIcon>}
                onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_food})}/>
            <TableItem
                title={strings.services_beauty}
                icon = {<BeautyIcon></BeautyIcon>}
                onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_beauty})}/>
            <TableItem
                title={strings.services_childcare}
                icon = {<BabysitterIcon></BabysitterIcon>}
                onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_childcare})}/>  
            <TableItem
                title={strings.services_professionals}
                icon={<RepairsIcon></RepairsIcon>}
                onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_professionals})}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                    title={strings.services_food}
                    icon = {<FoodIcon></FoodIcon>}
                    onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_food})}/>
                <TableItem
                    title={strings.services_beauty}
                    icon = {<BeautyIcon></BeautyIcon>}
                    onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_beauty})}/>
                <TableItem
                    title={strings.services_childcare}
                    icon = {<BabysitterIcon></BabysitterIcon>}
                    onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_childcare})}/>  
                <TableItem
                    title={strings.services_professionals}
                    icon={<RepairsIcon></RepairsIcon>}
                    onPress={() => props.navigation.navigate(constants.screen_list_pros, {category:strings.services_professionals})}/>
            </View>
  </View>
)}

const styles = StyleSheet.create({
    grid_style : {
        flex: 1,
        flexDirection: 'column',
        margin:10,
        backgroundColor: Colors.light_purple,
    },
    row_style : {
        flexDirection: 'row',
        marginBottom:10,
    }
})

export default ServicesItemsGrid;