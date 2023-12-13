import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ReactNativeBiometrics from 'react-native-biometrics';

import { SafeArea } from 'components';
import { useAlert, useBottomSheet } from 'context';
import { useTranslation } from 'react-i18next';
import ListScreen from './ListScreen';
import SheetContentContactDetail from '../components/SheetContentContactDetail';
import SheetContentContactDelete from '../components/SheetContentContactDelete';
import ModalContentContact from '../components/ModalContentContact';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

export const data = [{
  id: 1,
  name: 'John',
  alias: 'John',
  email: 'example@test.com',
  phone: '1234567890',
  accounts: [{
    id: 1,
    number: '123456789',
    bank: 'Banamex',
  }, {
    id: 2,
    number: '123456789',
    bank: 'BBVA',
  }],
}, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }];

// Sort the data array by name
data.sort((a, b) => a.name.localeCompare(b.name));

const ListController: React.FC = () => {
  const { t } = useTranslation();

  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const bottomSheet = useBottomSheet();
  const alert = useAlert();

  const onPressNewContact = () => {
    navigate('Form', {});
  };

  const onPressContact = (id: number) => {
    const contact = data.find((item) => item.id === id);
    bottomSheet.show(
      <SheetContentContactDetail
        contact={contact}
        onPressEdit={() => {
          bottomSheet.hide();
          navigate('Form', { contact });
        }}
        onPressDelete={() => {
          // bottomSheet.hide();
          onPressDelete(id);
        }}
      />,
    );
  };

  const onPressDelete = (id: number) => {
    const contact = data.find((item) => item.id === id);
    bottomSheet.show(
      <SheetContentContactDelete
        contactName={contact?.name}
        onPressDelete={() => {
          bottomSheet.hide();
          deleteContact({
            name: contact?.name,
            alias: contact?.alias,
            email: contact?.email,
            phone: contact?.phone,
          });
        }}
        onPressCancel={() => {
          bottomSheet.hide();
        }}
      />,
    );
  };

  const deleteContact = async (info: any) => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });

    if (result.success) {
      alert.show({
        title: t('contacts:contactDeleted'),
        invoice: '12345',
        date: new Date(),
        checkmark: true,
        extraInfo: (
          <ModalContentContact
            data={info}
          />
        ),
        actions: [
          {
            label: t('global:accept'),
            onPress: () => {
              alert.hide();
            },
            type: 'primary',
          },
        ],
      });
    }
  };

  return (
    <SafeArea>
      <ListScreen data={data} onPressNewContact={onPressNewContact} onPressContact={onPressContact} />
    </SafeArea>
  );
};

export default ListController;
