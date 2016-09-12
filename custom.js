var sTarget = 'shebek';

console.log('start')

var loop = function(){
    // create population
    var population = [];
    for (var i = 0; i < 20; i++){
        population[i] = new Monkey(sTarget.length);
    }
    
    var aOutput = [];
    for (var i = 0; i < population.length; i++){
        aOutput.push(population[i].produceLetters())
        population[i] = new Monkey(sTarget.length);
    }
    
//    console.log(output)
    $('.output').html(aOutput.join('<br />'))
}
    
setInterval(loop, 1000)    


