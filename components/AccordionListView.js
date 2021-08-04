import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {CommonCardView} from "../components";
import * as Colors from "../design/colors";

const AccordionListView = (props) => {
return (
      <ScrollView style={styles.view_style}>
        
        {props.items.map(({title, icon, text, phone, website, facebook, whatsappEnabled}) => {
                    return (
                    <CommonCardView
                        title={title}
                        icon={icon}
                        text={text}
                        phone={phone}
                        website={website}
                        facebook={facebook}
                        whatsappEnabled={whatsappEnabled}>
                    </CommonCardView>
                    );
                })}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  view_style: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.dark_purple,
    marginTop: 36,
  },
});
export default AccordionListView;