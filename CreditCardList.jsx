import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { CreditCard } from "./CreditCard";

let cards = [
  { num: "012847383" },
  { num: "012807333" },
  { num: "0128007335" },
  { num: "012847339" },
  { num: "012847339" },
  { num: "012847339" },
  { num: "012847339" },
];

const defaultTranslateY = 150;
const { height, width } = Dimensions.get("screen");

export const CreditCardList = () => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <View
        style={{
          // height: height / 2,
          width: "100%",
          alignItems: "center",
          // overflow: "hidden",
        }}
      >
        {cards.map((card, index) => (
          <CreditCard
            key={index}
            num={card.num}
            style={{
              transform: [
                { rotateX: "-45deg" },
                { translateY: index === 0 ? 0 : -(defaultTranslateY * index) },
              ],
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  card: {
    height: 250,
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
  modalContainer: {
    position: "absolute",
    backgroundColor: "rgba(225,225,225,0.8)",
    width: "100%",
    height: "100%",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
