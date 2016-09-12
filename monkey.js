function Monkey(fingers){
    this.iFingers = 10;
    this.letters = [];
    
    if (typeof fingers != 'undefined') this.iFingers = parseInt(fingers);
    
    this.produceLetters = function(){
        this.letters = [];
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        for (var i = 0; i < this.iFingers; i++){
            var char = possible.charAt(Math.floor(Math.random() * possible.length));
            this.letters.push(char);
        }
        return this.letters.join('');
    }
}
