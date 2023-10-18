import React from 'react';
import { Container, Text } from 'components';

interface Props {
  prop?: string
}

const AvatarBottomSheetContent: React.FC<Props> = (props: Props) => {
  const { prop } = props;

  return (
    <Container>
      <Text text="AvatarBottomSheetContent" />
    </Container>
  );
};

export { AvatarBottomSheetContent };
