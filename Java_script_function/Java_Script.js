//BIBD Winner Function
function BIBD_Winner() 

{
	
var display = ["BIBI", "HAFIZ", "ADLY", "SYAFIQ", "FADLY", "T.A MATEEN", "T.A HAZMAN", "MINA", "TIYAH", "AMIRUL", "FAEZ", "MADIRAH", "WANEE", "REENA", "WAIE", "HAKAM", "MARDIAH", "LEON WONG", "RAIMI", "FARIHIN"];
	
document.getElementById('display_name').innerHTML = display[Math.floor(Math.random() * display.length)] + "";

document.getElementById("txt_name_display").value = document.getElementById('display_name').innerHTML;


}