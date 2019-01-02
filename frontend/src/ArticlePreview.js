import React,{Component} from 'react';
import './ArticlePreview.css';

function ArticlePreview(props){
    //暂时做成纯展示型组件，通过父组件传递对应的props显示内容
    return(
        //这里这个detail的对应如何实现值得思考，暂时不考虑实现，其实应该是发送利用路由导向不同ID的article
        //类别理论上是href，先不实现
        <div className="container1">
            <div className="title">
            <p>{props.title}</p>
            </div>
            <div className="info">
            <p className="cate">类别:{props.cate}</p>
            <p className="date">时间:{props.date}</p>
            </div>
            <a href="./detail.html" className="preview"><p>{props.preview}</p></a>
        </div>
    )
}
export default  ArticlePreview;