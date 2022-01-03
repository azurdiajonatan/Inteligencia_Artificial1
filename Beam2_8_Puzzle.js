// MIT License
// Copyright (c) 2021 Luis Espino

function heuristic(start, end, h) {
	if (h == 1) {
		var tiles_out = 0
		for (var i = 0; i < start.length; i++) {
			if (start[i] != end[i] && start[i] !== '0') tiles_out++
		}
		return tiles_out
	} else if (h == 2) {
		var mht = 0 //Manhattan value
		for (var i = 0; i < start.length; i++) {
			if (start.substring(i, i + 1) !== '0')
			mht += Math.abs(i - end.indexOf(start.substring(i, i + 1)))
		}
		return mht
	}
}

function successors(actual, new_array, h_value) {
	var s = [];
    var result = [];
    var array = actual[0];
    var init = array.indexOf("0");

    switch(init){
        case 0:
            //0xx
            //xxx
            //xxx
            result.push(movement(array,init,1)); 
            result.push(movement(array,init,3));
            break;
        case 1:
            //x0x
            //xxx
            //xxx
            result.push(movement(array,init,0));
            result.push(movement(array,init,2));
            result.push(movement(array,init,4));
            break;
        case 2:
            //xx0
            //xxx
            //xxx
            result.push(movement(array,init,1));
            result.push(movement(array,init,5));
            break;

        case 3:
            //xxx
            //0xx
            //xxx
            result.push(movement(array,init,0));
            result.push(movement(array,init,4));
            result.push(movement(array,init,6));
            break;
        case 4:
            //xxx
            //x0x
            //xxx
            result.push(movement(array,init,1));
            result.push(movement(array,init,5));
            result.push(movement(array,init,3));
            result.push(movement(array,init,7));
            break;
        case 5:
            //xxx
            //xx0
            //xxx
            result.push(movement(array,init,2));
            result.push(movement(array,init,4));
            result.push(movement(array,init,8));
            break;

        case 6:
            //xxx
            //xxx
            //0xx
            result.push(movement(array,init,3));
            result.push(movement(array,init,7));
            break;

        case 7:
            //xxx
            //xxx
            //x0x
            result.push(movement(array,init,4));
            result.push(movement(array,init,6));
            result.push(movement(array,init,8));
            break;

        case 8:
            //xxx
            //xxx
            //xx0
            result.push(movement(array,init,5));
            result.push(movement(array,init,7));
            break;
    }
    result.forEach((array_) => {
        s.push([array_, heuristic(array_,new_array,h_value),inc()]);
    });
    s = s.sort((a, b) => a[1] - b[1]);
    s = s.slice(0,2);
	return s
}

function movement(actual, x, index){
    var array_values = actual.split("");
    var value = array_values[index];
    array_values[x] = value;
    array_values[index] = "0";
    return array_values.join("");
}

function bestfirst(start, end, h){
	var cont = 0
	var dot = '{'
	var list = [[start,heuristic(start, end, h),inc()]];
	dot+=list[0][2]+' [label="'+list[0][0]+'"];'
	while (list.length > 0){		
		var current = list.shift();
		if (current[0] == end) {			
			dot += '}'
			return dot
		}		
		var temp = successors(current, end, h);
		//temp.reverse();
		temp.forEach(val => dot+=val[2]+' [label="'+val[0]+'"];'+current[2]+'--'+val[2]+' [label="'+val[1]+'"] ;')
		list = list.concat(temp);
		list = list.sort( function(a,b) { return a[1] - b[1] });
		cont++
		if (cont > 100) {
			alert("The search is looped!")
			dot += '}'
			return dot
		}
	}
	dot += '}'
	return dot
}

var id = 1
function inc() {
    return id++
}

function puzzle(){
    var nodes = prompt(
		"Ingrese matriz inicial y valor de heuristica (1 o 2) separados por un espacio, por ejemplo: 123046758 2"
	);
	if (nodes == null || nodes == "") nodes = "124637508 2";
	nodes = nodes.split(" ");
	return bestfirst(nodes[0], "123456780", nodes[1]);
}