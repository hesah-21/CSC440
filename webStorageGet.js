function getUserData() {

    if ('localStorage' in window && window['localStorage'] !== null) {

		const name = localStorage.getItem('name');
		const where = localStorage.getItem('where');
    const hobbie = localStorage.getItem('hobbie');

    var result = hobbie.split(",");
    var percent = 0;
    var length = result.length;

    for (var i = 0 ; i < length ; ++i){
      if (result[i] == 'Reading')
      percent+=25;

      if (result[i] == 'Drawing')
      percent+=25;

      if (result[i] == 'Shopping')
      percent+=25;

      if (result[i] == 'Listening to music')
      percent+=25;
    }

    if (where == "meme"){
      document.getElementById("ameme").setAttribute("src","i-have-no-idea-what-i-did-but-it-worked.jpg");
    }
    else if (where == "cv"){
      document.getElementById("acv").setAttribute("href","https://drive.google.com/open?id=1fNx2Iv2KDq5z3akaTw2d4iEGdXFXTMXn");
      var acv = document.getElementById("acv");
      var text = document.createTextNode("this is my cv");
      acv.appendChild(text);
    }

    const node = document.createElement("p");
    const br = document.createElement("br");
		const textnode1 = document.createTextNode("Hello " + name);
    const textnode2 = document.createTextNode ("our intrests match "+ percent +"% , I am also interested in " + hobbie);
		node.appendChild(textnode1);
    node.appendChild(br);
  	node.appendChild(textnode2);
		document.querySelector("#result").appendChild(node);

	} else {
		alert('Cannot store user preferences as your browser do not support local storage');
	}
}

getUserData();
