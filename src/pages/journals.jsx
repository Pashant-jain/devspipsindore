import JournalCard from "@/components/cards/JournalCard";
import CardGrid from "@/components/layout/CardGrid";
import HeroSection from "@/components/layout/HeroSection";
import { Button } from "@/components/ui/button";
import journalData from "@/data/journals";
import { ArrowRight } from "lucide-react";

function JournalsPage() {
  return (
    <div>
      <HeroSection
        leftImage={"/assets/images/gallery1.jpeg"}
        rightContent={
          <>
            <div className="uppercase font-bold text-2xl">Journals</div>
            <div className="w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              ex. Amet libero commodi quam delectus iure dicta,
            </div>
            <Button className="flex gap-2">
              Contact Us
              <ArrowRight />
            </Button>
          </>
        }
      />
      <CardGrid className="mt-10">
        {journalData.map((journal) => (
          <JournalCard {...journal} />
        ))}
      </CardGrid>
    </div>
  );
}

export default JournalsPage;
