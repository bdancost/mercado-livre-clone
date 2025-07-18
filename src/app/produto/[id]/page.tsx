// app/produto/[id]/page.tsx
import { Rating } from "@/components/avaliacao/Rating";
import Image from "next/image";
import type { ProdutoMercadoLivre, ProdutoTransformado } from "@/types/produto";

async function getProduto(id: string): Promise<ProdutoTransformado | null> {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);

    if (!response.ok) {
      throw new Error("Produto não encontrado");
    }

    const produto: ProdutoMercadoLivre = await response.json();

    return {
      id: produto.id,
      nome: produto.title,
      preco: produto.price,
      imagem: produto.pictures[0]?.url || "",
      descricao: produto.descriptions?.join(" ") || "Descrição não disponível",
      vendedor: produto.seller.nickname,
    };
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return null;
  }
}

export default async function ProdutoPage({
  params,
}: {
  params: { id: string };
}) {
  const produto = await getProduto(params.id);

  if (!produto) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-500">
          Produto não encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Imagem do produto */}
        <div className="bg-white p-4 rounded-lg shadow">
          <Image
            src={produto.imagem}
            alt={produto.nome}
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>

        {/* Informações do produto */}
        <div>
          <h1 className="text-3xl font-bold">{produto.nome}</h1>
          <p className="text-2xl my-4">R$ {produto.preco.toFixed(2)}</p>

          <div className="my-6">
            <Rating produtoId={params.id} />
          </div>

          <p className="text-gray-700 mb-4">{produto.descricao}</p>
          <p className="text-sm text-gray-500">
            Vendido por: {produto.vendedor}
          </p>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
