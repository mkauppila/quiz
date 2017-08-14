(ns quiz.handler
  (:require [compojure.api.sweet :refer :all]
            [ring.util.http-response :refer :all]
            [schema.core :as s]))

(s/defschema Start
  {:name s/Str
   :session-id s/Str})

(s/defschema Answer
  {:answer s/Str})

(s/defschema Question
  {:question s/Str
   :answers [Answer]})

(defn mock-start []
  {:name "hello world quiz"
   :session-id "foobar"})

(defn mock-question []
  {:question "What would Jesus do?"
   :answers [{:answer "A"}
             {:answer "B"}
             {:answer "C"}]})

(def app
  (api
    {:swagger
     {:ui "/"
      :spec "/swagger.json"
      :data {:info {:title "Quiz"
                    :description "API for Quiz app"}
             :tags [{:name "api", :description "default api"}]}}}

    (context "/api" []
      :tags ["api"]

      (GET "/start" []
        :return Start
        :query-params [game-id :- s/Str]
        :summary "Start a game with given identifier and return a session identifier"
        (ok (mock-start)))

      (GET "/question" []
        :return Question
        :query-params [session-id :- s/Str]
        :summary "Get next question for the given session identifier"
        (ok (mock-question))))))

