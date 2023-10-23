import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'components';

interface Props {
  prop?: string
}

const CollectionsPage: React.FC<Props> = (props: Props) => {
  const { prop } = props;

  return (
    <Container>
      <Text text="CollectionsPage" />
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
});

export { CollectionsPage };
