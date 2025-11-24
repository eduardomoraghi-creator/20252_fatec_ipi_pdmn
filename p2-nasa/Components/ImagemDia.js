import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios"; 

export default class ImagemDia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fotos: [],
    };
  }

  componentDidMount() {
    const { apiKey } = this.props;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2025-11-22&end_date=2025-11-24`;

    axios.get(url).then((response) => {
      this.setState({ fotos: response.data });
    });
  }

  render() {
    const { fotos } = this.state;

    return (
      <View style={styles.containerFotosDia}>
        <View style={styles.rowFotosDia}>
          {fotos.map((item) => (
            <View key={item.date} style={styles.foto}>
              <Image style={styles.fotosDia} source={{ uri: item.url }} />
              <Text style={styles.data}>{item.date}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFotosDia: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 14,
  },
  rowFotosDia: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  foto: {
    alignItems: "center",
    margin: 5,
  },
  fotosDia: {
    width: 100,
    height: 100,
  },
  data: {
    textAlign: "center",
    fontSize: 12,
  },
});
