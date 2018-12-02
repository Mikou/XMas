import React, {Component} from 'react';
import Slot from './Slot';
import styled, {createGlobalStyle} from 'styled-components';
import {BowlingBall, Rocket, FirstAid, Database, Dice, Dna, Dragon, Jedi} from 'styled-icons/fa-solid/index.cjs';
import darken from 'polished/lib/color/darken';
import Modal from './Modal';

const GlobalStyle = createGlobalStyle`

html, body {
  height:100%;

}
body {
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800|Source+Sans+Pro|Work+Sans:900');
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
`

const list = [
  { name: 'rocket', icon:'rocket', desc:'A rocket trip to Mars with Elon Musk', color:'#001f3f' },
  { name: 'firstaid', icon:'firstaid', desc:'A crash course in first aid.', color: '#0074D9' },
  { name: 'database', icon:'database', desc:'A crash course in relational algebra and the Boyce–Codd normal form', color: '#7FDBFF' },
  { name: 'bowlingball', icon:'bowlingball', desc:'Bowling in DGI Byen', color: '#39CCCC'},
  { name: 'dice', icon:'dice', desc: 'A crash course in statistics' , color: '#3D9970' },
  { name: 'dna', icon:'dna', desc: 'A crash course in ' , color: '#2ECC40' },
  { name: 'dragon', icon:'dragon', desc: 'A Special Christmas Dragon Hunt', color: '#01FF70'},
  { name: 'jedi',  icon:'jedi', desc: 'Intergalactic tour with Luke Skywalker.', color: '#FFDC00'}
];


const getIcon = (type, color = '#000', size = 64) => {
  switch(type) {
    case 'bowlingball':
      return <BowlingBall size={size} color={color}/>;
    case 'rocket':
      return <Rocket size={size} color={color}/>;
    case 'firstaid':
      return <FirstAid size={size} color={color}/>;
    case 'database':
      return <Database size={size} color={color}/>;
    case 'dice':
      return <Dice size={size} color={color}/>;
    case 'dna':
      return <Dna size={size} color={color}/>;
    case 'dragon':
      return <Dragon size={size} color={color}/>;
    case 'jedi':
      return <Jedi size={size} color={color}/>;
  }
}

const darkblue = '#283681';
const blue = '#3C7AB8';
const red = '#CB2C4B';

//https://codepen.io/Nickolyashka/pen/MryVEW
const Wrapper = styled.div`
  overflow-y:auto;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  &:after {
		background: repeating-linear-gradient(45deg, #fff , #fff 10px, ${blue} 0, ${blue} 20px, #fff 0, #fff 30px, ${red} 0, ${red} 40px);
		position: fixed;
		top: 0;
		left: 0;
    bottom:0;
    width:100%;
		content: "";
		z-index: -10;
  }
	&:before {
			background-color: #fff;
			position: fixed;
			top: 10px;
			left: 10px;
			height: calc(100% - 20px);
			width: calc(100% - 20px);
			content: "";
			z-index: -9;
			border-radius: 20px;
      background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
            radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    }
`;

const Slots = styled.div`
  background-color:white;
  display:flex;
  flex-direction:horizontal;
`;

const Container = styled.div`
  border:1px solid #000;
  outline: 1px dashed black;
  outline-offset: -5px;
  background:#eee;
  max-width:500px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  margin:6em auto;
  padding:20px;

`;

const Xmas = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 32px;
  display:inline-block;
  text-align:center;
  margin:2em auto 0;
  padding:.5em;
  color:#eee;
  background: ${darkblue};
`;

const Banner = styled.div`
  transform: rotate(-15deg);
  display:flex;
  flex-direction:column;
  width: 400px;
  height: 190px;
  margin-left: -440px;
  margin-top: -100px;
`;

const Ribbon = styled.div`
  display:inline-block;
  font-size: 16px !important;
  width: 30%;
  position: relative;
  background: ${red};
  color: #fff;
  text-align: center;
  padding: 1em 2em;
  margin: 0 auto 3em;
  &:before, &:after {
    content: "";
    position: absolute;
    display: block;
    bottom: -1em;
    border: 1.5em solid ${darken(0.2, red)};
    z-index: -1;
  }
  &:before {
    left: -2em;
    border-right-width: 1.5em;
    border-left-color: transparent;
  }
  &:after {
    right: -2em;
    border-left-width: 1.5em;
    border-right-color: transparent;
  }
`;

const RibbonInner = styled.div`

