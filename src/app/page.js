"use client";
import data from "@/data/cafe.json";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutVibe from "@/components/AboutVibe";
import MenuSection from "@/components/MenuSection";
import SpecialSection from "@/components/SpecialSection";
import GallerySection from "@/components/GallerySection";
import ReviewSection from "@/components/ReviewSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Loader from "@/components/Loader";
import useImagePreloader from "@/hooks/useImagePreloader";

export default function Home() {
   const criticalImages = [
    data.hero.image,
    ...data.gallery.slice(0, 6).map(
      (item) => item.image
    ),
  ];

  const imagesLoaded =
    useImagePreloader(criticalImages);

  if (!imagesLoaded) {
    return <Loader />;
  }
  return (
    <>
      <Navbar data={data} />

      <Hero data={data} />

     
      <AboutVibe data={data} />

      <MenuSection data={data} />

       <SpecialSection data={data} />

      <GallerySection data={data} />

      <ReviewSection data={data} />

      <LocationSection data={data} /> 

      <Footer data={data} />
      
      <FloatingWhatsApp phone={data.business.phone} />
    </>
  );
}