import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import HeaderTwo from '../../../../../core/design-system/components/HeaderTwo';
import AppText from 'design-system/components/AppText';
import sizes from 'design-system/tokens/sizes';
import colors from 'design-system/tokens/colors';
import spacing from '../../../../../core/design-system/tokens/spacing';
import { Image } from 'react-native';
import { useState } from 'react';
import UploadImageIcon from '../../../../../core/design-system/svgs/UploadImageIcon';
import * as ImagePicker from 'expo-image-picker';
import { useFood } from '../../domain/useFood.js';

export default function FoodScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [geminiDataAnalysis, setGeminiDataAnalysis] = useState(null);

  const { getGeminiDataAnalysis, loading, error } = useFood();

  async function uploadImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permissão necessário para acessar a galeria de fotos!');
      return;
    }

    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: false,
    });

    if (!pickedImage.canceled) {
      const imageUri = pickedImage.assets[0].uri;
      const mimeType = pickedImage.assets[0].mimeType;

      setSelectedImage(imageUri);

      try {
        const result = await getGeminiDataAnalysis(imageUri, mimeType);
        setGeminiDataAnalysis(result);
      } catch (err) {
        Alert.alert('Erro ao enviar imagem', err.message);
      }
    }
  }

  return (
    <View style={styles.container}>
      <HeaderTwo />

      <View style={[styles.subcontainer, { gap: spacing.lg }]}>
        <View style={styles.subcontainer}>
          <AppText weight="bold" fontSize={sizes.xl} color={colors.darkerGray}>
            Envie uma imagem!
          </AppText>
        </View>

        <TouchableOpacity
          style={[styles.box, loading && styles.disabledArea]}
          onPress={uploadImage}
          activeOpacity={0.7}
          disabled={loading}
        >
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.image} />
          ) : (
            <View style={[styles.placeholder, styles.centerHV]}>
              <UploadImageIcon iconColor="#aba9a9" />
              <View style={[styles.centerHV, { gap: 2 }]}>
                <AppText
                  weight="bold"
                  fontSize={sizes.lg}
                  color={colors.semiDarkGray}
                >
                  Selecione uma imagem
                </AppText>
                <AppText fontSize={sizes.md} color={colors.semiDarkGray}>
                  Suporta: JPEG, JPG
                </AppText>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerHV: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledArea: {
    opacity: 0.4,
  },
  container: {
    width: '100%',
    gap: spacing.xxl + spacing.md,
  },
  subcontainer: {
    width: '100%',
    alignItems: 'center',
  },
  box: {
    width: '75%',
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderRadius: spacing.sm,
    borderStyle: 'dashed',
    aspectRatio: 1,
  },
  placeholder: {
    width: '100%',
    aspectRatio: 1,
    gap: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: spacing.sm,
  },
});
