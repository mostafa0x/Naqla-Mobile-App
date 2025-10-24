import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { addTime } from "@/lib/store/GameSlice";
import cheackDisabledSaveBtn from "@/service/cheackDisabledSaveBtn";
import getTotalTime from "@/service/getTotalTime";
import { setTimes } from "@/service/Storage";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";

function CustomTime() {
  const dispatch = useAppDispatch();
  const { times } = useAppSelector((state) => state.GameReducer);
  const [mTime, setMTime] = useState("");
  const [sTime, setSTime] = useState("");
  const [nameTime, setNameTime] = useState("");
  const [isDis, setIsDis] = useState(false);
  const handleAutoNameTime = useCallback((m: string, s: string) => {
    const min = m.length <= 0 ? "0" : m;
    const sec = s.length <= 0 ? "0" : s;

    setNameTime(`${min.padStart(2, "0")}m : ${sec.padStart(2, "0")}s`);
  }, []);

  const handleChange = useCallback((text: string, type: 1 | 2) => {
    const onlyNumbers = text.replace(/[^0-9]/g, "");

    const num = parseInt(onlyNumbers, 10);

    if (isNaN(num)) {
      type === 1 ? setMTime("") : setSTime("");
    } else if (num > 59) {
      type === 1 ? setMTime("59") : setSTime("59");
    } else {
      type === 1 ? setMTime(onlyNumbers) : setSTime(onlyNumbers);
    }
  }, []);
  const handleAdd = useCallback(() => {
    dispatch(addTime({ name: nameTime, secounds: getTotalTime(mTime, sTime) }));
    setMTime("");
    setSTime("");
    setNameTime("");
    Keyboard.dismiss();
  }, [nameTime, mTime, sTime]);

  useEffect(() => {
    setTimes(times);

    return () => {};
  }, [times]);

  useEffect(() => {
    handleAutoNameTime(mTime, sTime);
    setIsDis(cheackDisabledSaveBtn(mTime, sTime));
    return () => {};
  }, [mTime, sTime]);

  return (
    <View style={styles.container}>
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
            placeholder="00"
            style={styles.input}
            placeholderTextColor={styles.input.color}
            textAlign="center"
            textAlignVertical="center"
            contextMenuHidden
            value={mTime}
            onChangeText={(text) => handleChange(text, 1)}
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
            onChangeText={(text) => handleChange(text, 2)}
          />
        </View>
      </View>
      <Button
        onPress={handleAdd}
        disabled={isDis}
        labelStyle={styles.labelBtn}
        style={[styles.btn, !isDis && nameTime.length > 0 && styles.active]}
      >
        Save
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: rh(25),
  },
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
  btn: {
    backgroundColor: Colors.placeholder,
    width: rw(100),
    alignSelf: "center",
  },
  active: {
    backgroundColor: Colors.startBtn,
  },
  labelBtn: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(18),
    color: Colors.primaryText,
  },
});

export default memo(CustomTime);
