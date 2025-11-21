"use client";

import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Container } from "./common/Container";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xcu1ux6",
        "template_idl4csm",
        formRef.current!,
        "OHJdq9491sVUkZ-3t"
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <SectionWrapper className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-900 overflow-hidden" id="contact">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl"></div>
      </div>

      <Container className="relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contact Form */}
          <div className="relative">
            {/* Form Background with Glass Effect */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8">
              <SectionHeading
                title="Let's Work Together"
                subtitle="I'm open to hiring, partnerships, or collaborations."
                className="text-white"
              />

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">I am a...</label>
                  <select
                    name="role"
                    required
                    className="w-full p-4 border border-white/20 bg-white/10 text-white rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 outline-none placeholder:text-white/60 backdrop-blur-sm"
                  >
                    <option value="" className="text-gray-700">Select your role</option>
                    <option className="text-gray-700">Recruiter / Hiring Manager</option>
                    <option className="text-gray-700">Potential Partner / Co-founder</option>
                    <option className="text-gray-700">Investor / Advisor</option>
                    <option className="text-gray-700">Client</option>
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Your Name</label>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      required
                      className="p-4 border border-white/20 bg-white/10 text-white rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 placeholder:text-white/60 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="p-4 border border-white/20 bg-white/10 text-white rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 placeholder:text-white/60 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Your Message</label>
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project or how we can collaborate..."
                    required
                    className="p-4 border border-white/20 bg-white/10 text-white rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 resize-none placeholder:text-white/60 backdrop-blur-sm"
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full py-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:transform-none disabled:hover:shadow-2xl group"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : submitted ? (
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>

                {submitted && (
                  <div className="p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-center backdrop-blur-sm">
                    <p className="text-green-300 font-medium">
                      🎉 Thank you! I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/contact.png"
                  alt="Let's work together"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>


                <div className="absolute bottom-2 right-20 bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20 max-w-xs">
                  <p className="text-purple-200 text-sm">Available for new projects and collaborations</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-2xl blur-xl z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-2xl blur-xl z-0"></div>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}