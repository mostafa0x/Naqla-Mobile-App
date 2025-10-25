import CustomButton from "@/components/CustomButton";
import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useStore";
import checkWinner from "@/service/checkWinner";
import { rf, rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Portal } from "react-native-paper";

function GameOver({ Winner }: { Winner: "winP1" | "winP2" | "draw" | null }) {
  const { players, player1Index, player2Index } = useAppSelector(
    (state) => state.AppReducer
  );
  return (
    <Portal>
      {!!Winner && (
        <BlurView
          style={styles.blur}
          intensity={500}
          tint="systemChromeMaterialDark"
        />
      )}
      <Modal animationType="slide" transparent visible={!!Winner}>
        <View style={styles.contant}>
          <View style={styles.box}>
            <Text style={styles.mainLabel}>
              {checkWinner(Winner, players, player1Index, player2Index)}
            </Text>
            <View style={styles.btnsContainer}>
              <CustomButton label="Back" type={1} />

              <CustomButton label="Rematch" type={2} />
            </View>

            <TouchableOpacity style={styles.closeBtn}></TouchableOpacity>
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
    width: rw(300),
    height: rh(200),
    borderRadius: rw(20),
    backgroundColor: Colors.bannaer,
    paddingLeft: rw(9),
    paddingRight: rw(13),
    alignItems: "center",
    paddingVertical: rh(20),
    justifyContent: "space-between",
  },
  closeBtn: {
    alignSelf: "flex-end",
    paddingTop: rh(5),
  },
  blur: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    flexDirection: "row",
    gap: rw(10),
  },
});

export default memo(GameOver);
