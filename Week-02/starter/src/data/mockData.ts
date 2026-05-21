import { Donation } from '../types';

// ============================================
// MOCK DATA — Semana 02
// Reemplaza estos items genéricos con datos
// reales de tu dominio asignado.
//
// REQUISITO: mínimo 10 items
// ============================================

// TODO: Renombra ITEMS a algo descriptivo de tu dominio
//       Ejemplo: BOOKS, MEDICINES, MEMBERS, DISHES...
// TODO: Actualiza el tipo Item con los campos de tu dominio
// TODO: Rellena con datos reales y variados de tu dominio

export const DONATIONS: Donation[] = [
  {
    id: '1',
    donationNumber: 'Donación número 1',
    name: 'Luis Fernandez',
    type: 'Dinero',
    date: '25-04-2026',
    descriptionType: 'Dinero por medio de transferencia',
    amount: 1000000,
    assignedProject: 'Proyecto Animales'
  },
  {
    id: '2',
    donationNumber: 'Donación número 2',
    name: 'Maria Torres',
    type: 'Bienes Materiales',
    date: '01-05-2026',
    descriptionType: 'Mini mercados con los alimentos principales',
    amount: 15,
    assignedProject: 'Proyecto Familias'
  },
  {
    id: '3',
    donationNumber: 'Donación número 3',
    name: 'Ronal Collazos',
    type: 'Dinero',
    date: '15-03-2026',
    descriptionType: 'Dinero en efectivo',
    amount: 500000,
    assignedProject: 'Proyecto Animales'
  },
  {
    id: '4',
    donationNumber: 'Donación número 4',
    name: 'Oscar Leal',
    type: 'Dinero',
    date: '01-04-2026',
    descriptionType: 'Bonos para utiles escolares',
    amount: 25,
    assignedProject: 'Proyecto Estudiantes'
  },
  {
    id: '5',
    donationNumber: 'Donación número 5',
    name: 'Sandra Paez',
    type: 'Bienes Materiales',
    date: '23-02-2026',
    descriptionType: 'Ropa',
    amount: 50,
    assignedProject: 'Proyecto Niños'
  },
  {
    id: '6',
    donationNumber: 'Donación número 6',
    name: 'Maria Salazar',
    type: 'Bienes Materiales',
    date: '05-05-2026',
    descriptionType: 'Juguetes',
    amount: 100,
    assignedProject: 'Proyecto Niños'
  },
  {
    id: '7',
    donationNumber: 'Donación número 7',
    name: 'Miguel Porras',
    type: 'Bienes Materiales',
    date: '01-01-2026',
    descriptionType: 'Equipos de computo',
    amount: 30,
    assignedProject: 'Proyecto Estudiantes'
  },
  {
    id: '8',
    donationNumber: 'Donación número 8',
    name: 'Flor Soler',
    type: 'Dinero',
    date: '16-03-2026',
    descriptionType: 'Bonos de ropa',
    amount: 72,
    assignedProject: 'Proyecto Familias'
  },
  {
    id: '9',
    donationNumber: 'Donación número 9',
    name: 'Andres Cepeda',
    type: 'Dinero',
    date: '06-05-2026',
    descriptionType: 'Dinero en efectivo',
    amount: 800000,
    assignedProject: 'Proyecto Estudiantes'
  },
  {
    id: '10',
    donationNumber: 'Donación número 10',
    name: 'Martha Martin',
    type: 'Bienes Materiales',
    date: '18-03-2026',
    descriptionType: 'Bultos de purina',
    amount: 50,
    assignedProject: 'Proyecto Animales'
  },
  {
    id: '11',
    donationNumber: 'Donación número 11',
    name: 'Brandon Manrique',
    type: 'Bienes Materiales',
    date: '25-03-2026',
    descriptionType: 'Uniformes',
    amount: 65,
    assignedProject: 'Proyecto Estudiantes'
  },
  // TODO: puedes agregar más items para hacer la demo más rica
];
