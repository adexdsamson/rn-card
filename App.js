import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator, } from "react-navigation-shared-element";
import { CreditCardList } from "./CreditCardList";
import { CardDetails } from "./CardDetails";

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: false,
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: "transparent" },
          }}
          detachInactiveScreens={{}}
          mode="modal"
        >
          <Stack.Screen name="CreditCardList" component={CreditCardList} />
          <Stack.Screen
            name="Card"
            options={{
              presentation: 'transparentModal'
            }}
            component={CardDetails}
            sharedElements={(route) => {
              const { num, id, name } = route.params.card;
              return [num];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
