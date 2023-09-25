import Card from "../UI/Card"

function Experiences() {
  const experiences = [
    {
      image: "src\\assets\\images\\60a8e4982dfe1743cb6ea0dfdafde23d.png",
      sale: "SOLD OUT",
      product: "Life lessons with Katie Zaferes",
      stars: 5.0,
      number: 6,
      cost: 136,
      country: "USA"
    },
    {
      image: "src\\assets\\images\\wedding-photography 1.png",
      sale: "   ONLINE",
      product: "Learn wedding photography",
      stars: 5.0,
      number: 30,
      cost: 125,
      country: "USA"
    },
    {
      image: "src/assets/images/mountain-bike 1.png",
      sale: "SOLD OUT",
      product: "Life lessons with Katie Zaferes",
      stars: 4.8,
      number: 2,
      cost: 50,
      country: "USA"
    }
  ]
  return (
    <div className=" flex gap-5 w-full px-16 mt-6 ">
      {
        experiences.map((item, i) =>
          <Card key={i} {...item}>
          </Card>
        )
      }
    </div>

  )
}

export default Experiences
