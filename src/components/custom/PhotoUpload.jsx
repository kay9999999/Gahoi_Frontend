import React, { useState, useRef } from "react";

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = (e) => {
    e.stopPropagation(); // Prevent triggering file upload
    setSelectedImage(null);
  };

  return (
    <div className="w-full md:w-48 p-3 flex justify-center items-start order-first md:order-last">
      <div
        className="bg-purple-200 w-32 h-40 flex flex-col justify-center items-center border border-gray-400 cursor-pointer relative overflow-hidden group"
        onClick={handleImageClick}
      >
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col items-center justify-center transition-all">
              <span className="opacity-0 group-hover:opacity-100 text-white text-sm mb-2">
                Change Photo
              </span>
              <button
                className="opacity-0 group-hover:opacity-100 text-white text-sm bg-red-500 bg-opacity-70 px-2 py-1 rounded"
                onClick={handleDeletePhoto}
              >
                Delete Photo
              </button>
            </div>
          </>
        ) : (
          <span className="text-center">फोटो लगाए</span>
        )}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default PhotoUpload;
