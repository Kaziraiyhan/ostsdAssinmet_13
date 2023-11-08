

function Input({type, id, title, name, handleInputChange }) {
    return (
        <div>
            <label htmlFor={id}>{title}:</label>
            <input
                type={type}
                id={id}
                name={name}
                
                onChange={handleInputChange}
                required
            />
        </div>
    );
}

export default Input;
