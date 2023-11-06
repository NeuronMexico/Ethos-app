import {
  Dispatch, ReactElement, SetStateAction, useCallback, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useAlert } from 'context';
import { PaymentFlowType, formatQuantity } from 'utils';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

interface PaymentFlowHookReturn {
  flow: PaymentFlowType;
  title: (value?: string) => string;
  buttonLabel: string;
  showQRModal: boolean;
  setShowQRModal: Dispatch<SetStateAction<boolean>>;
  QRModalTitle: string;
  QRModalMsg: string;
  QRModalAmount: (amount: number) => string;
  QRTransactionCost: number;
  onConfirm: (alertContent: ReactElement) => void;
}

export function usePaymentFlow(flow: PaymentFlowType): PaymentFlowHookReturn {
  const { t } = useTranslation();

  const alert = useAlert();

  const [showQRModal, setShowQRModal] = useState<boolean>(false);

  const title = useCallback((value?: string) => {
    if (flow === 'contact-payment') return t('transactions:payTo', { name: value });

    if (flow === 'personal-project-payment') return t('transactions:cashDeposit');

    return t('cards:cashPayment');
  }, [flow, t]);

  const QRModalAmount = useCallback((amount: number) => {
    if (flow === 'code-payment') return `${formatQuantity(amount)} MXN`;

    return t('cards:depositAmount', { amount: formatQuantity(amount) });
  }, [flow, t]);

  const buttonLabel = useMemo(() => {
    if (flow === 'contact-payment') return t('transactions:saveContactAndPay');

    if (flow === 'code-payment') return t('global:continue');

    return t('global:confirm');
  }, [flow, t]);

  const QRModalTitle = useMemo(() => {
    if (flow === 'code-payment') return t('transactions:code');

    if (flow === 'personal-project-payment') return t('transactions:cashDeposit');

    return t('cards:cashPayment');
  }, [flow, t]);

  const QRModalMsg = useMemo(() => {
    if (flow === 'code-payment') return t('transactions:goToAffiliatedStore');

    return t('cards:visitAnAffiliatedEstablishment');
  }, [flow, t]);

  const QRTransactionCost = useMemo(() => {
    if (flow === 'code-payment') return 75;

    return 0;
  }, [flow]);

  const onConfirm = useCallback(async (alertContent: ReactElement) => {
    if (flow === 'cash-payment' || flow === 'personal-project-payment') setShowQRModal(true);
    else if (flow === 'contact-payment') {
      alert.show({
        title: t('transactions:confirmPayment'),
        reference: '534332',
        invoice: '12345',
        date: new Date(),
        extraInfo: alertContent,
        actions: [{
          label: t('global:confirm'),
          type: 'primary',
          onPress: async () => {
            alert.hide();
            const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
            if (result.success) {
              console.log('success');
            }
          },
        }],
      });
    } else if (flow === 'code-payment') {
      const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
      if (result.success) {
        setShowQRModal(true);
      }
    }
  }, [alert, flow, t]);

  return {
    flow,
    title,
    buttonLabel,
    showQRModal,
    setShowQRModal,
    QRModalTitle,
    QRModalMsg,
    QRModalAmount,
    QRTransactionCost,
    onConfirm,
  };
}
