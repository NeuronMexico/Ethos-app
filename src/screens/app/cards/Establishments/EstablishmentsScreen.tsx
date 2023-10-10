import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, Input, Text,
} from 'components';
import { LensIcon, MessageDotsIcon } from 'assets/svg';
import Theme from 'theme';
import { EstablishmentItem } from './components';

const MOCK_DATA = [
  { establishment: 'Oxxo Himno Nacional', distance: 1.3 },
  { establishment: '7 Eleven Cuahutemoc', distance: 2 },
  { establishment: 'Oxxo Lomas', distance: 3 },
];

interface Props {
  prop?: string
}

const EstablishmentsScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  const [postalCode, setPostalCode] = useState<string>('');

  return (
    <Container flex useKeyboard>
      <Header title={t('cards:checkEstablishments')} rightIcon={<MessageDotsIcon />} />
      <FlatList
        contentContainerStyle={{ paddingTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}
        ListHeaderComponent={(
          <Container style={{ marginBottom: 16 }}>
            <Text text={t('cards:withdrawCash')} typography="header" textAlign="center" />

            <Container height={100} backgroundColor="lightgray" style={{ borderRadius: 24, marginVertical: 16 }} />

            <Input
              value={postalCode}
              onChangeText={setPostalCode}
              marginTop={0}
              prefixIcon={<LensIcon />}
              placeholder={t('cards:enterPostalCode')}
            />
          </Container>
        )}
        data={MOCK_DATA}
        renderItem={({ item }) => <EstablishmentItem establishment={item.establishment} distance={item.distance} />}
      />
    </Container>
  );
};

export default EstablishmentsScreen;
