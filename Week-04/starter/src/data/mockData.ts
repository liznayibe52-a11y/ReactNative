// src/data/mockData.ts
// Datos de ejemplo genéricos para el proyecto.
// El estudiante debe reemplazar estos datos con los de su dominio asignado.

import type { Beneficiary } from '../types';

// ============================================================
// LISTA DE ÍTEMS
// ============================================================
// TODO: reemplaza estos ítems con los de tu dominio asignado.
//   Biblioteca  → libros con author, year, genre
//   Farmacia    → medicamentos con price, stock, prescription
//   Gimnasio    → clases con instructor, schedule, capacity
//   Restaurante → platillos con price, category, spiceLevel
//   Cine        → películas con director, duration, genre
export const ITEMS: Beneficiary[] = [
  {
    id: '1',
    firstName: 'Carlos',
    lastName: 'Ramírez',
    age: 34,
    aidType: 'alimentación',
    status: 'activo',
    entryDate: '2024-01-15',
    municipality: 'Medellín',
    phone: '3101234567',
    email: 'carlos.ramirez@email.com',
  },
  {
    id: '2',
    firstName: 'María',
    lastName: 'González',
    age: 27,
    aidType: 'educación',
    status: 'activo',
    entryDate: '2024-02-10',
    municipality: 'Cali',
    phone: '3152345678',
    email: 'maria.gonzalez@email.com',
  },
  {
    id: '3',
    firstName: 'Juan',
    lastName: 'Herrera',
    age: 52,
    aidType: 'medicina',
    status: 'inactivo',
    entryDate: '2023-11-20',
    municipality: 'Pacho',
    phone: '3203456789',
    email: 'juan.herrera@email.com',
  },
  {
    id: '4',
    firstName: 'Luisa',
    lastName: 'Martínez',
    age: 41,
    aidType: 'vivienda',
    status: 'activo',
    entryDate: '2024-03-05',
    municipality: 'Envigado',
    phone: '3114567890',
    email: 'luisa.martinez@email.com',
  },
  {
    id: '5',
    firstName: 'Andrés',
    lastName: 'López',
    age: 19,
    aidType: 'educación',
    status: 'activo',
    entryDate: '2024-04-18',
    municipality: 'Fuzagasuga',
    phone: '3165678901',
    email: 'andres.lopez@email.com',
  },
  {
    id: '6',
    firstName: 'Patricia',
    lastName: 'Torres',
    age: 63,
    aidType: 'medicina',
    status: 'activo',
    entryDate: '2023-09-30',
    municipality: 'Cali',
    phone: '3006789012',
    email: 'patricia.torres@email.com',
  },
  {
    id: '7',
    firstName: 'Diego',
    lastName: 'Vargas',
    age: 38,
    aidType: 'alimentación',
    status: 'inactivo',
    entryDate: '2023-12-01',
    municipality: 'Bogotá',
    phone: '3187890123',
    email: 'diego.vargas@email.com',
  },
  {
    id: '8',
    firstName: 'Sofía',
    lastName: 'Castro',
    age: 25,
    aidType: 'vivienda',
    status: 'activo',
    entryDate: '2024-05-22',
    municipality: 'Soacha',
    phone: '3128901234',
    email: 'sofia.castro@email.com',
  },
  {
    id: '9',
    firstName: 'Valentina',
    lastName: 'Ospina',
    age: 31,
    aidType: 'alimentación',
    status: 'activo',
    entryDate: '2024-06-03',
    municipality: 'Girardot',
    phone: '3209012345',
    email: 'valentina.ospina@email.com',
  },
  {
    id: '10',
    firstName: 'Roberto',
    lastName: 'Mendoza',
    age: 47,
    aidType: 'vivienda',
    status: 'inactivo',
    entryDate: '2023-08-14',
    municipality: 'Cota',
    phone: '3140123456',
    email: 'roberto.mendoza@email.com',
  },
];