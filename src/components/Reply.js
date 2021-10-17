import React from 'react';
import styled from 'styled-components';

const ReplySection = styled.div`

`;

function Reply() {
    return (
        <ReplySection>
            <h4>Leave a reply</h4>
            <form action="">
                <input type="text" placeholder="Name" name="name"/>
                <input type="text" placeholder="Email" name="email"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                <button>Comment</button>
                <div className="save">
                   <input type="checkbox" id="save"/> 
                   <label htmlFor="save">Save my name, email and website next time in the browser</label>
                </div>
                
            </form>
        </ReplySection>
    )
}

export default Reply
