import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as constants from '../constants';
import * as strings from '../strings';
import Colors from '../design/colors';
import BabysitterIcon from '../assets/babysitter_icon.svg';
import BeautyIcon from '../assets/beauty_icon.svg';
import FoodIcon from '../assets/food_icon.svg';
import RepairsIcon from '../assets/repairs_icon.svg';
import SportIcon from '../assets/sport_icon.svg';
import CommunityIcon from '../assets/community_icon.svg';
import SchoolIcon from '../assets/school_icon.svg';
import OthersIcon from '../assets/others_icon.svg';
import FoodTitleIcon from '../assets/food_title.svg';
import TableItem from './TableItem';

const ServicesItemsGrid = (props) => {
    return (

    <View style={styles.grid_style}>
        
        <View style={styles.row_style}>
            <TableItem
                title={strings.services_food}
                icon = {<FoodIcon></FoodIcon>}
                onPress={() => props.navigation.navigate(
                    constants.screen_list_pros,
                    {category:strings.services_food,
                    listIcon:<FoodIcon></FoodIcon>,
                    titleIcon:<FoodTitleIcon></FoodTitleIcon>})}/>
            <TableItem
                title={strings.services_beauty}
                icon = {<BeautyIcon></BeautyIcon>}
                onPress={() => props.navigation.navigate(
                    constants.screen_list_pros,
                    {category:strings.services_beauty,
                    listIcon:<BeautyIcon></BeautyIcon>,
                    })}/>
            <TableItem
                title={strings.services_childcare}
                icon = {<BabysitterIcon></BabysitterIcon>}
                onPress={() => props.navigation.navigate(
                    constants.screen_list_pros,
                    {category:strings.services_childcare,
                        listIcon:<BabysitterIcon></BabysitterIcon>,})}/>  
            <TableItem
                title={strings.services_professionals}
                icon={<RepairsIcon></RepairsIcon>}
                onPress={() => props.navigation.navigate(
                    constants.screen_list_pros,
                    {category:strings.services_professionals,
                        listIcon:<RepairsIcon></RepairsIcon>,})}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                    title={strings.services_sport}
                    icon = {<SportIcon></SportIcon>}
                    onPress={() => props.navigation.navigate(
                        constants.screen_list_pros,
                        {category:strings.services_sport,
                            listIcon:<SportIcon></SportIcon>,})}/>
                <TableItem
                    title={strings.services_community}
                    icon = {<CommunityIcon></CommunityIcon>}
                    onPress={() => props.navigation.navigate(
                        constants.screen_list_pros,
                        {category:strings.services_community,
                            listIcon:<CommunityIcon></CommunityIcon>,})}/>
                <TableItem
                    title={strings.services_school}
                    icon = {<SchoolIcon></SchoolIcon>}
                    onPress={() => props.navigation.navigate(
                        constants.screen_list_pros,
                        {category:strings.services_school,
                            listIcon:<SchoolIcon></SchoolIcon>,})}/>  
                <TableItem
                    title={strings.services_others}
                    icon={<OthersIcon></OthersIcon>}
                    onPress={() => props.navigation.navigate(
                        constants.screen_list_pros,
                        {category:strings.services_others,
                            listIcon:<OthersIcon></OthersIcon>,})}/>
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
        flexDirection: 'row-reverse',
        marginBottom:10,
    }
})

export default ServicesItemsGrid;