import React, {
  useState, useEffect, useRef,
} from 'react';
import {
  StyleSheet, Animated, TouchableOpacity, ViewStyle, Dimensions, View, LayoutChangeEvent,
} from 'react-native';
import { Container, Text } from 'components/atoms';
import Theme from 'theme';

interface TabProps {
  tabs: string[];
  initialTab: number;
  onTabChange: (tabIndex: number) => void;
  inverted?: boolean;
  style?: ViewStyle;
}

const window = Dimensions.get('window');

const Tab: React.FC<TabProps> = ({
  tabs, initialTab, onTabChange, inverted = false, style,
}) => {
  const { tab, bottomLine, tabLine } = styles;

  const componentRef = useRef<View>(null);
  const [componentWidth, setComponentWidth] = useState(window.width);
  const [activeTab, setActiveTab] = useState<number>(initialTab);
  const [tabWidths, setTabWidths] = useState<number[]>([]);

  const translateX = useRef(new Animated.Value(initialTab * 100)).current;

  useEffect(() => {
    const maxTranslateX = componentWidth / tabs.length;
    const toValue = Math.min(activeTab * maxTranslateX, maxTranslateX * (tabs.length - 1));

    Animated.spring(translateX, {
      toValue,
      useNativeDriver: false,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, componentWidth]);

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current?.measure((x, y, width) => {
        setComponentWidth(width);
      });
    }
  }, []);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
    onTabChange(tabIndex);
  };

  const handleTabLayout = (index: number, event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const newTabWidths = [...tabWidths];
    newTabWidths[index] = width;
    setTabWidths(newTabWidths);
  };

  return (
    <Container ref={componentRef} flex style={style}>
      <Container flex row>
        {tabs.map((value, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabChange(index)}
            style={[tab, { width: tabWidths[index] }]}
            onLayout={(event) => handleTabLayout(index, event)}
          >
            <Text
              text={value}
              textAlign="center"
              textColor={inverted ? Theme.Colors.PlaceboBlue : Theme.Colors.DarkSoul}
              fontWeight={activeTab === index ? 'Bold' : 'Regular'}
              numberOfLines={1}
            />
          </TouchableOpacity>
        ))}
      </Container>
      <Container style={{
        ...bottomLine,
        ...inverted && { backgroundColor: Theme.Colors.DarkSoul },
      }}
      >
        <Animated.View style={[{
          ...tabLine,
          ...inverted && { backgroundColor: Theme.Colors.PlaceboBlue },
        },
        { width: tabWidths[activeTab], transform: [{ translateX }] }]}
        />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLine: {
    height: 4,
    borderRadius: 4,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
  tabLine: {
    height: 4,
    borderRadius: 4,
    backgroundColor: Theme.Colors.DarkSoul,
  },
});

export default Tab;
