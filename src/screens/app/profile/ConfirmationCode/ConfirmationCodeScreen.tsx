import React, { useState, useEffect, useRef } from 'react';
import { CustomText } from 'components/atoms/CustomText';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import { Container, Input, Touchable } from 'components/atoms';
import { Button, Header } from 'components/molecules';

interface Props {
  onSubmit: () => void;
  value: string;
  type: string;
}

const ConfirmationCodeScreen:React.FC<Props> = ({ type, value, onSubmit }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState(['', '', '', '', '']);
  const translatedType = t(`profile:${type}`);
  const inputRefs = useRef<any>([
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, inputValue: string) => {
    const newCode = [...code];
    newCode[index] = inputValue;
    setCode(newCode);

    if (index < 4 && inputValue !== '') {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <Container flex style={{ gap: 16, paddingHorizontal: Theme.Sizes.Padding }}>
      <Header title={t(`profile:${type}Title`)} />
      <CustomText
        text={t('profile:instructionEnterCode', { type: translatedType, value })}
        typography="subtitle"
        textColor={Theme.Colors.Carbon}
        fontSize={18}
        marginTop={30}
        marginHorizontal={Theme.Sizes.Padding}
      />
      <Container row style={{ justifyContent: 'center' }}>
        {code.map((digit, index) => (
          <Container style={{ marginRight: 16 }} key={index + 1}>
            <Input
            // eslint-disable-next-line no-return-assign
              ref={(inputRef) => (inputRefs.current[index] = inputRef)}
              value={digit}
              onChangeText={(text) => {
                handleChange(index, text);
              }}
              width={44}
              maxLength={1}
              keyboardType="numeric"
              paddingVertical={20}
              backgroundColor={Theme.Colors.PurpleCrystal}
            />
          </Container>
        ))}

      </Container>
      <Touchable onPress={() => {}}>
        <CustomText
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
