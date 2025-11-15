import { ChevronDown } from "lucide-react";

export default function Accordion({ toggleAccordion, accordionTheme, title, children }) {
  return (
    <div className="rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all duration-300 overflow-hidden bg-card border border-card shadow-xl">
      <button
        onClick={() => toggleAccordion()}
        className="w-full p-4 sm:p-6 lg:p-8 flex items-center justify-between transition-colors hover:bg-card-hover"
      >
        <h2 className="capitalize text-xl sm:text-2xl font-bold text-primary">
          {title}
        </h2>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${accordionTheme ? 'rotate-180' : ''
            }`}
        />
      </button>

      <div className={`transition-all duration-500 ease-in-out ${accordionTheme
        ? 'xl:max-h-[30vh] opacity-100 py-4 lg:overflow-y-scroll'
        : 'max-h-0 opacity-0'
        } overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}