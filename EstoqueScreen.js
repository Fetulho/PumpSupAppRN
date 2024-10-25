import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EstoqueScreen = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    codigo: '',
    quantidade: '',
    dataValidade: '',
    precoCusto: '',
    precoVenda: '',
  });

  const navigation = useNavigation();

  // Carregar produtos do banco de dados (implementar)
  useEffect(() => {
    // Buscar produtos do banco de dados
    // setProdutos(produtosDoBancoDeDados);
  }, []);

  // Adicionar novo produto
  const adicionarProduto = () => {
    // Salvar o novo produto no banco de dados (implementar)
    // setProdutos([...produtos, novoProduto]);
    setNovoProduto({
      nome: '',
      codigo: '',
      quantidade: '',
      dataValidade: '',
      precoCusto: '',
      precoVenda: '',
    });
  };

  // Renderizar a lista de produtos
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.produtoItem} onPress={() => navigation.navigate('Detalhes do Produto', { produto: item })}>
      <Text style={styles.produtoNome}>{item.nome}</Text>
      <Text style={styles.produtoCodigo}>{item.codigo}</Text>
      <Text style={styles.produtoQuantidade}>{item.quantidade} em estoque</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque</Text>

      {/* Formulário para adicionar novo produto */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChangeText={(text) => setNovoProduto({ ...novoProduto, nome: text })}
        />
        {/* Adicione campos para os outros atributos do produto */}
        <Button title="Adicionar Produto" onPress={adicionarProduto} />
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.codigo}
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
  produtoItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  produtoCodigo: {
    fontSize: 16,
  },
  produtoQuantidade: {
    fontSize: 14,
    color: '#777',
  },
});

export default EstoqueScreen;
