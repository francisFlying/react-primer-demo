import React from 'react';
import ReactDom from 'react-dom';

import CommentList from './components/CommentList.js';

//将虚拟DOM，挂载到页面的容器中
ReactDom.render(<div>
    <CommentList></CommentList>
</div>,document.getElementById('app'));