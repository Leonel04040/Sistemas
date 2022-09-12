bin = true;
pode = true;

function mododecbin()
{
	
	let modo = document.getElementById('modo');
	if (modo.value == "Binario") 
	{
		bin = false;
		modo.value = "Decimal";
	}else
	{
		bin = true;
		modo.value = "Binario";
	}
	
}
function calcula()
{

	let um = document.getElementById('um');
	let dois = document.getElementById('dois');
	let tres = document.getElementById('tres');
	let quatro = document.getElementById('quatro');
	pode = true;
	if (bin == true) 
	{
		let primeira = (um.value).toString();
		let segundo = (dois.value).toString();
		let terceiro = (tres.value).toString();
		let quarto = (quatro.value).toString();
		if (primeira.length == 8 && segundo.length == 8 && terceiro.length == 8 && quarto.length == 8) 
		{
			
			for (let i = 0; i < 8; i++) 
			{
				if((primeira[i]!='1' && primeira[i]!='0') || (segundo[i]!='1' && segundo[i]!='0') || (terceiro[i]!='1' && terceiro[i]!='0') ||(quarto[i]!='1' && quarto[i]!='0'))
				{
					pode = false;
					
				}		
			}

			if (pode == false) 
			{
				alert("Números 0 e 1 permitidos!");
			}else
			{
				resposta(primeira,segundo,terceiro,quarto);
			}
		}else
		{
			alert("O tamaño debe ser 8 en cada uno!");
		}
	}else
	{

		let validapri = parseInt(um.value);
		let validaseg = parseInt(dois.value);
		let validater = parseInt(tres.value);
		let validaquar = parseInt(quatro.value);

		if ((validapri >=0 && validapri <=255) && (validaseg >=0 && validaseg <=255) && (validater >=0 && validater <=255) && (validaquar >=0 && validaquar <=255))
		{
			let primeira = decbin(validapri).toString();
			let segundo = decbin(validaseg).toString();
			let terceiro = decbin(validater).toString();
			let quarto = decbin(validaquar).toString();

			resposta(primeira,segundo,terceiro,quarto);

		}else
		{
			alert("Cada parte debe estar entre valores de 0 a 255");
		}
	}
}
function resposta(primeira,segundo,terceiro,quarto)
{
	let subredeImprime = document.getElementById('subrede');
	let subdecImprime = document.getElementById('subdec');
	let masc = document.getElementById('masc');
	let mascSub = document.getElementById('mascSub');
	let rede = document.getElementById('rede1');
	let broad = document.getElementById('broad1');
	let primHost = document.getElementById('primeiro1');
	let ultHost = document.getElementById('ultimo1');
	let qtsHosts = document.getElementById('qtHost');
	classe(primeira);
	let valuem = parseInt(masc.options[masc.selectedIndex].value);
	let valuesub = parseInt(mascSub.options[mascSub.selectedIndex].value);

	if (valuem!=0) 
	{						
		let IP = primeira + segundo + terceiro + quarto;
		
		let endRede = enderecorede(IP, valuem);
		rede.innerHTML = ponto(endRede) + " ------------------ " + bindec(endRede);
		let primeiroHost = primeiroEnd(endRede);
		primHost.innerHTML = ponto(primeiroHost) + " ------------------ " + bindec(primeiroHost);
		let endBroad = enderecobroad(IP, valuem);
	    broad.innerHTML = ponto(endBroad) + " ------------------ " + bindec(endBroad);

		let ultimoHost = ultimoEnd(endBroad);
		ultHost.innerHTML = ponto(ultimoHost) + " ------------------ " + bindec(ultimoHost);

		let qts = qtsHost(32-valuem);
		qtsHosts.innerHTML = qts-2 +`</br>` +`</br>`;
		
		if (valuesub!=0) 
		{		
			if (valuesub >= valuem) 
			{

				
				let imprime = '', imprimedec = '';
				
				
				endRede = enderecorede(IP, valuem);
				let endRedeSub = enderecorede(endRede, valuesub).toString();
				imprime = imprime + "Endereço subrede " + ponto(endRedeSub) +`</br>` +`</br>`;
				imprimedec = imprimedec + "Endereço subrede " + bindec(endRedeSub).toString() +`</br>` +`</br>`;
				primeiroHost = primeiroEnd(endRedeSub).toString();
			    imprime = imprime + "Primeiro endereço de host " + ponto(primeiroHost) +`</br>` +`</br>`;
				imprimedec = imprimedec + "Primeiro endereço de host " + bindec(primeiroHost).toString() +`</br>` +`</br>`;
				endBroad = enderecobroad(endRedeSub, valuesub).toString();

				ultimoHost = ultimoEnd(endBroad).toString();
				
			    imprime = imprime + "Último endereço de host " + ponto(ultimoHost) +`</br>` +`</br>`;
		   	    imprime = imprime + "Endereço de broacast " + ponto(endBroad) +`</br>` +`</br>`;
				
				imprimedec = imprimedec + "Último endereço de host " + bindec(ultimoHost).toString() +`</br>` +`</br>`;
				imprimedec = imprimedec + "Endereço de broacast " + bindec(endBroad).toString() +`</br>` +`</br>`;
				let qts = parseInt(qtsHost(32-valuesub));
				let qtsTotal = parseInt(qtsHost(32 -valuem));
				
				let numSubredes = qtsTotal/qts;
				let  q = '';
				qts = qts-2;
				q = qts.toString();
				imprime = imprime + "Quantidade de host disponível na subrede " + q +`</br>` +`</br>`;
				imprime = imprime +`</br>` +`</br>`; 

				imprimedec = imprimedec + "Quantidade de host disponível na subrede "  + q +`</br>` +`</br>`;
				imprimedec = imprimedec +`</br>` +`</br>`; 

				numSubredes = numSubredes - 1;
				
				for (let i = 0; i < numSubredes; i++) 
				{	
					console.log(endBroad)					
					endRedeSub = primeiroEnd(endBroad, valuesub).toString();
					imprime = imprime + "Endereço subrede" + ponto(endRedeSub) +`</br>` +`</br>`;
					imprimedec = imprimedec + "Endereço subrede" + bindec(endRedeSub).toString() +`</br>` +`</br>`;
					
					primeiroHost = primeiroEnd(endRedeSub).toString();
					imprime = imprime + "Primeiro endereço de host " + ponto(primeiroHost) +`</br>` +`</br>`;
					imprimedec = imprimedec + "Primeiro endereço de host " + bindec(primeiroHost).toString() +`</br>` +`</br>`;

					endBroad = enderecobroad(endRedeSub, valuesub).toString();

					ultimoHost = ultimoEnd(endBroad).toString();
				
					imprime = imprime + "Último endereço de host " + ponto(ultimoHost) +`</br>` +`</br>`;
		   			imprime = imprime + "Endereço de broacast " + ponto(endBroad) +`</br>` +`</br>`;

		   			imprimedec = imprimedec + "Último endereço de host " + bindec(ultimoHost).toString() +`</br>` +`</br>`;
					imprimedec = imprimedec + "Endereço de broacast " + bindec(endBroad).toString() +`</br>` +`</br>`;
	
					imprime = imprime + "Quantidade de host disponível na subrede " + q +`</br>` +`</br>`;
					imprime = imprime +`</br>` +`</br>`; 
					imprimedec = imprimedec + "Quantidade de host disponível na subrede "  + q +`</br>` +`</br>`;
					imprimedec = imprimedec +`</br>` +`</br>`;		
				}
				
				subredeImprime.innerHTML = imprime;
				subdecImprime.innerHTML = imprimedec;
								
			}else
			{
				alert("Mais endereço do que você tem");
			}
		}
	}			

}
function classe(primeira)
{
	let atrclass = document.getElementById('letra');

	if (primeira[0] == '0')
	{
		atrclass.innerHTML = "A";
	}else if(primeira[0] == '1' && primeira[1] == '0')
	{
		atrclass.innerHTML = "B";
	}
	else if(primeira[0] == '1' && primeira[1] == '1' && primeira[2] == '0')
	{
		atrclass.innerHTML = "C";
	
	}else if (primeira[0] == '1' && primeira[1] == '1' && primeira[2] == '1' && primeira[3] == '0') 
	{
		atrclass.innerHTML = "D";
	}else
	{
		atrclass.innerHTML = "E";
	}

}
function enderecorede(IP, valuem1)
{
	let endRede1 = '';
						
	for (let i = 0; i < valuem1; i++) 
	{
		endRede1 = endRede1 + IP[i];
	}	

	for (let i = valuem1; i < 32; i++) 
	{
		endRede1 = endRede1 + '0';
	}
	return endRede1;
}
function enderecobroad(IP, valuem1)
{
	let endBroad1 = '';
						
	for (let i = 0; i < valuem1; i++) 
	{
		endBroad1 = endBroad1 + IP[i];
	}	

	for (let i = valuem1; i < 32; i++) 
	{
		endBroad1 = endBroad1 + '1';
	}	

	return endBroad1;
}
function primeiroEnd(rede)
{
	let sobe = 1, primeiro1 = '';

	for (let i = 31; i >= 0; i--) 
	{
		if (sobe == 1) 
		{
			if (rede[i] == '1') 
			{
				primeiro1 = '0' + primeiro1;
			
			}else
			{
				primeiro1 = '1' + primeiro1;
				sobe = 0;
			}
		}else
		{
			primeiro1 = rede[i] + primeiro1;
		}
	}
	return primeiro1;
}
function ultimoEnd(broacast)
{
	let ultimo = '';

	ultimo = '0';
	for (let i = 30; i >= 0; i--) 
	{
		ultimo = broacast[i] + ultimo;
	}
	return ultimo;
}
function qtsHost(valuem)
{
	let qts1 = 1, mult = 1;
	for (let i = 0; i < valuem; i++) 
	{
		qts1 = qts1 + mult;
		mult = mult * 2;
	}
	return qts1;
}
function decbin(num)
{
	let transformado = '';

	num = parseInt(num);
	while (num!=0)
	{
		transformado = (num%2).toString() + transformado;
		num = Math.trunc(num / 2);
	}

	let tam = 8 - transformado.length;

	for (let i = 0; i < tam; i++) 
	{
		transformado = '0' + transformado;
	}
	return transformado;
}
function bindec(num)
{
    
    let aux = '', resp= "";
    let n = 0, mult = 1;
    for (let i = 31; i >=0; i--) 
    {
        aux = num[i] + aux;    
        if ((i)%8 == 0) 
        {
            resp = parseInt(aux,2).toString() + "." + resp
            console.log(resp)
            aux = ""
        }
                 
    }

    return resp;
}
function ponto(bin)
{
	let resp = '';
	for (let i = 0; i < 32; i++) 
	{
		resp = resp + bin[i];
		if ((i+1)%8 == 0) 
		{
			resp = resp + '.';
		}	
	}
	return resp;
}
