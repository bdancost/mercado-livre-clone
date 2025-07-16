import { supabase } from "@/lib/supabase";

export function setupNotifications(userId: string) {
  return supabase
    .channel(`notifications_${userId}`)
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "notifications",
      },
      (payload) => {
        // Lógica para mostrar notificação
        console.log("Nova notificação:", payload);
      }
    )
    .subscribe();
}
