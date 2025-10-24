import CustomTime from "@/components/CustomTime";
import CloseIcon from "@/components/icons/CloseIcon";
import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useStore";
import { rf, rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Portal } from "react-native-paper";
function SelectTIme({
  isSelectTime,
  closeSelectTIme,
}: {
  isSelectTime: boolean;
  closeSelectTIme: () => void;
}) {
  const { players, player1Index, player2Index } = useAppSelector(
    (state) => state.AppReducer
  );
  return (
    <Portal>
      {isSelectTime && (
        <BlurView
          style={styles.blur}
          intensity={500}
          tint="systemChromeMaterialDark"
        />
      )}
      <Modal animationType="slide" transparent visible={isSelectTime}>
        <View style={styles.contant}>
          <View style={styles.box}>
            <View style={styles.appbarContainer}>
              <Text style={styles.mainLabel}>Custom Time</Text>
              <TouchableOpacity
                onPress={closeSelectTIme}
                style={styles.closeBtn}
              >
                <CloseIcon width={rw(32)} height={rh(32)} color={"#fff"} />
              </TouchableOpacity>
              <View></View>
            </View>
            <CustomTime />
          </View>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  contant: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: rw(250),
    height: rh(600),
    borderRadius: rw(20),
    backgroundColor: Colors.bannaer,
    paddingLeft: rw(9),
    paddingRight: rw(9),
    paddingVertical: rh(20),
  },
  closeBtn: {
    paddingTop: rh(10),
  },
  blur: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainLabel: {
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(22),
    color: Colors.primaryText,
  },
});

export default memo(SelectTIme);
