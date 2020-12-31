import React from 'react';
import {Text, View,TouchableWithoutFeedback } from 'react-native';
import Colors from '../design';
import ViewMoreText from 'react-native-view-more-text';

const UpdateCard = (props) => {

    const {title, icon, date, text} = props;

    const renderViewMore = (onPress) => {
        return(
        <TouchableWithoutFeedback onPress={onPress}>
          <Text style={styles.expand_collapse}>הרחבה</Text>
        </TouchableWithoutFeedback >
        )
    }
    
      const  renderViewLess = (onPress) => {
          return(
            <TouchableWithoutFeedback  onPress={onPress}>
            <Text style={styles.expand_collapse} >צמצום</Text>
            </TouchableWithoutFeedback >
          )
      }

    return (
        <View style={styles.base_style} >
            {title && <View style= {styles.header}>
                {icon}
                <Text style={styles.title}>  {title}</Text>
                <Text style={styles.date}>  {date}</Text>
            </View>}
            <ViewMoreText
                numberOfLines={3}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                textStyle={{textAlign: 'right'}}>
                <Text>{text}</Text>
          </ViewMoreText>
        </View>
    )
};

const styles = {
    base_style : {
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: Colors.white
    },
    header: {
        flexDirection:"row-reverse",
        marginBottom:8,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    title: {
        color: Colors.black,
        fontSize: 20,
        fontFamily: "Assistant-Regular",
    },
    date: {
        color: Colors.black,
        fontSize: 16,
        marginTop:4,
        fontFamily: "Assistant-Regular",
    },
    text: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: "Assistant-Regular",
    },
    expand_collapse:{
        color: Colors.black,
        fontSize: 16,
        fontFamily: "Assistant-Bold",
    }
};

export default UpdateCard;