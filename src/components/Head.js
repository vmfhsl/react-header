import React from 'react';

const Head = ({serch}) => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1" >
          <a href="http://localhost:3000/" className="btn btn-ghost normal-case text-xl">
            instargram
         
          </a>
          
        </div>
        <div className="flex-none gap-2">
        <a href="#">HOME</a>
        <a href="#">DM</a>
        <a href="#">ADD</a>
            <button ><a href="#">SERCH</a></button>
            {/* onClick={()=>{serch()}} */}
            <a href="#">login</a>
          <div className="form-control">
          
            <input type="text" placeholder="검색" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a href="https://www.instagram.com/anjjaaang/" className="justify-between">
                  프로필
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>저장됨</a></li>
              <li><a>설정</a></li>
              <li><a>계정변환</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Head;