/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // 当时间轴在此处结束时插入的代码将运行
         
      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hama}", "click", function(sym, e) {
         hama();
         sym.play('bb');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1360, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'hama'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play( "loop" );

      });
      //Edge binding end

   })("hama");
   //Edge symbol end:'hama'

   //=========================================================
   
   //Edge symbol: 'fly'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 175, function(sym, e) {
         sym.play('f');

      });
      //Edge binding end

   })("fly");
   //Edge symbol end:'fly'

   //=========================================================
   
   //Edge symbol: 'path'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         sym.play('path');

      });
      //Edge binding end

   })("path");
   //Edge symbol end:'path'

   //=========================================================
   
   //Edge symbol: 'pond'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5055, function(sym, e) {
         sym.play('loop')

      });
      //Edge binding end

   })("pond");
   //Edge symbol end:'pond'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "hama");