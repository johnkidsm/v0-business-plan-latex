"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Mail, FileText, Activity, Zap, ShieldCheck, Brain, Leaf, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  // 1. DEFINE SLIDE DATA 
  // Note: Ensure these video files exist in your public folder
  const videoSlides = [
    "/1.mp4", "/2.mp4", "/3.mp4", "/4.mp4", 
    "/5.mp4", "/6.mp4", "/7.mp4", "/8.mp4"
  ];

  // 2. STATE MANAGEMENT
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = () => {
    setCurrentSlideIdx((prevIdx) => (prevIdx === videoSlides.length - 1 ? 0 : prevIdx + 1));
  };

  const jumpToSlide = (index: number) => {
    setCurrentSlideIdx(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 10000);
  };

  // 3. EFFECTS
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 10000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const activeVideo = videoRefs.current[currentSlideIdx];
    if (activeVideo) {
      activeVideo.currentTime = 0; 
      // Use a slight delay to ensure element is ready, though often not strictly necessary with React refs
      setTimeout(() => {
          activeVideo.play().catch(e => console.log("Autoplay prevented:", e));
      }, 50);
    }
  }, [currentSlideIdx]);

  // Shared Social Buttons Component
  const SocialButtons = () => (
    <>
      <Link href="https://www.linkedin.com/company/kraftgeneai" target="_blank">
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10 h-12 w-12">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </Button>
      </Link>
      <Link href="https://github.com/KraftgeneAI/" target="_blank">
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10 h-12 w-12">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </Button>
      </Link>
      <Link href="https://discord.gg/xcW6GUsPdH" target="_blank">
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10 h-12 w-12">
           <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
             <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.6853-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
           </svg>
        </Button>
      </Link>
    </>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative rounded overflow-hidden">
                 {/* Ensure this image exists */}
                <Image
                  src="/images/kraftgene-logo.jpg"
                  alt="Kraftgene AI"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">Kraftgene AI Inc.</span>
            </div>

            <div className="flex items-center space-x-2">
               <Link href="#about">
                 {/* Request 2: Fixed hover state to prevent solid white blocking text */}
                 <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 mr-2">About</Button>
               </Link>

               <SocialButtons />
              <Link href="#contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white ml-2 border-0">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
        {/* VIDEO LAYER */}
        {videoSlides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out pointer-events-none ${
              index === currentSlideIdx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <video
              ref={(el) => { videoRefs.current[index] = el }}
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
              src={src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
          </div>
        ))}

        {/* STATIC CONTENT LAYER */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-5xl mx-auto text-center pointer-events-auto">
            <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/50 hover:bg-emerald-500/20">Early Stage Startup</Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building the Future of <br className="hidden md:block"/>
              <span className="text-emerald-500">Energy Infrastructure Protection</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Kraftgene AI is developing innovative artificial intelligence solutions to integrate environmental threat detection with energy infrastructure monitoring, agentic AI and robotics for world's sustainable energy future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#research">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto border-0">
                  Explore Our Research <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* NAVIGATION DOTS */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center space-x-3">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlideIdx 
                  ? "w-8 bg-emerald-500" 
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Kraftgene AI Section */}
      <section id="about" className="py-24 bg-gray-900 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Text Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Kraftgene AI</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in Toronto, Ontario, Kraftgene AI is an early-stage startup focused on developing artificial intelligence solutions for the energy sector. We are working to create innovative technologies that will help protect Canada's energy infrastructure while supporting environmental sustainability.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our team is passionate about leveraging cutting-edge AI, machine learning, and data analytics to address the complex challenges facing Canada's energy industry in an era of climate change.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-3" /> Based in Toronto, Ontario</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-3" /> Focus on AI and energy infrastructure</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-3" /> Committed to environmental sustainability</li>
              </ul>
            </div>

            {/* Innovation in Progress Card */}
            <div className="flex justify-center">
              <div className="bg-black/50 border border-emerald-500/30 rounded-3xl p-12 text-center max-w-md w-full shadow-2xl shadow-emerald-900/20">
                  <div className="flex justify-center mb-6">
                    <ShieldCheck className="w-16 h-16 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Innovation in Progress</h3>
                  <p className="text-xl text-gray-400 mb-8">Building tomorrow's solutions today</p>
                  <Link href="https://www.energyeminence.online" target="_blank" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                      Visit our dashboard demo <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Our Vision</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We envision a future where artificial intelligence seamlessly protects world's energy infrastructure while safeguarding the environment. Our goal is to develop comprehensive AI solutions that integrate environmental intelligence, energy infrastructure monitoring, and real-time data from robotics like drones and ground robots to protect world's critical energy systems. We also envision a future where we extend our platform with an AI Agent System that introduces autonomous decision-making. This multi-agent architecture will enable automated grid stabilization, threat response, and emissions optimization to reduce system response times from minutes to seconds.
            </p>
          </div>

          {/* Vision Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-center hover:bg-gray-900 transition-colors">
                  <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-8 h-8 text-red-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Environmental Protection</h4>
                  <p className="text-gray-400">Early detection and monitoring of environmental threats</p>
              </div>
              {/* Card 2 */}
               <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-center hover:bg-gray-900 transition-colors">
                  <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-8 h-8 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Infrastructure Security</h4>
                  <p className="text-gray-400">Protecting critical energy systems and assets</p>
              </div>
               {/* Card 3 */}
               <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-center hover:bg-gray-900 transition-colors">
                  <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-8 h-8 text-purple-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">AI Innovation</h4>
                  <p className="text-gray-400">Advanced machine learning, predictive analytics and agentic system</p>
              </div>
               {/* Card 4 */}
               <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-center hover:bg-gray-900 transition-colors">
                  <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Leaf className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Sustainable Future</h4>
                  <p className="text-gray-400">Supporting Canada's clean energy transition</p>
              </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation Section */}
      <section id="research" className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Latest Research & Innovations</h2>
            <p className="text-xl text-gray-400">
              From the lab to the grid. We are pioneering the next generation of predictive AI and autonomous systems.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* Research Item 1: Cascade Failure */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="border-emerald-500 text-emerald-400">Breakthrough Research</Badge>
                  <span className="text-gray-500 text-sm">Nov 2025</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Predictive Cascade Failure Analysis</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  We have developed a sophisticated model built on Graph Neural Networks (GNNs) and a Physics-Informed Learning (PIL) framework. By processing the grid as a graph and fusing multi-modal data, we can forecast catastrophic cascade failures 15-35 minutes before they occur.
                </p>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li className="flex items-center"><Activity className="w-5 h-5 text-emerald-500 mr-3" /> 78.4% detection rate</li>
                  <li className="flex items-center"><Activity className="w-5 h-5 text-emerald-500 mr-3" /> Fuses telemetry, satellite, and robotic sensors</li>
                  <li className="flex items-center"><Activity className="w-5 h-5 text-emerald-500 mr-3" /> Physically plausible predictions via PIL</li>
                </ul>
                <div className="flex gap-4">
                  <Link href="https://www.techrxiv.org/users/880618/articles/1357639-ai-driven-predictive-cascade-failure-analysis-using-multi-modal-environmental-infrastructure-data-fusion-a-real-time-prediction-framework-for-critical-energy-infrastructure" target="_blank">
                    <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-950 hover:text-emerald-400 transition-colors">
                      <FileText className="w-4 h-4 mr-2"/> Read Paper
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-900/20">
                 {/* Ensure image exists */}
                <Image 
                  src="/images/cascade_detec.JPG" 
                  alt="Cascade Failure Graph" 
                  width={800} height={600} 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Research Item 2: Wildfire Detection (Edge AI) */}
            {/* Request 1: Changed from grid to flex-col to stack Video (Top) and Text (Bottom) */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="flex items-center space-x-3 mb-4">
                   <Badge variant="outline" className="border-red-500 text-red-400">Edge AI</Badge>
                   <span className="text-gray-500 text-sm">Real-time Demo</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Real-Time Edge Wildfire Detection</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Relying on the cloud is too slow for wildfire response. Our new YOLO-based model runs directly on the embedded processors of autonomous drones. It identifies fire threats instantly, without a network connection.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <div className="text-2xl font-bold text-white mb-1">91.5%</div>
                    <div className="text-xs text-gray-500">mAP50 Accuracy</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <div className="text-2xl font-bold text-white mb-1">2 ms</div>
                    <div className="text-xs text-gray-500">Inference Speed</div>
                  </div>
                   <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <div className="text-2xl font-bold text-white mb-1">6 MB</div>
                    <div className="text-xs text-gray-500">Model Size</div>
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/20 bg-gray-900">
                {/* Embedded Video - Ensure video exists */}
                <video 
                  autoPlay loop muted playsInline 
                  className="w-full h-auto"
                  src="/wildfiredetec_sidebyside.mp4" 
                />
                 
              </div>
              
            </div>

            {/* Research Item 3: Flood Detection (Eye in the Sky) */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="border-blue-500 text-blue-400">Computer Vision</Badge>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Flood Detection for Grid Resilience</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                   Detecting floodwaters in muddy, complex terrain is notoriously difficult. Our custom segmentation models distinguish actual water threats from harmless background noise, providing the "eye in the sky" needed to protect substations.
                </p>
                <p className="text-gray-400 mb-6">
                  These visual insights serve as dynamic inputs for our failure analysis, predicting how the grid will react to rising waters minutes before a substation is submerged.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
                 {/* Ensure image exists */}
                <Image 
                  src="/images/flood_detec.jpg" 
                  alt="Flood Segmentation Model" 
                  width={800} height={600} 
                  className="w-full h-auto"
                />
              </div>
            </div>

             {/* Research Item 4: Landslide (Multi-modal) */}
             <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-900/20">
                 {/* Ensure image exists */}
                <Image 
                  src="/images/landslide_detec.jpg" 
                  alt="Landslide Mask Detection" 
                  width={800} height={600} 
                  className="w-full h-auto"
                />
              </div>
               <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-400">Multi-Modal Fusion</Badge>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Predictive Landslide Risk</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                   A single landslide can sever a critical power corridor. Our framework fuses satellite imagery with real-time SCADA telemetry to pinpoint landslide risks with high true-positive rates and minimal false positives (7.8%).
                </p>
                <div className="p-6 bg-emerald-900/20 border border-emerald-500/20 rounded-xl">
                  <h4 className="text-emerald-400 font-semibold mb-2">Impact</h4>
                  <p className="text-gray-300 text-sm">
                    Enables operators to de-energize lines or reroute power 15-35 minutes before physical impact, preventing cascading blackouts and wildfires.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Platform / Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us in Building the Future</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              We are currently seeking pilot partners in the energy sector and engaging with investors to scale this critical technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
               <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span>Toronto, Ontario</span>
               </div>
               <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span>info@kraftgeneai.com</span>
               </div>
            </div>
            
            <div className="flex justify-center space-x-4">
               <SocialButtons />
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
           <p>&copy; 2025 Kraftgene AI Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}