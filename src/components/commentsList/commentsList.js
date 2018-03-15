import React from 'react';
import styled from 'styled-components';
class CommentsList extends React.Component{
    render(){
        const CommentBox = styled.div`
            width:100%;
            margin: 10px 0;
            h4{
                padding-left:15px;
            }
        `;
        const Comment = styled.div`
            width:100%;
            padding:2px 30px;
            font-size:15px;
            margin-top:-5px;
        `;
        const Time = styled.div`
        width:100%;
        height:30px;
        padding-right:25px;
        box-sizing:border-box;
            span{
                float:right;
                color:#8e8e8e;
            }
        `;
        const Line = styled.div`
            margin: 0 auto;
            width:93%;
            height:1px;
            border-top:1px solid #ececec;
        `;
        return(
            <div>
                <h2 style={{margin:"20px 0"}}>Comments :</h2>
                {this.props.Data.map(v=>(
                    <CommentBox key={v._id}>
                    <h4>
                        ***{v.email.slice(3, v.email.length)}
                    </h4>
                    <Comment>
                    {v.content}
                    </Comment>
                    <Time>
                        <span>{v.time}</span>
                    </Time>
                    <Line/>
                    </CommentBox>
                ))}
                
            </div>
        )
    }
}

export default CommentsList