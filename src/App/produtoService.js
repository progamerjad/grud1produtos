const PRODUTOS ='_PRODUTOS';

 export function ErroValidacao(erros){
    this.erros = erros
}

export default class ProdutoService{


    validar = (produto) =>{
        const erros = []

        if(!produto.nome){
            erros.push('o campo nome é obrigatorio.')
        }

        if(!produto.sKU){
            erros.push('o campo SKU é obrigatorio.')
        }

        if(!produto.preco || produto.preco <= 0){
            erros.push('o campo preço é obrigatorio.')
        }

        if(!produto.fornecedor){
            erros.push('o campo fornecedor é obrigatorio.')
        }

        if(erros.length > 0){
            throw new  ErroValidacao(erros)
        }
    }



    salvar = (produto) => {
       this.validar(produto)
      let produtos =  localStorage.getItem(PRODUTOS)
      if(!produtos){
          produtos = []
      }else{
          produtos= JSON.parse(produtos)
      }


      produtos.push(produto);


      localStorage.setItem(PRODUTOS, JSON.stringify(produtos))

    }
}