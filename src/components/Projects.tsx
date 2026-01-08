// src/components/Projects.tsx

import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar } from "lucide-react";

const projectList = [
  {
    id: 1,
    title: "Kitchen Garden",
    location: "Rajasthan & Gujarat",
    participants: "1,800 farmers",
    duration: "January 2023 - Ongoing",
    status: "Active",
    thumbnail: "/KG2.jpg",
  },
  {
    id: 2,
    title: "Mitti Navinikaran",
    location: "Rajasthan & Gujarat",
    participants: "1,800 farmers",
    duration: "January 2023 - Ongoing",
    status: "Active",
    thumbnail: "/MN6.jpg",
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-orange-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-100"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <Badge className="bg-green-600 text-white">{project.status}</Badge>
                </div>

                <div className="text-gray-600 space-y-2">
                  <p className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" /> {project.location}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4" /> {project.participants}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" /> {project.duration}
                  </p>
                </div>

                <Link to={`/projects/${project.id}`}>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    View Project
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
