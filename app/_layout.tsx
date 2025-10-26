import { Colors } from "@/constants/theme";
import AllProvidersContext from "@/context/AllProvidersContext";
import { store } from "@/lib/store";
import { useFonts } from "expo-font";
import { useKeepAwake } from "expo-keep-awake";
import * as NavigationBar from "expo-navigation-bar";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-native-paper";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useKeepAwake();
  const [isLoadFonts] = useFonts({
    TajawalBlack: require("@/assets/fonts/Tajawal-Black.ttf"),
    TajawalBold: require("@/assets/fonts/Tajawal-Bold.ttf"),
    TajawalMedium: require("@/assets/fonts/Tajawal-Medium.ttf"),
    TajawalLight: require("@/assets/fonts/Tajawal-Light.ttf"),
  });

  useEffect(() => {
    const hiddenNavigationBar = async () => {
      await NavigationBar.setVisibilityAsync("hidden");
    };
    hiddenNavigationBar();
    return () => {};
  }, []);

  if (!isLoadFonts) {
    return null;
  }
  return (
    <ReduxProvider store={store}>
      <AllProvidersContext>
        <Provider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bg }}>
              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                  contentStyle: { backgroundColor: Colors.bg },
                }}
              />
            </SafeAreaView>
          </SafeAreaProvider>
        </Provider>
      </AllProvidersContext>
    </ReduxProvider>
  );
}
