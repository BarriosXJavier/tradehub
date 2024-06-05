import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const transitionDuration = 0.3;

  return (
    <main className="flex-1">
      <motion.section
        className="w-full pt-12 md:pt-24 lg:pt-32 border-y"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: transitionDuration }}
      >
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: transitionDuration }}
            >
              <Image
                src="/hero.jpg"
                width={550}
                height={550}
                alt="Hero Section Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: transitionDuration }}
            >
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                TradeHub: Simple and Efficient Dashboard Solutions For Your
                Business
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
                Unlock powerful insights, streamline operations, and drive
                growth with our comprehensive ecommerce dashboard.
              </p>
              <Button size="lg" className="mt-4 bg-slate-800">
                <Link href="/dashboard" target="_blank">
                  Explore Now
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default HeroSection;
