// app/produtos/page.tsx
import Link from "next/link";
import Image from "next/image";

interface ProdutoListagem {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
}

async function getProdutos(): Promise<ProdutoListagem[]> {
  try {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLB/search?q=celular&limit=12"
    );

    if (!response.ok) throw new Error("Erro ao buscar produtos");

    const data = await response.json();
    return data.results.map(
      (item: {
        id: string;
        title: string;
        price: number;
        thumbnail: string;
      }) => ({
        id: item.id,
        nome: item.title,
        preco: item.price,
        imagem: item.thumbnail,
      })
    );
  } catch (error) {
    console.error("Erro:", error);
    return [];
  }
}

export default async function ProdutosPage() {
  const produtos = await getProdutos();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            href={`/produto/${produto.id}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-white p-4">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                width={300}
                height={300}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h2 className="font-semibold line-clamp-2">{produto.nome}</h2>
                <p className="text-lg font-bold mt-2">
                  R$ {produto.preco.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
