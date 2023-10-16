import React, { useState, useRef } from 'react';
import './uploadfile.css';

const FileUploadBox = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    startUpload();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const startUpload = () => {
    setIsUploading(true);
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        }
        clearInterval(interval);
        setIsUploading(false); // Set isUploading to false when upload completes
        return prevProgress;
      });
    }, 200);
  };

  return (
    <div className="wrapper">
      <header>Upload Lecture MP4</header>
      <div className="file-drop-area" onDrop={handleFileDrop} onDragOver={handleDragOver}>
        <input
          className="file-input"
          type="file"
          name="file"
          hidden
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
        <i className="fas fa-cloud-upload-alt"></i>
        <p>Drag and drop a file or click to browse</p>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
      {isUploading && (
        <section className="progress-area">
          <div className="row">
            <i className="fas fa-file-alt"></i>
            <div className="content">
              <div className="details">
                <span className="name">{selectedFile.name} • Uploading</span>
                <span className="percent">{uploadProgress}%</span>
              </div>
              <div className="loading-bar" style={{ width: `${uploadProgress}%` }}></div>
            </div>
          </div>
        </section>
      )}
      <section className="uploaded-area"></section>
      <div className="flex justify-center items-center flex-col relative z-10 ">
      <button className="analyze-button">Analyze</button>
      </div>
    </div>
  );
};

export default FileUploadBox;
