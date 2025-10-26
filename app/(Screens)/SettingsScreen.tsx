import Appbar from "@/components/Appbar";
import CustomButton from "@/components/CustomButton";
import Ellipses from "@/components/Ellipses";
import { Colors, Fonts } from "@/constants/theme";
import { useAudioContext } from "@/context/AuidoPlayerProvider";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const { playSound } = useAudioContext();
  return (
    <>
      <Ellipses type={1} />
      <Ellipses type={2} />
      <View style={styles.appBar}>
        <Appbar title="Settings" from="setting" playSound={playSound} />
      </View>
      <View style={styles.container}>
        <CustomButton label={"Cache cleaning"} type={6} playSound={playSound} />

        <View style={styles.oxContainer}>
          <Image
            style={styles.oxImg}
            source={require("@/assets/images/ox.png")}
          />
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:ox.dev.team@gmail.com")}
          >
            <Text style={styles.labelOx}>ox.dev.team@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(19),
    paddingTop: rh(55),
    alignItems: "center",
  },
  appBar: {
    paddingHorizontal: rw(19),
    paddingTop: rh(55),
  },
  oxContainer: {
    alignItems: "center",
    marginTop: rh(200),
  },
  oxImg: {
    width: rw(254),
    height: rh(254),
  },
  labelOx: {
    fontFamily: Fonts.TajawalBold,
    color: Colors.primaryText,
    fontSize: rf(22),
    textDecorationLine: "underline",
  },
});
