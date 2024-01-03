import React from 'react';
import {
  Container, Header,
} from 'components';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { ChangePasswordForm } from './components/ChangePasswordForm';

interface Props {
  onSubmit: () => void;
}

const ChangePasswordScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
      <Header title={t('changePassword:newPassword')} />
      <ChangePasswordForm onSubmit={onSubmit} />
    </Container>
  );
};

export default ChangePasswordScreen;
