DNAlist = []
DNA = ""
sortedObj = []
var topCodons = []
chartMaker = {}
function breakMaps(DNA) {
    var newList = [];
    var maplength = 3;
    var char = DNA.split("");
    var length = char.length;
    for (i = 0; i + 3 <= length; i++) {
        var DNAslice = char.slice(i, maplength);
        DNAlist.push(DNAslice);
        maplength += 1;
    }
    var newList = []
    DNAlist.forEach(function (group) {
        var joined = group.join("");
        newList.push(joined);
    })

    function createCounter() {
        dnaCounter = {};
        newList.forEach(function (nucleotide) {
            if (nucleotide in dnaCounter) {
                dnaCounter[nucleotide] = dnaCounter[nucleotide] += 1;
            } else {
                dnaCounter[nucleotide] = 1;
            }
        })
    }
    return createCounter();

} 
function sort(){
    breakMaps(DNA)
    for (key in dnaCounter){ 
        sortedObj.push([key, dnaCounter[key]]);
    }
    sortedObj.sort(function(a, b) {
        return b[1] - a[1];
    });
    function topTen(){
        sortedObj.forEach(function(codon){  
     if(sortedObj.indexOf(codon) < 10){ 
         topCodons.push(codon)
     }
        })
        topCodons.forEach(function(codon){
            chartMaker[codon[0]] = codon[1]
            })
            alert(chartMaker)
            return (chartMaker)
     }
   return (topTen()) 

}


function sickleCell() {
    breakMaps(DNA);
    var map = "GAG";
    for (key in dnaCounter) {
        if (key === map) {
            total = DNAlist.length
            var proportion = parseFloat((dnaCounter[key]) / total)
            var percentage = proportion * 100
            var result = Math.round(percentage)
            sort()
            alert(result + "%")
        }
    }
    
    return (result)
}
function cystic() {
    breakMaps(DNA);
    var map = "TTT";
    var map2 = "TTC";
    for (key in dnaCounter) {
        if (key === map) {
            total = DNAlist.length;
            var proportion = parseFloat((dnaCounter[value]) / total);
            var percentage = proportion * 100;
            var result = Math.round(percentage);
            alert(result);

        } else if (key === map2) {
            total = DNAlist.length;
            var proportion = parseFloat((dnaCounter[key]) / total);
            var percentage = proportion * 100;
            var result = Math.round(percentage);
            alert(result);
        }
        return (result);
    }
}
    function fragilo() {
        breakMaps(DNA);
        var map = "CGG";
        for (key in dnaCounter) {
            if (key === map) {
                total = DNAlist.length;
                var proportion = parseFloat((dnaCounter[key]) / total);
                var percentage = proportion * 100;
                var result = Math.round(percentage);
                alert(result);
            }
        }
        return (result);
    }
    function tay() {
        breakMaps(DNA);
        var map = "CAA";
        for (key in dnaCounter) {
            if (key === map) {
                total = DNAlist.length;
                var proportion = parseFloat((dnaCounter[key]) / total);
                var percentage = proportion * 100;
                var result = Math.round(percentage);
                alert(result);
            }
        }
        return (result);
    }

    $(document).ready(function () {
    
        $("#file").submit(function (event) {
            event.preventDefault();
            DNA = DNA + document.getElementById("sequence").value;
            alert(DNA);
            return (DNA);
        }
        )
        $("#sickleCell").click(function (event) {
            event.preventDefault
            sickleCell()
        })
        $("#cystic").click(function (event) {
            event.preventFunction
            cystic()
        })

        $("#fragilo").click(function (event) {
            event.preventDefault
            fragilo()
        })

        $("#tay").click(function (event) {
            event.preventDefault
            tay()
        })

    })
