import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ComissoesScreen = () => {
  const [comissoes, setComissoes] = useState([]);

  // Carregar comissões do banco de dados (implementar)
  useEffect(() => {
    // Buscar comissões do banco de dados
    // setComissoes(comissoesDoBancoDeDados);
  }, []);

  // Renderizar a lista de comissões
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.comissaoItem}>
      <Text style={styles.comissaoNome}>{item.nome}</Text>
      <Text style={styles.comissaoValor}>R$ {item.valor.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Comissões</Text>

      {/* Lista de comissões */}
      <FlatList
        data={comissoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  comissaoItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  comissaoNome: {
    fontSize: 16,
  },
  comissaoValor: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ComissoesScreen;
