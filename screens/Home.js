import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import TableItem from '../components/TableItem';

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.grid_style}>

        <View style={styles.row_style}>
            <TableItem
                title="לוח אירועים"
                onPress={() => this.props.navigation.navigate('לוח אירועים')}/>
            <TableItem
                title="בעלי מקצוע"
                onPress={() => this.props.navigation.navigate('בעלי מקצוע')}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title="עדכוני מִנְהֶלֶת"
                onPress={() => this.props.navigation.navigate('עדכוני מינהלת השכונה')}/>
            <TableItem
                title="הגדרות"
                onPress={() => this.props.navigation.navigate('הגדרות')}/>
        </View>

        <View style={styles.row_style}>
            <TableItem
                title="דיווח על מפגע"
                onPress={() => this.props.navigation.navigate('דיווח על מפגע')}/>
            <TableItem
                title="צור קשר"
                onPress={() => this.props.navigation.navigate('צור קשר')}/>
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