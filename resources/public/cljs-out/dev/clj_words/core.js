// Compiled by ClojureScript 1.10.339 {}
goog.provide('clj_words.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clj_words.data');
clj_words.core.multiply = (function clj_words$core$multiply(a,b){
return (a * b);
});
clj_words.core.board_width = (14);
clj_words.core.board_height = (14);
clj_words.core.rand_fn = (function clj_words$core$rand_fn(){
return cljs.core.first.call(null,cljs.core.shuffle.call(null,cljs.core.keys.call(null,clj_words.data.fn_map)));
});
clj_words.core.second_word = (function clj_words$core$second_word(s){
var words = cljs.core.shuffle.call(null,cljs.core.keys.call(null,clj_words.data.fn_map));
var first_letter = cljs.core.first.call(null,s);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,words)),first_letter)){
return cljs.core.first.call(null,words);
} else {
var G__14764 = cljs.core.rest.call(null,words);
var G__14765 = first_letter;
words = G__14764;
first_letter = G__14765;
continue;
}
break;
}
});
clj_words.core.words = (function (){var word1 = clj_words.core.rand_fn.call(null);
return reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word-1-across","word-1-across",-575083221),word1,new cljs.core.Keyword(null,"word-1-down","word-1-down",-2017288022),clj_words.core.second_word.call(null,word1)], null));
})();
clj_words.core.word_across = (function clj_words$core$word_across(s){
return cljs.core.zipmap.call(null,(function (){var iter__4324__auto__ = (function clj_words$core$word_across_$_iter__14766(s__14767){
return (new cljs.core.LazySeq(null,(function (){
var s__14767__$1 = s__14767;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14767__$1);
if(temp__5457__auto__){
var s__14767__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14767__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14767__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14769 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14768 = (0);
while(true){
if((i__14768 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__14768);
cljs.core.chunk_append.call(null,b__14769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null));

var G__14774 = (i__14768 + (1));
i__14768 = G__14774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14769),clj_words$core$word_across_$_iter__14766.call(null,cljs.core.chunk_rest.call(null,s__14767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14769),null);
}
} else {
var i = cljs.core.first.call(null,s__14767__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null),clj_words$core$word_across_$_iter__14766.call(null,cljs.core.rest.call(null,s__14767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$word_across_$_iter__14770(s__14771){
return (new cljs.core.LazySeq(null,(function (){
var s__14771__$1 = s__14771;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14771__$1);
if(temp__5457__auto__){
var s__14771__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14771__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14771__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14773 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14772 = (0);
while(true){
if((i__14772 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__14772);
cljs.core.chunk_append.call(null,b__14773,cljs.core.nth.call(null,s,i));

var G__14775 = (i__14772 + (1));
i__14772 = G__14775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14773),clj_words$core$word_across_$_iter__14770.call(null,cljs.core.chunk_rest.call(null,s__14771__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14773),null);
}
} else {
var i = cljs.core.first.call(null,s__14771__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,s,i),clj_words$core$word_across_$_iter__14770.call(null,cljs.core.rest.call(null,s__14771__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)));
})());
});
clj_words.core.word_down = (function clj_words$core$word_down(s){
return cljs.core.zipmap.call(null,(function (){var iter__4324__auto__ = (function clj_words$core$word_down_$_iter__14776(s__14777){
return (new cljs.core.LazySeq(null,(function (){
var s__14777__$1 = s__14777;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14777__$1);
if(temp__5457__auto__){
var s__14777__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14777__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14777__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14779 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14778 = (0);
while(true){
if((i__14778 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__14778);
cljs.core.chunk_append.call(null,b__14779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null));

var G__14784 = (i__14778 + (1));
i__14778 = G__14784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14779),clj_words$core$word_down_$_iter__14776.call(null,cljs.core.chunk_rest.call(null,s__14777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14779),null);
}
} else {
var i = cljs.core.first.call(null,s__14777__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null),clj_words$core$word_down_$_iter__14776.call(null,cljs.core.rest.call(null,s__14777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$word_down_$_iter__14780(s__14781){
return (new cljs.core.LazySeq(null,(function (){
var s__14781__$1 = s__14781;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14781__$1);
if(temp__5457__auto__){
var s__14781__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14781__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14781__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14783 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14782 = (0);
while(true){
if((i__14782 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__14782);
cljs.core.chunk_append.call(null,b__14783,cljs.core.nth.call(null,s,i));

var G__14785 = (i__14782 + (1));
i__14782 = G__14785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14783),clj_words$core$word_down_$_iter__14780.call(null,cljs.core.chunk_rest.call(null,s__14781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14783),null);
}
} else {
var i = cljs.core.first.call(null,s__14781__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,s,i),clj_words$core$word_down_$_iter__14780.call(null,cljs.core.rest.call(null,s__14781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)));
})());
});
clj_words.core.two_words = (function clj_words$core$two_words(){
return cljs.core.into.call(null,clj_words.core.word_across.call(null,new cljs.core.Keyword(null,"word-1-across","word-1-across",-575083221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clj_words.core.words))),clj_words.core.word_down.call(null,new cljs.core.Keyword(null,"word-1-down","word-1-down",-2017288022).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clj_words.core.words))));
});
clj_words.core.answer_toggle = reagent.core.atom.call(null,new cljs.core.Keyword(null,"off","off",606440789));
clj_words.core.rect_cell = (function clj_words$core$rect_cell(p__14786){
var vec__14787 = p__14786;
var i = cljs.core.nth.call(null,vec__14787,(0),null);
var j = cljs.core.nth.call(null,vec__14787,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(cljs.core.get.call(null,clj_words.core.two_words.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?"white":"pink")], null)], null);
});
clj_words.core.text_cell = (function clj_words$core$text_cell(detected_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),0.5,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),1.25], null),detected_text], null);
});
clj_words.core.render_board = (function clj_words$core$render_board(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.board","svg.board",188703229),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_height)].join(''),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function clj_words$core$render_board_$_iter__14790(s__14791){
return (new cljs.core.LazySeq(null,(function (){
var s__14791__$1 = s__14791;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14791__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__14791__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function clj_words$core$render_board_$_iter__14790_$_iter__14792(s__14793){
return (new cljs.core.LazySeq(null,((function (s__14791__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__14793__$1 = s__14793;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14793__$1);
if(temp__5457__auto____$1){
var s__14793__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14793__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14793__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14795 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14794 = (0);
while(true){
if((i__14794 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__14794);
cljs.core.chunk_append.call(null,b__14795,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.deref.call(null,clj_words.core.answer_toggle)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,cljs.core.get.call(null,clj_words.core.two_words.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))], null):null)], null));

var G__14796 = (i__14794 + (1));
i__14794 = G__14796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14795),clj_words$core$render_board_$_iter__14790_$_iter__14792.call(null,cljs.core.chunk_rest.call(null,s__14793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14795),null);
}
} else {
var j = cljs.core.first.call(null,s__14793__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.deref.call(null,clj_words.core.answer_toggle)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,cljs.core.get.call(null,clj_words.core.two_words.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))], null):null)], null),clj_words$core$render_board_$_iter__14790_$_iter__14792.call(null,cljs.core.rest.call(null,s__14793__$2)));
}
} else {
return null;
}
break;
}
});})(s__14791__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__14791__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,clj_words.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,clj_words$core$render_board_$_iter__14790.call(null,cljs.core.rest.call(null,s__14791__$1)));
} else {
var G__14797 = cljs.core.rest.call(null,s__14791__$1);
s__14791__$1 = G__14797;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,clj_words.core.board_width));
})());
});
clj_words.core.word_search = (function clj_words$core$word_search(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Clj-words"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.render_board], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Across:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,clj_words.data.fn_map,new cljs.core.Keyword(null,"word-1-across","word-1-across",-575083221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clj_words.core.words)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Down:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,clj_words.data.fn_map,new cljs.core.Keyword(null,"word-1-down","word-1-down",-2017288022).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clj_words.core.words)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,clj_words.core.answer_toggle,new cljs.core.Keyword(null,"on","on",173873944));
})], null),"Answer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,clj_words.core.words,(function (){var word1 = clj_words.core.rand_fn.call(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word-1-across","word-1-across",-575083221),word1,new cljs.core.Keyword(null,"word-1-down","word-1-down",-2017288022),clj_words.core.second_word.call(null,word1)], null);
})());

