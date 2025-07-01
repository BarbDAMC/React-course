import './styles.css'

interface FirstAppProps {
  title: string,
  subtitle: string,
  name: string
}


export const FirstApp = ({title, subtitle, name} : FirstAppProps) => {
  return (
     <>
      <h1>{title}</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>  
  )
}




