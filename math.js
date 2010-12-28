function format(num, digits) {
    e = Math.E;
    pi = Math.PI;
    if (!num) {
        return "0";
    } else if (num == pi) {
        return "π";
    } else if (num == e) {
        return "e";
    } else if (num % (pi / 4) == 0) {
        return (num / pi) + "π";
    } else if (num % (1 / 3) == 0) {
        return (num * 3) + "/3";
    } else if (num % (e / 4) == 0) {
        return (num / e) + "e";
    } else if(num!=1){
        if (( log(num)   )%1 == 0) {
            var exponent=log(num);
            var exptext="⁰¹²³⁴⁵⁶⁷⁸⁹";
            return "e"+((abs(exponent)<10)?((exponent<0?"⁻":"")+exptext[abs(exponent)]):"^"+exponent);
        }
    }
    if (digits === undefined) {
        return num.toString()
    }
    if (num.toPrecision) {
        if (Math.abs(num) < 0.0000001) {
            return "0.0000000";
        }
        return num.toPrecision(digits);
    }
    return num;
}



var c = 299792458;
var G = 6.67300e-11;
var m_e = 5.9742e24;
var m_m = 7.36e22;
var m_s = 1.98892e30;
var R_E = 6378100;
var r_e = 6378100;
var h = 6.626068e-34;
var log2pi = 1.8378770664093453;
var e = Math.E;
var pi = Math.PI;
var phi = (1 + Math.sqrt(5)) / 2;
var epsilon_0 = 8.85418782e-12;

