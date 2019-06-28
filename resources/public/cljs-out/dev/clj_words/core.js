// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clj_words.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return cljs.core.first(cljs.core.shuffle(cljs.core.keys(clj_words.data.fn_map)));
});
clj_words.core.second_word = (function clj_words$core$second_word(s){
var words = cljs.core.shuffle(cljs.core.keys(clj_words.data.fn_map));
var first_letter = cljs.core.first(s);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.first(words)),first_letter)){
return cljs.core.first(words);
} else {
var G__10410 = cljs.core.rest(words);
var G__10411 = first_letter;
words = G__10410;
first_letter = G__10411;
continue;
}
break;
}
});
clj_words.core.words = (function (){var word1 = clj_words.core.rand_fn();
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$word_DASH_1_DASH_across,word1,cljs.core.cst$kw$word_DASH_1_DASH_down,clj_words.core.second_word(word1)], null));
})();
clj_words.core.word_across = (function clj_words$core$word_across(s){
return cljs.core.zipmap((function (){var iter__4324__auto__ = (function clj_words$core$word_across_$_iter__10412(s__10413){
return (new cljs.core.LazySeq(null,(function (){
var s__10413__$1 = s__10413;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10413__$1);
if(temp__5457__auto__){
var s__10413__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10413__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10413__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10415 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10414 = (0);
while(true){
if((i__10414 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10414);
cljs.core.chunk_append(b__10415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null));

var G__10420 = (i__10414 + (1));
i__10414 = G__10420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10415),clj_words$core$word_across_$_iter__10412(cljs.core.chunk_rest(s__10413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10415),null);
}
} else {
var i = cljs.core.first(s__10413__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(0)], null),clj_words$core$word_across_$_iter__10412(cljs.core.rest(s__10413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s)));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$word_across_$_iter__10416(s__10417){
return (new cljs.core.LazySeq(null,(function (){
var s__10417__$1 = s__10417;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10417__$1);
if(temp__5457__auto__){
var s__10417__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10417__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10417__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10419 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10418 = (0);
while(true){
if((i__10418 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10418);
cljs.core.chunk_append(b__10419,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i));

var G__10421 = (i__10418 + (1));
i__10418 = G__10421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10419),clj_words$core$word_across_$_iter__10416(cljs.core.chunk_rest(s__10417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10419),null);
}
} else {
var i = cljs.core.first(s__10417__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i),clj_words$core$word_across_$_iter__10416(cljs.core.rest(s__10417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s)));
})());
});
clj_words.core.word_down = (function clj_words$core$word_down(s){
return cljs.core.zipmap((function (){var iter__4324__auto__ = (function clj_words$core$word_down_$_iter__10422(s__10423){
return (new cljs.core.LazySeq(null,(function (){
var s__10423__$1 = s__10423;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10423__$1);
if(temp__5457__auto__){
var s__10423__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10423__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10423__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10425 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10424 = (0);
while(true){
if((i__10424 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10424);
cljs.core.chunk_append(b__10425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null));

var G__10430 = (i__10424 + (1));
i__10424 = G__10430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10425),clj_words$core$word_down_$_iter__10422(cljs.core.chunk_rest(s__10423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10425),null);
}
} else {
var i = cljs.core.first(s__10423__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),i], null),clj_words$core$word_down_$_iter__10422(cljs.core.rest(s__10423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s)));
})(),(function (){var iter__4324__auto__ = (function clj_words$core$word_down_$_iter__10426(s__10427){
return (new cljs.core.LazySeq(null,(function (){
var s__10427__$1 = s__10427;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10427__$1);
if(temp__5457__auto__){
var s__10427__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10427__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10427__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10429 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10428 = (0);
while(true){
if((i__10428 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10428);
cljs.core.chunk_append(b__10429,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i));

var G__10431 = (i__10428 + (1));
i__10428 = G__10431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10429),clj_words$core$word_down_$_iter__10426(cljs.core.chunk_rest(s__10427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10429),null);
}
} else {
var i = cljs.core.first(s__10427__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i),clj_words$core$word_down_$_iter__10426(cljs.core.rest(s__10427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s)));
})());
});
clj_words.core.two_words = (function clj_words$core$two_words(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(clj_words.core.word_across(cljs.core.cst$kw$word_DASH_1_DASH_across.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clj_words.core.words))),clj_words.core.word_down(cljs.core.cst$kw$word_DASH_1_DASH_down.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clj_words.core.words))));
});
clj_words.core.answer_toggle = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$off);
clj_words.core.rect_cell = (function clj_words$core$rect_cell(p__10432){
var vec__10433 = p__10432;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10433,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10433,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(2),cljs.core.cst$kw$height,(2),cljs.core.cst$kw$x,(-1),cljs.core.cst$kw$y,(-1),cljs.core.cst$kw$stroke_DASH_width,0.05,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$fill,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clj_words.core.two_words(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?"white":"pink")], null)], null);
});
clj_words.core.text_cell = (function clj_words$core$text_cell(detected_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$fill,"black",cljs.core.cst$kw$font_DASH_size,1.25], null),detected_text], null);
});
clj_words.core.render_board = (function clj_words$core$render_board(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$board,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_height)].join(''),cljs.core.cst$kw$shape_DASH_rendering,"auto",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function clj_words$core$render_board_$_iter__10436(s__10437){
return (new cljs.core.LazySeq(null,(function (){
var s__10437__$1 = s__10437;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10437__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10437__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function clj_words$core$render_board_$_iter__10436_$_iter__10438(s__10439){
return (new cljs.core.LazySeq(null,((function (s__10437__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10439__$1 = s__10439;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10439__$1);
if(temp__5457__auto____$1){
var s__10439__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10439__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10439__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10441 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10440 = (0);
while(true){
if((i__10440 < size__4323__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10440);
cljs.core.chunk_append(b__10441,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on,cljs.core.deref(clj_words.core.answer_toggle)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clj_words.core.two_words(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))], null):null)], null));

var G__10442 = (i__10440 + (1));
i__10440 = G__10442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10441),clj_words$core$render_board_$_iter__10436_$_iter__10438(cljs.core.chunk_rest(s__10439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10441),null);
}
} else {
var j = cljs.core.first(s__10439__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rect_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on,cljs.core.deref(clj_words.core.answer_toggle)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.text_cell,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clj_words.core.two_words(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))], null):null)], null),clj_words$core$render_board_$_iter__10436_$_iter__10438(cljs.core.rest(s__10439__$2)));
}
} else {
return null;
}
break;
}
});})(s__10437__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10437__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,clj_words$core$render_board_$_iter__10436(cljs.core.rest(s__10437__$1)));
} else {
var G__10443 = cljs.core.rest(s__10437__$1);
s__10437__$1 = G__10443;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clj_words.core.board_width));
})());
});
clj_words.core.word_search = (function clj_words$core$word_search(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Clj-words"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.render_board], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Across:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clj_words.data.fn_map,cljs.core.cst$kw$word_DASH_1_DASH_across.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clj_words.core.words)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Down:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clj_words.data.fn_map,cljs.core.cst$kw$word_DASH_1_DASH_down.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clj_words.core.words)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(clj_words.core.answer_toggle,cljs.core.cst$kw$on);
})], null),"Answer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
cljs.core.reset_BANG_(clj_words.core.words,(function (){var word1 = clj_words.core.rand_fn();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$word_DASH_1_DASH_across,word1,cljs.core.cst$kw$word_DASH_1_DASH_down,clj_words.core.second_word(word1)], null);
})());

