import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Request, Response, NextFunction } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  imageUrl: string;
  link: string;
}

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post("/api/contact", async (req: Request<{}, {}, ContactRequest>, res: Response) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "All fields are required",
          details: {
            name: !name ? "Name is required" : undefined,
            email: !email ? "Email is required" : undefined,
            message: !message ? "Message is required" : undefined
          }
        });
      }
      
      // TODO: Add email sending functionality here
      // For now, just return success
      return res.status(200).json({
        success: true,
        message: "Message received successfully!"
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        error: "Failed to process contact form submission"
      });
    }
  });

  // API endpoint for resume download link
  app.get("/api/resume", (_req: Request, res: Response) => {
    try {
      return res.status(200).json({
        resumeUrl: "https://drive.google.com/file/d/167_pXOmCqH9z_RbrB7_f1EryhhOQ_XV3/view?usp=sharing"
      });
    } catch (error) {
      console.error("Resume endpoint error:", error);
      return res.status(500).json({
        error: "Failed to fetch resume URL"
      });
    }
  });

  // API endpoint to get portfolio projects
  app.get("/api/projects", (_req: Request, res: Response) => {
    try {
      const projects: Project[] = [
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
          title: "Netflix Clone",
          description: "A full-stack Netflix clone with user authentication, movie browsing, and streaming capabilities. Built with React, Firebase, and The Movie Database API.",
          role: "FULL-STACK DEVELOPER",
          imageUrl: "/assets/projects/netflix-clone.jpg",
          link: "#"
        },
        {
          id: 3,
          title: "Library Management System",
          description: "A comprehensive library management solution for tracking books, managing borrowers, and handling reservations. Built with Java and MySQL database.",
          role: "BACKEND DEVELOPER",
          imageUrl: "/assets/projects/library-management.png",
          link: "#"
        },
        {
          id: 4,
          title: "FinTech Dashboard",
          description: "A comprehensive financial analytics dashboard that helps users track investments, analyze market trends, and make data-driven decisions.",
          role: "LEAD DEVELOPER",
          imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
          link: "#"
        },
        {
          id: 5,
          title: "CodeMentor Platform",
          description: "An educational platform connecting coding students with expert mentors through interactive lessons, real-time code reviews, and personalized learning paths.",
          role: "TECHNICAL ARCHITECT",
          imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
          link: "#"
        },
        {
          id: 6,
          title: "Smart Home IoT",
          description: "A comprehensive IoT solution for smart homes that integrates various devices and provides an intuitive control interface with advanced automation capabilities.",
          role: "IOT DEVELOPER",
          imageUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80",
          link: "#"
        }
      ];
      
      return res.status(200).json(projects);
    } catch (error) {
      console.error("Projects endpoint error:", error);
      return res.status(500).json({
        error: "Failed to fetch projects"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
