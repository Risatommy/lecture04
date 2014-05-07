var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "")
	//動作が終わった後、アニメーション開始！ボタンを押すと元の位置にフォクすけが戻り画面に表示され、アニメーションが開始される。
	//

};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.addEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "flip");

	//フォクすけくんの直線移動(5s)が終了したら回転する
	//

};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	// アニメーション開始！ボタンを押すとフォクすけくんが動き始める
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);

//アニメーション開始！ボタンを押すことができる
//

