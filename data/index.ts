export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const techStack = [
  "ReactJS",
  "Express",
  "Typescript",
  "Solidity",
  "Blockchain",
  "Svelte",
  "NextJS",
  "PrismaORM",
  "Ethrereum",
  "EVM",
];
export interface GridItemElement {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}
export const gridItems: GridItemElement[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Space Portfolio",
    des: "Portfolio with space theme and parralax animations",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://space-portfolio-alpha.vercel.app",
  },
  {
    id: 2,
    title: "Zooom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Zooom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://zooom-clone-silk.vercel.app",
  },
  {
    id: 3,
    title: "Rediscord",
    des: "Clone of a popular social media with a lot of fucntionality that uses new tech stack",
    img: "/p3.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/slemchik03/rediscord",
  },
  {
    id: 4,
    title: "Healthcare App",
    des: "App for making appointentment with admin functionality",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://healthcare-mu-taupe.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Vadim Savin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vadim Savin enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vadim Savin is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Vadim Savin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vadim Savin enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vadim Savin is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Vadim Savin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vadim Savin enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vadim Savin is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Vadim Savin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vadim Savin enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vadim Savin is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Vadim Savin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vadim Savin enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vadim Savin is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];
export interface WorkExperienceItem {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}
export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Ethereum Blockchain",
    desc: "Creating, testing, deploying smart-contracts written using Solidity. Have strong understanding of EVM, Blockchain. Have experience with Hardhat/Foundry, Viem, Ethers.js",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Next.js developer at Codeby.Games",
    desc: "Was Front-End developer at Codeby.Games My main responsibility: creating UI, bug-fix,API intergration with Swagger, building architecture",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/slemchik03",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/vadim-savin-73765a246/",
    img: "/link.svg",
  },
];
