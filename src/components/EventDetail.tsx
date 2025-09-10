
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, Award } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const EventDetail = () => {
  const { id } = useParams();
  
  const eventData = {
    1: {
      title: "Waste to Wealth : Turn Farm Waste into Income",
      date: "16th August - 20th August 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      participants: 23,
      status: "Completed",
      description: "The “Waste to Wealth: Turn Farm Waste into Income” workshop guided farmers and agri-enthusiasts on transforming agricultural residues into valuable products like compost, bio-fertilizers, and energy, promoting sustainable income and environmental conservation. The session highlighted innovative practices and success stories that inspired participants to adopt waste-to-resource approaches. It also emphasized how such initiatives can reduce pollution, improve soil fertility, and contribute to a circular economy in agriculture.",
      agenda: [
        "7:00 PM - Registration",
        "7:15 PM - Welcoming Guest Speakers",
        "7:30 PM - Speech by Guest Speakers",
        "8:15 PM- Q&A Session",
        "8:30 PM - Closing Remarks"
      ],
      outcomes: [
        "16th August 2025 ~ Rethinking Agricultural Waste: Sustainable Solutions and Next-Gen by DIPTANU BANIK",
        "17th August 2025 ~ Black Soldier Fly Farming for Smart Waste Conversion  by DR. DEVINA SERAM",
        "18th August 2025 ~ Vermicompost turning waste into Black Gold with Earthworms by DR. TARUN KUMAR",
        "19th August 2025 ~ Composting: Mastering the Basics of Organic Composting by DR. SUSHANT SUKUMAR PATIL",
        "20th August 2025 ~ Closing Ceremony by BSKF TEAM(Surbhi Srivastava, Subhajit Mukherjee, Swastik Mondal, Sakshi Mondal)",
      ],
      images: [
        "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    2: {
      title: "Building Resilience: Food Forests, Agroforestry, Agri-preneurship & Carbon Credits for Cultivating Climate Solutions & Food Security ",
      date: "28th March - 1st April 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      participants: 95,
      status: "Completed",
      description: "The workshop focused on how innovative and sustainable approaches like food forests, agroforestry practices, and climate-smart entrepreneurship can strengthen food systems, improve livelihoods, and mitigate climate change through carbon credit opportunities. ",
      agenda: [
        "7:00 PM - Registration",
        "7:15 PM - Welcoming Guest Speakers",
        "7:30 PM - Speech by Guest Speakers",
        "8:15 PM- Q&A Session",
        "8:30 PM - Closing Remarks"
      ],
      outcomes: [
        "28th April 2025 ~ Agroforestry for livelihood and environmental security in India by Dr. Sangram Chavan",
        "29th April 2025 ~ Designing Synergistic Ecosystems: Principles of Food Forests & Agroforestry by Shihab Kunhahammed",
        "30th April 2025 ~ Building Social Ventures from Local Produce Traditions & Forest Heritage by Shaik Imran Hussain Choudhary",
        "1st May 2025 ~ From Farm to Market & Beyond. Building Sustainable value Chains by Shameek Chakravarty",
        
      ],
      images: [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    3: {
      title: "Transforming Agriculture: Driving Climate Solutions and Sustainable Food Systems ",
      date: "25th January – 26th January 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      participants: 67,
      status: "Completed",
      description: "The event brought together researchers, academicians, students, and agricultural practitioners to deliberate on the critical role of agriculture in addressing climate change while ensuring sustainable food production. ",
      agenda: [
        "7:00 PM - Registration",
        "7:15 PM - Welcoming Guest Speakers",
        "7:30 PM - Speech by Guest Speakers",
        "8:15 PM- Q&A Session",
        "8:30 PM - Closing Remarks"
      ],
      outcomes: [
        "25th January 2025 ~ Regenerative Agriculture: A Pathway to Climate Resilience and Sustainable Food Security",
        "26th January 2025 ~ The Role of Technology and Innovation in Building Climate-Smart Agriculture",
        
        
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
                  Speakers
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
