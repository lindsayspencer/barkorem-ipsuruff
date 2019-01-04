import React from 'react';
import './Generator.css';

const Generator = (props) => {
    console.log(props);
    return(
        <div>
            <form className="flexform">
                <div className="pad">
                <label htmlFor="paragraphs"><h4>How many paragraphs?</h4></label><br />
                    <select value={props.paragraphNumber} onChange={props.onNumberChange} className="ui dropdown">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </div>
                <div className="pad">
                <label htmlFor="size"><h4>What size should they be?</h4></label><br />
                <select value={props.paragraphSize} onChange={props.onSizeChange} className="ui dropdown">
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
                </div>
                <div className="pad">
                    <button className="ui animated fade button" onClick={(e) => props.onResetClick(e)}>
                        <div className="visible content">Reset</div>
                        <div className="hidden content">
                            <i className="undo icon"></i>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
};


export default Generator;