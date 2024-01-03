import React, { useState } from 'react';
import {
  Button, CheckBoxField, Container, Input,
} from 'components';
import { useTranslation } from 'react-i18next';

interface Props {
  buttonLabel: string;
  onSubmit: () => void;
}

const ChangePasswordForm: React.FC<Props> = ({
  buttonLabel,
  onSubmit,
}: Props) => {
  const { t } = useTranslation();

  const [value, setValue] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [ruleOneSelected, setRuleOneSelected] = useState<boolean>(false);
  const [ruleTwoSelected, setRuleTwoSelected] = useState<boolean>(false);
  const [ruleThreeSelected, setRuleThreeSelected] = useState<boolean>(false);
  const [ruleFourSelected, setRuleFourSelected] = useState<boolean>(false);

  return (
    <Container>
      <Input
        value={value}
        onChangeText={setValue}
        passwordField
        label={t('changePassword:newPassword')}
        marginTop={32}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        passwordField
        label={t('changePassword:confirmPassword')}
      />
      <Container style={{ marginTop: 16, marginBottom: 32 }}>
        <CheckBoxField
          label={t('changePassword:ruleForNewPassword1')}
          selected={ruleOneSelected}
          onChange={setRuleOneSelected}
          typography="subtitle"
          type="filled"
        />
        <CheckBoxField
          label={t('changePassword:ruleForNewPassword2')}
          selected={ruleTwoSelected}
          onChange={setRuleTwoSelected}
          typography="subtitle"
          type="filled"
        />
        <CheckBoxField
          label={t('changePassword:ruleForNewPassword3')}
          selected={ruleThreeSelected}
          onChange={setRuleThreeSelected}
          typography="subtitle"
          type="filled"
        />
        <CheckBoxField
          label={t('changePassword:ruleForNewPassword4')}
          selected={ruleFourSelected}
          onChange={setRuleFourSelected}
          typography="subtitle"
          type="filled"
        />
      </Container>
      <Button
        label={buttonLabel ?? t('global:save')}
        onPress={onSubmit}
      />
    </Container>
  );
};

export { ChangePasswordForm };
