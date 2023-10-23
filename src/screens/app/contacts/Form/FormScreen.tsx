import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Header } from 'components';
import ContactForm from '../components/ContactForm';

interface Props {
  contact?: any;
  onPressEditPhoto?: () => void;
  onPressAddAccount?: () => void;
  onPressDeleteAccount?: (id: number) => void;
  onSubmit: (data: any, newContact?: boolean) => void;
}

const FormScreen: React.FC<Props> = ({
  contact,
  onPressEditPhoto,
  onPressAddAccount,
  onPressDeleteAccount,
  onSubmit,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t(`contacts:${contact ? 'edit' : 'new'}Contact`)} />
      <ContactForm
        contact={contact}
        onPressEditPhoto={onPressEditPhoto}
        onPressAddAccount={onPressAddAccount}
        onPressDeleteAccount={onPressDeleteAccount}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default FormScreen;
