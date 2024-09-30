
'use client';
import { useState } from 'react'; // Import useState for managing form state
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ConsultationPage() {
  const router = useRouter(); // Initialize the useRouter hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Validate email and phone number here if needed

    try {
      // Send data to your backend API
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setMessage('Your consultation request has been submitted successfully!');
      } else {
        setMessage('Failed to submit the request. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <main className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Consultation Form</h2>
      <Card>
        <CardHeader>
          <CardTitle>Request a Consultation</CardTitle>
        </CardHeader>
        <CardContent>
          {message && <p className="text-center text-red-500">{message}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <Input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <Input 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            <Textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
            <div className="flex justify-between mt-4"> {/* Flexbox for button alignment */}
              <Button 
                onClick={() => router.back()} 
                className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300" 
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300" 
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
