import CustomTime from "@/components/CustomTime";
import CloseIcon from "@/components/icons/CloseIcon";
import TimeList from "@/components/TimeList";
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
  const { times } = useAppSelector((state) => state.GameReducer);

  return (
    <Portal>
      {isSelectTime && (
        <BlurView
          style={styles.blur}
          intensity={500}
          tint="systemChromeMaterialDark"
        />
      )}
      <Modal
        animationType="slide"
        transparent
        visible={isSelectTime}
        onRequestClose={closeSelectTIme}
      >
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
            </View>
            <View style={styles.cutsom}>
              <CustomTime />
            </View>
            <View style={styles.list}>
              <TimeList />
            </View>
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
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  appbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    width: rw(280),
    height: rh(650),
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
  cutsom: {
    marginTop: rh(15),
  },
  list: {
    marginTop: rh(50),
  },
});

export default memo(SelectTIme);
