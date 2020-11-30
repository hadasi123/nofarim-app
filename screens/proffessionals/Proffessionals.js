import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import TableItem from '../../components/TableItem';


export default class Proffessionals extends React.Component {


  static navigationOptions = {
    title: 'Proffessionals',
  };

  render() {
    return (
      <View style={styles.grid_style}>

        <View style={styles.row_style}>
            <TableItem
                title="מקצועות היופי"
                onPress={() => this.props.navigation.navigate('רשימת בעלי מקצוע', {category:'מקצועות היופי'})}/>
            <TableItem
                title="עוגות ומתוקים"
                onPress={() => this.props.navigation.navigate('רשימת בעלי מקצוע', {category:'עוגות ומתוקים'})}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title="בעלי מקצוע"
                onPress={() => this.props.navigation.navigate('רשימת בעלי מקצוע', {category:'בעלי מקצוע'})}/>
            <TableItem
                title="אוכל ביתי"
                onPress={() => this.props.navigation.navigate('רשימת בעלי מקצוע', {category:'אוכל ביתי'})}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title="טיפול בילדים"
                onPress={() => this.props.navigation.navigate('רשימת בעלי מקצוע', {category:'טיפול בילדים'})}/>
            <TableItem
                title="אטרקציות וכל היתר"
                onPress={() => this.props.navigation.navigate('רשימת בעלי מקצוע', {category:'אטרקציות וכל היתר'})}/>
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