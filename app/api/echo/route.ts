import React from "react";
import { NextResponse } from "next/server";
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //   let params = new URL(document.location).searchParams;
  let name = searchParams.get("name"); // is the string "Jonathan Smith".
  let instrumnent = searchParams.get("instrumnent");

  //   let age = parseInt(searchParams.get("age")); // is the number 18

  return NextResponse.json({ name, instrumnent });
}
