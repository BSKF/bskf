import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, BookText, Target, Camera, Download } from 'lucide-react';

const PublicationDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for all publications with detailed views
  const publicationsData: Record<string, any> = {
    "1": {
      category: 'Research Paper',
      title: "Soil Health and Regenerative Farming Practices in West Bengal",
      author: "Dr. A. K. Banerjee",
      date: "August 2023",
      description: "A comprehensive study on the impact of organic and natural farming methods on soil microbiome and crop yields in the Gangetic plains. This paper delves into the scientific evidence supporting a shift away from chemical-intensive agriculture towards more sustainable, soil-centric approaches.",
      heroImage: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      keyTakeaways: [
        "Increased soil organic carbon by 35%.",
        "Improved water retention, reducing irrigation needs.",
        "Enhanced biodiversity in the soil microbiome.",
        "Higher, more resilient crop yields over time."
      ],
      fullContent: [
        "The Gangetic plains of West Bengal, known for their fertility, have faced significant soil degradation over the past few decades due to intensive farming and chemical inputs. This research paper explores the adoption of regenerative agricultural practices as a viable solution to restore soil health and ensure long-term sustainability.",
        "Our study spanned over three years, involving 500 smallholder farmers across five districts. We implemented a variety of techniques, including no-till farming, cover cropping with nitrogen-fixing legumes, and the application of compost and vermicompost. Soil samples were collected and analyzed quarterly to measure changes in organic carbon, microbial biomass, and nutrient availability.",
        "The findings strongly suggest that regenerative farming is not only ecologically beneficial but also economically viable for smallholder farmers in West Bengal."
      ],
      photos: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1444927714506-8492d91b4b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530912423473-693617886187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542202277-34306aa7c424?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    "2": {
        category: 'Annual Report',
        title: "BSKF Annual Report 2022-2023",
        author: "Bangla Susthayi Krishi Foundation",
        date: "July 2023",
        description: "An overview of our activities, impact, and financial performance for the fiscal year, highlighting key achievements in community development and farmer empowerment. This report outlines our strategic goals and progress towards building a more sustainable agricultural landscape in India.",
        heroImage: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        keyTakeaways: [
            "Expanded operational reach to over 850 villages.",
            "Empowered 12,000+ farmers with training and resources.",
            "Achieved an average of 40% income increase for participating households.",
            "Maintained full financial transparency and accountability."
        ],
        fullContent: [
            "The fiscal year 2022-2023 was a period of significant growth and impact for the Bangla Susthayi Krishi Foundation. We expanded our operational footprint to 30+ districts, reaching over 850 villages and directly empowering more than 12,000 farmers with knowledge, resources, and market linkages.",
            "Key programmatic achievements include the preservation of 150+ native seed varieties, the transformation of 25,000 acres to sustainable farming practices, and an average income increase of 40% for participating farm households. Our financial statements, audited by an independent firm, reflect our commitment to transparency and the efficient stewardship of the funds entrusted to us.",
        ],
        photos: [
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    }
    // Add other publications from Publications.tsx with expanded details here
  };

  const publication = publicationsData[id || ""];

  if (!publication) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Publication Not Found</h1>
          <Link to="/publications">
            <Button className="bg-green-600 hover:bg-green-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Publications
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={publication.heroImage} 
          alt={publication.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl font-bold mb-4">{publication.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {publication.date}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {publication.author}
              </div>
               <div className="flex items-center">
                <BookText className="w-5 h-5 mr-2" />
                {publication.category}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/publications">
          <Button variant="outline" className="mb-8 border-green-600 text-green-600 hover:bg-green-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Publications
          </Button>
        </Link>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">About This Publication</h2>
                <p className="text-gray-700 leading-relaxed">{publication.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {publication.keyTakeaways.map((takeaway: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Gallery
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {publication.photos.map((photo: string, index: number) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={photo} 
                        alt={`Publication photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Download</h3>
                 <p className="text-gray-600 mb-4">Access the full publication.</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationDetail;

