"use client";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { FC } from "react";

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronDownIcon: FC<ChevronDownIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};

const HelpCenterPage: FC = () => {
  const faqItems = [
    {
      question: "How do I manage my orders?",
      answer: (
        <>
          <p>
            To manage your orders, go to the &apos;Orders&apos; section of your dashboard.
            Here you can view a list of all your orders, filter and sort them,
            and take actions like fulfilling, refunding, or cancelling orders.
          </p>
          <p className="mt-4">
            You can also view detailed information about each order, including
            the customer&apos;s information, the products ordered, the order status,
            and the payment method. From the order details page, you can perform
            various actions to manage the order.
          </p>
        </>
      ),
    },
    {
      question: "How can I track my sales?",
      answer: (
        <>
          <p>
            To track your sales, go to the &ldquo;Analytics&rdquo; section of your
            dashboard. Here you&apos;ll find a variety of reports and charts that
            provide insights into your sales performance.
          </p>
          <p className="mt-4">
            You can view sales data by product, customer, channel, and more. You
            can also see trends over time, such as total revenue, average order
            value, and conversion rate. Use the filtering and date range options
            to customize the data to your needs.
          </p>
        </>
      ),
    },
    {
      question: "How do I customize my dashboard?",
      answer: (
        <>
          <p>
            To customize your dashboard, go to the &quot;Settings&quot; section of your
            account. Here you can:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Change the layout and design of your dashboard</li>
            <li>Add, remove, and rearrange the widgets and reports</li>
            <li>Customize the branding and colors to match your business</li>
            <li>Set up notifications and alerts for important events</li>
          </ul>
          <p className="mt-4">
            You can also save custom views and layouts to quickly switch between
            different dashboard configurations.
          </p>
        </>
      ),
    },
    {
      question: "How do I manage my products?",
      answer: (
        <>
          <p>
            To manage your products, go to the &quot;Products&quot; section of your
            dashboard. Here you can:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>
              Add new products with detailed information like descriptions,
              images, and variants
            </li>
            <li>Edit existing product details</li>
            <li>Manage product inventory and pricing</li>
            <li>Categorize and tag products for better organization</li>
            <li>View sales and performance data for each product</li>
          </ul>
          <p className="mt-4">
            You can also set up product rules and automation to streamline your
            product management workflows.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Help Center</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
            Find answers to your questions about managing your ecommerce
            dashboard.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Collapsible
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-6 py-4 cursor-pointer">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-white dark:bg-gray-950 px-6 py-4 text-gray-500 dark:text-gray-400">
                {item.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
