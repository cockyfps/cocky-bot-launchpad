import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ExternalLink,
  Bot,
  Settings,
  Crown,
  Star,
  ArrowRight,
  Code,
  Github,
  MessageSquare
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-particles">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 px-6 py-2 text-lg">
              <Bot className="w-5 h-5 mr-2" />
              Discord Bot
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
              Cocky
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The most powerful Discord bot for server moderation, verification, and community management. 
              Transform your Discord server with advanced AI-powered features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                <ExternalLink className="w-6 h-6 mr-2" />
                Add to Server
              </Button>
              <Button variant="neon" size="xl">
                <Code className="w-6 h-6 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto animate-float">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 animate-pulse-glow"></div>
            <img 
              src={heroDashboard} 
              alt="Cocky Discord Bot Dashboard Interface" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500K+", label: "Servers", color: "text-primary" },
              { value: "50M+", label: "Users Protected", color: "text-secondary" },
              { value: "99.9%", label: "Uptime", color: "text-success" },
              { value: "24/7", label: "Support", color: "text-accent" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-4xl md:text-6xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced moderation tools, AI-powered verification, and comprehensive server management features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Moderation",
                description: "AI-powered automod with customizable rules, auto-ban, mute, and warning systems.",
                color: "text-primary"
              },
              {
                icon: Users,
                title: "Smart Verification",
                description: "Multi-layer verification system with captcha, phone verification, and manual approval.",
                color: "text-secondary"
              },
              {
                icon: Zap,
                title: "Anti-Raid Protection",
                description: "Real-time raid detection and prevention with automatic lockdown capabilities.",
                color: "text-accent"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Comprehensive server statistics, member activity tracking, and growth insights.",
                color: "text-success"
              },
              {
                icon: Settings,
                title: "Custom Commands",
                description: "Create unlimited custom commands with advanced scripting and automation features.",
                color: "text-primary"
              },
              {
                icon: Crown,
                title: "Role Management",
                description: "Automated role assignment, reaction roles, and advanced permission systems.",
                color: "text-secondary"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card hover-lift border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">
              Trusted by Communities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what server owners are saying about their experience with Cocky.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Gaming Community Owner",
                avatar: "AC",
                content: "Cocky transformed our 50K member gaming server. The AI moderation catches spam and toxicity before we even see it. Incredible bot!",
                rating: 5
              },
              {
                name: "Sarah Johnson", 
                role: "Education Server Admin",
                avatar: "SJ",
                content: "The verification system is bulletproof. We went from dealing with raids daily to having zero issues. Worth every penny of premium.",
                rating: 5
              },
              {
                name: "Mike Rodriguez",
                role: "NFT Community Manager", 
                avatar: "MR",
                content: "Custom commands and role automation saved us hours of manual work. The analytics help us understand our community better.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card hover-lift border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">
              Developer Friendly
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful API and webhooks for custom integrations. Build exactly what your community needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-6 h-6 mr-2 text-primary" />
                  Custom Commands API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-success">
{`// Create a custom welcome command
POST /api/v1/commands

{
  "name": "welcome",
  "description": "Welcome new members",
  "response": {
    "embed": {
      "title": "Welcome to {{server}}!",
      "color": "#00ff88",
      "fields": [
        {
          "name": "Member Count",
          "value": "{{member_count}}",
          "inline": true
        }
      ]
    }
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-secondary" />
                  Webhook Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-secondary">
{`// Real-time moderation events
{
  "event": "member.banned",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "user_id": "123456789",
    "reason": "Spam detection",
    "moderator": "Cocky#0001",
    "confidence": 0.95,
    "evidence": {
      "message_count": 15,
      "time_span": "30s"
    }
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              <Code className="w-5 h-5 mr-2" />
              Explore Full API Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as your community grows. Premium features for serious server owners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                description: "Perfect for small communities",
                features: [
                  "Basic moderation tools",
                  "Up to 1,000 members",
                  "Standard verification",
                  "Community support"
                ],
                buttonVariant: "outline" as const,
                popular: false
              },
              {
                name: "Premium",
                price: "$9.99",
                description: "Best for growing servers",
                features: [
                  "Advanced AI moderation",
                  "Unlimited members",
                  "Custom verification flows",
                  "Priority support",
                  "Advanced analytics",
                  "Custom branding"
                ],
                buttonVariant: "premium" as const,
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large communities",
                features: [
                  "All Premium features",
                  "Dedicated support",
                  "Custom integrations",
                  "SLA guarantee",
                  "White-label solution",
                  "Advanced API access"
                ],
                buttonVariant: "accent" as const,
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card hover-lift border-border/50 ${
                  plan.popular ? 'ring-2 ring-primary glow-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-gradient-primary px-4 py-2">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                  </div>
                  <CardDescription className="text-lg">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.buttonVariant} size="lg" className="w-full">
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-gradient">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with other server owners, get support, and stay updated with the latest features.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card hover-lift border-border/50">
              <CardContent className="p-8 text-center">
                <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Discord Community</h3>
                <p className="text-muted-foreground mb-6">
                  Join 25,000+ server owners in our official Discord server.
                </p>
                <Button variant="hero" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Join Discord
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card hover-lift border-border/50">
              <CardContent className="p-8 text-center">
                <Github className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Open Source</h3>
                <p className="text-muted-foreground mb-6">
                  Contribute to our codebase and help shape the future of Cocky.
                </p>
                <Button variant="neon" size="lg">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Cocky</h3>
              <p className="text-muted-foreground">
                The most powerful Discord bot for server management and community protection.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord Server</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Status Page</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Cocky Bot. All rights reserved. Made with ❤️ for the Discord community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;