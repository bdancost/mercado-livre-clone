"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usuarioSchema, Usuario } from "@/schemas/usuario"; // Importe explicitamente o tipo
import { supabase } from "@/lib/supabase";

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>({
    resolver: zodResolver(usuarioSchema),
  });

  const onSubmit = async (data: Usuario) => {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.senha,
      options: {
        data: {
          nome: data.nome,
          tipo: data.tipo,
        },
      },
    });

    if (error) alert(error.message);
    else alert("Confirme seu e-mail!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input {...register("nome")} placeholder="Nome" />
      {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}

      <select {...register("tipo")} className="block w-full p-2 border rounded">
        <option value="comprador">Comprador</option>
        <option value="vendedor">Vendedor</option>
      </select>

      <input {...register("senha")} type="password" placeholder="Senha" />
      {errors.senha && <p className="text-red-500">{errors.senha.message}</p>}

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Cadastrar
      </button>
    </form>
  );
}
