import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Timeline } from 'react-twitter-widgets';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
        
      <div>
      <Tabs>
        <TabList>
          <Tab><h4>asd</h4></Tab>
          <Tab><h4>TimeLine</h4></Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>          
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'kimuchni_w485'
            }}
            options={{
              username: 'kimuchni_w485',
              height: '1000' 
            }}
            onLoad={() => console.log('Timeline is loaded!')}
        />
</h2>
        </TabPanel>
      </Tabs>


    </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;