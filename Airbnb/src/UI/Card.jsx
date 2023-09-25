import Button from "../components/Button"
import { FaStar } from "react-icons/fa"
function Card(props) {
  return (
    <div className="relative">
      <img className="rounded-lg h-64 w-52 " src={props.image} alt="" />
      <Button className =" absolute top-2 left-1 bg-white" text={props.sale} />
      <div className="flex gap-1 mt-1 ">
        < FaStar fill="pink"/>
        <span>{props.stars}</span>
        <span>{`(${props.number})`}</span>
        <span>{props.country}</span>
      </div>
      <p>{props.product}</p>
      <p>{`From $${props.cost}/ person`}</p>
    </div>
  )
}

export default Card
