import React from 'react';
import { SafeArea } from 'components/atoms/SafeArea';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EditAddressScreen from './EditAddressScreen';

const EditAddressController: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const alert = useAlert();

  const onSubmit = () => {
    alert.show({
      title: t('profile:addressResponseTitle'),
      invoice: '12345',
      date: new Date(),
      checkmark: true,
      actions: [
        {
          label: t('global:accept'),
          onPress: () => {
            alert.hide();
            navigate('ProfileEdit');
          },
          type: 'primary',
        },
      ],
    });
  };

  return (
    <SafeArea>
      <EditAddressScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default EditAddressController;
