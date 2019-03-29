import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

      
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Qaiser Habib</h2>


            <Education
              
            
              schoolName=" First Hobby "
              schoolDescription="My favourite hobby is playing football in spare time. I generally spend my lot of free time in playing football. I was so interested to play football from my childhood."
               />

               <Education
                 
                 schoolName="Second Hobby"
                 schoolDescription="My hobby is reading whether it is news paper, news, novels, G K book or any knowledgeable book written by any good author. I always read story books, news paper, magazines, and any other material that I find interesting in my free time."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Zain ul Abaideen</h2>

            <Experience
             
              jobName="First Hobby"
              jobDescription="My hobby is reading interesting and knowledgeable books in my free time. Through books reading nobody can feel alone and disturb. I think this habit is more precious than gold or other precious stones of the world."
              />

              <Experience
                
                jobName="Second Hobby"
                jobDescription="My hobby is watching TV. I like very much to watch TV in my free time. Watching TV is my hobby however it never interfere with my study."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
