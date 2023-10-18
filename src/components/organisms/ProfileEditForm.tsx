import React, { useCallback } from 'react';
import Theme from 'theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Container } from 'components';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { ButtonFieldEdit } from './ButtonFieldEdit';

interface Props {
  onSubmit: () => void;
}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const ProfileEditForm: React.FC<Props> = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { t } = useTranslation();
  const fields = [
    {
      label: 'Alias',
      value: 'Mario Bárcenas',
      type: 'alias',
    },
    {
      label: 'Número celular',
      value: '123-456-7890',
      type: 'phone',
    },
    {
      label: 'Correo Electrónico',
      value: 'correo@example.com',
      type: 'email',
    },
    {
      label: 'Dirección',
      value: 'Villa de Magallanes #244 Villa Magna, 78231 San Luis Potosí, S.L.P.',
      type: 'address',
    },
  ];

  const biometricManager = useCallback(async (field: any) => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      navigate('EditProfileField', { field });
    }
  }, [navigate, t]);

  const handlerShowForm = (field: any) => {
    if (field.type === 'email' || field.type === 'phone') {
      biometricManager(field);
    }
    if (field.type === 'address') {
      navigate('EditAddress');
    }
    if (field.type === 'alias') {
      navigate('EditProfileField', { field });
    }
  };

  return (
    <Container style={{ padding: Theme.Sizes.Padding }}>
      {fields.map((field, index) => (
        <Container key={index}>
          <ButtonFieldEdit
            label={field.label}
            value={field.value}
            onEditClick={() => handlerShowForm(field)}
          />
        </Container>
      ))}
    </Container>
  );
};

export { ProfileEditForm };
