import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, MapPin, Users, Target, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in a real app, this would come from an API
  const eventData: Record<string, any> = {
    "1": {
      title: "Organic Farming Workshop",
      date: "March 15, 2024",
      location: "Punjab, India",
      participants: 120,
      description: "A comprehensive workshop on organic farming techniques and sustainable practices that brought together farmers from across Punjab to learn about chemical-free agriculture methods.",
      heroImage: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Introduced 50+ farmers to composting techniques",
        "Demonstrated natural pest control methods",
        "Distributed organic seeds to 120 participants",
        "Established 5 community compost centers"
      ],
      photos: [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      worksDone: [
        "Soil Testing Workshop: Conducted comprehensive soil health assessments for 80 farm plots",
        "Organic Certification Training: Guided farmers through the organic certification process",
        "Seed Bank Establishment: Set up community seed banks in 3 villages",
        "Follow-up Support: Organized monthly check-ins with participating farmers"
      ]
    },
    "2": {
      title: "Biodiversity Conservation Summit",
      date: "February 8, 2024",
      location: "Kerala, India",
      participants: 200,
      description: "Three-day summit focusing on preserving local biodiversity and traditional farming methods that celebrated indigenous knowledge and modern conservation techniques.",
      heroImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Documented 100+ traditional seed varieties",
        "Established 10 biodiversity hotspots",
        "Trained 200 farmers in conservation practices",
        "Created digital archive of indigenous knowledge"
      ],
      photos: [
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      worksDone: [
        "Species Mapping: Catalogued native plant species across 50 farms",
        "Conservation Protocols: Developed guidelines for protecting endangered varieties",
        "Community Gardens: Established 8 community biodiversity gardens",
        "Educational Materials: Created multilingual resources on conservation"
      ]
    },
    // Add more events as needed...
  };

  const event = eventData[id || ""];

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-green-800 mb-4">Event Not Found</h1>
            <Link to="/">
              <Button className="bg-green-600 hover:bg-green-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={event.heroImage} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {event.location}
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                {event.participants} participants
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/#events">
          <Button variant="outline" className="mb-8 border-green-600 text-green-600 hover:bg-green-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
        </Link>

        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">About This Event</h2>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Key Highlights
                </h2>
                <ul className="space-y-3">
                  {event.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Works Done */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Works Accomplished</h2>
                <div className="space-y-4">
                  {event.worksDone.map((work: string, index: number) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg">
                      <p className="text-gray-700">{work}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Photo Gallery */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {event.photos.map((photo: string, index: number) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={photo} 
                        alt={`Event photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Get Involved</h3>
                <p className="text-gray-600 mb-4">
                  Want to participate in our upcoming events or support our mission?
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Join Our Next Event
                  </Button>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Donate to Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
