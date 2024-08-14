"use server"
import { createSupabaseServerClient } from "@/utils/supabase/server";

export async function signInWithEmailAndPassword( data ) {
    const supabase = createSupabaseServerClient();
    const result = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
    });
    console.log(result);

    return JSON.stringify(result);
}