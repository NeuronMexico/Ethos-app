import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button, Container, Header, RadioButtonGroup, RadioButtonGroupOption, Text,
} from 'components';
import Theme from 'theme';

interface Props {
  onPressDisableCard: () => void;
}

const CardReportScreen: React.FC<Props> = ({ onPressDisableCard }) => {
  const { t } = useTranslation();

  const options: Array<RadioButtonGroupOption> = [
    { label: t('cards:theft'), value: 'theft' },
    { label: t('cards:loss'), value: 'loss' },
    { label: t('cards:damaged'), value: 'damaged' },
    { label: t('cards:atmRetained'), value: 'atmRetained' },
  ];

  const [reason, setReason] = useState<string>('theft');

  return (
    <Container flex useKeyboard>
      <Header title={t('cards:reportCard')} showVirtualAssistantAction />
      <ScrollView contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingTop: 32, flexGrow: 1 }}>
        <Text text={t('cards:selectReportReason')} typography="title" fontWeight="Semibold" />
        <RadioButtonGroup options={options} value={reason} onChange={setReason} marginVertical={16} />

        <Container flex alignment="end">
          <Text text={t('cards:disableCurrentCard')} typography="subtitle" fontWeight="Medium" />
          <Button label={t('cards:disableCard')} onPress={onPressDisableCard} marginVertical={16} />
        </Container>
      </ScrollView>
    </Container>
  );
};

export default CardReportScreen;
