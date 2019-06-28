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

(defn second-word [s]
  (loop [words (shuffle (keys data/fn-map))
         first-letter (first s)]
    (if (= (first (first words)) first-letter)
       (first words)
       (recur (rest words) first-letter))))

(def words
  (let [word1 (rand-fn)]
    (atom {:word-1-across word1
           :word-1-down (second-word word1)})))

(defn word-across [s]
  (zipmap (for [i (range (count s))] [i 0])
          (for [i (range (count s))] (nth s i))))

(defn word-down [s]
    (zipmap (for [i (range (count s))] [0 i])
            (for [i (range (count s))] (nth s i))))

(defn two-words []
  (into (word-across (:word-1-across @words)) (word-down (:word-1-down @words))))

(def answer-toggle (atom :off))

(defn rect-cell [[i j]]
  [:rect
   {:width 2 :height 2
    :x -1 :y -1
    :stroke-width 0.05
    :stroke "black"
    :fill (if (get (two-words) [i j])
    "white" "pink")}])

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
      [rect-cell [i j]]
      (if (= :on @answer-toggle)
        [text-cell (get (two-words) [i j])])])))

(defn word-search []
  [:center
    [:h1 "Clj-words"]
   [:div [render-board]]
   [:div [:p "Across:" ]
         [:p (get data/fn-map (:word-1-across @words))]
         [:p "Down:"]
          [:p (get data/fn-map (:word-1-down @words))]]
          [:button
            {:on-click
              #(reset! answer-toggle :on)}
            "Answer"]
            [:button
              {:on-click
                #(do (reset! words
                       (let [word1 (rand-fn)]
                         {:word-1-across word1
                          :word-1-down (second-word word1)}))
                     (reset! answer-toggle :off))}
              "New"]])

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
