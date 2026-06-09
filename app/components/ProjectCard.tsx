import Image from "next/image";

export function ProjectCard(props: {
  title: string;
  image: string;
  description: string;
  link: string;
  github: string;
}) {
  return (
    <div className="rounded-xl bg-[#2E2E2E] group overflow-hidden border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={props.image}
          alt={props.title}
          fill={true}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={props.link}
            target="_blank"
            className="h-10 w-10 rounded-full bg-[#222222] flex items-center justify-center hover:bg-[#84DCC6] hover:text-[#222222] transition-colors"
            aria-label="View project"
          >
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
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <a
            href={props.github}
            target="_blank"
            className="h-10 w-10 rounded-full bg-[#222222] flex items-center justify-center hover:bg-[#84DCC6] hover:text-[#222222] transition-colors"
            aria-label="View code"
          >
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
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {props.title}
        </h3>
        <p className="text-[#95A3B3] mb-4 text-sm">{props.description}</p>
      </div>
    </div>
  );
}
