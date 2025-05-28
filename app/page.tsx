import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Sankalp Kulkarni
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I'm <span className="text-primary">Sankalp Kulkarni</span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              A passionate Full Stack Developer with expertise in JavaScript, TypeScript, React, Angular, and Cloud Technologies
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/CapnSK" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/CapnSK" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:kulkarnisankalp21@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image 
                src="/placeholder.svg?height=320&width=320" 
                alt="Sankalp Kulkarni" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 scroll-mt-16">
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground">Get to know me and my background</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <p>
                  I'm a Full Stack Developer with 4+ years of experience specializing in modern web technologies and cloud solutions. 
                  I'm passionate about creating efficient, scalable applications and dedicated to solving complex technical challenges.
                </p>
                <p>
                  My background includes working with top-tier companies like Canada Revenue Agency and Tata Consultancy Services. 
                  I approach each project with a focus on performance optimization and user experience, striving to deliver high-quality solutions.
                </p>
                <p>
                  I hold a Master's in Applied Computer Science from Dalhousie University and am AWS Certified Solutions Architect-Associate.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <h3 className="font-bold text-xl">4+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <h3 className="font-bold text-xl">10+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <h3 className="font-bold text-xl">3</h3>
                    <p className="text-muted-foreground">Companies</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <h3 className="font-bold text-xl">2</h3>
                    <p className="text-muted-foreground">Certifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16 bg-muted/50">
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
              <p className="text-muted-foreground">Technologies and tools I work with</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "JavaScript (ES6)", "TypeScript", "Node.js", "Java", "Python", "React", 
                "Angular", "RxJS", "HTML/SCSS", "AWS", "Azure", "Docker", "Kubernetes",
                "Spring Boot", "Apache Kafka", "GraphQL", "Git", "Jenkins", "OpenCV"
              ].map((skill) => (
                <div key={skill} className="bg-background p-4 rounded-lg shadow-sm border">
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((project) => (
                <Card key={project} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image 
                      src={`/placeholder.svg?height=250&width=500&text=Project+${project}`} 
                      alt={`Project ${project}`} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-bold text-xl">Project Title {project}</h3>
                    <p className="text-muted-foreground">
                      A brief description of this project, what technologies were used, and what problems it solved.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">React</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Next.js</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Tailwind</span>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="#" target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center pt-6">
              <Button variant="outline" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 scroll-mt-16 bg-muted/50">
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
              <p className="text-muted-foreground">My professional journey</p>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "IT Developer",
                  company: "Canada Revenue Agency",
                  period: "Jan 2024 - Dec 2024",
                  description: "Developed asset management plugin using Python, reducing DDoS false positives by 99.98%. Migrated web applications from Struts to Angular, optimized codebases, and eliminated memory leaks."
                },
                {
                  title: "Full Stack Web Developer",
                  company: "Tata Consultancy Services",
                  period: "Aug 2020 - July 2022",
                  description: "Built content transformation engine with OpenCV, implemented caching strategies, developed reusable widgets, and created testing governance framework with 85% network congestion reduction."
                },
                {
                  title: "Full Stack Web Developer",
                  company: "Virtusa Consultancy Services",
                  period: "June 2019 - July 2019",
                  description: "Built facial recognition application with 85% accuracy using Java and OpenCV. Designed admin dashboard with React and managed authentication using MySQL, Firebase, and AWS S3."
                }
              ].map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div>
                    <h3 className="font-bold text-xl">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-muted-foreground text-sm">{job.period}</p>
                    <p className="mt-2">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-6">
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  View Full Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="text-muted-foreground">Let's discuss your project</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p>
                  I'm currently available for freelance work and full-time positions. 
                  If you have a project that needs some creative work, or if you're looking 
                  to hire, please don't hesitate to contact me.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    <span>kulkarnisankalp21@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-2 text-primary" />
                    <span>linkedin.com/in/CapnSK</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-2 text-primary" />
                    <span>github.com/CapnSK</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sankalp Kulkarni. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/CapnSK" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/CapnSK" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:kulkarnisankalp21@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
