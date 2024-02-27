import React from 'react';
import { WorkoutTypeEnum } from '@/lib/calendly/types';
import Input from '../Input';
import Modal from '../modal';
import AmountRadio from './AmountRadio';

const CalendlyModal = ({
  modalState,
  handleCloseModal,
  handleCreateCalendlyEvent,
}: {
  modalState: boolean;
  handleCloseModal: () => void;
  handleCreateCalendlyEvent(formData: FormData): Promise<void>;
}) => {
  if (!modalState) return null;
  console.log(modalState);

  return (
    <Modal handleCloseModal={handleCloseModal}>
      <form
        className='flex flex-col gap-6'
        dir='rtl'
        action={handleCreateCalendlyEvent}
      >
        <Input title='שם' name='name' placeholder='שם מלא' />
        <Input title='מספר טלפון' name='phone' placeholder='טלפון' type='tel' />
        <Input
          type='select'
          placeholder={Object.keys(WorkoutTypeEnum)[0]}
          optionEnum={WorkoutTypeEnum}
          name='workoutType'
          title='סוג אימון'
        />
        <AmountRadio />
        <button type='submit'>הזמנ/י אימון</button>
      </form>
    </Modal>
  );
};

export default CalendlyModal;
