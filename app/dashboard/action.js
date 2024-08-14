"use server"
import { createSupabaseServerClient } from "@/utils/supabase/server";

export async function logOut() {
    const supabase = createSupabaseServerClient();
    const result = await supabase.auth.signOut();
    return JSON.stringify(result)
}