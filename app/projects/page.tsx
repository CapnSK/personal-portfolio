import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Trivia Titans",
      description:
        "A multi-player online trivia game allowing players to collaborate during gameplay. Built with microservices architecture using AWS Lambda, WebSocket API Gateway, and Apache Kafka for real-time synchronization between teammates. Features live chat, real-time leaderboards using AWS ElastiCache for Redis, and serverless deployment.",
      image: "/placeholder.svg?height=250&width=500&text=Trivia+Titans",
      tags: ["Node.js", "Python", "AWS Lambda", "React", "RxJS", "Kafka", "DynamoDB", "Kubernetes", "Terraform"],
      github: "https://github.com/CapnSK/trivia-titans",
      demo: "#",
    },
    {
      id: 2,
      title: "Paw Pals",
      description:
        "A comprehensive pet care and social networking platform that connects pet owners in their community. Features include pet profiles, care scheduling, veterinary appointment tracking, pet playdates, and a social feed for sharing pet moments. Built with modern web technologies for optimal user experience.",
      image: "/placeholder.svg?height=250&width=500&text=Paw+Pals",
      tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT"],
      github: "https://github.com/CapnSK/paw-pals",
      demo: "#",
    },
    {
      id: 3,
      title: "FitnesPal",
      description:
        "A comprehensive fitness tracking mobile application designed for health enthusiasts. Features workout planning, exercise tracking, nutrition monitoring, progress analytics, and social challenges. Includes barcode scanning for food items, custom workout creation, and integration with wearable devices.",
      image: "/placeholder.svg?height=250&width=500&text=FitnesPal",
      tags: ["React Native", "TypeScript", "Firebase", "Redux", "Expo", "Health APIs"],
      github: "https://github.com/CapnSK/fitnesspal",
      demo: "#",
    },
    {
      id: 4,
      title: "Asset Management Plugin",
      description:
        "Python-based plugin that consolidated multiple server requests, reducing DDoS false positives by 99.98%. Integrated with Jenkins CI/CD pipeline for automated asset creation and deployment processes.",
      image: "/placeholder.svg?height=250&width=500&text=Asset+Management",
      tags: ["Python", "Jenkins", "CI/CD", "Automation", "DevOps"],
      github: "https://github.com/CapnSK",
      demo: "#",
    },
    {
      id: 5,
      title: "Content Transformation Engine",
      description:
        "Built using OpenCV for Java and Angular, achieving 85% reduction in network congestion. Implemented caching strategies and responsive design for optimal performance with progressive content delivery.",
      image: "/placeholder.svg?height=250&width=500&text=Content+Engine",
      tags: ["Java", "OpenCV", "Angular", "TypeScript", "Performance Optimization", "Caching"],
      github: "https://github.com/CapnSK",
      demo: "#",
    },
    {
      id: 6,
      title: "Facial Recognition System",
      description:
        "One-shot facial recognition application built with Java and OpenCV SDK using transfer learning, achieving 85% accuracy. Includes admin dashboard for access control and user management with MySQL database integration.",
      image: "/placeholder.svg?height=250&width=500&text=Facial+Recognition",
      tags: ["Java", "OpenCV", "Machine Learning", "React", "MySQL", "Transfer Learning"],
      github: "https://github.com/CapnSK",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Sankalp Kulkarni
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-12">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
          <p className="text-muted-foreground">A collection of my work and side projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative aspect-video" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // minHeight: '100vh',
                height: "13em",
                backgroundColor: '#000',
                width: '100%',
              }}>
                <video
                  src={"/under_construction_animation.webm"}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover"
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <CardContent className="p-4 mt-5 space-y-2">
                <h3 className="font-bold text-xl">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sankalp Kulkarni. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