var en = ["Massless void", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "aluminium", "Silicon", "Phosphorus", "Sulphur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirkonium", "Niobium", "Molybdaenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Hydrargyrum", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Ununnilium", "Unununium"];
var M = [0.0, 1.00794, 4.002602, 6.941, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9994, 20.1797, 22.98976928, 24.305, 26.9815386, 28.0855, 30.973762, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938045, 55.845, 58.933195, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.90585, 91.224, 92.90638, 95.96, 98, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.9054519, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145, 150.36, 151.964, 157.25, 158.92535, 162.5001, 164.93032, 167.259, 168.93421, 173.054, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 192.084, 196.966569, 200.59, 204.3833, 207.2, 208.980401, 210, 210, 220, 223, 226, 227, 232.03806, 231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 261, 262, 266, 264, 277, 268, 271, 272];
var symbol = ["Zero", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Te", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg"];


//Make the periodic table global
for (var index = 0; index < symbol.length; index++) {
    window[symbol[index]] = M[index];
}


//Basic math functions -> window (global)

var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var tg = Math.tan;
var exp = Math.exp;
var log = Math.log;
var ln = Math.log;
var abs = Math.abs;
var acos = Math.acos;
var asin = Math.asin;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var floor = Math.floor;
var max = Math.max;
var min = Math.min;
var random = Math.random;
var round = Math.round;
var sqrt = Math.sqrt;
var pow = Math.pow;


//sin^n (x)
function sin_n(n,x){return pow(sin(x),n);}
function cos_n(n,x){return pow(cos(x),n);}
function tan_n(n,x){return pow(tan(x),n);}
function cot_n(n,x){return pow(cot(x),n);}
function sec_n(n,x){return pow(sec(x),n);}
function csc_n(n,x){return pow(csc(x),n);}
function log_n(n,x){return pow(log(x),n);}
function ln_n(n,x){return pow(ln(x),n);}

function logb(b, v) {
    return ln(v) / ln(b);
}

function u(x) {
    //unit step function
    return (x>=0)?(x?1:0.5):(0);
}

function signum(x){
    return 2*u(x)-1;
}

function piecewise(cond, val, other) {
    if (cond) {
        return val;
    }
    return other;
}
function sinc(x) {
    if (x === 0) {
        return 1;
    }
    return sin(pi * x) / (pi * x);
}
function sec(x) {return 1 / (cos(x));}
function csc(x) {return 1 / (sin(x));}
function cosec(x) {return 1 / (sin(x));}
function cot(x) {return 1 / (tan(x));}
var ctg = cot;
var ctn = cot;

//Not so basic math

//Bell numbers
var blln = [1, 1, 2, 5, 15, 52, 203, 877, 4140, 21147, 115975, 678570, 4213597, 27644437, 190899322, 1382958545, 10480142147, 82864869804, 682076806159, 5832742205057, 51724158235372, 474869816156751, 4506715738447323];

//Riemann zeta function
function zeta(x) {
    if (x === 0) {
        return -0.5;
    } else if (x == 1) {
        return Infinity;
    } else if (x == 2) {
        return pi * pi / 6;
    } else if (x == 4) {
        return pi * pi * pi * pi / 90;
    } else if (x < 1) {
        return Infinity;
    }
    var sum = 4.4 * pow(x, -5.1);
    for (var npw = 1; npw < 10; npw++) {
        sum += pow(npw, -x);
    }
    return sum;
}

function Gamma(x) {
    if (x > 1.0) {
        return (exp(x * (ln(x) - 1) + 0.5 * (-ln(x) + log2pi) + 1 / (12 * x) - 1 / (360 * (x * x * x)) + 1 / (1260 * pow(x, 5)) - 1 / (1680 * pow(x, 7))));
    }
    if (x > -0.5) {
        return (1.0 + 0.150917639897307 * x + 0.24425221666910216 * pow(x, 2)) / (x + 0.7281333047988399 * pow(x, 2) - 0.3245138289924575 * pow(x, 3));
    }
    if (x < 0) {
        if (x == ~~x) {
            return;
        } else {
            return Math.PI / (Math.sin(Math.PI * x) * Gamma((1 - x)));
        }
    } else {
        return pow(x - 1, x - 1) * Math.sqrt(2 * Math.PI * (x - 1)) * exp(1 - x + 1 / (12 * (x - 1) + 2 / (5 * (x - 1) + 53 / (42 * (x - 1)))));
    }
}
function fact(ff) {
    if (ff === 0 || ff == 1) {
        return 1;
    } else if (ff > 0 && ff == ~~ff && ff < 15) {
        var s = 1;
        for (var nns = 1; nns <= ff; nns++) {
            s *= nns;
        }
        return~~s;
    } else if (ff != (~~ff) || ff < 0) {
        return Gamma(ff + 1);
    }
}
function bellb(x) {
    if (x == ~~x && x < blln.length) {
        return blln[x];
    } else {
        var sum = 0;
        for (var inj = 0; inj < 5; inj++) {
            sum += pow(inj, x) / fact(inj);
        }
        return sum / e;
    }
}



//Draw a dot instead of a line.
function pt(vx, vy) {
    if (vy === undefined) {
        return vx;
    }
    return {
        "x": vx,
        "y": vy
    };
}

// 'lvl'th derivative of g[ia](x) when x = 'x'

var difflevel = 0; //Used to prevent massive stacks in the recursive djkb()

function djkb(ia, lvl, x) {
    difflevel++;
    var res;
    if (difflevel > 8) {
        difflevel -= 1;
        return 0;
    }
    var h = 0.0001;
    if (lvl > 0) {
        res = (djkb(ia, lvl - 1, x + h) - djkb(ia, lvl - 1, x - h)) / (2 * h);
        difflevel -= 1;
        return res;
    }
    res = g[ia](x);
    difflevel -= 1;
    return res;
}












var latexchars={
'gt':">",
"left":"",
"right":"",
'ge':">=",
'lt':"<",
'le':"<=",
"infty":"∞",
"cdot":"*",
"frac":"",
"alpha":"α",
"beta":"β",
'gamma':"γ",
'delta':"δ",
'zeta':"ζ",
'eta':"η",
'theta':"θ",
'iota':"ι",
'kappa':"κ",
'mu':"μ",
'nu':"ν",
'xi':"ξ",
'omicron':"ο",
'rho':"ρ",
'sigma':"σ",
'tau':"τ",
'upsilon':"υ",
'chi':"χ",
'psi':"ψ",
'omega':"ω",
'phi':"ϕ",
"phiv":"φ",
"varphi":"φ",
"epsilon":"ϵ",
"epsiv":"ε",
"varepsilon":"ε",
"sigmaf":"ς",
"sigmav":"ς",
"gammad":"ϝ",
"Gammad":"ϝ",
"digamma":"ϝ",
"kappav":"ϰ",
"varkappa":"ϰ",
"piv":"ϖ",
"varpi":"ϖ",
"rhov":"ϱ",
"varrho":"ϱ",
"thetav":"ϑ",
"vartheta":"ϑ",
"pi":"π",
"lambda":"λ",
'Gamma':"Γ",
'Delta':"Δ",
'Theta':"Θ",
'Lambda':"Λ",
'Xi':"Ξ",
'Pi':"Π",
'Sigma':"Σ",
'Upsilon':"Υ",
'Phi':"Φ",
'Psi':"Ψ",
'Omega':"Ω",
"perp":"⊥",
",":" ",
"nabla":"∇",
"forall":"∀",
"sum":"∑",
"summation":"∑",
"prod":"∏",
"product":"∏",
"coprod":"∐",
"coproduct":"∐",
"int":"∫",
"integral":"∫"
};

//Compile: returns a function of ctx that plots the graph to ctx.
var obj={};
function simplify(e){
	var terms=[];
	for(var i=0;i<e.length;i++){
		if(((typeof e[i]) == "object") && e[i].length==1){
			alert("this code shouldn't be reached I think");
			e[i]=e[i][0];
		}
		if(e[i]=="+" || e[i]=="-"){
			
		}
		
	}
	return e;
}
function p(inp){
	var eq=[];
	e=inp.replace(/\s/g,"");
	e=e.replace(/([a-zA-Z])\(/g,"$1:(");
	while(  (e.indexOf("(")!=-1) && (e.indexOf(")")!=-1) ){
		e=e.replace(/\([\d\:\-\+\/\*\^a-zA-Z]+\)/g,function(n){
			var h=random_hash();
			obj[h]=p(n.substring(1,n.length-1));
			return "hash"+h+"hash";
		});
	}
	var op="+-/*^:";
	var terms=[];
	var last=0;
	for(var i=0;i<e.length;i++){
		if(op.indexOf(e[i])!=-1){
			terms.push(e.substring(last,i));
			terms.push(e[i]);
			last=i+1;
		}
	}
	terms.push(e.substring(last,e.length));
	for(var i=0;i<terms.length;i++){
		if(/^hash[a-z\d]{20}hash$/.test(terms[i])){
			terms[i]=obj[terms[i].substring(4,24)];
			//terms[i]="e";
		}
	}
	if(terms.length==1){
		//it's too simple. It could (and most likely is), the argument to a function.
		return terms[0];
	}else{
		return simplify(terms);
	}
	
}
function compile(n){
	obj={};
	/*
	
	operator precedence:
	 ()
	 ^
	 * /
	 + -
	  
	
	*/
	//parse
	var eq=p(n);
	//compile
	return function(ctx){
		
		
		
	};
	
	
}
