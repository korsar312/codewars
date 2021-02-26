/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(seconds) {
	let [hor,min,sec]=[0,0,seconds]
	revers()
	function revers(){
		if(sec>=60){min++; sec-=60; revers()}
		else if(min>=60) {hor++; min-=60; revers()}
	}
	let arr = [hor,min,sec].map((el)=>{
		if(el<10){
			return '0'+el
		}
		else{
			return el
		}
	}).join(':')
	return arr
}

//посмотрел решения и понял, что хеш это классная вещь