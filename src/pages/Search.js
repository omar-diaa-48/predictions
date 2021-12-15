import { useState } from "react";
import { useNavigate } from "react-router";

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [predictions, setPredictions] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/results')
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h3 className="mbr-section-title mb-5 align-center mbr-fonts-style display-2"><strong>Arabic Autocomplete System</strong></h3>
                    <h4 className="mbr-section-subtitle mb-5 align-center mbr-fonts-style display-7">This is a language model which is built using N-grams. Just type some words and this model will predict top candidates of your next word.</h4>
                    {/* <div className="countdown-cont align-center mb-5">
                        <div className="daysCountdown col-xs-3 col-sm-3 col-md-3"></div>
                        <div className="hoursCountdown col-xs-3 col-sm-3 col-md-3"></div>
                        <div className="minutesCountdown col-xs-3 col-sm-3 col-md-3"></div>
                        <div className="secondsCountdown col-xs-3 col-sm-3 col-md-3"></div>
                        <div className="countdown"></div>
                    </div> */}
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 mx-auto mbr-form">
                    <form onSubmit={(e) => handleSubmit(e)} data-rcpha_sitekey="" data-rcpha_secretkey="" className="mbr-form form-with-styler">
                        <div className="row">
                            
                            <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">Oops...! some problem!</div>
                        </div>
                        <div className="dragArea row">
                            <div className="col form-group" data-for="email">
                                <input type="text" name="text" data-form-field="email" className="form-control" required="required" onChange={(e) => {setSearchText(e.target.value)}} value={searchText} id="email-countdown2-r" />
                            </div>
                            <div className="mbr-section-btn mt-3"><button type="submit" className="btn btn-warning display-4">Submit</button></div>
                        </div>

                        {
                            predictions && <p style={{textAlign:'center', marginTop:'16px', fontSize:'20px'}}>Your candidates are: <b style={{color: '#b81032'}}>{predictions}</b>.</p>
                        }                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;