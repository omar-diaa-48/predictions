
const ResultsPage = (props) => {
    const {results} = props;

    if(!results || results.length === 0){
        return <div>No results</div>
    }

    return (
        <div>Results</div>
    )
}

export default ResultsPage;