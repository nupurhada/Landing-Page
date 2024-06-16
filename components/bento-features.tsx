import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
// import {
//   BellIcon,
//   CalendarIcon,
//   FileTextIcon,
//   GlobeIcon,
//   InputIcon,
//   Share1Icon,
//   CopyIcon,
//   BookmarkIcon,
// } from "@radix-ui/react-icons";
import { GlobeIcon } from "@radix-ui/react-icons";
import {
  Database,
  Puzzle,
  Settings,
  Pipette,
  MessagesSquare,
  Sparkles,
} from "lucide-react";

const features = [
  {
    Icon: Sparkles,
    name: "Powerful AI models",
    description:
      "Choose from a variety of AI models, including GPT-3.5-turbo and GPT-4.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Puzzle,
    name: "Integrations",
    description:
      "Connect your chatbot to your favorite tools like WhatsApp, Discord, and Telegram, and more.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Pipette,
    name: "Customizations",
    description:
      "Customize your chatbot’s look and feel to match your brand’s style and website design.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Database,
    name: "Multiple Data Sources",
    description: "Import data from multiple sources to train your chatbot.",
    href: "/login",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
