// src/data/mockData.ts
// Datos de prueba genéricos para la app.
// TODO: reemplazar con datos de tu dominio asignado.

import type { Projects } from '../types';

// ============================================
// LISTA PRINCIPAL DE ELEMENTOS
// ============================================
// Estos son datos genéricos de placeholder.
// Debes reemplazarlos con datos coherentes a tu dominio.
//
// Ejemplos:
//   Biblioteca  → libros con autor, ISBN, páginas
//   Farmacia    → medicamentos con precio, stock, dosis
//   Gimnasio    → rutinas con duración, grupos musculares
//   Restaurante → platillos con precio, ingredientes
//   Cine        → películas con director, año, género

export const ITEMS: Projects[] = [
  {
    id: '1',
    name: 'Alimentando Esperanza',
    description: 'Programa de distribución de alimentos y nutrición para familias en situación de vulnerabilidad en zonas rurales.',
    location: 'Ciudad Bolívar, Bogotá',
    date: '2025-03-15',
    time: '08:00',
    attendees: 120,
    state: 'activo',
  },
  {
    id: '2',
    name: 'Aulas Sin Fronteras',
    description: 'Proyecto de educación inclusiva que brinda acceso a materiales escolares y tutorías gratuitas a niños de bajos recursos.',
    location: 'Bosa, Bogotá',
    date: '2025-04-01',
    time: '09:00',
    attendees: 85,
    state: 'activo',
  },
  {
    id: '3',
    name: 'Manos que Curan',
    description: 'Jornadas de salud preventiva con brigadas médicas, odontológicas y psicológicas para comunidades sin acceso a servicios de salud.',
    location: 'Usme, Bogotá',
    date: '2025-05-20',
    time: '07:30',
    attendees: 200,
    state: 'pendiente',
  },
  {
    id: '4',
    name: 'Verde Futuro',
    description: 'Iniciativa ambiental de reforestación y educación ecológica en colegios y comunidades del área metropolitana.',
    location: 'Suba, Bogotá',
    date: '2025-02-10',
    time: '10:00',
    attendees: 60,
    state: 'completado',
  },
  {
    id: '5',
    name: 'Tejiendo Comunidad',
    description: 'Talleres de emprendimiento y oficios para mujeres cabeza de hogar, fomentando la independencia económica y el trabajo en red.',
    location: 'Kennedy, Bogotá',
    date: '2025-06-05',
    time: '14:00',
    attendees: 45,
    state: 'pendiente',
  },
  {
    id: '6',
    name: 'Refugio Seguro',
    description: 'Programa de atención y acompañamiento psicosocial a familias víctimas de desplazamiento forzado.',
    location: 'Rafael Uribe Uribe, Bogotá',
    date: '2025-01-18',
    time: '08:00',
    attendees: 150,
    state: 'inactivo',
  },
  {
    id: '7',
    name: 'Código Joven',
    description: 'Capacitación en programación, diseño digital y habilidades tecnológicas para jóvenes entre 15 y 25 años en riesgo de exclusión.',
    location: 'Engativá, Bogotá',
    date: '2025-07-10',
    time: '15:00',
    attendees: 40,
    state: 'pendiente',
  },
  {
    id: '8',
    name: 'Abuelitos Felices',
    description: 'Visitas y actividades recreativas, culturales y de salud mental dirigidas a adultos mayores en hogares geriátricos con escasos recursos.',
    location: 'Fontibón, Bogotá',
    date: '2025-03-28',
    time: '10:30',
    attendees: 70,
    state: 'activo',
  },
  {
    id: '9',
    name: 'Deporte con Propósito',
    description: 'Ligas deportivas barriales como herramienta de prevención de violencia',
    location: 'Chapinero, Bogotá',
    date: '2025-08-01',
    time: '16:00',
    attendees: 95,
    state: 'pendiente',
  },
  {
    id: '10',
    name: 'Semillas de Paz',
    description: 'Proyecto de reconciliación y memoria histórica que promueve el diálogo comunitario y la cultura de paz en territorios afectados por el conflicto.',
    location: 'San Cristóbal, Bogotá',
    date: '2025-02-25',
    time: '09:00',
    attendees: 180,
    state: 'completado',
  },
];

// ============================================
// LISTA DE FAVORITOS
// ============================================
// Subconjunto de elementos para la pestaña Favorites.
// TODO: seleccionar elementos coherentes con tu dominio.

export const FAVORITES: Projects[] = [
  ITEMS[0],
  ITEMS[2],
  ITEMS[4],
];
