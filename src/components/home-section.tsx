import homeSectionBackground from "@/assets/home-section-background.jpg";

function HomeSection() {
  return (
    <section className="flex justify-center">
      <img
        src={homeSectionBackground}
        className="absolute object-cover h-screen w-full -z-10"
      />
      <div className="text-3xl text-white p-5 pt-32 self-center container w-full">
        dummy content
      </div>
    </section>
  );
}

export { HomeSection };
