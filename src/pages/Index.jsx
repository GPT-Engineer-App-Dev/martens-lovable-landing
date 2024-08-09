import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Briefcase, GraduationCap, Code, Award } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mårten Wiman</h1>
          <p className="text-xl text-gray-600">Mathematically inclined ex-Googler ICPC medalist teaching LLMs how to code</p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Mårten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Mårten Wiman is a talented software engineer and mathematician based in Stockholm, Sweden. He has a strong background in computer science and a passion for solving complex problems.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary"><Code className="w-4 h-4 mr-1" /> Software Engineering</Badge>
                  <Badge variant="secondary"><GraduationCap className="w-4 h-4 mr-1" /> Computer Science</Badge>
                  <Badge variant="secondary"><Trophy className="w-4 h-4 mr-1" /> Competitive Programming</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Notable Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Two-time winner of Skolornas matematiktävling (2022 and 2023)</li>
                  <li>ICPC World Finals medalist</li>
                  <li>Participated in the International Olympiad in Informatics (IOI)</li>
                  <li>Master's degree in Computer Science from KTH Royal Institute of Technology</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Lovable</h3>
                    <p className="text-sm text-gray-600">Teaching LLMs how to code</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Google</h3>
                    <p className="text-sm text-gray-600">Former Software Engineer</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Optimeringsfabriken</h3>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button variant="outline" className="mr-2">
            <a href="https://www.linkedin.com/in/m%C3%A5rten-wiman/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </Button>
          <Button variant="outline">
            <a href="https://optimeringsfabriken.se" target="_blank" rel="noopener noreferrer">
              Optimeringsfabriken
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
