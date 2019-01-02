import React,{Component} from 'react';
import ArticlePreview from './ArticlePreview';
import {Grid,Row,Col} from 'react-bootstrap';
import axios from 'axios';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            //初始state要设置为null才可以
            blogList:{},
            page : 1
        }
    };
    componentDidMount(){
        var a = this;//传this
        axios({
            method:"GET",
            headers:{'Content-type':'application/json',},
            async:false,
            url:"http://localhost:3001/all",
            withCredentials:true
        }).then(function(res){
            console.log(res.data);
            a.setState({
                blogList:res.data
            })
        })
    }
    render(){
        
        var list = [];
        var i = 0;
        for(i=0;i<(this.state.page)*5;i++){
            if(this.state.blogList[i]!=null){
            var ArticlePreviewNow = <ArticlePreview title={this.state.blogList[i].title} date={this.state.blogList[i].date} cate={this.state.blogList[i].cate} preview = {this.state.blogList[i].preview}></ArticlePreview>
            list.push(ArticlePreviewNow);
            }
        }
        return(
            <Grid>  
                <Row>
                    <Col xs={10} xsOffset={1} md={8} xsOffset={2}>
                        {list}
                    </Col>
                </Row>
            </Grid>
        )
    }
} 
export default Main;
