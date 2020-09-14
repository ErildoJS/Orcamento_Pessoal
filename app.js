class Despesa {
  constructor(ano, mes, dia, tipo, descricao, valor) {//4
    this.ano = ano 
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor
  }

  //11
  validarDados() {
    for(let i in this) {
      if(this[i] === undefined || this[i] === '' || this[i] === null) {
        return false
      }
    }

    return true
  }
}

class Bd {
  constructor() {
    //10
    let id = localStorage.getItem('id')

    if(id === null) {
      localStorage.setItem('id', 0)
    }
  }

  getProximoId() {// 8- 
    let proximoId = localStorage.getItem('id')
    return parseInt(proximoId) + 1
  }

  gravar(d) {
    let id = this.getProximoId()//9
    
    localStorage.setItem(id, JSON.stringify(d))
    localStorage.setItem('id',id)

  }
}

let db = new Bd()

function cadastrarDespesa() { //1
  //pegando os elementos pelo id e armazenando numa variavel 2
  let ano = document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo = document.getElementById('tipo')
  let descricao = document.getElementById('descricao')
  let valor = document.getElementById('valor')

  //pegando os valores e armazenando numa variavel -3

  //4 - guardando os valores numa instacia da classe
  let despesa = new Despesa(
    ano.value,
    mes.value,
    dia.value,
    tipo.value,
    descricao.value,
    valor.value
  )

  if(despesa.validarDados()) {//12

    db.gravar(despesa)//6 - gravaçao do objeto no localstorage
  }else {
    alert('preencha os dados')
  }
  


}
