import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins' 

import theme from './src/theme'

import { Routes } from './src/routes'

import { Loading } from '@components/Loading'

export default function App() {

  const [fontsLoaded] = useFonts({ Poppins_400Regular })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        {fontsLoaded ? <Routes/> : <Loading/>}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}