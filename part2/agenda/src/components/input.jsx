
const Input = ({name , value , handler }) =>{
    return(
        <div>
          {name}: <input value={value} onChange={handler} autoComplete="false" required/>
        </div>
    )
}

export default Input;