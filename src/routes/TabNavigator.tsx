import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParams } from 'utils';
import EthosCreditController from 'screens/app/EthosCredit/EthosCreditController';
import CardsController from 'screens/app/Cards/CardsController';
import TransactionsController from 'screens/app/Transactions/TransactionsController';
import ExpensesController from 'screens/app/Expenses/ExpensesController';
import BenefitsController from 'screens/app/Benefits/BenefitsController';
import TabBar from './TabBar';
import ProfileController from 'screens/app/profile/Profile/ProfileController';

const Tab = createBottomTabNavigator<TabParams>();

// eslint-disable-next-line react/jsx-props-no-spreading
const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false, lazy: false }}
    initialRouteName="EthosCreditStack"
    tabBar={renderTabBar}
  >
    <Tab.Screen name="EthosCreditStack" component={ProfileController} />
    <Tab.Screen name="CardsStack" component={CardsController} />
    <Tab.Screen name="TransactionsStack" component={TransactionsController} />
    <Tab.Screen name="ExpensesStack" component={ExpensesController} />
    <Tab.Screen name="BenefitsStack" component={BenefitsController} />
  </Tab.Navigator>
);

export default TabNavigator;
