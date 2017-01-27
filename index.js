/*
	エレメントを作るぞ

	引数
		1: tagname
		2...:
			object:
				keyが文字列ならそのままsetAttribute(key, value)にする。
				keyが文字列でないならelement.key = valueとする。
				keyがclassで、既にstringのvalueが設定されている場合はスペースを挟んで追記する。
				keyがstyleで、既にstringのvalueが設定されている場合は追記する。
			string: textnode
			node: insert
*/

function makeElement(tagName, ...args){
	const doc = document;
	if(typeof tagName!=='string'){
		throw new TypeError('Invalid argument: 1');
	}
	const element = doc.createElement(tagName);
	args.forEach( (arg, index)=>{
		if(typeof arg==='string'){
			element.appendChild( doc.createTextNode(arg) );

		}else if( arg instanceof Node ){
			element.appendChild(arg);

		}else if(arg instanceof Object){
			for(let [key, value] of Object.entries(arg)){
				if(key==='class' && typeof value==='string' && element.className!==''){
					element.className += ` ${value}`;
				}else if(key==='style' && typeof value==='string' && element.getAttribute('style')){
					const setValue = element.getAttribute('style') + ` ${value}`;
					element.setAttribute('style', setValue);
				}else if(typeof value==='string'){
					element.setAttribute(key, value);
				}else{
					element[key] = value;
				}
			}

		}else{
			throw new TypeError(`Invalid argument: ${index+1}`);
		}
	});
	return element;
}

export default makeElement;
