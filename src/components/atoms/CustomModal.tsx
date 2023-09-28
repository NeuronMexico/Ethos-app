import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView, Modal, ModalProps, Platform, StyleSheet, View,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

export interface CustomModalProps {
  visible: boolean;
  children: ReactNode;
  onDismiss?: () => void;
  backgroundOpacity?: number;
  blur?: boolean;
  animationType?: ModalProps['animationType'];
  presentationStyle?: 'pageSheet' | 'overFullScreen';
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onDismiss,
  children,
  backgroundOpacity,
  blur,
  animationType = 'fade',
  presentationStyle = 'overFullScreen',
}: CustomModalProps) => {
  const backgroundColor = `rgba(0,0,0,${backgroundOpacity || 0.3})`;

  return (
    <Modal
      transparent={presentationStyle === 'overFullScreen'}
      visible={visible}
      animationType={animationType}
      presentationStyle={presentationStyle}
      onDismiss={onDismiss}
      onRequestClose={onDismiss}
    >
      {blur && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={5}
        />
      )}
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor }}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

CustomModal.defaultProps = {
  onDismiss: undefined,
  backgroundOpacity: 0,
  blur: true,
};

export { CustomModal };
