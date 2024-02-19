const List = (val:string[]) => {
    //console.log(typeof(val))
    return(
        <>
            <div>
                {Object.keys(val)}
            </div>
        </>
    )
    
}
export default List;