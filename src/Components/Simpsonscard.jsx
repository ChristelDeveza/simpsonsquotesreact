

function Simpsonscard(props) {
    const { simpsons } = props
  return (
    <div>Simpsons card
        <ul>
          <li>{simpsons.quote}</li>
          <li>{simpsons.character}</li>
          <img src={simpsons.image} alt="simpsonsimg"></img>
          <li>{simpsons.characterDirection}</li>
        </ul>
    


    </div>
  )
}

export default Simpsonscard