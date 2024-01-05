import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'reactRedux';
import { ContentModalResponse, SafeArea } from 'components';
import { useAlert } from 'context';
import { formatQuantity } from 'utils';
import DeferPurchasesScreen from './DeferPurchasesScreen';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const DeferPurchasesController: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { goBack } = useNavigation();

  const alert = useAlert();

  const showSuccessAlert = useCallback(() => {
    alert.show({
      title: t('cards:purchaseDeferredSuccessfully'),
      invoice: '58432',
      date: new Date(),
      checkmark: true,
      actions: [{ label: t('global:accept'), type: 'primary', onPress: () => { alert.hide(); goBack(); } }],
    });
  }, [alert, goBack, t]);

  const onSubmit = useCallback((data: any) => {
    alert.show({
      title: t('cards:deferPurchaseTo3InstallmentsOf', { months: data.months }),
      divider: true,
      extraInfo: (
        <ContentModalResponse
          amount={data.monthlyPayment}
          references={[
            { label: t('cards:totalAmountToPay'), value: formatQuantity(data.total) },
            { label: t('cards:interestRate'), value: '32%' },
          ]}
          spaceBetweenReferences={16}
        />
      ),
      actions: [
        {
          label: t('global:confirm'),
          type: 'primary',
          onPress: async () => {
            alert.hide();
            const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
            if (result.success) showSuccessAlert();
          },
        },
        { label: t('global:cancel'), type: 'secondary', onPress: alert.hide },
      ],
    });
  }, [alert, showSuccessAlert, t]);

  return (
    <SafeArea>
      <DeferPurchasesScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default DeferPurchasesController;
