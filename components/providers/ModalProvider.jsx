"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);

  const openModal = (type, data = null) => {
    setActiveModal(type);
    setModalData(data);
  };
  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal doit être utilisé à l'intérieur de ModalProvider");
  return ctx;
}