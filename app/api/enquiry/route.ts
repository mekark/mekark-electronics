import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_ENDPOINT =
  process.env.ENQUIRY_API_URL ??
  "https://mekark-mail.onrender.com/api/enquiry-form";

const SOURCE_NAME = "Mekark Electronics";

type IncomingPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  projectLocation?: string;
  projectArea?: string;
  projectType?: string;
  startTimeline?: string;
  budget?: string;
  location?: string;
  sqf?: string;
  service?: string;
};

function resolveSourceDomain(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin) {
    try {
      return new URL(origin).hostname;
    } catch {
      return origin;
    }
  }

  const forwardedHost =
    request.headers.get("x-forwarded-host") || request.headers.get("host");

  if (forwardedHost) {
    return forwardedHost.split(",")[0]?.trim() ?? "Unknown";
  }

  try {
    return new URL(request.url).hostname;
  } catch {
    return "Unknown";
  }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\d{10}$/.test(phone);
}

function mapToUpstream(body: IncomingPayload, sourceDomain: string) {
  return {
    name: body.name?.trim() ?? "",
    email: body.email?.trim() ?? "",
    phone: body.phone?.trim() ?? "",
    message: body.message?.trim() ?? "",
    location: (body.location ?? body.projectLocation)?.trim() ?? "",
    sqf: (body.sqf ?? body.projectArea)?.trim() ?? "",
    service: (body.service ?? body.projectType)?.trim() ?? "",
    startTimeline: body.startTimeline?.trim() ?? "",
    budget: body.budget?.trim() ?? "",
    sourceName: SOURCE_NAME,
    sourceDomain,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as IncomingPayload;
    const payload = mapToUpstream(body, resolveSourceDomain(request));

    if (!payload.name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!payload.phone) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 },
      );
    }

    if (!isValidPhone(payload.phone)) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits." },
        { status: 400 },
      );
    }

    if (!payload.email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!payload.location) {
      return NextResponse.json(
        { error: "Project location is required." },
        { status: 400 },
      );
    }

    if (!payload.service) {
      return NextResponse.json(
        { error: "Please select a project type." },
        { status: 400 },
      );
    }

    if (!payload.sqf) {
      return NextResponse.json(
        { error: "Please select project area." },
        { status: 400 },
      );
    }

    if (!payload.startTimeline) {
      return NextResponse.json(
        { error: "Please select a start timeline." },
        { status: 400 },
      );
    }

    if (!payload.budget) {
      return NextResponse.json(
        { error: "Please select a budget range." },
        { status: 400 },
      );
    }

    const upstreamOrigin =
      request.headers.get("origin") ??
      `${request.headers.get("x-forwarded-proto") ?? "https"}://${resolveSourceDomain(request)}`;

    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: upstreamOrigin,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const responseText = await response.text();
    let upstreamBody: { error?: string; message?: string; details?: string } =
      {};

    if (responseText) {
      try {
        upstreamBody = JSON.parse(responseText) as typeof upstreamBody;
      } catch {
        upstreamBody = { message: responseText };
      }
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            upstreamBody.error ??
            upstreamBody.details ??
            upstreamBody.message ??
            "Failed to send enquiry.",
        },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
