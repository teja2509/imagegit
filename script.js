function uploadImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageSrc = e.target.result;
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;

        document.getElementById('imageContainer').appendChild(imgElement);

        // Save image to the server
        saveImage(file);
    }

    reader.readAsDataURL(file);
}

function saveImage(file) {
    // Here you would write code to upload the image to the server
    // For this example, we'll just simulate it by copying the image to the media folder
    const formData = new FormData();
    formData.append('image', file);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log('Image uploaded successfully');
    }).catch(error => {
        console.error('Error uploading image:', error);
    });
}
