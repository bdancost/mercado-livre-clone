// src/components/notifications/BellIcon.tsx
"use client";
import { useEffect } from "react";
import { setupNotifications } from "@/lib/notifications/supabase";

export function BellIcon() {
  useEffect(() => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const subscription = setupNotifications(user.id);
      return () => subscription.unsubscribe();
    }
  }, []);

  return (
    <button className="relative p-2">
      🔔
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
}
