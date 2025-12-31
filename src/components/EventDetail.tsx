import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      description: (
        <>
          <p className="mb-4">
            <strong>Waste to Wealth: Turn Farm Waste into Income</strong>
          </p>

          <p className="mb-4">
            The Bangla Susthayi Krishi Foundation (BSKF) recently hosted a
            landmark five-day virtual workshop,{" "}
            <strong>“Waste to Wealth: Turn Farm Waste into Income”</strong>,
            dedicated to pioneering the circular economy within the agricultural
            sector. Held from <strong>August 16th to 20th, 2025</strong>, this
            highly focused program empowered <strong>23 participants</strong>—a
            select cohort of farmers and agri-enthusiasts—by transforming the
            environmental challenge of farm residue into tangible, sustainable
            economic opportunities.
          </p>

          <p className="mb-4">
            This initiative demonstrates BSKF’s unwavering commitment to local
            action that drives global change, directly advancing key{" "}
            <strong>United Nations Sustainable Development Goals (SDGs)</strong>{" "}
            related to economic growth and responsible production.
          </p>

          <h3 className="font-semibold text-green-800 mt-6 mb-2">
            The Philosophy: Waste as a Resource, Not a Burden
          </h3>

          <p className="mb-4">
            At BSKF, we fundamentally redefine agricultural waste. We see
            discarded biomass not as pollution, but as unharvested capital. The
            Waste to Wealth workshop provided the technical blueprint for this
            transformation, focusing on two core pillars of value:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Financial Autonomy:</strong> Participants learned to
              replace costly imported synthetic fertilizers with valuable,
              self-produced inputs, drastically reducing expenditures while
              creating new, high-margin product lines.
            </li>

            <li>
              <strong>Ecological Regeneration:</strong> Every technique
              taught—from advanced composting to bioconversion—focuses on
              healing the land. These methods sequester carbon, restore
              essential microbial life, and create <strong>“Black Gold”</strong>{" "}
              for the soil, moving farming from extractive to restorative.
            </li>
          </ul>

          <h3 className="font-semibold text-green-800 mt-6 mb-2">
            Impact Beyond the Classroom
          </h3>

          <p className="mb-4">
            The <strong>“Waste to Wealth”</strong> model, which seamlessly
            integrates expertise in fields such as{" "}
            <strong>Black Soldier Fly conversion</strong> and{" "}
            <strong>advanced composting</strong>, provides a clear pathway for
            smallholder farmers to generate sustainable revenue while actively
            contributing to{" "}
            <strong>SDG 8 (Decent Work & Economic Growth)</strong> and{" "}
            <strong>SDG 12 (Responsible Consumption & Production)</strong>.
          </p>

          <p className="italic text-gray-700 border-l-4 border-green-600 pl-4">
            “The sessions delivered by BSKF provided technical mastery that
            immediately translates into profit. This is real-world economic
            dignity delivered directly to the grassroots.”
          </p>
        </>
      ),
      agenda: [
        "7:00 PM - Registration",
        "7:15 PM - Welcoming Guest Speakers",
        "7:30 PM - Speech by Guest Speakers",
        "8:15 PM- Q&A Session",
        "8:30 PM - Closing Remarks",
      ],
      speakerTable: [
        {
          date: "16th August",
          topic:
            "Rethinking Agricultural Waste: Sustainable Solutions and Next-Gen",
          speaker: "DIPTANU BANIK",
          outcome:
            "Strategic vision for resource recovery and next-generation sustainability planning.",
        },
        {
          date: "17th August",
          topic: "Black Soldier Fly Farming for Smart Waste Conversion",
          speaker: "DR. DEVINA SERAM",
          outcome:
            "High-efficiency bioconversion techniques for producing alternative protein and valuable soil amendments.",
        },
        {
          date: "18th August",
          topic: "Vermicompost turning waste into Black Gold with Earthworms",
          speaker: "DR. TARUN KUMAR",
          outcome:
            "Mastering the process of generating superior-quality, nutrient-dense biological fertilizers.",
        },
        {
          date: "19th August",
          topic: "Composting: Mastering the Basics of Organic Composting",
          speaker: "DR. SUSHANT SUKUMAR PATIL",
          outcome:
            "Foundational and advanced principles for creating stable, effective organic compost.",
        },
        {
          date: "20th August",
          topic: "Closing Ceremony",
          speaker: "BSKF Team",
          outcome:
            "Demonstration of learning outcomes and defining implementation pathways for participants.",
        },
      ],

      images: [
        "/WTW1.jpg",
        "/WTW2.jpg",
        "/WTW3.jpg",
        "/WTW4.jpg",
        "/WTW5.jpg",
        "/WTW6.jpg",
      ],
    },
    2: {
      title:
        "Building Resilience: Food Forests, Agroforestry, Agri-preneurship & Carbon Credits for Cultivating Climate Solutions & Food Security ",
      date: "28th March - 1st April 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      participants: 95,
      status: "Completed",
      description: (
        <>
          <p className="mb-4">
            <strong>
              Building Resilience: Food Forests, Agroforestry, Agri-preneurship
              & Carbon Credits for Cultivating Climate Solutions & Food Security
            </strong>
          </p>

          <p className="mb-4">
            The Bangla Susthayi Krishi Foundation (BSKF) hosted a highly
            successful four-day summit, “Building Resilience: Food Forests,
            Agroforestry, Agri-preneurship & Carbon Credits for Cultivating
            Climate Solutions & Food Security” in collaboration with Sustainable
            Agriculture Network and Prakheti. Held virtually from April 28 to
            May 1, 2025, this flagship program united leading experts and
            engaged 95 participants in a crucial discussion on the role of
            regenerative agriculture in mitigating climate change and securing
            sustainable livelihoods.
          </p>

          <p className="font-semibold text-green-800 mt-6 mb-2">
            🎯 Pioneering Climate-Smart Solutions
          </p>

          <p className="mb-4">
            This summit moved beyond traditional farming models, focusing on
            innovative and sustainable approaches that yield triple-bottom-line
            benefits—economic, environmental, and social. The core focus areas
            provided participants with advanced knowledge to implement
            regenerative food systems:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Food Forests & Agroforestry:</strong> Designing
              synergistic ecosystems that maximize yield, biodiversity, and
              land-use efficiency.
            </li>
            <li>
              <strong>Agri-preneurship:</strong> Strengthening livelihoods by
              building climate-smart entrepreneurship models from local produce
              and forest heritage.
            </li>
            <li>
              <strong>Carbon Credits:</strong> Mitigating climate change through
              carbon sequestration and capitalizing on opportunities within the
              carbon market.
            </li>
          </ul>

          <p className="mb-4">
            This training equipped participants with the knowledge and tools
            necessary to implement regenerative systems, directly addressing
            global challenges and making significant contributions to SDG 2
            (Zero Hunger), SDG 8 (Decent Work), and SDG 13 (Climate Action).
          </p>

          <p className="mb-3 font-semibold text-green-900">
            🌱 The Impact: Cultivating Resilience
          </p>

          <p className="mb-4">
            With 95 motivated participants in attendance, the “Building
            Resilience” program successfully laid the groundwork for a new
            generation of climate-smart agricultural leaders. The clear focus on
            turning regenerative practices into viable Carbon Credits and robust
            Agri-preneurship models ensures that BSKF’s training delivers not
            only environmental stewardship but also tangible economic growth.
          </p>

          <p>
            The seamless blend of ecological expertise (Food Forests,
            Agroforestry) and business acumen (Sustainable Value Chains, Social
            Ventures) empowered attendees to return to their fields and
            communities ready to drive transformative change.
          </p>

          <p className="italic text-gray-700 border-l-4 border-green-600 pl-4 mt-5">
            "BSKF is committed to scaling these vital climate solutions. We
            invite you to engage with our work, partner with us, and enroll in
            our upcoming high-impact programs. Don't just adapt to climate
            change—cultivate the solution."
          </p>
        </>
      ),
      agenda: [
        "7:00 PM - Registration",
        "7:15 PM - Welcoming Guest Speakers",
        "7:30 PM - Speech by Guest Speakers",
        "8:15 PM- Q&A Session",
        "8:30 PM - Closing Remarks",
      ],
      speakerTable: [
        {
          date: "28th April",
          topic:
            "Agroforestry for Livelihood and Environmental Security in India",
          speaker: "Dr. Sangram Chavan (Senior Scientist, ICAR-NIASM)",
          outcome:
            "Understanding the foundational role of agroforestry in national food security and ecological balance.",
        },
        {
          date: "29th April",
          topic:
            "Designing Synergistic Ecosystems: Principles of Food Forests & Agroforestry",
          speaker:
            "Shihab Kunhahammed (Food Forest Specialist, Philosan Farms)",
          outcome:
            "Practical application of Miyawaki and food forest principles to maximize biodiversity and yield.",
        },
        {
          date: "30th April",
          topic:
            "Building Social Ventures from Local Produce, Traditions & Forest Heritage",
          speaker:
            "Shaik Imran Hussain Choudhary (Founder, Prakheti | COP29 Delegate)",
          outcome:
            "Strategies for value addition and creating market-ready social enterprises from sustainable produce.",
        },
        {
          date: "1st May",
          topic:
            "From Farm to Market & Beyond: Building Sustainable Value Chains",
          speaker: "Shameek Chakravarty (Founder, Farmizen & Mantid AI)",
          outcome:
            "Mastery of efficient, transparent, and sustainable post-harvest supply chain management.",
        },
      ],
      images: ["/BR1.jpg", "/BR2.jpg", "/BR3.jpg", "/BR4.jpg", "/BR5.jpg"],
    },
    3: {
      title:
        "Transforming Agriculture: Driving Climate Solutions and Sustainable Food Systems ",
      date: "25th January – 26th January 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      participants: 67,
      status: "Completed",
      description: (
        <>
          <p className="mb-4">
            <strong>
              Transforming Agriculture: Driving Climate Solutions and
              Sustainable Food Systems
            </strong>
          </p>

          <p className="mb-4">
            The Bangla Susthayi Krishi Foundation (BSKF) successfully hosted a
            two-day high-level virtual event,{" "}
            <strong>
              “Transforming Agriculture: Driving Climate Solutions and
              Sustainable Food Systems”
            </strong>
            , held on <strong>January 25th and 26th, 2025</strong>. This
            critical forum convened <strong>67 participants</strong>, including
            researchers, academicians, students, and agricultural practitioners,
            to deliberate on the pivotal role of agriculture in addressing the
            climate crisis while ensuring sustainable food production on a
            global scale.
          </p>

          <p className="mb-3 font-semibold">
            🎯 The Mandate: Climate Resilience and Food Security
          </p>

          <p className="mb-4">
            The event was designed to bridge the gap between scientific theory
            and on-the-ground practice, focusing on actionable strategies for
            the future of farming. The key areas of deliberation and insight
            included:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Climate-Smart Strategies:</strong> Identifying and
              implementing innovative and technology-driven approaches to build
              resilience against climate variability.
            </li>
            <li>
              <strong>Regenerative Systems:</strong> Emphasizing the transition
              toward regenerative agriculture as a definitive pathway to
              ecological health and long-term food security.
            </li>
            <li>
              <strong>Knowledge Integration:</strong> Bringing together global
              research perspectives with community-level practitioner insights
              to foster holistic and scalable solutions.
            </li>
          </ul>

          <p className="mb-4">
            The discussions directly supported the objectives of{" "}
            <strong>SDG 2 (Zero Hunger)</strong> and{" "}
            <strong>SDG 13 (Climate Action)</strong>, positioning BSKF as a
            leader in global agricultural thought leadership.
          </p>

          <p className="font-semibold text-forest-green mb-3 font-semibold">
            🌍 The Program: Insights from Global Experts
          </p>

          <p className="mb-4">
            The two-day summit featured a highly distinguished panel of global
            experts, offering in-depth perspectives on both the scientific
            foundations and real-world applications of climate-resilient and
            sustainable agricultural systems.
          </p>

          <p>
            The <strong>“Transforming Agriculture”</strong> event successfully
            amplified the urgent dialogue required to redesign global food
            systems. By uniting the scientific community with on-ground
            practitioners, BSKF reinforced its commitment to delivering thought
            leadership and actionable solutions for a sustainable and
            food-secure world.
          </p>
        </>
      ),

      agenda: [
        "7:00 PM - Registration",
        "7:15 PM - Welcoming Guest Speakers",
        "7:30 PM - Speech by Guest Speakers",
        "8:15 PM- Q&A Session",
        "8:30 PM - Closing Remarks",
      ],
      speakerTable: [
        {
          date: "25th January 2025",
          topic:
            "Regenerative Agriculture: A Pathway to Climate Resilience and Sustainable Food Security",
          speaker: "Dr. Venkat Raman Govindula (Agro-Ecology Advisor)",
          outcome:
            "Comprehensive understanding of agriculture’s dual role as a climate challenge and a primary solution through agro-ecology.",
        },
        {
          date: "25th January 2025",
          topic: "Building Resilient Agricultural Communities",
          speaker:
            "Dr. Ramjaneyulu G.V. (Executive Director, Centre for Sustainable Agriculture)",
          outcome:
            "Strategies for community-level organization, knowledge sharing, and implementing decentralized resilience plans.",
        },
        {
          date: "26th January 2025",
          topic:
            "The Role of Technology and Innovation in Building Climate-Smart Agriculture",
          speaker: "—",
          outcome:
            "Exploration of innovative and technological approaches to enhance resilience and sustainability in agriculture.",
        },
        {
          date: "26th January 2025",
          topic: "Restoration of Soil Health for Resilience and Food Security",
          speaker: "Dr. Leigh Winowiecki (Global Research Lead)",
          outcome:
            "Advanced techniques and global insights into soil health restoration for ecological and economic stability.",
        },
        {
          date: "26th January 2025",
          topic: "Opportunity and Scope in Sustainable Agri-Food Systems",
          speaker:
            "Vikrant Srivastava (FAO Youth Policy Board Member, Co-founder of Lead for Earth)",
          outcome:
            "Exploring market opportunities, policy frameworks, and career pathways in the evolving sustainable agri-food sector.",
        },
      ],
      images: ["/TA1.jpg", "/TA2.jpg", "/TA3.jpg", "/TA4.jpg"],
    },
  };

  const eventId = Number(id);

  // Access the data using the numeric ID
  const event = eventData[eventId as keyof typeof eventData];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Event Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            {event.title}
          </h1>
          <Badge className="bg-green-600 text-white">{event.status}</Badge>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Calendar, label: "Date", value: event.date },
            { icon: Clock, label: "Time", value: event.time },
            { icon: MapPin, label: "Location", value: event.location },
            { icon: Users, label: "Participants", value: event.participants },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <item.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">{item.label}</h3>
                <p className="text-gray-600">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content */}
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                Event Overview
              </CardTitle>
            </CardHeader>
            <CardContent>{event.description}</CardContent>
          </Card>

          {/* Right Column: Agenda & Speaker Table */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800">
                  Event Agenda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.agenda?.map((item, i) => (
                    <li key={i} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Fixed Section: Only checks for speakerTable now */}
            {event.speakerTable && event.speakerTable.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">
                    Expert Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <table className="w-full border text-sm text-left">
                    <thead className="bg-green-50 text-green-800 font-semibold">
                      <tr>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Topic & Speaker</th>
                        <th className="border p-2">Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.speakerTable.map((row, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="border p-2 whitespace-nowrap align-top">
                            {row.date}
                          </td>
                          <td className="border p-2 align-top">
                            <div className="font-semibold text-green-900 mb-1">
                              {row.topic}
                            </div>
                            <div className="text-gray-600 text-xs italic">
                              {row.speaker}
                            </div>
                          </td>
                          <td className="border p-2 text-gray-600 align-top">
                            {row.outcome}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Gallery */}
        <Card>
          <CardHeader className="flex justify-center">
            <CardTitle className="text-xl text-green-800">
              Event Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="max-w-2xl mx-auto">
              <CarouselContent>
                {event.images?.map((img, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={img}
                      className="rounded-lg w-full h-48 object-cover"
                    />
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
