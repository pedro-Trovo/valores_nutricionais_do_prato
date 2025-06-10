import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
import CircularProgress from 'react-native-circular-progress-indicator';

export default function FoodScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [geminiDataAnalysis, setGeminiDataAnalysis] = useState();
  const [totalMacronutrienteGrama, setTotalMacronutrienteGrama] = useState(0);
  const [totalCalorias, setTotalCalorias] = useState(0);

  const { getGeminiDataAnalysis, loading, error } = useFood();
  const { getUploadImage } = useUploadImage();

  async function uploadImage() {
    const { imageUri, mimeType } = await getUploadImage();

    setSelectedImage(imageUri);

    try {
      const result = await getGeminiDataAnalysis(imageUri, mimeType);

      const somaGrama = result.macronutrientes.reduce(
        (total, nutriente) => total + nutriente.gramas,
        0
      );
      setTotalMacronutrienteGrama(somaGrama);

      const somaCalorias = result.alimentos.reduce(
        (total, alimento) => total + alimento.calorias,
        0
      );
      setTotalCalorias(somaCalorias);

      setGeminiDataAnalysis(result);
    } catch (err) {
      Alert.alert('Erro ao enviar imagem', err.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <HeaderTwo />

        <View style={[styles.centerHV, { gap: spacing.xxl + spacing.lg }]}>
          <View style={[styles.centerHV, { gap: spacing.lg }]}>
            <View style={styles.centerHV}>
              <AppText
                weight="bold"
                fontSize={sizes.xl}
                color={colors.darkerGray}
              >
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

          {geminiDataAnalysis && !loading && (
            <View style={{ width: '100%', gap: 30 }}>
              <View style={[styles.centerHV, styles.graphBox]}>
                <CircularProgress
                  radius={50}
                  duration={2000}
                  value={geminiDataAnalysis.macronutrientes[0].gramas}
                  maxValue={totalMacronutrienteGrama}
                  progressValueColor={colors.darkerGray}
                  title={'Carboidrato'}
                  titleColor={colors.semiDarkGray}
                  activeStrokeColor={'#F7C948'}
                  activeStrokeWidth={5}
                  inActiveStrokeColor={'#a17500'}
                  inActiveStrokeWidth={5}
                />

                <CircularProgress
                  radius={50}
                  duration={2000}
                  value={geminiDataAnalysis.macronutrientes[1].gramas}
                  maxValue={totalMacronutrienteGrama}
                  progressValueColor={colors.darkerGray}
                  title={'Proteína'}
                  titleColor={colors.semiDarkGray}
                  activeStrokeColor={'#639fff'}
                  activeStrokeWidth={5}
                  inActiveStrokeColor={'#00286b'}
                  inActiveStrokeWidth={5}
                />

                <CircularProgress
                  radius={50}
                  duration={2000}
                  value={geminiDataAnalysis.macronutrientes[2].gramas}
                  maxValue={totalMacronutrienteGrama}
                  progressValueColor={colors.darkerGray}
                  title={'Gordura'}
                  titleColor={colors.semiDarkGray}
                  activeStrokeColor={'#fc6868'}
                  activeStrokeWidth={5}
                  inActiveStrokeColor={'#8f0000'}
                  inActiveStrokeWidth={5}
                />
              </View>

              <View style={[styles.centerHV, { gap: 12 }]}>
                <AppText
                  fontSize={sizes.lg}
                  weight={'bold'}
                  color={colors.darkerGray}
                >
                  Lista de Alimentos
                </AppText>
                {geminiDataAnalysis.alimentos.map((item, index) => {
                  return (
                    <View style={{ flexDirection: 'row', gap: 7 }} key={index}>
                      <AppText fontSize={sizes.md} color={colors.darkerGray}>
                        {item.alimento.charAt(0).toUpperCase() +
                          item.alimento.slice(1)}
                      </AppText>

                      <AppText
                        fontSize={sizes.md}
                        weight={'black'}
                        color={colors.darkerGray}
                      >
                        ({item.calorias} kcal)
                      </AppText>
                    </View>
                  );
                })}
              </View>

              <View style={[styles.centerHV, {paddingBottom: 50}]}>
                <AppText
                  fontSize={sizes.lg}
                  weight={'bold'}
                  color={colors.darkerGray}
                >
                  Total de Calorias:
                </AppText>

                <AppText
                  fontSize={sizes.xl}
                  weight={'black'}
                  color={colors.darkerGray}
                >
                  {totalCalorias} kcal
                </AppText>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centerHV: {
    width: '100%',
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
  graphBox: {
    width: '100%',
    flexDirection: 'row',
    gap: 18,
    overflow: 'hidden',
  },
});
