import React from 'react';
import {
  Button, SafeAreaView, ScrollView, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PreviewStackParams } from 'utils';

const PreviewScreen: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<PreviewStackParams>>();

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView>
        <Button title="Container" onPress={() => navigate('Container')} />
        <Button title="Card" onPress={() => navigate('Card')} />
        <Button title="SafeArea" onPress={() => navigate('SafeArea')} />
        <Button title="Text" onPress={() => navigate('Text')} />
        <Button title="Touchable" onPress={() => navigate('Touchable')} />
        <Button title="FadeInImage" onPress={() => navigate('FadeInImage')} />
        <Button title="CheckBox" onPress={() => navigate('CheckBox')} />
        <Button title="RadioButton" onPress={() => navigate('RadioButton')} />
        <Button title="CheckBoxField" onPress={() => navigate('CheckBoxField')} />
        <Button title="RadioButtonField" onPress={() => navigate('RadioButtonField')} />
        <Button title="Switch" onPress={() => navigate('Switch')} />
        <Button title="SwitchField" onPress={() => navigate('SwitchField')} />
        <Button title="CheckBoxGroup" onPress={() => navigate('CheckBoxGroup')} />
        <Button title="SwitchGroup" onPress={() => navigate('SwitchGroup')} />
        <Button title="Tab" onPress={() => navigate('Tab')} />
        <Button title="Button" onPress={() => navigate('Button')} />
        <Button title="Input" onPress={() => navigate('Input')} />
        <Button title="MultipleTextButton" onPress={() => navigate('MultipleTextButton')} />
        <Button title="Picker" onPress={() => navigate('Picker')} />
        <Button title="DateTimePicker" onPress={() => navigate('DateTimePicker')} />
        <Button title="BottomSheet" onPress={() => navigate('BottomSheet')} />
        <Button title="ButtonGroup" onPress={() => navigate('ButtonGroup')} />
        <Button title="OptionButton" onPress={() => navigate('OptionButton')} />
        <Button title="ProfilePhoto" onPress={() => navigate('ProfilePhoto')} />
        <Button title="BankAccountCard" onPress={() => navigate('BankAccountCard')} />
        <Button title="BackButton" onPress={() => navigate('BackButton')} />
        <Button title="Header" onPress={() => navigate('Header')} />
        <Button title="DirectAccess" onPress={() => navigate('DirectAccess')} />
        <Button title="Slider" onPress={() => navigate('Slider')} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default PreviewScreen;
