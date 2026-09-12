export type ProjectCategory = "AWS" | "Azure" | "OCI" | "DevOps" | "Generative AI" | "Web";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "aws-cost-calculator",
    title: "AWS Cloud Cost Calculator",
    tagline: "Automated cost monitoring and alerting on AWS",
    description:
      "Terraform-provisioned Lambda function that queries AWS Cost Explorer, aggregates daily spend across services, and pushes threshold alerts to SNS. Includes S3-backed cost reports and an optional dashboard layer.",
    category: ["AWS", "DevOps"],
    tags: ["Terraform", "Lambda", "S3", "SNS", "Cost Explorer", "Python"],
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    gradient: "from-orange-50 to-amber-50",
  },
  {
    id: "multi-region-aws",
    title: "Multi-Region AWS Architecture",
    tagline: "Globally distributed, fault-tolerant infrastructure",
    description:
      "Production-style multi-region setup with CloudFront CDN, Route 53 latency routing, DynamoDB Global Tables for cross-region data replication, and Lambda@Edge for request handling.",
    category: ["AWS"],
    tags: ["CloudFront", "Route 53", "DynamoDB", "Lambda", "S3", "IAM"],
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    gradient: "from-sky-50 to-blue-50",
  },
  {
    id: "arc-trade",
    title: "ARC Trade Platform",
    tagline: "Real-time trading platform with WebSocket streams",
    description:
      "Full-stack trading application built with FastAPI and React. Features real-time price feeds via WebSockets, Redis caching for order book state, PostgreSQL persistence, and Docker Compose orchestration for local development.",
    category: ["Web", "DevOps"],
    tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Docker", "WebSockets"],
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "k8s-devops-pipeline",
    title: "Kubernetes CI/CD Pipeline",
    tagline: "End-to-end DevOps pipeline with automated deployments",
    description:
      "Jenkins-driven CI/CD pipeline that builds Docker images, pushes to a registry, and deploys to a Kubernetes cluster. Includes Ansible for configuration management, Prometheus for metrics, and Alertmanager for on-call notifications.",
    category: ["DevOps"],
    tags: ["Jenkins", "Kubernetes", "Docker", "Ansible", "Prometheus", "Alertmanager"],
    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
    gradient: "from-violet-50 to-purple-50",
  },
  {
    id: "docuforge",
    title: "DocuForge",
    tagline: "Browser-based PDF editing SaaS",
    description:
      "Web-native PDF tools platform offering annotation, form-filling, merge/split, and AI-assisted document workflows. Built with Next.js, MuPDF-powered backend, and deployed on Netlify.",
    category: ["Web", "Generative AI"],
    tags: ["Next.js", "TypeScript", "MuPDF", "AI", "PDF", "Netlify"],
    githubUrl: "YOUR_GITHUB_URL",
    liveUrl: "YOUR_LIVE_URL",
    featured: true,
    gradient: "from-rose-50 to-pink-50",
  },
  {
    id: "terraform-iac",
    title: "Infrastructure as Code Library",
    tagline: "Reusable Terraform modules for cloud provisioning",
    description:
      "A curated collection of Terraform modules covering VPC networking, EC2 auto-scaling groups, RDS clusters, IAM roles, and S3 lifecycle policies — all following AWS Well-Architected Framework guidelines.",
    category: ["AWS", "DevOps"],
    tags: ["Terraform", "AWS", "VPC", "EC2", "RDS", "IAM"],
    githubUrl: "YOUR_GITHUB_URL",
    featured: false,
    gradient: "from-indigo-50 to-blue-50",
  },
  {
    id: "gen-ai-rag",
    title: "RAG Knowledge Assistant",
    tagline: "Retrieval-augmented generation over private documents",
    description:
      "LLM-powered Q&A system that ingests PDF and text documents, chunks and embeds them into a vector store, and retrieves relevant context before generating answers — enabling accurate responses grounded in private data.",
    category: ["Generative AI"],
    tags: ["Python", "LLMs", "RAG", "Vector DB", "Prompt Engineering"],
    githubUrl: "YOUR_GITHUB_URL",
    featured: false,
    gradient: "from-fuchsia-50 to-purple-50",
  },
];
