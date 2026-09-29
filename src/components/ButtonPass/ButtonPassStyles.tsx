import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  button:{
      marginTop: 20,
      marginBottom: 10,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#009de0'
  },
  text:{
      fontSize:20,
      color: '#fff'
  },
  
  // Novos estilos adicionados para o input
  container: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
  },
  label: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 8,
  },
  textInput: {
      backgroundColor: '#fff',
      width: '80%',
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderRadius: 4,
      fontSize: 18,
      textAlign: 'center',
      color: '#000',
  }
});

export const styles = StyleSheet.create({
    button:{
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#009de0'

    },
    text:{
        fontSize:20,
        color:'#fff'
    }
})