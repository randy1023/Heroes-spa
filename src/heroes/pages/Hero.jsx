import { useParams } from "react-router-dom"

export const Hero = () => {
  const params =  useParams();
  return (
    <h1>Hero {params.id}</h1>
  )
}
