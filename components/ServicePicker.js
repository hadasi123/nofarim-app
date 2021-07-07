import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as strings from "../strings";
import {BabysitterWhiteIcon,
        BeautyWhiteIcon,
        FoodWhiteIcon,
        RepairsWhiteIcon,
        SportIcon,
        SchoolIcon,
        OthersIcon,
        CommunityIcon} from "../assets";

import TableItem from "./TableItem";
import * as constants from "../constants";

const ServicePicker = (props) => {

  const [lastItemPicked, setLastItemPicked] = useState(null);
  
  const onItemPicked = (lastItemPicked) => {
    setLastItemPicked(lastItemPicked);
    props.parentCallback(props.input_key, constants.service_types[lastItemPicked]);
  };

  return (
    <View style={styles.grid_style}>
      <View style={styles.row_style}>
        <TableItem
          onPress={() => onItemPicked(0)}
          pickerMode={lastItemPicked === 0 ? false : true}
          title={strings.services_food}
          icon={<FoodWhiteIcon></FoodWhiteIcon>}
        />
        <TableItem
          onPress={() => onItemPicked(1)}
          pickerMode={lastItemPicked === 1 ? false : true}
          title={strings.services_beauty}
          icon={<BeautyWhiteIcon></BeautyWhiteIcon>}
        />
        <TableItem
          onPress={() => onItemPicked(2)}
          pickerMode={lastItemPicked === 2 ? false : true}
          title={strings.services_childcare}
          icon={<BabysitterWhiteIcon></BabysitterWhiteIcon>}
        />
        <TableItem
          onPress={() => onItemPicked(3)}
          pickerMode={lastItemPicked === 3 ? false : true}
          title={strings.services_professionals}
          icon={<RepairsWhiteIcon></RepairsWhiteIcon>}
        />
      </View>

      <View style={styles.row_style}>
        <TableItem
          onPress={() => onItemPicked(4)}
          pickerMode={lastItemPicked === 4 ? false : true}
          title={strings.services_sport}
          icon={<SportIcon></SportIcon>}
        />
        <TableItem
          onPress={() => onItemPicked(5)}
          pickerMode={lastItemPicked === 5 ? false : true}
          title={strings.services_community}
          icon={<CommunityIcon></CommunityIcon>}
        />
        <TableItem
          onPress={() => onItemPicked(6)}
          pickerMode={lastItemPicked === 6 ? false : true}
          title={strings.services_school}
          icon={<SchoolIcon></SchoolIcon>}
        />
        <TableItem
          onPress={() => onItemPicked(7)}
          pickerMode={lastItemPicked === 7 ? false : true}
          title={strings.services_others}
          icon={<OthersIcon></OthersIcon>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid_style: {
    flexDirection: "column",
    margin: 10,
  },
  row_style: {
    flexDirection: "row-reverse",
    marginBottom: 10,
  },
});

export default ServicePicker;