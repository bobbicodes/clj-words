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
clj_words.core.board_width = (12);
clj_words.core.board_height = (12);
clj_words.core.positions = (function clj_words$core$positions(){
var iter__4324__auto__ = (function clj_words$core$positions_$_iter__13919(s__13920){
return (new cljs.core.LazySeq(null,(function (){
var s__13920__$1 = s__13920;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13920__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13920__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function clj_words$core$positions_$_iter__13919_$_iter__13921(s__13922){
return (new cljs.core.LazySeq(null,((function (s__13920__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__13922__$1 = s__13922;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13922__$1);
if(temp__5457__auto____$1){
var s__13922__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13922__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13922__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13924 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13923 = (0);
while(true){
if((i__13923 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__13923);
cljs.core.chunk_append.call(null,b__13924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));

var G__13928 = (i__13923 + (1));
i__13923 = G__13928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13924),clj_words$core$positions_$_iter__13919_$_iter__13921.call(null,cljs.core.chunk_rest.call(null,s__13922__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13924),null);
}
} else {
var j = cljs.core.first.call(null,s__13922__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),clj_words$core$positions_$_iter__13919_$_iter__13921.call(null,cljs.core.rest.call(null,s__13922__$2)));
}
} else {
return null;
}
break;
}
});})(s__13920__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__13920__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,clj_words.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,clj_words$core$positions_$_iter__13919.call(null,cljs.core.rest.call(null,s__13920__$1)));
} else {
var G__13929 = cljs.core.rest.call(null,s__13920__$1);
s__13920__$1 = G__13929;
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
if((typeof clj_words !== 'undefined') && (typeof clj_words.core !== 'undefined') && (typeof clj_words.core.app_state !== 'undefined')){
} else {
clj_words.core.app_state = reagent.core.atom.call(null,clj_words.core.init_matrix.call(null));
}
if((typeof clj_words !== 'undefined') && (typeof clj_words.core !== 'undefined') && (typeof clj_words.core.word !== 'undefined')){
} else {
clj_words.core.word = reagent.core.atom.call(null,clj_words.core.rand_fn.call(null));
}
clj_words.core.text = (function clj_words$core$text(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clj_words.core.word)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((clj_words.core.board_width * clj_words.core.board_height) - cljs.core.count.call(null,cljs.core.deref.call(null,clj_words.core.word)))," ")))].join('');
});
clj_words.core.down = (function clj_words$core$down(){
var iter__4324__auto__ = (function clj_words$core$down_$_iter__13931(s__13932){
return (new cljs.core.LazySeq(null,(function (){
var s__13932__$1 = s__13932;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13932__$1);
if(temp__5457__auto__){
var s__13932__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13932__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13932__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13934 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13933 = (0);
while(true){
if((i__13933 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__13933);
cljs.core.chunk_append.call(null,b__13934,cljs.core.swap_BANG_.call(null,clj_words.core.app_state,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null),cljs.core.nth.call(null,cljs.core.deref.call(null,clj_words.core.word),i)));

var G__13935 = (i__13933 + (1));
i__13933 = G__13935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13934),clj_words$core$down_$_iter__13931.call(null,cljs.core.chunk_rest.call(null,s__13932__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13934),null);
}
} else {
var i = cljs.core.first.call(null,s__13932__$2);
return cljs.core.cons.call(null,cljs.core.swap_BANG_.call(null,clj_words.core.app_state,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null),cljs.core.nth.call(null,cljs.core.deref.call(null,clj_words.core.word),i)),clj_words$core$down_$_iter__13931.call(null,cljs.core.rest.call(null,s__13932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,clj_words.core.word))));
});
clj_words.core.init_matrix = (function clj_words$core$init_matrix(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,clj_words.core.positions.call(null),clj_words.core.text.call(null)));
});
clj_words.core.rect_cell = (function clj_words$core$rect_cell(app_state,pos,condition){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"pink"], null)], null);
});
clj_words.core.text_cell = (function clj_words$core$text_cell(detected_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),0.5,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),1.25], null),detected_text], null);
});
clj_words.core.render_board = (function clj_words$core$render_board(app_state){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.board","svg.board",188703229),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_height)].join(''),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function clj_words$core$render_board_$_iter__13940(s__13941){
return (new cljs.core.LazySeq(null,(function (){
var s__13941__$1 = s__13941;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13941__$1);
if(temp__5457__auto__){
var s__13941__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13941__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13941__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13943 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13942 = (0);
while(true){
if((i__13942 < size__4323__auto__)){
var vec__13944 = cljs.core._nth.call(null,c__4322__auto__,i__13942);
var vec__13947 = cljs.core.nth.call(null,vec__13944,(0),null);
var i = cljs.core.nth.call(null,vec__13947,(0),null);
var j = cljs.core.nth.call(null,vec__13947,(1),null);
var condition = cljs.core.nth.call(null,vec__13944,(1),null);
cljs.core.chunk_append.call(null,b__13943,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),condition], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))].join('')], null)], null));

var G__13956 = (i__13942 + (1));
i__13942 = G__13956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13943),clj_words$core$render_board_$_iter__13940.call(null,cljs.core.chunk_rest.call(null,s__13941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13943),null);
}
} else {
var vec__13950 = cljs.core.first.call(null,s__13941__$2);
var vec__13953 = cljs.core.nth.call(null,vec__13950,(0),null);
var i = cljs.core.nth.call(null,vec__13953,(0),null);
var j = cljs.core.nth.call(null,vec__13953,(1),null);
var condition = cljs.core.nth.call(null,vec__13950,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),condition], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))].join('')], null)], null),clj_words$core$render_board_$_iter__13940.call(null,cljs.core.rest.call(null,s__13941__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,app_state);
})());
});
clj_words.core.word_search = (function clj_words$core$word_search(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function clj_words$core$word_search_$_new_game_click(e){
cljs.core.reset_BANG_.call(null,clj_words.core.word,clj_words.core.rand_fn.call(null));

return cljs.core.reset_BANG_.call(null,clj_words.core.app_state,clj_words.core.init_matrix.call(null));
})], null),"Reset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.render_board,cljs.core.deref.call(null,clj_words.core.app_state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.get.call(null,clj_words.data.fn_map,cljs.core.deref.call(null,clj_words.core.word))], null)], null);
});
/**
 * Returns true if letters of string b are contained in string a.
 */
clj_words.core.scramble_QMARK_ = (function clj_words$core$scramble_QMARK_(a,b){
return cljs.core.every_QMARK_.call(null,(function (p1__13957_SHARP_){
return (((cljs.core.contains_QMARK_.call(null,cljs.core.frequencies.call(null,a),p1__13957_SHARP_))?cljs.core.get.call(null,cljs.core.frequencies.call(null,a),p1__13957_SHARP_):(0)) >= cljs.core.get.call(null,cljs.core.frequencies.call(null,b),p1__13957_SHARP_));
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

//# sourceMappingURL=core8876F88.js.map
