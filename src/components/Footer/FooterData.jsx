import { FaTelegram, FaYoutube, FaInstagram } from "react-icons/fa";
const numbers = [
  { id: 1, title: "Address", item: "123 Fitness Street New York, NY" },
  { id: 2, title: "Phone", item: "+1 (555) 123-4567" },
  { id: 3, title: "Email", item: "contact@fitlife.com" },
];
const quicklinks = [
  { id: 1, title: "Home", href: "#" },
  { id: 2, title: "Programs", href: "#" },
  { id: 3, title: "Pricing", href: "#" },
  { id: 4, title: "Trainers", href: "#" },
  { id: 5, title: "Contact", href: "#" },
];
const resources = [
  { id: 1, title: "Blog", href: "#" },
  { id: 2, title: "Privacy Policy", href: "#" },
  { id: 3, title: "Terms of Service", href: "#" },
];
const socials = [
  { id: 1, icon: <FaTelegram size={37} /> },
  { id: 2, icon: <FaInstagram size={40} /> },
  { id: 3, icon: <FaYoutube size={40} /> },
];

export { numbers, quicklinks, resources, socials };
