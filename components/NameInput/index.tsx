import { Colors } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useStore";
import handelAddPlayer from "@/service/handelAddPlayer";
import handleCheckName from "@/service/handleCheckName";
import { rf, rw } from "@/utils/dimensions";
import React, { memo, useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import PlusIcon from "../icons/PlusIcon";

function NameInput({ closeModel }: { closeModel: () => void }) {
  const [activeIcon, setActiveIcon] = useState(false);
  const [nameTxt, setNameTxt] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    setActiveIcon(handleCheckName(nameTxt));
    return () => {};
  }, [nameTxt]);

  return (
    <View style={styles.container}>
      <View style={styles.secContainer}>
        <TouchableOpacity
          onPress={() =>
            activeIcon && handelAddPlayer(dispatch, nameTxt, closeModel)
          }
        >
          <PlusIcon active={activeIcon} />
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          placeholder="الاسم"
          value={nameTxt}
          onChangeText={setNameTxt}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  secContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#6F6D6D",
    width: rw(312),
    paddingHorizontal: rw(11),
  },
  input: {
    textAlign: "right",
    color: Colors.primaryText,
    fontSize: rf(32),
    width: rw(280),
  },
});

export default memo(NameInput);
