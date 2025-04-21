function displayImages(folderPath, containerId) {
    const container = document.getElementById(containerId);
    const imageNames = [];
  
    // Generate image names assuming they're named image1.jpg to image16.jpg
    for (let i = 1; i <= 16; i++) {
      imageNames.push(`image${i}.jpg`);
    }
  
    imageNames.forEach(imageName => {
      const img = document.createElement('img');
      img.src = `${folderPath}/${imageName}`;
      img.alt = imageName;
      container.appendChild(img);
    });
  }
  
  // Call the function with your folder path and container ID
  displayImages('images', 'imageContainer');
  