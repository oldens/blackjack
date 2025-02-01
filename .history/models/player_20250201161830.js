class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
        this.handContainer = this.createHandContainer();
        this.id='player'+Symbol().toString().slice(7);  // Generate a unique id
    }

    createHandContainer() {
        const handContainer = document.createElement("div");
        handContainer.classList.add("hand-container");
        handContainer.style.display = "flex";
        handContainer.style.flexDirection = "row";
        handContainer.style.margin = "10px";
        handContainer.id = this.id;
        const userScore=document.createElement("div");
        userScore.id = this.id + "_score";
        userScore.innerHTML = this.name + " Score: " + this.score;
        handContainer.appendChild(userScore);
        return handContainer;
    }


    addCard(card) {
        this.hand.push(card);
        this.handContainer.appendChild(card.html);
        this.score += card.value;
        card.show();
    }

    reset() {
        this.hand = [];
        this.score = 0;
        this.handContainer.innerHTML = "";
    }

   
}

export default Player;