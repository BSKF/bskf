
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

interface Speaker {
  name: string;
  designation: string;
  expertise: string;
}

interface Project {
  title: string;
  location: string;
  participants: string;
  duration: string;
  status: string;
  progress: number;
  description: string;
  objectives: string[];
  achievements: string[];
  images: string[];
  speakers?: Speaker[];
}

const projectData: Record<number, Project> = {
 1: {
  title: "From Seed to Plate (Kitchen Garden Initiative)",
  location: "Dasagram, West Bengal",
  participants: "200+ students",
  duration: "September 9, 2023 - Ongoing",
  status: "Active",
  progress: 80,
  description:
    "From Seed to Plate is BSKF’s flagship ‘Living Classroom’ initiative launched on September 9, 2023, in Dasagram, West Bengal. What began as a School Kitchen Garden evolved into a biodiversity-driven educational movement integrating indigenous seed conservation with hands-on STEM learning. The project transforms schools into centers of agricultural excellence where students cultivate chemical-free crops, conserve traditional varieties, and bridge the gap between scientific education and rural farming wisdom.",

  objectives: [
    "Conserve indigenous vegetable and wild edible varieties",
    "Integrate biodiversity education into school curriculum",
    "Promote 100% chemical-free cultivation practices",
    "Establish community seed banks for farmer access",
    "Bridge generational knowledge gaps in sustainable agriculture"
  ],

  achievements: [
    "51 indigenous brinjal varieties conserved",
    "11 rare wild edible species preserved",
    "80+ vegetable varieties cultivated in one school season",
    "200+ student Biodiversity Guardians trained",
    "Established a functional community seed bank system"
  ],
    images: ["/KG1.jpg","/KG2.jpg","/KG3.jpg","/KG4.jpg","/KG5.jpg","/KG6.jpg","/KG7.jpg","/KG8.jpg","/KG9.jpg","/KG10.jpg","/KG11.jpg","/KG12.jpg","/KG14.jpg","/KG15.jpg","/KG16.jpg","/KG17.jpg"]
  },

  2: {
  title: "Mitti Navinikaran",
  location: "Punjab",
  participants: "80 farmers",
  duration: "September 2024 - February 2025",
  status: "Complete",
  progress: 100,
  description:
    "Mitti Navinikaran (Soil Rejuvenation) was a high-impact initiative aimed at restoring Punjab’s degraded soils through sustainable, eco-friendly farming practices. Led by agricultural specialist Dr. Vipul Kumar, the project focused on improving soil vitality using natural microbial solutions like Trichoderma, increasing organic matter, and rebuilding biodiversity. By combining scientific expertise with hands-on farmer training and youth participation, the initiative promoted long-term soil fertility, reduced chemical dependency, and strengthened community resilience.",

  objectives: [
    "Restore soil health using microbial solutions like Trichoderma",
    "Increase soil biodiversity and organic matter content",
    "Train farmers in precise bio-fertilizer dosage and application methods",
    "Promote green manuring and organic residue management",
    "Bridge the gap between agricultural education and real-world farming"
  ],

  achievements: [
    "Reduced dependency on synthetic fertilizers and pesticides",
    "Improved crop resilience against pests and diseases",
    "Lowered input costs for participating farmers",
    "Integrated 15 student volunteers with 20 local farmers for practical field transformation",
    "Promoted production of healthier, chemical-free food for the community"
  ],
    images: ["/MN1.jpg", "/MN3.jpg","/MN4.jpg","/MN5.jpg","/MN6.jpg","/MN7.jpg","/MN8.jpg","/MN9.jpg","/MN10.jpg"]
  },

  3: {
 title: "Digital Pathshala",
  location: "Bankura, West Bengal",
  participants: "30 Student Volunteers",
  duration: "23rd January 2026 - Ongoing",
  status: "Active",
  progress: 10,
  description:
    "Digital Pathshala is a nation-building education initiative launched on 23rd January 2026 to transform learning in rural, tribal, and backward regions of India. The program integrates digital literacy with agricultural awareness to nurture confident, self-reliant, and future-ready students. By building essential computer skills and reconnecting children with the importance of sustainable food systems, Digital Pathshala aims to bridge the digital divide while strengthening India’s agricultural foundation.",

  objectives: [
    "Introduce essential computer and digital literacy skills to rural students",
    "Build a lifelong habit of learning and curiosity",
    "Create early exposure to agriculture and food systems",
    "Empower students to become self-reliant and future-ready",
    "Establish Digital Pathshalas in every rural and tribal block of India"
  ],

  achievements: [
    "Official program launch on 23rd January 2026",
    "Designed scalable model requiring ₹50,000 per center",
    "Integrated digital education with agricultural awareness framework",
    "Created a sustainable expansion vision across rural India"
  ],
    images: ["/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.07.jpeg","/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.21.jpeg","/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.22.jpeg","/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.23.jpeg","/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.24.jpeg","/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.25.jpeg"]
  },
}

