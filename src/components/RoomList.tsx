// src/components/RoomList.tsx
import React, { useEffect, useState } from 'react';

interface Room {
  id: number;
  nome: string;
  capacidade: number;
}

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    // Simulação dos dados de salas
    const mockRooms: Room[] = [
      { id: 1, nome: 'Sala A', capacidade: 30 },
      { id: 2, nome: 'Sala B', capacidade: 25 },
      { id: 3, nome: 'Sala C', capacidade: 40 },
    ];

    // Simula um delay de carregamento se desejar
    setTimeout(() => {
      setRooms(mockRooms);
    }, 500);
  }, []);

  if (rooms.length === 0) return <p>Carregando salas...</p>;

  return (
    <ul>
      {rooms.map(room => (
        <li key={room.id}>
          {room.nome} - Capacidade: {room.capacidade}
        </li>
      ))}
    </ul>
  );
};

export default RoomList;
