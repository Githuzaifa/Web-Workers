// Web Worker script to apply filters
self.onmessage = function(event) {

    console.log(1);
    const imageData = event.data;
    const data = imageData.data;

    // Apply filters here (example: invert colors)
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]; // Red
        data[i + 1] = 255 - data[i + 1]; // Green
        data[i + 2] = 255 - data[i + 2]; // Blue
    }

    self.postMessage(imageData);
};
