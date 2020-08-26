import React from 'react';

import Toast from './Toast';

import { useToast } from '../../hooks/toast';
import { Container } from './styles';

const ToastContainer = ({ ...rest }) => {

  const { messages } = useToast();

  return (
    <Container {...rest}>
      { messages && messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
