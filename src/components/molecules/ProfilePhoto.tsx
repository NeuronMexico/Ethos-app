import React from 'react';
import Theme from 'theme';
import { FadeInImage } from 'components/atoms/FadeInImage';
import { Container } from 'components/atoms/Container';
import { EditIcon } from 'assets/svg';
import { Touchable } from 'components/atoms';
import { CustomText as Text } from '../atoms/CustomText';

interface Props {
  fadeIn?: boolean;
  size: number;
  withName?: boolean;
  canEdit?: boolean;
  withId?: boolean;
  onPress?: () => void;
}

const ProfilePhoto: React.FC<Props> = ({
  fadeIn, size, withName, canEdit, withId, onPress,
}: Props) => {
  // eslint-disable-next-line max-len
  const photo = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  const name = 'Mario ';
  const lastName = 'Bárcenas López';
  const id = 'M515';

  return (
    <Container width="100%" height={size} middle>
      {photo ? (
        <Touchable onPress={onPress} disabled={!canEdit}>
          <FadeInImage
            source={{ uri: photo }}
            width={size}
            height={size}
            borderRadius={size}
            fadeIn={fadeIn}
          />
        </Touchable>
      ) : (
        <Touchable onPress={onPress}>
          <Container
            center
            circle
            width={size}
            height={size}
            backgroundColor={Theme.Colors.DarkSoul}
          >
            <Text
              text={`${name.charAt(0)}${lastName.charAt(0)}`}
              fontWeight="Semibold"
              typography="subtitle"
              textColor={Theme.Colors.White}
              fontSize={45}
              textAlign="left"
              numberOfLines={1}
              marginTop={20}
            />
          </Container>
        </Touchable>
      )}
      {canEdit && onPress && (
        <Container
          middle
          width={24}
          height={24}
          style={{
            zIndex: 2,
            backgroundColor: Theme.Colors.PlaceboBlue,
            bottom: 20,
            left: 30,
            width: 24,
            borderRadius: 10,
            height: 24,
          }}
        >
          <EditIcon color={Theme.Colors.DarkSoul} height={16} width={16} />
        </Container>
      )}
      {withName && (
        <Text
          text={`${name}${lastName}`}
          fontWeight="Semibold"
          typography="subtitle"
          textColor={Theme.Colors.DarkSoul}
          fontSize={17}
          textAlign="left"
          numberOfLines={1}
          marginTop={20}
        />
      )}
      {withId && (
        <Text
          text={id}
          fontWeight="Semibold"
          typography="subtitle"
          textColor={Theme.Colors.DarkSoul}
          fontSize={17}
          textAlign="left"
          numberOfLines={1}
          marginBottom={20}
        />
      )}
    </Container>
  );
};

export { ProfilePhoto };
