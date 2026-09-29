import { useState } from 'react';
import { View, Button, Pressable, Text, TextInput, } from 'react-native';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import { styles} from './ButtonPassStyles';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function CharacterLengthInput({ length, setLength }: { length: string, setLength: (val: string) => void }) {
  return (
    <View style={styles.button}>
      <Text style={styles.button}>Tamanho da senha:</Text>
      <TextInput
        keyboardType="numeric"
        value={String(length)}
        onChangeText={(text) => {
          
          const numericValue = text.replace(/[^0-9]/g, '');
          setLength(numericValue);
        }}
        placeholder="Ex: 12"
        maxLength={3} 
      />
    </View>
    );
}

export default function App() {
  return (
    <View style={styles.button}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          
          { backgroundColor: pressed ? '#0056b3' : '#007BFF' } 
        ]}
        onPress={() => console.log('Ação executada!')}
      >
        <Text style={styles.text}>Clique Aqui</Text>
      </Pressable>
    </View>
  );
}


export function ButtonPass(){
    const [ senha, setSenha ] = useState('');

    function handleGenButton(){
        let senhaFinal = generatePass();
        setSenha(senhaFinal);
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(senha);
    }

    return(
        <View>

            <TextInputPass pass={senha}/>

            <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#031a3a' : '#009de0' }
                  
            ]}
            onPress={handleGenButton}
>
            <Text style={styles.text}>🔑 Gerar senha 🔑</Text>
            </Pressable>

            <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#031a3a' : '#009de0' }
                    ]}
                    onPress={handleCopyButton}
>
            <Text style={styles.text}>📋 Copiar 📋</Text>
            </Pressable>

            <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#031a3a' : '#009de0' }
                  
            ]}
>
            <Text style={styles.text}> 🔐 Lembrar senha 🔐</Text>
            </Pressable>
            
            
            {/* Componente Button
                <Button
                title='Gen Password'
                onPress={() => {console.log("botao pressionado")}}
            >
            </Button>*/}
        </View>
    )
}