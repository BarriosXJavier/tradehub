import Image from "next/image";

const Featured = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description:
        "Gain insights into your sales data as it happens, with up-to-the-minute analytics that help you make informed decisions quickly.",
      imageUrl:
        "/analytics1",
    },
    {
      title: "Inventory Management",
      description:
        "Easily manage and track your inventory across multiple channels, ensuring you never run out of stock or overstock again.",
      imageUrl: "/analytics2",
    },
    {
      title: "Customer Insights",
      description:
        "Understand your customers better with detailed reports that highlight buying patterns, preferences, and behaviors.",
      imageUrl: "/analytics3",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Discover TradeHub&apos;s Key Features
            <br className="hidden md:block" />
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          TradeHub provides powerful tools to help you manage your e-commerce
          business efficiently and effectively. Explore our top features below.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={feature.imageUrl}
              alt={feature.title}
              layout="fill"
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-lg font-bold tracking-wide text-white">
                {feature.title}
              </p>
              <p className="text-sm text-white">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/features"
          aria-label="See more features"
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Featured;
