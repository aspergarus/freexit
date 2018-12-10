import React, { Component } from 'react';
import './Game.scss';

class Game extends Component {
  placeholder(num) {
    num = num || Math.ceil(Math.random() * 100);

    return "https://via.placeholder.com/280x460.png?text=Card " + num;
  }

  render() {
    return (
      <div className="game">
        <div className="game__status">Some status message</div>
        <div className="game__zone game__canvas">
          <div className="game__oponents">
            <div className="game__oponent game__oponent--you">You</div>
            <div className="game__oponent game__oponent--active">Oponent #1</div>
            <div className="game__oponent">Oponent #2</div>
            <div className="game__oponent">Oponent #3</div>
            <div className="game__oponent">Oponent #4</div>
            <div className="game__oponent">Oponent #5</div>
          </div>
          <div className="game__task">
            <div className="game__task__card">
              <img src="{this.placeholder()}" alt="Card" className="game__task__card__image" />
            </div>
            <div className="game__task__question">
              <p>Question from the oponent</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error distinctio nam quod corporis placeat, quam necessitatibus illum quo commodi minima non vitae dolor sed voluptatibus tempora quos earum delectus ea! Nulla sapiente, voluptates excepturi ab sint blanditiis harum dolor distinctio optio recusandae modi quibusdam soluta praesentium nisi similique magnam voluptatum aliquid non quis odit asperiores perferendis dignissimos. Sapiente, commodi, sed, ipsa, quam esse architecto inventore doloribus est amet alias iste!</p>
            </div>
          </div>
        </div>
        <div className="game__zone game__player">
          <div className="game__card">
            <img src="{this.placeholder()}" className="game__task__card__image" />
          </div>
          <div className="game__card">
            <img src="{this.placeholder()}" className="game__task__card__image game__task__card__image--clicked" />            
          </div>
          <div className="game__card">
            <img src="{this.placeholder()}" className="game__task__card__image" />
          </div>
          <div className="game__card">
            <img src="{this.placeholder()}" className="game__task__card__image" />
          </div>
          <div className="game__card">
            <img src="{this.placeholder()}" className="game__task__card__image" />  
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
