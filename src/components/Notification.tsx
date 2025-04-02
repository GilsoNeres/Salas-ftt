import React from 'react';
import styles from './Notification.module.css';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type = 'info', onClose }) => {
  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <span>{message}</span>
      <button className={styles.closeButton} onClick={onClose}>X</button>
    </div>
  );
};

export default Notification;
