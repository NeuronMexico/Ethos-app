import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Text } from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
  prop?: string
}

const CardSelectionScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header title={t('cards:selectLayout')} backButtonBorderless />
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
});

export default CardSelectionScreen;
