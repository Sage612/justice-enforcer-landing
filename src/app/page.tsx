import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  Search,
  Image,
  FileText,
  BarChart3,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Smart Conversations",
    description:
      "Ask anything and get thoughtful, detailed answers. Brainstorm ideas, get explanations, or just have a chat — all in your server.",
  },
  {
    icon: Search,
    title: "Web Search",
    description:
      "Need the latest info? Search the web in real-time. News, articles, research — brought straight to your server.",
  },
  {
    icon: Image,
    title: "Image Generation",
    description:
      "Generate stunning images from text descriptions. Art, logos, memes, concept art — just describe it and watch the magic.",
  },
  {
    icon: FileText,
    title: "Document Creation",
    description:
      "Create reports, articles, spreadsheets, and presentations. Full document generation right from Discord.",
  },
  {
    icon: BarChart3,
    title: "Charts & Diagrams",
    description:
      "Generate professional charts, flowcharts, mind maps, and data visualizations on demand.",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description:
      "Communicate in English, Spanish, French, Chinese, Japanese, Korean, Arabic, and 40+ more languages natively.",
  },
];

const highlights = [
  {
    icon: Zap,
    label: "Lightning Fast",
    detail: "Instant responses, no lag",
  },
  {
    icon: Shield,
    label: "No Permissions Needed",
    detail: "Just invite and start",
  },
  {
    icon: Globe,
    label: "Multilingual",
    detail: "50+ languages supported",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-4 py-20 overflow-hidden grid-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 relative">
            <div className="w-28 h-28 rounded-2xl overflow-hidden glow">
              <img
                src="/bot-logo.png"
                alt="That Justice Enforcer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 border-purple-500/40 text-purple-300 bg-purple-500/10 px-4 py-1.5 text-sm">
            AI Assistant for Discord
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            That <span className="gradient-text">Justice Enforcer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Your server&apos;s AI-powered assistant. Ask questions, generate
            images, search the web, create documents, and so much more — all
            with a simple{" "}
            <code className="text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded text-base">
              @mention
            </code>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://top.gg/bot/that-justice-enforcer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg gradient-bg text-white font-semibold px-8 py-6 text-lg hover:opacity-90 transition-opacity glow">
              Add to Server
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://discord.gg/7WPGMb696N"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-lg border border-white/15 bg-white/5 text-foreground px-8 py-6 text-lg hover:bg-white/10 transition-colors">
              Join Discord
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-cyan-500/40 text-cyan-300 bg-cyan-500/10 px-4 py-1.5 text-sm">
              Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need,{" "}
              <span className="gradient-text">one bot</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A powerful AI toolkit that turns your Discord server into a
              productivity powerhouse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-card/80 border-white/5 card-glow transition-all duration-300 hover:border-purple-500/30 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-purple-500/40 text-purple-300 bg-purple-500/10 px-4 py-1.5 text-sm">
              Get Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Up and running in <span className="gradient-text">seconds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Invite the Bot",
                description:
                  "Click 'Add to Server' and select your server. No special permissions required.",
              },
              {
                step: "02",
                title: "@mention or Reply",
                description:
                  "Just @mention the bot or reply to its messages to start a conversation.",
              },
              {
                step: "03",
                title: "Ask Anything",
                description:
                  "Search the web, generate images, create docs, brainstorm ideas — the possibilities are endless.",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="bg-card/80 border-white/5 text-center card-glow transition-all duration-300 hover:border-purple-500/30">
                <CardContent className="p-6">
                  <span className="gradient-text text-4xl font-bold">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-card/80 border-purple-500/20 glow overflow-hidden">
            <CardContent className="p-10 sm:p-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">enforce justice</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Add That Justice Enforcer to your server and give your community
                an AI assistant they&apos;ll actually use.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://top.gg/bot/that-justice-enforcer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg gradient-bg text-white font-semibold px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                  Add to Server
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="https://top.gg/bot/that-justice-enforcer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-lg border border-white/15 bg-white/5 text-foreground px-8 py-6 text-lg hover:bg-white/10 transition-colors">
                  View on top.gg
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src="/bot-logo.png" alt="" className="w-6 h-6 rounded" />
            <span>
              That Justice Enforcer &copy; {new Date().getFullYear()} &middot;
              Built with care by{" "}
              <a
                href="https://compicfy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline">
                ComPicfy
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/7WPGMb696N"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors">
              Discord
            </a>
            <a
              href="https://top.gg/bot/that-justice-enforcer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors">
              top.gg
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
