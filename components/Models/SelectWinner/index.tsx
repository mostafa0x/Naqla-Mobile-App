import CustomButton from "@/components/CustomButton";
import CloseIcon from "@/components/icons/CloseIcon";
import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useStore";
import { rf, rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Portal } from "react-native-paper";

function SelectWinner({
  isSelectWin,
  closeSelectModel,
}: {
  isSelectWin: boolean;
  closeSelectModel: () => void;
}) {
  const { players, player1Index, player2Index } = useAppSelector(
    (state) => state.AppReducer
  );
  return (
    <Portal>
      {isSelectWin && (
        <BlurView
          style={styles.blur}
          intensity={500}
          tint="systemChromeMaterialDark"
        />
      )}
      <Modal animationType="slide" transparent visible={isSelectWin}>
        <View style={styles.contant}>
          <View style={styles.box}>
            <Text style={styles.mainLabel}>Choose the winner ?</Text>
            <View style={styles.btnsContainer}>
              <CustomButton
                color={"#fff"}
                colorTxt="#000"
                label={players[player1Index].name}
                type={3}
                closeSelectModel={closeSelectModel}
              />

              <CustomButton
                label="Draw"
                type={4}
                closeSelectModel={closeSelectModel}
              />
              <CustomButton
                color="#000"
                colorTxt="#fff"
                label={players[player2Index].name}
                type={5}
                closeSelectModel={closeSelectModel}
              />
            </View>

            <TouchableOpacity
              onPress={closeSelectModel}
              style={styles.closeBtn}
            >
              <CloseIcon width={rw(42)} height={rh(42)} color={"#fff"} />
            </TouchableOpacity>
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
  box: {
    width: rw(250),
    height: rh(420),
    borderRadius: rw(20),
    backgroundColor: Colors.bannaer,
    paddingLeft: rw(9),
    paddingRight: rw(13),
    alignItems: "center",
    paddingVertical: rh(20),
    justifyContent: "space-between",
  },
  closeBtn: {
    paddingTop: rh(50),
  },
  blur: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  test: { backgroundColor: "rgba(255,255,255,0.2)" },
  mainLabel: {
    fontFamily: Fonts.TajawalBlack,
    fontSize: rf(32),
    color: Colors.primaryText,
  },
  secLabel: {
    fontFamily: Fonts.TajawalLight,
    fontSize: rf(18),
    color: Colors.primaryText,
  },
  btnsContainer: {
    flexDirection: "column",
    gap: rw(36),
    paddingTop: rh(15),
  },
});

export default memo(SelectWinner);
