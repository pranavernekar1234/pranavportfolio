export interface Lab {
  id: string;
  name: string;
  platform: string;
  technology: string[];
  description: string;
  status: "completed" | "in-progress" | "planned";
  category: string;
}

export const labs: Lab[] = [
  {
    id: "ps-aws-1",
    name: "AWS Cloud Fundamentals",
    platform: "Pluralsight",
    technology: ["AWS", "EC2", "S3", "VPC"],
    description: "Hands-on labs covering core AWS services including EC2 instance management, S3 bucket configuration, and VPC networking fundamentals.",
    status: "completed",
    category: "Cloud Labs",
  },
  {
    id: "ps-devops-1",
    name: "Docker Deep Dive",
    platform: "Pluralsight",
    technology: ["Docker", "Containers", "Docker Compose"],
    description: "Building, running, and orchestrating Docker containers from first principles. Covered multi-stage builds, networking, and volumes.",
    status: "completed",
    category: "DevOps Practice",
  },
  {
    id: "kk-k8s-1",
    name: "Kubernetes for Beginners",
    platform: "KodeKloud",
    technology: ["Kubernetes", "kubectl", "Pods", "Deployments"],
    description: "Interactive labs deploying workloads to Kubernetes clusters, managing pods and deployments, and configuring services and ingress.",
    status: "completed",
    category: "DevOps Practice",
  },
  {
    id: "kk-terraform-1",
    name: "Terraform Basics",
    platform: "KodeKloud",
    technology: ["Terraform", "IaC", "AWS"],
    description: "Writing declarative infrastructure as code with Terraform — provisioning EC2, S3, and VPC resources using HCL.",
    status: "completed",
    category: "Infrastructure Experiments",
  },
  {
    id: "kk-jenkins-1",
    name: "Jenkins CI/CD Pipeline",
    platform: "KodeKloud",
    technology: ["Jenkins", "CI/CD", "Docker", "GitHub"],
    description: "Building Jenkins pipelines from scratch: source code polling, automated builds, Docker image creation, and deployment stages.",
    status: "completed",
    category: "DevOps Practice",
  },
  {
    id: "aws-cloud-quest",
    name: "AWS Cloud Quest – Practitioner",
    platform: "AWS Skill Builder",
    technology: ["AWS", "EC2", "S3", "CloudWatch"],
    description: "Role-playing game-style lab environment that builds practical AWS skills through guided real-world scenarios and quests.",
    status: "completed",
    category: "Cloud Labs",
  },
  {
    id: "kk-ansible-1",
    name: "Ansible for Configuration Management",
    platform: "KodeKloud",
    technology: ["Ansible", "YAML", "Playbooks", "Linux"],
    description: "Writing Ansible playbooks to automate server configuration, package installation, and application deployment across Linux hosts.",
    status: "in-progress",
    category: "Infrastructure Experiments",
  },
  {
    id: "ps-linux-1",
    name: "Linux Administration",
    platform: "Pluralsight",
    technology: ["Linux", "Bash", "Shell Scripting"],
    description: "Deep dive into Linux system administration: file systems, process management, networking, and Bash scripting for automation.",
    status: "completed",
    category: "Infrastructure Experiments",
  },
];

export const labCategories = ["All", "Cloud Labs", "DevOps Practice", "Infrastructure Experiments"];
