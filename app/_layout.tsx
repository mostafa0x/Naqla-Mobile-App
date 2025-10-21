import { store } from "@/lib/store";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "transpartant" },
            }}
          />
          <StatusBar style="light" backgroundColor="black" />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
