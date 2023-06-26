import { Button, Dimensions, StyleSheet, Text } from "react-native";
import { CreditCard } from "./CreditCard";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint, useVector } from "react-native-redash";
import { PanGestureHandler } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

const { height } = Dimensions.get("window");

export const CardDetails = ({ route, navigation }) => {
  const isGestureActive = useSharedValue(false);
  const translation = useVector();
  const { card } = route.params;

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => (isGestureActive.value = true),
    onActive: ({ translationX, translationY }) => {
      translation.y.value = translationY;
    },
    onEnd: ({ translationY, velocityY }) => {
      const snapBack =
        snapPoint(translationY, velocityY, [0, height]) === height;

      if (snapBack) {
        runOnJS(navigation.goBack)();
      } else {
        isGestureActive.value = false;
        translation.y.value = withSpring(0);
      }
    },
  });

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      translation.y.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP
    );
    return {
      flex: 1,
      transform: [
        { translateY: translation.y.value * scale },
        { scale },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[style]}>
        <SharedElement
          id={card.num}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <CreditCard num={card.num} style={{}} />
          {/* <Button title="Select" onPress={() => navigation.navigate('c', { card })} /> */}
        </SharedElement>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
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
