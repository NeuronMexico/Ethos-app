import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonGroup, ButtonGroupOption, Container, Input,
} from 'components';
import Theme from 'theme';
import { LensIcon } from 'assets/svg';

interface Props {
  onSelectAnOption: (option: string) => void;
}

const TopicsBottomSheetContent: React.FC<Props> = ({ onSelectAnOption }) => {
  const { t } = useTranslation();

  const [query, setQuery] = useState<string>('');

  const options: Array<ButtonGroupOption> = useMemo(() => [
    {
      label: t('virtualAssistant:checkBalanceAndTransactionsTopic'),
      onPress: () => onSelectAnOption(t('virtualAssistant:checkBalanceAndTransactionsTopic')),
      buttonStyle: {
        backgroundColor: Theme.Colors.DarkSoul,
        textColor: Theme.Colors.White,
      },
    },
    {
      label: t('virtualAssistant:cardReplacementTheftDamageLossTopic'),
      onPress: () => onSelectAnOption(t('virtualAssistant:cardReplacementTheftDamageLossTopic')),
      buttonStyle: {
        backgroundColor: Theme.Colors.DarkSoul,
        textColor: Theme.Colors.White,
      },
    },
    {
      label: t('virtualAssistant:disputesAndUnauthorizedCharges'),
      onPress: () => onSelectAnOption(t('virtualAssistant:disputesAndUnauthorizedCharges')),
      buttonStyle: {
        backgroundColor: Theme.Colors.DarkSoul,
        textColor: Theme.Colors.White,
      },
    },
    {
      label: t('virtualAssistant:productInformationFunctionalityTopic'),
      onPress: () => onSelectAnOption(t('virtualAssistant:productInformationFunctionalityTopic')),
      buttonStyle: {
        backgroundColor: Theme.Colors.DarkSoul,
        textColor: Theme.Colors.White,
      },
    },
    {
      label: t('virtualAssistant:transactionInformation'),
      onPress: () => onSelectAnOption(t('virtualAssistant:transactionInformation')),
      buttonStyle: {
        backgroundColor: Theme.Colors.DarkSoul,
        textColor: Theme.Colors.White,
      },
    },
    {
      label: t('virtualAssistant:contactDetails'),
      onPress: () => onSelectAnOption(t('virtualAssistant:contactDetails')),
      buttonStyle: {
        backgroundColor: Theme.Colors.DarkSoul,
        textColor: Theme.Colors.White,
      },
    },
    {
      label: t('virtualAssistant:creditCardCancellation'),
      onPress: () => onSelectAnOption(t('virtualAssistant:creditCardCancellation')),
      buttonStyle: {
        backgroundColor: Theme.Colors.DarkSoul,
        textColor: Theme.Colors.White,
      },
    },
  ], [onSelectAnOption, t]);

  return (
    <Container>
      <Input
        placeholder={t('global:search')}
        value={query}
        onChangeText={setQuery}
        useBottomSheetInput
        marginTop={0}
        prefixIcon={<LensIcon width={20} height={20} />}
        returnKeyType="search"
      />
      <ButtonGroup options={options} vertical marginTop={16} />
    </Container>
  );
};
export { TopicsBottomSheetContent };
