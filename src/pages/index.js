import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mb-10 flex-grow">
        {/* Imagem de fundo */}
        <div className="h-full relative">
          <Image
            width={100}
            height={100}
            src="/images/bg-hp.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />

          {/* Overlay transparente */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {/* Conteúdo centralizado */}
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                Bem-vindo ao mundo de Harry Potter!
              </h1>
              <p className="text-lg">
                Explore o que temos para oferecer e descubra mais.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
