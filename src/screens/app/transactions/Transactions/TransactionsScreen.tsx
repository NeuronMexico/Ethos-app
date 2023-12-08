import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import { Container, Header } from 'components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
  onPressCoDiCollection: () => void;
  onPressCashCollection: () => void;
  onPressEthosQR: () => void;
}

const TransactionsScreen: React.FC<Props> = ({
  onPressScheduledPayments,
  onPressServices,
  onPressCash,
  onPressNewPayment,
  onPressCashCollection,
  onPressCoDiCollection,
  onPressContactsCollection,
  onPressEthosQR,
  onPressScheduledCollections,
}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const pagerViewRef = useRef<PagerView>(null);
  const tabRef = useRef<TabRef>(null);
  const isCandidate = true;

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
          onPressCoDiCollection={onPressCoDiCollection}
          onPressContactsCollection={onPressContactsCollection}
          onPressEthosQR={onPressEthosQR}
          onPressScheduledCollections={onPressScheduledCollections}
        />
        <PersonalDispositionPage
          isCandidate={isCandidate}
          iWantToKnowMore={() => navigate('TransactionsGlobalStack', { screen: 'PersonalProject' })}
        />
      </PagerView>
    </Container>
  );
};

export default TransactionsScreen;
