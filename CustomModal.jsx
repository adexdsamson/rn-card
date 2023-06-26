import { Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

export const CustomModal = ({ children, isOpen, close }) => {

  if (!isOpen) return;

  return (    
    <Animated.View>
      <Pressable onPress={close} style={style.container}>
        {children}
      </Pressable>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(225,225,225,0.8)",
    width: "100%",
    height: "100%",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
