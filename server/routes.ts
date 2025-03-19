import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    // Here you would typically send an email or store in database
    // This is a simulated response
    return res.status(200).json({ 
      success: true, 
      message: "Message received successfully!" 
    });
  });

  // API endpoint to get portfolio projects
  app.get("/api/projects", (_req, res) => {
    // This would typically come from a database
    const projects = [
      {
        id: 1,
        title: "Algen.IO",
        description: "Algen.io is an AI e-commerce platform that increase profits and accelerate the operation process swiftly using advanced data and high-performance algorithms.",
        role: "FOUNDER AND CEO",
        imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
        link: "#"
      },
      {
        id: 2,
        title: "FinTech Dashboard",
        description: "A comprehensive financial analytics dashboard that helps users track investments, analyze market trends, and make data-driven decisions.",
        role: "LEAD DEVELOPER",
        imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
        link: "#"
      },
      {
        id: 3,
        title: "CodeMentor Platform",
        description: "An educational platform connecting coding students with expert mentors through interactive lessons, real-time code reviews, and personalized learning paths.",
        role: "TECHNICAL ARCHITECT",
        imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
        link: "#"
      },
      {
        id: 4,
        title: "Smart Home IoT",
        description: "A comprehensive IoT solution for smart homes that integrates various devices and provides an intuitive control interface with advanced automation capabilities.",
        role: "IOT DEVELOPER",
        imageUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80",
        link: "#"
      }
    ];
    
    return res.status(200).json(projects);
  });

  const httpServer = createServer(app);

  return httpServer;
}
