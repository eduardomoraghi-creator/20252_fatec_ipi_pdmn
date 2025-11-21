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

interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState<string>("");
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  const adicionar = () => {
    if (lembrete.length > 0) {
      const novoLembrete: Lembrete = {
        id: new Date().getTime().toString(),
        texto: lembrete.trim(),
      };
      setLembretes((listaAtual) => [novoLembrete, ...listaAtual]);
      setLembrete("");
    }
  };
  const remover = (lembreteARemover: Lembrete) => {
    // Alert.alert(
    //   'Remover lembrete',
    //   `Deseja mesmo remover o lembrete? ${lembreteARemover.texto}`,
    //   [
    //     {
    //       text: 'Cancelar',
    //       style: 'cancel'
    //     },
    //     {
    //       text: 'Remover',
    //       style: 'destructive',
    //       onPress: () => {
    //         setLembretes ((lembretesAtual: Lembrete[]) => {
    //           return lembretesAtual.filter((l:Lembrete) => l.id !== lembreteARemover.id)
    //         })
    //       }
    //     }
    //   ]      
    // )
    setLembretes(lembretesAtual => (lembretesAtual.filter(l => l.id !== lembreteARemover.id)))
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={lembrete}
        onChangeText={setLembrete}
        style={styles.input}
        placeholder="Digite um lembrete..."
      />
      <Pressable
        onPress={() => {
          adicionar();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Salvar lembrete</Text>
      </Pressable>
      <FlatList
        style={styles.list}
        keyExtractor={(l) => l.id}
        data={lembretes}
        renderItem={(l) => {
          return (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{l.item.texto}</Text>
              <View style={styles.listItemButtons}>
                <Pressable onPress={() => remover(l.item)}>
                  <AntIcon name="delete" size={24} color="black" />
                </Pressable>
                <Pressable>
                  <AntIcon name="edit" size={24} color="black" />
                </Pressable>
              </View>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: 2 }}></View>
        )}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center" }}>Não temos lembretes ainda</Text>
        )}
      />
      <View style={styles.footer}>
        <Pressable
          onPress={() =>
            Linking.openURL("https://github.com/eduardomoraghi-creator")
          }
        >
          <AntIcon name="github" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    textAlign: "center",
    borderRadius: 4,
  },
  button: {
    width: "80%",
    backgroundColor: "#0096F3",
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  list: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 12,
    padding: 8,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    borderRadius: 4,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    alignItems: "center",
  },
  listItemText: {
    textAlign: "center",
    width: "70%",
  },
  listItemButtons: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-evenly",
  },
  footer: {
    borderColor: "#DDD",
    borderWidth: 1,
    width: "80%",
    alignItems: "center",
    padding: 12,
    marginTop: 8,
    borderRadius: 4,
  },
});
