import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Input, Picker } from 'components';

interface Props {
  props?: any;
}

const ResidenceInformationForm: React.FC<Props> = ({
  props,
}: Props) => {
  const { t } = useTranslation();

  const streetRef = useRef<TextInput>(null);
  const interiorNumberRef = useRef<TextInput>(null);
  const exteriorNumberRef = useRef<TextInput>(null);
  const zipCodeRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);
  const stateRef = useRef<TextInput>(null);

  const [street, setStreet] = useState<string>('');
  const [interiorNumber, setInteriorNumber] = useState<string>('');
  const [exteriorNumber, setExteriorNumber] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');

  return (
    <Container flex>
      <Input
        label={t('form:street')}
        returnKeyType="next"
        onSubmitEditing={() => interiorNumberRef.current?.focus()}
        blurOnSubmit={false}
        ref={streetRef}
        onChangeText={setStreet}
        value={street}
      />
      <Input
        label={t('form:interiorNumber')}
        returnKeyType="next"
        onSubmitEditing={() => exteriorNumberRef.current?.focus()}
        blurOnSubmit={false}
        ref={interiorNumberRef}
        onChangeText={setInteriorNumber}
        value={interiorNumber}
      />
      <Input
        label={t('form:exteriorNumber')}
        returnKeyType="next"
        onSubmitEditing={() => zipCodeRef.current?.focus()}
        blurOnSubmit={false}
        ref={exteriorNumberRef}
        onChangeText={setExteriorNumber}
        value={exteriorNumber}
      />
      <Input
        label={t('form:zipCode')}
        returnKeyType="next"
        onSubmitEditing={() => cityRef.current?.focus()}
        blurOnSubmit={false}
        ref={zipCodeRef}
        onChangeText={setZipCode}
        value={zipCode}
      />
      <Picker
        label={t('form:neighborhood')}
        value={neighborhood}
        onValueChange={setNeighborhood}
        placeholder={t('form:neighborhoodCaption')}
        options={[
          { label: 'Valle Dorado', value: 'VD' },
        ]}
      />
      <Input
        label={t('form:city')}
        returnKeyType="next"
        onSubmitEditing={() => stateRef.current?.focus()}
        blurOnSubmit={false}
        ref={cityRef}
        onChangeText={setCity}
        value={city}
      />
      <Input
        label={t('form:state')}
        returnKeyType="done"
        ref={stateRef}
        onChangeText={setState}
        value={state}
      />
    </Container>
  );
};

export default ResidenceInformationForm;
