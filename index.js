/*
	エレメントを作るぞ
		引数
			1: タグ名
			2~: 属性の{key:value} or テキストノードにする"string"
*/

// Modules & var
const _doc = document;

function makeElement(tagName, ...args){
	const doc = this instanceof HTMLDocument ?
		this:
		_doc;
	if(typeof tagName!=='string'){
		throw new TypeError('invalid argument');
	}
	const element = doc.createElement(tagName);
	args.forEach( (arg)=>{
		if(typeof arg==='string'){
			element.appendChild( doc.createTextNode(arg) );
		}else if(arg instanceof Object){
			for(let [key, value] of Object.entries(arg)){
				if(typeof value==='string'){
					element.setAttribute(key, value);
				}else{
					element[key] = value;
				}
			}
		}else{
			throw new TypeError('invalid argument');
		}
	});
	return element;
}

export default makeElement;
