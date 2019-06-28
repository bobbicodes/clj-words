(ns ^:figwheel-hooks clj-words.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [clojure.set :as set]
   [clojure.string :as str]
   [clj-words.data :as data]))

(defn multiply [a b] (* a b))

(def board-width 14)
(def board-height 14)

(defn rand-fn []
  (first (shuffle (keys data/fn-map))))

(def word (rand-fn))

(def word-across
  (zipmap (for [i (range (count word))] [i 0])
    (for [i (range (count word))] (nth word i))))

(def second-word
  (loop [words (shuffle (keys data/fn-map))
       first-letter (first word)]
  (if (= (first (first words)) first-letter)
     (first words)
     (recur (rest words) first-letter))))

(def word-down
  (zipmap (for [i (range (count second-word))] [0 i])
          (for [i (range (count second-word))] (nth second-word i))))

(def two-words
  (into word-across word-down))

(defn rect-cell []
  [:rect
   {:width 2 :height 2
    :x -1 :y -1
    :stroke-width 0.05
    :stroke "black"
    :fill "pink"}])

(defn text-cell [detected-text]
  [:text
   {:y 0.5
    :text-anchor "middle"
    :fill "black"
    :font-size 1.25}
   detected-text])

(defn render-board []
  (into
   [:svg.board
    {:view-box (str "0 0 " board-width " " board-height)
     :shape-rendering "auto"
     :style {:max-height "500px"}}]
   (for [i (range board-width) j (range board-height)]
     [:g {:transform (str "translate(" i  "," j ") "
                          "scale (0.5)"
                          "translate(1,1)")}
      [rect-cell]
      [text-cell (get two-words [i j])]])))

(defn word-search []
  [:center
   [:div [render-board]]
   [:div [:p "Across:" ]
         [:p (get data/fn-map word)]
         [:p "Down:"]
          [:p (get data/fn-map second-word)]]])

(defn scramble?
  "Returns true if letters of string b are contained in string a."
  [a b]
  (every? #(>= (if (contains? (frequencies a) %)
                 (get (frequencies a) %)
                 0)
               (get (frequencies b) %)) (keys (frequencies b))))

[(rand-fn) (rand-fn)]

;(let [common-letters (set/intersection
;                      (set (seq (rand-fn)))
;                      (set (seq (rand-fn))))]


(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [word-search] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
