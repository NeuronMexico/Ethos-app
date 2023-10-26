import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'components';

interface Props {
  prop?: string
}

const PersonalProjectPage: React.FC<Props> = (props: Props) => {
  const { prop } = props;

  return (
    <Container>
      <Text text="PersonalProjectPage" />
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
});

export { PersonalProjectPage };
