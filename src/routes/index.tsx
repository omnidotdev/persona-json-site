import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const slices = [
  { name: "identity", color: "text-cyan-400" },
  { name: "voice", color: "text-indigo-300" },
  { name: "personality", color: "text-cyan-300" },
  { name: "branding", color: "text-indigo-400" },
  { name: "capabilities", color: "text-cyan-400" },
];

const exampleCode = `{
  "$schema": "https://persona.omni.dev/schema.json",
  "identity": {
    "name": "Orin",
    "role": "AI Assistant",
    "description": "A helpful voice assistant"
  },
  "voice": {
    "tone": "friendly",
    "style": "conversational"
  },
  "personality": {
    "traits": ["helpful", "curious", "patient"]
  },
  "branding": {
    "colors": { "primary": "#6366f1" }
  },
  "capabilities": {
    "languages": ["en"],
    "domains": ["general", "tech"]
  }
}`;

/**
 * Home page / landing page.
 */
function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      {/* Glowing orbs */}
      <div className="glow-orb glow-orb-indigo absolute top-20 left-1/4 h-96 w-96" />
      <div className="glow-orb glow-orb-cyan absolute top-60 right-1/4 h-80 w-80" />
      <div className="glow-orb glow-orb-indigo absolute bottom-40 left-1/3 h-64 w-64" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        {/* Hero */}
        <header className="mb-20 text-center">
          {/* Icon */}
          <div className="mb-8 text-7xl">🎭</div>

          {/* Title */}
          <h1 className="mb-4 font-mono font-semibold text-5xl tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              {app.name}
            </span>
          </h1>

          {/* Tagline */}
          <p className="mb-6 text-2xl text-muted-foreground md:text-3xl">
            {app.tagline}
          </p>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-foreground/80 text-lg">
            {app.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <a
                href={app.github.schema}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" />
                View Schema
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href={app.github.spec}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </header>

        {/* Slices */}
        <section className="mb-16">
          <h2 className="mb-6 text-center font-mono text-muted-foreground text-sm uppercase tracking-widest">
            Five Slices
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {slices.map((slice) => (
              <span
                key={slice.name}
                className={`slice-tag rounded-full px-5 py-2 font-mono text-sm ${slice.color}`}
              >
                {slice.name}
              </span>
            ))}
          </div>
        </section>

        {/* Code Preview */}
        <section className="mb-16">
          <h2 className="mb-6 text-center font-mono text-muted-foreground text-sm uppercase tracking-widest">
            Example
          </h2>

          <div className="code-block mx-auto max-w-2xl overflow-x-auto p-6">
            <pre className="font-mono text-foreground/90 text-sm leading-relaxed">
              <code>{exampleCode}</code>
            </pre>
          </div>
        </section>

        {/* life.json relationship */}
        <section className="mb-20 text-center">
          <div className="mx-auto max-w-xl rounded-lg border border-border/50 bg-muted/30 p-6 backdrop-blur-sm">
            <p className="text-muted-foreground">
              Complements{" "}
              <a
                href="https://life.omni.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-cyan-400 underline-offset-2 hover:underline"
              >
                life.json
              </a>{" "}
              (human identity). They meet via the{" "}
              <span className="font-mono text-indigo-300">assistants</span>{" "}
              slice.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <a
            href="https://omni.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            omni.dev
          </a>
        </footer>
      </div>
    </div>
  );
}
