import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableItem from '../components/TableItem';
import * as constants from '../constants';
import * as strings from '../strings';
export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.grid_style}>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_events}
                onPress={() => this.props.navigation.navigate(constants.screen_events)}/>
            <TableItem
                title={strings.menu_professionals}
                onPress={() => this.props.navigation.navigate(constants.screen_main_professionals)}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_updates}
                onPress={() => this.props.navigation.navigate(constants.screen_updates)}/>
            <TableItem
                title={strings.menu_settings}
                onPress={() => this.props.navigation.navigate(constants.screen_settings)}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.menu_report}
                onPress={() => this.props.navigation.navigate(constants.screen_hazard_report)}/>
            <TableItem
                title={strings.menu_contactUs}
                onPress={() => this.props.navigation.navigate(constants.screen_contact_us)}/>
        </View>
      </View>
    );
  }
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