import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import PlusIcon from "../icons/PlusIcon";
function AddButton({ openModel }: { openModel: () => void }) {
  return (
    <View style={{ alignContent: "center" }}>
      <Button
        style={styles.btn}
        buttonColor={Colors.addBtn}
        labelStyle={styles.label}
        icon={() => <PlusIcon />}
        onPress={openModel}
      >
        Add
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: rw(130),
    height: rh(39),
    borderRadius: rw(20),
  },
  label: {
    fontSize: rf(24),
    fontFamily: Fonts.TajawalBold,
    color: Colors.primaryText,
    paddingTop: rh(5),
  },
});

export default memo(AddButton);
