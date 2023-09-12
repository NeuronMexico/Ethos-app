import { StyleSheet } from 'react-native';
import Theme from 'theme';

const typographyLightStyle = StyleSheet.create({
  header: {
    fontSize: Theme.Sizes.Header,
    fontFamily: Theme.Fonts.Semibold,
    color: Theme.Colors.DarkSoul,
    lineHeight: 22,
  },
  title: {
    fontSize: Theme.Sizes.Title,
    fontFamily: Theme.Fonts.Bold,
    color: Theme.Colors.DarkSoul,
    lineHeight: 25,
  },
  subtitle: {
    fontSize: Theme.Sizes.Subtitle,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.DarkSoul,
    lineHeight: 25,
  },
  body: {
    fontSize: Theme.Sizes.Body,
    fontFamily: Theme.Fonts.Regular,
    color: Theme.Colors.DarkSoul,
    lineHeight: 21,
  },
});

export { typographyLightStyle };
