import "react-native-get-random-values";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SettingsContext } from "./src/state/context";
import useSettingsRepository from "./src/hooks/useSettings";

import TodoScreen from "./src/screens/Todo/TodoScreen";
import StatScreen from "./src/screens/StatScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import GroupScreen from "./src/screens/GroupScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [settings, dispatch] = useSettingsRepository();

  return (
    <SettingsContext.Provider
      value={{
        settings: settings,
        finishOnboarding: () => dispatch({key: "onboarding"}),
      }}
    >
      <NavigationContainer>
        {!settings.onboarding ? (
          <>
            <Stack.Navigator>
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            </Stack.Navigator>
          </>
        ) : (
          <>
            <Tab.Navigator
              initialRouteName="Todos"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  switch (route.name) {
                    case "Stats":
                      iconName = "md-stats";
                      break;
                    case "Groups":
                      iconName = "md-chatboxes";
                      break;
                    default:
                      iconName = "ios-checkbox";
                      break;
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Todos" component={TodoScreen} />
              <Tab.Screen name="Stats" component={StatScreen} />
              <Tab.Screen name="Groups" component={GroupScreen} />
            </Tab.Navigator>
          </>
        )}
      </NavigationContainer>
    </SettingsContext.Provider>
  );
}
