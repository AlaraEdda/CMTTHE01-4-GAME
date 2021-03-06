
//Alle schermen worden hierin opgeroepen.
class Screens {
    private screen: StartScreen | Playscreen | GameOverScreen

    private container: HTMLElement
    private background : HTMLElement                                           
        
    constructor() {
        
        console.log("ik ben een screens instance");

        //Creert achtergrond voor alle screens hetzelfde.
        this.background = document.createElement("background")            
        document.body.appendChild(this.background)

        //Een lege container
        this.container = document.createElement("game")
        document.body.appendChild(this.container)

        //Variabel "Screen" aanmaken die verwijst naar statscreen.ts class
        this.screen = new StartScreen(this)
    }

    //Word hiernaar toe gestuurd via startscreen.ts
    //Richt je door naar playsreen.ts
    public showPlayScreen(){
     
        //"Start-Text" van startscreen.ts word weggehaald uit container.
        this.container.innerHTML = ""
        
        // let bg = document.createElement('background');
        // this.container.appendChild(bg);
        
        //"This" is een instance. Doorgestuurd naar "main.ts"
        this.screen = new Playscreen(this)
    }

    //Word afgespeeld wanneer playscreen.ts is uitgespeeld
    public showEndScreen(){
        //"Ballonnen", "score", "timer" van playscreen.ts word weggehaald uit container.
        this.container.innerHTML = ""

        this.screen = new GameOverScreen(this)
        //Neemt "score" parameter in zich mee van playscreen.ts
        //Gaat met deze functie naar gameover.ts
       // this.screen = new GameOverScreen(5)
    }

} 

//Laat venster = new game
window.addEventListener("load", () => {
    console.log("create new screens");
    new Screens()
})
