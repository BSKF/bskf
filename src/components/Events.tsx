
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Organic Farming Workshop",
      date: "March 15, 2024",
      location: "Punjab, India",
      participants: 120,
      description: "A comprehensive workshop on organic farming techniques and sustainable practices.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Biodiversity Conservation Summit",
      date: "February 8, 2024",
      location: "Kerala, India",
      participants: 200,
      description: "Three-day summit focusing on preserving local biodiversity and traditional farming methods.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Water Conservation Training",
      date: "January 20, 2024",
      location: "Rajasthan, India",
      participants: 85,
      description: "Training session on rainwater harvesting and efficient irrigation systems.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const upcomingEvents = [
    {
      id: 4,
      title: "Seed Exchange Festival",
      date: "July 22, 2024",
      location: "Maharashtra, India",
      participants: "Expected 300+",
      description: "Annual festival celebrating traditional seeds and promoting seed sovereignty among farmers.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Climate Resilient Agriculture",
      date: "August 10, 2024",
      location: "Tamil Nadu, India",
      participants: "Expected 150+",
      description: "Workshop on adapting farming practices to climate change challenges.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Young Farmers Convention",
      date: "September 5, 2024",
      location: "Gujarat, India",
      participants: "Expected 250+",
      description: "Empowering the next generation of farmers with modern sustainable techniques.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const EventCard = ({ event, isPast }: { event: any; isPast: boolean }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-green-800 group-hover:text-green-600 transition-colors">
          {event.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {event.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-green-600" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-green-600" />
            {isPast ? `${event.participants} participants` : event.participants}
          </div>
        </div>
        
        <Link to={`/events/${event.id}`}>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            See More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in our mission to transform agriculture through knowledge sharing, 
            community building, and sustainable practices.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Past Events
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Events;
