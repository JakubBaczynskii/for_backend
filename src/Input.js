import colorNames from "colornames";
import {useRef} from 'react'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
    const inputRef = useRef()

    const handleChange = () => {
        const newValue = inputRef.current.value;
        setColorValue(newValue);
        setHexValue(colorNames(newValue));
    };
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input 
                ref={inputRef}
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={handleChange}/>
                <button 
                    type="button"
                    onClick={() => setIsDarkText(!isDarkText)}
                >
                    Toggle Text Color
                </button>
        </form>
    )
}

export default Input