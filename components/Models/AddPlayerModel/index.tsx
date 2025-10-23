import CloseIcon from "@/components/icons/CloseIcon";
import NameInput from "@/components/NameInput";
import { Colors } from "@/constants/theme";
import { AddPlayerModelType } from "@/types/AddPlayerModelType";
import { rh, rw } from "@/utils/dimensions";
import { BlurView } from "expo-blur";
import React, { memo } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { Portal } from "react-native-paper";

function AddPlayerModel({ modelAddPlayer, closeModel }: AddPlayerModelType) {
  return (
    <Portal>
      {modelAddPlayer && (
        <BlurView
          style={styles.blur}
          intensity={500}
          tint="systemChromeMaterialDark"
        />
      )}
      <Modal animationType="slide" transparent visible={modelAddPlayer}>
        <View style={styles.contant}>
          <View style={styles.box}>
            <TouchableOpacity style={styles.closeBtn}>
              <TouchableOpacity onPress={closeModel}>
                <CloseIcon color={Colors.placeholder} />
              </TouchableOpacity>
            </TouchableOpacity>
            <NameInput closeModel={closeModel} />
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
    width: rw(346),
    height: rh(107),
    borderRadius: rw(20),
    backgroundColor: Colors.bannaer2,
    paddingLeft: rw(9),
    paddingRight: rw(13),
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
  test: { backgroundColor: "rgba(255,255,255,0.2)" },
});

export default memo(AddPlayerModel);
