// ============================================================
// COMPONENT: ItemCard
// ============================================================
// Tarjeta reutilizable para mostrar un elemento del dominio.
// Este componente se renderiza por cada item en HomeScreen.
// ============================================================

import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Foundation } from '../types';

interface ItemCardProps {
  item: Foundation;
  onPress: (item: Foundation) => void;
}

export function ItemCard({ item, onPress }: ItemCardProps): React.JSX.Element {
  return (
    // TODO: Implementar el layout de la tarjeta usando Flexbox
    // La tarjeta debe mostrar: imagen, nombre, subtítulo y un botón de acción
    //
    // Estructura sugerida:
    <Pressable onPress={() => onPress(item)}
    style={({ pressed }) => [ styles.card,pressed && styles.cardPressed]}>
    <Image source={item.imageUri} style={styles.cardImage} resizeMode="cover" />
    <View style={styles.cardBody}>
    <Text style={styles.cardName}>{item.name}</Text>
    <Text style={styles.cardDescription}>{item.description}</Text>
    
    <Text style={styles.cardDuration}>Duración: {item.duration}</Text>
    <Text style={styles.cardRegistrations}>Inscripciones: {item.registrations}</Text>
    <Text style={styles.cardState}>Estado: {item.state}</Text>
  </View>
</Pressable>
  );
}

const styles = StyleSheet.create({

  // Estilos sugeridos para la tarjeta real — descomenta y adapta:
  card: {
     backgroundColor: '#161b22',
     borderRadius: 12,
     marginBottom: 12,
     overflow: 'hidden',
     borderWidth: 1,
     borderColor: '#30363d',
   },
   cardImage: {
     width: '100%',
     height: 160,
   },
   cardBody: {
     padding: 16,
     gap: 4,
   },
   cardName: {
     fontSize: 18,
     fontWeight: 'bold',
     color: '#ffffff',
   },
   cardDescription: {
     fontSize: 14,
     color: '#8b949e',
   },
   cardDuration: {
     fontSize: 14,
     color: '#8b949e',
   },
   cardRegistrations: {
     fontSize: 14,
     color: '#8b949e',
   },
   cardState: {
     fontSize: 14,
     color: '#8b949e',
   },
   cardPressed: {
  opacity: 0.7,
  transform: [{ scale: 0.97 }]
},
});
