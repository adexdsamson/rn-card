import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element/build/v4";

export const CreditCard = ({ style, num }) => {
  const navigation = useNavigation();
  const [opacity, setOpacity] = React.useState(1);

  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });

  return (
    <Pressable
      onPress={() => {
        setOpacity(0);
        navigation.navigate("Card", { card: { num } });
      }}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1, width: "85%" })}
    >
      <SharedElement id={num}>
        <LinearGradient
          colors={["#25CBFF", "#1F68EB", "rgba(83,0,218,0.58)"]}
          style={[styles.card, style, { backgroundColor: "green" }]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.cardHeader}>{num}</Text>

            <View style={styles.logoContainer}>
              <View
                style={[
                  styles.logoItem,
                  {
                    backgroundColor: "red",
                    right: -5,
                    zIndex: 10,
                  },
                ]}
              ></View>
              <View
                style={[
                  styles.logoItem,
                  {
                    backgroundColor: "yellow",
                  },
                ]}
              ></View>
            </View>
          </View>
        </LinearGradient>
      </SharedElement>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 10,
    // marginVertical: 5,.
  },
  logoContainer: { position: "relative", flexDirection: "row" },
  logoItem: {
    height: 18,
    width: 18,
    borderRadius: 10,
  },
  cardHeader: {
    color: "white",
    fontSize: 18,
  },
});
