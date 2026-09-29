export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  github: string;
  badge: { text: string; variant: "pink" | "blue" | "green" | "purple" | "indigo" | "orange" };
}

export const projects: Project[] = [
  {
    id: "vibe-energy",
    title: "Vibe Energy",
    category: "E-commerce",
    description: "An e-commerce website for selling juice products with a modern UI and smooth shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/vibe-energy.png",
    liveDemo: "https://vibe-energy.vercel.app/",
    github: "https://github.com/ashwath-ns/vibe-energy",
    badge: { text: "E-commerce", variant: "pink" },
  },
  {
    id: "weather-web",
    title: "WeatherWeb",
    category: "Web App",
    description: "A modern weather dashboard providing real-time weather updates, forecasts, humidity, and wind data using the Open-Meteo API.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/weather-web.png",
    liveDemo: "https://weather-web-dusky-seven.vercel.app/",
    github: "https://github.com/ashwath-ns/WeatherWeb",
    badge: { text: "Web App", variant: "blue" },
  },
  {
    id: "attendance-pro",
    title: "AttendancePro",
    category: "Utility",
    description: "A simple web application that helps students calculate attendance and track their class records easily.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/attendance-pro.png",
    liveDemo: "https://bunkzone.vercel.app/",
    github: "https://github.com/ashwath-ns/attendancePro",
    badge: { text: "Utility", variant: "green" },
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    category: "Game",
    description: "A simple and interactive two-player Tic Tac Toe game with winner detection, draw detection, and restart functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/tic-tac-toe.png",
    liveDemo: "https://ashwath-ns.github.io/tic-tac-toe/",
    github: "https://github.com/ashwath-ns/tic-tac-toe",
    badge: { text: "Game", variant: "purple" },
  },
];
