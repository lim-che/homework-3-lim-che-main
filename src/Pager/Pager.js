import { Component } from 'react';
import './Pager.css';
import axios from 'axios';

const pages = 12;
const counts = [];
const numberPerPage = 6;
const currentPage = 1;
const numberPages = Math.ceil(counts.length/ numberPerPage);
for (let i = 1; i <= pages; i++){
  counts.push(<li className="group">${i}</li>)
}
console.log(counts);



const buildPage = (curPage) => {
  const trimEnd = curPage + numberPerPage - 1;
  console.log(counts.slice(curPage - 1, trimEnd))
}
buildPage(2);




class Pager extends Component {
  render() {
    return (
      <div className="pagers">
        <a href=".">&laquo;</a>
        <a href=".">1</a>
        <a href=".">2</a>
        <a href=".">3</a>
        <a href=".">4</a>
        <a href=".">5</a>
        <a href=".">6</a>
        <a href=".">&raquo;</a>
      </div>

      
    );
  }
}

export default Pager;
