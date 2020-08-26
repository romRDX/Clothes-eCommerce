import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
} from 'react-icons/fi';

import { useToast, ToastMessage } from '../../../hooks/toast';

import { Container } from './styles';

const Toast = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type}>
      <FiAlertCircle />
      <div>
        <p>{message.description}</p>
      </div>

      <button
        onClick={() => removeToast(message.id)}
        type="button"
      >
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
