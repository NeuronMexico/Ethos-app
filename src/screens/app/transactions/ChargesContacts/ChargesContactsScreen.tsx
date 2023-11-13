import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Header } from 'components';
import ListScreen from 'screens/app/contacts/List/ListScreen';
import { data } from 'screens/app/contacts/List/ListController';

interface Props {
  onPressContact: (id: number) => void;
}

const ChargesContactsScreen: React.FC<Props> = ({
  onPressContact,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t('charges:chargeWithContacts')} />
      <ListScreen
        showHeader={false}
        enableNewContact={false}
        data={data}
        onPressContact={onPressContact}
      />
    </Container>
  );
};

export default ChargesContactsScreen;
