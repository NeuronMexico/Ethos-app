import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import { Container, Header } from 'components';
import {
  CollectionsPage, PaymentsPage, PersonalDispositionPage, Tab, TabRef,
} from './components';

interface Props {
  onPressScheduledPayments: () => void;
  onPressServices: () => void;
  onPressNewPayment: () => void;
  onPressCash: () => void;
  onPressScheduledCollections: () => void;
  onPressContactsCollection: () => void;
  onPressCashCollection: () => void;
  onPressEthosQR: () => void;
  onPressTransfer: () => void;
  onPressWithdrawalNoCard: () => void;
}

const TransactionsScreen: React.FC<Props> = ({
  onPressScheduledPayments,
  onPressServices,
  onPressCash,
  onPressNewPayment,
  onPressCashCollection,
  onPressContactsCollection,
  onPressEthosQR,
  onPressScheduledCollections,
  onPressTransfer,
  onPressWithdrawalNoCard,
}) => {
  const { t } = useTranslation();

  const pagerViewRef = useRef<PagerView>(null);
  const tabRef = useRef<TabRef>(null);

  const tabs = [
    t('transactions:payments'),
    t('transactions:collections'),
    t('transactions:personalProject'),
  ];

  return (
    <Container flex>
      <Header
        title={t('transactions:transactions')}
        showBackButton={false}
        showVirtualAssistantAction
      />
      <Tab ref={tabRef} tabs={tabs} onChange={(index) => pagerViewRef.current?.setPage(index)} />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        onPageSelected={({ nativeEvent: { position } }) => {
          tabRef.current?.setIndex(position);
        }}
      >
        <PaymentsPage
          onPressScheduledPayments={onPressScheduledPayments}
          onPressServices={onPressServices}
          onPressWithdrawalNoCard={onPressCash}
          onPressNewPayment={onPressNewPayment}
        />
        <CollectionsPage
          onPressCashCollection={onPressCashCollection}
          onPressContactsCollection={onPressContactsCollection}
          onPressEthosQR={onPressEthosQR}
          onPressScheduledCollections={onPressScheduledCollections}
        />
        <PersonalDispositionPage
          onPressTransfer={onPressTransfer}
          onPressWithdraw={onPressWithdrawalNoCard}
        />
      </PagerView>
    </Container>
  );
};

export default TransactionsScreen;
