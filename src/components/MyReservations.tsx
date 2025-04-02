import React from 'react';
import styles from './MyReservations.module.css';

interface Reservation {
  id: number;
  bloco: string;
  sala: string;
  data: string;
  horario: string;
}

interface Props {
  reservations: Reservation[];
  cancelReservation: (id: number) => void;
}

const MyReservations: React.FC<Props> = ({ reservations, cancelReservation }) => {
  return (
    <div>
      {reservations.map(reserva => (
        <div key={reserva.id} className={styles.reservationItem}>
          <span>
            {reserva.bloco} - {reserva.sala} em {reserva.data} às {reserva.horario}
          </span>
          <button 
            className={styles.cancelButton} 
            onClick={() => cancelReservation(reserva.id)}
          >
            Cancelar
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyReservations;
