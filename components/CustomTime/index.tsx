import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CustomTime() {
  const [mTime, setMTime] = useState("");
  const [sTime, setSTime] = useState("");
  const [nameTime, setNameTime] = useState("");

  const handleAutoNameTime = useCallback((m: string, s: string) => {
    const min = m.length <= 0 ? "0" : m;
    const sec = s.length <= 0 ? "0" : s;

    setNameTime(`${min}m : ${sec}s`);
  }, []);

  useEffect(() => {
    handleAutoNameTime(mTime, sTime);
    return () => {};
  }, [mTime, sTime]);

  return (
    <View>
      <View style={styles.allBoxs}>
        <TextInput
          maxLength={50}
          placeholder={"Time Name..."}
          style={styles.inputName}
          placeholderTextColor={styles.input.color}
          contextMenuHidden
          value={nameTime}
          onChangeText={setNameTime}
        />
        <View style={styles.boxsContainer}>
          <TextInput
            keyboardType="numeric"
            maxLength={2}
            placeholder={"00"}
            style={styles.input}
            placeholderTextColor={styles.input.color}
            textAlign="center"
            textAlignVertical="center"
            contextMenuHidden
            value={mTime}
            onChangeText={setMTime}
          />
          <Text style={styles.spector}>:</Text>
          <TextInput
            keyboardType="numeric"
            maxLength={2}
            placeholder={"00"}
            style={styles.input}
            placeholderTextColor={styles.input.color}
            textAlign="center"
            textAlignVertical="center"
            contextMenuHidden
            value={sTime}
            onChangeText={setSTime}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  allBoxs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: rh(20),
  },
  inputName: {
    backgroundColor: "#252525ff",
    width: rw(120),
    height: rh(42),
    borderRadius: rw(5),
    fontFamily: Fonts.TajawalMedium,
    fontSize: rf(16),
    color: Colors.primaryText,
  },
  input: {
    backgroundColor: "#252525ff",
    width: rw(30),
    height: rh(42),
    borderRadius: rw(5),
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(16),
    color: Colors.primaryText,
  },
  boxsContainer: {
    flexDirection: "row",
    gap: rw(3),
    alignItems: "center",
  },
  spector: {
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(28),
    color: Colors.primaryText,
  },
});