return cljs.core.reset_BANG_(clj_words.core.answer_toggle,cljs.core.cst$kw$off);
})], null),"New"], null)], null);
});
/**
 * Returns true if letters of string b are contained in string a.
 */
clj_words.core.scramble_QMARK_ = (function clj_words$core$scramble_QMARK_(a,b){
return cljs.core.every_QMARK_((function (p1__10444_SHARP_){
return (((cljs.core.contains_QMARK_(cljs.core.frequencies(a),p1__10444_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.frequencies(a),p1__10444_SHARP_):(0)) >= cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.frequencies(b),p1__10444_SHARP_));
}),cljs.core.keys(cljs.core.frequencies(b)));
});
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.rand_fn(),clj_words.core.rand_fn()], null);
clj_words.core.get_app_element = (function clj_words$core$get_app_element(){
return goog.dom.getElement("app");
});
clj_words.core.mount = (function clj_words$core$mount(el){
var G__10445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_words.core.word_search], null);
var G__10446 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10445,G__10446) : reagent.core.render_component.call(null,G__10445,G__10446));
});
clj_words.core.mount_app_element = (function clj_words$core$mount_app_element(){
var temp__5457__auto__ = clj_words.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return clj_words.core.mount(el);
} else {
return null;
}
});
clj_words.core.mount_app_element();
clj_words.core.on_reload = (function clj_words$core$on_reload(){
return clj_words.core.mount_app_element();
});
