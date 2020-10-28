const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("enter"),
    CHEST: Symbol("open"),
    DOLL: Symbol("out"),
    LOOK: Symbol("look"),
    SOUND: Symbol("sound"),
    KITCHEN: Symbol("kitchen"),

});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You were playing truth and dare with friends, you got dare to go in this old haunted house for 10 minutes. Do you want to GO for it or NO?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("no")){
                    sReply = "Everyone has completed their dares, your friends will be disappointed from you. So you want to GO?";
                }else{
                    sReply ="When you go towards the house, the enter door opens by itself! You are scared, do you still want to ENTER the house or NO?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("enter")){
                    sReply = "The door got closed and locked up! You see an old telephone and a treasure chest, do you CALL your friends or OPEN the chest?"
                    this.stateCur = GameState.CHEST;
                }else{
                    sReply = "Everyone has completed their dares, your friends will be disappointed from you. So you want to GO?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.CHEST:
                if(sInput.toLowerCase().match("open")){
                    sReply = "You found an old toy doll in the chest, Do you want to take it OUT or LEAVE?";
                    this.stateCur = GameState.DOLL;

                }
                else if(sInput.toLowerCase().match("call")){
                    sReply = "HAHAHA! Do you really think that phone will work in a haunted house, OPEN chest?";
                    this.stateCur = GameState.CHEST;

                }
                else{
                    sReply = "Everyone has completed their dares, your friends will be disappointed from you. So you want to CALL or OPEN?";
                    this.stateCur = GameState.CHEST;
    
                }
                break;
            case GameState.DOLL:
                if(sInput.toLowerCase().match("out")){
                    sReply = "When you took out the doll, you heard someone coming from behind! LOOK back or IGNORE.";
                    this.stateCur = GameState.LOOK;
                }else{
                    sReply = "The treasure chest can be profitable! OPEN?";
                    this.stateCur = GameState.CHEST;
                }
                case GameState.LOOK:
                if(sInput.toLowerCase().match("look")){
                    sReply = "You saw nothing, you are frightened, do you want to follow the SOUND path or NOT?";
                    this.stateCur = GameState.SOUND;
                }else{
                    sReply = "It can be a ghost, do you want to LOOK?";
                    this.stateCur = GameState.LOOK;
                }
                case GameState.SOUND:
                if(sInput.toLowerCase().match("sound")){
                    sReply = "The sound is coming from KITCHEN!";
                    this.stateCur = GameState.KITCHEN;
                }else{
                    sReply = "It can be a ghost, do you want to follow the SOUND?";
                    this.stateCur = GameState.SOUND;
                }
                case GameState.KITCHEN:
                    if(sInput.toLowerCase().match("kitchen")){
                        sReply = "You saw an old man walking, say HELLO or HIDE";
                        this.stateCur = GameState.HELLO;
                    }else{
                        sReply = "Maybe someone can help you, go to KITCHEN?";
                        this.stateCur = GameState.KITCHEN;
                }
                case GameState.HELLO:
                    if(sInput.toLowerCase().match("hello")){
                        sReply = "Old man: It is more than 10 minutes! HAHAHAHA! Shots his Gun!";
                        this.stateCur = GameState.HELLO;
                    }else{
                        sReply = "Communication can help you to get out! Say HELLO to the man.";
                        this.stateCur = GameState.HELLO;
                }
        }
        return([sReply]);
    }
}