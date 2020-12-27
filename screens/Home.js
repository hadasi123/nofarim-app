import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableItem from '../components/TableItem';
import * as constants from '../constants';
import * as strings from '../strings';

const Home = (props) => {
    return (
      <View style={styles.grid_style}>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_events}
                onPress={() => props.navigation.navigate(constants.screen_events)}/>
            <TableItem
                title={strings.menu_professionals}
                onPress={() => props.navigation.navigate(constants.screen_main_professionals)}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_updates}
                onPress={() => props.navigation.navigate(constants.screen_updates)}/>
            <TableItem
                title={strings.menu_settings}
                onPress={() => props.navigation.navigate(constants.screen_settings)}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_report}
                onPress={() => props.navigation.navigate(constants.screen_hazard_report)}/>
            <TableItem
                title={strings.menu_contactUs}
                onPress={() => props.navigation.navigate(constants.screen_contact_us)}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  grid_style: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    marginBottom:30,
    marginStart:10,
    marginEnd:10,
  },
  row_style: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom:10,
  },
});

export default Home;