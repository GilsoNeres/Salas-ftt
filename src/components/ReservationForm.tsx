// src/components/ReservationForm.tsx
import React, { useState } from 'react';

interface ReservationData {
  bloco: string;
  sala: string;
  data: string;
  horario: string;
}

interface Reservation {
  id: number;
  bloco: string;
  sala: string;
  data: string;
  horario: string;
}

interface ReservationFormProps {
  addReservation: (reservation: Reservation) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ addReservation }) => {
  const [formData, setFormData] = useState<ReservationData>({
    bloco: '',
    sala: '',
    data: '',
    horario: '',
  });
  const [message, setMessage] = useState<string>('');

  // Dados simulados para blocos e salas
  const blocks = ['Bloco A', 'Bloco B', 'Bloco C'];
  const roomsByBlock: { [key: string]: string[] } = {
    'Bloco A': ['Sala A1', 'Sala A2'],
    'Bloco B': ['Sala B1', 'Sala B2'],
    'Bloco C': ['Sala C1', 'Sala C2'],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.bloco || !formData.sala || !formData.data || !formData.horario) {
      setMessage('Preencha todos os campos.');
      return;
    }
    // Simula a criação de uma reserva (gerando um id com Date.now())
    const newReservation: Reservation = {
      id: Date.now(),
      bloco: formData.bloco,
      sala: formData.sala,
      data: formData.data,
      horario: formData.horario,
    };
    addReservation(newReservation);
    setMessage('Reserva realizada com sucesso!');
    // Limpa o formulário
    setFormData({ bloco: '', sala: '', data: '', horario: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='blocosaladatahorario'>
        <label htmlFor="bloco">Bloco:</label>
        <select
          name="bloco"
          id="bloco"
          value={formData.bloco}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um bloco</option>
          {blocks.map((block) => (
            <option key={block} value={block}>
              {block}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sala">Sala:</label>
        <select
          name="sala"
          id="sala"
          value={formData.sala}
          onChange={handleChange}
          required
          disabled={!formData.bloco}
        >
          <option value="">Selecione uma sala</option>
          {formData.bloco &&
            roomsByBlock[formData.bloco].map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="data">Data:</label>
        <input
          type="date"
          name="data"
          id="data"
          value={formData.data}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="horario">Horário:</label>
        <input
          type="time"
          name="horario"
          id="horario"
          value={formData.horario}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Reservar</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ReservationForm;
