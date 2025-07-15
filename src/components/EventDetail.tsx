
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, Award } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const EventDetail = () => {
  const { id } = useParams();
  
  const eventData = {
    1: {
      title: "Organic Farming Workshop",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Punjab, India",
      participants: 120,
      status: "Completed",
      description: "A comprehensive workshop on organic farming techniques and sustainable practices. This event brought together farmers, agricultural experts, and sustainability advocates to share knowledge and best practices in organic agriculture.",
      agenda: [
        "9:00 AM - Registration and Welcome",
        "10:00 AM - Introduction to Organic Farming",
        "11:30 AM - Soil Health Management",
        "1:00 PM - Lunch Break",
        "2:00 PM - Pest Management in Organic Systems",
        "3:30 PM - Marketing Organic Products",
        "4:30 PM - Q&A Session",
        "5:00 PM - Closing Remarks"
      ],
      outcomes: [
        "120 farmers trained in organic techniques",
        "50 soil samples tested for health assessment",
        "15 new organic certification applications",
        "3 farmer cooperatives formed"
      ],
      images: [
        "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    2: {
      title: "Biodiversity Conservation Summit",
      date: "February 8, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Kerala, India",
      participants: 200,
      status: "Completed",
      description: "Three-day summit focusing on preserving local biodiversity and traditional farming methods. The event featured presentations from leading researchers, field demonstrations, and interactive workshops on biodiversity conservation.",
      agenda: [
        "8:00 AM - Registration",
        "9:00 AM - Opening Ceremony",
        "10:00 AM - Keynote: Biodiversity Crisis",
        "11:30 AM - Traditional Farming Methods",
        "1:00 PM - Lunch Break",
        "2:00 PM - Seed Conservation Techniques",
        "3:30 PM - Field Demonstrations",
        "5:00 PM - Panel Discussion",
        "6:00 PM - Networking Session"
      ],
      outcomes: [
        "200 participants from 15 states",
        "30 biodiversity conservation projects initiated",
        "500 seed varieties documented",
        "5 research collaborations established"
      ],
      images: [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  };

  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
          <p className="text-gray-600">The event you're looking for doesn't exist.</p>
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
            {event.title}
          </h1>
          <Badge className="bg-green-600 text-white mb-4">
            {event.status}
          </Badge>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Date</h3>
              <p className="text-gray-600">{event.date}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Time</h3>
              <p className="text-gray-600">{event.time}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
              <p className="text-gray-600">{event.location}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Participants</h3>
              <p className="text-gray-600">{event.participants}</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Event Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6">
                {event.description}
              </p>
            </CardContent>
          </Card>

          {/* Agenda & Outcomes */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.agenda.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Key Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{outcome}</span>
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
            <CardTitle className="text-xl text-green-800">Event Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {event.images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="aspect-video h-48">
                      <img 
                        src={image} 
                        alt={`${event.title} - Image ${index + 1}`}
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

export default EventDetail;
