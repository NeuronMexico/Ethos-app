import { CommonScrollView, Container, Header, OnboardAssistant } from 'components';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import PersonalInformationForm from './components/PersonalInformationForm';
import ResidenceInformationForm from './components/ResidenceInformationForm';
import FinancialInformationForm from './components/FinancialInformationForm';

interface Props {
  onSubmit: () => void;
}

const PersonalInformationScreen: React.FC<Props> = ({
  onSubmit = () => {},
}: Props) => {
  const { t } = useTranslation();

  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <Container flex useKeyboard>
      <Header
        title=""
        ethosHeader
        showBackButton={currentPage > 0}
        backAction={() => pagerViewRef.current?.setPage(currentPage - 1)}
      />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        onPageSelected={({ nativeEvent: { position } }) => setCurrentPage(position)}
      >
        <CommonScrollView>
          <OnboardAssistant
            title={t('personalInformation:personalInformation')}
            description={t('personalInformation:fillInfo')}
            messages={[t('personalInformation:knowAboutYou')]}
            onPress={() => pagerViewRef.current?.setPage(1)}
            buttonDisabled={false}
          >
            <Container flex alignment="end" style={{ paddingVertical: 32 }}>
              <PersonalInformationForm />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('personalInformation:residence')}
            description={t('personalInformation:fillInfo')}
            messages={[t('personalInformation:knowAboutYou')]}
            onPress={() => pagerViewRef.current?.setPage(2)}
            buttonDisabled={false}
          >
            <Container flex style={{ paddingVertical: 32 }}>
              <ResidenceInformationForm />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('personalInformation:financial')}
            description={t('personalInformation:fillInfo')}
            messages={[t('personalInformation:knowAboutYou')]}
            onPress={() => {
              pagerViewRef.current?.setPage(3);
              onSubmit();
            }}
            buttonDisabled={false}
          >
            <Container flex style={{ paddingVertical: 32 }}>
              <FinancialInformationForm />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
      </PagerView>
    </Container>
  );
};

export default PersonalInformationScreen;
