"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Car,
  Waves,
  Trees,
  Building2,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Star,
  Users,
  Shield,
  Dumbbell,
  ShoppingBag,
  Plane,
  Train,
  Home as HomeIcon,
  Award,
  TrendingUp,
  Clock,
  Heart,
  Wifi,
  Coffee,
  Gamepad2,
  Camera,
  PlayCircle,
  Download,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Target,
  DollarSign,
  Calculator,
  FileText,
  MapIcon,
  Navigation,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
}

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(
      "Thank you for your interest! Our luxury property consultant will contact you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "general",
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCallNow = () => {
    window.open("tel:+971-4-XXX-XXXX", "_self");
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/971XXXXXXXXX?text=Hi, I am interested in The Eden at Sobha Central Dubai",
      "_blank"
    );
  };

  const handleDownloadBrochure = () => {
    // In a real implementation, this would trigger a download
    alert(
      "Brochure download will start shortly. Please provide your contact details for instant access."
    );
    scrollToSection("contact");
  };

  const handleVideoTour = () => {
    alert(
      "Virtual tour will open shortly. Experience The Eden from the comfort of your home."
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Building2 className="h-10 w-10 text-[#D4AF37]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1A365D] tracking-tight">
                  The Eden
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Sobha Central Dubai
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <button
                  onClick={() => scrollToSection("overview")}
                  className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 font-medium relative group"
                >
                  Overview
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 font-medium relative group"
                >
                  Amenities
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 font-medium relative group"
                >
                  Location
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 font-medium relative group"
                >
                  Gallery
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </nav>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleCallNow}
                  variant="outline"
                  className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Visit
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                onClick={() => scrollToSection("contact")}
                size="sm"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>

          {/* Animated Overlay Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`text-white space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-6 py-3">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#D4AF37] font-semibold">
                  Exclusive Launch Offer
                </span>
                <Badge className="bg-red-500 text-white text-xs animate-pulse">
                  Limited Time
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  The{" "}
                  <span className="text-[#D4AF37] relative">
                    Eden
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4AF37] transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-200 font-light">
                  at Sobha Central Dubai
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Where luxury meets lifestyle. Experience unparalleled elegance
                in Dubai&apos;s most prestigious address.
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: HomeIcon, text: "1, 2 & 3 BHK" },
                  { icon: MapPin, text: "Prime Location" },
                  { icon: Award, text: "Sobha Quality" },
                  { icon: TrendingUp, text: "High ROI" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 transform transition-all duration-500 delay-${
                      index * 100
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <feature.icon className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Exclusive Site Visit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  onClick={handleVideoTour}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 group"
                >
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Virtual Tour
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">Trusted Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">Ready 2024</span>
                </div>
              </div>
            </div>

            {/* Right Content - Lead Capture Card */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get Exclusive Access
                  </h3>
                  <p className="text-white/90">
                    Limited units available • Special launch pricing
                  </p>
                </div>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your Full Name"
                        className="h-12 text-lg border-2 focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="Phone Number (+971 XX XXX XXXX)"
                        className="h-12 text-lg border-2 focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Email Address"
                        className="h-12 text-lg border-2 focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <select
                        className="w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-md focus:border-[#D4AF37] focus:outline-none transition-colors"
                        value={formData.interest}
                        onChange={(e) =>
                          handleInputChange("interest", e.target.value)
                        }
                      >
                        <option value="general">I&apos;m interested in...</option>
                        <option value="1bed">1 Bedroom Apartment</option>
                        <option value="2bed">2 Bedroom Apartment</option>
                        <option value="3bed">3 Bedroom Apartment</option>
                        <option value="investment">
                          Investment Opportunity
                        </option>
                        <option value="sitevisit">Site Visit</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        <>
                          <Target className="w-5 h-5 mr-2" />
                          Get Instant Access
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-center space-x-4">
                      <Button
                        onClick={handleWhatsApp}
                        variant="outline"
                        size="sm"
                        className="flex-1 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button
                        onClick={handleCallNow}
                        variant="outline"
                        size="sm"
                        className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Quick Stats with Animation */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Premium Units", icon: Building2 },
              { number: "40+", label: "Luxury Amenities", icon: Star },
              { number: "99%", label: "Customer Satisfaction", icon: Heart },
              { number: "2024", label: "Handover Year", icon: Calendar },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="text-4xl font-bold text-[#1A365D] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview with Tabs */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1A365D] mb-6">
              Redefining Luxury Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Eden at Sobha Central represents the pinnacle of contemporary
              luxury, where every detail is crafted to perfection.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-2 flex space-x-2">
              {[
                { id: "overview", label: "Overview", icon: HomeIcon },
                { id: "features", label: "Features", icon: Star },
                { id: "investment", label: "Investment", icon: TrendingUp },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#D4AF37] text-white shadow-lg"
                      : "text-gray-600 hover:text-[#D4AF37]"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {activeTab === "overview" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-3xl font-bold text-[#1A365D]">
                    Architectural Excellence
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Each residence at The Eden is a masterpiece of design,
                    featuring premium finishes, spacious layouts, and
                    floor-to-ceiling windows that frame breathtaking views of
                    Dubai&apos;s skyline.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        icon: Building2,
                        title: "Premium Apartments",
                        desc: "1, 2 & 3 BHK units",
                      },
                      {
                        icon: MapPin,
                        title: "Prime Location",
                        desc: "Sobha Central Dubai",
                      },
                      {
                        icon: Users,
                        title: "Family Friendly",
                        desc: "Kid-safe environment",
                      },
                      {
                        icon: Shield,
                        title: "24/7 Security",
                        desc: "Premium safety",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1A365D]">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-3xl font-bold text-[#1A365D]">
                    Premium Features
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every aspect of The Eden has been carefully considered to
                    provide residents with an unmatched living experience.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Smart home automation systems",
                      "Premium Italian marble flooring",
                      "Designer kitchen with built-in appliances",
                      "Floor-to-ceiling windows with city views",
                      "Private balconies and terraces",
                      "High-speed fiber optic connectivity",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "investment" && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-3xl font-bold text-[#1A365D]">
                    Investment Opportunity
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The Eden offers exceptional investment potential with
                    attractive rental yields and strong capital appreciation
                    prospects.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Expected ROI", value: "8-10%" },
                      { label: "Capital Appreciation", value: "15-20%" },
                      { label: "Rental Yield", value: "6-8%" },
                      { label: "Payment Plan", value: "Flexible" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 p-4 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-[#D4AF37]">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-4 pt-6">
                <Button
                  onClick={handleDownloadBrochure}
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  variant="outline"
                  className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Speak to Expert
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury apartment interior"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h4 className="font-bold text-[#1A365D] mb-2 text-lg">
                  Starting From
                </h4>
                <p className="text-3xl font-bold text-[#D4AF37] mb-1">
                  AED 1.2M
                </p>
                <p className="text-sm text-gray-600">
                  Flexible Payment Plans Available
                </p>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className="mt-3 bg-[#D4AF37] hover:bg-[#B8941F] text-black"
                >
                  Get Price Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Amenities Section */}
      <section
        id="amenities"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1A365D] mb-6">
              Resort-Style Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience over 40 world-class amenities designed to elevate your
              lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: "Infinity Pool",
                desc: "Olympic-size pool with city views",
                category: "Recreation",
              },
              {
                icon: Dumbbell,
                title: "Premium Gym",
                desc: "State-of-art fitness center",
                category: "Fitness",
              },
              {
                icon: Trees,
                title: "Landscape Gardens",
                desc: "Manicured gardens & walking trails",
                category: "Nature",
              },
              {
                icon: Users,
                title: "Kids Play Area",
                desc: "Safe playground for children",
                category: "Family",
              },
              {
                icon: Coffee,
                title: "Café & Restaurant",
                desc: "Fine dining experiences",
                category: "Dining",
              },
              {
                icon: Car,
                title: "Valet Parking",
                desc: "Premium parking services",
                category: "Convenience",
              },
              {
                icon: Wifi,
                title: "High-Speed WiFi",
                desc: "Complimentary internet access",
                category: "Technology",
              },
              {
                icon: Gamepad2,
                title: "Gaming Lounge",
                desc: "Entertainment for all ages",
                category: "Entertainment",
              },
              {
                icon: ShoppingBag,
                title: "Retail Outlets",
                desc: "Shopping & services",
                category: "Retail",
              },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className="text-xs text-[#D4AF37] border-[#D4AF37]"
                    >
                      {amenity.category}
                    </Badge>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Amenities Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-[#1A365D] mb-6">
                  Prime Dubai Location
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Strategically positioned in the heart of Dubai with unmatched
                  connectivity to the city&apos;s major landmarks and business
                  districts.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Building2,
                    title: "5 min to Downtown Dubai",
                    desc: "Burj Khalifa & Dubai Mall",
                    time: "5 min",
                  },
                  {
                    icon: Plane,
                    title: "20 min to Dubai Airport",
                    desc: "International connectivity",
                    time: "20 min",
                  },
                  {
                    icon: Train,
                    title: "Metro Station Nearby",
                    desc: "Public transport access",
                    time: "2 min",
                  },
                  {
                    icon: ShoppingBag,
                    title: "Premium Shopping",
                    desc: "Major retail destinations",
                    time: "10 min",
                  },
                  {
                    icon: Building2,
                    title: "Business Bay",
                    desc: "Financial district",
                    time: "15 min",
                  },
                  {
                    icon: MapIcon,
                    title: "Dubai Marina",
                    desc: "Waterfront lifestyle",
                    time: "25 min",
                  },
                ].map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                      <location.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#1A365D] text-lg">
                        {location.title}
                      </h4>
                      <p className="text-gray-600">{location.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#D4AF37]">
                        {location.time}
                      </div>
                      <div className="text-xs text-gray-500">drive</div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Location Details
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dubai cityscape"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Dubai&apos;s Heart</h4>
                <p className="text-white/90">
                  Connected to everything that matters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Enhanced */}
      <section
        id="floorplans"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1A365D] mb-6">
              Choose Your Perfect Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thoughtfully designed floor plans that maximize space, natural
              light, and stunning views
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: "1 Bedroom",
                area: "650 - 750 sq ft",
                price: "AED 1.2M",
                image:
                  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
                badge: "Available",
                features: [
                  "Open kitchen",
                  "Balcony",
                  "Built-in wardrobes",
                  "Premium finishes",
                ],
              },
              {
                type: "2 Bedroom",
                area: "950 - 1100 sq ft",
                price: "AED 1.8M",
                image:
                  "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
                badge: "Most Popular",
                features: [
                  "Master bedroom",
                  "Guest bathroom",
                  "Dining area",
                  "Storage room",
                ],
              },
              {
                type: "3 Bedroom",
                area: "1300 - 1500 sq ft",
                price: "AED 2.5M",
                image:
                  "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600",
                badge: "Premium",
                features: [
                  "En-suite bathrooms",
                  "Maid's room",
                  "Large balcony",
                  "Study area",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden ${
                  index === 1 ? "ring-2 ring-[#D4AF37] scale-105" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={plan.image}
                    alt={`${plan.type} apartment`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        index === 1
                          ? "bg-[#D4AF37] text-black"
                          : "bg-white text-[#D4AF37]"
                      } font-semibold`}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A365D] mb-3">
                    {plan.type}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for modern living
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-semibold">{plan.area}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Starting from:</span>
                      <span className="font-bold text-[#D4AF37] text-xl">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-[#1A365D]">
                      Key Features:
                    </h4>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Floor Plan
                    </Button>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outline"
                      className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate EMI
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1A365D] mb-6">
              Visual Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore The Eden through our curated gallery of interiors,
              amenities, and lifestyle moments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
            ].map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleVideoTour}
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold px-8 py-4"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Developer Section Enhanced */}
      <section className="py-24 bg-gradient-to-r from-[#1A365D] to-[#2A4A6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-6">
                  Built by <span className="text-[#D4AF37]">Sobha Realty</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  With over 45 years of excellence in real estate development,
                  Sobha Realty has delivered world-class projects across the
                  Middle East. Known for quality construction, timely delivery,
                  and innovative design.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "45+", label: "Years of Excellence", icon: Award },
                  {
                    number: "100+",
                    label: "Projects Delivered",
                    icon: Building2,
                  },
                  { number: "50K+", label: "Happy Families", icon: Users },
                  {
                    number: "100%",
                    label: "On-Time Delivery",
                    icon: CheckCircle,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/30 transition-colors">
                      <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold"
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Learn More About Sobha
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white hover:bg-white text-[#1A365D]"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sobha developer"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-[#1A365D] to-[#0F1B2E]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Call The Eden Home?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our luxury property experts today. Limited units
              available with exclusive launch pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-2xl">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Get Exclusive Access
                </h3>
                <p className="text-white/90">
                  Priority booking • Special launch pricing • Expert
                  consultation
                </p>
              </div>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                        className="h-12 text-lg border-2 focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+971 XX XXX XXXX"
                        className="h-12 text-lg border-2 focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email address"
                      className="h-12 text-lg border-2 focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      I am interested in:
                    </label>
                    <select
                      className="w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-md focus:border-[#D4AF37] focus:outline-none transition-colors"
                      value={formData.interest}
                      onChange={(e) =>
                        handleInputChange("interest", e.target.value)
                      }
                    >
                      <option value="general">General Information</option>
                      <option value="1bed">1 Bedroom Apartment</option>
                      <option value="2bed">2 Bedroom Apartment</option>
                      <option value="3bed">3 Bedroom Apartment</option>
                      <option value="investment">
                        Investment Opportunities
                      </option>
                      <option value="sitevisit">Site Visit Booking</option>
                      <option value="payment">Payment Plan Details</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us more about your requirements, preferred unit type, or any specific questions..."
                      className="h-32 text-lg border-2 focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                        Processing Your Request...
                      </div>
                    ) : (
                      <>
                        <Target className="w-5 h-5 mr-2" />
                        Get Complete Information Package
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white h-12"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </Button>
                    <Button
                      onClick={handleCallNow}
                      variant="outline"
                      className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white h-12"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Expert
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-white space-y-6">
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our luxury property consultants are available 24/7 to assist
                  you with your investment journey.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us Anytime",
                    info: "+971 4 XXX XXXX",
                    desc: "24/7 customer support",
                    action: handleCallNow,
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp Chat",
                    info: "+971 XX XXX XXXX",
                    desc: "Instant responses",
                    action: handleWhatsApp,
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    info: "info@eden-sobha.ae",
                    desc: "Detailed information",
                    action: () => window.open("mailto:info@eden-sobha.ae"),
                  },
                  {
                    icon: MapPin,
                    title: "Visit Our Office",
                    info: "Sobha Central Dubai",
                    desc: "Sales office open daily",
                    action: () => scrollToSection("location"),
                  },
                ].map((contact, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    onClick={contact.action}
                  >
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <contact.icon className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-[#D4AF37] font-semibold">
                          {contact.info}
                        </p>
                        <p className="text-gray-300 text-sm">{contact.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/50" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/30">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Why Choose The Eden?
                </h4>
                <div className="space-y-3">
                  {[
                    "Prime location in Sobha Central Dubai",
                    "Flexible payment plans available",
                    "Guaranteed rental yields",
                    "World-class amenities included",
                    "Ready for handover in 2024",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1B2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="h-10 w-10 text-[#D4AF37]" />
                <div>
                  <h3 className="text-2xl font-bold">The Eden</h3>
                  <p className="text-gray-400">Sobha Central Dubai</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Experience luxury living at its finest. The Eden at Sobha
                Central Dubai offers premium apartments with world-class
                amenities in Dubai&apos;s most prestigious location.
              </p>

              <div className="flex space-x-4">
                <Button
                  onClick={handleWhatsApp}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleCallNow}
                  size="sm"
                  variant="outline"
                  className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
                Quick Links
              </h4>
              <div className="space-y-2">
                {[
                  {
                    label: "Project Overview",
                    action: () => scrollToSection("overview"),
                  },
                  {
                    label: "Amenities",
                    action: () => scrollToSection("amenities"),
                  },
                  {
                    label: "Location",
                    action: () => scrollToSection("location"),
                  },
                  {
                    label: "Floor Plans",
                    action: () => scrollToSection("floorplans"),
                  },
                  {
                    label: "Gallery",
                    action: () => scrollToSection("gallery"),
                  },
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={link.action}
                    className="block text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
                Contact Info
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 4 XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@eden-sobha.ae</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Sobha Central Dubai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 The Eden at Sobha Central Dubai. All rights reserved. |
              Developed by Sobha Realty
            </p>
            <p className="text-gray-600 text-sm mt-2">
              This website is for informational purposes only. All images are
              for illustration purposes. Actual product may vary. Please consult
              with our sales team for accurate information.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-2xl animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <Button
          onClick={handleCallNow}
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 shadow-2xl"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
