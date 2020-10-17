import { StatusBar } from "expo-status-bar";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./src/routes";
import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

import { navigationRef } from "./src/utils/navigation";

enableScreens();

export default function App() {
  const [loadedFonts] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!loadedFonts) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <AppRoutes />
    </NavigationContainer>
  );
}
