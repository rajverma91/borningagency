import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from '../components/shared/AnimatedSection';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="relative pt-28 md:pt-36 pb-20 px-6 md:px-10 max-w-[1400px] mx-auto">

      {/* Background Glow Green */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00cc65]/10 blur-[120px] rounded-full -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-[#00cc65]">
          LET’S TALK
        </h1>

        <p className="text-muted-foreground max-w-xl mb-10">
          Have a project, idea, or just want to say hello? We'd love to hear from you.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE INFO */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-6">

            <div className="p-6 rounded-2xl border border-[#00cc65]/20 bg-background/60 backdrop-blur">
              <div className="flex items-center gap-4">
                <Mail className="text-[#00cc65]" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">info@borningagency.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#00cc65]/20 bg-background/60 backdrop-blur">
              <div className="flex items-center gap-4">
                <Phone className="text-[#00cc65]" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+91 99885 32819</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#00cc65]/20 bg-background/60 backdrop-blur">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#00cc65]" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Punjab, India</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              We typically reply within <span className="font-semibold text-[#00cc65]">24 hours</span>.
            </p>

          </div>
        </AnimatedSection>

        {/* FORM */}
        <AnimatedSection delay={0.3}>
          <div className="p-8 rounded-2xl border border-[#00cc65]/20 bg-background/60 backdrop-blur">

            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold mb-2 text-[#00cc65]">
                  🎉 Message Sent
                </h3>

                <p className="text-muted-foreground">
                  Thanks for reaching out. We'll contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-[#00cc65]/20 focus-visible:ring-[#00cc65]"
                  />

                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-[#00cc65]/20 focus-visible:ring-[#00cc65]"
                  />
                </div>

                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border-[#00cc65]/20 focus-visible:ring-[#00cc65]"
                />

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to our Terms & Privacy Policy.
                </p>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-3 text-sm font-medium bg-[#00cc65] hover:bg-[#00b85a] text-white"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

              </form>
            )}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}