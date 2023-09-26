import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function Product({ produto, onProductPress }) {
  return (
    <TouchableOpacity onPress={() => onProductPress(produto)}>
      <View style={styles.container}>
        <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.precoProduto}>R$ {produto.preco.toFixed(2)}</Text>
        <Text style={styles.descricaoProduto}>{produto.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  imagemProduto: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  nomeProduto: {
    fontSize: 18,
  },
  precoProduto: {
    fontSize: 16,
    color: 'green',
  },
});

export default Product;
