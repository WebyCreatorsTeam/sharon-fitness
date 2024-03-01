import React from 'react';
import { WorkoutTypeEnum } from '@/lib/calendly/types';
import Input from '../Input';
import Modal from '../modal';
import AmountRadio from './AmountRadio';

const CalendlyModal = ({
  modalState,
  handleCloseModal,
}: {
  modalState: boolean;
  handleCloseModal: () => void;
}) => {
  if (!modalState) return null;
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <></>
    </Modal>
  );
};

export default CalendlyModal;
