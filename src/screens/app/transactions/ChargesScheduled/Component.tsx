import React from 'react';
import {
  Button, Container, OptionButton, Text,
} from 'components';
import { CheckMarkCircleIcon, ExportIcon } from 'assets/svg';
import { formatQuantity } from 'utils';
import Theme from 'theme';
import i18n from 'i18n';

interface Props {
  onDismiss: () => void;
  onDelete: () => void;
}

const Component: React.FC<Props> = ({
  onDismiss = () => {},
  onDelete = () => {},
}: Props) => (
  <Container flex>
    <Container center>
      <CheckMarkCircleIcon />
    </Container>
    <Container>
      <Text
        text={formatQuantity(2500)}
        marginTop={2}
        marginBottom={8}
        fontSize={34}
        typography="header"
        textAlign="center"
        fontWeight="Bold"
      />
    </Container>
    <Container row>
      <Container width="50%" style={{ marginRight: 12 }}>
        <Text text="Cuenta donde quiero recibir el pago" textAlign="right" />
        <Text text="TDC ***334" textAlign="right" typography="title" fontSize={17} marginVertical={8} />
      </Container>
      <Container width="50%" style={{ marginLeft: 12 }}>
        <Text text="Cuenta destino" textAlign="left" />
        <Text text="CLABE ***531" typography="title" fontSize={17} marginVertical={8} />
        <Text text="Banco" textAlign="left" />
        <Text text="STP" typography="title" fontSize={17} marginVertical={8} />
        <Text text="Nombre" textAlign="left" />
        <Text text="Andrés Lara" typography="title" fontSize={17} marginVertical={8} />
        <Text text="Concepto" textAlign="left" />
        <Text text="Pago Viaje" typography="title" fontSize={17} marginVertical={8} />
      </Container>
    </Container>
    <Container />
    <Container style={{ margin: 16 }}>
      <Button
        label="Regresar"
        onPress={onDismiss}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.DarkSoul}
      />
      <Button
        label="Eliminar"
        onPress={onDelete}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.HotCoral}
        marginVertical={16}
      />
      <OptionButton
        onPress={onDismiss}
        width={55}
        height={55}
        borderRadius={15}
        backgroundColor={Theme.Colors.PlaceboBlue}
        marginHorizontal={5}
        label={i18n.t('global:share')}
        icon={<ExportIcon width={30} />}
      />
    </Container>
  </Container>
);

export default Component;
