"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import type { Route } from "next";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Tecnologia e Inovação</span>
            <span className="block text-indigo-600">Ao Seu Alcance</span>
          </h1>

          {/* Copywriting profissional */}
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              Descubra produtos exclusivos com <strong>frete rápido</strong> e
              <strong> garantia de 30 dias</strong>. Mais de 50.000 clientes
              satisfeitos!
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-inner border border-white">
              <p className="font-medium text-indigo-700 italic">
                &ldquo;Comprei um smartphone e chegou em{" "}
                <span className="text-indigo-900 font-bold">24 horas</span>!
                Melhor experiência de compra online que já tive.&rdquo;
              </p>
              <p className="mt-2 text-sm text-gray-500">
                &ndash; Ana S., São Paulo
              </p>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="mt-12">
            {user ? (
              <button
                onClick={() => router.push("/produtos" as Route)}
                className="px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105"
              >
                Explorar Produtos Exclusivos →
              </button>
            ) : (
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => router.push("/login" as Route)}
                  className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-50 transition-all"
                >
                  Fazer Login
                </button>
                <button
                  onClick={() => router.push("/cadastro" as Route)}
                  className="px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
                >
                  Criar Conta Gratuita
                </button>
                <Link
                  href={"/produtos" as Route}
                  className="px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all inline-block text-center"
                >
                  Ver Catálogo
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Seção de Diferenciais */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Entrega Rápida",
                desc: "Receba em até 48h nas principais cidades",
              },
              {
                icon: "🛡️",
                title: "Compra Segura",
                desc: "Pagamento criptografado e protegido",
              },
              {
                icon: "💎",
                title: "Produtos Originais",
                desc: "Direto dos fabricantes autorizados",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 bg-indigo-50 rounded-xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-indigo-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-indigo-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
