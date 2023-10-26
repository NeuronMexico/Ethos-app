import { ChevronDownIcon } from 'assets/svg';
import {
  Button, Container, ProfilePhoto, Text,
} from 'components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { maskAccountNumber } from 'utils';

interface Props {
  contact: any;
  onPressPay?: () => void;
  onPressCollect?: () => void;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
  onPressAccounts?: () => void;
}

const SheetContentContactDetail: React.FC<Props> = ({
  contact,
  onPressPay = () => {},
  onPressCollect = () => {},
  onPressEdit = () => {},
  onPressDelete = () => {},
  onPressAccounts = () => {},
}: Props) => {
  const { t } = useTranslation();

  const [selectedAccount, setSelectedAccount] = useState<{
    id: number;
    number: string;
    bank: string;
  } | undefined>(contact.accounts ? contact.accounts[0] : undefined);

  return (
    <Container flex style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <ProfilePhoto size={100} bottomStyle={{ marginTop: 0 }} />
      <Container center style={{ marginTop: 21 }}>
        <Text text={contact.alias} typography="title" fontWeight="Semibold" />
        <Text text={contact.name} fontSize={16} fontWeight="Medium" marginVertical={4} />
        <Text text={contact.email} fontSize={16} fontWeight="Medium" />
      </Container>
      <Container center style={{ marginVertical: Theme.Sizes.Padding }}>
        <Text text={t('form:phone')} typography="body" />
        <Text text={contact.phone} typography="body" fontWeight="Bold" marginTop={8} />
      </Container>
      {selectedAccount && (
        <Container>
          <Container style={{
            maxWidth: 120,
            alignSelf: 'center',
          }}
          >
            <Button
              colorless
              height={44}
              label={maskAccountNumber(selectedAccount.number)}
              textColor={Theme.Colors.DarkSoul}
              fontSize={13}
              onPress={onPressAccounts}
              borderColor={Theme.Colors.SparklingFrost}
              paddingHorizontal={16}
              paddingVertical={12}
              icon={contact.accounts.length > 0 ? <ChevronDownIcon width={16} height={16} /> : undefined}
            />
          </Container>
          <Container center style={{ marginTop: Theme.Sizes.Padding }}>
            <Text text={t('form:bank')} typography="body" />
            <Text text={selectedAccount.bank} typography="body" fontWeight="Bold" marginTop={8} />
          </Container>
        </Container>
      )}
      <Container center style={{ marginTop: 21 }}>
        <Container row space="between">
          <Container flex style={{ marginRight: 7 }}>
            <Button label={t('contacts:pay')} onPress={onPressPay} />
          </Container>
          <Container flex style={{ marginLeft: 7 }}>
            <Button label={t('contacts:collect')} onPress={onPressCollect} />
          </Container>
        </Container>
        <Button
          label={t('global:edit')}
          textColor={Theme.Colors.DarkSoul}
          fontWeight="Semibold"
          onPress={onPressEdit}
          marginVertical={21}
          backgroundColor={Theme.Colors.WhiteSmoke}
        />
        <Button
          label={t('contacts:deleteContact')}
          textColor={Theme.Colors.HotCoral}
          fontWeight="Semibold"
          onPress={onPressDelete}
          backgroundColor={Theme.Colors.WhiteSmoke}
        />
      </Container>
    </Container>
  );
};

export default SheetContentContactDetail;