`;

const Branding = styled.div`
  border-top: 4px double #8a171c;
  border-bottom: 4px double #8a171c;
  text-align: center;
  margin: 1.74825vw;
  padding: 2.40%;
  text-transform:uppercase;
  & > .stars {
    color: #8a171c;
    display: flex;
    justify-content: space-around;
    font-size: 1em;
    max-width: 120px;
    background: #eee;
    padding: 0 0.667em;
    margin: 0 auto;
    margin-top: -1.6em;
  }
  & > .stars:last-of-type{
    margin-top: 0em;
    margin-bottom: -1.5em;
  }
  & > h1 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    letter-spacing: 0.2em;
    font-size:2.5em;
    margin:0;
  }
  & > h2 {
    font-size:1.5em;
    margin:0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const Rewards = styled.div`

`;

const VoteWrapper = styled.div`
  float:right;
  margin-top:15px;
  margin-right:-50px;
  border-radius:50%;
  height: 120px;
  width:120px;
  overflow:hidden;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  & > div {
    height:40px;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    text-transform:uppercase;
  }
  & > div:nth-child(2) {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    font-size:28px;
  }
  & > div:first-child {
    height:60px;
    color:white;
    background:${darkblue};
  }
  & > div:last-child {
    height:60px;
    color:white;
    background:${red};
  }
`;

const Vote = styled('button')`

`;


const StyledSlot = styled(Slot)`
  height:6em;
  width: 6em;
  background-color:lightblue;
  border:4px solid gold;
  margin:5px;
  background: #383838;
  background: -moz-linear-gradient(top, #383838 0%, #ffffff 30%, #ffffff 50%, #ffffff 69%, #ffffff 70%, #383838 100%);
  background: -webkit-linear-gradient(top, #383838 0%,#ffffff 30%,#ffffff 50%,#ffffff 69%,#ffffff 70%,#383838 100%);
  background: linear-gradient(to bottom, #383838 0%,#ffffff 30%,#ffffff 50%,#ffffff 69%,#ffffff 70%,#383838 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#383838', endColorstr='#383838',GradientType=0 );
`;

const SlotItem = styled.div`
  height:6em;
  width:100%;
  padding:1em;
`;

const Stamp = styled.button`
  margin-top:40px;
  margin-left:-40px;
  box-shadow: 0 0 0 3px ${red}, 0 0 0 2px ${red} inset;
  border: 2px solid transparent;
  border-radius: 4px;
  display: inline-block;
  padding: 5px 2px;
  line-height: 22px;
  color: ${red};
  font-size: 24px;
  font-family: 'Black Ops One', cursive;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.5;
  width: 155px;
  transform: rotate(-5deg);
`;

const RewardItem = styled.div`
  background:white;
  margin:.5em;
  padding:.5em;
  border-radius: 5px;
  box-shadow: inset 0 0 15px 0px rgba(40,41,45, 0.75);
`;

class SlotMachine extends Component {
  constructor() {
    super();
    this.state = {
      showModal:false,
      target: 3,
      times: 1,
      duration: 3000,
      turn: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }

  showModal = () => {
    this.setState({showModal:true});
  }

  hideModal = () => {
    this.setState({showModal:false});
  }

  renderSlotmachine() {
    return (
    <Wrapper>

      <Container>
        <Banner>
          <Xmas>Xmas</Xmas>
          <Ribbon><RibbonInner>Voting machine</RibbonInner></Ribbon>
        </Banner>
        <Branding>
          <div className="stars">
            <div>★</div>
            <div>★</div>
            <div>★</div>
            <div>★</div>
            <div>★</div>
          </div>
          <h2>Let's make</h2>
          <h1>Christmas</h1>
          <h2>Great!</h2>
          <div className="stars">
            <div>★</div>
            <div>★</div>
            <div>★</div>
            <div>★</div>
            <div>★</div>
          </div>
        </Branding>

        <div>
          <Slots>
            <StyledSlot
              className="slot"
              duration={3000}
              target={this.state.turn ? this.state.target : 4}
              times={20}
            >
              {list.map(({ name, icon, color }, index) => (
                <SlotItem key={index}>
                  {getIcon(icon, color)}
                </SlotItem>
              ))}
            </StyledSlot>

            <StyledSlot
              className="slot"
              duration={4000}
              target={this.state.turn ? this.state.target : 2}
              times={20}
            >
              {list.map(({ name, icon, color }, index) => (
                <SlotItem key={index}>
                  {getIcon(icon, color)}
                </SlotItem>
              ))}
            </StyledSlot>

            <StyledSlot
              className="slot"
              duration={5000}
              target={this.state.turn ? this.state.target : 1}
              times={20}
            >
              {list.map(({ name, icon, color }, index) => (
                <SlotItem key={index}>
                  {getIcon(icon, color)}
                </SlotItem>
              ))}
            </StyledSlot>
          </Slots>
          <Stamp onClick={this.showModal}>What can I vote for?</Stamp>
          <VoteWrapper onClick={e => this.setState({turn: true})}>
            <div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
            </div>
            <div>Vote</div>
            <div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
              <div>★</div>
            </div>
          </VoteWrapper>

        </div>
      </Container>
    </Wrapper>
  )
  }

  renderModal() {
    return (
      <Modal title="Candidate list" show={this.state.showModal} handleClose={this.hideModal}>
        {list.map(({ name, icon, desc, color }, index) => (
          <RewardItem key={index}>
            {getIcon(icon, color, 38)} {desc}
          </RewardItem>
        ))}
      </Modal>
    );
  }

  render() {
    return (
      <React.Fragment>
      <GlobalStyle />

      if(this.state.showModal) {
        this.renderModal()
      } else {
        this.renderSlotmachine()
      }
      </React.Fragment>

    );
  }
}

export default SlotMachine;
