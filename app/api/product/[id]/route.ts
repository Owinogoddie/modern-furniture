import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  // Await params before destructuring
  const { id } = await context.params;
  
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

  console.log(error);
  return NextResponse.json({ data: products });
}