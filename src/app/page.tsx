import Link from "next/link";


const MockURLs = [
  'https://utfs.io/f/c7a44721-9df9-41e4-ad41-c42c2a905fb7-tn0lry.webp',
  'https://utfs.io/f/2fa7296d-6ebc-4066-8a29-be576700a36f-u9s7e6.webp',
  'https://utfs.io/f/71f453b9-f8fd-4402-86cf-a031cfa5f083-jg96ep.webp',
  'https://utfs.io/f/1f3cde9e-7637-454a-a3a7-4e65a6767abe-e4yin6.webp',
  'https://utfs.io/f/c356a2b0-584e-4cbe-b3e7-0f33ccbce177-jo0yby.webp',
]

const MockImages = MockURLs.map((url, index) => ({
  id: index + 1,
  url
}))



export default function HomePage() {
  return (
    <main>
      <section className="bg-gray-900 text-white md:py-32">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Bike Race Gallery</h1>
              <p className="text-lg md:text-xl">
                Build your Gallery by completing License challenges and Mastering the game of Bike Race
              </p>
              <div className="flex gap-4">
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  href="#"
                >
                  View Races
                </Link>
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  href="#"
                >
                  Meet the Riders
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link className="rounded-md overflow-hidden" href="#">
                <img
                  alt="Race 1"
                  className="w-full h-full object-cover"
                  height={200}
                  src="https://web.archive.org/web/20201129102927im_/http://bikeracelicenses.com/Pics/license_indexpage5.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </Link>
              <Link className="rounded-md overflow-hidden" href="#">
                <img
                  alt="Race 2"
                  className="w-full h-full object-cover"
                  height={200}
                  src="https://web.archive.org/web/20201129102927im_/http://bikeracelicenses.com/Pics/worldrecords_indexpage2.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </Link>
              <Link className="rounded-md overflow-hidden" href="#">
                <img
                  alt="Rider 1"
                  className="w-full h-full object-cover"
                  height={200}
                  src="https://web.archive.org/web/20201129102927im_/http://bikeracelicenses.com/Pics/tournaments_indexpage2.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </Link>
              <Link className="rounded-md overflow-hidden" href="#">
                <img
                  alt="Rider 2"
                  className="w-full h-full object-cover"
                  height={200}
                  src="https://web.archive.org/web/20201129102927im_/http://bikeracelicenses.com/Pics/info_indexpage2.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}
