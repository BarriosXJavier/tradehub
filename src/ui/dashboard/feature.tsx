import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <section className="py-12 md:py-16 lg:py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-white dark:text-gray-400 max-w-3xl mx-auto">
            Streamline your ecommerce operations with our powerful features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-gray-100 mb-4">
            About
          </h2>
          <p className="text-white dark:text-gray-400 max-w-3xl mx-auto mb-8">
            This project was inspired by the challenges faced in managing
            ecommerce operations efficiently. On May 29, I embarked on this
            journey to develop a comprehensive solution that would address these
            pain points. My goal is to create a tool that simplifies order
            management, inventory tracking, customer analytics, and marketing
            campaigns, empowering businesses to operate smoothly and grow.
          </p>
          <h3 className="text-2xl font-semibold text-white dark:text-gray-100 mb-2">
            Timeline
          </h3>
          <ul className="text-white-600 dark:text-gray-400 mb-8">
            <li>
              <strong>May 29, 2023:</strong> Project inception
            </li>
            <li>
              <strong>Present:</strong> Ongoing development and improvements
            </li>
          </ul>
          <h3 className="text-2xl font-semibold text-white dark:text-gray-100 mb-2">
            Connect with me
          </h3>
          <ul className="flex justify-center space-x-4 mb-8">
            <li>
              <Link
                href="https://www.linkedin.com/in/david-njoroge-0866aa289/"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/BarriosXJavier"
                className="text-white dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/barrios__x"
                className="text-blue-500 hover:text-blue-700"
              >
                Twitter
              </Link>
            </li>
          </ul>
          <h3 className="text-2xl font-semibold text-white dark:text-gray-100 mb-2">
            GitHub Repository
          </h3>
          <p className="text-white dark:text-gray-400">
            Check out the project on{" "}
            <Link
              href="https://github.com/BarriosXJavier"
              className="text-blue-500 hover:text-blue-700"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    image: "/analytics1.jpg",
    title: "Order Management",
    description:
      "Effortlessly manage all your orders in one place. Track shipments, handle returns, and provide excellent customer service.",
  },
  {
    image: "/analytics2.jpg",
    title: "Inventory Tracking",
    description:
      "Stay on top of your stock levels with real-time inventory updates. Receive alerts when it's time to reorder, and optimize your supply chain.",
  },
  {
    image: "/analytics3.jpg",
    title: "Customer Analytics",
    description:
      "Gain valuable insights into your customer behavior and preferences. Segment your audience, track engagement, and optimize your marketing strategies.",
  },
  {
    image: "/analytics4.jpg",
    title: "Marketing Campaigns",
    description:
      "Easily create and manage your marketing campaigns. Track performance, optimize ad spend, and reach your target audience effectively.",
  },
];
