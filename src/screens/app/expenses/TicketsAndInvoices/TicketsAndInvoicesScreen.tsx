import React from 'react';
import {
  Button,
  Container, Header, MultipleTextButton,
} from 'components';
import { CustomText as Text } from 'components/atoms/CustomText';
import Theme from 'theme';
import { MessageDotsIcon } from 'assets/svg';
import { useTranslation } from 'react-i18next';

interface Props {
  item: any;
  onPressUploadFile: () => void;
}

const TicketsAndInvoicesScreen: React.FC<Props> = ({ item, onPressUploadFile }) => {
  const { t } = useTranslation();

  return (
    <Container style={{ flex: 2 }}>
      <Header
        title={t('ticketsAndInvoices:title')}
        rightAction={() => {}}
        rightIcon={<MessageDotsIcon />}
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <MultipleTextButton
          onPress={() => {}}
          title={item?.title}
          label={item?.description}
          rightText={item?.amount}
          rightTextColor={item?.description === 'Pago TDC' ? Theme.Colors.SpringBouquet : ''}
          barColor={item?.color}
          alignContent="space-between"
          marginTop={32}
        />
        <Button
          onPress={() => {}}
          label={t('ticketsAndInvoices:add')}
          backgroundColor={Theme.Colors.WhiteSmoke}
          textColor={Theme.Colors.DarkSoul}
        />
        <Container row style={{ marginTop: 16, justifyContent: 'space-between' }}>
          <Button onPress={() => onPressUploadFile()} label={t('ticketsAndInvoices:uploadTicket')} width={190} />
          <Button onPress={() => onPressUploadFile()} label={t('ticketsAndInvoices:uploadInvoice')} width={190} />
        </Container>
        <Container row style={{ marginTop: 16, justifyContent: 'space-between' }}>
          <Container>
            <Text
              text={t('ticketsAndInvoices:ticket')}
              textColor={Theme.Colors.GreatFalls}
              marginVertical={16}
              typography="header"
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:ticket')}1`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:ticket')}2`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:ticket')}3`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:ticket')}4`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
          </Container>
          <Container>
            <Text
              text={t('ticketsAndInvoices:invoice')}
              textColor={Theme.Colors.GreatFalls}
              marginVertical={16}
              typography="header"
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:invoice')}1`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:invoice')}2`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:invoice')}3`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
            <Button
              onPress={() => {}}
              label={`${t('ticketsAndInvoices:invoice')}4`}
              backgroundColor="transparent"
              borderColor={Theme.Colors.EyeBlue}
              textColor={Theme.Colors.DarkSoul}
              width={190}
              marginVertical={8}
            />
          </Container>
        </Container>
        <Container style={{
          display: 'flex', alignContent: 'flex-end', position: 'relative', justifyContent: 'flex-end',
        }}
        >
          <Button onPress={() => {}} label={t('global:save')} marginTop={100} />
        </Container>
      </Container>
    </Container>
  );
};

export default TicketsAndInvoicesScreen;
