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
clj_words.core.word = clj_words.core.rand_fn.call(null);
clj_words.core.word_across = cljs.core.zipmap.call(null,(function (){var iter__4324__auto__ = (function clj_words$core$iter__13989(s__13990){
return (new cljs.core.LazySeq(null,(function (){
var s__13990__$1 = s__13990;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13990__$1);
if(temp__5457__auto__){
var s__13990__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13990__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13990__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13992 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13991 = (0);
while(true){
if((i__13991 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__13991);
cljs.core.chunk_append.call(null,b__13992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null));

var G__13997 = (i__13991 + (1));
i__13991 = G__13997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13992),clj_words$core$iter__13989.call(null,cljs.core.chunk_rest.call(null,s__13990__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13992),null);
}
} else {
var i = cljs.core.first.call(null,s__13990__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null),clj_words$core$iter__13989.call(null,cljs.core.rest.call(null,s__13990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,clj_words.core.word)));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$iter__13993(s__13994){
return (new cljs.core.LazySeq(null,(function (){
var s__13994__$1 = s__13994;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13994__$1);
if(temp__5457__auto__){
var s__13994__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13994__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13994__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13996 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13995 = (0);
while(true){
if((i__13995 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__13995);
cljs.core.chunk_append.call(null,b__13996,cljs.core.nth.call(null,clj_words.core.word,i));

var G__13998 = (i__13995 + (1));
i__13995 = G__13998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13996),clj_words$core$iter__13993.call(null,cljs.core.chunk_rest.call(null,s__13994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13996),null);
}
} else {
var i = cljs.core.first.call(null,s__13994__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,clj_words.core.word,i),clj_words$core$iter__13993.call(null,cljs.core.rest.call(null,s__13994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,clj_words.core.word)));
})());
clj_words.core.second_word = (function (){var words = cljs.core.shuffle.call(null,cljs.core.keys.call(null,clj_words.data.fn_map));
var first_letter = cljs.core.first.call(null,clj_words.core.word);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,words)),first_letter)){
return cljs.core.first.call(null,words);
} else {
var G__13999 = cljs.core.rest.call(null,words);
var G__14000 = first_letter;
words = G__13999;
first_letter = G__14000;
continue;
}
break;
}
})();
clj_words.core.word_down = cljs.core.zipmap.call(null,(function (){var iter__4324__auto__ = (function clj_words$core$iter__14001(s__14002){
return (new cljs.core.LazySeq(null,(function (){
var s__14002__$1 = s__14002;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14002__$1);
if(temp__5457__auto__){
var s__14002__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14002__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14002__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14004 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14003 = (0);
while(true){
if((i__14003 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__14003);
cljs.core.chunk_append.call(null,b__14004,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null));

var G__14009 = (i__14003 + (1));
i__14003 = G__14009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14004),clj_words$core$iter__14001.call(null,cljs.core.chunk_rest.call(null,s__14002__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14004),null);
}
} else {
var i = cljs.core.first.call(null,s__14002__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null),clj_words$core$iter__14001.call(null,cljs.core.rest.call(null,s__14002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,clj_words.core.second_word)));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$iter__14005(s__14006){
return (new cljs.core.LazySeq(null,(function (){
var s__14006__$1 = s__14006;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14006__$1);
if(temp__5457__auto__){
var s__14006__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14006__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14006__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14008 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14007 = (0);
while(true){
if((i__14007 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__14007);
cljs.core.chunk_append.call(null,b__14008,cljs.core.nth.call(null,clj_words.core.second_word,i));

var G__14010 = (i__14007 + (1));
i__14007 = G__14010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14008),clj_words$core$iter__14005.call(null,cljs.core.chunk_rest.call(null,s__14006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14008),null);
}
} else {
var i = cljs.core.first.call(null,s__14006__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,clj_words.core.second_word,i),clj_words$core$iter__14005.call(null,cljs.core.rest.call(null,s__14006__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,clj_words.core.second_word)));
})());
clj_words.core.two_words = cljs.core.into.call(null,clj_words.core.word_across,clj_words.core.word_down);
clj_words.core.rect_cell = (function clj_words$core$rect_cell(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"pink"], null)], null);
});
clj_words.core.text_cell = (function clj_words$core$text_cell(detected_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),0.5,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),1.25], null),detected_text], null);
});
clj_words.core.render_board = (function clj_words$core$render_board(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.board","svg.board",188703229),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_height)].join(''),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function clj_words$core$render_board_$_iter__14011(s__14012){
return (new cljs.core.LazySeq(null,(function (){
var s__14012__$1 = s__14012;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14012__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__14012__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function clj_words$core$render_board_$_iter__14011_$_iter__14013(s__14014){
return (new cljs.core.LazySeq(null,((function (s__14012__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__14014__$1 = s__14014;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14014__$1);
if(temp__5457__auto____$1){
var s__14014__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14014__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14014__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14016 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14015 = (0);
while(true){
if((i__14015 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__14015);
cljs.core.chunk_append.call(null,b__14016,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,cljs.core.get.call(null,clj_words.core.two_words,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))], null)], null));

var G__14017 = (i__14015 + (1));
i__14015 = G__14017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14016),clj_words$core$render_board_$_iter__14011_$_iter__14013.call(null,cljs.core.chunk_rest.call(null,s__14014__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14016),null);
}
} else {
var j = cljs.core.first.call(null,s__14014__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,cljs.core.get.call(null,clj_words.core.two_words,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))], null)], null),clj_words$core$render_board_$_iter__14011_$_iter__14013.call(null,cljs.core.rest.call(null,s__14014__$2)));
}
} else {
return null;
}
break;
}
});})(s__14012__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__14012__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,clj_words.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,clj_words$core$render_board_$_iter__14011.call(null,cljs.core.rest.call(null,s__14012__$1)));
} else {
var G__14018 = cljs.core.rest.call(null,s__14012__$1);
s__14012__$1 = G__14018;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.render_board], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Across:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,clj_words.data.fn_map,clj_words.core.word)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Down:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,clj_words.data.fn_map,clj_words.core.second_word)], null)], null)], null);
});
/**
 * Returns true if letters of string b are contained in string a.
 */
clj_words.core.scramble_QMARK_ = (function clj_words$core$scramble_QMARK_(a,b){
return cljs.core.every_QMARK_.call(null,(function (p1__14019_SHARP_){
return (((cljs.core.contains_QMARK_.call(null,cljs.core.frequencies.call(null,a),p1__14019_SHARP_))?cljs.core.get.call(null,cljs.core.frequencies.call(null,a),p1__14019_SHARP_):(0)) >= cljs.core.get.call(null,cljs.core.frequencies.call(null,b),p1__14019_SHARP_));
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
