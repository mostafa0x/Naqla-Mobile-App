import { Colors } from "@/constants/theme";
import AllProvidersContext from "@/context/AllProvidersContext";
import { store } from "@/lib/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-native-paper";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";
export default function RootLayout() {
  const [isLoadFonts] = useFonts({
    TajawalBlack: require("@/assets/fonts/Tajawal-Black.ttf"),
    TajawalBold: require("@/assets/fonts/Tajawal-Bold.ttf"),
    TajawalMedium: require("@/assets/fonts/Tajawal-Medium.ttf"),
  });

  if (!isLoadFonts) {
    return null;
  }
  return (
    <ReduxProvider store={store}>
      <AllProvidersContext>
        <Provider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: { backgroundColor: Colors.bg },
                }}
              />
              <StatusBar style="light" backgroundColor="black" />
            </SafeAreaView>
          </SafeAreaProvider>
        </Provider>
      </AllProvidersContext>
    </ReduxProvider>
  );
}
