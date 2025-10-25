import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useStore";
import { TimeType } from "@/types/GameSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Item_TimeList from "./item";

function TimeList() {
  const { times, currTimeId } = useAppSelector((state) => state.GameReducer);
  const renderItem = useCallback(
    ({ item }: { item: TimeType }) => {
      return <Item_TimeList item={item} currTimeId={currTimeId} />;
    },
    [currTimeId]
  );

  const itemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);
  const listEmpty = useCallback(() => {
    return (
      <View style={styles.emptylistContainer}>
        <Text style={styles.emptylistLabel}>No timing added yet</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        data={times}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={listEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: rh(370),
  },
  itemSeparator: {
    height: rh(15),
  },
  contentContainer: {
    paddingRight: rw(5),
    paddingBottom: rh(10),
  },
  emptylistContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptylistLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(18),
    color: Colors.placeholder,
  },
});

export default memo(TimeList);
