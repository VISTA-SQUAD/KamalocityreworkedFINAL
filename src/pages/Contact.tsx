
import { Phone, MessageSquare, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      // Here you would usually send the data to a server
      // For now, we'll just simulate success after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Contact <span className="text-kamalo-red">Us</span>
        </h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Have questions or want to make a reservation? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-black/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-white block mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-white block mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg text-white"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-white block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg text-white h-32"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-kamalo-red hover:bg-red-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {submitSuccess && (
                <div className="p-3 bg-green-800/50 border border-green-700 rounded-md text-green-200">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="p-3 bg-red-800/50 border border-red-700 rounded-md text-red-200">
                  {submitError}
                </div>
              )}
              
              <p className="text-sm text-gray-400 mt-4">
                Your message will be sent to: ntumbapitchou@yahoo.com
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-black/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>90 Voortrekker Road, Goodwood, Cape Town</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <Phone className="w-6 h-6 mr-4 text-kamalo-red mt-1" />
                  <div className="space-y-1">
                    <div>
                      <a href="tel:+27731598909" className="hover:text-kamalo-red transition-colors">
                        +27 73 159 8909
                      </a>
                    </div>
                    <div>
                      <a href="tel:+27736911461" className="hover:text-kamalo-red transition-colors">
                        +27 73 691 1461
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>ntumbapitchou@yahoo.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>7 days a week, 11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1055656329913!2d18.546104776047663!3d-33.912682521333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0726596af5%3A0x651107464f9fc317!2sKamalo%20City!5e0!3m2!1sen!2sza!4v1748888283939!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kamalo City Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
