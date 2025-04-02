// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import ReservationForm from '../components/ReservationForm';
import MyReservations from '../components/MyReservations';
import Notification from '../components/Notification';

export interface Reservation {
  id: number;
  bloco: string;
  sala: string;
  data: string;
  horario: string;
}

const Dashboard: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [notification, setNotification] = useState<{ message: string; type?: 'success' | 'error' } | null>(null);

  const addReservation = (reservation: Reservation) => {
    setReservations([...reservations, reservation]);
    setNotification({ message: 'Reserva realizada com sucesso!', type: 'success' });

    setTimeout(() => setNotification(null), 3000); // Notificação desaparece após 3 segundos
  };

  const cancelReservation = (id: number) => {
    setReservations(reservations.filter(r => r.id !== id));
    setNotification({ message: 'Reserva cancelada.', type: 'error' });

    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className={styles.container}>
      <h1>Reserva de Salas</h1>
      <section>
        <h2>Realizar Reserva</h2>
        <ReservationForm addReservation={addReservation} />
      </section>
      <section>
        <h2>Minhas Reservas Futuras</h2>
        {reservations.length === 0 ? (
          <p>Você não possui reservas futuras.</p>
        ) : (
          <MyReservations reservations={reservations} cancelReservation={cancelReservation} />
        )}
      </section>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;