// Compiled by ClojureScript 1.10.339 {}
goog.provide('clj_words.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('clj_words.data');
clj_words.core.multiply = (function clj_words$core$multiply(a,b){
return (a * b);
});
clj_words.core.board_width = (14);
clj_words.core.board_height = (14);
clj_words.core.positions = (function clj_words$core$positions(){
var iter__4324__auto__ = (function clj_words$core$positions_$_iter__15395(s__15396){
return (new cljs.core.LazySeq(null,(function (){
var s__15396__$1 = s__15396;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15396__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__15396__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function clj_words$core$positions_$_iter__15395_$_iter__15397(s__15398){
return (new cljs.core.LazySeq(null,((function (s__15396__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__15398__$1 = s__15398;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15398__$1);
if(temp__5457__auto____$1){
var s__15398__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15398__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15398__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15400 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15399 = (0);
while(true){
if((i__15399 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__15399);
cljs.core.chunk_append.call(null,b__15400,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));

var G__15401 = (i__15399 + (1));
i__15399 = G__15401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15400),clj_words$core$positions_$_iter__15395_$_iter__15397.call(null,cljs.core.chunk_rest.call(null,s__15398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15400),null);
}
} else {
var j = cljs.core.first.call(null,s__15398__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),clj_words$core$positions_$_iter__15395_$_iter__15397.call(null,cljs.core.rest.call(null,s__15398__$2)));
}
} else {
return null;
}
break;
}
});})(s__15396__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__15396__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,clj_words.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,clj_words$core$positions_$_iter__15395.call(null,cljs.core.rest.call(null,s__15396__$1)));
} else {
var G__15402 = cljs.core.rest.call(null,s__15396__$1);
s__15396__$1 = G__15402;
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
});
clj_words.core.rand_fn = (function clj_words$core$rand_fn(){
return cljs.core.first.call(null,cljs.core.shuffle.call(null,cljs.core.keys.call(null,clj_words.data.fn_map)));
});
if((typeof clj_words !== 'undefined') && (typeof clj_words.core !== 'undefined') && (typeof clj_words.core.word !== 'undefined')){
} else {
clj_words.core.word = reagent.core.atom.call(null,clj_words.core.rand_fn.call(null));
}
if((typeof clj_words !== 'undefined') && (typeof clj_words.core !== 'undefined') && (typeof clj_words.core.orientation !== 'undefined')){
} else {
clj_words.core.orientation = reagent.core.atom.call(null,"across");
}
clj_words.core.word_down = (function clj_words$core$word_down(){
return cljs.core.zipmap.call(null,(function (){var iter__4324__auto__ = (function clj_words$core$word_down_$_iter__15403(s__15404){
return (new cljs.core.LazySeq(null,(function (){
var s__15404__$1 = s__15404;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15404__$1);
if(temp__5457__auto__){
var s__15404__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15404__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15404__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15406 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15405 = (0);
while(true){
if((i__15405 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__15405);
cljs.core.chunk_append.call(null,b__15406,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null));

var G__15411 = (i__15405 + (1));
i__15405 = G__15411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15406),clj_words$core$word_down_$_iter__15403.call(null,cljs.core.chunk_rest.call(null,s__15404__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15406),null);
}
} else {
var i = cljs.core.first.call(null,s__15404__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null),clj_words$core$word_down_$_iter__15403.call(null,cljs.core.rest.call(null,s__15404__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,clj_words.core.word))));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$word_down_$_iter__15407(s__15408){
return (new cljs.core.LazySeq(null,(function (){
var s__15408__$1 = s__15408;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15408__$1);
if(temp__5457__auto__){
var s__15408__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15408__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15408__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15410 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15409 = (0);
while(true){
if((i__15409 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__15409);
cljs.core.chunk_append.call(null,b__15410,cljs.core.nth.call(null,cljs.core.deref.call(null,clj_words.core.word),i));

var G__15412 = (i__15409 + (1));
i__15409 = G__15412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15410),clj_words$core$word_down_$_iter__15407.call(null,cljs.core.chunk_rest.call(null,s__15408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15410),null);
}
} else {
var i = cljs.core.first.call(null,s__15408__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,clj_words.core.word),i),clj_words$core$word_down_$_iter__15407.call(null,cljs.core.rest.call(null,s__15408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,clj_words.core.word))));
})());
});
clj_words.core.word_across = (function clj_words$core$word_across(){
return cljs.core.zipmap.call(null,(function (){var iter__4324__auto__ = (function clj_words$core$word_across_$_iter__15413(s__15414){
return (new cljs.core.LazySeq(null,(function (){
var s__15414__$1 = s__15414;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15414__$1);
if(temp__5457__auto__){
var s__15414__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15414__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15414__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15416 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15415 = (0);
while(true){
if((i__15415 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__15415);
cljs.core.chunk_append.call(null,b__15416,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null));

var G__15421 = (i__15415 + (1));
i__15415 = G__15421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15416),clj_words$core$word_across_$_iter__15413.call(null,cljs.core.chunk_rest.call(null,s__15414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15416),null);
}
} else {
var i = cljs.core.first.call(null,s__15414__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null),clj_words$core$word_across_$_iter__15413.call(null,cljs.core.rest.call(null,s__15414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,clj_words.core.word))));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$word_across_$_iter__15417(s__15418){
return (new cljs.core.LazySeq(null,(function (){
var s__15418__$1 = s__15418;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15418__$1);
if(temp__5457__auto__){
var s__15418__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15418__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15418__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15420 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15419 = (0);
while(true){
if((i__15419 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__15419);
cljs.core.chunk_append.call(null,b__15420,cljs.core.nth.call(null,cljs.core.deref.call(null,clj_words.core.word),i));

var G__15422 = (i__15419 + (1));
i__15419 = G__15422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15420),clj_words$core$word_across_$_iter__15417.call(null,cljs.core.chunk_rest.call(null,s__15418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15420),null);
}
} else {
var i = cljs.core.first.call(null,s__15418__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,clj_words.core.word),i),clj_words$core$word_across_$_iter__15417.call(null,cljs.core.rest.call(null,s__15418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,clj_words.core.word))));
})());
});
clj_words.core.rect_cell = (function clj_words$core$rect_cell(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"pink"], null)], null);
});
clj_words.core.text_cell = (function clj_words$core$text_cell(detected_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),0.5,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),1.25], null),detected_text], null);
});
clj_words.core.render_board = (function clj_words$core$render_board(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.board","svg.board",188703229),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_height)].join(''),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function clj_words$core$render_board_$_iter__15423(s__15424){
return (new cljs.core.LazySeq(null,(function (){
var s__15424__$1 = s__15424;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15424__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__15424__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function clj_words$core$render_board_$_iter__15423_$_iter__15425(s__15426){
return (new cljs.core.LazySeq(null,((function (s__15424__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__15426__$1 = s__15426;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15426__$1);
if(temp__5457__auto____$1){
var s__15426__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15426__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15426__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15428 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15427 = (0);
while(true){
if((i__15427 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__15427);
cljs.core.chunk_append.call(null,b__15428,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,clj_words.core.orientation),"across"))?cljs.core.get.call(null,clj_words.core.word_across.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)):cljs.core.get.call(null,clj_words.core.word_down.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))], null)], null));

var G__15429 = (i__15427 + (1));
i__15427 = G__15429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15428),clj_words$core$render_board_$_iter__15423_$_iter__15425.call(null,cljs.core.chunk_rest.call(null,s__15426__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15428),null);
}
} else {
var j = cljs.core.first.call(null,s__15426__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,clj_words.core.orientation),"across"))?cljs.core.get.call(null,clj_words.core.word_across.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)):cljs.core.get.call(null,clj_words.core.word_down.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))], null)], null),clj_words$core$render_board_$_iter__15423_$_iter__15425.call(null,cljs.core.rest.call(null,s__15426__$2)));
}
} else {
return null;
}
break;
}
});})(s__15424__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__15424__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,clj_words.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,clj_words$core$render_board_$_iter__15423.call(null,cljs.core.rest.call(null,s__15424__$1)));
} else {
var G__15430 = cljs.core.rest.call(null,s__15424__$1);
s__15424__$1 = G__15430;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function clj_words$core$word_search_$_new_word_click(e){
return cljs.core.reset_BANG_.call(null,clj_words.core.word,clj_words.core.rand_fn.call(null));
})], null),"New word"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function clj_words$core$word_search_$_orientation_toggle(e){
return cljs.core.reset_BANG_.call(null,clj_words.core.orientation,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,clj_words.core.orientation),"across"))?"down":"across"));
})], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,clj_words.core.orientation),"across"))?"Down":"Across")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.render_board], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.get.call(null,clj_words.data.fn_map,cljs.core.deref.call(null,clj_words.core.word))], null)], null);
});
/**
 * Returns true if letters of string b are contained in string a.
 */
clj_words.core.scramble_QMARK_ = (function clj_words$core$scramble_QMARK_(a,b){
return cljs.core.every_QMARK_.call(null,(function (p1__15431_SHARP_){
return (((cljs.core.contains_QMARK_.call(null,cljs.core.frequencies.call(null,a),p1__15431_SHARP_))?cljs.core.get.call(null,cljs.core.frequencies.call(null,a),p1__15431_SHARP_):(0)) >= cljs.core.get.call(null,cljs.core.frequencies.call(null,b),p1__15431_SHARP_));
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
