import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PreviewStackParams } from 'utils';
import PreviewScreen from 'screens/preview/PreviewScreen';
import ContainerScreen from 'screens/preview/ContainerScreen';
import SafeAreaScreen from 'screens/preview/SafeAreaScreen';
import TextScreen from 'screens/preview/TextScreen';
import TouchableScreen from 'screens/preview/TouchableScreen';
import FadeInImageScreen from 'screens/preview/FadeInImageScreen';
import CardScreen from 'screens/preview/CardScreen';
import CheckboxScreen from 'screens/preview/CheckboxScreen';
import RadioButtonScreen from 'screens/preview/RadioButtonScreen';
import CheckBoxFieldScreen from 'screens/preview/CheckBoxFieldScreen';
import RadioButtonFieldScreen from 'screens/preview/RadioButtonFieldScreen';
import SwitchScreen from 'screens/preview/SwitchScreen';
import SwitchFieldScreen from 'screens/preview/SwitchFieldScreen';
import CheckBoxGroupScreen from 'screens/preview/CheckBoxGroupScreen';
import SwitchGroupScreen from 'screens/preview/SwitchGroupScreen';
import TabScreen from 'screens/preview/TabScreen';
import ButtonScreen from 'screens/preview/ButtonScreen';
import InputScreen from 'screens/preview/InputScreen';
import MultipleTextButtonScreen from 'screens/preview/MultipleTextButtonScreen';
import PickerScreen from 'screens/preview/PickerScreen';
import BottomSheetScreen from 'screens/preview/BottomSheetScreen';
import DateTimePickerScreen from 'screens/preview/DateTimePickerScreen';
import ButtonGroupScreen from 'screens/preview/ButtonGroupScreen';
import OptionButtonScreen from 'screens/preview/OptionButtonScreen';
import ProfilePhotoScreen from 'screens/preview/ProfilePhotoScreen';
import BankAccountCardScreen from 'screens/preview/BankAccountCardScreen';
import BackButtonScreen from 'screens/preview/BackButtonScreen';
import HeaderScreen from 'screens/preview/HeaderScreen';
import DirectAccessScreen from 'screens/preview/DirectAccessScreen';
import SliderScreen from 'screens/preview/SliderScreen';
import SwipeableSwitchScreen from 'screens/preview/SwipeableSwitchScreen';

const Stack = createNativeStackNavigator<PreviewStackParams>();

const PreviewStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Preview">
    <Stack.Screen name="Preview" component={PreviewScreen} />
    <Stack.Screen name="Container" component={ContainerScreen} />
    <Stack.Screen name="SafeArea" component={SafeAreaScreen} />
    <Stack.Screen name="Text" component={TextScreen} />
    <Stack.Screen name="Touchable" component={TouchableScreen} />
    <Stack.Screen name="FadeInImage" component={FadeInImageScreen} />
    <Stack.Screen name="Card" component={CardScreen} />
    <Stack.Screen name="CheckBox" component={CheckboxScreen} />
    <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
    <Stack.Screen name="CheckBoxField" component={CheckBoxFieldScreen} />
    <Stack.Screen name="RadioButtonField" component={RadioButtonFieldScreen} />
    <Stack.Screen name="Switch" component={SwitchScreen} />
    <Stack.Screen name="SwitchField" component={SwitchFieldScreen} />
    <Stack.Screen name="CheckBoxGroup" component={CheckBoxGroupScreen} />
    <Stack.Screen name="SwitchGroup" component={SwitchGroupScreen} />
    <Stack.Screen name="Tab" component={TabScreen} />
    <Stack.Screen name="Button" component={ButtonScreen} />
    <Stack.Screen name="Input" component={InputScreen} />
    <Stack.Screen name="MultipleTextButton" component={MultipleTextButtonScreen} />
    <Stack.Screen name="Picker" component={PickerScreen} />
    <Stack.Screen name="BottomSheet" component={BottomSheetScreen} />
    <Stack.Screen name="DateTimePicker" component={DateTimePickerScreen} />
    <Stack.Screen name="ButtonGroup" component={ButtonGroupScreen} />
    <Stack.Screen name="OptionButton" component={OptionButtonScreen} />
    <Stack.Screen name="ProfilePhoto" component={ProfilePhotoScreen} />
    <Stack.Screen name="BankAccountCard" component={BankAccountCardScreen} />
    <Stack.Screen name="BackButton" component={BackButtonScreen} />
    <Stack.Screen name="Header" component={HeaderScreen} />
    <Stack.Screen name="DirectAccess" component={DirectAccessScreen} />
    <Stack.Screen name="Slider" component={SliderScreen} />
    <Stack.Screen name="SwipeableSwitch" component={SwipeableSwitchScreen} />
  </Stack.Navigator>
);

export default PreviewStack;
