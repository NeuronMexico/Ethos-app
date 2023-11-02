import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Text } from 'components';
import Theme from 'theme';

interface Props {
  establishment: string;
  distance: number;
}

const EstablishmentItem: React.FC<Props> = ({ establishment, distance }) => {
  const { t } = useTranslation();

  return (
    <Container row style={styles.container}>
      <Container flex>
        <Text text={establishment} fontWeight="Medium" />
      </Container>
      <Text
        text={t('cards:kilometersAway', { kilometers: distance })}
        typography="caption"
        fontWeight="Bold"
        marginLeft={8}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Theme.Colors.DrWhite,
    borderBottomWidth: 1,
    borderColor: Theme.Colors.PlaceboBlue,
  },
});

export { EstablishmentItem };
