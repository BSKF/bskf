// src/components/ProjectDetail.tsx

import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Mic
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const projectData = {
  1: {
    title: "Kitchen Garden",
    location: "Karnataka & Tamil Nadu",
    participants: "2,400 farmers",
    duration: "March 2023 - Ongoing",
    status: "Active",
    progress: 75,
    description:
      "Our Organic Millet Revival project is a comprehensive initiative aimed at reviving traditional millet cultivation across Karnataka and Tamil Nadu...",
    objectives: [
      "Revive traditional millet varieties",
      "Improve soil health through organic practices",
      "Enhance nutritional security",
      "Provide sustainable income opportunities"
    ],
    achievements: [
      "2,400+ farmers trained",
      "50 millet varieties preserved",
      "40% increase in soil organic matter",
      "25% increase in farmer income"
    ],
    images: ["/KG1.jpg","/KG2.jpg","/KG3.jpg","/KG4.jpg","/KG5.jpg","/KG6.jpg","/KG7.jpg","/KG8.jpg","/KG9.jpg","/KG10.jpg","/KG11.jpg","/KG12.jpg","/KG14.jpg","/KG15.jpg","/KG16.jpg","/KG17.jpg"]
  },

  2: {
    title: "Mitti Navinikaran",
    location: "Rajasthan & Gujarat",
    participants: "1,800 farmers",
    duration: "January 2023 - Ongoing",
    status: "Active",
    progress: 60,
    description:
      "The Water Conservation Initiative focuses on building community-managed water harvesting systems and promoting drought-resistant crops...",
    objectives: [
      "Build water harvesting systems",
      "Promote drought-resistant crops",
      "Train farmers in drip irrigation",
      "Improve groundwater recharge"
    ],
    achievements: [
      "120 structures built",
      "1,800 farmers trained",
      "30% reduced water usage",
      "50% groundwater increase"
    ],
    images: ["/MN1.jpg", "/MN3.jpg","/MN4.jpg","/MN5.jpg","/MN6.jpg","/MN7.jpg","/MN8.jpg","/MN9.jpg","/MN10.jpg"]
  },
  3: {
    title: "MycoSphere: Bridging Science and Soil",
    location: "Lovely Professional University (LPU), Punjab, India",
    participants: "Agricultural practitioners & students",
    duration: "1st March 2025",
    status: "Completed",
    progress: 100,
    description:
    "The Bangla Susthayi Krishi Foundation (BSKF), in partnership with Vanune: School of Agriculture, Lovely Professional University (LPU) and the Sustainable Agriculture Network, hosted a focused, high-impact technical session titled “MycoSphere: Bridging Science and Soil.” Held on March 1st, 2025, the session delivered deep scientific and practical insights into leveraging mycorrhizal fungi for regenerative soil health. Moving beyond theory, the program emphasized real-world methods for isolating, multiplying, and applying beneficial soil microorganisms to build resilient, nutrient-efficient, and chemical-free agricultural systems.",

    objectives: [
    "Introduce the scientific foundations of mycorrhizal fungi in regenerative agriculture",
    "Demonstrate isolation techniques for beneficial native mycorrhizal strains",
    "Train participants in mass multiplication of mycorrhizal inoculants",
    "Promote soil biodiversity-driven, chemical-free farming systems",
    "Bridge academic research with field-level agricultural practices"
  ],

   achievements: [
    "Delivered advanced technical literacy on mycorrhizal fungi applications",
    "Strengthened collaboration between BSKF and LPU’s School of Agriculture",
    "Equipped participants with scalable techniques for soil health restoration",
    "Enhanced understanding of plant nutrient and water uptake through symbiotic fungi",
    "Contributed to SDG 2 (Zero Hunger) and SDG 15 (Life on Land) through soil regeneration"
  ],
  speakers: [
    {
      name: "Dr. Chandra Mohan Mehta",
      designation: "Associate Dean, School of Agriculture, Lovely Professional University (LPU)",
      expertise:
        "Soil microbiology, mycorrhizal fungi, regenerative and sustainable agriculture"
    }
  ],
 
    images: ["/MS1.jpg", "/MS2.jpg", "/MS3.jpg","/MS4.jpg","/MS5.jpg","/MS6.jpg","/MS7.jpg","/MS8.jpg","/MS9.jpg"]
  },
  4: {
      title: "Hands-on Training on Biodiversity Conservation & Regenerative Farming",
  location: "School of Agriculture, Lovely Professional University (LPU), Punjab, India",
  participants: "Farmers & Students",
  duration: "6th November – 8th November 2024",
  status: "Completed",
  progress: 100,

  description:
    "The Bangla Susthayi Krishi Foundation (BSKF), in strategic collaboration with the Sustainable Agriculture Network (SAN), Fagrovision, and Agrosphere Guardians, hosted an intensive three-day hands-on training on Biodiversity Conservation and Regenerative Farming. Held from November 6th to 8th, 2024 at the School of Agriculture, LPU, the program moved beyond theory to deliver practical, field-level skills essential for transitioning to climate-resilient farming systems. The training emphasized soil biology, natural pest control, biodiversity conservation, and sustainable resource management, empowering participants to drive long-term ecological and economic stability.",

  objectives: [
    "Build practical understanding of regenerative soil health and living soil systems",
    "Train participants in organic farming practices and high-value bio-inputs",
    "Develop skills in biological pest control to reduce chemical dependency",
    "Promote biodiversity conservation through beneficial insect rearing",
    "Encourage youth leadership and agroecology-based livelihoods"
  ],

  achievements: [
    "Delivered hands-on training in organic farming and biochar application",
    "Enabled practical production and application of bio-pesticides such as Trichoderma",
    "Trained participants in rearing beneficial insects for natural pest control",
    "Strengthened ecological literacy linking soil health, biodiversity, and farm resilience",
    "Reinforced BSKF’s commitment to climate-resilient and biodiversity-driven agriculture"
  ],

  speakers: [
    {
      name: "Dr. Tarun Sharma",
      designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
      expertise: "Organic farming practices and regenerative agriculture"
    },
    {
      name: "Dr. Chandra Mohan Mehta",
      designation: "Associate Dean, School of Agriculture, Lovely Professional University (LPU)",
      expertise: "Biochar, soil microbiology, and regenerative soil systems"
    },
    {
      name: "Dr. Adesh Kumar",
      designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
      expertise: "Bio-inoculants, bio-pesticides, and bio-fertilizers"
    },
    {
      name: "Dr. Vipul Kumar",
      designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
      expertise: "Trichoderma production and biological pest control"
    },
    {
      name: "Dr. Ankush Raut",
      designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
      expertise: "Biodiversity conservation and beneficial insects"
    },
    {
      name: "Shaik Imran Choudhury",
      designation: "Prakheti Agrologics",
      expertise: "Youth leadership and opportunities in agroecology"
    },
    {
      name: "Dr. Pritha Ghosh",
      designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
      expertise: "Corcyra rearing for biological control"
    },
    {
      name: "Dr. Satish Gharde",
      designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
      expertise: "Applied biological control and agroecological practices"
    }
  ],
    images: ["/HOB2.jpg","/HOB3.jpg","/HOB4.jpg","/HOB5.jpg","/HOB6.jpg","/HOB7.jpg","/HOB8.jpg","/HOB9.jpg","/HOB10.jpg","/HOB11.jpg","/HOB12.jpg","/HOB13.jpg","/HOB14.jpg","/HOB15.jpg","/HOB16.jpg","/HOB17.jpg","/HOB18.jpg","/HOB19.jpg","/HOB20.jpg"]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
 const project = projectData[Number(id) as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <h2 className="text-xl font-bold text-gray-700">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title + Status */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          {project.title}
        </h1>
        <Badge className="bg-green-600 text-white mt-4">{project.status}</Badge>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">{project.location}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold">Participants</h3>
            <p className="text-gray-600">{project.participants}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold">Duration</h3>
            <p className="text-gray-600">{project.duration}</p>
          </CardContent>
        </Card>
      </div>

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
            <Target /> Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-700"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Objectives & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-green-800">Key Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span className="text-gray-600">{obj}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center gap-2">
              <TrendingUp /> Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.achievements.map((ach, i) => (
                <li key={i} className="flex gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <span className="text-gray-600">{ach}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Speakers Section (NEW) */}
      {project.speakers && project.speakers.length > 0 && (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center gap-2">
              <Mic /> Featured Speaker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {project.speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="border-l-4 border-green-600 pl-4"
                >
                  <h4 className="font-semibold text-gray-800">
                    {speaker.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {speaker.designation}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Expertise:</strong> {speaker.expertise}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-green-800">Project Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {project.images.map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                  <div className="aspect-video h-48">
                    <img
                      src={img}
                      alt={`${project.title} - Image ${i + 1}`}
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
  );
};

export default ProjectDetail;
