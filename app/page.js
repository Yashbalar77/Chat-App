import React from "react";
import Image from "next/image";
import chatImage from '../public/chatimg.png'; // Import the new chat image

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      <nav className="bg-white shadow-md">
      </nav>

      <section className="bg-gradient-to-r bg-gray-700 py-20 text-white relative">
      <div className="container mx-9 p-6 flex flex-col md:flex-row items-center justify-center md:justify-between h-full"> {/* Main container now flex-col on small screens */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"> {/* Added margin-bottom on small screens */}
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            iChat - Chat with your friends and more!
          </h1>
          <p className="text-xl mb-10 opacity-80">
            Welcome to iChat, the fun and easy way to connect with your friends
            and family. Stay in touch, share stories and laugh, and create
            lasting memories - all in one place
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#download"
              className="border border-white white px-8 py-3 rounded-lg font-medium hover:bg-indigo-100 transition duration-300"
            >
              View on GitHub
            </a>
            <a
              href="#features"
              className="bg-transparent border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition duration-300"
            >
              Start Chatting
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mx-4 px-6 md:block flex justify-center items-center"> {/* Center image horizontally and vertically */}
          <Image
            src={chatImage}
            alt="Chat Illustration"
            width={400} // Increased width
            height={200} // Increased height, maintain aspect ratio
            objectFit="contain" // Or "cover" as needed
            priority
          />
        </div>
      </div>
    </section>

      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Video Calls"
              description="Crystal-clear video calls for face-to-face conversations."
            />
            <FeatureCard
              title="Voice Calls"
              description="High-quality voice calls for quick chats."
            />
            <FeatureCard
              title="Text Messaging"
              description="Send and receive text messages instantly."
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="Free"
              features={["Unlimited text messages", "Basic voice calls"]}
            />
            <PricingCard
              title="Premium"
              price="$9.99/month"
              features={[
                "All Basic features",
                "HD video calls",
                "Group video calls",
                "Screen sharing",
              ]}
            />
            <PricingCard
              title="Business"
              price="$29.99/month"
              features={[
                "All Premium features",
                "Admin controls",
                "Priority support",
                "Custom branding",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="download" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Download iChat
          </h2>
          <p className="mb-8">Download iChat for your preferred platform:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              iOS
            </a>
            <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Android
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
              Desktop
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-6 text-white text-center">
        <p>&copy; 2023 iChat. All rights reserved.</p>
      </footer>
    </div>
  );
}

const FeatureCard = ({ title, description }) => (
  <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const PricingCard = ({ title, price, features }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
    <p className="text-2xl font-bold text-indigo-600 mb-4">{price}</p>
    <ul className="list-disc pl-6 text-gray-600">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full">
      Choose Plan
    </button>
  </div>
);

export const metadata = {
  title: "Home - iChat",
  description: "iChat helps you connect with people of your choice",
};