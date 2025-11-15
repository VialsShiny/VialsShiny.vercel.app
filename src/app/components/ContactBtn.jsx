export default function ContactBtn({ hrefA, targetA, ariaLabel, children }) {
  return (
    <a
      href={hrefA}
      target={targetA ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 bg-button-social hover:bg-button-social-hover shadow-md"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}