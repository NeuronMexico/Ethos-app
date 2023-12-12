import { VisaIcon } from 'assets/svg';
import {
  Button, Container, Input, Picker,
} from 'components';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import Theme from 'theme';
import { formatQuantity } from 'utils';

interface Props {
  onSubmit: (data: any) => void;
}

const WithdrawalNoCardForm: React.FC<Props> = ({
  onSubmit = () => {},
}: Props) => {
  const { t } = useTranslation();

  const accountRef = useRef<TextInput>(null);
  const bankRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const conceptRef = useRef<TextInput>(null);

  const [account, setAccount] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [concept, setConcept] = useState<string>('');
  const [card, setCard] = useState<string>('');

  const submit = () => {
    onSubmit({
      account,
      bank,
      name,
      concept,
      card,
    });
  };

  return (
    <Container flex>
      <Input
        ref={accountRef}
        label={t('cards:accountWhereChargesWillBeMade')}
        value={account}
        placeholder="**** **** **** ******"
        onChangeText={setAccount}
      />
      <Input
        ref={bankRef}
        label={t('cards:bank')}
        value={bank}
        onChangeText={setBank}
      />
      <Input
        ref={nameRef}
        value={name}
        onChangeText={setName}
        label={t('form:names')}
      />
      <Input
        ref={conceptRef}
        label={t('form:concept')}
        placeholder={t('form:concept')}
        onChangeText={setConcept}
        value={concept}
        marginTop={24}
      />
      <Container style={{ height: 1, backgroundColor: Theme.Colors.PlaceboBlue, marginTop: 16 }} />
      <Picker
        title="TDC ethoscrédito"
        label={t('form:cardWhereTouWantToReceiveCollect')}
        options={[
          { label: 'Santander', value: '*** 3123' },
        ]}
        placeholder=""
        borderRadius={24}
        backgroundColor={Theme.Colors.DrWhite}
        prefixIcon={(
          <VisaIcon />
        )}
        useActionSheet
        actionSheetTitle={t('transactions:whatCard')}
        caption="**** **** **** 4531"
        marginLeft={24}
        value={formatQuantity(16801.08)}
        onValueChange={setCard}
        labelWithValue
      />
      <Container style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        <Button
          label={t('global:continue')}
          onPress={submit}
          marginVertical={16}
        />
      </Container>
    </Container>
  );
};

export { WithdrawalNoCardForm };
