import Section from "./Section";

const Skill = () => {
  const skills = [
    { src: "/assets/logos/C++.svg", name: "C++" },
    { src: "/assets/logos/CSS.svg", name: "CSS" },
    { src: "/assets/logos/HTML.svg", name: "HTML" },
    { src: "/assets/logos/Java.svg", name: "Java" },
    { src: "/assets/logos/JavaScript.svg", name: "JavaScript" },
    { src: "/assets/logos/Python.svg", name: "Python" },
  ];

  return (
    <Section id="Skill">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-3.5xl font-bold text-white">
            Experience meets creativity.
            <br /> Here’s what I use.
          </h1>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-3 gap-8 md:flex-row md:flex-wrap md:justify-start lg:flex lg:flex-wrap lg:justify-start lg:gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center flex-shrink-0"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-11 h-11 md:w-14 md:h-14 lg:w-14 lg:h-14 transition-transform duration-200 hover:scale-110"
              />
              <span className="mt-2 text-sm font-light font-mono text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Skill;
