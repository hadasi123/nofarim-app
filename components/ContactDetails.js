import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../design/colors";
import {PhoneIcon, FacebookLogo,WebsiteIcon} from "../assets"
import * as strings from "../strings";


const ContactDetails = (props)=> {

    const {phone, whatsapp, facebook, website} = props

    return (
    <View style={{flexDirection:"column"}}>

        {phone && <TouchableOpacity style={styles.base_style} >
            <PhoneIcon></PhoneIcon>
            <Text style = {styles.text }>{strings.dial}</Text>
        </TouchableOpacity>}

        {phone && <TouchableOpacity style={styles.base_style} >
            <PhoneIcon></PhoneIcon>
            <Text style = {styles.text }>{strings.send_sms}</Text>
        </TouchableOpacity>}

        {whatsapp && <TouchableOpacity style={styles.base_style} >
            <PhoneIcon></PhoneIcon>
            <Text style = {styles.text }>{strings.send_whatsapp_msg}</Text>
        </TouchableOpacity>}

        {facebook && <TouchableOpacity style={styles.base_style} >
            <FacebookLogo></FacebookLogo>
            <Text style = {styles.text }>{strings.go_to_facebook_page}</Text>
        </TouchableOpacity>}

        {website && <TouchableOpacity style={styles.base_style} >
            <WebsiteIcon></WebsiteIcon>
            <Text style = {styles.text }>{strings.go_to_website}</Text>
        </TouchableOpacity>}

    </View>
    );
}

const styles = StyleSheet.create({
    base_style: {
        flexDirection:"row-reverse",
        alignItems:"flex-end",
    },
    
    text: {
        textAlign:"right",
        color: Colors.black,
        fontSize: 16,
        fontFamily: "Assistant-Regular",
    }
  });

export default ContactDetails;