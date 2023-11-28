import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'components/atoms/Container';
import { Input } from 'components/atoms/Input';
import Theme from 'theme';

interface Props {
  length?: number;
  onSubmit?: (code: string) => void;
  marginTop?: number;
  autoFocus?: boolean;
}

const InputCode: React.FC<Props> = ({
  length = 5,
  onSubmit = () => {},
  marginTop = 16,
  autoFocus = true,
}: Props) => {
  const [code, setCode] = useState(Array(length).fill(''));

  const inputRefs = useRef<any>(Array(length).fill(null));

  useEffect(() => {
    if (autoFocus) inputRefs.current[0]?.focus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (index: number, inputValue: string) => {
    const newCode = [...code];
    newCode[index] = inputValue;
    setCode(newCode);

    if (index < (length - 1) && inputValue !== '') {
      inputRefs.current[index + 1]?.focus();
    } else {
      const fullCode = newCode.join('');
      console.log(fullCode);
      if (onSubmit) onSubmit(fullCode);
    }
  };

  return (
    <Container row style={{ justifyContent: 'center', marginTop }}>
      {code.map((digit, index) => (
        <Container style={{ marginRight: 16 }} key={index + 1}>
          <Input
            // eslint-disable-next-line no-return-assign
            ref={(inputRef) => (inputRefs.current[index] = inputRef)}
            value={digit}
            onChangeText={(text) => {
              handleChange(index, text);
            }}
            onKeyPress={(event) => {
              if (event.nativeEvent.key === 'Backspace' && index > 0) {
                inputRefs.current[index - 1]?.focus();
              }
            }}
            width={44}
            maxLength={1}
            keyboardType="numeric"
            paddingVertical={20}
            backgroundColor={Theme.Colors.PurpleCrystal}
            marginTop={0}
          />
        </Container>
      ))}

    </Container>
  );
};

export { InputCode };
