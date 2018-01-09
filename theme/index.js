import { StyleSheet } from 'react-native';

export const cores = {
  titulo: '#54504E',
  subTitulo: '#9BADAD',
  botaoAtivo: '#ff6600',
  botaoInativo: '#D4CEC9',
  textoBotao: '#8A8685'
};

export const styleBaralhos = StyleSheet.create({
  titulo: {
    color: cores.titulo,
    fontSize: 25,
    padding: 10,
  },
  subTitulo: {
    color: cores.subTitulo,
    padding: 10,
  }
})

export const styleButton = StyleSheet.create({
  containerBtn: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: 'space-between',
    padding: 15,
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
    fontWeight: 'bold',
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
  cardText: {
    fontSize: 30,
    textAlign: 'center',
    color: cores.titulo,
  },
  cardStyle: {
    backgroundColor: '#EF6621',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    height: 'auto',
    width: '100%',
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOpacity: 4,
    elevation: 3,
  }
})