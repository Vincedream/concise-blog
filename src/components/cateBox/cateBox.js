import React from 'react';
import styled from "styled-components";
import QueueAnim from 'rc-queue-anim';

export default class CateBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            whitch:''
        }
    }
    clickCate=(cate)=>()=>{
        this.setState({
            whitch:cate
        });
        this.props.changeCate(cate)
    }
    render(){
        const Box = styled.div`
            width:600px;
            margin-left:180px;
            margin-top:30px;
            margin-bottom:30px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            
        `;
        const SingleCate = styled.span`
            display:inline-block;
            /* margin-left:20px; */
            box-sizing:border-box;
            /* padding:0 10px; */
            margin:0 10px;
            line-height: 30px;
            color:#8a8a8a;
            cursor: pointer;
            :hover{
                color:black;
                font-weight: 400;
            }
        `;
        const chosed={
            color:'black',
            fontWeight: '400'
        }
        return(
            <QueueAnim type={'bottom'}  >
            <div key='ags'>
                
               <Box>
               
                   {this.props.cateData.map(v=>{
                       if(this.props.choosed === v.cate){
                           return(
                            <SingleCate onClick={this.clickCate(v.cate)} style={chosed}  key={v.cate} >
                            {v.cate}  ({v.num})
                            </SingleCate>
                           )
                       }else{
                        return(
                            <SingleCate onClick={this.clickCate(v.cate)} key={v.cate} >
                            {v.cate}  ({v.num})
                            </SingleCate>
                           )
                       }
                    }
                   )}
                    
               </Box>
               
            </div>
            </QueueAnim>
        )
    }
}