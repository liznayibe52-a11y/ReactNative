// ============================================================
// MOCK DATA — src/data/mockData.ts
// ============================================================
// Datos de ejemplo para tu dominio asignado.
// Reemplaza estos datos con información coherente a tu dominio.
// ============================================================

import { Foundation } from '../types';

// TODO: Reemplaza los valores por datos reales de tu dominio
// Usa imágenes representativas — puedes usar URLs de picsum.photos
// o incluir imágenes locales en assets/

export const MOCK_ITEMS: Foundation[] = [
  {
    id: '1',
    name: 'Refuerzo escolar y acompañamiento',
    description: 'Programas para mejorar el rendimiento académico y prevenir la deserción escolar en escuelas públicas.',
    imageUri: require('../../assets/niño.png'),
    duration: '3 meses',
    registrations: 120,
    state: 'Activo',
    // TODO: Agrega las propiedades específicas de tu dominio
  },
  {
    id: '2',
    name: 'Talleres de habilidades socioemocionales',
    description: 'Programas para desarrollar competencias sociales y emocionales en estudiantes.',
    imageUri: require('../../assets/emociones.jpeg'),
    duration: '2 meses',
    registrations: 80,
    state: 'Activo',
    // TODO: Agrega las propiedades específicas de tu dominio
  },
  {
    id: '3',
    name: 'Programas de apoyo a la familia',
    description: 'Iniciativas para involucrar a las familias en el proceso educativo.',
    imageUri: require('../../assets/familia.jpeg') ,
    duration: '1 mes',
    registrations: 60,
    state: 'Activo',
    // TODO: Agrega las propiedades específicas de tu dominio
  },
  {
    id: '4',
    name: 'Programas de mentoría y orientación vocacional',
    description: 'Iniciativas para guiar a los estudiantes en la elección de carreras y desarrollo profesional.',
    imageUri: require('../../assets/vocacion.jpeg'),
    duration: '3 meses',
    registrations: 100,
    state: 'Activo',
    // TODO: Agrega las propiedades específicas de tu dominio
  },
];
