import HomeBanner from "./(home)/components/home-banner"
import HomeIntroduction from "./(home)/components/home-introduction"

export default function Home() {
  return (
    <main className="h-fit w-full items-center justify-center pt-10 py-24">
      <HomeBanner image="/images/main_introduce.jpg" />
      <HomeIntroduction />
    </main>
  )
}
