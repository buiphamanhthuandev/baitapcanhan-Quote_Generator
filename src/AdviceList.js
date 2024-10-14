export const AdviceList = (props)=>{
    const randomAdvice = props.randomAdvice;
    const currentAdvice = props.currentAdvice;
    return (
        <div className="content">
            {currentAdvice ? (
                <div>
                    <h5 className="title">Advice #{currentAdvice.id}</h5>
                    <h4>{currentAdvice.name}</h4>
                </div>
            ):
                <div>
                    <h5 className="title">Advice #{randomAdvice.id}</h5>
                    <h4>{randomAdvice.name}</h4>
                </div>
            }
            <svg className="desktop" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            <svg className="mobile" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        
    )
}