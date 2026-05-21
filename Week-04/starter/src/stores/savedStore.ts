// src/stores/savedStore.ts
// Store Zustand para gestionar los ítems guardados/favoritos.
// TODO: implementar el store completo para tu dominio.

import { create } from 'zustand';
import type { Beneficiary } from '../types';

// ============================================================
// INTERFACE DEL STORE
// ============================================================
// Define el estado y las acciones del store de guardados.
// TODO: adaptar los nombres según la semántica de tu dominio.
//   Biblioteca  → ReadingListStore con addToReadingList / removeFromReadingList
//   Farmacia    → CartStore con addToCart / removeFromCart
//   Restaurante → OrderStore con addToOrder / removeFromOrder

interface SavedBeneficiaryStore {
  // Lista de ítems guardados
  items: Beneficiary[];

  // TODO: implementar la acción para agregar un ítem al store
  // Debe verificar que el ítem no esté ya guardado (sin duplicados)
  addBeneficiary: (item: Beneficiary) => void;

  // TODO: implementar la acción para eliminar un ítem por id
  removeBeneficiary: (id: string) => void;

  // TODO: implementar la acción para vaciar todos los guardados
  clearAllBeneficiaries: () => void;

  // Helper: devuelve true si el ítem con ese id está guardado
  // Útil para el botón "Guardar" / "Quitar" en DetailScreen
  isBeneficiarySaved: (id: string) => boolean;
}

// ============================================================
// CREAR EL STORE
// ============================================================
// TODO: implementar cada acción usando `set` y/o `get`

export const useSavedStore = create<SavedBeneficiaryStore>((set, get) => ({
  items: [],

  addBeneficiary: (item) => {
    // TODO: implementar
    // Verificar que el ítem no esté ya en la lista antes de agregar
    // Ejemplo:
    const alreadySaved = get().items.some((i) => i.id === item.id);
    if (alreadySaved) return;
    set((state) => ({ items: [...state.items, item] }));
  },

  removeBeneficiary: (id) => {
    // TODO: implementar
    // Filtrar el ítem por id
    set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },

  clearAllBeneficiaries: () => {
    // TODO: implementar
    set({ items: [] });
  },

  isBeneficiarySaved: (id) => {
    // TODO: implementar
    // Usar `get()` para leer el estado actual dentro de la acción
    return get().items.some((i) => i.id === id);
  },
}));