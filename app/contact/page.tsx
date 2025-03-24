"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, goal: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      goal: "",
      message: "",
    })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <CustomCursor />

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            FitPro
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="text-white">
                Contact
              </Button>
            </Link>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-white">GET IN</span>
              <span className="text-white/20"> TOUCH</span>
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Have questions about our fitness plans? Ready to start your transformation? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="rounded-lg border border-gray-800 p-6"
          >
            <h2 className="text-xl font-bold mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="goal" className="text-sm font-medium">
                  Fitness Goal
                </label>
                <Select value={formState.goal} onValueChange={handleSelectChange}>
                  <SelectTrigger id="goal" className="bg-gray-900 border-gray-700">
                    <SelectValue placeholder="Select your primary fitness goal" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="weight-loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                    <SelectItem value="toning">Toning & Definition</SelectItem>
                    <SelectItem value="strength">Strength Training</SelectItem>
                    <SelectItem value="endurance">Endurance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your fitness goals and any questions you have"
                  className="bg-gray-900 border-gray-700 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold mb-4">Quick Contact</h2>

            <div className="grid gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-sm text-gray-400">+91 98765 43210</p>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-sm text-gray-400">+91 98765 43210</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Free 10-Minute Consultation</h3>
                  <p className="text-sm text-gray-400">Schedule a quick call with our fitness expert</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  question: "How do I know which plan is right for me?",
                  answer:
                    "The best plan depends on your specific goals, budget, and preferences. Our One-on-One Plan offers the most personalized approach, while our Workout Plan and Diet & Workout Combo are great for self-motivated individuals. Feel free to contact us for a personalized recommendation.",
                },
                {
                  question: "How are the plans delivered?",
                  answer:
                    "All plans are delivered digitally through our app and email. You'll receive detailed workout instructions, videos, meal plans, and tracking tools depending on your chosen plan.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "You can upgrade to a more comprehensive plan at any time. We'll even prorate the cost based on your current subscription.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                  className="rounded-lg border border-gray-800 bg-black p-4"
                >
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Ready to Transform Your Life?</h2>
            <p className="text-black/80 max-w-md mx-auto">
              Take the first step toward a healthier, stronger you. Our expert team is ready to guide you every step of
              the way.
            </p>
            <Link href="/plans">
              <Button size="lg" className="bg-black text-white hover:bg-black/80">
                Explore Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-t border-gray-800 py-2 px-4 md:hidden">
        <div className="flex justify-around">
          <Link href="/" className="flex flex-col items-center text-xs text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mb-1"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </Link>
          <Link href="/plans" className="flex flex-col items-center text-xs text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mb-1"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M12 11h4"></path>
              <path d="M12 16h4"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 16h.01"></path>
            </svg>
            Plans
          </Link>
          <Link href="/testimonials" className="flex flex-col items-center text-xs text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mb-1"
            >
              <path d="M17 6.1H3"></path>
              <path d="M21 12.1H3"></path>
              <path d="M15.1 18H3"></path>
            </svg>
            Results
          </Link>
          <Link href="/contact" className="flex flex-col items-center text-xs text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mb-1"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

