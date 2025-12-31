
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Waste to Wealth : Turn Farm Waste into Income",
      date: "16th August - 20th August 2025",
      location: "ONLINE",
      participants: 23,
      description: "The “Waste to Wealth: Turn Farm Waste into Income” workshop guided farmers and agri-enthusiasts on transforming agricultural residues into valuable products like compost, bio-fertilizers, and energy, promoting sustainable income and environmental conservation. The session highlighted innovative practices and success stories that inspired participants to adopt waste-to-resource approaches. ",
      image: "/WTW5.jpg"
    },
    {
      id: 2,
      title: "Building Resilience: Food Forests, Agroforestry & Climate Solutions for Food Security",
      date: "28th March - 1st April 2025",
      location: "Online",
      participants: 95,
      description: "The ‘Building Resilience’ summit guided farmers, practitioners, and agri-enthusiasts in adopting food forests, agroforestry, agri-preneurship, and carbon credit models to strengthen climate resilience. The sessions showcased practical strategies, expert insights, and real-world applications that empowered participants to build sustainable livelihoods while enhancing food security and climate action.",
      image: "/BR1.jpg"
    },
    {
      id: 3,
      title: "Transforming Agriculture: Driving Climate Solutions and Sustainable Food Systems",
      date: "25th January – 26th January 2025",
      location: "Online",
      participants: 67,
      description: "The event brought together researchers, academicians, students, and agricultural practitioners to deliberate on the critical role of agriculture in addressing climate change while ensuring sustainable food production. Over the two days, the program served as a dynamic platform for exchanging ideas, sharing innovations, and highlighting strategies to make agricultural practices more resilient, eco-friendly, and resource-efficient. ",
      image: "/TA3.jpg"
    }
  ];

  const upcomingEvents = [
    // {
    //   id: 4,
    //   title: "Seed Exchange Festival",
    //   date: "July 22, 2024",
    //   location: "Maharashtra, India",
    //   participants: "Expected 300+",
    //   description: "Annual festival celebrating traditional seeds and promoting seed sovereignty among farmers.",
    //   image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   id: 5,
    //   title: "Climate Resilient Agriculture",
    //   date: "August 10, 2024",
    //   location: "Tamil Nadu, India",
    //   participants: "Expected 150+",
    //   description: "Workshop on adapting farming practices to climate change challenges.",
    //   image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   id: 6,
    //   title: "Young Farmers Convention",
    //   date: "September 5, 2024",
    //   location: "Gujarat, India",
    //   participants: "Expected 250+",
    //   description: "Empowering the next generation of farmers with modern sustainable techniques.",
    //   image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // }
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
            {upcomingEvents.length>0?(
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))}
            </div>):(
              <div className='w-full flex justify-center text-4xl font-bold text-green-800 mb-4'>
                Coming Soon
              </div>
            )
            }
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
