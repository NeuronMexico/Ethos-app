import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { EyeIcon, EyeSlashIcon } from 'assets/svg';
import {
  Container, ProgressBar, Text, Touchable,
} from 'components';
import Theme from 'theme';

interface Props {
  // TODO: Implementation
  product: any;
}

const TabSection: React.FC<Props> = ({ product }: Props) => {
  const { t } = useTranslation();

  const [isBlurred, setIsBlurred] = useState<boolean>(true);

  return (
    <Container flex>
      <ProgressBar progress={0.5} />
      <Container flex row space="between" style={{ paddingTop: 16 }}>
        <Container flex={1.5} style={{ marginRight: 16 }}>
          <Text
            text={`$ ${isBlurred ? '******' : product.info.usedBalance.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })}`}
            textColor={Theme.Colors.White}
            fontWeight="ExtraBold"
            fontSize={17}
          />
          <Text
            text={
              product.type === 'card'
                ? t('tabProducts:balanceUsed')
                : t('tabProducts:paid', { current: 0, last: 6 })
            }
            textColor={Theme.Colors.White}
            fontWeight="Semibold"
            fontSize={13}
          />
        </Container>
        <Container flex style={{ marginRight: 16 }}>
          <Text
            text={`$ ${isBlurred ? '******' : product.info.availableBalance.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })}`}
            textColor={Theme.Colors.White}
            fontWeight="ExtraBold"
            fontSize={17}
          />
          <Text
            text={t('tabProducts:balanceAvailable')}
            textColor={Theme.Colors.White}
            fontWeight="Semibold"
            fontSize={13}
          />
        </Container>
        <Touchable onPress={() => setIsBlurred(!isBlurred)}>
          {
            isBlurred
              ? (<EyeSlashIcon color={Theme.Colors.White} />)
              : (<EyeIcon color={Theme.Colors.White} />)
          }
        </Touchable>
      </Container>
    </Container>
  );
};

export default TabSection;
