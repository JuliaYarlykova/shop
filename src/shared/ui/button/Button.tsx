const Button = ({ title, className, onClick }: { title: string, className?:string, onClick?:()=>void }) => {
    return (
      <button onClick={onClick} className={`m-w-[220px] h-[40px] w-fit items-center self-center  rounded-[10px] bg-[#0E3A20]  px-[30px] py-[8px] text-[18px] font-light text-white ${className}`}>
        {title}
      </button>
    )
  }
  
  export default Button