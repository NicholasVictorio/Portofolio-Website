import Section from "./Section";

const Contact = () => {
  return (
    <Section id="Contact">
      <div className="text-center max-w-2xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold text-white mb-4">
          Interested?
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          I’m always open to new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="flex justify-center gap-6 max-w-md mx-auto">
          <a
            href="mailto:nicholas.victorio01@gmail.com"
            className="flex-1 px-6 py-3 border rounded-lg font-medium hover:bg-gray-300 hover:text-black hover:shadow-lg transition text-center"
          >
            Get in Touch
          </a>

          <a
            href="/assets/file/NicholasVictorioCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 border rounded-lg font-medium hover:bg-gray-300 hover:text-black hover:shadow-lg transition text-center"
          >
            View CV
          </a>
        </div>

      </div>
    </Section>
  );
};

export default Contact;
