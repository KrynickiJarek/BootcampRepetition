const stairs = {
    step: 0,
    up: function(){
        this.step += 1;
    },
    down: function(){
        this.step -= 1;

    },
    printStep: function(){
        console.log(`Jesteś na ${this.step} stopniu`);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();