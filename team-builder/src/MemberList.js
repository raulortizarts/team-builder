import React from 'react';


function MemberList(props) {
    return (
        <div>
            {props.team.map((member, index) => (
                
                    <div className="members" key={index}>
                        
                        <div body className="text-center">
                             <h2> Name: {member.name}</h2>
                            <p>Email: {member.email}</p>
                            <p>Role: {member.role}</p>
        
                        </div> 
                                        
                    </div>
            ))}
        </div>
    )
}

export default MemberList;