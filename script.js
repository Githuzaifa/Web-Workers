// Add event listener to image input field
document.getElementById('imageInput').addEventListener('change', handleImageUpload);

// Function to handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const originalImage = document.getElementById('originalImage');
            originalImage.src = reader.result;
            originalImage.onload = function() {
                applyFilters(originalImage);
            }
        };
        reader.readAsDataURL(file);
    }
}

// Function to apply filters
function applyFilters(image) {
    const originalCanvas = document.createElement('canvas');
    const originalCtx = originalCanvas.getContext('2d');
    originalCanvas.width = image.width;
    originalCanvas.height = image.height;
    originalCtx.drawImage(image, 0, 0, image.width, image.height);

    const worker = new Worker("worker.js");
    worker.postMessage(originalCtx.getImageData(0, 0, image.width, image.height));

    worker.onmessage = function(event) {
        const modifiedImage = document.getElementById('modifiedImage');
        const modifiedCanvas = document.createElement('canvas');
        modifiedCanvas.width = image.width;
        modifiedCanvas.height = image.height;
        const modifiedCtx = modifiedCanvas.getContext('2d');
        modifiedCtx.putImageData(event.data, 0, 0);
        modifiedImage.src = modifiedCanvas.toDataURL();
    };
}
