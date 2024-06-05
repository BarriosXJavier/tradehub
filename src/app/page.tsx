"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Homenav from "@/ui/dashboard/homenav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Homenav />
      <main className="flex-1">
        <motion.section
          className="w-full pt-12 md:pt-24 lg:pt-32 border-y"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/hero.jpg"
                  width={550}
                  height={550}
                  alt="Hero Product"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </motion.div>
              <motion.div
                className="flex flex-col items-start space-y-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Simple and Efficient Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock powerful insights, streamline operations, and drive
                  growth with our comprehensive ecommerce dashboard.
                </p>
                <Button size="lg" className="mt-4">
                  Explore Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Ecommerce Insights
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Gain a comprehensive understanding of your ecommerce
                  performance with our powerful analytics.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
              <InsightCard
                title="Total Sales"
                description="Your total revenue across all products and channels."
                value="$1.2M"
              />
              <InsightCard
                title="Average Order Value"
                description="The average amount customers spend per order."
                value="$75"
              />
              <InsightCard
                title="Conversion Rate"
                description="The percentage of visitors who make a purchase."
                value="3.2%"
              />
              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Products</CardTitle>
                  <CardDescription>
                    Your best-performing products by total revenue.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductItem
                    imageSrc="/placeholder.svg"
                    productName="Premium T-Shirt"
                    productPrice="$29.99"
                    totalRevenue="$120,000"
                  />
                  <ProductItem
                    imageSrc="/placeholder.svg"
                    productName="Leather Backpack"
                    productPrice="$79.99"
                    totalRevenue="$90,000"
                  />
                  <ProductItem
                    imageSrc="/placeholder.svg"
                    productName="Wireless Headphones"
                    productPrice="$99.99"
                    totalRevenue="$80,000"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

interface InsightCardProps {
  title: string;
  description: string;
  value: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  title,
  description,
  value,
}) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-4xl font-bold">{value}</h3>
      </CardContent>
    </Card>
  </motion.div>
);

interface ProductItemProps {
  imageSrc: string;
  productName: string;
  productPrice: string;
  totalRevenue: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageSrc,
  productName,
  productPrice,
  totalRevenue,
}) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-between"
  >
    <div className="flex items-center gap-2">
      <Image
        src={imageSrc}
        width={40}
        height={40}
        alt="Product Image"
        className="rounded-md"
      />
      <div>
        <div className="font-medium">{productName}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {productPrice}
        </div>
      </div>
    </div>
    <div className="text-gray-500 dark:text-gray-400">{totalRevenue}</div>
  </motion.div>
);
