import React, { createContext, useState, useContext, useCallback } from 'react';
import { uuid } from 'uuidv4';

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [ messages, setMessages] = useState([]);
  const [ alert, setAlert] = useState({ });

  const addToast = useCallback(({ type, description, code }) => {
    if(messages.some( message => message.code === code))
      return;

    const id = uuid();

    const toast = {
      id,
      type,
      description,
      code,
    };

    setMessages((state) => [...state, toast]);
  },[messages]);

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const addAlert = useCallback(({ type, title, message})=>{
    setAlert({ active: true, type, title, message});
  },[]);

  const removeAlert = useCallback(() => {
    setAlert({});
  },[]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages, alert, addAlert, removeAlert }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);

  return context;
}
