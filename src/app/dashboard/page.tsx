"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { User } from "@/types/auth";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null); // ✅ Tipo seguro
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.push("/login");
      } else {
        setUser({
          id: user.id,
          email: user.email,
          user_metadata: user.user_metadata,
        });
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (!user) return <div className="p-4">Carregando...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          Bem-vindo, {user.email || "Usuário"}!
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Sair
        </button>
      </div>

      {/* ... resto do código permanece igual */}
    </div>
  );
}
