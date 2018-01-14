import * as React from 'react';
import styled, { injectGlobal, ThemeProvider } from './styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider as StoreProvider, Dispatch, connect } from 'react-redux'
import store, { State as AppState } from './store'
// import { bindActionCreators } from 'redux'
import theme from './theme'
import Title from './components/quiz/title'
import Question from './components/quiz/question'
import Answers from './components/quiz/answers'

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

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FlexWrapper = styled.div`
`

const ContentHtml = (props: /*AppState & { action: () => {} }*/ any) => (
  <FlexContainer>
    <FlexWrapper>
      <Title>{props.title}</Title>
      <Question>{props.question}</Question>
      <Answers answers={props.answers} action={props.actions} />
    </FlexWrapper>
  </FlexContainer>
)

const mapStateToProps = (state: AppState) => ({
  title: state.title,
  question: state.question,
  answers: state.answers
})

const actions = {
    actionA: {
      type: 'this-is-action'
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions:
    // bindActionCreators(actions as any, dispatch)
    () => {
      dispatch(actions.actionA as any)
    }

})

const content = connect(mapStateToProps, mapDispatchToProps)(ContentHtml as any)

export default () => (
  <StoreProvider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={content}/>
          <Route path="/next" component={content} />
          <Route render={() => <p>Nothing to see here</p>}/>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>
)