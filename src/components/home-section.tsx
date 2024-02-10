import homeSectionBackground from "@/assets/home-section-background.jpg";
import selfPic from "@/assets/self-pic.jpg";

function HomeSection() {
  return (
    <section className="h-screen flex flex-col">
      <img
        src={homeSectionBackground}
        className="absolute object-cover h-screen w-full -z-10"
      />
      <div className="flex justify-center gap-24 h-full items-center self-center container">
        <div className="flex flex-col max-w-xl gap-3">
          <h1 className="text-4xl text-white  p-2 rounded-md">
            JavaScript Full-Stack Developer
          </h1>
          <p className="text-white  p-2 text-xl">
            Hi 👋, my name is Bálint Nagy-Zsugya and I'm a Full-Stack JavaScript
            developer based in Hungary 🇭🇺
          </p>
        </div>

        <img src={selfPic} className="h-96 rounded-3xl" />
      </div>
    </section>
  );
}

export { HomeSection };
