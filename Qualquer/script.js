var mytime;
function addBola()
{
	//var color = randomColor();

	var bola1 = document.createElement("div"); // cria a tag <div></div>
	
	bola1.setAttribute("class","bola"); // define class="bola" para a <div class="bola"
	
	var p1 = Math.floor(Math.random()*1300); // atribui valor para posição left
	var p2 = Math.floor(Math.random()*550); // atribui valor para posição top

	
	var color = ["orange","blue","yellow","red", "purple", "pink", "black","green","00ff00","ff5311","d455a0"];
	var a = Math.floor(Math.random() * 11)
	bola1.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color:"+color[a]);
	//bola1.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color:"+color); // define style=left:p1;top:p2;background-color:color
	
	bola1.setAttribute("onclick","estourarBola(this)");
	bola1.setAttribute("oncontextmenu","return parar()");  // botão direito do mouse

	
	document.body.appendChild(bola1); // adiciona elemento <div> a tag <body>

}
function estourarBola(obj)
{
	document.body.removeChild(obj);
}
function iniciar() 
{
    mytime=setInterval(addBola,400);
}
function parar() 
{
    clearInterval(mytime);
    return false;
}

function randomColor() {
	var x = 0;
	while(x.toString().length < 6) {
		// Math.floor() - arredonda
		// Math.random() * n - número aleatório n
		x = Math.floor(Math.random() * Math.pow(10, 6)); /*  "Math.pow" é uma função matemática onde você 
		                                                      insere um número e ele potencializa pelo segundo, 
		                                                      no caso fiz 10 elevado à 6 (10^6) para que gerasse 
		                                                      um número de cor válido */
	}
	return x;
}S