import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Code, Shield, Cpu, Wifi, Database, Lock } from "lucide-react";

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|;:,.<>?';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix-rain" className="fixed top-0 left-0 w-full h-full -z-10" />;
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-black text-green-400">
      <MatrixRain />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-green-500">Mårten Wiman</h1>
          <p className="text-xl text-green-300">Elite Hacker | Ex-Google Engineer | ICPC Medalist | AI Code Trainer</p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            <TabsTrigger value="about" className="data-[state=active]:bg-green-900 data-[state=active]:text-green-400">Profile</TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-green-900 data-[state=active]:text-green-400">Exploits</TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-green-900 data-[state=active]:text-green-400">Missions</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card className="bg-gray-900 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-400">Hacker Profile</CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <p className="mb-4">Mårten Wiman, codename: QuantumByte, is an elite hacker and digital mastermind. With unparalleled skills in cryptography, AI, and systems penetration, he navigates the digital realm with surgical precision.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-green-500 text-green-400"><Code className="w-4 h-4 mr-1" /> Code Manipulation</Badge>
                  <Badge variant="outline" className="border-green-500 text-green-400"><Shield className="w-4 h-4 mr-1" /> Cyber Security</Badge>
                  <Badge variant="outline" className="border-green-500 text-green-400"><Cpu className="w-4 h-4 mr-1" /> AI Systems</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements">
            <Card className="bg-gray-900 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-400">Legendary Exploits</CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cracked the uncrackable: Two-time champion of Skolornas matematiktävling (2022 and 2023)</li>
                  <li>Infiltrated global networks: ICPC World Finals medalist</li>
                  <li>Mastered international systems: Participated in the International Olympiad in Informatics (IOI)</li>
                  <li>Acquired advanced knowledge: Master's degree in Computer Science from KTH Royal Institute of Technology</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card className="bg-gray-900 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-400">Covert Operations</CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold flex items-center"><Wifi className="w-4 h-4 mr-2" /> Lovable</h3>
                    <p className="text-sm">Training AI systems in advanced code manipulation</p>
                  </div>
                  <div>
                    <h3 className="font-semibold flex items-center"><Database className="w-4 h-4 mr-2" /> Google</h3>
                    <p className="text-sm">Former infiltrator of global information systems</p>
                  </div>
                  <div>
                    <h3 className="font-semibold flex items-center"><Lock className="w-4 h-4 mr-2" /> Optimeringsfabriken</h3>
                    <p className="text-sm">Optimization specialist and system architect</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button variant="outline" className="mr-2 bg-green-900 text-green-400 hover:bg-green-700">
            <a href="https://www.linkedin.com/in/m%C3%A5rten-wiman/" target="_blank" rel="noopener noreferrer">
              Access LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="bg-green-900 text-green-400 hover:bg-green-700">
            <a href="https://optimeringsfabriken.se" target="_blank" rel="noopener noreferrer">
              Optimeringsfabriken HQ
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;