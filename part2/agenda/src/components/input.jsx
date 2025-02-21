
const Input = ({name , value , handler }) =>{
    return(
        <div>
          {name}: <input value={value} onChange={handler} autoComplete="false"/>
        </div>
    )
}

export default Input;