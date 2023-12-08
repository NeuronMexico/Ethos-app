import React from 'react';
import {
  Button, SafeAreaView, ScrollView, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PreviewStackParams } from 'utils';
import { useAlert } from 'context';
import { ContentModalResponse } from 'screens/app/Payment/components';
import { useTranslation } from 'react-i18next';

const PreviewScreen: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<PreviewStackParams>>();
  const { t } = useTranslation();
  const alert = useAlert();

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
        <Button title="RadioButtonGroup" onPress={() => navigate('RadioButtonGroup')} />
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
        <Button title="SwipeableSwitch" onPress={() => navigate('SwipeableSwitch')} />
        <Button
          title="Alert"
          onPress={() => alert.show({
            extraInfo: (
              <ContentModalResponse
                amount={Number('1234')}
                date={new Date()}
                references={[
                  { label: 'form:costPerDisposal', value: '$50' },
                  { label: 'form:SPEICost', value: '$7.50' },
                  { label: 'form:reference', value: 'ABC123' },
                ]}
                paymentDetails={[
                  { label: 'form:name', value: 'Andrés Lara' },
                  { label: 'form:destinationAccount', value: 'CLABE ***531' },
                  { label: 'form:concept', value: 'Pago Viaje' },
                  { label: 'form:bank', value: 'STP' },
                ]}
              />
            ),
            title: t('charges:confirmCharge'),
            fullscreen: true,
            checkmark: true,
            logo: true,
            reference: '123',
            invoice: '1234',
            actions: [
              { label: 'Primary', onPress: alert.hide, type: 'primary' },
              { label: 'Secondary', onPress: alert.hide, type: 'secondary' },
              { label: 'Destructive Primary', onPress: alert.hide, type: 'destructive-primary' },
              { label: 'Destructive Secondary', onPress: alert.hide, type: 'destructive-secondary' },
            ],
          })}
        />
        <Button title="Icons" onPress={() => navigate('Icons')} />
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
