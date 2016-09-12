sTarget = 'this is a test';
iMutationRate = 1; //%
iPopulationSize = 200;
bFinished = false;

var setup = function(){
    iMaxFitness = 0;
    aRecordOutput = [];
    aSpawningPool = [];
    iPopulationNumber = 0;
    bFinished = false;
}

setup();

var loop = function(){
    if (bFinished) return;
    
    // create population
    var population = [];
    for (var i = 0; i < iPopulationSize; i++){
        population[i] = new Monkey(aSpawningPool);
    }

    // generation phase
    var aOutput = [];
    for (var i = 0; i < population.length; i++){
        population[i].produceLetters();
        population[i].calculateFitness();
        
        aOutput.push('monkey ' + i + ': '+population[i].letters.join('') + ' : ' + population[i].fitness + '%');
    }
    $('.output').html(aOutput.join('<br />'))
    
    // selection phase
    for (var i = 0; i < population.length; i++){
        if (population[i].fitness > iMaxFitness){
            iMaxFitness = population[i].fitness;
            aRecordOutput = population[i].letters;
        }
    }
    $('.record').html(aRecordOutput.join('') + ' at ' + iMaxFitness + '%');
    if (iMaxFitness == 100){
        bFinished = true;
    }
    
    aSpawningPool = [];
    for (var i = 0; i < population.length; i++){
        for (var j = 0; j < population[i].fitness; j++){
            aSpawningPool.push(population[i].letters);
        }
    }
    
    iPopulationNumber++;
    $('.population_number').html(iPopulationNumber);
}
    
setInterval(loop, 50);


$('.do').click(function(e){
    e.preventDefault();
    sTarget = $('input[name="target"]').val();
    iMutationRate = parseInt($('input[name="mutation"]').val());
    if (isNaN(iMutationRate)){
        iMutationRate = 1;
    }
    
    iPopulationSize = parseInt($('input[name="population"]').val());
    if (isNaN(iPopulationSize)){
        iPopulationSize = 200;
    }
    
    setup();
})