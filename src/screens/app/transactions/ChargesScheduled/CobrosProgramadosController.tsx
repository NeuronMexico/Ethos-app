import {
  Alert,
  AlertDataInterface,
  Container, SafeArea, Text,
} from 'components';
import { useAlert } from 'context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

const CobrosProgramadosController = () => {
  const { t } = useTranslation();
  const alert = useAlert();

  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<AlertDataInterface>();

  const handleDelete = () => {
    alert.show({
      reference: '58432',
      invoice: '12345',
      date: new Date(),
      title: 'Cobro programado eliminado correctamente',
      checkmark: true,
      extraInfo: (
        <Container>
          <Text text="Destinatario" marginTop={5} />
          <Text text="Andrés Lara" fontSize={17} fontWeight="Bold" marginBottom={5} />
          <Text text="Banco" marginTop={5} />
          <Text text="STP" fontSize={17} fontWeight="Bold" marginBottom={5} />
          <Text text="Concepto" marginTop={5} />
          <Text text="Pago de Viaje" fontSize={17} fontWeight="Bold" marginBottom={5} />
        </Container>
      ),
      actions: [{
        label: 'Aceptar',
        type: 'primary',
        onPress: alert.hide,
      }],
    });
  };

  const onDelete = () => {
    setVisible(false);
    alert.show({
      title: '¿Estás seguro eliminar el cobro programado?',
      actions: [
        {
          label: 'Eliminar',
          type: 'destructive-primary',
          onPress: () => {
            handleDelete();
          },
        },
        {
          label: 'Cancelar',
          type: 'secondary',
          onPress: () => alert.hide(),
        },
      ],
      extraInfo: (
        <Container center>
          <Text text="Destinatario" marginTop={5} />
          <Text text="Andrés Lara" fontSize={17} fontWeight="Bold" marginBottom={5} />
          <Text text="Banco" marginTop={5} />
          <Text text="STP" fontSize={17} fontWeight="Bold" marginBottom={5} />
          <Text text="Concepto" marginTop={5} />
          <Text text="Pago de Viaje" fontSize={17} fontWeight="Bold" marginBottom={5} />
          <Text text="Referencia" marginTop={5} />
          <Text text="58432" fontSize={17} fontWeight="Bold" marginBottom={5} />
        </Container>
      ),
    });
  };

  return (
    <SafeArea>
      
      
    </SafeArea>
  );
};

export default CobrosProgramadosController;
