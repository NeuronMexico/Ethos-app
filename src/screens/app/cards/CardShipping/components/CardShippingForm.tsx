import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button, CheckBoxField, Container, Input, Picker,
} from 'components';
import Theme from 'theme';
import { validations } from 'utils';
import { PinDropIcon } from 'assets/svg';

interface Props {
  onSubmit: () => void;
}

const CardShippingForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const externalNumberRef = useRef<TextInput>(null);
  const internalNumberRef = useRef<TextInput>(null);
  const postalCodeRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);
  const phoneRef = useRef<any>(null);
  const betweenStreetsRef = useRef<TextInput>(null);
  const referencesRef = useRef<TextInput>(null);

  const [useSameAsCreditCard, setUseSameAsCreditCard] = useState<boolean>(false);

  const [street, setStreet] = useState<string>('');
  const [streetError, setStreetError] = useState<string>('');

  const [externalNumber, setExternalNumber] = useState<string>('');
  const [externalNumberError, setExternalNumberError] = useState<string>('');

  const [internalNumber, setInternalNumber] = useState<string>('');

  const [postalCode, setPostalCode] = useState<string>('');
  const [postalCodeError, setPostalCodeError] = useState<string>('');

  const [neighborhood, setNeighborhood] = useState<string>('');
  const [neighborhoodError, setNeighborhoodError] = useState<string>('');

  const [state, setState] = useState<string>('');
  const [stateError, setStateError] = useState<string>('');

  const [betweenStreets, setBetweenStreets] = useState<string>('');
  const [betweenStreetsError, setBetweenStreetsError] = useState<string>('');

  const [references, setReferences] = useState<string>('');
  const [referencesError, setReferencesError] = useState<string>('');

  const [city, setCity] = useState<string>('');
  const [cityError, setCityError] = useState<string>('');

  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const streetValidation = (): boolean => {
    const validation = validations.required(street);
    if (validation.ok) {
      setStreetError('');
      return true;
    }

    setStreetError(t('errors:required'));
    return false;
  };

  const externalNumberValidation = (): boolean => {
    const validation = validations.required(externalNumber);
    if (validation.ok) {
      setExternalNumberError('');
      return true;
    }

    setExternalNumberError(t('errors:required'));
    return false;
  };

  const postalCodeValidation = (): boolean => {
    const validation = validations.integer(postalCode);
    if (validation.ok) {
      setPostalCodeError('');
      return true;
    }

    if (validation.error === 'required') setPostalCodeError(t('errors:required'));
    else setPostalCodeError(t('errors:invalidEmail'));

    return false;
  };

  const neighborhoodValidation = (): boolean => {
    const validation = validations.required(neighborhood);
    if (validation.ok) {
      setNeighborhoodError('');
      return true;
    }

    setNeighborhoodError(t('errors:required'));
    return false;
  };

  const stateValidation = (): boolean => {
    const validation = validations.alphabet(state);
    if (validation.ok) {
      setStateError('');
      return true;
    }

    if (validation.error === 'required') setStateError(t('errors:required'));
    else setStateError(t('errors:invalidEmail'));

    return false;
  };

  const cityValidation = (): boolean => {
    const validation = validations.alphabet(city);
    if (validation.ok) {
      setCityError('');
      return true;
    }

    if (validation.error === 'required') setCityError(t('errors:required'));
    else setCityError(t('errors:invalidEmail'));

    return false;
  };

  const betweenStreetsValidation = (): boolean => {
    const validation = validations.required(betweenStreets);
    if (validation.ok) {
      setBetweenStreetsError('');
      return true;
    }

    if (validation.error === 'required') setBetweenStreetsError(t('errors:required'));

    return false;
  };

  const referencesValidation = (): boolean => {
    const validation = validations.required(references);
    if (validation.ok) {
      setReferencesError('');
      return true;
    }

    if (validation.error === 'required') setReferencesError(t('errors:required'));

    return false;
  };

  const phoneValidation = (): boolean => {
    const validation = validations.phone(phone);
    if (validation.ok) {
      setPhoneError('');
      return true;
    }

    if (validation.error === 'required') setPhoneError(t('errors:required'));
    else setPhoneError(t('errors:invalidEmail'));

    return false;
  };

  return (
    <Container flex>
      <CheckBoxField
        label={t('cards:useSameAsCreditCard')}
        selected={useSameAsCreditCard}
        onChange={setUseSameAsCreditCard}
        marginVertical={16}
      />

      <Button
        label={t('cards:useMyCurrentLocation')}
        onPress={() => {}}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.DarkSoul}
        icon={<PinDropIcon />}
        androidRippleColor={Theme.Colors.DarkSoul}
      />

      <Input
        label={t('cards:street')}
        value={street}
        onChangeText={setStreet}
        autoCapitalize="words"
        autoComplete="address-line1"
        autoCorrect
        blurOnSubmit={false}
        error={streetError}
        onSubmitEditing={() => streetValidation() && externalNumberRef.current?.focus()}
      />

      <Container row>
        <Container flex style={{ marginRight: 9 }}>
          <Input
            ref={externalNumberRef}
            label={t('cards:externalNumber')}
            value={externalNumber}
            onChangeText={setExternalNumber}
            keyboardType="numbers-and-punctuation"
            blurOnSubmit={false}
            error={externalNumberError}
            onSubmitEditing={() => externalNumberValidation() && internalNumberRef.current?.focus()}
          />
        </Container>
        <Container flex style={{ marginLeft: 9 }}>
          <Input
            ref={internalNumberRef}
            label={t('cards:internalNumber')}
            value={internalNumber}
            onChangeText={setInternalNumber}
            keyboardType="numbers-and-punctuation"
            blurOnSubmit={false}
            onSubmitEditing={() => postalCodeRef.current?.focus()}
          />
        </Container>
      </Container>

      <Container row>
        <Container flex style={{ marginRight: 9 }}>
          <Input
            ref={postalCodeRef}
            label={t('cards:postalCode')}
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="numeric"
            autoComplete="postal-code"
            blurOnSubmit={false}
            error={postalCodeError}
            onSubmitEditing={() => postalCodeValidation() && postalCodeRef.current?.blur()}
          />
        </Container>
        <Container flex style={{ marginLeft: 9 }}>
          <Picker
            label={t('cards:neighborhood')}
            placeholder=""
            value={neighborhood}
            onValueChange={setNeighborhood}
            options={[]}
            borderRadius={24}
            backgroundColor={Theme.Colors.PlaceboBlue}
            error={neighborhoodError}
          />
        </Container>
      </Container>

      <Container row>
        <Container flex style={{ marginRight: 9 }}>
          <Input
            label={t('cards:state')}
            value={state}
            onChangeText={setState}
            autoCapitalize="words"
            autoComplete="postal-address-locality"
            autoCorrect
            blurOnSubmit={false}
            error={stateError}
            onSubmitEditing={() => stateValidation() && cityRef.current?.focus()}
          />
        </Container>
        <Container flex style={{ marginLeft: 9 }}>
          <Input
            ref={cityRef}
            label={t('cards:city')}
            value={city}
            onChangeText={setCity}
            autoCapitalize="words"
            autoComplete="postal-address-region"
            autoCorrect
            blurOnSubmit={false}
            error={cityError}
            onSubmitEditing={() => cityValidation() && betweenStreetsRef.current?.focus()}
          />
        </Container>
      </Container>

      <Input
        ref={betweenStreetsRef}
        label={t('cards:betweenStreets')}
        value={betweenStreets}
        onChangeText={setBetweenStreets}
        autoCorrect
        autoCapitalize="words"
        blurOnSubmit={false}
        error={betweenStreetsError}
        onSubmitEditing={() => betweenStreetsValidation() && referencesRef.current?.focus()}
      />

      <Input
        ref={referencesRef}
        label={t('cards:references')}
        value={references}
        onChangeText={setReferences}
        autoCorrect
        autoCapitalize="sentences"
        blurOnSubmit={false}
        error={referencesError}
        onSubmitEditing={() => referencesValidation() && phoneRef.current?.getElement()?.focus()}
      />

      <Input
        ref={phoneRef}
        label={t('cards:contactPhoneNumber')}
        value={phone}
        onChangeText={setPhone}
        autoCorrect
        keyboardType="phone-pad"
        autoComplete="tel"
        mask="custom"
        options={{ mask: '+52 (999) 999 9999' }}
        maxLength={14}
        blurOnSubmit={false}
        error={phoneError}
        onSubmitEditing={() => phoneValidation() && phoneRef.current?.getElement()?.blur()}
      />

      <Container flex alignment="end">
        <Button label={(t('global:continue'))} onPress={onSubmit} marginVertical={16} />
      </Container>
    </Container>
  );
};

export { CardShippingForm };
