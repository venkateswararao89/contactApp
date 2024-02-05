import {render,screen} from "@testing-library/react";

import App from "./App";

import renderer from '@testing-library/react'


describe("App component testing",() => {
  test("snapshottesting fr App component",() => {
    const Appcomponent = render.create(<Router><App/></Router>).toJSON();
    expect(Appcomponent).toMatchSnapshot();

  })

  test("snapshottesting fr App component",() => {
    const Appcomponent =  mount
    (<Router>
      <App/>
      </Router>);
    

  })
  test("Render Header Component",() => {
   shallow(<Header/>)   

  })
  test("Render h1 element",() => {
    let app = shallow(<App/>);
    let helo = <h1>Hello</h1>
   expect(app.contains(helo)).toEqual(true);
 
   })

   test("Render p element",() => {
    let app = shallow(<App/>);
    let helo = <h1>Hello</h1>
   expect(app.find(helo)).tobe("venkateswarara");
 
   })
   test("Testing state in class cmponent",() => {
    let app = shallow(<App/>);
   
   expect(app.state("username")).tobe("venkateswarara");
 
   })
})







