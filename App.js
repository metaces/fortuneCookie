import React, {Component} from 'react';
import {
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet,
  Image,
  TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase:'',
    }

    this.sorteiaTexto = this.sorteiaTexto.bind(this);

    this.frases = [
      'A solidão é a sorte de todos os espíritos excepcionais.',
      'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
      'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
      'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
    ];

  }

  sorteiaTexto() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numeroAleatorio]
    })
  }

  render() {

    return (
      <View style={styles.container}>

          <Image 
            source={require('./src/biscoito_sorte.png')}
            style={styles.img}
          />
        
        <View style={styles.containerFrase}>
          <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        </View>

        <TouchableOpacity 
          style={styles.botao}
          onPress={this.sorteiaTexto}
          >
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerFrase: {
    alignItems: 'center',
    width: 400,
    height:180,
    justifyContent: 'center'
  },
  img:{
    width:250,
    height:250
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign: 'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;