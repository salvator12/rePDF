import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AnimatedSplashOverlay />
          <Stack screenOptions={{headerShown: false}}>
              <Stack.Screen name="index" />
              <Stack.Screen name="AppNavigator/SelectedFilesRoute" />
              <Stack.Screen name="AppNavigator/PDFPreviewRoute" />
              <Stack.Screen name="AppNavigator/MergePDFProcessingRoute" />
          </Stack>
        </ThemeProvider>
    </GestureHandlerRootView>
  );
}
