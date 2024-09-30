"use client"; // This directive allows the use of event handlers in the component.

import Link from 'next/link'; // Import Link from Next.js
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Microscope, Phone, Mail, MapPin } from "lucide-react";

export default function MedicalWebsite() {
  return (
    <main>
      <header className="bg-gradient-to-r from-teal-200 to-teal-500 shadow-md">
        <div className="container mx-auto px-10 flex items-center justify-between">
          {/* Logo */}
          <img 
            src="/assets/images/medweblogo.png" 
            alt="MedLink LAB Logo" 
            className="h-24"
          />
          <nav>
            <ul className="flex space-x-6 text-white">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/medweb1.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-white">Welcome to MedLink LAB</h2>
          <p className="text-xl mb-8 text-gray-300">Reliable Results, Trusted Care.</p>
          <Link href="/ConsultationPage"> {/* Use Link for navigation */}
            <Button
              size="lg"
              className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
            >
              Consult Now
            </Button>
          </Link>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-100">
  <div className="container mx-auto px-6 flex flex-col items-center">
    <h2 className="text-4xl text-teal-500 font-bold mb-12 text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex justify-center">
        <Card className="max-w-md w-full shadow-lg transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-col items-center">
            <Microscope className="w-16 h-16 mb-2 text-teal-500" />
            <CardTitle className="text-xl text-teal-500 font-semibold">Lab Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Complete Blood Count (CBC)</li>
              <li>Urinalysis</li>
              <li>Fecalysis</li>
              <li>Lipid Profile</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="max-w-md w-full shadow-lg transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-col items-center">
            <Microscope className="w-16 h-16 mb-2 text-teal-500" />
            <CardTitle className="text-xl text-teal-500 font-semibold">Lab Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Blood Chemistry Panel</li>
              <li>Liver Function Test</li>
              <li>HIV Test</li>
              <li>COVID-19 RT-PCR Test</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="max-w-md w-full shadow-lg transition-transform transform hover:scale-105">
          <CardHeader className="flex flex-col items-center">
            <Microscope className="w-16 h-16 mb-2 text-teal-500" />
            <CardTitle className="text-xl text-teal-500 font-semibold">Lab Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lipid Profile</li>
              <li>Blood Chemistry Panel</li>
              <li>Liver Function Test</li>
              <li>HIV Test</li>
              <li>COVID-19 RT-PCR Test</li>
            </ul>
          </CardContent>
        </Card>
    </div>
  </div>
</section>


      <section id="contact" className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-500 mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                  <Textarea placeholder="Your Message" required />
                  <div className="flex justify-center w-full"> {/* Centering div */}
                    <Button 
                      type="submit" 
                      className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300" 
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-teal-500" />
                  <span>02-4328-7440</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-teal-500" />
                  <span>medlinkLAB.netlify.app</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-teal-500" />
                  <span>Phase II, Sandawa, Davao City 8000, Philippines</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-teal-600 text-white py-8">
        {/* Add footer content if needed */}
      </footer>
    </main>
  );
}
