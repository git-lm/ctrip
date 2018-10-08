//判断网络工作情况
function checkNWI(){

	
	var currentType = plus.networkinfo.getCurrentType();
	
	var none = plus.networkinfo.CONNECTION_NONE
	var unbknow = plus.networkinfo.CONNECTION_UNKNOW
	var ethernet = plus.networkinfo.CONNECTION_ETHERNET
	var wifi = plus.networkinfo.CONNECTION_WIFI
	var cell2 = plus.networkinfo.CONNECTION_CELL2G
	var cell3 = plus.networkinfo.CONNECTION_CELL3G
	var cell4 = plus.networkinfo.CONNECTION_CELL4G
	if(none){
		return none;
	}else if(unbknow){
		return unbknow;
	}else if(ethernet){
		return ethernet;
	}else if(wifi){
		return wifi;
	}else if(cell2){
		return cell2;
	}else if(cell3){
		return cell3;
	}else if(cell4){
		return cell4;
	}
	
	
}
