import React, {useState} from "react";
import { Text, View , TouchableOpacity} from "react-native";
import Colors from "../design/colors";
import * as strings from "../strings";
import Collapsible from 'react-native-collapsible';
import {WhatsappIcon, WebsiteIcon,FacebookIcon} from "../assets";
import {BasicWebView} from "../components";

const CommonCardView = (props) => {

  const { title, icon, description, phone, website, facebook, whatsappEnabled } = props;
  const [collapsed, setCollapsed] = useState(true)


  const onCollapsedHeaderPressed = () => {
    setCollapsed(!collapsed)
  }


  const onPhoneNumberPress = () => {

  }

  const onWebsiteLinkPress = () => {

  }

  const onFacebookPress = () => {

  }

  return (
    <View style={styles.base_style}>
        <TouchableOpacity onPress={onCollapsedHeaderPressed}>
            <View style={styles.header}>
                {icon}
                <Text style={styles.title}> {title}</Text>
            </View>
            <Text numberOfLines={collapsed? 3:0}>{description}</Text>
        </TouchableOpacity>

        
        <Collapsible collapsed={collapsed} >

            <Text style={{marginTop:16, marginBottom:16, fontFamily: "Assistant-Bold",fontSize: 16,}}>
                {strings.title_service_contact_details}
            </Text>

            {phone && (<TouchableOpacity style={styles.contact} onPress= {onPhoneNumberPress}>
                <WhatsappIcon style={{marginRight:2}}height="25" weight="25"></WhatsappIcon>
                <Text style={{paddingRight:6}}>{phone}</Text>
            </TouchableOpacity>)}

            {website && (<TouchableOpacity  style={styles.contact} onPress={onWebsiteLinkPress}>
                <WebsiteIcon style={{marginRight:2}} height="15" weight="15"></WebsiteIcon>
                <Text style={{paddingRight:6}}>{strings.go_to_website}</Text>
            </TouchableOpacity>)}

            {(<TouchableOpacity style={styles.contact}  onPress={onFacebookPress}>
                <FacebookIcon height="20" weight="20"></FacebookIcon>
                <Text>{strings.go_to_facebook_page}</Text>
            </TouchableOpacity>)}
            
        </Collapsible>
    </View>
  );
};

const styles = {
  base_style: {
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row-reverse",
    marginBottom: 8,
    alignItems: "center",
  },
  contact: {
    flexDirection: "row-reverse",
    marginBottom: 8,
    alignItems: "center",
    padding:2,
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: "Assistant-Bold",
  },

  text: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "Assistant-Regular",
  },
};

export default CommonCardView;