return cljs.core.reset_BANG_.call(null,clj_words.core.answer_toggle,new cljs.core.Keyword(null,"off","off",606440789));
})], null),"New"], null)], null);
});
/**
 * Returns true if letters of string b are contained in string a.
 */
clj_words.core.scramble_QMARK_ = (function clj_words$core$scramble_QMARK_(a,b){
return cljs.core.every_QMARK_.call(null,(function (p1__14798_SHARP_){
return (((cljs.core.contains_QMARK_.call(null,cljs.core.frequencies.call(null,a),p1__14798_SHARP_))?cljs.core.get.call(null,cljs.core.frequencies.call(null,a),p1__14798_SHARP_):(0)) >= cljs.core.get.call(null,cljs.core.frequencies.call(null,b),p1__14798_SHARP_));
}),cljs.core.keys.call(null,cljs.core.frequencies.call(null,b)));
});
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rand_fn.call(null),clj_words.core.rand_fn.call(null)], null);
clj_words.core.get_app_element = (function clj_words$core$get_app_element(){
return goog.dom.getElement("app");
});
clj_words.core.mount = (function clj_words$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.word_search], null),el);
});
clj_words.core.mount_app_element = (function clj_words$core$mount_app_element(){
var temp__5457__auto__ = clj_words.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return clj_words.core.mount.call(null,el);
} else {
return null;
}
});
clj_words.core.mount_app_element.call(null);
clj_words.core.on_reload = (function clj_words$core$on_reload(){
return clj_words.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
