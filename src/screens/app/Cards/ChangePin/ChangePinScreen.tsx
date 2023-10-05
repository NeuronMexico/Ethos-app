import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Header, Text } from 'components';

interface Props {
  prop?: string
}

const ChangePinScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t('cards:changePin')} />
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
});

export default ChangePinScreen;
