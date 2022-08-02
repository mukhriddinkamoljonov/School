import React from 'react'
import umrah from "../../assets/image 1.png"

const Umrah = () => {
  return (
    <div className="w-full h-screen">
    <div className="w-full h-[643px] bg-zinc-900 flex justify-center items-center ">
    <div className="w-3/6 leading-[96px] text-white text-[70px] font-bold pl-[120px] ">
      <h1>Umra ziyorati uchun hozir band qiling!</h1>
    </div>
    <div className="w-3/6 pl-[10px]">
      <img src={umrah}/>
    </div>
    </div>
    <div className="text-cente pl=[165px]">
      <h1 className="w-[569px] h-[58px] text-[48px] font-bold leading-[120%] ml-[486px] text-[#0E0E2C] mt-[30px]">Umrah Package 2022</h1>
      <p className="">
      7 - 17 August 2022  |  From £1395
      </p>
      <p className="">
      Tour Code: UMMAY22  
      </p>
      <div className="w-[1110px] h-[96px] mt-[20px] ">
          Umrah Package has been carefully chosen to allow you, our guest, to enjoy your time in Makkah and Madinah, immersing yourself in worship in the sacred Haramain, about which the Prophet (s) said  “Perform Hajj and Umrah consecutively; for they remove poverty and sin as bellows removes impurity from iron.”
      </div>
    </div>
  
    
    </div>
  )
}

export default Umrah