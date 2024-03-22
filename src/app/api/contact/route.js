import { NextResponse } from "next/server";
export async function POST(req) {
  const { FormName, FormEmail, FormMsg } = await req.json();

  console.log(FormName, FormEmail, FormMsg);

  return NextResponse.json({ msg: ["Message has been sent successfully !"] });
}
