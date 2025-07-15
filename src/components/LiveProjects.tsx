
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiveProjects = () => {
  const liveProjects = [
    {
      id: 1,
      title: "Organic Millet Revival",
      location: "Karnataka & Tamil Nadu",
      participants: "2,400 farmers",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Reviving traditional millet cultivation to improve nutrition and soil health while providing sustainable income.",
      progress: 75
    },
    {
      id: 2,
      title: "Water Conservation Initiative", 
      location: "Rajasthan & Gujarat",
      participants: "1,800 farmers",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Building community-managed water harvesting systems and promoting drought-resistant crop varieties.",
      progress: 60
    },
    {
      id: 3,
      title: "Women Farmers Collective",
      location: "Uttar Pradesh & Bihar", 
      participants: "3,200 women",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Empowering women through collective farming, direct market access, and agricultural entrepreneurship training.",
      progress: 85
    },
    {
      id: 4,
      title: "Climate-Smart Farming",
      location: "Kerala & Goa",
      participants: "1,200 farmers", 
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Implementing climate-resilient practices including agroforestry and integrated pest management.",
      progress: 40
    }
  ];

  const completedProjects = [
    {
      id: 5,
      title: "Seed Bank Development",
      location: "Madhya Pradesh",
      participants: "1,500 farmers",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Successfully established community seed banks preserving 200+ indigenous varieties.",
      progress: 100
    },
    {
      id: 6,
      title: "Soil Health Management",
      location: "Punjab & Haryana",
      participants: "2,800 farmers",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Completed comprehensive soil testing and organic matter enhancement across 15,000 acres.",
      progress: 100
    },
    {
      id: 7,
      title: "Livestock Integration Program",
      location: "Odisha & Jharkhand",
      participants: "980 farmers",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Successfully integrated livestock with crop production for sustainable farming systems.",
      progress: 100
    }
  ];

  const ProjectCard = ({ project, isLive }: { project: any; isLive: boolean }) => (
    <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{project.participants}</span>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl text-green-800">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        
        <Link to={`/projects/${project.id}`}>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300">
            Learn More & Support
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Transforming lives across rural India through sustainable initiatives
          </p>
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="live" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Live Projects
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Completed Projects
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="live">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {liveProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isLive={true} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isLive={false} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LiveProjects;
