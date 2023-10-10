import React from 'react';
import { Button, Container, Text } from 'components';
import { useTranslation } from 'react-i18next';
import { formatDate, formatQuantity } from 'utils';
import Theme from 'theme';
import { FileUploadIcon, ShieldIcon } from 'assets/svg';
import { CardAction } from './CardAction';

interface Props {
  prop?: string
}

const TransactionBottomSheetContent: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Container middle>
      <Text text={formatDate(new Date())} typography="subtitle" transform="capitalize" />
      <Text text={formatQuantity(2500)} fontSize={34} fontWeight="Bold" marginVertical={20} />
      <Text text="Pago de tarjeta de crédito" typography="subtitle" fontWeight="Bold" marginBottom={12} />

      <Container row>
        <Container middle style={{ marginRight: 16 }}>
          <Text text={t('cards:withdrawalAccount')} typography="subtitle" />
          <Text text="** 334" typography="subtitle" fontWeight="Bold" marginTop={8} />
        </Container>
        <Container middle style={{ marginLeft: 16 }}>
          <Text text={t('cards:state')} typography="subtitle" />
          <Text text="Autorizado" typography="subtitle" fontWeight="Bold" marginTop={8} />
        </Container>
      </Container>

      <Container>
        <Button
          label={t('cards:assignTags')}
          backgroundColor={Theme.Colors.PlaceboBlue}
          textColor={Theme.Colors.DarkSoul}
          paddingHorizontal={32}
          marginVertical={13}
          onPress={() => {}}
        />
      </Container>

      <Container row width="100%" style={{ marginBottom: 16 }}>
        <Container flex style={{ marginRight: 6 }}>
          <Button
            label={t('cards:uploadTicket')}
            colorless
            borderStyle
            borderColor={Theme.Colors.NimbusCloud}
            icon={<FileUploadIcon />}
            paddingVertical={10}
            onPress={() => {}}
          />
        </Container>
        <Container flex style={{ marginLeft: 6 }}>
          <Button
            label={t('cards:uploadInvoice')}
            colorless
            borderStyle
            borderColor={Theme.Colors.NimbusCloud}
            icon={<FileUploadIcon />}
            paddingVertical={10}
            onPress={() => {}}
          />
        </Container>
      </Container>

      <CardAction
        label={t('cards:reportMovement')}
        onPress={() => {}}
        icon={<ShieldIcon width={24} height={24} />}
        width={85}
      />
    </Container>
  );
};

export { TransactionBottomSheetContent };
