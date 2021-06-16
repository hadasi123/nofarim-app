import React from "react";
import { TextInput, View } from "react-native";
import Colors from "../design/colors";

const InputCard = (props) => {
  const [text, onChangeText] = React.useState(null);

  const { maxCharacters, hint, inputStyle, icon } = props;
  return (
    <View style={[styles.base, { ...inputStyle }]}>
      <TextInput
        style={styles.text}
        placeholderTextColor={Colors.light_purple}
        multiline={true}
        maxLength={maxCharacters}
        onChangeText={onChangeText}
        value={text}
        placeholder={hint}
      ></TextInput>
    </View>
  );
};

const styles = {
  base: {
    backgroundColor: Colors.white,
    flexDirection: "column",
    alignContent: "flex-start",
    marginRight: 14,
    marginLeft: 14,
    marginBottom: 20,
    marginTop: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  text: {
    color: Colors.light_purple,
    fontSize: 16,
    fontFamily: "Assistant-Regular",
  },
};

export default InputCard;
