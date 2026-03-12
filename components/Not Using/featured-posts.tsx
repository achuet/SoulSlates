export default function FeaturedPosts() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Featured Posts
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border p-10 rounded-lg">
          Viral travel post
        </div>

        <div className="border p-10 rounded-lg">
          Trending tech idea
        </div>

        <div className="border p-10 rounded-lg">
          Creative photography
        </div>

      </div>

    </section>
  )
}