var a = document.querySelector('#a');
var b = document.querySelector('#b');
var c = document.querySelector('#c');
var d = document.querySelector('#d');
var e = document.querySelector('#e');
var f = document.querySelector('#f');
var g = document.querySelector('#g');
var h = document.querySelector('#h');
var i = document.querySelector('#i');
var j = document.querySelector('#j');
var k = document.querySelector('#k');
var l = document.querySelector('#l');
var m = document.querySelector('#m');
var n = document.querySelector('#n');
var o = document.querySelector('#o');
var p = document.querySelector('#p');

var num = {
    "one" : 1,
    "t" : 2,
    "th" : 3,
    "fo" : 4,
    "f" : 5,
    "s" : 6,
    "se" : 7,
    "e" : 8,
    "n" : 9,
    "z" : 0,
    "ad" : '+',
    "su" : '-',
    "d" : '/',
    "mu" : '*',
    
}

var a1 = num['one'];
var b2 = num['t'];
var b3 = num['th'];
var c4 = num['fo'];
var c5 = num['f'];
var c6 = num['s'];
var d7 = num['se'];
var e8 = num['e'];
var f9 = num['n'];
var ze = num['z'];
var p = num['ad'];
var s = num['su'];
var m = num['mu'];
var di = num['d']; 





var dis =document.querySelector('#lcd');






a.onclick = function() {
    
    dis.value += a1;
    
}
b.onclick = function() {
    
    dis.value += b2;
}
c.onclick = function() {
    
    dis.value += b3;
}

e.onclick = function() {
    
    dis.value += c4;
}

f.onclick = function() {
    
    dis.value += c5;
}

g.onclick = function() {
    
    dis.value += c6;
}

i.onclick = function() {
    
    dis.value += d7;
}

j.onclick = function() {
    
    dis.value += e8;
}

k.onclick = function() {
    
    dis.value += f9;
}

n.onclick = function() {
    
    dis.value += ze;
}
d.onclick = function() {
    
    dis.value += p;
}
h.onclick = function() {
    
    dis.value += s;
}
l.onclick = function() {
    
    dis.value += m;
}

o.onclick = function() {
    
    dis.value += di;
}
poo.onclick = function() {
    
    dis.value = eval(dis.value);
}

munt.onclick = function() {
    dis.value = ''
}

