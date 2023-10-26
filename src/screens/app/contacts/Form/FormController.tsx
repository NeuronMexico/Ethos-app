import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';

import { SafeArea, SheetContentProfilePhoto } from 'components';
import { ContactsStackParams } from 'utils';
import { useAlert, useBottomSheet } from 'context';
import FormScreen from './FormScreen';
import SheetContentContactDelete from '../components/SheetContentContactDelete';
import ModalContentContact from '../components/ModalContentContact';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const FormController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate, goBack } = useNavigation<NativeStackNavigationProp<any>>();
  const { params: { contact } } = useRoute<RouteProp<ContactsStackParams, 'Form'>>();

  const bottomSheet = useBottomSheet();
  const alert = useAlert();

  const onPressEditPhoto = () => {
    bottomSheet.show(<SheetContentProfilePhoto onPress={() => bottomSheet.hide()} />);
  };

  const onPressDeleteAccount = (id: number) => {
    const account = contact?.accounts.find((item: any) => item.id === id);
    bottomSheet.show(
      <SheetContentContactDelete
        accountNumber={account?.number}
        onPressDelete={() => {
          bottomSheet.hide();
          deleteAccount({
            accountNumber: account?.number,
            bank: account?.bank,
          });
        }}
        onPressCancel={() => bottomSheet.hide()}
      />,
    );
  };

  const deleteAccount = async (data: any) => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      alert.show({
        title: t('contacts:deleteAccount'),
        invoice: '12345',
        date: new Date(),
        checkmark: true,
        extraInfo: (
          <ModalContentContact
            data={data}
          />
        ),
        actions: [
          {
            label: t('global:accept'),
            onPress: () => {
              alert.hide();
              goBack();
            },
            type: 'primary',
          },
        ],
      });
    }
  };

  const onSubmit = (data: any, newContact = false) => {
    console.log('data', data);
    alert.show({
      title: t(`contacts:contact${newContact ? 'Created' : 'Modified'}`),
      invoice: '12345',
      date: new Date(),
      checkmark: true,
      extraInfo: (
        <ModalContentContact
          data={data}
        />
      ),
      actions: [
        {
          label: t('global:accept'),
          onPress: () => {
            alert.hide();
            goBack();
          },
          type: 'primary',
        },
      ],
    });
  };

  return (
    <SafeArea>
      <FormScreen
        contact={contact}
        onPressEditPhoto={onPressEditPhoto}
        onPressAddAccount={() => navigate('NewAccount')}
        onPressDeleteAccount={onPressDeleteAccount}
        onSubmit={onSubmit}
      />
    </SafeArea>
  );
};

export default FormController;
