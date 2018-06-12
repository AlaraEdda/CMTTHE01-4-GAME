class GameOverScreen {
    //game: Game

    private div: HTMLElement
    screen: Screens
    score: number

    constructor(s: Screens) {
        this.screen = s

        //Lege div is gecreeerd.
        this.div = document.createElement("start")

        //Een container is aangemaakt
        let container = document.getElementsByTagName("game")[0]!

        //"Game-over"-text verwerkt in container
        container.appendChild(this.div)

        //Click voor nieuw spel
        this.div.addEventListener("click",()=> this.Clicked())
        //Lege div gevuld met "Game over"
        this.div.innerHTML = "Game Over Restart"

    }

    public update(): void {

    }

    private Clicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts
        //Waarna je doorgestuurd word naar de showPlayScreen() functie.
        this.screen.showPlayScreen()
    }
}