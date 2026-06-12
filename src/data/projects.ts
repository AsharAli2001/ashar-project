import type { Project } from "@/lib/types";

export const projectCategories = ["All", "GoHighLevel", "AI", "Automation", "Web Development"];

export const projects: Project[] = [
  { cat: "GoHighLevel", tag: "GoHighLevel", t: "Agency SaaS Build", d: "Full white-label SaaS setup on GoHighLevel with custom snapshots, automated onboarding and a 14-touch nurture sequence that lifted client retention.", img: "F6A623", stack: ["GoHighLevel", "SaaS Mode", "Workflows"], live: "https://app.notion.com/p/19cc934d14cc4bfbaeb7d05928516754?v=169dbcaf61fb81d8a617000c5e5f758a", git: "#" },
  { cat: "AI", tag: "AI", t: "AI Lead Qualifier", d: "An OpenAI-powered agent that chats with inbound leads, scores intent and books qualified calls straight into the calendar.", img: "34D9A8", stack: ["OpenAI", "n8n", "Webhooks"], live: "#", git: "https://app.notion.com/p/19cc934d14cc4bfbaeb7d05928516754?v=169dbcaf61fb81d8a617000c5e5f758a" },
  { cat: "Automation", tag: "Automation", t: "Smart Lead Engine", d: "Webhook-triggered n8n workflow capturing leads from multiple sources into Google Sheets and CRM with instant notifications.", img: "FB7A5B", stack: ["n8n", "Google Sheets", "API"], live: "https://app.notion.com/p/19cc934d14cc4bfbaeb7d05928516754?v=169dbcaf61fb81d8a617000c5e5f758a", git: "#" },
  { cat: "AI", tag: "AI", t: "Voice Booking Agent", d: "A voice agent that answers calls, handles FAQs and schedules appointments without any human involvement.", img: "FBC14B", stack: ["Voice AI", "Twilio", "GHL"], live: "#", git: "https://app.notion.com/p/19cc934d14cc4bfbaeb7d05928516754?v=169dbcaf61fb81d8a617000c5e5f758a" },
  { cat: "Web Development", tag: "Web Dev", t: "Conversion Funnel Site", d: "A fast Next.js landing system with A/B tested funnels feeding directly into the automation pipeline.", img: "F4747D", stack: ["Next.js", "React", "Tailwind"], live: "https://app.notion.com/p/19cc934d14cc4bfbaeb7d05928516754?v=169dbcaf61fb81d8a617000c5e5f758a", git: "#" },
  { cat: "Automation", tag: "Automation", t: "Follow-up System", d: "Multi-channel follow-up automation (email + SMS + WhatsApp) that revived cold leads and recovered lost revenue.", img: "FFB877", stack: ["Zapier", "Make", "Twilio"], live: "https://app.notion.com/p/19cc934d14cc4bfbaeb7d05928516754?v=169dbcaf61fb81d8a617000c5e5f758a", git: "#" },
];
