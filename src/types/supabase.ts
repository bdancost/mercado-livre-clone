// src/types/supabase.ts
export type Database = {
  public: {
    Tables: {
      produtos: {
        Row: {
          id: string;
          nome: string;
          preco: number;
          // Adicione outras colunas conforme sua tabela
        };
      };
      // Adicione outras tabelas conforme necessário
    };
  };
};
