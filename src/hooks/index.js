import React from 'react';
import { ToastProvider } from './toast';

const AppProvider = ({ children }) => (
  <ToastProvider>
    {children}
  </ToastProvider>
);

export default AppProvider;
