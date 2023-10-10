import React, { useCallback, useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { Container, Text, Touchable } from 'components';
import { useKeyboard } from 'hooks';
import {
  BenefitsIcon, CardIcon, EthosIcon, ExpensesIcon, TransactionsIcon,
} from 'assets/svg';

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const { isShown } = useKeyboard();

  const insets = useSafeAreaInsets();

  const onPressTab = useCallback((name: string, index: number) => {
    const nameStack = name; // name.replace('Stack', '');

    navigation.navigate(name);
    if (state.index === index) navigation.navigate(nameStack);
  }, [navigation, state.index]);

  if (isShown && Platform.OS === 'android') return null;

  return (
    <Container style={[styles.tabBar, { paddingBottom: insets.bottom + 5, paddingTop: 5 }]}>
      <Container row>
        {state.routes.map(({ name }, index) => (
          <TabBarIcon
            key={index}
            name={name}
            active={state.index === index}
            onPress={() => onPressTab(name, index)}
          />
        ))}
      </Container>
    </Container>
  );
};

interface TabBarIconProps {
  name: string;
  active: boolean;
  onPress: () => void;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({
  name, active, onPress,
}: TabBarIconProps) => {
  const { t } = useTranslation();

  const { icon, label } = useMemo(() => {
    switch (name) {
      case 'EthosCreditStack':
        return {
          icon: (
            <Container height={24}>
              <EthosIcon color={active ? Theme.Colors.SpringBouquet : Theme.Colors.Encore} />
            </Container>
          ),
          label: t('tabBar:ethosCredit'),
        };
      case 'CardsStack':
        return {
          icon: <CardIcon color={active ? Theme.Colors.SpringBouquet : Theme.Colors.Encore} />,
          label: t('tabBar:cards'),
        };
      case 'TransactionsStack':
        return {
          icon: <TransactionsIcon color={active ? Theme.Colors.SpringBouquet : Theme.Colors.White} />,
          label: '',
        };
      case 'ExpensesStack':
        return {
          icon: <ExpensesIcon color={active ? Theme.Colors.SpringBouquet : Theme.Colors.Encore} />,
          label: t('tabBar:expenses'),
        };
      case 'BenefitsStack':
        return {
          icon: <BenefitsIcon color={active ? Theme.Colors.SpringBouquet : Theme.Colors.Encore} />,
          label: t('tabBar:benefits'),
        };
      default: return { icon: null, label: '' };
    }
  }, [name, active, t]);

  return (
    <Container flex>
      <Touchable onPress={onPress} effectEnable={false}>
        <Container middle style={name === 'TransactionsStack' ? styles.middleContainer : styles.iconContainer}>
          {icon}
          {!!label && (
          <Text
            text={label}
            fontSize={11}
            textColor={active ? Theme.Colors.DarkSoul : Theme.Colors.Encore}
            marginTop={8}
            textAlign="center"
          />
          )}
        </Container>
      </Touchable>
    </Container>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Theme.Sizes.Padding,
    backgroundColor: Theme.Colors.White,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  middleContainer: {
    padding: 10,
    width: 54,
    height: 54,
    backgroundColor: Theme.Colors.DarkSoul,
    borderRadius: 50,
    alignSelf: 'center',
  },
  iconContainer: {
    paddingVertical: 5,
  },
});

export default TabBar;
