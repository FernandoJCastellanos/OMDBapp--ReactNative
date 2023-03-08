import { View, Text, TextInput } from "react-native";

const SearchBox = (props) => {
  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={props.value}
        onChange={(event) => props.setSearchValue(event.nativeEvent.text)}
      />
    </View>
  );
};

export default SearchBox;
