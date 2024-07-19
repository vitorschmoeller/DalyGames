"use client"
import { ChangeEvent, useState } from "react"
import { FiEdit, FiX } from "react-icons/fi"
export function FavoriteCard(){
    const [inputIsVisible, setInputIsVisible] = useState(false)
    const [input, setInput] = useState('')
    const [gameName, setGameName] = useState("")

    const handleButton = () => {
        setInputIsVisible(!inputIsVisible)
        if(input !== ""){
            setGameName(input)
        }
        setInput("")
    }

    return(
        <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
            {inputIsVisible ? (
                <div className="flex items-center justify-center gap-3">
                    <input
                        className="w-full rounded-md h-8 text-black px-2 "
                        type="text" 
                        placeholder="Digite seu jogo" 
                        value={input} 
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                    />
                    <button title="fechar" onClick={handleButton}>
                        <FiX size={24} color="#fff"/>
                    </button>
                </div>
            ):(
                <button 
                title="edit" 
                type="button"
                className="self-start hover:scale-110 duration-200 transition-all"
                onClick={handleButton}
            >
                <FiEdit  size={24} color="#Fff"/>
            </button>
            )}

            {gameName &&(
                <div>
                    <span>Jogo Favorito:</span>
                    <p className="font-bold text-white">{gameName}</p>
                </div>
            )}
            
            {!gameName && (
                <p className="font-bold text-white">Adicionar jogo</p>
            )}
        </div>
    )
}