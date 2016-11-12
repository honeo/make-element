/*
	エレメントを作るぞ
		引数
			1: タグ名
			2~: 属性の{key:value} or テキストノードにする"string" or 挿入するnode
*/

function makeElement(tagName, ...args){
	const doc = document;
	if(typeof tagName!=='string'){
		throw new TypeError('Invalid argument');
	}
	const element = doc.createElement(tagName);
	args.forEach( (arg)=>{
		if(typeof arg==='string'){
			element.append( doc.createTextNode(arg) );
		}else if(arg instanceof Object){
			for(let [key, value] of Object.entries(arg)){
				if(typeof value==='string'){
					element.setAttribute(key, value);
				}else{
					element[key] = value;
				}
			}
		}else if( arg instanceof Node ){
			element.append(arg);
		}else{
			throw new TypeError('Invalid argument');
		}
	});
	return element;
}

export default makeElement;
