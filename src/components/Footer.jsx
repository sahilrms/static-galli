import {
  Camera,
  Phone,
  Coffee
} from "lucide-react";

export default function Footer({
  data
}) {

  const { business } = data;

  return (
    <footer className="bg-[#080808] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <div className="flex items-center gap-3">

              <Coffee className="yellow" />

              <h3 className="text-4xl">
                {business.name}
              </h3>

            </div>

            <p className="text-zinc-500 mt-4">
              {business.tagline}
            </p>

          </div>

          <div>

            <h4 className="text-xl mb-4">
              Quick Links
            </h4>

            <div className="space-y-2 text-zinc-400">

              <a href="#hero" className="block">
                Home
              </a>

              <a href="#menu" className="block">
                Menu
              </a>

              <a href="#gallery" className="block">
                Gallery
              </a>

              <a href="#reviews" className="block">
                Reviews
              </a>

            </div>

          </div>

          <div>

            <h4 className="text-xl mb-4">
              Connect
            </h4>

            <div className="flex gap-4">

              <a
                href={`tel:${business.phone}`}
                className="glass p-3 rounded-xl"
              >
                <Phone />
              </a>

              <a
                href={`https://instagram.com/${business.instagram.replace("@","")}`}
                target="_blank"
                className="glass p-3 rounded-xl"
              >
                <Camera />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-zinc-500">

          © {new Date().getFullYear()} {business.name}

          <br />

          Designed with ☕ & ❤️

        </div>

      </div>

    </footer>
  );
}