// types/produto.ts
export interface ProdutoMercadoLivre {
  id: string;
  title: string;
  price: number;
  pictures: Array<{ url: string }>;
  descriptions?: string[];
  seller: {
    nickname: string;
  };
  // Adicione outras propriedades que você usa
}

export interface ProdutoTransformado {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
  vendedor: string;
}
