/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { Animated, View } from 'react-native';
import {
  Container, Header, Tab, TabExpensesSection,
} from 'components';
import { MessageDotsIcon } from 'assets/svg';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import Theme from 'theme';
import { ScrollView } from 'react-native-gesture-handler';
import { Easing } from 'utils';

interface Props {
  prop?: string
}

const ExpensesScreen: React.FC<Props> = () => {
  const { t } = useTranslation();
  const pagerViewRef = useRef<PagerView>(null);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const offset = useRef(new Animated.Value(0)).current;
  const heightValue = useRef(new Animated.Value(100)).current;

  const DUMMY_DATA = [
    {
      title: '** *334',
      type: 'card',
      total: '$5,186.00',
      categories: [
        {
          category: 'Alimentos y bebidas',
          total: '$2,840.00',
          color: Theme.Colors.DarkSoul,
        },
        {
          category: 'Entretenimiento',
          total: '$394.00',
          color: Theme.Colors.Wistful,
        },
        {
          category: 'Gastos en general',
          total: '$1,009.00',
          color: Theme.Colors.BossaNovaBlue,
        },
        {
          category: 'Departamental',
          total: '$943.00',
          color: Theme.Colors.SpaceCadet,
        },
      ],
    },
    {
      title: '** *334',
      type: 'card',
      total: '$5,186.00',
      categories: [
        {
          category: 'Alimentos y bebidas',
          total: '$2,840.00',
          color: Theme.Colors.DarkSoul,
        },
        {
          category: 'Entretenimiento',
          total: '$394.00',
          color: Theme.Colors.Wistful,
        },
        {
          category: 'Gastos en general',
          total: '$1,009.00',
          color: Theme.Colors.BossaNovaBlue,
        },
        {
          category: 'Departamental',
          total: '$943.00',
          color: Theme.Colors.SpaceCadet,
        },
      ],
    },
    {
      title: '** *334',
      type: 'card',
      total: '$5,186.00',
      categories: [],
    },
  ];
  useEffect(
    () => {
      const condition = DUMMY_DATA[currentTab];
      Animated.timing(heightValue, {
        toValue: condition ? 100 : 150,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.easeInOut,
      }).start();
    },
    [currentTab],
  );

  const sections = useMemo(() => DUMMY_DATA.map((item, index) => (
    <View
      key={`${item.type}-${index}`}
      style={{ padding: Theme.Sizes.Padding }}
    >
      <TabExpensesSection product={item} />
    </View>
  )), []);

  return (
    <Container>
      <Header
        title={t('expenses:title')}
        rightAction={() => {}}
        rightIcon={<MessageDotsIcon />}
        showBackButton={false}
      />
      <ScrollView
        contentContainerStyle={{ paddingTop: 16, paddingHorizontal: Theme.Sizes.Padding }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <Container flex>
          <Tab
            tabs={[t('expenses:allMyCards'), '****334', '*543']}
            initialTab={0}
            onTabChange={(index) => {
              setCurrentTab(index);
              pagerViewRef.current?.setPageWithoutAnimation(index);
            }}
          />
          <Animated.View style={{ flex: 1, height: 500 }}>
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
        </Container>
      </ScrollView>
    </Container>
  );
};

export default ExpensesScreen;
