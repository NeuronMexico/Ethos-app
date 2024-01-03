import React, { useEffect, useRef, useState } from 'react';
import {
  Animated, ScrollView, TextInput,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useTranslation } from 'react-i18next';

import {
  BankAccountCard,
  Button,
  CheckBox, Container, Input, ProfilePhoto, Text,
} from 'components';
import { fieldValidation, validations } from 'utils';
import Theme from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKeyboard } from 'hooks';
import { LessIcon, MoreIcon } from 'assets/svg';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

interface Props {
  contact?: any;
  onPressEditPhoto?: () => void;
  onPressAddAccount?: () => void;
  onPressDeleteAccount?: (id: number) => void;
  onSubmit?: (data: any, newContact?: boolean) => void;
}

const ContactForm: React.FC<Props> = ({
  contact,
  onPressEditPhoto,
  onPressAddAccount = () => {},
  onPressDeleteAccount = () => {},
  onSubmit,
}: Props) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { isShown } = useKeyboard();

  const nameRef = useRef<TextInput>(null);
  const firstLastNameRef = useRef<TextInput>(null);
  const secondLastNameRef = useRef<TextInput>(null);

  const aliasRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<any>(null);

  const maxAmountRef = useRef<TextInput>(null);
  const accountNumberRef = useRef<TextInput>(null);
  const bankRef = useRef<TextInput>(null);

  const [name, setName] = useState<string>(contact?.name || '');
  const [firstLastName, setFirstLastName] = useState<string>(contact?.firstLastName || '');
  const [secondLastName, setSecondLastName] = useState<string>(contact?.secondLastName || '');
  const [alias, setAlias] = useState<string>(contact?.alias || '');
  const [email, setEmail] = useState<string>(contact?.email || '');
  const [phone, setPhone] = useState<string>(contact?.phone || '');
  const [maxAmount, setMaxAmount] = useState<string>(contact?.maxAmount || '');
  const [accountNumber, setAccountNumber] = useState<string>(contact?.accountNumber || '');
  const [bank, setBank] = useState<string>(contact?.bank || '');

  const [nameError, setNameError] = useState<string>('');
  const [firstLastNameError, setFirstLastNameError] = useState<string>('');
  const [secondLastNameError, setSecondLastNameError] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const [accountNumberError, setAccountNumberError] = useState<string>('');
  const [bankError, setBankError] = useState<string>('');

  const [opacity] = useState<Animated.Value>(new Animated.Value(0));
  const [height] = useState<Animated.Value>(new Animated.Value(45));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isShown ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();

    Animated.timing(height, {
      toValue: isShown ? 0 : 45,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [height, isShown, opacity]);

  const nameValidation = (): boolean => fieldValidation('name', name, setNameError);
  const firstLastNameValidation = (): boolean => fieldValidation('firstLastName', firstLastName, setFirstLastNameError);
  const secondLastNameValidation = (): boolean => fieldValidation('secondLastName', secondLastName, setSecondLastNameError);

  const emailValidation = (): boolean => {
    const validation = validations.email(email);
    if (validation.ok) {
      setEmailError('');
      return true;
    }

    if (validation.error === 'required') setEmailError(t('errors:required'));
    else setEmailError(t('errors:invalidFormat'));

    return false;
  };

  const phoneValidation = (): boolean => {
    const validation = validations.phone(phone);
    if (validation.ok) {
      setPhoneError('');
      return true;
    }

    if (validation.error === 'required') setPhoneError(t('errors:required'));
    else setPhoneError(t('errors:invalidFormat'));

    return false;
  };

  const accountValidation = (): boolean => {
    let validation = validations.cardNumber(accountNumber);
    if (validation.ok) {
      setAccountNumberError('');
      return true;
    }

    validation = validations.clabeNumber(accountNumber);
    if (validation.ok) {
      setAccountNumberError('');
      return true;
    }

    if (validation.error === 'required') setAccountNumberError(t('errors:required'));
    else setAccountNumberError(t('errors:invalidFormat'));

    return false;
  };
  const bankValidation = (): boolean => fieldValidation('bank', bank, setBankError);

  const submit = async () => {
    // const nameOk = nameValidation();
    // const firstLastNameOk = firstLastNameValidation();
    // const secondLastNameOk = secondLastNameValidation();
    // const emailOk = emailValidation();
    // const phoneOk = phoneValidation();
    // const accountOk = accountValidation();
    // const bankOk = bankValidation();

    // TODO: WHEN IMPLEMENTATION STARTS
    // if (nameOk && firstLastNameOk && secondLastNameOk && emailOk && phoneOk && accountOk && bankOk) {
    //   const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    //   if (onSubmit && result.success) {
    //     onSubmit({
    //       name,
    //       firstLastName,
    //       secondLastName,
    //       alias,
    //       email,
    //       phone,
    //       maxAmount,
    //       accountNumber,
    //       bank,
    //     });
    //   }
    // }
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (onSubmit && result.success) {
      onSubmit({
        name,
        firstLastName,
        secondLastName,
        alias,
        email,
        phone,
        maxAmount,
        accountNumber,
        bank,
      }, !contact);
    }
  };

  const NEW_ACCOUNT = (
    <>
      {/* <Input
        ref={accountNumberRef}
        value={accountNumber}
        onChangeText={setAccountNumber}
        error={accountNumberError}
        label={t('form:account')}
        keyboardType="numeric"
        onSubmitEditing={() => accountValidation() && bankRef.current?.focus()}
      /> */}
      <Input
        ref={accountNumberRef}
        label={t('form:account')}
        placeholder=""
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
        error={accountNumberError}
        mask="custom"
        options={{ mask: accountNumber.length <= 17 ? '9999 999999 999999' : '9999 9999 9999 999999' }}
        maxLength={21}
        blurOnSubmit={false}
        onSubmitEditing={() => accountValidation() && bankRef.current?.focus()}
      />
      <Input
        ref={bankRef}
        value={bank}
        onChangeText={setBank}
        error={bankError}
        label={t('form:bank')}
        onSubmitEditing={() => bankValidation() && bankRef.current?.blur()}
      />
    </>
  );

  const renderAccounts = () => (
    <Container flex>
      <Container center row space="between" style={{ marginVertical: Theme.Sizes.Padding }}>
        <Text text={t('contacts:registeredAccounts')} textColor={Theme.Colors.Carbon} fontSize={11} />
        <Button
          onPress={onPressAddAccount}
          width={40}
          height={40}
          borderRadius={15}
          backgroundColor={Theme.Colors.PlaceboBlue}
          marginHorizontal={5}
          icon={<MoreIcon />}
          colorless
        />
      </Container>
      {contact.accounts.map((account: any) => (
        <BankAccountCard
          key={account.id}
          onPress={() => onPressDeleteAccount(account.id)}
          backgroundColor={Theme.Colors.PlaceboBlue}
          textNumbers="4443 3223 6544 645344"
          label="CLABE Santander"
          icon={<LessIcon />}
          labelAlignment="bottom"
          paddingVertical={0}
          marginBottom={16}
        />
      ))}
    </Container>
  );

  return (
    <Container useKeyboard flex>
      <ScrollView
        style={{ flex: 1, paddingTop: Theme.Sizes.Padding, marginTop: Theme.Sizes.Padding }}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: Theme.Sizes.Padding, paddingBottom: insets.bottom + 16 }}
      >
        <Container flex>
          <ProfilePhoto
            size={90}
            editable
            info={{
              name,
              lastName: `${firstLastName} ${secondLastName}`,
            }}
            onPress={onPressEditPhoto}
          />
          <Input
            ref={nameRef}
            value={name}
            onChangeText={setName}
            error={nameError}
            label={t('form:names')}
            onSubmitEditing={() => nameValidation() && firstLastNameRef.current?.focus()}
          />
          <Input
            ref={firstLastNameRef}
            value={firstLastName}
            onChangeText={setFirstLastName}
            error={firstLastNameError}
            label={t('form:firstLastName')}
            onSubmitEditing={() => firstLastNameValidation() && secondLastNameRef.current?.focus()}
          />
          <Input
            ref={secondLastNameRef}
            value={secondLastName}
            onChangeText={setSecondLastName}
            error={secondLastNameError}
            label={t('form:secondLastName')}
            onSubmitEditing={() => secondLastNameValidation() && aliasRef.current?.focus()}
          />
          <Input
            ref={aliasRef}
            value={alias}
            onChangeText={setAlias}
            label={t('form:alias')}
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <Input
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
            error={emailError}
            label={t('form:email')}
            keyboardType="email-address"
            blurOnSubmit={false}
            onSubmitEditing={() => emailValidation() && phoneRef.current?.getElement()?.focus()}
          />
          <Input
            ref={phoneRef}
            label={t('form:phone')}
            value={phone}
            onChangeText={setPhone}
            autoCorrect
            keyboardType="phone-pad"
            mask="custom"
            options={{ mask: '+52 (999) 999 9999' }}
            maxLength={14}
            blurOnSubmit={false}
            error={phoneError}
            onSubmitEditing={() => phoneValidation() && maxAmountRef.current?.focus()}
          />
          <Container center row style={{ marginTop: Theme.Sizes.Padding }}>
            <CheckBox selected />
            <Text text={t('form:maxAmount')} textColor={Theme.Colors.Carbon} fontSize={11} marginLeft={8} />
          </Container>
          <Input
            ref={maxAmountRef}
            value={maxAmount}
            onChangeText={setMaxAmount}
            keyboardType="decimal-pad"
            onSubmitEditing={() => accountNumberRef.current?.focus()}
            marginTop={4}
          />
          {
            contact?.accounts
              ? renderAccounts()
              : NEW_ACCOUNT
          }
        </Container>
      </ScrollView>
      <Animated.View style={{
        opacity,
        height,
        marginHorizontal: Theme.Sizes.Padding,
        marginVertical: Theme.Sizes.Padding,
      }}
      >
        <Button
          label={t('global:save')}
          onPress={submit}
          disabled={isShown}
        />
      </Animated.View>
    </Container>
  );
};

export default ContactForm;
