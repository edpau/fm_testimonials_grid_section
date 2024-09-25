import danielCliffordImg from "../assets/images/image-daniel.jpg";
import jonathanWaltersImg from "../assets/images/image-jonathan.jpg";
import jeanetteHarmonImg from "../assets/images/image-jeanette.jpg";
import patrickAbramsImg from "../assets/images/image-patrick.jpg";
import kiraWhittleImg from "../assets/images/image-kira.jpg";
// import bgPatternQuotation from "../assets/images/bg-pattern-quotation.svg";
import bgPatternQuotation from '/bg-pattern-quotation.svg';

export const graduates = [
  {
    id: 1,
    image: danielCliffordImg,
    imageAlt: "Photo of Daniel",
    imageBorder: "border-2 border-[hsl(264.2,81.6%,70.2%)]",
    name: "Daniel Clifford",
    title: "Verified Graduate",
    testimonialOverview:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    personalExperienceQuote: `“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best - and most grueling - time of my life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”`,
    bgColor: "bg-testimonialOne",
    bgPattern: bgPatternQuotation,
    textColorPrimary: "text-light-primary",
    blockQuotePaddingMarginTopExtra: true,
    blockQuotePaddingMarginTopExtraDesk: false,
    blockQuotePadding: "pr-4",
  },

  {
    id: 2,
    image: jonathanWaltersImg,
    imageAlt: "Photo of Jonathan",
    imageBorder: null,
    name: "Jonathan Walters",
    title: "Verified Graduate",
    testimonialOverview: "The team was very supportive and kept me motivated",
    personalExperienceQuote: `“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
  for a big company. This was one of the best investments I’ve made in myself. ”`,
    bgColor: "bg-testimonialTwo",
    bgPattern: null,
    textColorPrimary: "text-light-primary",
    blockQuotePaddingMarginTopExtra: false,
    blockQuotePaddingMarginTopExtraDesk: false,
    blockQuotePadding: null,
  },
  {
    id: 3,
    image: jeanetteHarmonImg,
    imageAlt: "Photo of Jeanette",
    imageBorder: null,
    name: "Jeanette Harmon",
    title: "Verified Graduate",
    testimonialOverview: "An overall wonderful and rewarding experience",
    personalExperienceQuote: `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
  while doing something I love. ”`,
    bgColor: "bg-testimonialThree",
    bgPattern: null,
    textColorPrimary: "text-dark-primary",
    blockQuotePaddingMarginTopExtra: false,
    blockQuotePaddingMarginTopExtraDesk: true,
    blockQuotePadding: null,
  },
  {
    id: 4,
    image: patrickAbramsImg,
    imageAlt: "Photo of Patrick",
    imageBorder: "border-2 border-[hsl(264.2,81.6%,70.2%)]",
    name: "Patrick Abrams",
    title: "Verified Graduate",
    testimonialOverview: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    personalExperienceQuote: `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”`,
    bgColor: "bg-testimonialFour",
    bgPattern: null,
    textColorPrimary: "text-light-primary",
    blockQuotePaddingMarginTopExtra: false,
    blockQuotePaddingMarginTopExtraDesk: true,
    blockQuotePadding: null,
  },
  {
    id: 5,
    image: kiraWhittleImg,
    imageAlt: "Photo of Kira",
    imageBorder: null,
    name: "Kira Whittle",
    title: "Verified Graduate",
    testimonialOverview: "Such a life-changing experience. Highly recommended!",
    personalExperienceQuote: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”`,
    bgColor: "bg-testimonialThree",
    bgPattern: null,
    textColorPrimary: "text-dark-primary",
    blockQuotePaddingMarginTopExtra: false,
    blockQuotePaddingMarginTopExtraDesk: true,
    blockQuotePadding: null,
  },
];
