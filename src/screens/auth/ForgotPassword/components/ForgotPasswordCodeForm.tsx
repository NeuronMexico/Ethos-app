import React from 'react';
import {
  Container, InputCode, Text, TouchableText,
} from 'components';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

interface Props {
  onSubmit: () => void;
}

const ForgotPasswordCodeForm: React.FC<Props> = ({
  onSubmit,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex style={{ marginTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
      <Text text="Código de confirmación" typography="header" fontSize={22} />
      <Text
        text="Ingresa el código que enviamos a tu número celular"
        typography="caption"
        fontSize={14}
        marginTop={8}
        textColor={Theme.Colors.Encore}
      />
      <Container style={{ marginTop: 38 }}>
        <InputCode length={6} onSubmit={onSubmit} />
        <TouchableText
          text={t('profile:sendAgain')}
          typography="subtitle"
          fontWeight="Medium"
          textColor={Theme.Colors.Carbon}
          textAlign="center"
          underline
          marginTop={46}
          onPress={() => {}}
        />
      </Container>
    </Container>
  );
};

export { ForgotPasswordCodeForm };
