import { Rating } from "@/components/avaliacao/Rating";
import { supabase } from "@/lib/supabase";

export default async function ProdutoPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: produto } = await supabase
    .from("produtos")
    .select("*")
    .eq("id", params.id)
    .single();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{produto.nome}</h1>
      <Rating produtoId={params.id} />
    </div>
  );
}