//  4: {
//     title: "MycoSphere: Bridging Science and Soil",
//     location: "Lovely Professional University (LPU), Punjab, India",
//     participants: "Agricultural practitioners & students",
//     duration: "1st March 2025",
//     status: "Completed",
//     progress: 100,
//     description:
//     "The Bangla Susthayi Krishi Foundation (BSKF), in partnership with Vanune: School of Agriculture, Lovely Professional University (LPU) and the Sustainable Agriculture Network, hosted a focused, high-impact technical session titled “MycoSphere: Bridging Science and Soil.”...",
//     objectives: [
//       "Introduce the scientific foundations of mycorrhizal fungi in regenerative agriculture",
//       "Demonstrate isolation techniques for beneficial native mycorrhizal strains",
//       "Train participants in mass multiplication of mycorrhizal inoculants",
//       "Promote soil biodiversity-driven, chemical-free farming systems",
//       "Bridge academic research with field-level agricultural practices"
//     ],
//     achievements: [
//       "Delivered advanced technical literacy on mycorrhizal fungi applications",
//       "Strengthened collaboration between BSKF and LPU’s School of Agriculture",
//       "Equipped participants with scalable techniques for soil health restoration",
//       "Enhanced understanding of plant nutrient and water uptake through symbiotic fungi",
//       "Contributed to SDG 2 (Zero Hunger) and SDG 15 (Life on Land) through soil regeneration"
//     ],
//     speakers: [
//       {
//         name: "Dr. Chandra Mohan Mehta",
//         designation: "Associate Dean, School of Agriculture, Lovely Professional University (LPU)",
//         expertise:
//           "Soil microbiology, mycorrhizal fungi, regenerative and sustainable agriculture"
//       }
//     ],
//     images: ["/MS1.jpg", "/MS2.jpg", "/MS3.jpg","/MS4.jpg","/MS5.jpg","/MS6.jpg","/MS7.jpg","/MS8.jpg","/MS9.jpg"]
//   },

//  5: {
//   title: "Hands-on Training on Biodiversity Conservation & Regenerative Farming",
//   location: "School of Agriculture, Lovely Professional University (LPU), Punjab, India",
//   participants: "Farmers & Students",
//   duration: "6th November – 8th November 2024",
//   status: "Completed",
//   progress: 100,

//   description:
//     "The Bangla Susthayi Krishi Foundation (BSKF), in strategic collaboration with the Sustainable Agriculture Network (SAN), Fagrovision, and Agrosphere Guardians, hosted an intensive three-day hands-on training on Biodiversity Conservation and Regenerative Farming. Held from November 6th to 8th, 2024 at the School of Agriculture, LPU, the program moved beyond theory to deliver practical, field-level skills essential for transitioning to climate-resilient farming systems. The training emphasized soil biology, natural pest control, biodiversity conservation, and sustainable resource management, empowering participants to drive long-term ecological and economic stability.",

//   objectives: [
//     "Build practical understanding of regenerative soil health and living soil systems",
//     "Train participants in organic farming practices and high-value bio-inputs",
//     "Develop skills in biological pest control to reduce chemical dependency",
//     "Promote biodiversity conservation through beneficial insect rearing",
//     "Encourage youth leadership and agroecology-based livelihoods"
//   ],

//   achievements: [
//     "Delivered hands-on training in organic farming and biochar application",
//     "Enabled practical production and application of bio-pesticides such as Trichoderma",
//     "Trained participants in rearing beneficial insects for natural pest control",
//     "Strengthened ecological literacy linking soil health, biodiversity, and farm resilience",
//     "Reinforced BSKF’s commitment to climate-resilient and biodiversity-driven agriculture"
//   ],

//   speakers: [
//     {
//       name: "Dr. Tarun Sharma",
//       designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
//       expertise: "Organic farming practices and regenerative agriculture"
//     },
//     {
//       name: "Dr. Chandra Mohan Mehta",
//       designation: "Associate Dean, School of Agriculture, Lovely Professional University (LPU)",
//       expertise: "Biochar, soil microbiology, and regenerative soil systems"
//     },
//     {
//       name: "Dr. Adesh Kumar",
//       designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
//       expertise: "Bio-inoculants, bio-pesticides, and bio-fertilizers"
//     },
//     {
//       name: "Dr. Vipul Kumar",
//       designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
//       expertise: "Trichoderma production and biological pest control"
//     },
//     {
//       name: "Dr. Ankush Raut",
//       designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
//       expertise: "Biodiversity conservation and beneficial insects"
//     },
//     {
//       name: "Shaik Imran Choudhury",
//       designation: "Prakheti Agrologics",
//       expertise: "Youth leadership and opportunities in agroecology"
//     },
//     {
//       name: "Dr. Pritha Ghosh",
//       designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
//       expertise: "Corcyra rearing for biological control"
//     },
//     {
//       name: "Dr. Satish Gharde",
//       designation: "Faculty, School of Agriculture, Lovely Professional University (LPU)",
//       expertise: "Applied biological control and agroecological practices"
//     }
//   ],
//   images: ["/HOB2.jpg","/HOB3.jpg","/HOB4.jpg","/HOB5.jpg","/HOB6.jpg","/HOB7.jpg","/HOB8.jpg","/HOB9.jpg","/HOB10.jpg","/HOB11.jpg","/HOB12.jpg","/HOB13.jpg","/HOB14.jpg","/HOB15.jpg","/HOB16.jpg","/HOB17.jpg","/HOB18.jpg","/HOB19.jpg","/HOB20.jpg"]
//   },
// }
  
const ProjectDetail = () => {
  const { id } = useParams();
  
  // Now TypeScript knows that `project` conforms to the Project interface
  const project = projectData[Number(id)];

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

      {/* Speakers Section */}
      {/* FIX: Use Optional Chaining (?.) for safer access */}
      {project.speakers && project.speakers.length > 0 && (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center gap-2">
              <Mic /> Featured Speaker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Optional chaining inside the map ensures TS is happy */}
              {project.speakers?.map((speaker, index) => (
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