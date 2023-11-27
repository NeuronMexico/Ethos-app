import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Touchable } from 'components';
import { AssistantA, AssistantB } from 'assets/svg';
import Theme from 'theme';

interface Props {
  onSelectAvatar: (type: 'a' | 'b') => void;
}

const AvatarBottomSheetContent: React.FC<Props> = ({ onSelectAvatar }) => {
  const { t } = useTranslation();

  const [selectedAvatar, setSelectedAvatar] = useState<'a' | 'b'>('a');

  return (
    <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <Container row space="evenly">
        <Touchable onPress={() => setSelectedAvatar('a')}>
          <AssistantA />
        </Touchable>
        <Touchable onPress={() => setSelectedAvatar('b')}>
          <AssistantB />
        </Touchable>
      </Container>
      <Button label={t('global:save')} onPress={() => onSelectAvatar(selectedAvatar)} marginVertical={27} />
    </Container>
  );
};

export { AvatarBottomSheetContent };
