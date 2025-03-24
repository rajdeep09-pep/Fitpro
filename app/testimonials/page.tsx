"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, StarHalf } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function TestimonialsPage() {
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
              <span className="text-white">SUCCESS</span>
              <span className="text-white/20"> STORIES</span>
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Real people, real transformations. See what our clients have achieved with our personalized fitness plans.
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex">
                {[...Array(4)].map((_, j) => (
                  <Star key={j} className="text-primary" size={24} fill="currentColor" />
                ))}
                <StarHalf className="text-primary" size={24} fill="currentColor" />
              </div>
              <span className="ml-2 font-bold text-xl">4.5/5</span>
              <span className="ml-2 text-gray-400 text-sm">(based on 120+ client reviews)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid gap-6">
            {[
              {
                name: "Aarav M.",
                plan: "Diet + Workout Combo",
                testimonial:
                  "This website completely transformed my fitness journey! The personalized plans are easy to follow and effective. Within a month, I felt stronger and more energized. The design is so clean and modern — navigating through the services is a breeze.",
                results: "Transformed fitness journey",
                duration: "1 month",
                rating: 4.5,
                profileImage: "/images/client1.jpg",
              },
              {
                name: "Priya S.",
                plan: "Diet Plan",
                testimonial:
                  "Great value for the price! The plans are super affordable, and the one-on-one coaching really helped me stay accountable. The only thing I'd love to see is more video content for exercises.",
                results: "Improved accountability",
                duration: "3 months",
                rating: 4,
                profileImage: "/images/client2.jpg",
                transformationImage:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1687.jpg.jpg-vokpca3KiSBcDIueP1rn5wxM2YcG6H.jpeg",
              },
              {
                name: "Rahul K.",
                plan: "Workout Plan",
                testimonial:
                  "The workout and diet plans are solid, but I expected a bit more variety in the exercises. The website looks stunning, though — definitely one of the most impressive fitness sites I've seen.",
                results: "Solid progress",
                duration: "2 months",
                rating: 3.5,
                profileImage: "/images/client3.jpg",
                transformationImage:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1683.jpg.jpg-IzMT83cvfcFLVtNIpxGlT8ROo1gShB.jpeg",
              },
              {
                name: "Sneha R.",
                plan: "Diet + Workout Combo",
                testimonial:
                  "Absolutely worth it! The custom workout and diet plans are tailored perfectly to my goals. I lost weight while building muscle in just 6 weeks. Plus, the site's modern 3D design makes the whole experience fun and motivating.",
                results: "Lost weight & gained muscle",
                duration: "6 weeks",
                rating: 5,
                profileImage: "/images/client4.jpg",
                transformationImage:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2325.JPG-pTjppJT8oKMv1G4VfdnXiNgC0lezw6.jpeg",
              },
              {
                name: "Vikram D.",
                plan: "Diet Plan",
                testimonial:
                  "I love the interactive design — it feels like a premium fitness service. The plans are affordable and effective, especially the combined workout and diet option. Highly recommend this to anyone serious about getting fit!",
                results: "Effective nutrition plan",
                duration: "2 months",
                rating: 4.5,
                profileImage: "/images/client5.jpg",
              },
            ].map((client, i) => (
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
                className="rounded-lg border border-gray-800 bg-black p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={client.profileImage || "/placeholder.svg"}
                        alt={`${client.name} profile`}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold">{client.name}</h3>
                        <p className="text-xs text-gray-400">Plan: {client.plan}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {client.rating === 5 ? (
                        [...Array(5)].map((_, j) => (
                          <Star key={j} className="text-primary" size={16} fill="currentColor" />
                        ))
                      ) : client.rating === 4.5 ? (
                        <>
                          {[...Array(4)].map((_, j) => (
                            <Star key={j} className="text-primary" size={16} fill="currentColor" />
                          ))}
                          <StarHalf className="text-primary" size={16} fill="currentColor" />
                        </>
                      ) : client.rating === 4 ? (
                        [...Array(4)].map((_, j) => (
                          <Star key={j} className="text-primary" size={16} fill="currentColor" />
                        ))
                      ) : (
                        <>
                          {[...Array(3)].map((_, j) => (
                            <Star key={j} className="text-primary" size={16} fill="currentColor" />
                          ))}
                          <StarHalf className="text-primary" size={16} fill="currentColor" />
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-300 mb-3">"{client.testimonial}"</p>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">Results:</span>
                        <span>{client.results}</span>
                      </div>
                      <span>{client.duration}</span>
                    </div>
                  </div>

                  {client.transformationImage && (
                    <div className="flex-1 relative min-h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src={client.transformationImage || "/placeholder.svg"}
                        alt={`${client.name} transformation`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-primary/80 px-2 py-1 rounded text-xs font-medium text-black">
                        Transformation
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-white">TRANSFORMATION</span>
              <span className="text-white/20"> SHOWCASE</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Real results from real people who committed to their fitness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya S.",
                plan: "Diet + Workout Combo",
                result: "Lost 18kg and gained significant muscle definition in just 4 months.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1687.jpg.jpg-vokpca3KiSBcDIueP1rn5wxM2YcG6H.jpeg",
              },
              {
                name: "Rahul K.",
                plan: "One-on-One Coaching",
                result: "Complete body transformation with significant fat loss and muscle gain.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1683.jpg.jpg-IzMT83cvfcFLVtNIpxGlT8ROo1gShB.jpeg",
              },
              {
                name: "Sneha R.",
                plan: "Diet + Workout Combo",
                result: "Achieved a more toned physique while maintaining her lifestyle.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2325.JPG-pTjppJT8oKMv1G4VfdnXiNgC0lezw6.jpeg",
              },
            ].map((client, i) => (
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
                className="rounded-lg overflow-hidden bg-black border border-gray-800"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={client.image || "/placeholder.svg"}
                    alt={`${client.name} transformation`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-lg">{client.name}</h3>
                    <p className="text-xs text-gray-300 mb-1">Plan: {client.plan}</p>
                    <p className="text-sm text-gray-200">{client.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-white/20">VIDEO</span>
              <span className="text-white"> TESTIMONIALS</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Hear directly from our clients about their fitness journey and results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Aarav M.",
                plan: "Diet + Workout Combo",
                quote: "This website completely transformed my fitness journey!",
              },
              {
                name: "Sneha R.",
                plan: "Diet + Workout Combo",
                quote: "Absolutely worth it! The custom plans are tailored perfectly to my goals.",
              },
              {
                name: "Vikram D.",
                plan: "Diet Plan",
                quote: "I love the interactive design — it feels like a premium fitness service.",
              },
            ].map((client, i) => (
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
                className="rounded-lg overflow-hidden bg-black border border-gray-800"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=200&width=350&text=Video+Testimonial`}
                    alt="Video testimonial thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="rounded-full bg-primary/90 p-3">
                      <Play className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{client.name}</h3>
                  <p className="text-xs text-gray-400 mb-2">Plan: {client.plan}</p>
                  <p className="text-xs text-gray-400">
                    "{client.quote} Hear my complete transformation journey and how FitPro changed my approach to
                    fitness forever."
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl font-bold">Join the Success Stories</h2>
            <p className="text-black/80 max-w-md mx-auto">
              Your transformation journey starts today. Choose the plan that's right for you.
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
          <Link href="/testimonials" className="flex flex-col items-center text-xs text-white">
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
    </div>
  )
}

