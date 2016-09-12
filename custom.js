sTarget = 'this is a test';

var iMaxFitness = 0;
var aRecordOutput = [];

var aSpawningPool = [];

var loop = function(){
    // create population
    var population = [];
    for (var i = 0; i < 100; i++){
        population[i] = new Monkey(aSpawningPool);
    }

    // generation phase
    var aOutput = [];
    for (var i = 0; i < population.length; i++){
        population[i].produceLetters();
        population[i].calculateFitness();
        
        aOutput.push(population[i].letters.join('') + ' : ' + population[i].fitness + '%');
    }
    $('.output').html(aOutput.join('<br />'))
    
    // selection phase
    for (var i = 0; i < population.length; i++){
        if (population[i].fitness > iMaxFitness){
            iMaxFitness = population[i].fitness;
            aRecordOutput = population[i].letters;
        }
    }
    $('.record').html('Record: ' + aRecordOutput.join('') + ' at ' + iMaxFitness + '%');
    
    aSpawningPool = [];
    for (var i = 0; i < population.length; i++){
        for (var j = 0; j < population[i].fitness; j++){
            aSpawningPool.push(population[i].letters);
        }
    }
}
    
setInterval(loop, 50);


$('.do').click(function(e){
    e.preventDefault();
    sTarget = $('input[type="text"]').val();
    iMaxFitness = 0;
    aRecordOutput = [];
    aSpawningPool = [];
})