"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function Rating({ produtoId }: { produtoId: string }) {
  const [activeStar, setActiveStar] = useState(0);
  const [comment, setComment] = useState("");

  const submitReview = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("Usuário não autenticado");

    const { error } = await supabase.from("avaliacoes").insert([
      {
        produto_id: produtoId,
        usuario_id: user.id,
        nota: activeStar,
        comentario: comment,
      },
    ]);

    if (error) alert("Erro ao enviar avaliação");
    else alert("Avaliação registrada!");
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setActiveStar(star)}
            className={`text-2xl ${
              star <= activeStar ? "text-yellow-400" : "text-gray-300"
            }`}
            aria-label={`Avaliar com ${star} estrela(s)`}
          >
            ★
          </button>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Deixe seu comentário..."
        className="w-full p-2 border rounded"
      />
      <button
        onClick={submitReview}
        disabled={!activeStar}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
      >
        Enviar Avaliação
      </button>
    </div>
  );
}
