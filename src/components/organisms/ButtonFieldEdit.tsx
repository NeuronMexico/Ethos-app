import React from 'react';
import { CustomText } from 'components/atoms/CustomText';
import Theme from 'theme';
import { EditIcon } from 'assets/svg';
import { Touchable } from 'components/atoms';
import { Container } from '../atoms/Container';

interface FieldProps {
  label: string;
  value: string;
  onEditClick: () => void;
}

const ButtonFieldEdit: React.FC<FieldProps> = ({ label, value, onEditClick }) => (
  <Container
    row
    style={{
      marginVertical: Theme.Sizes.Padding,
      justifyContent: 'space-between',
    }}
  >
    <Container>
      <CustomText
        text={label}
        typography="subtitle"
        textColor={Theme.Colors.Carbon}
      />
      <CustomText
        text={value}
        typography="header"
      />
    </Container>
    <Touchable onPress={onEditClick}>
      <Container
        middle
        width={38}
        height={38}
        center
        style={{ justifyContent: 'center', backgroundColor: Theme.Colors.PlaceboBlue, borderRadius: 10 }}
      >
        <EditIcon />
      </Container>
    </Touchable>
  </Container>
);

export { ButtonFieldEdit };
