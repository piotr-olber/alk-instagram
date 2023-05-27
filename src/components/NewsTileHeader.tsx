import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type NewsTileHeaderProps = {
  userName: string;
};

export const NewsTileHeader = ({ userName }: NewsTileHeaderProps) => {
  return (
    <View style={styles.tileHeader}>
      <View style={styles.titleHeaderLeftContainer}>
        <View style={styles.tileHeaderAvatar}>
          <Ionicons name="person-circle-outline" size={36} color="white" />
        </View>
        <Text style={styles.tileHeaderText}>{userName}</Text>
      </View>
      <Pressable onPress={() => console.log("Press ...")}>
        <Text style={styles.tileHeaderText}>...</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleHeaderLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tileHeaderText: {
    color: "white",
    paddingLeft: 15,
    fontSize: 16,
  },
  tileHeaderAvatar: {},
});
