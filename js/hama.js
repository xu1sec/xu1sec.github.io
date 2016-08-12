/**
 * @preserve Hama.js
 * @version 0.4
 * @copyright ████████ 2015 [All Rights Reserved]
 */
var quote;
//《蛤王名言》
hama.quote = [
"你们给我续的这个命啊...Excited！",
"你们这些苍蝇啊，Naive！",
"你一定要问我苍蝇好吃不好吃，我只能回答你一句“无可奉告”。",
"你们给我搞的这个苍蝇...Excited！",
"捕蝇还是要按照池塘的基本法。",
"Too simple, sometimes naive！",
"你问我资瓷不资瓷，我缩资瓷！",
"你们啊，不要..想..喜欢...弄个大苍蝇，说现在已经喂食了，就把我巴结一番！",
"我告诉你们我是身经百战了，见得苍蝇多了！",
"苍蝇他们..你们要知道，美国的那些苍蝇，那比你们不知高到哪里去了！",
"美国的蝇莱士，我给它谈笑风生。",
"作为一个长者，我..有这个必要告诉你们一点，捕蝇的经验。",
"中国有句古话叫作“闷声捕苍蝇”，我就什么声也不叫，这是坠吼的！懂了没有啊？",
"你们呐，Naive!",
"你们比其它的西方苍蝇，跑的还快！",
"你们我感觉你们苍蝇啊，要还是要提高自己的逃跑水平。",
"很惭愧，就捕了一点微小的苍蝇。"
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