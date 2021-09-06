import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { Transitioning, Transition } from "react-native-reanimated";

import configs from "configs";
import AppHeader from "components/AppHeader";
import AppOutfitFooter from "components/Outfits/AppOutfitFooter";
import AppOutfit from "components/Outfits/AppOutfit";
import AppTopCurve from "components/AppTopCurve";

const defaultOutfits = [
  { id: 0, color: "#BFEAF5", aspectRatio: 1, selected: false },
  { id: 1, color: "#BEECC4", aspectRatio: 200 / 145, selected: false },
  { id: 2, color: "#FFE4D9", aspectRatio: 180 / 145, selected: false },
  { id: 3, color: "#FFDDDD", aspectRatio: 180 / 145, selected: false },
  { id: 4, color: "#BFEAF5", aspectRatio: 1, selected: false },
  { id: 5, color: "#F3F0EF", aspectRatio: 120 / 145, selected: false },
  { id: 6, color: "#D5C3BB", aspectRatio: 210 / 145, selected: false },
  { id: 7, color: "#DEEFC4", aspectRatio: 160 / 145, selected: false },
];

const { width: wWidth } = Dimensions.get("window");

const width = (wWidth - configs.spacing.m * 3) / 2;

export default function FavoriteOutfitsScreen({ navigation }) {
  const transition = (
    <Transition.Together>
      <Transition.Out type="slide-bottom" />
      <Transition.In type="scale" />
    </Transition.Together>
  );

  const list = useRef(Transitioning.View);
  const [footerHeight, setFooterHeight] = useState(0);
  const [outfits, setOutfits] = useState(defaultOutfits);

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Favorite Outfits"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollView,
            { paddingBottom: footerHeight },
          ]}>
          <Transitioning.View transition={transition} ref={list}>
            <View style={styles.content}>
              <View style={{ marginRight: configs.spacing.m }}>
                {outfits
                  .filter((_, index) => index % 2 !== 0)
                  .map(item => (
                    <AppOutfit key={item.id} outfit={item} width={width} />
                  ))}
              </View>
              <View>
                {outfits
                  .filter((_, index) => index % 2 === 0)
                  .map(item => (
                    <AppOutfit key={item.id} outfit={item} width={width} />
                  ))}
              </View>
            </View>
          </Transitioning.View>
        </ScrollView>
        <AppTopCurve height={footerHeight} />
        <View
          style={styles.footerContainer}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}>
          <AppOutfitFooter
            label="Add to Favorites"
            onPress={() => {
              list.current?.animateNextTransition();
              setOutfits(outfits.filter(item => !item.selected));
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: configs.spacing.s,
  },
  content: {
    flexDirection: "row",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  screen: {
    flex: 1,
    backgroundColor: configs.colors.white,
  },
  scrollView: {
    paddingHorizontal: configs.spacing.m,
  },
});
