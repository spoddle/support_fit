import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { account, databases, storage, ID } from "../scripts/script"

const BUCKET_ID = '67d166c5001fe46aaa94';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

   const uploadImageToAppwrite = async () => {
  if (!image) {
    Alert.alert("Error", "Please select an image first.");
    return null;
  }

  try {
    setLoading(true);

    // Отримуємо поточну сесію користувача
    const userSession = await account.get(); // Отримуємо ID активного користувача

    // Визначаємо назву файлу
    const match = /\.(\w+)$/.exec(image);
    const filename = `upload_${Date.now()}.${match ? match[1] : "jpg"}`;
    const fileId = `file_${Date.now()}`; // Унікальний ID файлу
    const type = match ? `image/${match[1]}` : "image/jpeg";

    // Формуємо `FormData` для відправки файлу
    const formData = new FormData();
    formData.append("fileId", fileId);
    formData.append("file", {
      uri: image,
      name: filename,
      type,
    });
  

    // Відправляємо файл у Appwrite Storage
    const response = await fetch(
      `https://cloud.appwrite.io/v1/storage/buckets/67d166c5001fe46aaa94/files`,
      {
        method: "POST",
        headers: {
          "X-Appwrite-Project": "67b4d4380007d92e357a",
          "X-Appwrite-Session": userSession.$id, 
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message || "Failed to upload image.");
    }

    setLoading(false);
    return result.$id; // Повертаємо ID завантаженого файлу
  } catch (error) {
    console.error("Upload error:", error);
    setLoading(false);
    Alert.alert("Error", "Failed to upload image.");
    return null;
  }
};

  const saveRecipe = async () => {
    if (!recipeName.trim()) {
      Alert.alert('Error', 'Recipe name is required');
      return;
    }

    setLoading(true);
    const imageId = await uploadImageToAppwrite();
    const imageUrl = imageId
      ? `https://cloud.appwrite.io/v1/storage/buckets/67d1613a0037322b48b2/files/${imageId}/view?project=67ae09230006c993f16a`
      : null;

    try {
      await databases.createDocument(
        '67d160340007d5f5ef8a',
        '67d1610d001026c2610d',
        ID.unique(),
        {
  
          image: imageUrl,
        }
      );

      Alert.alert('Success', ' saved!');
      
      setImage(null);
    } catch (error) {
      console.error('Database error:', error);
      Alert.alert('Error', 'Failed ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 10 }} />}
      <Button title="Upload Image" onPress={uploadImageToAppwrite} disabled={loading} />
      {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200, margin: 10 }} />}
    </View>
  );
};

export default ImageUpload;
