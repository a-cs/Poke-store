import React from 'react';
import './Cart.css';

const Cart: React.FC = () => {
  return (
    <div className="Cart">
      <div className="CartCard">
        <div className="CartPokemon">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="bulbasaur"
          />
          <div className="CartPokemonText">
            <p>#1</p>
            <p>-</p>
            <p>bulbasaur</p>
          </div>
        </div>

        <div className="Qty">
          <p>50</p>
        </div>
        <div className="Buttons">
          <button type="button">UP</button>
          <button type="button">Down</button>
        </div>
      </div>

      <div className="CartCard">
        <div className="CartPokemon">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="bulbasaur"
          />
          <div className="CartPokemonText">
            <p>#1</p>
            <p>-</p>
            <p>bulbasaur</p>
          </div>
        </div>

        <div className="Qty">
          <p>50</p>
        </div>
        <div className="Buttons">
          <button type="button">UP</button>
          <button type="button">Down</button>
        </div>
      </div>

      <div className="CartCard">
        <div className="CartPokemon">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="bulbasaur"
          />
          <div className="CartPokemonText">
            <p>#1</p>
            <p>-</p>
            <p>bulbasaur</p>
          </div>
        </div>

        <div className="Qty">
          <p>50</p>
        </div>
        <div className="Buttons">
          <button type="button">UP</button>
          <button type="button">Down</button>
        </div>
      </div>

      <div className="CartCard">
        <div className="CartPokemon">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="bulbasaur"
          />
          <div className="CartPokemonText">
            <p>#1</p>
            <p>-</p>
            <p>bulbasaur</p>
          </div>
        </div>

        <div className="Qty">
          <p>50</p>
        </div>
        <div className="Buttons">
          <button type="button">UP</button>
          <button type="button">Down</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
