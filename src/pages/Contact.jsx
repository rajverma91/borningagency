import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AnimatedSection from '../components/shared/AnimatedSection';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
          GET IN<br />TOUCH
        </h1>
        <div className="h-px bg-foreground w-full mb-12" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <AnimatedSection delay={0.2}>
          <div>
            <h3 className="text-lg font-bold mb-2">Have a project in mind?</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Reach out to us and we'll discuss the best way to move forward.
            </p>
            <p className="text-sm">
              We respond <span className="font-bold">within 48 hours</span> on weekdays.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          {submitted ? (
            <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <h3 className="text-xl font-bold mb-2">Thank you!</h3>
              <p className="text-sm text-muted-foreground">We've received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Name *
                </label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  placeholder=""
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  placeholder=""
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground resize-none"
                  placeholder=""
                />
              </div>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our Terms & Privacy Policy.
              </p>
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3 text-sm font-medium"
              >
                Submit
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}