# Web-Workers
## Brief Description

The Image Processing Tool is a web application developed to apply filters and effects to images using Web Workers. It allows users to upload an image file, select various filters, and view both the original and modified images side by side.

## Instructions to run app locally

1. Clone the repository to your local machine. git clone "repository-url"
2. navigate to the repository directory. cd "repositoy-directory"
3. Open the application by writing the following command in the directory containing the project: "python -m http.server" and go to localhost:8000 in your browser.
4. Choose an image file using the provided input field.
5. View the original and modified images side by side.

## Performance improvements with web workers

Using Web Workers improves the performance of the Image Processing Tool by offloading heavy image processing tasks to background threads. This prevents blocking the main UI thread and provides a smoother user experience, especially when processing large images or applying complex filters.

## Challenges Faced and Solutions

### Cross-Origin Restrictions: 

The main challenge was encountered when trying to access the Web Worker script from a local file system, resulting in cross-origin errors. This was resolved by serving the files through a local server, overcoming the security restrictions.

### Synchronization: 

Ensuring proper synchronization between the main thread and Web Workers required careful handling of message passing and asynchronous operations. This was addressed by structuring the code to handle asynchronous events effectively.

## References and Resources

Web Workers API Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
W3Schools Web Workers Documentation: https://www.w3schools.com/html/html5_webworkers.asp
