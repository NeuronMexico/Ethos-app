import React from 'react';
import Theme from 'theme';
import { FadeInImage } from 'components/atoms/FadeInImage';
import { Container } from 'components/atoms/Container';
import { CustomText } from 'components/atoms/CustomText';
import { EditIcon } from 'assets/svg';

interface Props {
  fadeIn?: boolean;
  size: number;
  withName?: boolean;
  cantEdit?: boolean
  withId?: boolean;
}

const ProfilePhoto: React.FC<Props> = ({
  fadeIn, size, withName, cantEdit, withId,
}: Props) => {
  // const { photo, name, lastName } = useSelector((state: RootState) => state.profile);

  // eslint-disable-next-line max-len
  const photo = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  const name = 'Mario ';
  const lastName = 'Bárcenas López';
  const id = 'M515';

  return (
    <Container width="100%" height={size} middle>
      {photo && (
      <FadeInImage
        source={{ uri: photo }}
        width={size}
        height={size}
        borderRadius={size}
        fadeIn={fadeIn}
      />
      )}
      {withName && (
      <CustomText
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
      <CustomText
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
      {cantEdit && (
      <Container
        style={{
          width: 24,
          height: 24,
          position: 'absolute',
          justifyContent: 'center',
          backgroundColor: Theme.Colors.PlaceboBlue,
          borderRadius: 10,
          bottom: 10,
          right: 0,
          padding: 8,
          alignItems: 'center',
        }}
      >
        <EditIcon color={Theme.Colors.DarkSoul} height={16} width={16} />
      </Container>
      )}
    </Container>
  );
};

export { ProfilePhoto };
