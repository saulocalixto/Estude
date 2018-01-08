import { StyleSheet } from 'react-native';

export const cores = {
  titulo: '#809397',
  botaoAtivo: '#ff6600',
  botaoInativo: '#D4CEC9',
  textoBotao: '#8A8685'
};

export const styleBaralhos = {
  titulo: {
    color: cores.titulo,
    fontSize: 25,
    padding: 10,
  },
}

export const styleButton = StyleSheet.create({
  containerBtn: {
    flexDirection: "row",
    flex: 1,
    position: "relative",
    top: 25,
    marginBottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    padding: 15
  },
  styleBtnAtive: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'transparent',
    borderColor: cores.botaoAtivo,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnTextAtive: {
    color: cores.textoBotao,
    fontWeight: 'bold'
  },
  styleBtnInative: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'transparent',
    borderColor: cores.botaoInativo,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnTextInative: {
    color: cores.textoBotao,
    fontWeight: 'bold'
  },
})

export const styleCard = StyleSheet.create({
  cardStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'transparent',
    height: 'auto',
    width: '100%',
    borderColor: cores.botaoAtivo,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'column',
  }
})