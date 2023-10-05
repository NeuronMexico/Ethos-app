import React, { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container } from 'components';
import { CertificateIcon, GraphIcon, PaperIcon } from 'assets/svg';
import { CardsGlobalStackParams } from 'utils';
import { CardAction } from './CardAction';

interface Props {
}

const SeeMoreBottomSheetContent = forwardRef((props: Props, ref: ForwardedRef<View>) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<CardsGlobalStackParams>>();

  return (
    <Container row crossCenter ref={ref}>
      <CardAction
        label={t('cards:creditLineIncrease')}
        icon={<GraphIcon />}
        width={105}
        marginHorizontal={6}
        onPress={() => {}}
      />
      <CardAction
        label={t('cards:creditDetail')}
        icon={<CertificateIcon />}
        width={75}
        marginHorizontal={6}
        onPress={() => navigate('CreditDetail')}
      />
      <CardAction
        label={t('cards:accountStatement')}
        icon={<PaperIcon />}
        width={75}
        marginHorizontal={6}
        onPress={() => {}}
      />
    </Container>
  );
});

export { SeeMoreBottomSheetContent };
