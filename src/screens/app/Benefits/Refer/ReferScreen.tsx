import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, Text, Touchable,
} from 'components';
import Theme from 'theme';
import { formatQuantity } from 'utils';

interface Props {
  onPressAction: (id: string) => void;
}

const ReferScreen: React.FC<Props> = ({
  onPressAction = () => {},
}: Props) => {
  const { t } = useTranslation();

  const referElement = (id: string) => (
    <Touchable onPress={() => onPressAction('id')}>
      <Container style={{ paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: Theme.Colors.PlaceboBlue }}>
        <Text text={t(`social:${id}`)} typography="body" fontWeight="Semibold" marginHorizontal={18} />
      </Container>
    </Touchable>
  );

  return (
    <Container flex>
      <Header
        title="Referir"
        showVirtualAssistantAction
      />
      <Container style={{ marginVertical: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="¡Tu ganas, tus referidos ganan!" typography="header" />
        <Container style={{ marginTop: 20 }}>
          <Text typography="body">
            <Text text="Invita a un amigo y gana " />
            <Text text={`${formatQuantity(500)} MXN`} fontWeight="Bold" />
          </Text>
          <Text typography="body">
            <Text text="Tu amigo recibirá " />
            <Text text={`${formatQuantity(100)} MXN`} fontWeight="Bold" />
          </Text>
        </Container>
      </Container>
      <Container flex>
        <ScrollView
          bounces={false}
          contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingTop: Theme.Sizes.MarginTop }}
        >
          {referElement('whatsapp')}
          {referElement('email')}
          {referElement('sms')}
          {referElement('messenger')}
          {referElement('other')}
        </ScrollView>
      </Container>
    </Container>
  );
};

export default ReferScreen;
