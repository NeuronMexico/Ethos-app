import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Text } from 'components';
import { formatDate, formatQuantity } from 'utils';
import Theme from 'theme';

interface Props {
  onPressEdit: () => void;
  onPressDelete: () => void;
}

const DirectDebitBottomSheetContent: React.FC<Props> = ({ onPressDelete, onPressEdit }) => {
  const { t } = useTranslation();

  return (
    <Container center>
      <Text text={t('transactions:nextPaymentDate')} typography="caption" />
      <Text
        text={formatDate(new Date(), 'MMMM dd, yyyy')}
        typography="header"
        fontWeight="Bold"
        transform="capitalize"
        marginTop={8}
      />

      <Text text={t('transactions:amount')} typography="caption" marginTop={16} />
      <Text text={formatQuantity(3957)} fontSize={34} fontWeight="Bold" marginTop={8} />

      <Text text={t('transactions:paymentType')} typography="caption" marginTop={16} />
      <Text text={t('transactions:minimumPayment')} typography="header" fontWeight="Bold" marginTop={8} />

      <Text text={t('transactions:payee')} typography="caption" marginTop={16} />
      <Text text="Mario Telles" typography="header" fontWeight="Bold" marginTop={8} />

      <Text text={t('transactions:debitCLABE')} typography="caption" marginTop={16} />
      <Text text="4324 3442 4324 553343" typography="header" fontWeight="Bold" marginTop={8} />

      <Text text={t('form:bank')} typography="caption" marginTop={16} />
      <Text text="Santander" typography="header" fontWeight="Bold" marginTop={8} />

      <Text text={t('transactions:creditCardPayment', { cardNumber: '** *334' })} typography="caption" marginTop={16} />
      <Text text={t('transactions:directDebit')} typography="header" fontWeight="Bold" marginTop={8} />

      <Button
        label={t('global:edit')}
        onPress={onPressEdit}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.DarkSoul}
        marginTop={16}
      />
      <Button
        label={t('global:delete')}
        onPress={onPressDelete}
        backgroundColor={Theme.Colors.WhiteSmoke}
        textColor={Theme.Colors.HotCoral}
        marginTop={16}
      />
    </Container>
  );
};

export { DirectDebitBottomSheetContent };
