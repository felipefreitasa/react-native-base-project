import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@screens/Home"

type AppRoutesTypeProps = {
  home: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesTypeProps>

export function AppRoutes() {

  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypeProps>()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Screen
        name='home'
        component={Home}
      />
    </Navigator>
  )
}