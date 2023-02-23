import Quote from "./Quote"
import Dice from '../assets/images/icon-dice.svg'
import Pattern from '../assets/images/pattern-divider-mobile.svg'

function Card() {
  return (
    <section className="card">
      <Quote />

      <img src={Pattern} alt="pattern divider" />

      <button className="btn">
        <img src={Dice} alt="Dice image" />
      </button>
    </section>
  )
}

export default Card