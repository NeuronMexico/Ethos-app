import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'components';

interface Props {
  prop?: string
}

const TransactionsScreen: React.FC<Props> = (props: Props) => {
  const { prop } = props;

  return (
    <Container flex middle>
      <Text text="TransactionsScreen" />
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
});

export default TransactionsScreen;
