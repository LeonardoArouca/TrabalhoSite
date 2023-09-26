import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Comment({ comment }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textoComentario}>{comment.texto}</Text>
      <Text style={styles.autorComentario}>- {comment.autor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  textoComentario: {
    fontSize: 16,
  },
  autorComentario: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default Comment;
