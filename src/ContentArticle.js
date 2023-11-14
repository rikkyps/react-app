import React from "react";

const ContentArticle = ({status ,children}) => {
    return <div style={{textAlign: 'justify'}}>
        {children}
        <p style={{color: 'blue'}}>{status}</p>
    </div>
}

export default ContentArticle