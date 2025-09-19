import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Publications = () => {
  const allPublications = [
    {
      id: 1,
      category: 'Research Paper',
      title: "Soil Health and Regenerative Farming Practices in West Bengal",
      author: "Dr. A. K. Banerjee",
      date: "August 2023",
      description: "A comprehensive study on the impact of organic farming methods on soil microbiome and crop yields in the Gangetic plains.",
      image: "https://images.unsplash.com/photo-1597626133663-53df9633b798?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: 'Annual Report',
      title: "BSKF Annual Report 2022-2023",
      author: "Bangla Susthayi Krishi Foundation",
      date: "July 2023",
      description: "An overview of our activities, impact, and financial performance for the fiscal year, highlighting key achievements in community development.",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: 'Case Study',
      title: "Empowering Women Farmers Through Seed Banks",
      author: "S. Dasgupta",
      date: "June 2023",
      description: "A detailed case study on our initiative to create community-led seed banks, focusing on the social and economic empowerment of women.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        category: 'Field Guide',
        title: "A Farmer's Guide to Native Pest Control",
        author: "BSKF Field Team",
        date: "May 2023",
        description: "A practical, illustrated guide for farmers on identifying and managing common pests using traditional and organic methods.",
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        category: 'Research Paper',
        title: "Water Conservation Techniques for Smallholder Farms",
        author: "Dr. R. Chatterjee",
        date: "April 2023",
        description: "Analysis of low-cost water conservation methods, including rainwater harvesting and drip irrigation, and their impact on crop resilience.",
        image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ['All', 'Research Paper', 'Annual Report', 'Case Study', 'Field Guide'];

  const PublicationCard = ({ publication }: { publication: any; }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={publication.image} 
          alt={publication.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2 text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
            <BookOpen className="w-4 h-4" />
            <span>{publication.category}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="flex-grow">
        <CardTitle className="text-green-800 group-hover:text-green-600 transition-colors">
          {publication.title}
        </CardTitle>
        <CardDescription className="text-gray-600 pt-2">
          {publication.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <User className="w-4 h-4 mr-2 text-green-600" />
            {publication.author}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-green-600" />
            {publication.date}
          </div>
        </div>
        
        <Link to={`/publications/${publication.id}`}>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Publications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of research papers, reports, and guides detailing our findings and impact.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 max-w-3xl mx-auto mb-8">
            {categories.map(category => (
                <TabsTrigger key={category} value={category} className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                    {category}
                </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="All">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPublications.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map(category => (
             <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPublications
                        .filter(p => p.category === category)
                        .map((pub) => (
                            <PublicationCard key={pub.id} publication={pub} />
                        ))
                    }
                </div>
             </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Publications;
