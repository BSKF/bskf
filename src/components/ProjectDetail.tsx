
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Target, TrendingUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projectData = {
    1: {
      title: "Organic Millet Revival",
      location: "Karnataka & Tamil Nadu",
      participants: "2,400 farmers",
      duration: "March 2023 - Ongoing",
      status: "Active",
      progress: 75,
      description: "Our Organic Millet Revival project is a comprehensive initiative aimed at reviving traditional millet cultivation across Karnataka and Tamil Nadu. This project focuses on improving nutrition, enhancing soil health, and providing sustainable income opportunities for farmers.",
      objectives: [
        "Revive traditional millet varieties",
        "Improve soil health through organic practices",
        "Enhance nutritional security in rural communities",
        "Provide sustainable income opportunities"
      ],
      achievements: [
        "2,400 farmers trained in organic millet cultivation",
        "50 traditional millet varieties preserved",
        "40% increase in soil organic matter",
        "25% increase in farmer income"
      ],
      images: [
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    2: {
      title: "Water Conservation Initiative",
      location: "Rajasthan & Gujarat",
      participants: "1,800 farmers",
      duration: "January 2023 - Ongoing",
      status: "Active",
      progress: 60,
      description: "The Water Conservation Initiative focuses on building community-managed water harvesting systems and promoting drought-resistant crop varieties in the arid regions of Rajasthan and Gujarat.",
      objectives: [
        "Build sustainable water harvesting systems",
        "Promote drought-resistant crop varieties",
        "Train farmers in water-efficient irrigation",
        "Improve groundwater recharge"
      ],
      achievements: [
        "120 water harvesting structures built",
        "1,800 farmers trained in water conservation",
        "30% reduction in water usage",
        "50% increase in groundwater levels"
      ],
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  };

  const project = projectData[Number(id) as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <p className="text-gray-600">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            {project.title}
          </h1>
          <Badge className="bg-green-600 text-white mb-4">
            {project.status}
          </Badge>
        </div>

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
              <p className="text-gray-600">{project.location}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Participants</h3>
              <p className="text-gray-600">{project.participants}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
              <p className="text-gray-600">{project.duration}</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
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
            </CardContent>
          </Card>

          {/* Objectives & Achievements */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Key Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Compact Image Gallery at Bottom */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-800">Project Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="aspect-video h-48">
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
