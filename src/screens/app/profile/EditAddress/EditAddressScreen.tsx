import React from 'react';
import {
  Button,
  Container,
  Header,
  Input,
} from 'components';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import { CustomText } from 'components/atoms/CustomText';

interface Props {
  onSubmit: () => void;
}

const EditAddressScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Container flex useKeyboard>
      <Container style={{ marginTop: 30, marginBottom: 5 }}>
        <Header title={t('profile:editTitle')} />
        <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
          <Input label={t('profile:street')} onChangeText={undefined} value={undefined} />
          <Container row style={{ justifyContent: 'space-between' }}>
            <Input
              label={t('profile:interiorNumber')}
              onChangeText={undefined}
              value={undefined}
              width="48%"
            />
            <Input
              label={t('profile:outdoorNumber')}
              onChangeText={undefined}
              value={undefined}
              width="48%"
            />
          </Container>
          <Container row style={{ justifyContent: 'space-between' }}>
            <Input
              label={t('profile:zipCode')}
              onChangeText={undefined}
              value={undefined}
              width="48%"
            />
            <Input
              label={t('profile:colony')}
              onChangeText={undefined}
              value={undefined}
              width="48%"
            />
          </Container>
          <Container row style={{ justifyContent: 'space-between' }}>
            <Input
              label={t('profile:city')}
              onChangeText={undefined}
              value={undefined}
              width="48%"
            />
            <Input
              label={t('profile:state')}
              onChangeText={undefined}
              value={undefined}
              width="48%"
            />
          </Container>
          <CustomText
            text={t('profile:attachProofOfAddress')}
            textColor={Theme.Colors.Carbon}
            fontSize={11}
            fontWeight="Medium"
            marginBottom={4}
            marginTop={16}
          />
          <Button
            onPress={() => {}}
            label={t('profile:attachFile')}
            borderColor={Theme.Colors.PlaceboBlue}
            borderStyle
            colorless
          />
          <Button
            onPress={onSubmit}
            label={t('global:save')}
            marginTop={16}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default EditAddressScreen;
