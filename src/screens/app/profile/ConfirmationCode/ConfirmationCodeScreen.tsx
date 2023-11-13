import React from 'react';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import {
  Container, Text, Touchable,
} from 'components/atoms';
import { Button, Header, InputCode } from 'components/molecules';

interface Props {
  onSubmit: () => void;
  value: string;
  type: string;
}

const ConfirmationCodeScreen:React.FC<Props> = ({ type, value, onSubmit }) => {
  const { t } = useTranslation();

  const translatedType = t(`profile:${type}`);

  return (
    <Container flex style={{ gap: 16, paddingHorizontal: Theme.Sizes.Padding }}>
      <Header title={t(`profile:${type}Title`)} />
      <Text
        text={t('profile:instructionEnterCode', { type: translatedType, value })}
        typography="subtitle"
        textColor={Theme.Colors.Carbon}
        fontSize={18}
        marginTop={30}
        marginHorizontal={Theme.Sizes.Padding}
      />
      <InputCode length={5} />
      <Touchable onPress={() => {}}>
        <Text
          text={t('profile:sendAgain')}
          typography="subtitle"
          textColor={Theme.Colors.Carbon}
          textAlign="center"
          marginTop={46}
        />
      </Touchable>
      <Button label={t('global:confirm')} onPress={onSubmit} />
    </Container>
  );
};

export { ConfirmationCodeScreen };
