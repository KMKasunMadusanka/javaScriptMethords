function removeSpecialCharacter( JSON, colArray,char){

	for(var j=0;j<colArray.length;j++){
		for(var i=0;i<JSON.length;i++){
			
				JSON[i][colArray[j]]=JSON[i][colArray[j]].replace(char,'');
	
			}
	}
	
	return JSON;
}

