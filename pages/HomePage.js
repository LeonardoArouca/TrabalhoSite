import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const produtos = [
  {
    id: 1,
    nome: 'Kit Limpa Rápido',
    preco: 19.99,
    imagem: 'https://www.designi.com.br/images/preview/10170317.jpg',
    descricao: 'Melhor e mais barato kit para deixar sua casa brilhando!',
    
    
  },
  {
    id: 2,
    nome: 'Bola Alienígena',
    preco: 29.99,
    imagem: 'https://img.freepik.com/vetores-premium/bola-de-mundo-de-fantasia-alienigena-de-planeta-em-quadrinhos-isolada_53500-642.jpg',
    descricao: "Caiu do céu"
  },
   {
    id: 3,
    nome: 'Chuteira do neymar',
    preco: 144.99,
    imagem: 'https://static.shoptimao.com.br/produtos/chuteira-campo-nike-mercurial-victory-6-df-neymar-jr-fg/58/D12-7579-058/D12-7579-058_zoom1.jpg?ts=1679677570&ims=544x',
    descricao: 'Esta realmente é a chuteira usada na copa do mundo por Neymar!'
  },
  {
    id: 4,
    nome: 'Churrasqueira Elétrica',
    preco: 34.99,
    imagem: 'https://m.media-amazon.com/images/I/61d+3gYYAiL._AC_SX569_.jpg',
    descricao: 'Churrasqueira simples e prática'
  },
];

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos Disponíveis</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailPage', { produto: item })}
          >
            <View style={styles.produtoContainer}>
              <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
              <Text style={styles.nomeProduto}>{item.nome}</Text>
              <Text style={styles.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'lightpink', // Altere para a cor desejada, por exemplo, 'yellow' para amarelo
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black', // Altere para a cor desejada, por exemplo, 'blue' para azul
  },
  produtoCard: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    borderRadius: 12, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  imagemProduto: {
    width: '100%',
    height: 250, 
    marginBottom: 12, 
    resizeMode: 'cover',
    borderRadius: 12, 
  },
  nomeProduto: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  precoProduto: {
    fontSize: 18,
    color: 'green',
  },
});

export default HomePage;
