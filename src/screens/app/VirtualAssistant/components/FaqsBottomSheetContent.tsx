import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Input, Text } from 'components';
import { LensIcon } from 'assets/svg';
import Theme from 'theme';

interface Props {

}

const FaqsBottomSheetContent: React.FC<Props> = () => {
  const { t } = useTranslation();

  const [query, setQuery] = useState<string>('');

  return (
    <Container>
      <Input
        placeholder={t('global:search')}
        value={query}
        onChangeText={setQuery}
        useBottomSheetInput
        marginTop={0}
        prefixIcon={<LensIcon width={20} height={20} />}
        returnKeyType="search"
      />
      <Container style={{ marginTop: 8 }}>
        <Container style={styles.faqContainer}>
          <Text
            text="¿Cómo puedo verificar mi saldo y los movimientos de mi cuenta?"
            typography="subtitle"
            textAlign="center"
          />
        </Container>
        <Container style={styles.faqContainer}>
          <Text
            text="¿Cómo puedo verificar mi saldo y los movimientos de mi cuenta?"
            typography="subtitle"
            textAlign="center"
          />
        </Container>
        <Container style={styles.faqContainer}>
          <Text
            text="¿Cuáles son las opciones de pago disponibles en la aplicación?"
            typography="subtitle"
            textAlign="center"
          />
        </Container>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  faqContainer: {
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: Theme.Colors.WhiteSmoke,
    marginVertical: 8,
  },
});

export { FaqsBottomSheetContent };
