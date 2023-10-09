import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Touchable } from 'components';
import Theme from 'theme';
import { formatQuantity } from 'utils';

interface Props {
  title: string;
  description: string;
  value: number;
  category: string;
  showTopBorder?: boolean;
  onPress: () => void;
}

const TransactionCard: React.FC<Props> = ({
  title,
  description,
  value,
  category,
  showTopBorder,
  onPress,
}) => (
  <Touchable onPress={onPress}>
    <Container row style={[styles.transactionCard, { borderTopWidth: showTopBorder ? 1 : 0 }]}>
      <Container style={styles.categoryIndicator} />
      <Container flex space="between" style={{ marginHorizontal: 16 }}>
        <Text text={title} typography="subtitle" fontWeight="Semibold" />
        <Text text={description} typography="caption" textColor={Theme.Colors.GreatFalls} />
      </Container>
      <Text
        text={formatQuantity(value)}
        typography="subtitle"
        fontWeight="Bold"
        textColor={value < 0 ? Theme.Colors.SpringBouquet : Theme.Colors.DarkSoul}
      />
    </Container>
  </Touchable>
);

const styles = StyleSheet.create({
  transactionCard: {
    borderBottomWidth: 1,
    borderColor: Theme.Colors.PlaceboBlue,
    paddingVertical: 16,
  },
  categoryIndicator: {
    width: 11,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.Colors.SpringBouquet,
  },
});

export { TransactionCard };
