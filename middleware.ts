import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const requestedHost = req.headers.get('X-Forwarded-Host');

    if (requestedHost && !requestedHost.match(/intranet-aptp.vercel.app/)) {
    const host = `intranet-aptp.vercel.app`; // set your main domain

    const requestedPort = req.headers.get('X-Forwarded-Port');
    const requestedProto = req.headers.get('X-Forwarded-Proto');

    url.host = host;
    url.protocol = requestedProto || url.protocol;
    url.port = '';

    return NextResponse.redirect(url);
  }

  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()
  return res
}