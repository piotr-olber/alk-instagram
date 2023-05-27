import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const NewsHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Instagram</Text>
      <View style={styles.headerIcons}>
        <Pressable onPress={() => console.log("Press plus")}>
          <AntDesign
            name="plussquareo"
            size={24}
            color="white"
            style={styles.headerIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Press hart")}>
          <AntDesign
            name="hearto"
            size={24}
            color="white"
            style={styles.headerIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Press arrow")}>
          <Entypo
            name="direction"
            size={24}
            color="white"
            style={styles.headerIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "lobsterTwoItalic",
    fontWeight: "100",
    fontSize: 28,
    color: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 14,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 14,
    backgroundColor: "black",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});
