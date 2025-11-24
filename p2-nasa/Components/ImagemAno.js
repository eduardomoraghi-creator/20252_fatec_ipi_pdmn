import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default class ImagemAno extends React.Component {
  state = {
    imagens: [],
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.termoBusca !== this.props.termoBusca ||
      prevProps.anoSelecionado !== this.props.anoSelecionado
    ) {
      this.buscarImagens();
    }
  }

  buscarImagens() {
    const { termoBusca, anoSelecionado } = this.props;
    if (!termoBusca || !anoSelecionado) return;

    const url = `https://images-api.nasa.gov/search?q=${termoBusca}&media_type=image&year_start=${anoSelecionado}&year_end=${anoSelecionado}`;

    axios.get(url).then((response) => {
      this.setState({ imagens: response.data.collection.items });
    });
  }

  render() {
    const { imagens } = this.state;

    return (
      <FlatList
        data={imagens}
        keyExtractor={(item) => item.links[0].href}
        numColumns={2}
        style={styles.container}
        renderItem={({ item }) => {
          const { data, links } = item;

          return (
            <View style={styles.item}>
              <Text style={styles.titulo}>{data[0].title}</Text>
              <Image source={{ uri: links[0].href }} style={styles.foto} />
              <Text style={styles.descricao} numberOfLines={4}>
                {data[0].description}
              </Text>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    alignSelf: "center",
  },
  item: {
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    marginVertical: 2,
    fontSize: 12,
  },
  foto: {
    width: 130,
    height: 130,
  },
  descricao: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 4,
  },
});
