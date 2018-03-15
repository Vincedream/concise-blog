import React from 'react';
import QueueAnim from 'rc-queue-anim';
import styled from "styled-components";

export default class InitCate extends React.Component{

    render(){
        const Box = styled.div`
            width:600px;
            padding-top:200px;
            margin-left:180px;
            text-align:center;
            span{
                color:#8a8a8a;
            }
        `;
        return(
            <div>
                <QueueAnim type={'bottom'} delay={300} >
                <Box key={'1'} >
                        <span>
                        Pick one you like
                        </span>
                </Box>
                </QueueAnim>
            </div>
        )
    }
}