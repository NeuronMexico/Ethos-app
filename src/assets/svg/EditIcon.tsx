/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, {
  G, Mask, Path, Rect,
} from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const EditIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 24,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <G id="Edit">
      <G id="Rectangle 1">
        <Mask
          id="path-1-outside-1_3243_15182"
          maskUnits="userSpaceOnUse"
          x={1.33398}
          y={2}
          width={13}
          height={13}
          fill="black"
        >
          <Rect fill="white" x={1.33398} y={2} width={13} height={13} />
          <Path d="M9.00065 5L4.39237 9.60828L4.39236 9.60829C4.19771 9.80294 4.10039 9.90026 4.03342 10.0186C3.96644 10.1368 3.93306 10.2704 3.86629 10.5374L3.5361 11.8582C3.44584 12.2192 3.40071 12.3998 3.5008 12.4999C3.60089 12.5999 3.7814 12.5548 4.14244 12.4646L5.46322 12.1344C5.73028 12.0676 5.86381 12.0342 5.9821 11.9672C6.10039 11.9003 6.19771 11.8029 6.39236 11.6083L11.0007 7C11.2733 6.72738 11.4096 6.59106 11.4825 6.44402C11.6211 6.16424 11.6211 5.83576 11.4825 5.55598C11.4096 5.40894 11.2733 5.27262 11.0007 5L11.0006 4.99999C10.728 4.72737 10.5917 4.59106 10.4447 4.51819C10.1649 4.37955 9.83641 4.37955 9.55663 4.51819C9.40959 4.59106 9.27328 4.72738 9.00065 5Z" />
        </Mask>
        <Path
          d="M3.86629 10.5374L1.92601 10.0524L3.86629 10.5374ZM3.5361 11.8582L5.47638 12.3433L5.47638 12.3433L3.5361 11.8582ZM4.14244 12.4646L3.65737 10.5243L3.65736 10.5243L4.14244 12.4646ZM5.46322 12.1344L5.94829 14.0746L5.46322 12.1344ZM3.5008 12.4999L4.91502 11.0856L4.91501 11.0856L3.5008 12.4999ZM5.9821 11.9672L6.96749 13.7076L6.9675 13.7076L5.9821 11.9672ZM11.0007 5L12.4149 3.58579L12.4036 3.57456L12.3922 3.56352L11.0007 5ZM11.4825 5.55598L13.2745 4.66795L13.2745 4.66795L11.4825 5.55598ZM11.4825 6.44402L13.2745 7.33205L13.2745 7.33205L11.4825 6.44402ZM9.55663 4.51819L10.4447 6.31023L10.4447 6.31023L9.55663 4.51819ZM11.0006 4.99999L9.58643 6.41421L9.59765 6.42543L9.60905 6.43647L11.0006 4.99999ZM10.4447 4.51819L9.55663 6.31023L9.55664 6.31023L10.4447 4.51819ZM4.39236 9.60829L2.97815 8.19407L2.97815 8.19408L4.39236 9.60829ZM4.03342 10.0186L5.77382 11.0039L5.77382 11.0039L4.03342 10.0186ZM5.80658 11.0225L10.4149 6.41421L7.58644 3.58579L2.97815 8.19407L5.80658 11.0225ZM9.58644 5.58579L4.97815 10.1941L7.80658 13.0225L12.4149 8.41421L9.58644 5.58579ZM1.92601 10.0524L1.59581 11.3731L5.47638 12.3433L5.80658 11.0225L1.92601 10.0524ZM4.62751 14.4048L5.94829 14.0746L4.97815 10.1941L3.65737 10.5243L4.62751 14.4048ZM1.59581 11.3731C1.56699 11.4884 1.48454 11.7963 1.45657 12.0822C1.42618 12.3928 1.39907 13.2266 2.08659 13.9141L4.91501 11.0856C5.18069 11.3513 5.33313 11.6671 5.40043 11.9595C5.45911 12.2144 5.44364 12.4096 5.43757 12.4716C5.43097 12.539 5.4219 12.5707 5.43099 12.5297C5.43936 12.492 5.45186 12.4414 5.47638 12.3433L1.59581 11.3731ZM3.65736 10.5243C3.55929 10.5488 3.50865 10.5613 3.47092 10.5697C3.42993 10.5788 3.4616 10.5697 3.52905 10.5631C3.5911 10.557 3.78622 10.5415 4.04116 10.6002C4.33353 10.6675 4.64934 10.82 4.91502 11.0856L2.08658 13.9141C2.77409 14.6016 3.60786 14.5745 3.91848 14.5441C4.20438 14.5161 4.51222 14.4337 4.62751 14.4048L3.65736 10.5243ZM4.97815 10.1941C4.95344 10.2188 4.93235 10.2399 4.91279 10.2593C4.89336 10.2787 4.87737 10.2945 4.86358 10.308C4.84982 10.3215 4.83976 10.3312 4.83237 10.3382C4.82877 10.3416 4.8261 10.3441 4.82426 10.3458C4.82241 10.3475 4.82155 10.3483 4.82157 10.3482C4.82159 10.3482 4.82263 10.3473 4.8246 10.3456C4.82657 10.3439 4.82958 10.3413 4.83356 10.338C4.84151 10.3314 4.85357 10.3216 4.86931 10.3098C4.8852 10.2979 4.90426 10.2843 4.92628 10.2699C4.94841 10.2553 4.97196 10.2408 4.9967 10.2268L6.9675 13.7076C7.37664 13.476 7.68701 13.1421 7.80658 13.0225L4.97815 10.1941ZM5.94829 14.0746C6.11234 14.0336 6.55836 13.9393 6.96749 13.7076L4.99671 10.2268C5.02145 10.2128 5.04596 10.2001 5.06983 10.1886C5.09358 10.1772 5.11504 10.1678 5.13342 10.1603C5.15163 10.1529 5.16619 10.1475 5.17595 10.1441C5.18083 10.1424 5.18459 10.1412 5.18707 10.1403C5.18955 10.1395 5.19089 10.1391 5.19091 10.1391C5.19093 10.1391 5.18983 10.1395 5.18742 10.1402C5.185 10.1409 5.18149 10.1419 5.17671 10.1432C5.1669 10.1459 5.15343 10.1496 5.13479 10.1544C5.11612 10.1593 5.09432 10.1649 5.06774 10.1716C5.04099 10.1784 5.01205 10.1856 4.97815 10.1941L5.94829 14.0746ZM9.58644 6.41421C9.65684 6.48461 9.70804 6.53585 9.75106 6.57983C9.79403 6.62375 9.81505 6.64643 9.82458 6.65711C9.83377 6.6674 9.81918 6.65202 9.79435 6.61769C9.76736 6.58038 9.72893 6.52173 9.69042 6.44402L13.2745 4.66795C13.0192 4.15268 12.5733 3.74423 12.4149 3.58579L9.58644 6.41421ZM12.4149 8.41421C12.5733 8.25577 13.0192 7.84732 13.2745 7.33205L9.69042 5.55598C9.72893 5.47827 9.76736 5.41962 9.79434 5.38231C9.81918 5.34798 9.83377 5.3326 9.82458 5.34289C9.81505 5.35357 9.79403 5.37625 9.75106 5.42017C9.70804 5.46415 9.65684 5.51539 9.58644 5.58579L12.4149 8.41421ZM9.69042 6.44402C9.55178 6.16424 9.55178 5.83576 9.69042 5.55598L13.2745 7.33205C13.6904 6.49272 13.6904 5.50728 13.2745 4.66795L9.69042 6.44402ZM10.4149 6.41421C10.4853 6.34381 10.5365 6.29261 10.5805 6.24959C10.6244 6.20662 10.6471 6.1856 10.6578 6.17607C10.668 6.16689 10.6527 6.18147 10.6183 6.20631C10.581 6.23329 10.5224 6.27173 10.4447 6.31023L8.6686 2.72616C8.15333 2.9815 7.74488 3.42735 7.58644 3.58579L10.4149 6.41421ZM12.3922 3.56352L12.3922 3.56351L9.60905 6.43647L9.60906 6.43648L12.3922 3.56352ZM12.4149 3.58578C12.2564 3.42734 11.848 2.9815 11.3327 2.72616L9.55664 6.31023C9.47893 6.27173 9.42027 6.23329 9.38297 6.20631C9.34863 6.18147 9.33325 6.16688 9.34354 6.17607C9.35421 6.1856 9.3769 6.20662 9.42082 6.24959C9.46479 6.2926 9.51603 6.34381 9.58643 6.41421L12.4149 3.58578ZM10.4447 6.31023C10.1649 6.44887 9.83641 6.44887 9.55663 6.31023L11.3327 2.72616C10.4934 2.31023 9.50793 2.31023 8.6686 2.72616L10.4447 6.31023ZM2.97815 8.19407L2.97815 8.19407L5.80658 11.0225L5.80658 11.0225L2.97815 8.19407ZM2.97815 8.19408C2.85858 8.31364 2.52466 8.62402 2.29301 9.03315L5.77382 11.0039C5.75981 11.0287 5.74535 11.0522 5.73079 11.0744C5.7163 11.0964 5.70272 11.1155 5.69081 11.1313C5.67902 11.1471 5.66928 11.1591 5.66267 11.1671C5.65936 11.1711 5.65678 11.1741 5.65507 11.1761C5.65336 11.178 5.65243 11.1791 5.65241 11.1791C5.6524 11.1791 5.65317 11.1782 5.65488 11.1764C5.65659 11.1745 5.65907 11.1719 5.66249 11.1683C5.66949 11.1609 5.67917 11.1508 5.69265 11.1371C5.70615 11.1233 5.72197 11.1073 5.74131 11.0879C5.76078 11.0683 5.78187 11.0472 5.80658 11.0225L2.97815 8.19408ZM5.80658 11.0225C5.81505 10.9886 5.82229 10.9597 5.82904 10.9329C5.83576 10.9063 5.84133 10.8845 5.84621 10.8659C5.85108 10.8472 5.85472 10.8337 5.85745 10.8239C5.85878 10.8192 5.85979 10.8157 5.86049 10.8132C5.8612 10.8108 5.86154 10.8097 5.86153 10.8097C5.86152 10.8098 5.86111 10.8111 5.8603 10.8136C5.85949 10.8161 5.85823 10.8198 5.85653 10.8247C5.85311 10.8345 5.84778 10.849 5.84035 10.8672C5.83285 10.8856 5.82349 10.9071 5.81206 10.9308C5.80058 10.9547 5.78783 10.9792 5.77382 11.0039L2.29302 9.03315C2.06137 9.44229 1.96702 9.88831 1.92601 10.0524L5.80658 11.0225Z"
          fill={color}
          mask="url(#path-1-outside-1_3243_15182)"
        />
      </G>
      <Path
        id="Vector 107"
        d="M8.33398 4.99996L10.334 3.66663L12.334 5.66663L11.0007 7.66663L8.33398 4.99996Z"
        fill={color}
      />
    </G>
  </Svg>
);

export { EditIcon };