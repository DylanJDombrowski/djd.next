// src/components/substack/subscribe-widget.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function SubscribeWidget() {
  return (
    <Card className="border-2 border-orange/20 bg-gradient-to-br from-orange/5 to-background">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-4">
          <Mail className="h-6 w-6 text-orange" />
        </div>
        <CardTitle className="text-2xl">Subscribe to my writing</CardTitle>
        <CardDescription className="text-base">
          Get my latest posts on software, business, and life delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Button
          asChild
          size="lg"
          className="bg-orange hover:bg-orange/90 w-full md:w-auto"
        >
          <a
            href="https://dylandombro.substack.com/?r=sisxq&utm_campaign=pub-share-checklist&utm_source=dylanjdombrowski&utm_medium=website-subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on Substack
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Free, no spam, unsubscribe anytime
        </p>
      </CardContent>
    </Card>
  );
}
