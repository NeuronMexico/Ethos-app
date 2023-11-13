import React from 'react';
import {
  Button, Container, OptionButton, Text,
} from 'components';
import { formatQuantity } from 'utils';
import i18n from 'i18n';
import Theme from 'theme';
import { ExportIcon } from 'assets/svg';

interface Props {
  amount: number;
  showButtons?: boolean;
  onPressBack?: () => void;
  onPressOptionButton?: () => void;
}

const ComponentInfo: React.FC<Props> = ({
  amount,
  showButtons = false,
  onPressBack = () => {},
  onPressOptionButton = () => {},
}: Props) => (
  <Container>
    <Text
      text={formatQuantity(Number(amount))}
      textAlign="center"
      fontWeight="Bold"
      typography="header"
      fontSize={34}
    />
    <Container row>
      <Container width="50%" style={{ marginRight: 12 }}>
        <Text text={i18n.t('form:accountWhereChargesWillBeMade')} textAlign="right" />
        <Text text="TDC ***334" textAlign="right" typography="title" fontSize={17} marginVertical={8} />
      </Container>
      <Container width="50%" style={{ marginLeft: 12 }}>
        <Text text={i18n.t('form:destinationAccount')} textAlign="left" />
        <Text text="CLABE ***531" typography="title" fontSize={17} marginVertical={8} />
        <Text text={i18n.t('form:bank')} textAlign="left" />
        <Text text="STP" typography="title" fontSize={17} marginVertical={8} />
        <Text text={i18n.t('form:name')} textAlign="left" />
        <Text text="Andrés Lara" typography="title" fontSize={17} marginVertical={8} />
        <Text text={i18n.t('form:concept')} textAlign="left" />
        <Text text="Pago Viaje" typography="title" fontSize={17} marginVertical={8} />
      </Container>
    </Container>
    {
      showButtons && (
        <Container style={{ margin: 16 }}>
          <Button
            label={i18n.t('global:back')}
            onPress={onPressBack}
            backgroundColor={Theme.Colors.WhiteSmoke}
            textColor={Theme.Colors.DarkSoul}
            marginVertical={16}
          />
          <OptionButton
            onPress={onPressOptionButton}
            width={55}
            height={55}
            borderRadius={15}
            backgroundColor={Theme.Colors.PlaceboBlue}
            marginHorizontal={5}
            label={i18n.t('global:share')}
            icon={<ExportIcon width={30} />}
          />
        </Container>
      )
    }
  </Container>
);

export { ComponentInfo };
