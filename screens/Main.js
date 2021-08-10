import React, { useEffect, } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import {HomeSectionHeader, ServicesItemsGrid, UpdateCard, WeatherInfo, Greeting} from "../components";
import * as constants from "../constants";
import * as strings from "../strings";
import Colors from "../design/colors";
import {ProfileIcon, AlertIcon} from "../assets";
import {getAllUpdates} from "../redux/actions";
import {connect} from 'react-redux';

const Main = ( {services,
                updates,
                market_items,
                lost_found_items,
                weather,
                getUpdates,
                navigation}) =>

{

  useEffect(()=> {
    changeNavigationBarColor(Colors.black);
    getUpdates();
  },[]);


  return (
    <View style={styles.base_style}>
      <View style={styles.header}>
        <ProfileIcon
          onPress={() =>
            navigation.navigate(constants.screen_add_service)
          }
        ></ProfileIcon>
        <Text style={styles.title_style}>{strings.main_title}</Text>
      </View>

      <ScrollView style={styles.content_style}>

        <View style={styles.section_style}>
          <Greeting></Greeting>
          <WeatherInfo></WeatherInfo>
        </View>

        <View style={styles.section_style}>
          <HomeSectionHeader
            add={true}
            title={strings.main_services_title}
            onPress={() => navigation.navigate(constants.screen_add_service)}
          />
          <ServicesItemsGrid navigation={navigation}></ServicesItemsGrid>
        </View>

        <View style={styles.section_style}>
          <HomeSectionHeader
            showMore={true}
            title={strings.main_updates_title}
            onPress={() => navigation.navigate(constants.screen_updates)}
          />
          <View style={styles.card_style}>
            <UpdateCard
              title={strings.main_updates_subtitle}
              icon={<AlertIcon></AlertIcon>}
              date={updates&&updates[0]&&updates[0].date}
              text={updates&&updates[0]&&updates[0].content}
            />
          </View>
        </View>

        <View style={styles.section_style}>
          <HomeSectionHeader
            showMore={true}
            title={strings.main_giveaway_title}
            onPress={() =>
              navigation.navigate(constants.screen_giveaways)
            }
          />
          <View style={styles.card_style}>
            <UpdateCard
              title="כסא בר למכירה "
              icon={<AlertIcon></AlertIcon>}
              date="8/8/2020"
              text={strings.marketplace_place_holder}
            />
          </View>
        </View>

        <View style={styles.section_style}>
          <HomeSectionHeader
            showMore={true}
            title={strings.main_lost_and_founds}
            onPress={() =>
              navigation.navigate(constants.screen_lost_and_founds)
            }
          />
          <View style={styles.card_style}>
            <UpdateCard
              title="אבד כלב בשם במבי "
              icon={<AlertIcon></AlertIcon>}
              date="8/8/2020"
              text={strings.lost_place_holder}
            />
          </View>
        </View>

        <View style={styles.bottom_section_style}>
          <Text
            style={styles.bottom_text_style}
            onPress={() => navigation.navigate(constants.screen_web,{source:constants.privacy_policy_url})}
          >
            {strings.main_privacy_policy}
          </Text>
          <View style={styles.seperator}></View>
          <Text
            style={styles.bottom_text_style}
            onPress={() => navigation.navigate(constants.screen_info)}
          >
            {strings.main_residents_info}{" "}
          </Text>
          <View style={styles.seperator}></View>
          <Text
            style={styles.bottom_text_style}
            onPress={() => navigation.navigate(constants.screen_about)}
          >
            {strings.main_about_us}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  base_style: {
    flex: 1,
    backgroundColor: Colors.dark_purple,
  },
  header: {
    flexDirection: "row-reverse",
    marginBottom: 24,
    alignItems: "center",
  },
  title_style: {
    fontSize: 30,
    fontFamily: "Assistant-Bold",
    color: Colors.white,
    marginRight: 10,
  },
  content_style: {
    flex: 1,
    flexDirection: "column",
  },
  section_style: {
    backgroundColor: Colors.light_purple,
    flexDirection: "column",
    marginBottom: 16,
  },
  card_style: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 0,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
  bottom_section_style: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  bottom_text_style: {
    fontFamily: "Assistant-Bold",
    color: Colors.white,
    fontSize: 12,
  },
  seperator: {
    borderLeftColor: Colors.white,
    borderLeftWidth: 1,
    marginHorizontal: 10,
  },
});

const mapStateToProps = (state, props)=>({
  services:state.services,
  updates: state.updates,
  market_items: state.market_items,
  lost_found_items: state.lost_found_items,
  weather:state.weather,
  navigation: props.navigation})

const mapDispatchToProps={
  getUpdates:getAllUpdates,
  }
export default connect(mapStateToProps,mapDispatchToProps)(Main);