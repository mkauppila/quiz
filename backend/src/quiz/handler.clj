(ns quiz.handler
  (:require [compojure.api.sweet :refer :all]
            [ring.util.http-response :refer :all]
            [schema.core :as s]
            [quiz.response-schemes :as response-type] [quiz.quiz :refer :all]))

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
        :return response-type/Start
        :query-params [game-id :- s/Str]
        :summary "Start a game with given identifier and return a session identifier"
        (ok (start-new-game game-id)))

      (GET "/question" []
        :return response-type/Question
        :query-params [session-id :- s/Str]
        :summary "Get next question for the given session identifier"
        (ok (new-question-for-game session-id))))))

