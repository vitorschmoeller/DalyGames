import { Container } from "@/components/container"
import Image from "next/image"
import userImg from "../../../public/assets/user.png"
import {FaShareAlt} from "react-icons/fa"
import { FavoriteCard } from "./components/favorite"
import { Metadata } from "next"


export const metada: Metadata = {
    title: "Meu perfil - Daly Games sua plataforma de jogos!",
    description: "Perfil Seu Nome | Daly Games sua plataforma de jogos"
}

export default function Profile(){
    return(
        <main className="w-full text-black">
            <Container>
                <section 
                    className="mt-8 mb-6 flex flex-col justify-between items-center relative gap-3 sm:flex-row" 
                >
                    <div className="flex items-center w-full gap-4 text-lg flex-col sm:flex-row sm:justify-normal">
                        <Image 
                        src={userImg} 
                        alt="Imagem perfil do usuário"
                        className="rounded-full w-56 h-56 object-cover"
                        />
                        <h1 className="font-bold text-2xl ">Seu nome</h1>
                    </div>
                    <div className="sm:absolute top-0 right-0 gap-3 flex justify-center">
                        <button type="button" className="bg-gray-700 px-4 py-3 rounded-lg text-white">
                            Configurações
                        </button>
                        <button type="button" title="share" className="bg-gray-700 px-4 py-3 rounded-lg">
                            <FaShareAlt size={24} color="#fff"/>
                        </button>
                    </div>
                </section>

                <section className="flex flex-wrap gap-5 flex-col md:flex-row">
                    <div className="flex-grow flex-wrap">
                        <FavoriteCard />
                    </div>
                    <div className="flex-grow flex-wrap">
                        <FavoriteCard />
                    </div>
                    <div className="flex-grow flex-wrap">
                        <FavoriteCard />
                    </div>
                </section>

            </Container>
        </main>
    )
}