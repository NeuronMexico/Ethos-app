import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParams } from 'utils';
import EthosCreditController from 'screens/app/EthosCredit/EthosCreditController';
import TransactionsController from 'screens/app/transactions/Transactions/TransactionsController';
import ExpensesController from 'screens/app/Expenses/ExpensesController';
import BenefitsController from 'screens/app/Benefits/BenefitsController';
import CardsController from 'screens/app/cards/Cards/CardsController';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator<TabParams>();

// eslint-disable-next-line react/jsx-props-no-spreading
const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false, lazy: false }}
    initialRouteName="EthosCreditStack"
    tabBar={renderTabBar}
  >
    <Tab.Screen name="EthosCreditStack" component={EthosCreditController} />
    <Tab.Screen name="CardsStack" component={CardsController} />
    <Tab.Screen name="TransactionsStack" component={TransactionsController} />
    <Tab.Screen name="ExpensesStack" component={ExpensesController} />
    <Tab.Screen name="BenefitsStack" component={BenefitsController} />
  </Tab.Navigator>
);

export default TabNavigator;
