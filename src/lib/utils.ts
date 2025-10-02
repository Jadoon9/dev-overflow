import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconsClassName = (techName: string) => {
  const normalizedTecName = techName.toLowerCase().replace(/ /g, "-");

  const techMap: Record<string, string> = {
    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",
    react: "devicon-react-plain",
    nextjs: "devicon-nextjs-plain",
    typescript: "devicon-typescript-plain",
    tailwindcss: "devicon-tailwindcss-plain",
    nodejs: "devicon-nodejs-plain",
    mongodb: "devicon-mongodb-plain",
    prisma: "devicon-prisma-plain",
    express: "devicon-express-plain",
    mysql: "devicon-mysql-plain",
    postgres: "devicon-postgres-plain",
    docker: "devicon-docker-plain",
    aws: "devicon-aws-plain",
    firebase: "devicon-firebase-plain",
    git: "devicon-git-plain",
    github: "devicon-github-plain",
    html: "devicon-html5-plain",
    css: "devicon-css3-plain",
    bootstrap: "devicon-bootstrap-plain",
    jquery: "devicon-jquery-plain",
    vue: "devicon-vuejs-plain",
    angular: "devicon-angularjs-plain",
    reactnative: "devicon-react-plain",
    flutter: "devicon-flutter-plain",
    kotlin: "devicon-kotlin-plain",
    swift: "devicon-swift-plain",
    python: "devicon-python-plain",
    java: "devicon-java-plain",
    csharp: "devicon-csharp-plain",
    ruby: "devicon-ruby-plain",
    php: "devicon-php-plain",
    laravel: "devicon-laravel-plain",
    django: "devicon-django-plain",
    flask: "devicon-flask-plain",
    sql: "devicon-sql-plain",
    nosql: "devicon-nosql-plain",
    graphql: "devicon-graphql-plain",
    rest: "devicon-rest-plain",
    grpc: "devicon-grpc-plain",
    grpcweb: "devicon-grpc-plain",
  };
  return `${techMap[normalizedTecName]} colored` || "devicon-devicon-plain";
};

export const getTimeStamp = (createdAt: Date): string => {
  const date = new Date(createdAt);
  const now = new Date();

  const diffMilliseconds = now.getTime() - date.getTime();
  const diffSeconds = Math.round(diffMilliseconds / 1000);
  if (diffSeconds < 60) {
    return `${diffSeconds} seconds ago`;
  }

  const diffMinutes = Math.round(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes} mins ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hours ago`;
  }

  const diffDays = Math.round(diffHours / 24);

  return `${diffDays} days ago`;
};
