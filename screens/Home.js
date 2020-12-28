import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableItem from '../components/TableItem';
import * as constants from '../constants';
import * as strings from '../strings';

const Home = (props) => {

  const { navigation } = props

    return (
      <View style={styles.grid_style}>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_events}
                onPress={() => navigation.navigate(constants.screen_events)}/>
            <TableItem
                title={strings.menu_professionals}
                onPress={() => navigation.navigate(constants.screen_main_professionals)}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_updates}
                onPress={() => navigation.navigate(constants.screen_updates)}/>
            <TableItem
                title={strings.menu_settings}
                onPress={() => navigation.navigate(constants.screen_settings)}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_report}
                onPress={() => navigation.navigate(constants.screen_hazard_report)}/>
            <TableItem
                title={strings.menu_contactUs}
                onPress={() => navigation.navigate(constants.screen_contact_us)}/>
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