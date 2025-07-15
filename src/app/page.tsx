"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import LogoutButton from "@/components/LogoutButton";
import { User } from "@/types"; // Importe o tipo

export default function Home() {
  const [user, setUser] = useState<User | null>(null); // ✅ Tipo explícito

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user as User | null); // Casting seguro
    };

    fetchUser();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Mercado Livre Clone</h1>
      {user ? (
        <div className="mt-4">
          <p>Olá, {user.email}!</p>
          <LogoutButton />
        </div>
      ) : (
        <a
          href="/login"
          className="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded"
        >
          Faça Login
        </a>
      )}
    </main>
  );
}
