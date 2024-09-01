import {
  Briefcase,
  Fingerprint,
  FileText,
  Bell,
  Users,
  BarChart2,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];
export const testimonials = [
  {
    user: "John Doe",
    company: "Global Tech Inc.",
    image: user1,
    text: "Aster Consultancy Services helped me land my dream job in a leading tech company. Their team was supportive and provided valuable insights throughout the process.",
  },
  {
    user: "Jane Smith",
    company: "Innovative Solutions",
    image: user2,
    text: "I was struggling to find the right job opportunities until I connected with Aster Consultancy. Their personalized approach made all the difference. Highly recommend their services!",
  },
  {
    user: "David Johnson",
    company: "NextGen Industries",
    image: user3,
    text: "The team at Aster Consultancy was instrumental in helping us find the perfect candidates for our growing company. Their dedication and expertise are truly commendable.",
  },
  {
    user: "Ronee Brown",
    company: "Bright Future Enterprises",
    image: user4,
    text: "Thanks to Aster Consultancy, I was able to transition into a new industry with ease. Their guidance and support were crucial in securing my new role.",
  },
  {
    user: "Michael Wilson",
    company: "Pioneer Corp.",
    image: user5,
    text: "Aster Consultancy Services exceeded our expectations in every way. They understood our hiring needs and delivered top talent that fit perfectly with our company culture.",
  },
  {
    user: "Emily Davis",
    company: "Global Ventures",
    image: user6,
    text: "From the first interaction to the final placement, Aster Consultancy was professional, efficient, and effective. I couldn't have asked for a better experience.",
  },
];

export const features = [
  {
    icon: <Briefcase />,
    text: "Global Job Opportunities",
    description:
      "Connecting Ambitious Job Seekers with Top Global Companies for Career Growth.",
  },
  {
    icon: <Fingerprint />,
    text: "Personalized Job Matching",
    description:
      "Tailor your job search with a platform that understands your unique skills and career aspirations.",
  },
  {
    icon: <FileText />,
    text: "Industry-Specific Templates",
    description:
      "Utilize our industry-specific resume and cover letter templates to stand out in your job applications.",
  },
  {
    icon: <Bell />,
    text: "Real-Time Job Alerts",
    description:
      "Stay updated with real-time notifications for new job openings that match your profile.",
  },
  {
    icon: <Users />,
    text: "Collaborative Hiring Solutions",
    description:
      "Work with our team to streamline your hiring process and find the best talent for your company.",
  },
  {
    icon: <BarChart2 />,
    text: "Comprehensive Analytics",
    description:
      "Gain insights into job market trends and track the success of your applications with our analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Job Matching",
    description:
      "Quickly connect with job opportunities that perfectly match your skills and career goals.",
  },
  {
    title: "Seamless Resume Review",
    description:
      "Get expert feedback on your resume to ensure it stands out to potential employers.",
  },
  {
    title: "AI Assistance for Job Search",
    description:
      "Leverage AI tools to streamline your job search and apply to relevant positions faster.",
  },
  {
    title: "Easy Application Sharing",
    description:
      "Share your resume and application materials with potential employers in just a few clicks.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
