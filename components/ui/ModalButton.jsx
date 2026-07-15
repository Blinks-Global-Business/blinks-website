"use client";

import { useModal } from "@/components/providers/ModalProvider";
import Button from "@/components/ui/Button";

export default function ModalButton({ type, variant = "primary", className = "", children }) {
  const { openModal } = useModal();

  return (
    <Button variant={variant} className={className} onClick={() => openModal(type)}>
      {children}
    </Button>
  );
}