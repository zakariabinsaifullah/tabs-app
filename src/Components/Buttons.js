const Buttons = ({ years, onClickFunc, currentItem }) => {
    return (
        <div className="btn-wrapper">
            {
                years.map((year, index) =>{
                    const activeClass = index === currentItem ? 'active' : null;
                    return(
                        <button key={index} onClick={ ()=> onClickFunc(index) } className={activeClass} >{year}</button>
                    )
                })
            }
        </div>
    )
}
export default Buttons;