import { Button } from "../components/ui/button";
import { BookOpen, Calendar, Home, Target, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-full flex items-center justify-between">
          <div className="text-3xl font-bold text-[#28a745]">Clique</div>
          <div className="flex items-center space-x-4">
            <span>
              <Button
                size="lg"
                onClick={() => {
                  navigate("/signin");
                }}
                className="text-[#28a745] bg-gray-800 hover:bg-gray-800 font-semibold"
              >
                Signin
              </Button>
            </span>
            <span>
              <Button
                size="lg"
                onClick={() => {
                  navigate("/signup");
                }}
                className="bg-[#28a745] hover:bg-[#218838] text-white font-semibold"
              >
                Signup
              </Button>
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Connect, Organize, and Thrive with Clique
          </h1>
          <p className="text-xl mb-8 text-gray-400">
            The ultimate social web app for college students to stay connected
            and motivated.
          </p>
          <Button
            size="lg"
            onClick={() => {
              navigate("/signup");
            }}
            className="bg-[#28a745] hover:bg-[#218838] text-white"
          >
            Get Started
          </Button>
        </section>

        <section id="features" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#28a745]">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-12 h-12 text-[#28a745]" />}
              title="Study Material Corner"
              description="Share and access group study resources in one place."
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-[#28a745]" />}
              title="Study Session Scheduler"
              description="Plan group study sessions and stay accountable."
            />
            <FeatureCard
              icon={<Home className="w-12 h-12 text-[#28a745]" />}
              title="Roommate Journal"
              description="Share updates and photos from dorm life with your group."
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-[#28a745]" />}
              title="Shared Calendar"
              description="Track events and deadlines as a group."
            />
            <FeatureCard
              icon={<Target className="w-12 h-12 text-[#28a745]" />}
              title="Friend Goals"
              description="Create and monitor personal goals with group support."
            />
            <FeatureCard
              icon={<Utensils className="w-12 h-12 text-[#28a745]" />}
              title="Campus Eatery Reviews"
              description="Share and discover favorite places to eat around campus."
            />
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>&copy; 2023 Clique. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-[#28a745] mx-2">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-[#28a745] mx-2">
            Data Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-[#28a745] mx-2">
            Cookies Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
