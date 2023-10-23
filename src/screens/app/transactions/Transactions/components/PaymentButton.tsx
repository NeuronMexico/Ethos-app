import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Touchable } from 'components';
import Theme from 'theme';

interface Props {
  label: string;
  icon: ReactElement;
  onPress: () => void;
}

const PaymentButton: React.FC<Props> = ({ label, icon, onPress }) => (
  <Touchable flex onPress={onPress}>
    <Container flex crossAlignment="start" style={styles.container}>
      <Container style={styles.iconContainer}>
        {icon}
      </Container>
      <Text text={label} fontWeight="Semibold" marginTop={6} marginBottom={16} />
    </Container>
  </Touchable>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: Theme.Colors.PlaceboBlue,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
});

export { PaymentButton };
