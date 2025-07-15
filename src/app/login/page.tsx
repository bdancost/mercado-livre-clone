"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

// Schema de validação
const loginSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.senha,
    });

    if (error) alert(error.message);
    else window.location.href = "/"; // Redireciona após login
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <input
        {...register("email")}
        placeholder="Email"
        className="block w-full p-2 border rounded mb-2"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register("senha")}
        type="password"
        placeholder="Senha"
        className="block w-full p-2 border rounded mb-2"
      />
      {errors.senha && <p className="text-red-500">{errors.senha.message}</p>}

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Entrar
      </button>
    </form>
  );
}
