import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  CommonScrollView, Container, Header, Input, OnboardAssistant,
} from 'components';
import { validations } from 'utils';
import Theme from 'theme';

interface Props {
  onPressContinue: () => void;
  onPressNoCode: () => void;
}

const CompanyCodeLabelScreen: React.FC<Props> = ({ onPressContinue, onPressNoCode }) => {
  const { t } = useTranslation();

  const [code, setCode] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');

  const codeValidation = (): boolean => {
    const validation = validations.required(code);
    if (validation.ok) {
      setCodeError('');
      return true;
    }

    setCodeError(t('errors:required'));
    return false;
  };

  return (
    <Container flex>
      <Header
        title=""
        ethosHeader
        showBackButton={false}
      />
      <CommonScrollView>
        <OnboardAssistant
          title={t('companyCodeLabel:companyCodeLabel')}
          description={t('companyCodeLabel:companyCodeDescription')}
          messages={[t('companyCodeLabel:expansionProgramAndReferralMessage')]}
          onPress={() => {}}
          enableButton={false}
        >
          <Container flex>
            <Input
              label={t('companyCodeLabel:companyCodeLabel')}
              value={code}
              onChangeText={setCode}
              placeholder={t('companyCodeLabel:enterCompanyCode')}
              marginTop={16}
              onSubmitEditing={() => codeValidation()}
              error={codeError}
            />
            <Container flex alignment="end">
              <Button
                label={t('global:continue')}
                onPress={onPressContinue}
              />
              <Button
                label={t('companyCodeLabel:noCodeMessage')}
                onPress={onPressNoCode}
                backgroundColor={Theme.Colors.WhiteSmoke}
                textColor={Theme.Colors.DarkSoul}
                marginVertical={14}
              />
            </Container>
          </Container>
        </OnboardAssistant>
      </CommonScrollView>
    </Container>
  );
};

export default CompanyCodeLabelScreen;
