import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { Animated, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import i18n from 'i18n';
import {
  Card, Tab,
} from 'components';
import Theme from 'theme';
import { Easing } from 'utils';
import TabSection from './TabSections/TabSection';
import PersonalProjectInfoSection from './TabSections/PersonalProjectInfoSection';

const DUMMY_DATA = [
  {
    title: '** *334',
    type: 'card',
    info: {
      usedBalance: 3957,
      availableBalance: 66043,
    },
  },
  {
    title: i18n.t('tabProducts:personalProject'),
    type: 'personalProject',
  },
  {
    title: '** *543',
    type: 'card',
    info: {
      usedBalance: 50000,
      availableBalance: 60000,
    },
  },
];

const HomeTabProducts = () => {
  const pagerViewRef = useRef<PagerView>(null);

  const [currentTab, setCurrentTab] = useState<number>(0);
  const heightValue = useRef(new Animated.Value(100)).current;

  useEffect(
    () => {
      const condition = DUMMY_DATA[currentTab].info;
      Animated.timing(heightValue, {
        toValue: condition ? 100 : 150,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.easeInOut,
      }).start();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentTab],
  );

  const sections = useMemo(() => DUMMY_DATA.map((item, index) => (
    <View
      key={`${item.type}-${index}`}
      style={{ padding: Theme.Sizes.Padding }}
    >
      { item.info
        ? (<TabSection product={item} />)
        : (<PersonalProjectInfoSection />) }
    </View>
  )), []);

  return (
    <Card
      flex
      column
      borderRadius={24}
      padding={0}
      backgroundColor={Theme.Colors.DarkSoul}
    >
      <Tab
        tabs={DUMMY_DATA.map((item) => item.title)}
        initialTab={0}
        onTabChange={(index) => {
          setCurrentTab(index);
          pagerViewRef.current?.setPageWithoutAnimation(index);
        }}
        inverted
      />
      <Animated.View style={{ flex: 1, height: heightValue }}>
        <PagerView
          ref={pagerViewRef}
          style={{ flex: 1 }}
          initialPage={0}
          scrollEnabled={false}
          onPageSelected={(event) => {
            setCurrentTab(event.nativeEvent.position);
          }}
        >
          {sections}
        </PagerView>
      </Animated.View>
    </Card>
  );
};

export default HomeTabProducts;
