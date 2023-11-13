import React from 'react';
import { Container, Text } from 'components';
import i18n from 'i18n';

const ComponentConfirmDelete = () => (
  <Container>
    <Text text={i18n.t('transactions:payee')} marginTop={5} />
    <Text text="Andrés Lara" fontSize={17} fontWeight="Bold" marginBottom={5} />
    <Text text={i18n.t('form:bank')} marginTop={5} />
    <Text text="STP" fontSize={17} fontWeight="Bold" marginBottom={5} />
    <Text text={i18n.t('form:concept')} marginTop={5} />
    <Text text="Pago de Viaje" fontSize={17} fontWeight="Bold" marginBottom={5} />
  </Container>
);

export default ComponentConfirmDelete;
