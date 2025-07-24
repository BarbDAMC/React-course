import { useState } from "react"

interface AddCategoryProps {
  onNewCategory: (inputValue: string) => void;
}

export const AddCategory = ({onNewCategory} : AddCategoryProps) => {
  const [inputValue, setInputValue] = useState('One Punch');
  
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newInputValue = inputValue.trim()
    if(newInputValue.length <= 1) return;

    onNewCategory(newInputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input 
        type="text"
        name="gifs-input"
        value={inputValue}
        placeholder="Buscar gifs"
        onChange={onInputChange}
      />
    </form>
  )
}
