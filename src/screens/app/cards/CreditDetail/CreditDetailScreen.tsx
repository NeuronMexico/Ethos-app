import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Card, Container, Header, Text,
} from 'components';
import Theme from 'theme';
import { formatDate, formatQuantity } from 'utils';

interface Props {
  prop?: string
}

const CreditDetailScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  const CARD_DETAILS_1 = [
    { label: t('cards:cardNumber'), value: '** *334' },
    { label: t('cards:usedBalance'), value: formatQuantity(3957) },
    { label: t('cards:paymentToAvoidInterest'), value: formatQuantity(3957) },
    { label: t('cards:paymentDueDate'), value: formatDate(new Date(), 'MMMM dd, yyyy') },
  ];

  const CARD_DETAILS_2 = [
    { label: t('cards:creditLine'), value: formatQuantity(70000) },
    { label: t('cards:availableBalance'), value: formatQuantity(66043) },
    { label: t('cards:minimumPayment'), value: formatQuantity(875) },
  ];

  const STATEMENT_INFO_1 = [
    { label: t('cards:balanceBeforeStatement'), value: formatQuantity(3957) },
    { label: t('cards:statementDate'), value: formatDate(new Date(), 'MMMM dd, yyyy') },
  ];

  const STATEMENT_INFO_2 = [
    { label: t('cards:balanceAfterStatement'), value: formatQuantity(0) },
  ];

  const LIMITS_INFO_1 = [
    { label: t('cards:cashDepositLimit'), value: formatQuantity(30000) },
    { label: t('cards:withdrawalLimitWithoutCard'), value: formatQuantity(30000) },
  ];

  const LIMITS_INFO_2 = [
    { label: t('cards:cashWithdrawalLimitAtm'), value: formatQuantity(30000) },
  ];

  return (
    <Container flex>
      <Header title={t('cards:creditDetail')} />

      <ScrollView
        style={{ marginTop: 8 }}
        contentContainerStyle={{ paddingTop: 24, paddingHorizontal: Theme.Sizes.Padding }}
      >
        <Card column borderRadius={24}>
          <Text text={t('cards:cardDetails')} typography="header" marginBottom={16} />
          <InfoList firstRowData={CARD_DETAILS_1} secondRowData={CARD_DETAILS_2} />
        </Card>

        <Card column borderRadius={24} style={{ marginVertical: 16 }}>
          <Text text={t('cards:statementInformation')} typography="header" marginBottom={16} />
          <InfoList firstRowData={STATEMENT_INFO_1} secondRowData={STATEMENT_INFO_2} />
        </Card>

        <Card column borderRadius={24}>
          <Text text={t('cards:limits')} typography="header" marginBottom={16} />
          <InfoList firstRowData={LIMITS_INFO_1} secondRowData={LIMITS_INFO_2} />
        </Card>
      </ScrollView>
    </Container>
  );
};

type InfoListData = { label: string; value: string; };

interface InfoListProps {
  firstRowData: Array<InfoListData>;
  secondRowData: Array<InfoListData>;
}

const InfoList: React.FC<InfoListProps> = ({ firstRowData, secondRowData }) => firstRowData
  .map(({ label, value }, index) => (
    <Container row key={index}>
      <Container flex style={{ marginRight: 8, marginTop: index > 0 ? 32 : 0 }}>
        <Text text={label} typography="subtitle" />
        <Text text={value} typography="header" marginTop={16} transform="capitalize" />
      </Container>
      <Container flex style={{ marginRight: 8, marginTop: index > 0 ? 32 : 0 }}>
        {secondRowData[index] && (
        <>
          <Text text={secondRowData[index].label} typography="subtitle" />
          <Text text={secondRowData[index].value} typography="header" marginTop={16} transform="capitalize" />
        </>
        )}
      </Container>
    </Container>
  ));

export default CreditDetailScreen;
