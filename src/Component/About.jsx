import Section from "./Section";

const About = () => {
  return (
    <Section id="About">
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        About Me.
      </h1>
      
      <div className="max-w-3xl mx-auto px-6 text-left">
        <p className="text-justify">
          Hey, I am Nicholas Victorio, a Computer Science student based in Jakarta.
          I’m passionate about technology and learning how web development and artificial intelligence can solve real-world problems.
          <br /><br />I also enjoy exploring creative ideas, learning new things, and discovering how different interests can blend with technology.
          My goal is to keep improving my skills and understand how technology can make everyday life simpler and smarter.
        </p>
        
      </div>
    </Section>
  );
};

export default About;
