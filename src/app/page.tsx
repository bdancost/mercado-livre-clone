"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Mercado Livre</span>
            <span className="block text-indigo-600">Clone Profissional</span>
          </h1>

          <div className="mt-8 flex justify-center gap-4">
            {user ? (
              <button
                onClick={() => router.push("/dashboard")}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
              >
                Acessar Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => router.push("/login")}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/cadastro")}
                  className="px-6 py-3 bg-white text-indigo-600 rounded-lg shadow hover:bg-gray-50 transition-colors"
                >
                  Cadastre-se
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
