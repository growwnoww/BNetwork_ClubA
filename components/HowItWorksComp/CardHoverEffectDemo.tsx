import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
   <div>
   
     <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
   </div>
  );
}
export const projects = [
  {
    title: "Planet Upgrade System",
    image:
      "/BELIEVE-LOGO-07.png",
    downloadbtn: "/PlanetUpPdf.pdf",
  },
  {
    title: "Universe Club-A",
    image:
      "/BELIEVE-LOGO-13.png",
    downloadbtn: "/Universe_Club_A_BNetwork_1may24.pdf",
  },
  {
    title: "NFT Royalty",
    image:
      "/NEPTUNE031.png",
    downloadbtn: "/BNetwork_Royalty NFT.pdf",
  },
  {
    title: "White Paper of BN Coin",
    image:
      "/Coin Front.png",
    downloadbtn: "/BN COIN White _paper_new.pdf",
  },

];
