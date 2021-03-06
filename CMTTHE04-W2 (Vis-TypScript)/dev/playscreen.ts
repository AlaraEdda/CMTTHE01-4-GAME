class Playscreen {

    private screen : Screens 
    private timer : Timer
    private score : Score
    private balloon:Balloon[] = []
    private sound: any

    constructor(s:Screens) {
        //Screen moet een waarde hebben
        this.screen = s
    
        this.timer = new Timer()                //Maak Timer aan van Timer class.
        
        this.score = new Score()                //Maakt een nieuw Scoreboard aan.

        //Push aantal Balloon
        for (let i = 0; i < 30; i++) {
           this.balloon.push(new Balloon(this.score))
        }

        this.sound = new Howl({
            src: ['./sounds/song.mp3']
        });

        this.sound.play();


       this.gameLoop()


    }
    
    private gameLoop(){
        //Update elke balloon die aangemaakt word.
        for(let b of this.balloon){
            //update staat in balloon.ts
            b.update()
        }

        //Update de timer die staat in time.ts
        this.timer.update()

        //Upate de Scorebord die staat in score.ts
        this.score.update()

        if(this.timer.finished == true) {
            
            this.sound.stop();
            this.screen.showEndScreen()
            // roep de gameover functie aan van screens

        } else {
            //Herhaal deze functie.
            requestAnimationFrame(()=>this.gameLoop())
        }
    }   
}