"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const onChange = (open: boolean) => {
    if (!open) {
      //reset song upload form
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Upload a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Songs
    </Modal>
  );
};

export default UploadModal;
