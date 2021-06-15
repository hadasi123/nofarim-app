import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as constants from '../constants';
import * as strings from '../strings';
import Colors from '../design/colors';
import BabysitterWhiteIcon from '../assets/babysitter_white.svg';
import BeautyWhiteIcon from '../assets/beauty_white.svg';
import FoodWhiteIcon from '../assets/food_white.svg';
import RepairsWhiteIcon from '../assets/repairs_white.svg';
import SportIcon from '../assets/sport_icon.svg';
import CommunityIcon from '../assets/community_icon.svg';
import SchoolIcon from '../assets/school_icon.svg';
import OthersIcon from '../assets/others_icon.svg';
import FoodTitleIcon from '../assets/food_title.svg';
import TableItem from './TableItem';

const ServicePicker = () => {
    return (

    <View style={styles.grid_style}>
        
        <View style={styles.row_style} pickerMode = {true}>
            <TableItem
                pickerMode = {true}
                title={strings.services_food}
                icon = {<FoodWhiteIcon></FoodWhiteIcon>}/>
            <TableItem
                pickerMode = {true}
                title={strings.services_beauty}
                icon = {<BeautyWhiteIcon></BeautyWhiteIcon>}
                />

            <TableItem
                pickerMode = {true}
                title={strings.services_childcare}
                icon = {<BabysitterWhiteIcon></BabysitterWhiteIcon>}
                 />
 
            <TableItem
                pickerMode = {true}
                title={strings.services_professionals}
                icon={<RepairsWhiteIcon></RepairsWhiteIcon>}
                 />

        </View>

        <View style={styles.row_style}>
            <TableItem
                    pickerMode = {true}
                    title={strings.services_sport}
                    icon = {<SportIcon></SportIcon>}
                     />

                <TableItem
                    pickerMode = {true}
                    title={strings.services_community}
                    icon = {<CommunityIcon></CommunityIcon>}
                     />

                <TableItem
                    pickerMode = {true}
                    title={strings.services_school}
                    icon = {<SchoolIcon></SchoolIcon>}
                     />

                <TableItem
                    pickerMode = {true}
                    title={strings.services_others}
                    icon={<OthersIcon></OthersIcon>}
                     />

        </View>
  </View>
)}

const styles = StyleSheet.create({
    grid_style : {
        flexDirection: 'column',
        margin:10,
    },
    row_style : {
        flexDirection: 'row-reverse',
        marginBottom:10,
    }
})

export default ServicePicker;