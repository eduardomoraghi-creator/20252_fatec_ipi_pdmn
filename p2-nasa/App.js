import {
  Alert,
  Button,
  FlatList,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";
import AntIcon from "@expo/vector-icons/AntDesign";

export default function App() {
  const [foto, setFoto] = useState("");
  const [fotos, setFotos] = useState([]);
  const [selecionado, setSelecionado] = useState("");

  const anos = [
    { id: "ano-5", texto: new Date().getFullYear() - 5 },
    { id: "ano-4", texto: new Date().getFullYear() - 4 },
    { id: "ano-3", texto: new Date().getFullYear() - 3 },
    { id: "ano-2", texto: new Date().getFullYear() - 2 },
    { id: "ano-1", texto: new Date().getFullYear() - 1 },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>Fotos do dia</Text>
      <FlatList
        style={styles.fotosDia}
        keyExtractor={(f) => f.id}
        data={fotos}
        renderItem={({ item }) => <View></View>}
      />

      <TextInput
        value={foto}
        onChangeText={setFoto}
        style={styles.campo}
        placeholder="Digite o que deseja buscar (exemplos: moon, earth, etc...)"
      />
      <Pressable style={styles.campo} onPress={() => {}}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>

      <View style={styles.containerBotoesAnos}>
        {anos.map((ano) => (
          <Pressable
            key={ano.id}
            onPress={() => setSelecionado(ano.id)}
            style={[
              styles.botoesAnos,
              selecionado === ano.id && styles.botaoSelecionado,
            ]}
          >
            <Text style={{ textAlign: "center" }}>{ano.texto}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => setSelecionado("anoAtual")}
        style={[
          styles.botaoAnoAtual,
          selecionado === "anoAtual" && styles.botaoSelecionado,
        ]}
      >
        <Text style={{ textAlign: "center" }}>{new Date().getFullYear()}</Text>
      </Pressable>

      <FlatList style={styles.fotosAnos}></FlatList>
      <View style={styles.footer}>
        <View style={styles.containerRedesSociais}>
          <View style={{ alignItems: 'center' }}>
            <AntIcon name="man" size={24} />

            <Text>Eduardo</Text>
            <View style={styles.redesSociais}>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    "https://linkedin.com/in/eduardo-moraghi-08928b281"
                  )
                }
              >
                <AntIcon name="linkedin" size={20} />
              </Pressable>
              <Pressable
                style={styles.redesSociais}
                onPress={() =>
                  Linking.openURL("https://instagram.com/ee_dd_uu_aa_rr_dd_oo")
                }
              >
                <AntIcon name="instagram" size={20} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "90%",
    borderWidth: 2,
    borderColor: "#999999",
  },
  containerBotoesAnos: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 2,
  },
  botoesAnos: {
    width: "19%",
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    alignItens: "center",
  },
  botaoAnoAtual: {
    width: "90%",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
    borderWidth: 1,
    marginTop: 5,
  },
  botaoSelecionado: {
    backgroundColor: "#50b9faff",
  },
  campo: {
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 2,
    marginBottom: 2,
    padding: 8,
    textAlign: "center",
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
  },
  fotosDia: {
    width: "90%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 14,
    padding: 20,
  },

  fotosAnos: {
    width: "90%",
    padding: 8,
    height: "30%",
  },

  listItemButtons: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-evenly",
  },

  footer: {
    borderWidth: 1,
    width: "100%",
    padding: 6,
    marginTop: 5,
    borderRadius: 14,
  },
  containerRedesSociais: {
    flexDirection: "column",
    width: "20%",
  },
  redesSociais: {
    flexDirection: "row",
    marginHorizontal: 3
  },
});
