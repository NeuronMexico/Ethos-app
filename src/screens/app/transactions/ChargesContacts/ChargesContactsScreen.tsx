import React from 'react';
import { Container, Header } from 'components';
import ListScreen from 'screens/app/contacts/List/ListScreen';
import { data } from 'screens/app/contacts/List/ListController';

interface Props {
  title?: string;
  enableNewContact?: boolean;
  onPressNewContact?: () => void;
  onPressContact: (id: number) => void;
}

const ChargesContactsScreen: React.FC<Props> = ({
  title,
  enableNewContact = false,
  onPressNewContact,
  onPressContact,
}: Props) => (
  <Container flex>
    <Header title={title ?? ''} />
    <ListScreen
      showHeader={false}
      enableNewContact={enableNewContact}
      data={data}
      onPressNewContact={onPressNewContact}
      onPressContact={onPressContact}
    />
  </Container>
);

export default ChargesContactsScreen;
