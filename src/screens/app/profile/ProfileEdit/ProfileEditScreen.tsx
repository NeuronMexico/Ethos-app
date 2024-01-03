import React from 'react';
import {
  Container,
  Header,
  ProfileEditForm,
  ProfilePhoto,
} from 'components';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';

interface Props {
  onPressEditPhoto: () => void;
  onSubmit: () => void;
}

const ProfileEditScreen: React.FC<Props> = ({ onPressEditPhoto, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Container flex useKeyboard style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: Theme.Sizes.Padding }}>
      <Header title={t('profile:editData')} />
      <Container style={{ marginTop: 55 }}>
        <ProfilePhoto size={90} withName withId editable onPress={onPressEditPhoto} />
        <ProfileEditForm onSubmit={onSubmit} />
      </Container>
    </Container>
  );
};

export default ProfileEditScreen;
