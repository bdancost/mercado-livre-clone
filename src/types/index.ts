export type User = {
  id: string;
  email: string;
  user_metadata?: {
    nome?: string;
    tipo?: "comprador" | "vendedor";
  };
};
