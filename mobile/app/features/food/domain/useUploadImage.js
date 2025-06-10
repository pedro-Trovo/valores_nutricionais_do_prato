import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export function useUploadImage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUploadImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permissão necessário para acessar a galeria de fotos!');
      return;
    }

    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
      base64: false,
    });

    if (!pickedImage.canceled) {
      const imageUri = pickedImage.assets[0].uri;
      const mimeType = pickedImage.assets[0].mimeType;

      return { imageUri, mimeType };
    }
  }

  return { getUploadImage, loading, error };
}
