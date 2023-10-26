import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, Container, ProfilePhoto, Text,
} from 'components';
import Theme from 'theme';

interface Props {
  contactName?: string;
  accountNumber?: string;
  onPressDelete: () => void;
  onPressCancel: () => void;
}

const SheetContentContactDelete: React.FC<Props> = ({
  contactName,
  accountNumber,
  onPressDelete = () => {},
  onPressCancel = () => {},
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <ProfilePhoto size={100} bottomStyle={{ marginTop: 0 }} fadeIn={false} />
      <Container center style={{ marginTop: 21 }}>
        <Text
          text={accountNumber
            ? t('contacts:deleteAccountMsg', { account: accountNumber })
            : t('contacts:deleteContactMsg', { contact: contactName })}
          fontWeight="Bold"
          textAlign="center"
        />
        <Text
          text={t('contacts:deleteDesc', { text: t(`contacts:this${accountNumber ? 'Account' : 'Contact'}`) })}
          marginTop={21}
          textAlign="center"
        />
      </Container>
      <Container center style={{ marginTop: 21 }}>
        <Button
          label={t('contacts:confirmationDelete')}
          textColor={Theme.Colors.White}
          fontWeight="Semibold"
          onPress={onPressDelete}
          backgroundColor={Theme.Colors.HotCoral}
        />
        <Button
          label={t('global:cancel')}
          textColor={Theme.Colors.DarkSoul}
          fontWeight="Semibold"
          onPress={onPressCancel}
          marginTop={21}
          backgroundColor={Theme.Colors.WhiteSmoke}
        />
      </Container>
    </Container>
  );
};

export default SheetContentContactDelete;
