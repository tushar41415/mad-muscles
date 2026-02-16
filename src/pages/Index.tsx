import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkoutPlanSection from "@/components/WorkoutPlanSection";
import MealPlanSection from "@/components/MealPlanSection";
import HabitSection from "@/components/HabitSection";
import StatsSection from "@/components/StatsSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorkoutPlanSection />
      <MealPlanSection />
      <HabitSection />
      <StatsSection />
      <ReviewsSection />
      <VideoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
