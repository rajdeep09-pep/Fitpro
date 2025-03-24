"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Dumbbell, Salad } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import BackgroundImage from "@/components/background-image"
import Footer from "@/components/footer"

export default function PlansPage() {
  useEffect(() => {
    // Scroll to the hash fragment after page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

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
            <span className="text-primary">S</span>ubham <span className="text-primary">F</span>itness
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
      <BackgroundImage className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-white/20">CHOOSE YOUR</span>
              <span className="text-white"> PERFECT PLAN</span>
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Tailored solutions for every goal and budget. Find the plan that fits your lifestyle.
            </p>
          </motion.div>
        </div>
      </BackgroundImage>

      {/* One-on-One Plan */}
      <section id="one-on-one" className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dumbbell className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">One-on-One Plan</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹5000</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              Take your fitness to the next level with a dedicated personal trainer who designs a fully customized
              workout and nutrition plan tailored to your body, goals, and lifestyle. Get weekly check-ins, form
              corrections, and progress tracking to stay on top.
            </p>

            <p className="text-gray-400 text-sm">
              This plan ensures you have expert guidance every step of the way, making sure you stay motivated,
              injury-free, and see consistent, long-lasting results. Perfect for those serious about achieving a
              full-body transformation — fast.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Dedicated personal trainer",
                "Fully customized workout plan",
                "Personalized nutrition guidance",
                "Weekly check-ins and adjustments",
                "Form correction and technique guidance",
                "Progress tracking and analytics",
                "24/7 support via WhatsApp",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diet Plan */}
      <section id="diet" className="py-12 px-4 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Salad className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Diet Plan</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹100</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              Transform your nutrition with a personalized diet plan designed specifically for your body type, goals,
              and preferences. Our nutrition experts create balanced meal plans that make healthy eating simple and
              enjoyable.
            </p>

            <p className="text-gray-400 text-sm">
              This plan includes detailed meal plans, grocery lists, and nutritional guidance to help you fuel your body
              optimally. Perfect for those looking to lose weight, gain muscle, or improve overall health through better
              nutrition.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Personalized meal plans",
                "Calorie and macro calculations",
                "Grocery shopping lists",
                "Meal prep guides",
                "Supplement recommendations",
                "Monthly plan updates",
                "Email support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Workout Plan */}
      <section id="workout" className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dumbbell className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Workout Plan</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹100</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              Get a complete, easy-to-follow workout blueprint tailored to your fitness level — whether you're a
              beginner or a seasoned athlete. This plan breaks down daily exercises, sets, reps, and rest times,
              ensuring you maximize results without overtraining.
            </p>

            <p className="text-gray-400 text-sm">
              It's packed with goal-specific routines — from muscle building to weight loss — designed to deliver
              results quickly. Plus, you'll get progress-tracking tips and form guidance to make sure every rep counts.
              Affordable, effective, and flexible — your ultimate workout guide.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Customized workout routines",
                "Detailed exercise instructions",
                "Sets, reps, and rest time guidance",
                "Progressive overload strategy",
                "Workout videos for proper form",
                "Monthly plan updates",
                "Email support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diet + Workout Combo */}
      <section id="combo" className="py-12 px-4 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dumbbell className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Diet + Workout Combo</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹150</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              The ultimate value package combining our personalized Diet Plan and Workout Plan at a special price. Get a
              comprehensive fitness solution that addresses both nutrition and exercise for maximum results.
            </p>

            <p className="text-gray-400 text-sm">
              This combo ensures your nutrition perfectly complements your training, creating the optimal environment
              for transformation. It's the complete package for those serious about achieving their fitness goals
              efficiently.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Customized workout routines",
                "Personalized meal plans",
                "Grocery shopping lists",
                "Meal prep guides",
                "Calorie and macro calculations",
                "Supplement recommendations",
                "Monthly plan updates",
                "Email support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
            <h2 className="text-2xl font-bold">Ready to Start Your Transformation?</h2>
            <p className="text-black/80 max-w-md mx-auto">
              Choose the plan that fits your goals and budget. Start your fitness journey today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-black/80">
                Contact Us
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
          <Link href="/plans" className="flex flex-col items-center text-xs text-white">
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
          <Link href="/contact" className="flex flex-col items-center text-xs text-gray-400">
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

      <Footer />
    </div>
  )
}

