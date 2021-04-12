import React from 'react';

import ProdutoService from '../../App/produtoService';

const estadoInicial ={
    nome: '',
    sKU: '',
    descricao:'',
    preco:0,
    fornecedor:'',

    sucesso: false,

    erros: []

}

export default class CadastroProduto extends React.Component{


    state = estadoInicial;

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
      const valor =  event.target.value
      const nomeDoCampo = event.target.name
      this.setState({ [nomeDoCampo]: valor})
    }

    onSubmit = (event) =>{
        const produto = {
            nome: this.state.nome,
            sKU: this.state.sKU,
            descricao: this.state.descricao,
            preco:this.state.preco,
            fornecedor: this.state.fornecedor
        }
        try {
            this.service.salvar(produto)
        this.limpaCampos()
        this.setState({ sucesso: true})
        } catch (error) {
            const erros = error.erros
            this.setState({erros})
        }
       
    }

    limpaCampos = () => {
        this.setState(estadoInicial)
        
    }

   render(){
       return(
           <div className="card">
               <div className="card-header">
                   Cadastro de produto
               </div>
               <div className="card-body">

                   {
                       this.state.sucesso &&

                       

                        <div className="alert alert-dismissible alert-success">
                           <button type="button" className="close" data-dismiss="alert">&times;</button>
                           <strong>Bem Feito!</strong> You successfully read <a href="#" className="alert-link">foi cadastrado</a>.
                        </div>
                     

                   }   
                    {
                        this.state.erros.length > 0 &&

                        this.state.erros.map(msg =>{
                            return(
                                
                        <div className="alert alert-dismissible alert-danger">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Erro!</strong>{msg} <a href="#" className="alert-link">foi cadastrado</a>.
                     </div>

                            )
                        })

                       

                     

                   }   
                   <div className="row">

                       <div className="col-md-6">
                              <div className="form-group">
                                  <label>Nome:</label>
                                  <input type="text" 
                                  name="nome" 
                                  onChange={this.onChange}
                                  value={this.state.nome} 
                                  className="form-control"/>
                              </div>
                          </div>

                          <div className="col-md-6">

                          <div className="form-group">
                                  <label>SKU:</label>
                                  <input type="text" 
                                  name="sKU" 
                                  onChange={this.onChange} 
                                  value={this.state.sKU}
                                  className="form-control"/>
                              </div>
                          </div>

                          </div>
  
                          <div className="row">
                          <div className="col-md-12">
                               <div className="form-group">
                               <label>Descrição:</label>
                               <textarea name="descricao" 
                                onChange={this.onChange}
                               value={this.state.descricao}
                               className="form-control"/>
                               </div>
                            </div>
                           </div>
                          <div className="row">

                             <div className="col-md-6">
                              <div className="form-group">
                                  <label>preço:</label>
                                  <input type="text" 
                                  name="preco" 
                                  onChange={this.onChange}
                                  value={this.state.preco} 
                                  className="form-control"/>
                              </div>
                             </div>

                              <div className="col-md-6">

                                 <div className="form-group">
                                  <label>Fornecedor:</label>
                                  <input type="text" 
                                  name="fornecedor" 
                                  onChange={this.onChange}
                                  value={this.state.fornecedor} 
                                  className="form-control"/>
                                  </div>
                              </div>


                           
                           </div>

                           <div className="row">
                               <div className="col-md-1">
                                   <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                               </div>
                           
                           
                               <div className="col-md-1">
                                   <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                               </div>
                           </div>

                          
                     </div>
            </div>
            
        )
    }
}