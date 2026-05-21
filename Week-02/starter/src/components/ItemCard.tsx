import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Donation } from '../types';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';

interface ItemCardProps {
  item: Donation;
  onPress: (item: Donation) => void;
}

/**
 * Tarjeta reutilizable para mostrar un elemento del dominio.
 * Personaliza el contenido según los campos de tu interfaz Item.
 */
export function ItemCard({ item, onPress }: ItemCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress(item)}
      accessibilityRole="button"
      accessibilityLabel={item.name}
    >
      {/* Nombre principal del elemento */}
      <Text style={styles.itemDonationNumber}>{item.donationNumber}</Text>

      {/* TODO: Mostrar los campos adicionales de tu dominio */}
      <Text style={styles.fieldText}>Nombre Donante: {item.name}</Text>
      <Text style={styles.fieldText}>Fecha: {item.date}</Text>
      <Text style={styles.fieldText}>Descripción: {item.descriptionType}</Text>
      <Text style={styles.fieldText}>Monto Donación: {item.amount}</Text>
      {/* Ejemplos:
        Biblioteca:
          <Text style={styles.fieldText}>{item.author}</Text>
          <Text style={styles.fieldText}>{item.available ? 'Disponible' : 'Prestado'}</Text>

        Farmacia:
          <Text style={styles.fieldText}>${item.price}</Text>
          <Text style={styles.fieldText}>Stock: {item.stock}</Text>

        Gimnasio:
          <Text style={styles.fieldText}>Plan: {item.plan}</Text>
          <Text style={styles.fieldText}>Vence: {item.expiresAt}</Text>
      */}

      {/* TODO: Si tu dominio tiene un badge de estado/categoría, agrégalo aquí */}
      {/* Ejemplo:
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.category}</Text>
        </View>
      */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Tipo de donación: {item.type}</Text>
      </View>
      <View style={styles.badge}>
          <Text style={styles.badgeText}>Donación asignada al: {item.assignedProject}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.base,
    marginHorizontal: SPACING.base,
    marginVertical: SPACING.xs,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.border,
  },
  cardPressed: {
    backgroundColor: COLORS.surfaceAlt,
  },
  itemDonationNumber: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: TYPOGRAPHY.weight.semibold,
    color: COLORS.textTitle,
    marginBottom: SPACING.xs,
  },
  fieldText: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: SPACING.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.accentDim,
  },
  badgeText: {
    fontSize: TYPOGRAPHY.size.xs,
    fontWeight: TYPOGRAPHY.weight.semibold,
    color: COLORS.accent,
    textTransform: 'capitalize',
  },
});
