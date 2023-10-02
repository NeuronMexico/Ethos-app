/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, {
  ClipPath, Defs, G, Path, Rect,
} from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const InstagramIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 25,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <G id="instagram" clipPath="url(#clip0_3058_13767)">
      <Path
        id="Vector"
        d="M10.5043 6.6094C7.52305 6.6094 5.11836 9.01409 5.11836 11.9953C5.11836 14.9766 7.52305 17.3813 10.5043 17.3813C13.4855 17.3813 15.8902 14.9766 15.8902 11.9953C15.8902 9.01409 13.4855 6.6094 10.5043 6.6094ZM10.5043 15.4969C8.57773 15.4969 7.00273 13.9266 7.00273 11.9953C7.00273 10.0641 8.57305 8.49377 10.5043 8.49377C12.4355 8.49377 14.0059 10.0641 14.0059 11.9953C14.0059 13.9266 12.4309 15.4969 10.5043 15.4969ZM17.3668 6.38909C17.3668 7.08752 16.8043 7.64534 16.1105 7.64534C15.4121 7.64534 14.8543 7.08284 14.8543 6.38909C14.8543 5.69534 15.4168 5.13284 16.1105 5.13284C16.8043 5.13284 17.3668 5.69534 17.3668 6.38909ZM20.934 7.66409C20.8543 5.98127 20.4699 4.49065 19.2371 3.26252C18.009 2.0344 16.5184 1.65002 14.8355 1.56565C13.1012 1.46721 7.90273 1.46721 6.16836 1.56565C4.49023 1.64534 2.99961 2.02971 1.7668 3.25784C0.533984 4.48596 0.154297 5.97659 0.0699219 7.6594C-0.0285156 9.39377 -0.0285156 14.5922 0.0699219 16.3266C0.149609 18.0094 0.533984 19.5 1.7668 20.7281C2.99961 21.9563 4.48555 22.3406 6.16836 22.425C7.90273 22.5235 13.1012 22.5235 14.8355 22.425C16.5184 22.3453 18.009 21.961 19.2371 20.7281C20.4652 19.5 20.8496 18.0094 20.934 16.3266C21.0324 14.5922 21.0324 9.39846 20.934 7.66409ZM18.6934 18.1875C18.3277 19.1063 17.6199 19.8141 16.6965 20.1844C15.3137 20.7328 12.0324 20.6063 10.5043 20.6063C8.97617 20.6063 5.69023 20.7281 4.31211 20.1844C3.39336 19.8188 2.68555 19.111 2.31523 18.1875C1.7668 16.8047 1.89336 13.5235 1.89336 11.9953C1.89336 10.4672 1.77148 7.18127 2.31523 5.80315C2.68086 4.8844 3.38867 4.17659 4.31211 3.80627C5.69492 3.25784 8.97617 3.3844 10.5043 3.3844C12.0324 3.3844 15.3184 3.26252 16.6965 3.80627C17.6152 4.1719 18.323 4.87971 18.6934 5.80315C19.2418 7.18596 19.1152 10.4672 19.1152 11.9953C19.1152 13.5235 19.2418 16.8094 18.6934 18.1875Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3058_13767">
        <Rect width={21} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export { InstagramIcon };