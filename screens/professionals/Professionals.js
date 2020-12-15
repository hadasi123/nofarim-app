import React from 'react';
import {View, StyleSheet} from 'react-native';
import TableItem from '../../components/TableItem';
import * as constants from '../../constants';
import * as strings from '../../strings';

export default class Professionals extends React.Component {

  static navigationOptions = {
    title: 'Proffessionals',
  };

  render() {
    return (
      <View style={styles.grid_style}>

        <View style={styles.row_style}>
            <TableItem
                title={strings.sub_beauty}
                onPress={() => this.props.navigation.navigate(constants.screen_list_pros, {category:strings.sub_beauty})}/>
            <TableItem
                title={strings.sub_sweets}
                onPress={() => this.props.navigation.navigate(constants.screen_list_pros, {category:strings.sub_sweets})}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.sub_professionals}
                onPress={() => this.props.navigation.navigate(constants.screen_list_professionals, {category:strings.sub_professionals})}/>
            <TableItem
                title={strings.sub_food}
                onPress={() => this.props.navigation.navigate(constants.screen_list_pros, {category:strings.sub_food})}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title={strings.sub_childcare}
                onPress={() => this.props.navigation.navigate(constants.screen_list_pros, {category:strings.sub_childcare})}/>
            <TableItem
                title={strings.sub_others}
                onPress={() => this.props.navigation.navigate(constants.screen_list_pros, {category:strings.sub_others})}/>
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
    marginTop:30,
    marginBottom:30,
  },
  row_style: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-between",
    margin: 10,
  },
});