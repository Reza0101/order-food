const Information = ({setPage}: any) => {
    return (
        <div onClick={() => setPage((prev: number) => prev + 1)}>
            Information
            
        </div>
    )
}

export default Information