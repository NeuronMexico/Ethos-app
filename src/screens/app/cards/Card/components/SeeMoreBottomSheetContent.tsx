import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components';
import { CertificateIcon, GraphIcon, PaperIcon } from 'assets/svg';
import { CardAction } from './CardAction';

interface Props {
  onPressCreditDetail: () => void;
}

const SeeMoreBottomSheetContent: React.FC<Props> = ({ onPressCreditDetail }) => {
  const { t } = useTranslation();

  return (
    <Container row crossCenter>
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
        onPress={onPressCreditDetail}
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
};

export { SeeMoreBottomSheetContent };
