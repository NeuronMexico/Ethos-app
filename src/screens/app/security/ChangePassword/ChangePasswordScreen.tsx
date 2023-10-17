import {
  Button,
  CheckBoxField,
  Container, Header, Input,
} from 'components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

interface Props {
  onSubmit: () => void;
}

const ChangePasswordScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>('');
  const [ruleOneSelected, setRuleOneSelected] = useState<boolean>(false);
  const [ruleTwoSelected, setRuleTwoSelected] = useState<boolean>(false);
  const [ruleThreeSelected, setRuleThreeSelected] = useState<boolean>(false);
  const [ruleFourSelected, setRuleFourSelected] = useState<boolean>(false);

  return (
    <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
      <Header title={t('changePassword:newPassword')} />
      <Input
        value={value}
        onChangeText={setValue}
        passwordField
        label={t('changePassword:newPassword')}
        customLabelColor={Theme.Colors.Carbon}
        marginTop={32}
      />
      <Input
        value={value}
        onChangeText={setValue}
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
        label={t('global:save')}
        onPress={onSubmit}
      />
    </Container>
  );
};

export default ChangePasswordScreen;
