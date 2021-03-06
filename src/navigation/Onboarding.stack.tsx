import React, { FC, useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import OnboardingCountrySettingsScreen from "../screens/OnboardingCountrySettingsScreen";
import OnboardingCategoriesSettingsScreen from "../screens/OnboardingCategoriesSettingsScreen";
import OnboardingSplashScreen from "../screens/OnboardingSplashScreen";
import { OnboardingStackParams } from "../@types/navigation";

interface OnboardingStackProps {}

const Stack = createStackNavigator<OnboardingStackParams>();

export const OnboardingStack: FC<OnboardingStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="OnboardingSplashScreen"
        component={OnboardingSplashScreen}
      />
      <Stack.Screen
        name="OnboardingCountrySettingsScreen"
        component={OnboardingCountrySettingsScreen}
      />
      <Stack.Screen
        name="OnboardingCategoriesSettingsScreen"
        component={OnboardingCategoriesSettingsScreen}
      />
    </Stack.Navigator>
  );
};
