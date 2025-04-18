
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RocketIcon, LogInIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <div className="text-2xl font-bold tracking-tight">
          🤖 AI Trader
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <LogInIcon className="w-4 h-4 mr-2" /> Login with Zerodha
        </Button>
      </header>

      <main className="p-8 grid gap-6 max-w-4xl mx-auto">
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="p-6">
            <h1 className="text-3xl font-semibold mb-4 flex items-center">
              <RocketIcon className="w-6 h-6 mr-2 text-green-400" />
              Launch Your Automated Trading Journey
            </h1>
            <p className="text-gray-300">
              Welcome to <strong>AI Trader</strong> – your fully automated trading platform
              powered by smart bots and Zerodha integration. Trade smarter with AI-powered
              decision making. Get started by logging in with your Zerodha account.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2 text-green-300">TrendBot</h2>
              <p className="text-gray-400">Follows market trends using moving averages.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2 text-blue-300">ScalpBot</h2>
              <p className="text-gray-400">Quick entries and exits with small profits.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="text-center text-gray-500 p-4 mt-12 border-t border-gray-700">
        &copy; {new Date().getFullYear()} AI Trader. All rights reserved.
      </footer>
    </div>
  );
}
