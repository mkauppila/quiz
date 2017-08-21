(ns quiz.response-schemes
  (:require [schema.core :as s]))

(s/defschema Start
  {:name s/Str
   :session-id s/Str})

(s/defschema Answer
  {:answer s/Str})

(s/defschema Question
  {:question s/Str
   :answers [Answer]})


