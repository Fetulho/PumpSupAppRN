import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VendasScreen = () => {
  const [vendas, setVendas] = useState([]);
  const [novaVenda, setNovaVenda] = useState({
    data: '',
    produtos: [],
    valorTotal: 0,
  });

  const navigation = useNavigation();

  // Carregar vendas do banco de dados (implementar)
  useEffect(() => {
    // Buscar vendas do banco de dados
    // setVendas(vendasDoBancoDeDados);
  }, []);

  // Adicionar nova venda
  const adicionarVenda = () => {
    // Salvar a nova venda no banco de dados (implementar)
    // setVendas([...vendas, novaVenda]);
    setNovaVenda({
      data: '',
      produtos: [],
      valorTotal: 0,
    });
  };

  // Renderizar a lista de vendas
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.vendaItem} onPress={() => navigation.navigate('Detalhes da Venda', { venda: item })}>
      <Text style={styles.vendaData}>{item.data}</Text>
      <Text style={styles.vendaValorTotal}>R$ {item.valorTotal.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vendas</Text>

      {/* Formulário para adicionar nova venda */}
      <View style={styles.form}>
        {/* Adicione campos para data, produtos e valor total da venda */}
        <Button title="Adicionar Venda" onPress={adicionarVenda} />
      </View>

      {/* Lista de vendas */}
      <FlatList
        data={vendas}
        renderItem={renderItem}
        keyExtractor={(item) => item.data}
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
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  vendaItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  vendaData: {
    fontSize: 16,
  },
  vendaValorTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VendasScreen;
