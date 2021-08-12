const Tabs = ({tabs, value}) => {
    const tab = tabs[value];
    return(
        <div className="single-tab">
            <h4>{tab.title}</h4>
            <p>{tab.desc}</p>
        </div>
    )
}
export default Tabs;