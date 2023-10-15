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
  
    const totalDuration = 8000; // Total duration for the fake upload in milliseconds
    const intervalDuration = 200; // Interval duration for updating progress (e.g., every 100ms)
    const steps = totalDuration / intervalDuration;
    let stepCount = 0;
  
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        stepCount += 1;
        if (stepCount >= steps) {
          setIsUploading(false);
          return 100; // Ensure progress reaches 100% even if steps aren't exact
        }
        return (stepCount / steps) * 100;
      });
    }, intervalDuration);
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
    </div>
  );
};

export default FileUploadBox;
