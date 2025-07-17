import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ConfirmacaoPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <CheckCircleIcon className="mx-auto h-16 w-16 text-green-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Cadastro confirmado!
          </h2>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-6">
              Sua conta foi criada com sucesso. Agora você pode acessar todos os
              recursos da plataforma.
            </p>

            <div className="mt-6">
              <Link
                href="/login"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ir para a página de login
              </Link>
            </div>

            <div className="mt-4">
              <Link
                href="/"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
