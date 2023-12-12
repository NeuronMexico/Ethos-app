import React from 'react';
import { Button, Container, Header } from 'components';
import ListScreen from 'screens/app/contacts/List/ListScreen';
import { data } from 'screens/app/contacts/List/ListController';
import i18n from 'i18n';
import Theme from 'theme';

interface Props {
  title?: string;
  enableNewContact?: boolean;
  from: string;
  onPressNewContact?: () => void;
  onPressContact: (id: number) => void;
  onPressFastCollect?: () => void;
}

const ChargesContactsScreen: React.FC<Props> = ({
  title,
  enableNewContact = false,
  from,
  onPressNewContact,
  onPressContact,
  onPressFastCollect = () => {},
}: Props) => (
  <Container flex>
    <Header title={title ?? ''} />
    {
      from !== 'pay' && (
        <Container style={{ marginHorizontal: Theme.Sizes.Padding, marginTop: Theme.Sizes.MarginTop, marginBottom: 16 }}>
          <Button
            label={i18n.t('charges:fastCollect')}
            onPress={onPressFastCollect}
          />
        </Container>
      )
    }
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
