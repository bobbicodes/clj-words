(ns ^:figwheel-hooks clj-words.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [clojure.set :as set]
   [clj-words.data :as data]))

(defn multiply [a b] (* a b))

(def board-width 12)
(def board-height 12)

(defn positions []
   (for [i (range board-width) j (range board-height)]
     [j i]))

(defn rand-fn []
  (first (shuffle (keys data/fn-map))))

(defonce word (atom (rand-fn)))

(defn text []
  (str @word
    (apply str (repeat (- (* board-width board-height) (count @word)) " "))))

(defn init-matrix []
  (into {}
        (map vector
             (positions)
             (text))))

(defonce app-state (atom (init-matrix)))

(defn rect-cell [app-state pos condition]
  [:rect
   {:width 2
    :height 2
    :x -1
    :y -1
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

(defn render-board [app-state]
  (into
   [:svg.board
    {:view-box (str "0 0 " board-width " " board-height)
     :shape-rendering "auto"
     :style {:max-height "500px"}}]
   (for [[[i j] condition] app-state]
     [:g {:transform (str "translate(" i  "," j ") "
                          "scale (0.5)"
                          "translate(1,1)")}
      [rect-cell app-state [i j] condition]
      [text-cell (str (get app-state [i j]))]])))

(defn word-search []
  [:center
   [:button
    {:on-click
     (fn new-game-click [e]
       (reset! word (rand-fn))
       (reset! app-state (init-matrix)))}
    "Reset"]
   [:div [render-board @app-state]]
   [:div (get data/fn-map @word)]])

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
