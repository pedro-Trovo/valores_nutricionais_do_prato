import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import HeaderTwo from '../../../../../core/design-system/components/HeaderTwo';
import AppText from 'design-system/components/AppText';
import sizes from 'design-system/tokens/sizes';
import colors from 'design-system/tokens/colors';
import spacing from '../../../../../core/design-system/tokens/spacing';
import { Image } from 'react-native';
import { useState } from 'react';
import UploadImageIcon from '../../../../../core/design-system/svgs/UploadImageIcon';
import { useFood } from '../../domain/useFood.js';
import { useUploadImage } from '../../domain/useUploadImage.js';

export default function FoodScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [geminiDataAnalysis, setGeminiDataAnalysis] = useState(null);

  const { getGeminiDataAnalysis, loading, error } = useFood();
  const { getUploadImage } = useUploadImage();

  async function uploadImage() {
    const { imageUri, mimeType } = await getUploadImage();

    setSelectedImage(imageUri);

    try {
      const result = await getGeminiDataAnalysis(imageUri, mimeType);
      setGeminiDataAnalysis(result);
      console.log(result);
    } catch (err) {
      Alert.alert('Erro ao enviar imagem', err.message);
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
