import React from "react";
import { TextInput, View } from "react-native";
import Colors from "../design/colors";

const InputCard = (props) => {
  const [text, onChangeText] = React.useState(props.text);

  const { maxCharacters, hint, inputStyle, parentCallback, input_key } = props;
  return (
    <View style={[styles.base, { ...inputStyle }]}>
      <TextInput
        style={styles.text}
        placeholderTextColor={Colors.light_purple}
        onEndEditing={() => text !== "" && parentCallback(input_key, text)}
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
    marginHorizontal: 14,
    marginTop: 5,
    marginBottom:20,
    paddingRight: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  text: {
    color: Colors.light_purple,
    fontSize: 16,
    fontFamily: "Assistant-Regular",
  },
};

export default InputCard;
