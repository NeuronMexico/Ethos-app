import React from 'react';
import {
  Container,
  EditProfileDataForm,
  Header,
  ProfilePhoto,
} from 'components';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAlert } from 'context';

interface Props { onSubmit: () => void;}

interface RouteParams {
  field: {
    label: string,
    value: string,
    type: string,
  };
}

const EditProfileFieldScreen: React.FC<Props> = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<Record<string, RouteParams>>>();
  const { field } = route.params;
  const alert = useAlert();

  const handleUpdateData = () => {
    if (field.type === 'phone' || field.type === 'email') {
      navigate('ConfirmationCode', { type: field.type, value: field.value });
    }
    if (field.type === 'alias') {
      alert.show({
        title: t(`profile:${field.type}ResponseTitle`),
        invoice: '12345',
        date: new Date(),
        checkmark: true,
        actions: [
          {
            label: t('global:accept'),
            onPress: () => {
              alert.hide();
              navigate('Profile');
            },
            type: 'primary',
          },
        ],
      });
    }
  };

  return (
    <Container flex useKeyboard style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <Header title={t('profile:editAddress')} />
      <Container style={{ marginTop: 55 }}>
        <ProfilePhoto size={90} withName />
        <EditProfileDataForm
          label={field.label}
          onSubmit={() => handleUpdateData()}
        />
      </Container>
    </Container>
  );
};

export default EditProfileFieldScreen;
