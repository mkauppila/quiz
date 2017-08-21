(ns quiz.quiz
  (:import (java.util UUID)))

; example mock data of a quiz
(def example-quiz
  {:game-id "some id"
   :name "Name of the game"
   :description "Describe the what the quiz is about"
   :questions [{:question "What would Jesus do?"
                :answers [{:answer "Resurrect"}
                          {:answer "Kill the zombies" :correct true}
                          {:answer "Drink wine before the apocalypse"}]}]})

(defn generate-session-id []
  (.toString (UUID/randomUUID)))

(defn quiz-def-for-game-id [game-id]
  ; just return the example quiz for now
  example-quiz)

(defn start-new-game [game-id]
  (let [quiz-def (quiz-def-for-game-id game-id)]
    {:name (-> :name quiz-def)
     :session-id (generate-session-id)}))

(defn sanitize-answers [answers]
  (map #(dissoc %1 :correct) answers))

(defn new-question-for-game [session-id]
  ; get the correct question for the session id
  ; CURRENTLY, JUST RETURN THE FIRST ONE
  ; Find out the game id and the proper question for the game
  (let [quiz-def (quiz-def-for-game-id "is needed here?")
        questions (quiz-def :questions)
        first-question (first questions)]
    {:question (-> :question first-question)
     :answers (sanitize-answers (-> :answers first-question))}))




