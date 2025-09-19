import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Download, BookOpen, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PublicationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const publicationsData = {
        1: {
          category: 'Research Paper',
          title: "Soil Health and Regenerative Farming Practices in West Bengal",
          author: "Dr. A. K. Banerjee",
          date: "August 2023",
          status: "Published",
          description: "A comprehensive study on the impact of organic and natural farming methods on soil microbiome and crop yields in the Gangetic plains. This paper delves into the scientific evidence supporting a shift away from chemical-intensive agriculture towards more sustainable, soil-centric approaches.",
          content: [
            "The Gangetic plains of West Bengal, known for their fertility, have faced significant soil degradation over the past few decades due to intensive farming and chemical inputs. This research paper explores the adoption of regenerative agricultural practices as a viable solution to restore soil health and ensure long-term sustainability.",
            "Our study spanned over three years, involving 500 smallholder farmers across five districts. We implemented a variety of techniques, including no-till farming, cover cropping with nitrogen-fixing legumes, and the application of compost and vermicompost. Soil samples were collected and analyzed quarterly to measure changes in organic carbon, microbial biomass, and nutrient availability.",
            "Key findings indicate that soil organic carbon levels increased by an average of 35%, water retention capacity improved by 25%, and crop yields for traditional rice varieties surpassed conventional farming by the third year. The findings strongly suggest that regenerative farming is not only ecologically beneficial but also economically viable for smallholder farmers in West Bengal."
          ],
          keyTakeaways: [
            "Increased soil organic carbon by 35%.",
            "Improved water retention, reducing irrigation needs.",
            "Enhanced biodiversity in the soil microbiome.",
            "Higher, more resilient crop yields over time."
          ],
          images: [
            "https://images.unsplash.com/photo-1597626133663-53df9633b798?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1444927714506-8492d91b4b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          ]
        },
        2: {
            category: 'Annual Report',
            title: "BSKF Annual Report 2022-2023",
            author: "Bangla Susthayi Krishi Foundation",
            date: "July 2023",
            status: "Published",
            description: "An overview of our activities, impact, and financial performance for the fiscal year, highlighting key achievements in community development and farmer empowerment. This report outlines our strategic goals and progress towards building a more sustainable agricultural landscape in India.",
            content: [
                "The fiscal year 2022-2023 was a period of significant growth and impact for the Bangla Susthayi Krishi Foundation. We expanded our operational footprint to 30+ districts, reaching over 850 villages and directly empowering more than 12,000 farmers with knowledge, resources, and market linkages.",
                "Key programmatic achievements include the preservation of 150+ native seed varieties, the transformation of 25,000 acres to sustainable farming practices, and an average income increase of 40% for participating farm households. Our financial statements, audited by an independent firm, reflect our commitment to transparency and the efficient stewardship of the funds entrusted to us.",
            ],
            keyTakeaways: [
                "Expanded reach to over 850 villages.",
                "Empowered 12,000+ farmers.",
                "Achieved an average of 40% income increase for participants.",
                "Maintained financial transparency and accountability."
            ],
            images: [
                "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
        },
        3: {
            category: 'Case Study',
            title: "Empowering Women Farmers Through Seed Banks",
            author: "S. Dasgupta",
            date: "June 2023",
            status: "Published",
            description: "A detailed case study on our initiative to create community-led seed banks, focusing on the social and economic empowerment of women. This study documents the journey of 50 women-led self-help groups in rural Bengal and their success in preserving biodiversity and achieving financial independence.",
            content: [
                "This case study examines the BSKF's flagship program on establishing community-managed seed banks led by women Self-Help Groups (SHGs). The initiative was designed to address the dual challenges of eroding agrobiodiversity and the economic marginalization of women in rural areas.",
                "Through a participatory approach, we provided training in seed preservation, organic farming, and financial management. The results show a remarkable increase in the cultivation of diverse, climate-resilient traditional crops. Furthermore, the women SHGs have developed a sustainable business model, selling surplus seeds and organic produce, thereby enhancing their household income and social standing within the community."
            ],
            keyTakeaways: [
                "Established 50 community-led seed banks.",
                "Increased cultivation of traditional crop varieties by 200%.",
                "Women's participation in household financial decisions rose by 60%.",
                "Created a replicable model for women's empowerment."
            ],
            images: [
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1579621970795-87f54f590095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1627920518835-1a804791e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
        },
        4: {
            category: 'Field Guide',
            title: "A Farmer's Guide to Native Pest Control",
            author: "BSKF Field Team",
            date: "May 2023",
            status: "Published",
            description: "A practical, illustrated guide for farmers on identifying and managing common pests using traditional and organic methods. This guide avoids technical jargon and provides easy-to-implement solutions using locally available resources, empowering farmers to reduce their reliance on chemical pesticides.",
            content: [
                "Reliance on chemical pesticides has detrimental effects on soil health, biodiversity, and farmer well-being. This field guide was developed in collaboration with farmers to document and disseminate effective, low-cost, and eco-friendly pest management techniques.",
                "The guide covers the preparation of natural repellents from neem, chili, and garlic, the promotion of beneficial insects, and cropping patterns that naturally deter pests. Each method is accompanied by step-by-step instructions and illustrations for easy understanding and application in the field."
            ],
            keyTakeaways: [
                "Provides 25+ recipes for natural pesticides.",
                "Illustrated guide for identifying 40 common pests and beneficial insects.",
                "Promotes a holistic, integrated pest management (IPM) approach.",
                "Designed for easy use by farmers with varying literacy levels."
            ],
            images: [
                "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
        },
        5: {
            category: 'Research Paper',
            title: "Water Conservation Techniques for Smallholder Farms",
            author: "Dr. R. Chatterjee",
            date: "April 2023",
            status: "Published",
            description: "Analysis of low-cost water conservation methods, including rainwater harvesting and drip irrigation, and their impact on crop resilience in drought-prone areas. This paper presents data from our pilot projects and offers scalable solutions for water management.",
            content: [
                "Water scarcity is a critical challenge for agriculture, particularly for smallholder farmers in rain-fed regions. This paper evaluates the effectiveness of various low-cost water conservation technologies implemented across our project sites.",
                "We analyzed the performance of structures like farm ponds, contour bunds, and check dams in harvesting rainwater. The study also assesses the water-use efficiency gains from adopting micro-irrigation systems like drip and sprinkler irrigation. The results demonstrate a significant improvement in water availability for critical irrigation, leading to enhanced crop survival rates and yields during dry spells."
            ],
            keyTakeaways: [
                "Farm ponds increased water availability by an average of 150%.",
                "Drip irrigation reduced water consumption by up to 60% compared to flood irrigation.",
                "Improved crop resilience against mid-season droughts.",
                "Provides a cost-benefit analysis for each conservation technique."
            ],
            images: [
                "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1599454100885-b3a1a56a642e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1476900975122-353f4111933c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
        }
    };

    const publication = publicationsData[id as keyof typeof publicationsData];

    if (!publication) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Publication Not Found</h2>
              <p className="text-gray-600">The publication you're looking for doesn't exist.</p>
            </div>
          </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                 {/* Header */}
                 <div className="mb-12">
                    <Button variant="ghost" onClick={() => navigate('/publications')} className="flex items-center text-green-700 font-semibold mb-8 group pl-0 hover:bg-transparent">
                        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to all publications
                    </Button>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                            {publication.title}
                        </h1>
                        <Badge className="bg-green-600 text-white mb-4">
                            {publication.status}
                        </Badge>
                    </div>
                </div>

                {/* Publication Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardContent className="p-6 text-center">
                            <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Date</h3>
                            <p className="text-gray-600">{publication.date}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <User className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Author</h3>
                            <p className="text-gray-600">{publication.author}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Category</h3>
                            <p className="text-gray-600">{publication.category}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                     {/* Description */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-2xl text-green-800">Abstract</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {publication.description}
                            </p>
                            {publication.content.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </CardContent>
                    </Card>
                    
                    {/* Key Takeaways & Download */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl text-green-800">Key Takeaways</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                {publication.keyTakeaways.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <ChevronRight className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl text-green-800">Download</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">Get the full version of this publication.</p>
                                <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                 {/* Image Gallery */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl text-green-800">Related Images</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Carousel className="w-full max-w-4xl mx-auto">
                            <CarouselContent>
                                {publication.images.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="aspect-video h-48">
                                    <img 
                                        src={image} 
                                        alt={`${publication.title} - Image ${index + 1}`}
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
    )
}

export default PublicationDetail;

