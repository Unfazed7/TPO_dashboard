import React from 'react'
import './CSS/Content.css'
let stu_cnt=0;
const Content = () => {
  return (
    <div className='contnet_cnt'>
        <div className="card_cnt">
            <div className="card" id="card1">
                <h1 id="placement_cnt">0</h1>
                <h4>Total Placement Count</h4>
            </div>
            <div className="card" id="card1">
                <h1>20LPA</h1>
                <h4>Highest Package Offered</h4>
            </div>
            <div className="card" id="card1">
                <h1>6LPA</h1>
                <h4>Average Package Offered</h4>
            </div>
        </div>

        <div className="tbl_cnt">
            <table className='tbl'>
                <tr className='row'>
                    <th>Sr NO.</th>
                    <th>Name</th>
                    <th>Package</th>
                    <th>Batch</th>
                </tr>
                <tr className='row'>
                    <td>1</td>

                 

                    <td>Sujay  mane</td>

                    <td>50LPA</td>
                    <td>2024-2025</td>
                </tr>
                <tr className='row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>


        </div>
    </div>
  )
}
// document.getElementById('')
function func(){
    stu_cnt++;
    const htmlData=`
    <tr className='row'>
    <td>${stu_cnt}</td>
    <td>Sujay Asabe</td>
    <td>50LPA</td>
    <td>2024-2025</td>
    <td>IT</td>
    </tr>
    `;
    const tbl=document.querySelector('.tbl');
    tbl.insertAdjacentHTML('beforeend',htmlData);
    // console.log('event fired');
    document.getElementById('placement_cnt').innerHTML=stu_cnt;
}

export default Content
