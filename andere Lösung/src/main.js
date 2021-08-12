class Main {
    backgroundmusic = new Audio('assets/backgroundmusic.mp3');
    background;
    crosshair;
    timer;
    gameended = -1
    src;

    constructor() {
        this.init();
        this.backgroundmusic.play()
    }

    init() {
        this.addBackground();
        this.loadcrosshair();
        this.timerstart();
        this.createHitCounter();
    }

    addBackground() {
        this.background = new Background('assets/mohrhuhnhaus2.png');
        this.background.show();
    }

    loadcrosshair(){
        this.crosshair = new Crosshair('assets/crosshair1.svg')
        this.crosshair.show();
    }

    timerstart(){
        this.Timer = new Timer
    }

    createHitCounter() {
        this.hitcounter = new Hitcounter();
    }
}