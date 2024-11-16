import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    id: string
  }
}

export async function GET(
  request: NextRequest,
  { params }: Props
) {
  // Await params before destructuring
  const { id } = await params;
  
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

  console.log(error);
  return NextResponse.json({ data: products });
}