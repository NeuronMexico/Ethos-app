import React from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Header, MultipleTextButton } from 'components';
import Theme from 'theme';
import { capitalize, formatDate } from 'utils';

const MOCK_DATA = [
  new Date(2023, 7, 1),
  new Date(2023, 6, 1),
  new Date(2023, 5, 1),
  new Date(2023, 4, 1),
  new Date(2023, 3, 1),
  new Date(2023, 2, 1),
];

interface Props {
  onSelectStatement: () => void;
}

const AccountStatementScreen: React.FC<Props> = ({ onSelectStatement }) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t('cards:accountStatement')} showVirtualAssistantAction />
      <FlatList
        contentContainerStyle={{ paddingTop: 24, paddingHorizontal: Theme.Sizes.Padding }}
        data={MOCK_DATA}
        renderItem={({ item }) => (
          <MultipleTextButton
            title={capitalize(formatDate(item, 'MMMM yyyy'))}
            borderRadius={24}
            borderColor={Theme.Colors.PlaceboBlue}
            labelColor={Theme.Colors.DarkSoul}
            marginVertical={8}
            alignContent="flex-start"
            androidRippleColor={Theme.Colors.DarkSoul}
            paddingHorizontal={0}
            fontWeight="Regular"
            fontSize={16}
            onPress={onSelectStatement}
          />
        )}
      />
    </Container>
  );
};

export default AccountStatementScreen;
