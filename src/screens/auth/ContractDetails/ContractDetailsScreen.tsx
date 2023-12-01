import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckBoxField, CommonScrollView, Container, Header, OnboardAssistant, SwipeableSwitch, Text, TouchableText,
} from 'components';
import Theme from 'theme';
import { ChevronRightIcon } from 'assets/svg';

interface Props {
  onBack: () => void;
  onAccept: () => void;
}

const ContractDetailsScreen: React.FC<Props> = ({
  onBack = () => {},
  onAccept = () => {},
}: Props) => {
  const { t } = useTranslation();

  const [creditCover, setCreditCover] = useState<boolean>(false);
  const [creditAdhesion, setCreditAdhesion] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);

  return (
    <Container flex useKeyboard>
      <Header
        title=""
        ethosHeader
        showBackButton
        backAction={onBack}
      />
      <Container
        flex
      >
        <CommonScrollView>
          <OnboardAssistant
            title={t('contractDetails:acceptDetails')}
            description={t('contractDetails:acceptDetailsDescription')}
            messages={[t('contractDetails:beforeContinue')]}
            onPress={onAccept}
            enableButton={accept}
          >
            <Container flex style={{ paddingVertical: Theme.Sizes.MarginTop }}>
              <CheckBoxField
                label=""
                customLabel={(
                  <Text>
                    <Text text={` ${t('contractDetails:accept')} `} />
                    <TouchableText
                      text={t('contractDetails:creditCover')}
                      fontWeight="Medium"
                      onPress={() => {}}
                      marginTop={-2}
                      underline
                    />
                  </Text>
                )}
                onChange={setCreditCover}
                selected={creditCover}
              />
              <CheckBoxField
                label=""
                customLabel={(
                  <Text>
                    <Text text={` ${t('contractDetails:acceptThe')} `} />
                    <TouchableText
                      text={t('contractDetails:creditAdhesion')}
                      fontWeight="Medium"
                      onPress={() => {}}
                      marginTop={-2}
                      underline
                    />
                  </Text>
                )}
                onChange={setCreditAdhesion}
                selected={creditAdhesion}
                marginVertical={32}
              />
            </Container>
            {
              !accept && (
                <Container style={{ marginBottom: 32 }}>
                  <SwipeableSwitch
                    config={{
                      label: {
                        active: t('contractDetails:swipeToAccept'),
                        inactive: t('contractDetails:swipeToAccept'),
                      },
                      buttonColor: { active: Theme.Colors.DarkSoul, inactive: Theme.Colors.DarkSoul },
                      labelColor: { active: Theme.Colors.DarkSoul, inactive: Theme.Colors.DarkSoul },
                    }}
                    activeIcon={<ChevronRightIcon color="white" />}
                    inactiveIcon={<ChevronRightIcon color="white" />}
                    onChange={setAccept}
                  />
                </Container>
              )
            }
          </OnboardAssistant>
        </CommonScrollView>
      </Container>
    </Container>
  );
};

export default ContractDetailsScreen;
