import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function VendedorProfile() {
  // Dados do vendedor definidos manualmente
  const vendedorNome = 'Rodrigo';
  const vendedorEmail = 'rodrigo@gmail.com';
  const vendedorTel = '(021) 9922-15265';
  const vendedorFoto = require('../assets/imagens/perfil.jpg');
  const vendedorAvaliacao = 4.5; 

  return (
    <View style={styles.container}>
      <Image source={vendedorFoto} style={styles.foto} />
      <Text style={styles.nome}>{vendedorNome}</Text>
      <Text style={styles.informacao}>Email: {vendedorEmail}</Text>
      <Text style={styles.informacao}>Telefone: {vendedorTel}</Text>
      <View style={styles.avaliacaoContainer}>
        <Text style={styles.avaliacao}>Avaliação: {vendedorAvaliacao.toFixed(1)}</Text>
      </View>
      {/* Adicione aqui o código para exibir outras informações do vendedor, se necessário */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  informacao: {
    fontSize: 16,
    marginBottom: 8,
  },
  avaliacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avaliacao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default VendedorProfile;
