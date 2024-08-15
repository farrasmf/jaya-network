"use server"
import { createSupabaseServerClient } from "@/utils/supabase/server";

export async function logOut() {
    const supabase = createSupabaseServerClient();
    const result = await supabase.auth.signOut();
    return JSON.stringify(result)
}

export async function readBusiness() {
    const supabase = createSupabaseServerClient();
    const result = await supabase.from("business").select("*, members(membership_year)")
    return JSON.stringify(result)
}

export async function readMember() {
    const supabase = createSupabaseServerClient();
    const result = await supabase.from("members").select("*, business(category)")
    return JSON.stringify(result)
}