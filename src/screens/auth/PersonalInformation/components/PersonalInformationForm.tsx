import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, DateTimePicker, Input, Picker,
} from 'components';

interface Props {
  props?: any;
}

const PersonalInformationForm: React.FC<Props> = ({
  props,
}: Props) => {
  const { t } = useTranslation();

  const nameRef = useRef<TextInput>(null);
  const firstLastNameRef = useRef<TextInput>(null);
  const secondLastNameRef = useRef<TextInput>(null);

  const rfcRef = useRef<TextInput>(null);
  const curpRef = useRef<TextInput>(null);

  const [name, setName] = useState<string>('');
  const [firstLastName, setFirstLastName] = useState<string>('');
  const [secondLastName, setSecondLastName] = useState<string>('');
  const [birth, setBirth] = useState<Date>();
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [genre, setGenre] = useState<string>('');

  const [rfc, setRfc] = useState<string>('');
  const [curp, setCurp] = useState<string>('');

  return (
    <Container flex>
      <Input
        label={t('form:names')}
        returnKeyType="next"
        onSubmitEditing={() => firstLastNameRef.current?.focus()}
        blurOnSubmit={false}
        ref={nameRef}
        onChangeText={setName}
        value={name}
      />
      <Input
        label={t('form:firstLastName')}
        returnKeyType="next"
        onSubmitEditing={() => secondLastNameRef.current?.focus()}
        blurOnSubmit={false}
        ref={firstLastNameRef}
        onChangeText={setFirstLastName}
        value={firstLastName}
      />
      <Input
        label={t('form:secondLastName')}
        returnKeyType="next"
        onSubmitEditing={() => rfcRef.current?.focus()}
        blurOnSubmit={false}
        ref={secondLastNameRef}
        onChangeText={setSecondLastName}
        value={secondLastName}
      />
      <DateTimePicker
        label={t('form:birth')}
        value={birth}
        onValueChange={setBirth}
        placeholder={t('form:birthCaption')}
      />
      <Picker
        label={t('form:countryOfBirth')}
        value={country}
        onValueChange={setCountry}
        placeholder={t('form:countryOfBirthCaption')}
        options={[
          { label: 'Mexico', value: 'MX' },
          { label: 'United States', value: 'US' },
        ]}
      />
      <Picker
        label={t('form:stateOfBirth')}
        value={state}
        onValueChange={setState}
        placeholder={t('form:stateOfBirthCaption')}
        options={[
          { label: 'Ciudad de México', value: 'CDMX' },
          { label: 'Nuevo León', value: 'NL' },
        ]}
      />
      <Picker
        label={t('form:genre')}
        value={genre}
        onValueChange={setGenre}
        placeholder={t('form:genreCaption')}
        options={[
          { label: 'Masculino', value: 'M' },
          { label: 'Femenino', value: 'F' },
        ]}
      />
      <Input
        label={t('form:rfc')}
        returnKeyType="next"
        onSubmitEditing={() => curpRef.current?.focus()}
        blurOnSubmit={false}
        ref={rfcRef}
        onChangeText={setRfc}
        value={rfc}
      />
      <Input
        label={t('form:curp')}
        returnKeyType="done"
        ref={curpRef}
        onChangeText={setCurp}
        value={curp}
      />
    </Container>
  );
};

export default PersonalInformationForm;
