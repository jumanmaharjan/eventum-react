import React, { useState } from "react";

const VideoPopup = ({ videoId, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Trigger button */}
      <a href="#" onClick={openModal} style={{ cursor: "pointer" }}>
        {trigger}
      </a>

      {/* Modal */}
      {isOpen && (
        <div
          className="video-modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            style={{ position: "relative", width: "80%", maxWidth: "900px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "transparent",
                color: "#fff",
                fontSize: "2rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </button>

            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
