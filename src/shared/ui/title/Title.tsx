interface ITitle {
    name: string
    classNameProp?: string
  }
  
  const Title: React.FC<ITitle> = ({ name, classNameProp }) => {
    return (
      <h1 className={`text-5xl font-normal text-stone-950 ${classNameProp}`}>
        {name}
      </h1>
    )
  }
  
  export default Title