// Importando os componentes que vão ser usados no app
import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const App = () => {
  const [cachorroImg, setCachorroImg] = useState(null);

  // fetch da api contendo todas as imagens dos cachorros
  const fetchCachorroImg = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setCachorroImg(data.message);
  // Se a imagem não aparecer por algum motivo, irá aparecer esse alerta de erro
    } catch (error) {
      console.error('Erro ao buscar imagem:', error);
    }
  };

  // Container onde aparecerá a imagem do cachorro e onde fica o botão para gerar a imagem
  return (
    <View style={styles.container}>
      {cachorroImg && <Image source={{ uri: cachorroImg }} style={styles.image} />}
      <Button title="Gerar imagem de cachorro" onPress={fetchCachorroImg} color="#CA1717" />
    </View>
  );
};

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBB87A',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
});

export default App;
