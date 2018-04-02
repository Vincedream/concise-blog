import React from "react";
import axios from "../../config/axios";
import ContentBox from "../../components/article/contentBox";
import ArticleComments from "../../components/comment/articleComments";
import CommentInp from "../../components/comment/commentInput";
import LoadSlogon from "../../components/loadSlogon"

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      comments: [],
      content: "",
      email: "",
      errMsg:"",
      buttonText:"提交",
      buttonDis: false
    };
  }
  async getArticle(id) {
    const article = axios.get("/article/" + id);
    let result = await article;
    this.setState({
      data: result.data.article,
      comments: result.data.article.comments
    });
  }
  checkInfo(email, content) {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!reg.test(email)) {
      this.setState({
        errMsg: '请填写正确邮箱'
      })
      return false
    } else if (content.replace(/(^\s*)|(\s*$)/g, "").length===0) {
      this.setState({
        errMsg: '请填写评论内容'
      })
      return false
    } else {
      this.setState({
        errMsg: ''
      })
      return true
    }
  }
  async submitComment() {
    let email = this.refs.commentInp.refs.emailInp.value
    let content = this.refs.commentInp.refs.contentInp.value
    let checkBox = this.refs.commentInp.refs.checkBox.checked
    console.log(checkBox)
    if (this.checkInfo(email,content)) {  // 当检测通过后
      const date = new Date()
      let subData = {
        email,
        content,
        createDate: date.toLocaleDateString(),
        articleId: this.props.match.params.id,
        subscribe: checkBox
      }
      const subComent = axios.post('/comment',subData)
      // 阻止用户重复点击
      this.setState({
        buttonDis: true,
        buttonText: '正在提交'
      })
      
      try {
        
        let result = await subComent
        if (result.status === 201) {
          // 清空输入框
          this.refs.commentInp.refs.emailInp.value = ''
          this.refs.commentInp.refs.contentInp.value = ''
          this.setState({
            buttonText:'提交成功',
            buttonDis: false,
          })
          // 临时数据，评论后当即显示，不在此发送请求
          let newCom = {_id:content,...subData}
          let temp = (this.state.comments).slice(0)
          temp.push(newCom)
          this.setState({
          })
          setTimeout(()=>{
            console.log('eee')
            this.setState({
              buttonText:'提交',
            comments: temp
              
            })
          },500)
        }
      } catch (e) {
        if(e.response){  //请求发出去后收到服务器错误响应
          this.setState({
            errMsg: '服务器错误，博主正在认真维护',
            buttonText:'提交',
            buttonDis: false
          })
        } else {  // 请求发送失败本地错误响应
          this.setState({
            errMsg: '网络太差啦',
            buttonText:'提交',
            buttonDis: false
          })
        }
      }
    }
  }
  handleInput(key, e) {
    this.setState({
      [key]: e.target.value
    });
  }
  componentDidMount() {
    this.getArticle(this.props.match.params.id);
    let docH = document.body.scrollHeight, //滚动条自身高度
    scrollTop = document.body.scrollTop;  //滚动条滚动高度
    console.log(scrollTop)
  }
  handleScroll(e){
    console.log('aaa')
    let clientHeight = this.refs.aaa.clientHeight; //可视区域高度
    let scrollTop  = this.refs.aaa.scrollTop;  //滚动条滚动高度
    let scrollHeight = this.refs.aaa.scrollHeight; //滚动内容高度
    if((clientHeight+scrollTop)==(scrollHeight)){} //如果滚动到底部 }
    console.log(scrollTop)  

}
  render() {
    if(Object.keys(this.refs).length!==0){
      setTimeout(()=>{
        console.log(this.refs.aaa.clientHeight)
      },110)
    }
    
    return (
      
      <div ref="aaa" onScroll={this.handleScroll.bind(this)} style={{overflow: "scroll",width: "760px",position: "absolute",left: "50%",marginTop: "330px",marginLeft: "-380px"}}>
        {this.state.data ? (
       <div>
          <ContentBox data={this.state.data} />
        <ArticleComments commentsList={this.state.comments} />
        <CommentInp
          ref="commentInp"
          errMsg={this.state.errMsg}
          buttonText={this.state.buttonText}
          buttonDis={this.state.buttonDis}
          submitComment={this.submitComment.bind(this)}
        />
       </div>
      ):
      <LoadSlogon text="加载中，请稍后..." />
      }
      </div>
    );
  }
}

export default About;
