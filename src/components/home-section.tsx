import homeSectionBackground from "@/assets/home-section-background.jpg";

function HomeSection() {
  return (
    <section>
      <img
        src={homeSectionBackground}
        className="absolute object-cover h-screen w-full -z-10"
      />
      <div className="text-3xl text-white p-20 pt-32">dummy content</div>
    </section>
  );
}

export { HomeSection };
