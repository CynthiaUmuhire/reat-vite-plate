

function Button(props) {
  const classes = "p-1 border rounded-md " + props.className;
  return (
    <div>
      <button className= {classes}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
