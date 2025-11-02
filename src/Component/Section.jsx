const Section = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};

export default Section;
