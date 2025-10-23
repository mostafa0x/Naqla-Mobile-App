import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
export default function Ellipses({ type }: { type: 1 | 2 }) {
  const ellipsesImg = {
    1: require("@/assets/Ellipses/Ellipse1.png"),
    2: require("@/assets/Ellipses/Ellipse2.png"),
  };
  return (
    <View style={[styles.container, type === 2 && styles.container2]}>
      <Image
        cachePolicy={"memory-disk"}
        style={styles.img}
        source={ellipsesImg[type]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: rh(-100),
  },
  container2: {
    left: 0,
    top: rh(200),
  },
  img: {
    width: rw(380),
    height: rh(844),
  },
});
