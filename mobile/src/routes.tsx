import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";
import OrphanageData from "./pages/OrphanageData";
import SelectMapPosition from "./pages/SelectMapPosition";
import { Feather } from "@expo/vector-icons";
import { goBack } from "./utils/navigation";

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrphanagesMap" component={OrphanagesMap} />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Orfanato",
          headerTitleStyle: { fontSize: 16 },
          headerBackTitleVisible: false,
          headerHideBackButton: true,
          headerLeft: () => (
            <BorderlessButton onPress={() => goBack()}>
              <Feather name="arrow-left" color="#15bcd6" size={25} />
            </BorderlessButton>
          ),
        }}
        name="OrphanagesDetails"
        component={OrphanageDetails}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Informe os dados",
          headerTitleStyle: { fontSize: 16 },
          headerBackTitleVisible: false,
          headerHideBackButton: true,
          headerLeft: () => (
            <BorderlessButton onPress={() => goBack()}>
              <Feather name="arrow-left" color="#15bcd6" size={25} />
            </BorderlessButton>
          ),
          headerRight: () => (
            <BorderlessButton onPress={() => goBack()}>
              <Feather name="x" color="#FF669D" size={25} />
            </BorderlessButton>
          ),
        }}
        name="OrphanageData"
        component={OrphanageData}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Selecione no mapa",
          headerTitleStyle: { fontSize: 16 },
          headerBackTitleVisible: false,
          headerHideBackButton: true,
          headerLeft: () => (
            <BorderlessButton onPress={() => goBack()}>
              <Feather name="arrow-left" color="#15bcd6" size={25} />
            </BorderlessButton>
          ),
          headerRight: () => (
            <BorderlessButton onPress={() => goBack()}>
              <Feather name="x" color="#FF669D" size={25} />
            </BorderlessButton>
          ),
        }}
        name="SelectMapPosition"
        component={SelectMapPosition}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
