import React from 'react';
import styled from "styled-components";
import QueueAnim from 'rc-queue-anim';

export default class About extends React.Component{

    render(){
        const AboutBox = styled.div`
            width:960px;
            margin-top:150px;
            text-align:center;
            p{
                font-size:15px;
                color:#5e656b;
            }
        `;
        return(
            <div>
               <AboutBox>
               <QueueAnim type={'bottom'} > 
                   <p key='a'>大三在读</p>
                   <p key='b'>站在巨人的肩膀上</p>
                   <p key='c'>E-mail: like@vince.studio</p>
                   <p key='d'>Blog Powered By React & Mongo</p>
               </QueueAnim>
               </AboutBox>
            </div>
        )
    }
}