import React from 'react';
import {
  Button, SafeAreaView, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PreviewStackParams } from 'utils';

const PreviewScreen: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<PreviewStackParams>>();

  return (
    <SafeAreaView style={styles.flex}>
      <Button title="Container" onPress={() => navigate('Container')} />
      <Button title="Card" onPress={() => navigate('Card')} />
      <Button title="SafeArea" onPress={() => navigate('SafeArea')} />
      <Button title="Text" onPress={() => navigate('Text')} />
      <Button title="Touchable" onPress={() => navigate('Touchable')} />
      <Button title="FadeInImage" onPress={() => navigate('FadeInImage')} />
      <Button title="CheckBox" onPress={() => navigate('CheckBox')} />
      <Button title="RadioButton" onPress={() => navigate('RadioButton')} />
      <Button title="CheckBoxField" onPress={() => navigate('CheckBoxField')} />
      <Button title="Tab" onPress={() => navigate('Tab')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default PreviewScreen;
