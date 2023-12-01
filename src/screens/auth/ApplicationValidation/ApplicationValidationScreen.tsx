import { DUMMY_CARD } from 'assets/images';
import {
  CheckBoxField,
  CommonScrollView, Container, Header, OnboardAssistant,
} from 'components';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import Theme from 'theme';

interface Props {
  onContinue: () => void;
}

const ApplicationValidationScreen: React.FC<Props> = ({
  onContinue = () => {},
}: Props) => {
  const { t } = useTranslation();

  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [authorization, setAuthorization] = useState<boolean>(false);

  return (
    <Container flex useKeyboard>
      <Header
        title=""
        ethosHeader
        showBackButton={false}
        backAction={() => pagerViewRef.current?.setPage(currentPage - 1)}
      />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1, marginTop: Theme.Sizes.MarginTop }}
        onPageSelected={({ nativeEvent: { position } }) => setCurrentPage(position)}
      >
        <CommonScrollView>
          <OnboardAssistant
            title={t('applicationValidation:applicationValidation')}
            description={t('applicationValidation:applicationValidationDescription')}
            messages={[]}
            onPress={() => pagerViewRef.current?.setPage(1)}
            buttonDisabled={false}
          >
            <Container flex alignment="end">
              <Container center middle flex>
                <Image
                  source={DUMMY_CARD}
                  style={{
                    width: 230,
                    height: 230,
                    marginBottom: 16,
                  }}
                  resizeMode="contain"
                />
              </Container>
              <CheckBoxField
                label={t('applicationValidation:authorization')}
                selected={authorization}
                onChange={setAuthorization}
              />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('applicationValidation:performingAnalysis')}
            description={t('applicationValidation:processingInfo')}
            messages={[]}
            onPress={() => {
              onContinue();
            }}
            buttonDisabled={false}
          >
            <Container flex>
              <Container center middle flex>
                <ActivityIndicator size="large" color={Theme.Colors.DarkSoul} />
              </Container>
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
      </PagerView>
    </Container>
  );
};

export default ApplicationValidationScreen;
