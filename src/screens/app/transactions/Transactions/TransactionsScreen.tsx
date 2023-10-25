import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import { Container, Header } from 'components';
import {
  CollectionsPage, PaymentsPage, PersonalDispositionPage, PersonalProjectPage, Tab, TabRef,
} from './components';

interface Props {
  onPressScheduledPayments: () => void;
  onPressServices: () => void;
  onPressContacts: () => void;
  onPressNewPayment: () => void;
  onPressCash: () => void;
  onPressCoDi: () => void;
  onPressScheduledCollections: () => void;
  onPressContactsCollection: () => void;
  onPressCoDiCollection: () => void;
  onPressCashCollection: () => void;
  onPressEthosQR: () => void;
}

const TransactionsScreen: React.FC<Props> = ({
  onPressScheduledPayments,
  onPressServices,
  onPressCash,
  onPressCoDi,
  onPressContacts,
  onPressNewPayment,
  onPressCashCollection,
  onPressCoDiCollection,
  onPressContactsCollection,
  onPressEthosQR,
  onPressScheduledCollections,
}) => {
  const { t } = useTranslation();

  const pagerViewRef = useRef<PagerView>(null);
  const tabRef = useRef<TabRef>(null);

  const tabs = [
    t('transactions:payments'),
    t('transactions:collections'),
    t('transactions:personalDisposition'),
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
          onPressCash={onPressCash}
          onPressCoDi={onPressCoDi}
          onPressContacts={onPressContacts}
          onPressNewPayment={onPressNewPayment}
        />
        <CollectionsPage
          onPressCashCollection={onPressCashCollection}
          onPressCoDiCollection={onPressCoDiCollection}
          onPressContactsCollection={onPressContactsCollection}
          onPressEthosQR={onPressEthosQR}
          onPressScheduledCollections={onPressScheduledCollections}
        />
        <PersonalDispositionPage />
        <PersonalProjectPage />
      </PagerView>
    </Container>
  );
};

export default TransactionsScreen;
