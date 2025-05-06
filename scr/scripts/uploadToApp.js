const uploadImageToApp = async () => {
  if (!image) {
    Alert.alert("Error", "Please select an image first.");
    return null;
  }

  try {
    setLoading(true);

    const fileUri = image;
    const fileName = fileUri.split("/").pop();
    const fileType = mime.lookup(fileName) || "image/jpeg";

    // Генеруємо унікальний ID для файлу
    const uniqueFileId = ID.unique(); 

    // Отримуємо Blob для файлу
    const response = await fetch(fileUri);
    const blob = await response.blob();

    // Завантажуємо файл у Appwrite
    const uploadedFile = await storage.createFile(
      "67d1613a0037322b48b2", // ID бакету
      uniqueFileId, // Тепер передаємо унікальний ID файлу
      blob
    );

    setLoading(false);
    return uploadedFile.$id;
  } catch (error) {
    console.error("Upload error:", error);
    setLoading(false);
    Alert.alert("Error", "Failed to upload image.");
    return null;
  }
};
