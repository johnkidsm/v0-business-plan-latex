"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// Added 'Map' to imports for the new button icon
import { ArrowRight, MapPin, Mail, FileText, Activity, Zap, ShieldCheck, Brain, Leaf, CheckCircle, Download, Cpu, Network, Map } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

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
          // Added catch to prevent errors if video isn't loaded yet
          activeVideo.play().catch(e => console.log("Autoplay prevented:", e));
      }, 50);
    }
  }, [currentSlideIdx]);

  // PERFORMANCE FIX & SMOOTHNESS TWEAK: 
  // We load: 
  // 1. Current video (Visible)
  // 2. Next video (Buffering for smooth entry)
  // 3. Previous video (Fading out - ESSENTIAL for smooth transition, otherwise it cuts to black instantly)
  const shouldLoadVideo = (index: number) => {
    const total = videoSlides.length;
    const nextIdx = (currentSlideIdx + 1) % total;
    const prevIdx = (currentSlideIdx - 1 + total) % total; // Handle wrap-around for previous
    
    return index === currentSlideIdx || index === nextIdx || index === prevIdx;
  };

// Shared Social Buttons Component
  // FIX: Replaced <Button> with a <div> styled to look like a button.
  // This removes the restriction that forces icons to be small.
  const SocialButtons = () => (
    <>
      {/* LinkedIn */}
      <Link href="https://www.linkedin.com/company/kraftgeneai" target="_blank">
        <div className="flex items-center justify-center w-16 h-16 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
          <FaLinkedin size={25} />
        </div>
      </Link>

      {/* GitHub */}
      <Link href="https://github.com/KraftgeneAI/" target="_blank">
        <div className="flex items-center justify-center w-16 h-16 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
          <FaGithub size={25} />
        </div>
      </Link>

      {/* Discord */}
      <Link href="https://discord.gg/xcW6GUsPdH" target="_blank">
        <div className="flex items-center justify-center w-16 h-16 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
          <FaDiscord size={25} />
        </div>
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
              <Link href="#about" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 relative rounded overflow-hidden group-hover:opacity-80 transition-opacity">
                   {/* Ensure this image exists */}
                  <Image
                    src="/images/kraftgene-logo.jpg"
                    alt="Kraftgene AI"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">Kraftgene AI Inc.</span>
              </Link>
            </div>

            <div className="flex items-center space-x-2">
               <Link href="#about">
                 {/* FIX: Added 'h-16', 'text-lg', and 'px-6' to match the large social icons */}
                 <Button 
                   variant="ghost" 
                   className="text-gray-300 hover:text-white hover:bg-white/10 mr-2 h-16 text-xl px-6"
                 >
                   About
                 </Button>
               </Link>

               <SocialButtons />
              <Link href="#contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white ml-2 border-0">Get in Touch</Button>
              </Link>
              {/* NEW ROADMAP BUTTON - IMPROVED CONTRAST */}
              <Link href="#roadmap">
                <Button variant="outline" className="text-emerald-400 border-emerald-500/50 hover:bg-emerald-400 hover:text-black transition-colors ml-2">
                   <Map className="w-4 h-4 mr-2"/> Roadmap
                </Button>
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
            {/* MEMORY OPTIMIZATION with PREV BUFFER: 
                Conditionally set SRC only for Prev, Current, and Next.
                This allows the 'fading out' video to stay loaded, preventing the "black jump" jerkiness. */}
            <video
              ref={(el) => { videoRefs.current[index] = el }}
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
              src={shouldLoadVideo(index) ? src : undefined}
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

      {/* System Architecture & Future Vision Section */}
      {/* Added ID to allow scrolling from the new button */}
      <section id="roadmap" className="relative py-32 bg-black border-t border-white/10 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge variant="outline" className="mb-4 border-white/20 text-gray-400 uppercase tracking-wider text-xs">Technical Documentation</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">System Architecture & Roadmap</h2>
            <p className="text-xl text-gray-400">
              Deep dive into our engineering standards. From our foundational data acquisition platform to our roadmap for autonomous agentic systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Foundation Platform */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]">
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-emerald-950/50 rounded-2xl border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Network className="w-7 h-7 text-emerald-500" />
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1">Current Platform</Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">EnergyEminence Foundation</h3>
                <p className="text-gray-400 mb-8 leading-relaxed h-20">
                  The core system design for high-frequency data acquisition, multi-modal environmental analytics, and robotic fleet integration.
                </p>

                {/* Specs List */}
                <div className="space-y-3 mb-10 border-t border-white/5 pt-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">System Specifications</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" /> Real-time Telemetry Fusion
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" /> Predictive Analytics Engine
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" /> Robotic Control Interface
                    </li>
                  </ul>
                </div>

                <Link href="/EnergyEminence AI Platform System Design and Architecture.pdf" target="_blank" download>
                  <Button className="w-full bg-white text-black hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300 font-semibold h-12">
                    <Download className="w-4 h-4 mr-2" /> Download System Architecture
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card 2: Agentic System Extension */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]">
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-purple-950/50 rounded-2xl border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Cpu className="w-7 h-7 text-purple-500" />
                  </div>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1">Future Vision</Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">AI Agentic System Extension</h3>
                <p className="text-gray-400 mb-8 leading-relaxed h-20">
                  Our roadmap for transitioning from predictive monitoring to autonomous decision-making agents for grid self-healing.
                </p>

                {/* Specs List */}
                <div className="space-y-3 mb-10 border-t border-white/5 pt-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Capabilities Roadmap</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300 text-sm">
                      <Brain className="w-4 h-4 text-purple-500 mr-3" /> Autonomous Grid Stabilization
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <Brain className="w-4 h-4 text-purple-500 mr-3" /> Multi-Agent Response Swarms
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <Brain className="w-4 h-4 text-purple-500 mr-3" /> Automated Emissions Optimization
                    </li>
                  </ul>
                </div>

                <Link href="/EnergyEminence Platform AI Agentic System Extension.pdf" target="_blank" download>
                  <Button className="w-full bg-white/5 text-white border border-white/20 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-300 font-semibold h-12">
                    <Download className="w-4 h-4 mr-2" /> Download Vision Paper
                  </Button>
                </Link>
              </div>
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
                {/* NEW: LinkedIn Button (Red Theme - High Contrast Hover) */}
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7391079734203400192" target="_blank">
                    <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-600 hover:text-white transition-colors">
                      <FaLinkedin className="w-4 h-4 mr-2"/> View on LinkedIn
                    </Button>
                  </Link>
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
                {/* NEW: LinkedIn Button (Blue Theme - High Contrast Hover) */}
                <div className="flex gap-4 mt-6">
                  <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7403183040929398785" target="_blank">
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
                      <FaLinkedin className="w-4 h-4 mr-2"/> View on LinkedIn
                    </Button>
                  </Link>
                </div>
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
                <div className="p-6 bg-emerald-900/20 border border-emerald-500/20 rounded-xl mb-6">
                  <h4 className="text-emerald-400 font-semibold mb-2">Impact</h4>
                  <p className="text-gray-300 text-sm">
                    Enables operators to de-energize lines or reroute power 15-35 minutes before physical impact, preventing cascading blackouts and wildfires.
                  </p>
                </div>
                {/* NEW: LinkedIn Button (Yellow Theme - High Contrast Hover) */}
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7392044029498195969" target="_blank">
                    <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors">
                      <FaLinkedin className="w-4 h-4 mr-2"/> View on LinkedIn
                    </Button>
                  </Link>
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