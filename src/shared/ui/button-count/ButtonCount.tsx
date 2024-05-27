

const ButtonCount = ({clickPlus, clickMinus, count}:{clickPlus?:()=>void, clickMinus?:()=>void, count:number}) =>{
    return(
        <div className=" self-center flex justify-between bg-[#0E3A20] px-[30px] py-[8px]  items-center w-[140px] h-[40px] rounded-[10px] text-white">
          <p className="text-[30px] cursor-pointer" onClick={clickMinus}>-</p>
          <p className="text-[20px]">{count}</p>
          <p className="text-[30px] cursor-pointer" onClick={clickPlus}>+</p>
        </div>
    )
}

export default ButtonCount