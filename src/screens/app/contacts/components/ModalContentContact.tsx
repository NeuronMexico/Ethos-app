import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Text } from 'components';
import Theme from 'theme';
import { maskAccountNumber } from 'utils';

interface Props {
  data?: any;
}

const ModalContentContact: React.FC<Props> = ({
  data,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Container center>
        { data?.alias && <Text text={data.alias} typography="title" fontWeight="Semibold" /> }
        { data?.name && <Text text={data.name} typography="title" fontWeight="Semibold" /> }
        { data?.email && <Text text={data.email} fontSize={16} fontWeight="Medium" /> }
      </Container>
      {
        data?.phone && (
          <Container center style={{ marginVertical: Theme.Sizes.Padding }}>
            <Text text={t('form:phone')} typography="body" />
            <Text text={data.phone} typography="body" fontWeight="Bold" marginTop={8} />
          </Container>
        )
      }
      {
        data?.accountNumber && (
          <Container center style={{ marginVertical: Theme.Sizes.Padding }}>
            <Text text={t('form:clabe')} typography="body" />
            <Text text={maskAccountNumber(data.accountNumber)} typography="body" fontWeight="Bold" marginTop={8} />
          </Container>
        )
      }
      {
        data?.bank && (
          <Container center style={{ marginVertical: Theme.Sizes.Padding }}>
            <Text text={t('form:bank')} typography="body" />
            <Text text={data.bank} typography="body" fontWeight="Bold" marginTop={8} />
          </Container>
        )
      }
    </Container>
  );
};

export default ModalContentContact;
