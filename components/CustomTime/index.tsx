import { Colors, Fonts } from "@/constants/theme";
import { useAudioContext } from "@/context/AuidoPlayerProvider";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { addTime } from "@/lib/store/GameSlice";
import cheackDisabledSaveBtn from "@/service/cheackDisabledSaveBtn";
import getTotalTime from "@/service/getTotalTime";
import { setTimes } from "@/service/Storage";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import SaveTimeBtn from "./Btn";
import CustomTime_InputName from "./InputName";
import CustomTime_InputTime from "./InputTime";

function CustomTime() {
  const dispatch = useAppDispatch();
  const { times } = useAppSelector((state) => state.GameReducer);
  const { playSound } = useAudioContext();
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
    playSound("click");
    dispatch(
      addTime({
        name: nameTime,
        secounds: getTotalTime(mTime, sTime),
        id: Date.now(),
      })
    );
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
        <CustomTime_InputName setNameTime={setNameTime} nameTime={nameTime} />
        <View style={styles.boxsContainer}>
          <CustomTime_InputTime
            value={mTime}
            type={1}
            handleChange={handleChange}
          />

          <Text style={styles.spector}>:</Text>
          <CustomTime_InputTime
            value={sTime}
            type={2}
            handleChange={handleChange}
          />
        </View>
        <SaveTimeBtn isDis={isDis} handleAdd={handleAdd} nameTime={nameTime} />
      </View>
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

export default memo(CustomTime);
