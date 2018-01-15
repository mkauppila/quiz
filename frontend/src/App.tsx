import * as React from 'react';
import { injectGlobal, ThemeProvider } from './styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'
import theme from './theme'
import List from './components/quizList'
import Quiz from './components/quiz'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Vollkorn+SC:600,700');
  @import url('https://fonts.googleapis.com/css?family=Lora');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Lora', 'serif';
  }
`

export default () => (
  <StoreProvider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/quiz" component={Quiz} />
          <Route render={() => <p>Nothing to see here</p>}/>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>
)
