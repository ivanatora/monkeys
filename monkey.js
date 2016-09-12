function Monkey(aGenePool){
    this.letters = [];
    this.fitness = 0;
//    this.gene_pool = aGenePool;
    
    this.produceLetters = function(){
        this.letters = [];
//        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
        var possible = "abcdefghijklmnopqrstuvwxyz ";
        
        if (typeof aGenePool == 'undefined' || aGenePool.length == 0){
            for (var i = 0; i < sTarget.length; i++){
                var char = possible.charAt(Math.floor(Math.random() * possible.length));
                this.letters.push(char);
            }
        }
        else {
            var idx1 = Math.floor(Math.random()*aGenePool.length);
            var aParentGenes1 = aGenePool[idx1];
            var idx2 = Math.floor(Math.random()*aGenePool.length);
            var aParentGenes2 = aGenePool[idx2];
            var iMidPoint = Math.round(Math.random() * sTarget.length);
            for (var i = 0; i < iMidPoint; i++){
                this.letters[i] = aParentGenes1[i];
            }
            for (var i = iMidPoint; i < sTarget.length; i++){
                this.letters[i] = aParentGenes2[i];
            }
            
            // mutation phase
            if (Math.random() * 100 < iMutationRate){
                var iMutationIdx = Math.round(Math.random() * sTarget.length);
                this.letters[iMutationIdx] = possible.charAt(Math.floor(Math.random() * possible.length));
            }
        }
        return this.letters.join('');
    }
    
    this.calculateFitness = function(){
        var fitness = 0;
        for (var i = 0; i < this.letters.length; i++){
            if (this.letters[i] === sTarget[i]) fitness++;
        }
        fitness = (fitness / sTarget.length) * 100;
        fitness = Math.round(fitness);
        
        this.fitness = fitness;
    }
}
