import React, { Component } from 'react';
import './Game.scss';

class Game extends Component {
  render() {
    return (
      <div class="game">
        <div class="status">Some status message</div>
        <div class="game_zone game_canvas">
          <div class="oponents">
              <div class="oponent oponent--you">You</div>
              <div class="oponent oponent--active">Oponent #1</div>
              <div class="oponent">Oponent #2</div>
              <div class="oponent">Oponent #3</div>
              <div class="oponent">Oponent #4</div>
              <div class="oponent">Oponent #5</div>
          </div>
          <div class="task">
            <div class="task__card">
              <img src="https://via.placeholder.com/280x460.png?text=Card" alt="Card" class="task__card__image" />
            </div>
            <div class="task__question">
              <p>Question from the oponent</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error distinctio nam quod corporis placeat, quam necessitatibus illum quo commodi minima non vitae dolor sed voluptatibus tempora quos earum delectus ea! Nulla sapiente, voluptates excepturi ab sint blanditiis harum dolor distinctio optio recusandae modi quibusdam soluta praesentium nisi similique magnam voluptatum aliquid non quis odit asperiores perferendis dignissimos. Sapiente, commodi, sed, ipsa, quam esse architecto inventore doloribus est amet alias iste!</p>
            </div>
          </div>
        </div>
        <div class="game_zone player">
          <div class="card">
            <img src="https://via.placeholder.com/280x460.png?text=Card #1" alt="Card 1" class="task__card__image" />
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/280x460.png?text=Card #2" alt="Card 2" class="task__card__image task__card__image--clicked" />
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/280x460.png?text=Card #3" alt="Card 3" class="task__card__image" />
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/280x460.png?text=Card #4" alt="Card 4" class="task__card__image" />
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/280x460.png?text=Card #5" alt="Card 5" class="task__card__image" />  
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
