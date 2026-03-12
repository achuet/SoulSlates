export default function Creators() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Trending Creators
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="border p-6 rounded-lg">
          <p className="font-bold">@rahul</p>
          <p className="text-gray-400">12K followers</p>
        </div>

        <div className="border p-6 rounded-lg">
          <p className="font-bold">@anita</p>
          <p className="text-gray-400">9K followers</p>
        </div>

        <div className="border p-6 rounded-lg">
          <p className="font-bold">@vijay</p>
          <p className="text-gray-400">15K followers</p>
        </div>

        <div className="border p-6 rounded-lg">
          <p className="font-bold">@neha</p>
          <p className="text-gray-400">11K followers</p>
        </div>

      </div>

    </section>
  )
}