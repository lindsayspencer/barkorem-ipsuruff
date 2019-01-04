import React from 'react';
import Image from './image';
import Generator from './Generator';
import Text from './Text';
import './TextGenerator.css';

let wordBank = "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

class TextGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            paragraphNumber: "",
            paragraphSize: "small",
            paragraphs: ""
        };
    }
    handleNumberChange = (e) => {
        e.preventDefault();
        this.setState({paragraphNumber: e.target.value}, this.barksum);
    }
    handleSizeChange = (e) => {
        e.preventDefault();
        this.setState({paragraphSize: e.target.value}, this.barksum);
    }
    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({ paragraphNumber: "", paragraphSize: "small", paragraphs: ""});
    }
    ipsum = (bank) => {
        let text = "";
        let number = this.state.paragraphNumber;
		if (number < 1) {
			this.setState({ paragraphs: text });
        }
        let size;
        if(this.state.paragraphSize === "large"){
            size = 6;
        } else if(this.state.paragraphSize === "small"){
            size = 2;
        } else {
            size = 4;
        }
		for (let i = 0; i < number; i++) {
			let paragraph = "";
			for (let j = 0; j < size; j++) {
				let sentence = "";
				let numWords = Math.floor(Math.random() * 6 + 10);
				for (let k = 0; k < numWords; k++) {
					let word = "";
					let wordNum = Math.floor(Math.random() * bank.length);
					word = bank[wordNum];
					if (k !== 0) {
						sentence += " ";
					}
					sentence += word;
				}
				sentence += ". ";
				sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
				paragraph += sentence;
                paragraph += " ";
                
			}
			// when sentence loop complete, added p tags for formatting and insert into text placeholder
			paragraph = "<p>" + paragraph + "</p> ";
			text += paragraph;
        }
        console.log(text);
		this.setState({ paragraphs: text });
    }
    barksum = () => {
        let wordArray = wordBank.split(" ");
        console.log(wordArray.length);
        let displayText = [];
        for(let i = 0; i < wordArray.length; i++){
            displayText.push(wordArray[i]);
        }


        let barkText = [];
        for(let i = 0; i < displayText.length; i++){
            let barkItem = displayText[i].replace(displayText[i].charAt(0), "bark");  
            barkText.push(barkItem);
        }
        let ruffText = [];
        for(let i = 0; i < displayText.length; i++){
            let ruffItem = displayText[i].replace(displayText[i].charAt(displayText[i].length - 1), "ruff");
            ruffText.push(ruffItem);
        }
        let puppyWordBank = barkText.concat(ruffText);
        console.log(puppyWordBank);
        this.ipsum(puppyWordBank);
    }
    render(){
        return(
            <div>
                <Generator onNumberChange={this.handleNumberChange} onSizeChange={this.handleSizeChange} onResetClick={this.handleResetClick} paragraphNumber={this.state.paragraphNumber} paragraphSize={this.state.paragraphSize} />
                <div className="flex-div">
                    <div className="left-div ui raised segment"><Text text={this.state.paragraphs} number={this.state.paragraphNumber} size={this.state.paragraphSize} /></div>
                    <div className="right-div" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}><Image className="right-div" /></div>
                </div>
            </div>
        );
    };
};

export default TextGenerator;