import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddButton from "../AddButton";
import Item from "./item";

function LeaderBoard({ openModel }: { openModel: () => void }) {
  const renderItem = useCallback(() => {
    return <Item />;
  }, []);

  const itemSeparator = useCallback(() => {
    return <View style={styles.spaceItem}></View>;
  }, []);

  const listEmpty = useCallback(() => {
    return (
      <View style={styles.emptylistContainer}>
        <Text style={styles.emptylistLabel}>There are no matches yet</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainLabel}>Leaderboard</Text>
        <AddButton openModel={openModel} />
      </View>
      <View style={styles.upperContainer}>
        <Text style={styles.upperLabel}>Name</Text>
        <Text style={styles.upperLabel}>W</Text>
        <Text style={styles.upperLabel}>D</Text>
        <Text style={styles.upperLabel}>L</Text>

        <Text style={styles.upperLabel}>Points</Text>
      </View>
      <View style={styles.list}>
        <FlashList
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={[]}
          ListEmptyComponent={listEmpty}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeparator}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: rh(48),
    paddingHorizontal: rw(24),
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.bannaer,
    borderRadius: rw(20),
    marginBottom: rh(20),
  },

  mainLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(30),
    color: Colors.secondaryText,
    paddingBottom: rh(10),
  },
  upperLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(24),
    color: Colors.placeholder,
  },

  list: {
    width: "100%",
    height: rh(200),
  },
  contentContainer: {
    paddingBottom: rh(50),
  },
  spaceItem: {
    height: rh(33),
  },
  emptylistContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptylistLabel: {
    fontFamily: Fonts.TajawalBold,
    fontSize: rf(24),
    color: Colors.placeholder,
  },
});

export default memo(LeaderBoard);
