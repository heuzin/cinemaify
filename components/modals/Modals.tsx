"use client";

import React from "react";
import { InfoModal } from "./InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

const Modals = () => {
  const { isOpen, closeModal } = useInfoModal();
  return <InfoModal visible={isOpen} onClose={closeModal} />;
};

export default Modals;
