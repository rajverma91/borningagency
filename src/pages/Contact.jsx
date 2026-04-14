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

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
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

            <div className="p-6 rounded-2xl border bg-background/60 backdrop-blur">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">info@borningagency.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border bg-background/60 backdrop-blur">
              <div className="flex items-center gap-4">
                <Phone className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+91 99885 32819</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border bg-background/60 backdrop-blur">
              <div className="flex items-center gap-4">
                <MapPin className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Punjab, India</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              We typically reply within <span className="font-semibold">24 hours</span>.
            </p>

          </div>
        </AnimatedSection>

        {/* FORM */}
        <AnimatedSection delay={0.3}>
          <div className="p-8 rounded-2xl border bg-background/60 backdrop-blur">

            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold mb-2">🎉 Message Sent</h3>
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
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to our Terms & Privacy Policy.    
                </p>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-3 text-sm font-medium"
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