/**
 * @preserve Hama.js
 * @version 0.3
 * @copyright Skygate [All Rights Reserved]
 */
var quote;
//《蛤王名言》
hama.quote = [
"你们给我续的这个命啊，Excited！",
"你们这些苍蝇啊，Naive！",
"你问我苍蝇好不好吃，我只能说无可奉告。",
"你们给我搞的这个苍蝇啊，Excited！",
"捕蝇也是要按照你们池塘的基本法。",
"Sometimes Naive！",
"你问我资瓷不资瓷，我当然资瓷！",
"你们不要总想弄个大苍蝇，把我巴结一番！",
"我告诉你们 我可是身经百战了，苍蝇见得多了。",
"人家美国的那些苍蝇，比你们不知高到哪里去了。",
"美国的蝇莱士，我照样和它谈笑风生。",
"作为一个长者，我有必要传授给你们一些捕蝇经验。",
"中国有句古话，叫作闷声捕苍蝇，这句话是最好的！懂了没有啊？",
"你们呐，图样图森破。",
"你们比大陆的苍蝇跑的都快。",
"我觉得你们苍蝇啊，要提高自己的逃跑水平，不要总是想把别人批判一番。"
];
/****************************/
var n = Math.round(Math.random() *hama.quote.length-1);
function hama() {
	if(n == hama.quote.length-1) {
		n = -1;
	}
	var wrr = hama.quote[n+=1];
	document.getElementById('Stage_wrr').innerHTML=wrr;
}