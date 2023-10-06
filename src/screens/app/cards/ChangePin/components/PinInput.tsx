import React, { useCallback, useRef } from 'react';
import { Container, Input } from 'components';
import { isDigit } from 'utils';
import Theme from 'theme';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

const PinInput: React.FC<Props> = ({ value, onChangeText }) => {
  const inputRefs = useRef<any>(Array.from({ length: 4 }).map(() => null));

  const pin = useRef<Array<string>>(Array.from({ length: 4 }).map(() => '')).current;

  const handleChange = useCallback((index: number, key: string) => {
    if (isDigit(key)) {
      if (index < 3) inputRefs.current[index + 1]?.focus();
      else inputRefs.current[index]?.blur();
      pin[index] = key;
    } else if (key === 'Backspace') {
      inputRefs.current[index - 1]?.focus();
      pin[index] = '';
    }

    onChangeText(pin.join(''));
  }, [onChangeText, pin]);

  return (
    <Container row style={{ marginVertical: 32 }}>
      {pin.map((_, index) => (
        <Container style={{ marginHorizontal: 8 }} key={index + 1}>
          <Input
            ref={(inputRef) => { inputRefs.current[index] = inputRef; }}
            value={value.charAt(index)}
            onChangeText={() => {}}
            onKeyPress={({ nativeEvent: { key } }) => handleChange(index, key)}
            width={44}
            maxLength={1}
            keyboardType="numeric"
            paddingVertical={20}
            backgroundColor={Theme.Colors.WhiteSmoke}
            borderRadius={4}
            marginTop={0}
            passwordField
            showPasswordEnable={false}
          />
        </Container>
      ))}
    </Container>
  );
};

export { PinInput };
