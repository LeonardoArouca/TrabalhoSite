import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import Comment from '../src/components/Comment';

function ProductDetailPage({ route, navigation }) {
  const { produto } = route.params;
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState(produto.comentarios || []);

  const handleCommentSubmit = () => {
    if (userComment.trim() !== '') {
      const newComment = {
        id: comments.length + 1,
        autor: 'Usuário',
        texto: userComment,
        avaliacao: 0,
      };

      setComments([...comments, newComment]);
      setUserComment('');
    }
  };

  return (
    <ScrollView>
      <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
      <View style={styles.container}>
        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.precoProduto}>R$ {produto.preco.toFixed(2)}</Text>
        <Text style={styles.descricaoProduto}>{produto.descricao}</Text>

       <Button
  title="Ver Informações do Vendedor"
  onPress={() => navigation.navigate('VendedorProfile', { vendedor: produto.vendedor })}
/>

        <Text style={styles.tituloComentarios}>Comentários e Avaliações</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentCard}>
              <Text style={styles.commentAutor}>{item.autor}</Text>
              <Text style={styles.commentTexto}>{item.texto}</Text>
              {/* Adicione estilos adicionais para avaliação aqui */}
            </View>
          )}
        />

        <Text style={styles.tituloNovoComentario}>Adicionar Comentário</Text>
        <TextInput
          style={styles.inputComentario}
          placeholder="Escreva seu comentário"
          value={userComment}
          onChangeText={(text) => setUserComment(text)}
        />
        <Button title="Enviar Comentário" onPress={handleCommentSubmit} />

        {comments.length > 0 && (
          <Comment
            comment={comments[comments.length - 1]}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'lightpink',
  },
  imagemProduto: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  nomeProduto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  precoProduto: {
    fontSize: 20,
    color: 'green',
    marginBottom: 16,
  },
  descricaoProduto: {
    fontSize: 18,
    marginBottom: 16,
  },
  tituloComentarios: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  tituloNovoComentario: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  inputComentario: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  commentCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  commentAutor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentTexto: {
    fontSize: 14,
  },
});

export default ProductDetailPage;
